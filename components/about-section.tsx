'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code2,
  Smartphone,
  Activity,
  Layers,
  Cloud,
  Palette,
  CheckCircle,
  Award,
  Terminal,
  Cpu,
} from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Full Stack Web Architecture',
    subtitle: 'Node.js • React • TypeScript • PostgreSQL',
    description:
      'Designing robust backend REST/GraphQL microservices, JWT/OAuth authentication workflows, scalable schemas in PostgreSQL/TimescaleDB & MongoDB, and high-performance React frontends.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App & Play Store Releases',
    subtitle: 'React Native • Expo • Flutter',
    description:
      'Building zero-to-production mobile applications with native device integrations, state management, push notification pipelines, and proven Google Play Store releases.',
  },
  {
    icon: Activity,
    title: 'Real-Time Systems & OHLCV Streams',
    subtitle: 'WebSocket • TimescaleDB • Time-Series',
    description:
      'Engineering low-latency market data pipelines, candlestick chart renderers, technical indicators (SMA, RSI, MACD), and high-throughput financial dashboards.',
  },
  {
    icon: Palette,
    title: '3D Graphics, WebGL & GSAP Motion',
    subtitle: 'Three.js • R3F • GLSL • Micro-interactions',
    description:
      'Crafting award-grade spatial experiences with 60 FPS WebGL rendering, custom vertex/fragment shaders, physics-based simulations, and buttery smooth GSAP scroll timelines.',
  },
  {
    icon: Cloud,
    title: 'DevOps, Docker & AWS Cloud',
    subtitle: 'CI/CD • GitHub Actions • Linux & Nginx',
    description:
      'Automating build-to-deploy workflows with Docker containerization, AWS EC2/S3/Lambda infrastructure, reverse proxy configurations, and zero-downtime releases.',
  },
  {
    icon: Layers,
    title: 'UI/UX Specialist & Core Web Vitals',
    subtitle: 'Conversion Funnels • 95+ Lighthouse • SEO',
    description:
      'Translating user needs into pixel-perfect accessible designs (WCAG 2.1 AA), optimizing Largest Contentful Paint (LCP) and Interaction to Next Paint (INP), and driving organic lead conversion.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#7c5cff15_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary mb-3">
            <Award className="h-3.5 w-3.5" />
            Engineering Philosophy & Proven Track Record
          </div>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            From Zero to Production, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">End-to-End</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-balance text-base sm:text-lg text-muted-foreground">
            I bridge the gap between creative visual artistry and mission-critical system engineering.
            Whether launching consumer mobile apps or high-frequency real-time financial dashboards, I own the entire lifecycle.
          </p>
        </motion.div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-base"
          >
            <motion.p variants={itemVariants} className="text-lg font-medium text-foreground">
              Hello! I&apos;m <span className="text-primary font-bold">Shivam Pandey</span>, a Full Stack & Mobile Developer, Creative Technologist, and UI/UX Specialist based in Delhi NCR.
            </motion.p>

            <motion.p variants={itemVariants}>
              With over 3 years of hands-on experience and <strong>28+ verified live applications</strong> deployed to production, my work spans high-throughput full-stack architectures (Node.js, TypeScript, PostgreSQL, MongoDB), native & cross-platform mobile development (React Native, Flutter), and real-time streaming engines (WebSockets, TimescaleDB, OHLCV processing).
            </motion.p>

            <motion.p variants={itemVariants}>
              I specialize in <strong>complete product ownership</strong>. That means taking an initial concept through wireframing and UI/UX design, crafting scalable RESTful APIs, building dynamic 3D animations with Three.js/WebGL and GSAP, setting up Dockerized CI/CD deployment pipelines on AWS, and publishing live mobile applications directly to the <strong>Google Play Store</strong>.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Full Stack & Cloud Architecture',
                'Published Google Play Store Apps',
                'Real-Time WebSocket & OHLCV Systems',
                'Interactive 3D WebGL & GSAP 60fps',
                'AWS Certified Cloud Practitioner',
                '120+ GitHub Repositories & 200+ Contribs',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Credential Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-2xl border border-primary/30 bg-card/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Developer Summary
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-border/80 pb-2.5">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold text-foreground">New Ashok Nagar, Delhi, India</span>
              </div>
              <div className="flex justify-between border-b border-border/80 pb-2.5">
                <span className="text-muted-foreground">Current Role</span>
                <span className="font-semibold text-primary">Full Stack & Mobile App Dev</span>
              </div>
              <div className="flex justify-between border-b border-border/80 pb-2.5">
                <span className="text-muted-foreground">Company</span>
                <span className="font-semibold text-foreground">RJ UrbanPower Pvt. Ltd.</span>
              </div>
              <div className="flex justify-between border-b border-border/80 pb-2.5">
                <span className="text-muted-foreground">Education</span>
                <span className="font-semibold text-foreground">BCA (Comp Applications) 2021-24</span>
              </div>
              <div className="flex justify-between border-b border-border/80 pb-2.5">
                <span className="text-muted-foreground">Direct Contact</span>
                <span className="font-semibold text-foreground">+91-9554584978</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-muted-foreground">Email</span>
                <a
                  href="mailto:shivampandeyyuyu@gmail.com"
                  className="font-semibold text-primary hover:underline"
                >
                  shivampandeyyuyu@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Engineering & Animation Pillars Grid */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Core Pillars of My Craft
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A breakdown of the specialized capabilities I bring to every software engineering project
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-border/80 bg-card/60 p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="rounded-xl bg-primary/15 p-3.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                    </div>

                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-semibold text-primary/80 mt-1 mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <Link
                    href="/skills"
                    className="mt-6 pt-4 border-t border-border/60 flex items-center text-xs font-semibold text-primary hover:underline group-hover:text-accent transition-colors"
                  >
                    <span>Explore specialized capability</span>
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

