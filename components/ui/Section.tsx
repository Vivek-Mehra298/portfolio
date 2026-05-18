"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Section({ id, children, className = "", title }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 sm:px-12"
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-brand-gradient bg-clip-text text-transparent inline-block">
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}
