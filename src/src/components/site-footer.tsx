import Link from 'next/link';
import {
  StudioFluxLogo,
  IconInstagram,
  IconLinkedin,
  IconX,
  IconFacebook,
} from '@/components/icons';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: IconInstagram,
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: IconLinkedin,
    href: '#',
  },
  {
    name: 'X',
    icon: IconX,
    href: '#',
  },
  {
    name: 'Facebook',
    icon: IconFacebook,
    href: '#',
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <StudioFluxLogo className="h-7 w-auto text-foreground mb-4" />
            <p className="text-muted-foreground text-sm">
              We design everything for everyone.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-headline font-semibold mb-4">
                  Follow us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <social.icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-headline font-semibold mb-4">
                  Stay updated
                </h4>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email for newsletter"
                    className="h-9"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div>
                <h4 className="font-headline font-semibold mb-4">
                  Explore
                </h4>
                <nav className="flex flex-col space-y-2 text-sm">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 1972–{currentYear} StudioFlux. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
