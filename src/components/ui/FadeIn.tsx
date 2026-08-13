"use client";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, className, delay = 0, y = 32 }: FadeInProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: shouldReduce ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1], delay: shouldReduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
