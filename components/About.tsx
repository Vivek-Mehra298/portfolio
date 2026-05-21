"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "./ui/Section";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
          <p>
            I'm a full-stack developer passionate about building scalable products. I specialize in the MERN stack with TypeScript, real-time systems with Socket.io, and clean architecture.
          </p>
          <p>
            Currently, I'm pursuing my B.Tech in Information Technology at Jabalpur Engineering College. I'm actively seeking fresher/entry-level roles in full-stack or frontend development where I can contribute to impactful projects.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-surface border border-border text-white text-sm font-medium">Open to Work</span>
            <span className="px-4 py-2 rounded-full bg-surface border border-border text-white text-sm font-medium">Fresher</span>
            <span className="px-4 py-2 rounded-full bg-surface border border-border text-text-primary text-sm font-medium">July 2026 Graduate</span>
          </div>
        </div>

        {/* Image/Avatar */}
        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 z-10 shadow-2xl">
             <Image
               src="/it-me.jpeg"
               alt="Profile picture"
               fill
               className="object-cover"
               priority
             />
             
             {/* Animated Rings */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-4px] rounded-full border-2 border-dashed border-primary/40 -z-10"
             />
             <motion.div
               animate={{ rotate: -360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-12px] rounded-full border border-primary/30 -z-20"
             />
          </div>
        </div>
      </div>
    </Section>
  );
}
