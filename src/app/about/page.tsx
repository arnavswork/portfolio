import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Prateeq Kumar',
    role: 'Founder & Creative Director',
    imageUrl: 'https://picsum.photos/400/400',
    bio: 'Prateeq leads the creative vision of the studio, with a passion for crafting beautiful and impactful brand experiences.',
    aiHint: 'portrait man',
  },
  {
    name: 'Jane Doe',
    role: 'Lead Designer',
    imageUrl: 'https://picsum.photos/400/400',
    bio: 'Jane is a master of visual storytelling, translating complex ideas into elegant and effective design solutions.',
    aiHint: 'portrait woman',
  },
  {
    name: 'John Smith',
    role: 'Lead Strategist',
    imageUrl: 'https://picsum.photos/400/400',
    bio: 'John focuses on the bigger picture, ensuring every project is grounded in solid strategy and delivers measurable results.',
    aiHint: 'portrait man glasses',
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-card py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">
              We design everything for everyone.
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
              StudioFlux is a multi-disciplinary design studio. Our collective of designers, writers, and strategists create work with purpose and impact. We believe in the power of design to connect people, create understanding, and shape a better future.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image 
                            src="https://picsum.photos/800/600"
                            alt="Our Studio"
                            width={800}
                            height={600}
                            className="object-cover"
                            data-ai-hint="office interior"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Our Philosophy</h2>
                        <p>We approach every project with curiosity and a commitment to excellence. Our process is collaborative and transparent, working closely with our clients to understand their goals and challenges. We believe that the best design is born from a deep understanding of the people it serves.</p>
                        <p>From brand identities that resonate to digital experiences that engage, we create solutions that are both beautiful and effective. Our work is driven by a passion for quality and a desire to make a positive impact.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-card py-24 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-center mb-16">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              {teamMembers.map((member) => (
                <div key={member.name}>
                  <div className="relative h-48 w-48 mx-auto mb-6">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="rounded-full object-cover"
                      data-ai-hint={member.aiHint}
                    />
                  </div>
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
