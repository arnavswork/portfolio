import Link from 'next/link';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { FeaturedProjects } from '@/components/featured-projects';
import { WorkSection } from '@/components/work-section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  contactInfo,
  disciplines,
  sectors,
  projects,
} from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section
          id="home"
          className="container mx-auto px-4 py-16 md:py-24 text-center"
        >
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
            A design studio with a global perspective.
          </h1>
          <FeaturedProjects />
        </section>

        <section id="about" className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
              We design everything for everyone.
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-12">
              StudioFlux is a multi-disciplinary design studio. Our collective of designers, writers, and strategists create work with purpose and impact. We believe in the power of design to connect people, create understanding, and shape a better future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-headline text-lg font-semibold mb-4">
                  Discipline
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {disciplines.map((d) => (
                    <Link href={`/discipline/${d.toLowerCase().replace(/ & /g, '-')}`} key={d}>
                      <Badge
                        variant="secondary"
                        className="text-sm px-4 py-1 cursor-pointer hover:bg-primary/10 transition-colors"
                      >
                        {d}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold mb-4">
                  Sector
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {sectors.map((s) => (
                     <Link href={`/sector/${s.toLowerCase().replace(/ & /g, '-')}`} key={s}>
                      <Badge
                        variant="secondary"
                        className="text-sm px-4 py-1 cursor-pointer hover:bg-primary/10 transition-colors"
                      >
                        {s}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <WorkSection
          projects={projects.slice(0, 6)}
          disciplines={disciplines}
          sectors={sectors}
        />

        <section id="contact" className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-12">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((office) => (
                <div key={office.city}>
                  <h3 className="font-headline text-xl font-bold mb-4">
                    {office.city}
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-primary hover:underline"
                      >
                        {office.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
