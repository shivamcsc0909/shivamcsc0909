'use client';

import { motion } from 'framer-motion';
import { experiences, education, certifications } from '@/lib/experience';
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[400px] bg-primary/5 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary mb-3 shadow-sm backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" />
            Engineering Career & Deliverables
          </div>
          <h2 className="text-balance text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
            Work <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Experience</span> & Journey
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-balance text-xs sm:text-base text-muted-foreground leading-relaxed">
            Full-lifecycle software engineering from architecture & mobile releases to scalable cloud deployments.
          </p>
        </motion.div>

        {/* Selected Engineering Roles - Timeline Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 mb-16 sm:mb-24"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group relative rounded-3xl border border-border/80 bg-card/85 p-5 sm:p-9 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-border/70 pb-3.5 sm:pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                        {exp.role.replace('Mobile Developer', 'Mobile App Developer')}
                      </h3>
                      {exp.type && (
                        <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-primary border border-primary/20">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mt-1">
                      <span className="font-bold text-foreground/90">{exp.company}</span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-muted-foreground text-[11px] sm:text-xs">
                          <MapPin className="h-3.5 w-3.5 text-primary/70" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-primary bg-primary/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/20 w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Role Narrative */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2 pt-1">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-foreground/90 leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Stack Footer */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="pt-3.5 border-t border-border/60 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground mr-1">Stack:</span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-background/90 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-foreground border border-border/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Industry Certifications Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Education Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl border border-border/80 bg-card/85 p-5 sm:p-9 backdrop-blur-xl shadow-lg space-y-5 sm:space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-border/70 pb-3.5 sm:pb-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm flex-shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">Formal Education</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground">Computer science & engineering foundation</p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {education.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="rounded-2xl border border-border/60 bg-background/50 p-4 sm:p-5 space-y-2 transition-all hover:border-primary/40"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <h4 className="font-extrabold text-foreground text-xs sm:text-base">{edu.degree}</h4>
                    <span className="text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full whitespace-nowrap w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-primary">
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>
                  {edu.grade && (
                    <p className="text-[10px] sm:text-[11px] font-semibold text-accent">
                      Academic Standing: {edu.grade} {edu.status && `(${edu.status})`}
                    </p>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-2 border-t border-border/40">
                      <p className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Core Curriculum:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course, cIdx) => (
                          <span key={cIdx} className="rounded bg-muted/60 px-2 py-0.5 text-[9px] sm:text-[10px] text-foreground font-medium">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl border border-border/80 bg-card/85 p-5 sm:p-9 backdrop-blur-xl shadow-lg space-y-5 sm:space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-border/70 pb-3.5 sm:pb-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-sm flex-shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">Verified Certifications</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground">AWS, Meta, Docker & enterprise specializations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="flex flex-col justify-between rounded-2xl border border-border/60 bg-background/50 p-3.5 sm:p-4 transition-all hover:border-primary/40 space-y-2"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold text-foreground text-xs leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {cert.issuer} {cert.date && `• ${cert.date}`}
                      </p>
                    </div>
                  </div>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-border/40">
                      {cert.skills.slice(0, 3).map((s, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-mono text-muted-foreground bg-muted/60 px-1.5 py-0.2 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
