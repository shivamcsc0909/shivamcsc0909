import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from '@/components/social-icons';
import { Mail, Phone, MapPin, Sparkles, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact & Hire Shivam Pandey | Full Stack Developer',
  description: 'Get in touch with Shivam Pandey for Full Stack Web, Mobile App, 3D WebGL, and Cloud Architecture projects. Fast turnaround via Web3Forms, WhatsApp, Email, or Phone.',
  alternates: {
    canonical: 'https://shivam-portfolio-pandey.netlify.app/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-20">
      <Header />
      
      {/* Page Hero Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Let&apos;s Build Something Incredible
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Contact & <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Hire Me</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Have a project in mind, need technical leadership, or want to discuss a full-stack / mobile application? Send a message below.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Card: Direct Contact, Social Channels & Guarantees */}
            <div className="lg:col-span-5 rounded-3xl border border-border/80 bg-card/75 p-7 sm:p-9 backdrop-blur-xl shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Direct Communication
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  I typically respond within a few hours. Choose the channel that suits your workflow:
                </p>
              </div>

              {/* Direct Channels */}
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
                    <p className="text-xs font-semibold text-green-500 uppercase tracking-wider">WhatsApp Messenger</p>
                    <p className="font-bold text-foreground text-sm sm:text-base">+91-9554584978</p>
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
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">Email Direct</p>
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
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Phone Call</p>
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

              {/* Social Channels Section */}
              <div className="pt-4 border-t border-border/80">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Connect on Social Media
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://www.instagram.com/its_shivampandey__/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-pink-500/20 bg-pink-500/5 px-3.5 py-2 text-xs font-semibold text-pink-500 transition-all hover:bg-pink-500 hover:text-white"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/people/Shivam-Pandey/pfbid037pJmLokFTM9fg7wDnQF4FtSS8JV25SsGG6meLpx6dkWsm3arvvc3oe3w4mh9jN2vl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-600/20 bg-blue-600/5 px-3.5 py-2 text-xs font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <FacebookIcon className="h-4 w-4" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shivampandey-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 px-3.5 py-2 text-xs font-semibold text-blue-500 transition-all hover:bg-blue-500 hover:text-white"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/shivamcsc0909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-foreground/5 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Work Guarantees */}
              <div className="pt-4 border-t border-border/80 space-y-2.5">
                {[
                  'Full lifecycle delivery with clean TypeScript code',
                  'Cloud provisioning (AWS, Docker, CI/CD)',
                  'Direct communication — no middle agencies',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Web3Forms Integrated Form */}
            <div className="lg:col-span-7 rounded-3xl border border-primary/30 bg-card/85 p-7 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="border-b border-border/80 pb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">
                    Send Your Requirements
                  </h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono font-semibold text-primary">
                    Web3Forms Ready
                  </span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                  Fill in your project details below. Your submission is encrypted and delivered straight to Shivam Pandey.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
