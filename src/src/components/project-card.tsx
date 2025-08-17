import type { Project } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <Card className="overflow-hidden group w-full transition-shadow duration-300 hover:shadow-xl rounded-lg">
        <CardContent className="p-0">
          <div
            className="relative overflow-hidden"
            style={{ paddingBottom: '100%' }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="p-4 bg-card">
            <h3 className="font-headline font-semibold text-lg truncate group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.client}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
