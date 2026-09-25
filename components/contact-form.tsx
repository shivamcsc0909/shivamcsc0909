'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { CheckCircle2, AlertCircle, Send, Loader2, Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function ContactForm({ onSuccess, compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full Stack Web App (Node/React)',
    budget: '$1,000 - $5,000',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('access_key', 'a84fd834-de21-4e1d-8c5a-599f331d4a0d');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone || 'Not provided');
      data.append('service_required', formData.service);
      data.append('estimated_budget', formData.budget);
      data.append('message', formData.message);
      data.append('subject', `🚀 Portfolio Inquiry from ${formData.name} [${formData.service}]`);
      data.append('from_name', 'Shivam Pandey Portfolio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const resData = await response.json();

      if (resData.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Full Stack Web App (Node/React)',
          budget: '$1,000 - $5,000',
          message: '',
        });
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2500);
        }
      } else {
        setStatus('error');
        setErrorMessage(resData.message || 'Something went wrong. Please try again or reach out via WhatsApp/Email.');
      }
    } catch (err: any) {
      console.error('Web3Forms submit error:', err);
      setStatus('error');
      setErrorMessage('Network error occurred. You can reach out directly via WhatsApp or Email below.');
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-2xl border border-primary/30 bg-card/90 p-8 text-center shadow-2xl backdrop-blur-xl"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Message Dispatched!</h3>
            <p className="mt-2 text-muted-foreground">
              Thank you for reaching out! Your message was delivered directly via Web3Forms. Shivam will reply to your email within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                onClick={() => setStatus('idle')}
                className="gap-2"
              >
                Send Another Message
              </Button>
              <Button asChild className="gap-2">
                <a href="https://wa.me/919554584978" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Instant WhatsApp Chat
                </a>
              </Button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Submission failed</p>
                  <p>{errorMessage}</p>
                </div>
              </motion.div>
            )}

            <div className={compact ? 'space-y-4' : 'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Your Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Alex Morgan"
                  className="bg-background/60 border-border/80 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Your Email <span className="text-primary">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="alex@company.com"
                  className="bg-background/60 border-border/80 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className={compact ? 'space-y-4' : 'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Phone / WhatsApp (Optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 95545 84978"
                  className="bg-background/60 border-border/80 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Project Focus / Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="flex h-11 w-full rounded-xl border border-border/80 bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none cursor-pointer"
                >
                  <option value="Full Stack Web App (Node/React/PostgreSQL)" className="bg-card text-foreground">Full Stack Web Application</option>
                  <option value="Mobile App (React Native / Play Store)" className="bg-card text-foreground">Mobile App (React Native / Android Play Store)</option>
                  <option value="3D WebGL & GSAP Animation Experience" className="bg-card text-foreground">3D WebGL, Three.js & Animation</option>
                  <option value="Real-Time Trading / OHLCV Dashboard" className="bg-card text-foreground">Real-Time Data / Trading Dashboard</option>
                  <option value="Cloud Deployment, AWS, Docker & CI/CD" className="bg-card text-foreground">Cloud Architecture & DevOps</option>
                  <option value="UI/UX Specialist Redesign & Speed Opt" className="bg-card text-foreground">UI/UX Redesign & Core Web Vitals</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Project Details / Message <span className="text-primary">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={compact ? 3 : 4}
                placeholder="Tell me about your project goals, timelines, tech requirements, or features..."
                className="bg-background/60 border-border/80 focus:border-primary transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full gap-2 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending via Web3Forms...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Dispatch Project Request
                </>
              )}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
