import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/about-section';
import { CTASection } from '@/components/cta-section';
import { Download, Sparkles, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Shivam Pandey | Full Stack, Mobile & 3D Engineering Specialist',
  description: 'Learn about Shivam Pandey, Full Stack & Mobile Developer at RJ UrbanPower. Background in Node.js, React, TypeScript, PostgreSQL, TimescaleDB, React Native, 3D WebGL, and AWS cloud architecture.',
  alternates: {
    canonical: 'https://shivam-portfolio-pandey.netlify.app/about',
  },
};

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-20">
      <Header />
      
      {/* Page Hero Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Engineering Story & Career Journey
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            About <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Shivam Pandey</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Full Stack & Mobile Developer • UI/UX Specialist • Zero-to-Production Cloud Architect
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button asChild size="lg" className="gap-2 font-semibold">
              <a
                href="/Shivam_Pandey_FullStack_Resume.pdf"
                download="Shivam_Pandey_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download Full Resume (PDF)
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/contact">
                Contact Directly
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Career Impact CTA */}
      <CTASection />
      <Footer />
    </main>
  );
}
