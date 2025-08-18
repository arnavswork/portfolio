import { projects } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary">{project.discipline}</Badge>
              <Badge variant="secondary">{project.sector}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-8">{project.client}</p>

            <div className="relative w-full mb-12">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1200}
                height={800}
                className="object-cover rounded-lg w-full h-auto"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
            
            <article className="prose prose-lg max-w-none">
              <p>This is a placeholder description for the project "{project.title}". Detailed information about the project goals, processes, and outcomes would be presented here. For now, we are showcasing the main project image and its key details.</p>
            </article>

          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
