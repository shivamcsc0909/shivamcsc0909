'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Sparkles, Phone, Mail, MapPin, Send, Globe, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from './contact-modal';
import { ContactForm } from './contact-form';
import { WhatsAppIcon } from './social-icons';

export function CTASection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative w-full overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-24 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        {/* Animated Ambient Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Let&apos;s Build Next-Generation Products
            </div>
            <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
              Ready to Turn Vision Into{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Production Reality
              </span>
              ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-balance text-base sm:text-lg text-muted-foreground">
              Whether you need an end-to-end full-stack web application, a Play Store published mobile app, real-time trading dashboards, or 3D WebGL animations — let&apos;s collaborate.
            </p>
          </motion.div>

          {/* Contact Layout: Left Info & Quick Actions, Right Web3Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Card: Direct Contact & Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl border border-border/80 bg-card/75 p-7 sm:p-9 backdrop-blur-xl shadow-xl space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Get In Touch Directly
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Have an urgent requirement or want to discuss architecture and project timelines? Reach out via direct channels:
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/919554584978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-4 transition-all hover:border-green-500/50 hover:bg-green-500/10 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-green-500 uppercase tracking-wider">Instant Chat</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">+91-9554584978 (WhatsApp)</p>
                  </div>
                </a>

                <a
                  href="mailto:shivampandeyyuyu@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 transition-all hover:border-red-500/50 hover:bg-red-500/10 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-500 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">Email Inquiry</p>
                    <p className="font-bold text-foreground text-sm truncate">shivampandeyyuyu@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919554584978"
                  className="flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Direct Voice Call</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">+91-9554584978</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-bold text-foreground text-sm">New Ashok Nagar, Delhi NCR, India</p>
                  </div>
                </div>
              </div>

              {/* Work Highlights */}
              <div className="pt-4 border-t border-border/80 space-y-2">
                {[
                  'Fast 24-hour turnaround on project inquiries',
                  'Flexible contracts & full development lifecycle',
                  'High code quality, CI/CD, & production deployment',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card: Web3Forms Integrated Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl border border-primary/30 bg-card/85 p-7 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6"
            >
              <div className="border-b border-border/80 pb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">
                    Send Project Inquiry
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary">
                    Web3Forms Ready
                  </span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                  Fill in your project requirements below. The submission will be encrypted and delivered directly to Shivam Pandey.
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

