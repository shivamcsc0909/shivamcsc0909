import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectsSection } from '@/components/projects-section';
import { CTASection } from '@/components/cta-section';
import { Globe, Smartphone, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '25+ Verified Production Projects | Shivam Pandey — Full Stack & Mobile App Developer',
  description: 'Explore 25+ verified production applications built by Shivam Pandey, including Urban Power (Play Store App), RankRiseUSA, DigiQlik, Overseas Stars, TechForex, and WebGL 3D systems.',
  alternates: {
    canonical: 'https://shivam-pandey.com/projects',
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-20">
      <Header />
      
      {/* Page Hero Header with Flagship Highlights */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
              <Globe className="h-3.5 w-3.5" />
              Verified Production Work • 28+ Deployments
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Production <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Project Gallery</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xs sm:text-base text-muted-foreground leading-relaxed">
              Explore the complete portfolio of Android mobile apps published on Google Play Store, international marketing agency platforms, high-throughput trading backends, and award-grade WebGL 3D visualizers.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-4 text-center backdrop-blur-md">
              <div className="flex items-center justify-center gap-1.5 text-green-400 mb-1">
                <Smartphone className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Play Store Live</span>
              </div>
              <p className="text-lg sm:text-2xl font-black text-foreground">Urban Power</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">v1.0.51 • Android 7.0+</p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card/60 p-4 text-center backdrop-blur-md">
              <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-1">
                <Globe className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">US Agency</span>
              </div>
              <p className="text-lg sm:text-2xl font-black text-foreground">RankRise USA</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">High-Converting SEO Funnel</p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card/60 p-4 text-center backdrop-blur-md">
              <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Agency & HR</span>
              </div>
              <p className="text-lg sm:text-2xl font-black text-foreground">DigiQlik & Overseas</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Talent Outsourcing & Ads</p>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card/60 p-4 text-center backdrop-blur-md">
              <div className="flex items-center justify-center gap-1.5 text-accent mb-1">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">FinTech Engine</span>
              </div>
              <p className="text-lg sm:text-2xl font-black text-foreground">TechForex</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Sub-second OHLCV Stream</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Interactive Showcase with Filtering */}
      <ProjectsSection />

      {/* Hire Me CTA */}
      <CTASection />
      <Footer />
    </main>
  );
}
