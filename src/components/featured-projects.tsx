'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const featuredProjects = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {featuredProjects.map((project, index) => (
        <div
          key={project.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
          )}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            data-ai-hint="architectural design"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-20">
        <h2 className="font-headline text-4xl md:text-6xl font-bold">
          {currentProject.title}
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mt-2">
          {currentProject.client}
        </p>
        <Link
          href={`/project/${currentProject.id}`}
          className="mt-6 inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          View Project
        </Link>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 text-white bg-black/20 hover:bg-black/40 border-none hover:text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 text-white bg-black/20 hover:bg-black/40 border-none hover:text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
