"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { EDUCATION } from "@/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" title="Education">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-surface/80 backdrop-blur border border-border p-8 md:p-10 rounded-2xl relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-background border border-border rounded-xl text-primary hidden sm:block shadow-inner">
              <GraduationCap size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">{EDUCATION.college}</h3>
              <p className="text-lg text-secondary font-medium mb-1">{EDUCATION.degree}</p>
              <p className="text-text-muted text-sm">{EDUCATION.expected}</p>
              
              <div className="mt-6">
                <p className="text-sm text-text-muted mb-2">Relevant Coursework:</p>
                <p className="text-text-primary font-medium">{EDUCATION.relevant}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end md:self-stretch justify-between">
            <div className="bg-background px-4 py-2 rounded-lg border border-border flex flex-col items-center min-w-[100px]">
              <span className="text-xs text-text-muted uppercase tracking-wider mb-1">CGPA</span>
              <span className="text-xl font-bold text-primary">{EDUCATION.cgpa}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
