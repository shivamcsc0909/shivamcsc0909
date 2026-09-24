'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/lib/experience';
import {
  Sparkles,
  CheckCircle2,
  Award,
  Layers,
  Cpu,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Terminal,
  ArrowRight,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

// Category icons mapping
const categoryIcons: Record<string, any> = {
  'Core Languages & Runtime': Terminal,
  'Frontend & UI/UX Animation': Layers,
  'Backend & API Engineering': Cpu,
  'Mobile & Cross-Platform': Smartphone,
  'Databases & Time-Series Data': Database,
  'DevOps, Cloud & Production Deployment': Cloud,
};

// Real-world project reference for each skill
const skillContexts: Record<string, string> = {
  TypeScript: 'Urban Power, RankRiseUSA, TechForex',
  'JavaScript (ES6+)': 'Lava FlameFlow, All Web Apps',
  'SQL & Query Optimization': 'PostgreSQL, TimescaleDB Aggregates',
  'Python (FastAPI / Data)': 'AI ATS Resume Parser & Scripts',
  'Dart / Java': 'Cross-Platform Mobile & Services',
  'HTML5 & Modern CSS3': 'Pixel-Perfect Responsive Layouts',
  'React.js & Next.js 14/15': 'RankRiseUSA, Digilik, Portfolio',
  'Three.js / WebGL / R3F': 'Lava FlameFlow, Range Rover 3D',
  'GSAP & Framer Motion': 'Attention Seeker, 60fps Physics UI',
  'Tailwind CSS & Shadcn UI': 'All Production Web Apps',
  'Redux Toolkit & Zustand': 'SmartGadgetShop, Real-Time State',
  'Core Web Vitals & Micro-Interactions': '98+ Lighthouse Scores',
  'Node.js & Express.js': 'Urban Power Backend, TechForex',
  'RESTful API Architecture': 'Secure Scalable Microservices',
  'WebSocket & Socket.IO (Real-Time)': 'Sub-second Tick Aggregation',
  'GraphQL & Apollo': 'Structured Query Systems',
  'JWT, OAuth & RBAC Security': 'Multi-Tenant Auth & OTP',
  'Puppeteer & Headless Automation': 'School Report Card Generator',
  'React Native & Expo': 'Urban Power Play Store App',
  'Flutter & Dart (Android/iOS)': 'Mobile UI Prototyping',
  'Google Play Console & Deployment': 'Published v1.0.51 App Bundle',
  'Mobile Push Notifications (FCM)': 'Real-Time Order & Service Alerts',
  'Progressive Web Apps (PWA)': 'Offline-First Mobile Web',
  'PostgreSQL & TimescaleDB': 'Real-Time OHLCV Market Data',
  'Real-Time OHLCV Streams & Aggregation': 'TechForex High-Frequency Storage',
  'MongoDB & Mongoose': 'GharKaMarket, MyFirst CRM',
  'Redis Caching & Pub/Sub': 'Low-Latency Cache Layer',
  'Firebase Firestore / Auth': 'Instant Authentication & DB',
  'MySQL & InfluxDB': 'Relational & Metric Datastores',
  'Docker & Containerization': 'Isolated Production Containers',
  'AWS (EC2, S3, Lambda, CloudFront)': 'AWS Certified Cloud Deployments',
  'GitHub Actions & CI/CD Pipelines': 'Automated Build & Test Deploy',
  'Nginx, Reverse Proxy & Linux': 'Secure SSL & Load Balancing',
  'Vercel, Netlify & Render Deployments': 'Instant Edge Network CDN',
  'Technical SEO & Search Console': 'RankRiseUSA, Structured Schema',
};

export function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="relative w-full bg-muted/20 py-24 px-4 sm:px-6 lg:px-8 border-y border-border/50 overflow-hidden">
      {/* Dynamic Background Ambient Aura */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-3 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Engineering Competence & Tech Ecosystem
          </div>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Technical <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Arsenal</span> & Mastery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
            Battle-tested across production applications — spanning <span className="font-semibold text-foreground">React Native Play Store apps</span>, <span className="font-semibold text-foreground">Node.js microservices</span>, <span className="font-semibold text-foreground">Three.js WebGL</span>, and <span className="font-semibold text-foreground">AWS Cloud CI/CD</span>.
          </p>
        </motion.div>

        {/* Category Domain Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.category] || Terminal;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative flex flex-col items-center justify-center rounded-2xl p-4 text-center transition-all duration-300 border ${
                  isActive
                    ? 'border-primary bg-card text-foreground shadow-xl shadow-primary/10 scale-105 ring-2 ring-primary/30'
                    : 'border-border/70 bg-card/60 text-muted-foreground hover:border-primary/40 hover:bg-card hover:text-foreground'
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl mb-2 transition-transform duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground scale-110 shadow-md shadow-primary/25'
                      : 'bg-muted/70 text-muted-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {category.category.replace('&', '\n&')}
                </span>
                <span className="text-[10px] font-mono text-primary font-semibold mt-1">
                  {category.skills.length} Skills
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-border/80 bg-card/80 p-6 sm:p-9 backdrop-blur-2xl shadow-2xl space-y-8"
          >
            {/* Domain Overview Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-mono font-bold text-primary">
                    Domain 0{activeCategoryIndex + 1}
                  </span>
                  <h3 className="text-2xl font-extrabold text-foreground">
                    {activeCategory.category}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {activeCategory.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400 border border-green-500/20">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Production Ready
                </span>
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  Full Stack Deep Dive <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeCategory.skills.map((skill, skillIdx) => {
                const context = skillContexts[skill.name] || 'Production Application';

                return (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIdx * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="group relative rounded-2xl border border-border/70 bg-background/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg"
                  >
                    {/* Top Row: Name & Mastery Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-sm text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {skill.name}
                      </span>
                      {skill.badge && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary border border-primary/20">
                          {skill.badge}
                        </span>
                      )}
                    </div>

                    {/* Real-World Usage Context */}
                    <p className="text-[11px] text-muted-foreground mb-3 flex items-center gap-1">
                      <span className="text-accent font-semibold">Applied:</span> {context}
                    </p>

                    {/* Progress Bar & Percentage */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-bold text-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted/80">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1 + skillIdx * 0.04 }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-purple-500 shadow-sm"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Competencies Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-7 sm:p-9 text-center backdrop-blur-xl shadow-xl"
        >
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Verified Certifications & Engineering Standards
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">AWS Certified Cloud Practitioner</strong> • <strong className="text-foreground">Docker & Kubernetes (Coursera)</strong> • <strong className="text-foreground">Meta React Specialization</strong> • <strong className="text-foreground">Full Stack Web Development (EXL Services)</strong> • <strong className="text-foreground">IBM Python for Data Science</strong> • <strong className="text-foreground">Data Structures & Algorithms (Udemy)</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
