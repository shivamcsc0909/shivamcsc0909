'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './social-icons';

export function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      {/* Tooltip on Desktop */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 text-xs font-semibold rounded-full bg-background/95 border border-border text-foreground shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        Chat on WhatsApp (+91 9554584978)
      </span>

      {/* Pulsing Outer Glow */}
      <motion.a
        href="https://wa.me/919554584978?text=Hi%20Shivam,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Shivam Pandey"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/30 transition-all duration-300 transform hover:scale-110 active:scale-95"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-background rounded-full shadow-sm" />

        {/* Custom WhatsApp Icon Image */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" alt="WhatsApp" />
      </motion.a>
    </aside>
  );
}
