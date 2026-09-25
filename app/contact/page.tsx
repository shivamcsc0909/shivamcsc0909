import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from '@/components/social-icons';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Hire Shivam Pandey — Full Stack & Mobile App Developer',
  description: 'Get in touch with Shivam Pandey for Full Stack Web, Mobile App (React Native), 3D WebGL, and Cloud Architecture projects. Fast turnaround via Web3Forms, WhatsApp, Email, or Phone.',
  alternates: {
    canonical: 'https://shivam-pandey.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-20">
      <Header />
      
      {/* Page Hero Header */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
        <div className="mx-auto max-w-7xl text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Let&apos;s Build Something Incredible
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Contact & <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Hire Me</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-muted-foreground">
            Have a project in mind, need technical leadership, or want to discuss a full-stack / mobile application? Send a message below.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            
            {/* Left Card: Direct Contact, Social Channels & Guarantees */}
            <div className="lg:col-span-5 rounded-3xl border border-border/80 bg-card/75 p-5 sm:p-9 backdrop-blur-xl shadow-xl space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Direct Communication
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  I typically respond within a few hours. Choose the channel that suits your workflow:
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://wa.me/919554584978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 p-3.5 sm:p-4 transition-all hover:border-green-500/50 hover:bg-green-500/10 group"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform flex-shrink-0">
                    <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold text-green-500 uppercase tracking-wider">WhatsApp Messenger</p>
                    <p className="font-bold text-foreground text-xs sm:text-base truncate">+91-9554584978</p>
                  </div>
                </a>

                <a
                  href="mailto:shivampandeyyuyu@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-3.5 sm:p-4 transition-all hover:border-red-500/50 hover:bg-red-500/10 group"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-500 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold text-red-500 uppercase tracking-wider">Email Direct</p>
                    <p className="font-bold text-foreground text-xs sm:text-sm truncate">shivampandeyyuyu@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919554584978"
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-3.5 sm:p-4 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 group"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold text-blue-500 uppercase tracking-wider">Phone Call</p>
                    <p className="font-bold text-foreground text-xs sm:text-base truncate">+91-9554584978</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-border/60 bg-muted/30 p-3.5 sm:p-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-bold text-foreground text-xs sm:text-sm truncate">New Ashok Nagar, Delhi NCR, India</p>
                  </div>
                </div>
              </div>

              {/* Social Channels Section */}
              <div className="pt-3.5 sm:pt-4 border-t border-border/80">
                <p className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5 sm:mb-3">
                  Connect on Social Media
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/its_shivampandey__/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-pink-500/20 bg-pink-500/5 px-3 py-1.5 text-xs font-semibold text-pink-500 transition-all hover:bg-pink-500 hover:text-white"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/people/Shivam-Pandey/pfbid037pJmLokFTM9fg7wDnQF4FtSS8JV25SsGG6meLpx6dkWsm3arvvc3oe3w4mh9jN2vl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-blue-600/20 bg-blue-600/5 px-3 py-1.5 text-xs font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <FacebookIcon className="h-3.5 w-3.5" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shivampandey-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs font-semibold text-blue-500 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/shivamcsc0909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Work Guarantees */}
              <div className="pt-3.5 sm:pt-4 border-t border-border/80 space-y-2">
                {[
                  'Full lifecycle delivery with clean TypeScript code',
                  'Cloud provisioning (AWS, Docker, CI/CD)',
                  'Direct communication — no middle agencies',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Web3Forms Integrated Form */}
            <div className="lg:col-span-7 rounded-3xl border border-primary/30 bg-card/85 p-5 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-5 sm:space-y-6">
              <div className="border-b border-border/80 pb-4 sm:pb-5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Send Your Requirements
                  </h3>
                  <span className="rounded-full bg-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono font-semibold text-primary">
                    Web3Forms Ready
                  </span>
                </div>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-foreground">
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
