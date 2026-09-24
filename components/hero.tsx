'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const HeroScene = dynamic(() => import('./hero-scene').then((m) => ({ default: m.HeroScene })), { ssr: false });
import { Button } from './ui/button';
import { ContactModal } from './contact-modal';
import { useState } from 'react';
import { Download, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from './social-icons';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden pt-28 pb-16 flex items-center justify-center">
      {/* 3D Canvas Background - pointer-events-none so it doesn't intercept clicks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* High-readability subtle gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/85 via-background/40 to-background pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[450px] w-[450px] rounded-full bg-primary/15 blur-[130px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Column: Focused Profile Title & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <motion.div variants={item} className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for Full-Stack, Mobile App & 3D Projects
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                Shivam{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Pandey
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90">
                Full Stack & Mobile App Developer • UI/UX & 3D Specialist
              </p>
            </motion.div>

            {/* Action Buttons with pure Next.js navigation */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-auto gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 font-semibold px-7 py-5 text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                Hire Me / Inquiries
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 border-primary/30 hover:border-primary bg-card/60 backdrop-blur-md px-6 py-5 text-sm sm:text-base font-semibold text-foreground cursor-pointer"
                asChild
              >
                <Link href="/projects">
                  Explore Projects (25+)
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto gap-2 text-muted-foreground hover:text-foreground font-semibold px-5 py-5 text-sm sm:text-base cursor-pointer"
                asChild
              >
                <a
                  href="/Shivam_Pandey_FullStack_Resume.pdf"
                  download="Shivam_Pandey_FullStack_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 text-primary" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Bridges */}
            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href="https://wa.me/919554584978"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-green-500 transition-all hover:scale-110 hover:bg-green-500 hover:text-white"
                aria-label="WhatsApp"
                title="Chat on WhatsApp (+91-9554584978)"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/its_shivampandey__/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 transition-all hover:scale-110 hover:bg-pink-500 hover:text-white"
                aria-label="Instagram"
                title="Instagram Profile"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/people/Shivam-Pandey/pfbid037pJmLokFTM9fg7wDnQF4FtSS8JV25SsGG6meLpx6dkWsm3arvvc3oe3w4mh9jN2vl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-500 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white"
                aria-label="Facebook"
                title="Facebook Profile"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/shivamcsc0909"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-foreground/5 text-foreground transition-all hover:scale-110 hover:bg-foreground hover:text-background"
                aria-label="GitHub"
                title="GitHub @shivamcsc0909"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/shivampandey-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Developer Avatar Photo with glowing frame (No text overlay) */}
          <motion.div
            variants={item}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Outer Animated Glow Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary via-accent to-purple-600 opacity-35 blur-xl animate-pulse" />

              {/* Glass Frame Container - Pure clean photo without text */}
              <div className="relative h-full w-full rounded-3xl border-2 border-primary/40 bg-card/90 p-2 shadow-2xl backdrop-blur-xl overflow-hidden group">
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-muted/40">
                  <Image
                    src="/shivampandey.webp"
                    alt="Shivam Pandey - Full Stack & Mobile App Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
