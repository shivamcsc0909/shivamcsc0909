'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { X, MessageCircle, Phone, Mail, Sparkles } from 'lucide-react';
import { ContactForm } from './contact-form';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl rounded-2xl border border-primary/20 bg-background/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Direct Developer Communication
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Let&apos;s Build Your Next Vision
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Powered by Web3Forms — send your requirements directly to Shivam Pandey.
                </p>
              </div>

              {/* Web3Forms Contact Form */}
              <ContactForm compact onSuccess={onClose} />

              {/* Direct Quick Links */}
              <div className="mt-6 border-t border-border/80 pt-4">
                <p className="mb-3 text-xs font-medium text-muted-foreground text-center">
                  Prefer instant messenger or direct call?
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5 border-green-500/30 text-green-500 hover:bg-green-500/10 hover:text-green-400"
                    asChild
                  >
                    <a
                      href="https://wa.me/919554584978"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="hidden xs:inline">WhatsApp</span>
                    </a>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5 border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                    asChild
                  >
                    <a href="tel:+919554584978">
                      <Phone className="h-4 w-4" />
                      <span className="hidden xs:inline">Direct Call</span>
                    </a>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5 border-red-500/30 text-red-500 hover:bg-red-500/10 hover:text-red-400"
                    asChild
                  >
                    <a href="mailto:shivampandeyyuyu@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="hidden xs:inline">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

