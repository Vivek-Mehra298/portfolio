"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { EXPERIENCE } from "@/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {/* Animated Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-[-1px] top-0 w-0.5 bg-gradient-to-b from-primary to-primary/50 origin-top"
        />

        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-[-21px] top-1 h-10 w-10 bg-surface border border-border rounded-full flex items-center justify-center text-white z-10 shadow-[0_0_10px_rgba(42,42,42,0.4)]">
              <Briefcase size={18} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-surface/50 border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                  <p className="text-white font-medium">{exp.company} <span className="text-text-muted">• {exp.location}</span></p>
                </div>
                <span className="text-text-muted bg-background px-3 py-1 rounded-full text-sm inline-block w-max">
                  {exp.duration}
                </span>
              </div>
              
              <ul className="space-y-3 text-text-muted list-disc list-inside">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed pl-2 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    <span className="pl-4 block -mt-[22px]">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
