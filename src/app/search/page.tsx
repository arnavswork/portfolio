'use client';

import { useSearchParams } from 'next/navigation';
import { projects } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProjectCard } from '@/components/project-card';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  if (!query) {
    return (
        <div className="text-center">
            <p className="text-lg text-muted-foreground">
                Please enter a search term.
            </p>
        </div>
    );
  }

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.client.toLowerCase().includes(query.toLowerCase()) ||
    p.discipline.toLowerCase().includes(query.toLowerCase()) ||
    p.sector.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1 className="font-headline text-4xl md:text-6xl font-bold mb-2 text-center">
        Search Results
      </h1>
      <p className="text-center text-muted-foreground mb-12">
        Found {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} for "{query}"
      </p>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center">
            <p className="text-lg text-muted-foreground">
                No projects match your search.
            </p>
        </div>
      )}
    </>
  );
}


export default function SearchPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
        <SiteHeader />
        <main className="flex-1">
            <div className="container mx-auto px-4 py-16 md:py-24">
               <Suspense fallback={<div className="text-center">Loading...</div>}>
                    <SearchResults />
                </Suspense>
            </div>
        </main>
        <SiteFooter />
        </div>
    );
}
