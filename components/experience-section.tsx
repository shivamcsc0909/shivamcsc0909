'use client';

import { motion } from 'framer-motion';
import { experiences, education, certifications, achievements } from '@/lib/experience';
import { CheckCircle2, Briefcase, GraduationCap, Award, MapPin, Calendar, Sparkles } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-3 shadow-sm backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" />
            Engineering Career & Proven Track Record
          </div>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Professional <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Experience</span> & Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-balance text-sm sm:text-base text-muted-foreground leading-relaxed">
            A chronological timeline of production engineering roles, software deliveries, academic milestones, and cloud certifications.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-sm">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Work History</h3>
              <p className="text-xs text-muted-foreground">Full-time engineering & client deployments</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id || idx}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl border border-border/80 bg-card/85 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl shadow-sm"
              >
                <div className="space-y-4">
                  {/* Top Bar: Title, Company, Period */}
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h4>
                        {exp.type && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm mt-1">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        {exp.location && (
                          <span className="flex items-center gap-1 text-muted-foreground text-xs">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted/70 px-3 py-1 rounded-full w-fit">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-1">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[11px] font-medium text-muted-foreground mr-1">Technologies:</span>
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-muted/80 px-2 py-0.5 text-[10px] font-medium text-foreground border border-border/50"
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
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
                <p className="text-xs text-muted-foreground">Academic credentials & degree</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="rounded-2xl border border-border/80 bg-card/85 p-6 backdrop-blur-xl space-y-2.5 shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-foreground text-base sm:text-lg">{edu.degree}</h4>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium text-xs sm:text-sm">
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>
                  {edu.grade && (
                    <p className="text-xs font-semibold text-accent">
                      Academic Standing: {edu.grade} {edu.status && `(${edu.status})`}
                    </p>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-2">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Core Coursework:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span key={cIdx} className="rounded bg-muted/60 px-2 py-0.5 text-[10px] text-foreground font-medium">
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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent shadow-sm">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                <p className="text-xs text-muted-foreground">Verified industry credentials</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="flex flex-col justify-between rounded-xl border border-border/80 bg-card/85 p-4 backdrop-blur-xl shadow-sm space-y-2"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold text-foreground text-xs sm:text-sm leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {cert.issuer} {cert.date && `• ${cert.date}`}
                      </p>
                    </div>
                  </div>
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 pt-1 border-t border-border/40">
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
