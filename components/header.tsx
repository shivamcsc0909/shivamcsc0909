'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Layers,
  Phone,
  Code2,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from './social-icons';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects (28+)', icon: Layers },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  { href: '/skills', label: 'Skills', icon: Code2 },
  { href: '/contact', label: 'Contact', icon: Phone },
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
    color: 'hover:text-foreground hover:bg-muted/80 text-foreground',
  },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-2xl pointer-events-auto transition-all duration-300">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-3.5 py-2 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent text-primary-foreground font-extrabold text-sm shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
              SP
            </div>
            <div className="text-left">
              <span className="block font-bold text-sm sm:text-base text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">
                Shivam Pandey
              </span>
              <span className="block text-[10px] sm:text-xs text-muted-foreground font-medium truncate max-w-[140px] sm:max-w-none">
                Full Stack & Mobile App Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-card/70 px-3 py-1 backdrop-blur-md text-xs font-medium shadow-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
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

          {/* Right Action Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Direct WhatsApp Quick Chat */}
            <a
              href="https://wa.me/919554584978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 w-9 sm:h-9 sm:w-auto sm:px-3 gap-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 hover:bg-green-500 hover:text-white transition-all shadow-sm group"
              title="Instant WhatsApp (+91-9554584978)"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden xl:inline text-xs font-bold">Chat</span>
            </a>

            {/* Quick Resume Download */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex gap-1.5 text-xs h-9 rounded-full border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all"
              asChild
            >
              <a
                href="/Shivam_Pandey_FullStack_Resume.pdf"
                download="Shivam_Pandey_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume</span>
              </a>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile / Tablet Menu Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden h-9 w-9 rounded-xl border-border/80 bg-card hover:bg-muted"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay & Menu Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Slide-Down Menu Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-14 left-0 right-0 max-h-[85vh] overflow-y-auto bg-background/98 border-b border-border/80 shadow-2xl backdrop-blur-2xl p-4 sm:p-6 space-y-4"
            >
              {/* Navigation Links Grid */}
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                          : 'bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/80'
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/60">
                <a
                  href="https://wa.me/919554584978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-500 font-bold text-xs hover:bg-green-500 hover:text-white transition-all shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+919554584978"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-500 font-bold text-xs hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Shivam</span>
                </a>
              </div>

              {/* Download CV Full Width */}
              <Button asChild className="w-full gap-2 rounded-2xl py-5 text-xs sm:text-sm font-bold shadow-lg shadow-primary/20">
                <a
                  href="/Shivam_Pandey_FullStack_Resume.pdf"
                  download="Shivam_Pandey_FullStack_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Download Official Resume (PDF)
                </a>
              </Button>

              {/* Social Channels Row */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Social Links</span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-xl bg-card border border-border/60 ${link.color} transition-transform hover:scale-110`}
                        aria-label={link.label}
                        title={link.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


