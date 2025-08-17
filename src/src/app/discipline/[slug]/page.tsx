import { disciplines, projects, Project } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProjectCard } from '@/components/project-card';
import { notFound } from 'next/navigation';

export default function DisciplinePage({ params }: { params: { slug: string } }) {
  const disciplineName = disciplines.find(d => d.toLowerCase().replace(/ & /g, '-') === params.slug);

  if (!disciplineName) {
    notFound();
  }

  const filteredProjects = projects.filter(p => p.discipline === disciplineName);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-12 text-center">
            Discipline: {disciplineName}
          </h1>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No projects found for this discipline.</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
