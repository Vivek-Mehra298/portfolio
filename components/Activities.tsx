"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { ACTIVITIES } from "@/data";
import { Award } from "lucide-react";

export function Activities() {
  return (
    <Section id="activities" title="Activities & Leadership">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACTIVITIES.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface border border-border p-6 rounded-xl hover:bg-surface/80 transition-colors flex gap-4"
          >
            <div className="text-white flex-shrink-0 mt-1">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-1">{activity.title}</h3>
              <p className="text-sm font-medium text-white mb-3">
                {activity.organization} <span className="text-text-muted font-normal">• {activity.duration}</span>
              </p>
              <p className="text-text-muted text-sm leading-relaxed">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
