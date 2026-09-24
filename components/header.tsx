'use client';

import { motion } from 'framer-motion';
import {
  Download,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from './social-icons';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects (25+)' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    icon: WhatsAppIcon,
    href: 'https://wa.me/919554584978',
    label: 'WhatsApp',
    color: 'hover:text-green-500 hover:bg-green-500/10 text-green-500',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/its_shivampandey__/?hl=en',
    label: 'Instagram',
    color: 'hover:text-pink-500 hover:bg-pink-500/10 text-pink-500',
  },
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/people/Shivam-Pandey/pfbid037pJmLokFTM9fg7wDnQF4FtSS8JV25SsGG6meLpx6dkWsm3arvvc3oe3w4mh9jN2vl/',
    label: 'Facebook',
    color: 'hover:text-blue-600 hover:bg-blue-600/10 text-blue-600',
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/shivampandey-tech/',
    label: 'LinkedIn',
    color: 'hover:text-blue-500 hover:bg-blue-500/10 text-blue-500',
  },
  {
    icon: GitHubIcon,
    href: 'https://github.com/shivamcsc0909',
    label: 'GitHub',
    color: 'hover:text-foreground hover:bg-muted/80',
  },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[100] w-full border-b border-border/80 bg-background/90 backdrop-blur-2xl pointer-events-auto transition-all duration-300">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-primary-foreground font-extrabold text-sm shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
              SP
            </div>
            <div className="text-left">
              <span className="block font-bold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                Shivam Pandey
              </span>
              <span className="block text-[10px] text-muted-foreground font-medium">
                Full Stack & Mobile App Dev
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Center Navigation for Desktop */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1 backdrop-blur-md text-xs font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Resume, Socials, Theme, Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick PDF Resume Link */}
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex gap-1.5 text-xs h-9 rounded-full border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all"
            asChild
          >
            <a
              href="/Shivam_Pandey_FullStack_Resume.pdf"
              download="Shivam_Pandey_FullStack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </a>
          </Button>

          {/* Social Icons (Desktop) */}
          <div className="hidden sm:flex items-center gap-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  aria-label={link.label}
                  className={`h-8 w-8 rounded-full ${link.color} transition-colors`}
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    title={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden h-9 w-9 rounded-full"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-border/80 bg-background/95 px-6 py-5 backdrop-blur-2xl space-y-4"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground font-semibold'
                      : 'bg-card/70 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Socials & Resume */}
          <div className="pt-3 border-t border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-card ${link.color}`}
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            <Button asChild size="sm" className="gap-1.5 text-xs font-semibold">
              <a
                href="/Shivam_Pandey_FullStack_Resume.pdf"
                download="Shivam_Pandey_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}


