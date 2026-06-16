"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { CONTACT } from "@/data";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "TypeScript Enthusiast",
  "Open to Work",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Radial Gradient overlay for fade out at edges */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-background" 
        style={{ background: 'radial-gradient(circle at center, transparent 0%, #000000 80%)'}} 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={itemVariants} className="text-secondary text-lg mb-4 font-medium tracking-wide">
            Hi, my name is
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-text-primary mb-6 tracking-tight">
            Vivek Dehariya.
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-text-muted mb-8 h-12 md:h-16">
            I am a{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              {ROLES[roleIndex]}
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 leading-relaxed">
            Final year B.Tech IT @ Jabalpur Engineering College. I build real-time, type-safe, production-grade web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(42,42,42,0.4)] hover:shadow-[0_0_30px_rgba(42,42,42,0.6)] transform hover:-translate-y-1">
              View Projects
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 border border-border hover:border-secondary text-text-primary hover:text-white rounded-lg font-semibold transition-all flex items-center gap-2 transform hover:-translate-y-1 group">
              <Download size={20} className="group-hover:text-white transition-colors" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-6 text-text-muted">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(42,42,42,0.6)] rounded-full p-2">
              <Github size={28} />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(42,42,42,0.6)] rounded-full p-2">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(42,42,42,0.6)] rounded-full p-2">
              <Mail size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
