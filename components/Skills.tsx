"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { SKILLS } from "@/data";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="skills" title="Technical Arsenal">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILLS.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div
              key={index}
              variants={item}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-background rounded-lg text-primary group-hover:scale-110 group-hover:text-secondary transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-background text-text-muted rounded-md text-sm hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
