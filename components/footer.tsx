'use client';

import {
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react';
import Link from 'next/link';
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/social-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border/80 bg-card/60 backdrop-blur-xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-accent text-primary-foreground font-bold text-xs shadow-md shadow-primary/20">
                SP
              </div>
              <h3 className="text-lg font-bold text-foreground">Shivam Pandey</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Full Stack & Mobile Developer • UI/UX & 3D Specialist. Designing and deploying resilient web, mobile & cloud software from zero to production.
            </p>
          </div>

          {/* Quick Navigation - All subpages */}
          <div>
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About & Background
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Projects Portfolio (28+)
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Career Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Skills & Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div>
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="h-4 w-4 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:shivampandeyyuyu@gmail.com"
                  className="transition-colors hover:text-foreground truncate"
                >
                  shivampandeyyuyu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+919554584978"
                  className="transition-colors hover:text-foreground"
                >
                  +91-9554584978
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <WhatsAppIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919554584978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp (+91-9554584978)
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>New Ashok Nagar, Delhi NCR</span>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Resume */}
          <div>
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Connect & Verify
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-4">
              <a
                href="https://wa.me/919554584978"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 text-green-500 transition-all hover:scale-110 hover:bg-green-500 hover:text-white"
                aria-label="WhatsApp"
                title="WhatsApp Messenger"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/its_shivampandey__/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-500 transition-all hover:scale-110 hover:bg-pink-500 hover:text-white"
                aria-label="Instagram"
                title="Instagram Profile"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Shivam-Pandey/pfbid037pJmLokFTM9fg7wDnQF4FtSS8JV25SsGG6meLpx6dkWsm3arvvc3oe3w4mh9jN2vl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-600/30 bg-blue-600/10 text-blue-500 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
                title="Facebook Profile"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivampandey-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-500 transition-all hover:scale-110 hover:bg-blue-500 hover:text-white"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/shivamcsc0909"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-background/80 text-muted-foreground transition-all hover:scale-110 hover:border-primary hover:text-foreground hover:bg-card"
                aria-label="GitHub"
                title="GitHub Repositories"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:shivampandeyyuyu@gmail.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 transition-all hover:scale-110 hover:bg-red-500 hover:text-white"
                aria-label="Email"
                title="Email Shivam"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <a
              href="/Shivam_Pandey_FullStack_Resume.pdf"
              download="Shivam_Pandey_FullStack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <span>Download Official Resume (PDF)</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border/60" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-muted-foreground">
          <p>
            © {currentYear} Shivam Pandey. Built with Next.js, Three.js, Tailwind CSS & Web3Forms.
          </p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" /> for scalable performance & 60fps animations.
          </p>
        </div>
      </div>
    </footer>
  );
}
