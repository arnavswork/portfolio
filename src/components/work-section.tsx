'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Project } from '@/lib/data';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Filter, Search, X } from 'lucide-react';

interface WorkSectionProps {
  projects: Project[];
  disciplines: string[];
  showMoreButton?: boolean;
}

const INITIAL_VISIBLE_PROJECTS = 6;

export function WorkSection({
  projects,
  disciplines,
  showMoreButton = false,
}: WorkSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDisciplineChange = (discipline: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(discipline)
        ? prev.filter((d) => d !== discipline)
        : [...prev, discipline]
    );
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDisciplines([]);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDiscipline =
        selectedDisciplines.length === 0 ||
        selectedDisciplines.includes(project.discipline);
      return matchesSearch && matchesDiscipline;
    });
  }, [searchTerm, selectedDisciplines, projects]);

  const displayedProjects = showMoreButton
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects;

  const hasActiveFilters =
    searchTerm || selectedDisciplines.length > 0;

  const filtersContent = (
    <div className="space-y-8">
      <div>
        <h3 className="font-headline text-lg font-semibold mb-4">
          Discipline
        </h3>
        <div className="space-y-2">
          {disciplines.map((d) => (
            <div key={d} className="flex items-center space-x-2">
              <Checkbox
                id={`d-${d}`}
                checked={selectedDisciplines.includes(d)}
                onCheckedChange={() => handleDisciplineChange(d)}
              />
              <Label
                htmlFor={`d-${d}`}
                className="font-normal cursor-pointer"
              >
                {d}
              </Label>
            </div>
          ))}
        </div>
      </div>
      {hasActiveFilters && (
        <Button variant="outline" onClick={resetFilters} className="w-full">
          <X className="mr-2 h-4 w-4" /> Reset Filters
        </Button>
      )}
    </div>
  );

  return (
    <section id="work" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-center md:text-left">
          Our Work
        </h2>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search work..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-headline">
                    Filter Projects
                  </SheetTitle>
                </SheetHeader>
                <div className="py-4">{filtersContent}</div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-12 md:gap-8">
        <aside className="hidden md:block md:col-span-3 sticky top-24 self-start h-[calc(100vh-8rem)] overflow-y-auto pr-4">
          {isClient && filtersContent}
        </aside>

        <div className="md:col-span-9">
          {displayedProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No projects match your criteria.
              </p>
              <Button variant="link" onClick={resetFilters}>
                Clear all filters
              </Button>
            </div>
          )}
          {showMoreButton && visibleCount < filteredProjects.length && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => setVisibleCount(filteredProjects.length)}
              >
                Show More
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
