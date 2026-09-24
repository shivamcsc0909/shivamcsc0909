'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50',
    secondary:
      'bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/50',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {/* Ripple Effect */}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-white/20 rounded-full"
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
