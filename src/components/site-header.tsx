'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { StudioFluxLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
  { href: '/archive', label: 'Archive' },
];

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto md:mr-4 flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <Link
                href="/"
                className="mb-6 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <StudioFluxLogo className="h-6 w-auto text-primary" />
              </Link>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 text-lg font-medium transition-colors hover:text-primary rounded-md hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="mr-6 flex items-center space-x-2">
            <StudioFluxLogo className="h-6 w-auto text-primary" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 ml-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <form onSubmit={handleSearchSubmit}>
                <div
                className={cn(
                    'relative flex items-center transition-all duration-300 ease-in-out',
                    isSearchOpen ? 'w-full sm:w-48' : 'w-10'
                )}
                >
                <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    className="absolute left-0 top-0 h-9 w-9"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    aria-label="Toggle search"
                >
                    <Search className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Input
                    type="search"
                    placeholder="Search..."
                    className={cn(
                    'h-9 pl-10 pr-4 transition-all duration-300 ease-in-out',
                    isSearchOpen
                        ? 'w-full opacity-100'
                        : 'w-10 opacity-0 pointer-events-none'
                    )}
                    onBlur={() => { if (!searchQuery) setIsSearchOpen(false) }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
