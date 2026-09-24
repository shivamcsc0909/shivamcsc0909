import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ExperienceSection } from '@/components/experience-section';
import { CTASection } from '@/components/cta-section';
import { Briefcase, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Work Experience & Career Timeline | Shivam Pandey — Full Stack & Mobile App Developer',
  description: 'Explore the professional engineering career of Shivam Pandey: Full Stack & Mobile App Developer at RJ UrbanPower, Digilik, RankRiseUSA, EXL Services, and Admark.',
  alternates: {
    canonical: 'https://shivam-pandey.com/experience',
  },
};

export default function ExperiencePage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-20">
      <Header />
      
      {/* Page Hero Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" />
            Engineering Career Timeline
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Work <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Experience</span> & Background
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Proven track record delivering scalable full-stack products, Android apps to Google Play Store, and cloud architectures.
          </p>

          <div className="pt-3">
            <Button asChild size="lg" className="gap-2 font-semibold shadow-md">
              <a
                href="/Shivam_Pandey_FullStack_Resume.pdf"
                download="Shivam_Pandey_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download Verified CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* CTA */}
      <CTASection />
      <Footer />
    </main>
  );
}
