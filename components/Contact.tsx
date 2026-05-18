"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { CONTACT } from "@/data";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" title="Let's Build Something" className="text-center">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-muted text-lg mb-12 max-w-2xl mx-auto"
        >
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-text-primary font-medium hover:text-primary transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-text-muted">Phone</p>
                <p className="text-text-primary font-medium">{CONTACT.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-text-muted">Location</p>
                <p className="text-text-primary font-medium">{CONTACT.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
            action={`mailto:${CONTACT.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm text-text-muted ml-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm text-text-muted ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message here..."
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-4 font-semibold transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>

        {/* Social Links Centered at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 pt-8 border-t border-border/50"
        >
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-muted hover:text-white hover:bg-[#333] transition-all hover:-translate-y-1 shadow-lg">
            <Github size={24} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-muted hover:text-white hover:bg-[#0077b5] transition-all hover:-translate-y-1 shadow-lg">
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
