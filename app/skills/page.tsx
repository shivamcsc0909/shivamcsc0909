import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkillsSection } from '@/components/skills-section';
import { CTASection } from '@/components/cta-section';
import { Sparkles, Code2, Cpu, Smartphone, Cloud } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Skills & Architecture Stack | Shivam Pandey — Full Stack & Mobile App Developer',
  description: 'Explore technical skills and proficiency of Shivam Pandey: TypeScript, Node.js, React, React Native, PostgreSQL, TimescaleDB, Three.js, WebGL, Docker, AWS, and CI/CD.',
  alternates: {
    canonical: 'https://shivam-pandey.com/skills',
  },
};

export default function SkillsPage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-20">
      <Header />
      
      {/* Page Hero Header */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
              <Code2 className="h-3.5 w-3.5" />
              Engineering Mastery & Stack Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Technical <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Capabilities</span> & Arsenal
            </h1>
            <p className="max-w-3xl mx-auto text-xs sm:text-base text-muted-foreground leading-relaxed">
              Detailed breakdown of full-stack engineering, real-time WebSocket pipelines, cross-platform Android mobile app releases, 60fps Three.js WebGL rendering, and zero-downtime AWS deployments.
            </p>
          </div>

          {/* 4 Architectural Pillars Visual Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
            <div className="rounded-3xl border border-border/80 bg-card/75 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-foreground text-sm sm:text-base">Frontend & 3D WebGL</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                React 19, Next.js 14, Three.js shaders, GSAP motion, and Tailwind CSS engineered for 60fps fluidity.
              </p>
              <div className="pt-2 flex flex-wrap gap-1">
                {['Next.js', 'Three.js', 'GSAP', 'TypeScript'].map((t) => (
                  <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-card/75 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-foreground text-sm sm:text-base">Backend & Real-Time</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Node.js, Express, WebSocket OHLCV streams, Python FastAPI, and JWT/OAuth secure RBAC.
              </p>
              <div className="pt-2 flex flex-wrap gap-1">
                {['Node.js', 'WebSocket', 'FastAPI', 'REST'].map((t) => (
                  <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-card/75 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-foreground text-sm sm:text-base">Mobile App Engineering</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                React Native & Android Play Store deployment, FCM push notifications, and live tracking.
              </p>
              <div className="pt-2 flex flex-wrap gap-1">
                {['React Native', 'Android', 'Play Store', 'Expo'].map((t) => (
                  <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/80 bg-card/75 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-foreground text-sm sm:text-base">Cloud, DB & DevOps</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                PostgreSQL, TimescaleDB, MongoDB, Redis, Docker containers, and AWS CI/CD pipelines.
              </p>
              <div className="pt-2 flex flex-wrap gap-1">
                {['PostgreSQL', 'TimescaleDB', 'AWS', 'Docker'].map((t) => (
                  <span key={t} className="rounded bg-muted/60 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Showcase */}
      <SkillsSection />

      {/* CTA */}
      <CTASection />
      <Footer />
    </main>
  );
}
