"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { PROJECTS } from "@/data";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

// Individual Project Card component to handle 3D tilt
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * -10); // max 5 deg (since pct is max 0.5 * 10)
    setRotateY(xPct * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full relative group rounded-2xl bg-surface border border-border overflow-hidden flex flex-col will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glowing Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-48 bg-primary overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface opacity-60" />
          </div>
        )}
        
        <div className="p-8 flex flex-col flex-grow z-10 bg-surface" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-primary text-white rounded-lg">
              <FolderGit2 size={32} />
            </div>
            <div className="flex gap-4 items-center">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                  <Github size={22} />
                </a>
              )}
              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                  <ExternalLink size={22} />
                </a>
              )}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          
          <p className="text-text-muted mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          {project.highlights && project.highlights.length > 0 && (
            <ul className="text-sm text-text-muted mb-6 space-y-2 list-disc list-inside">
              {project.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="pl-1 truncate" title={highlight}>{highlight}</li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
            {project.tags.map((tag: string, idx: number) => (
              <span key={idx} className="text-xs font-mono text-white px-2 py-1 rounded bg-primary border border-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Glow behind card on hover */}
        <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
