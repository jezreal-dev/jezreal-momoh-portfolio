"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function SkillMatrix() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 12 } }
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24 relative">
      {/* Background glow for the skills section */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-forge-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-forge-accent bg-forge-accent/10 px-4 py-1.5 rounded-full border border-forge-accent/20">Technical Expertise</span>
        <h2 className="mt-6 font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-forge-fg">
          ENGINEERING LINKAGES
        </h2>
      </motion.div>
      
      {/* Bento Category Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min"
      >
        {/* Frontend Section (Spans 7 cols) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-7 border border-forge-fg/10 bg-forge-card/40 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:border-forge-accent/30 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4 border-b border-forge-fg/10 pb-6 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3178C6] to-[#00D8FF] flex items-center justify-center shadow-inner" />
            <h3 className="text-forge-fg font-bold font-sans text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-forge-fg group-hover:to-forge-accent transition-colors">Frontend Architecture</h3>
          </div>
          <p className="text-lg font-sans text-forge-fg/80 leading-relaxed font-medium">
            Building performant web interfaces with Next.js, TypeScript, & Tailwind CSS. Specializing in global state management (Zustand) and WebSockets for real-time streaming dashboards.
          </p>
        </motion.div>
        
        {/* Backend Section (Spans 5 cols) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-5 border border-forge-fg/10 bg-forge-card/40 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:border-forge-accent/30 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4 border-b border-forge-fg/10 pb-6 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ADD8] to-[#306998] flex items-center justify-center shadow-inner" />
            <h3 className="text-forge-fg font-bold font-sans text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-forge-fg group-hover:to-forge-accent transition-colors">Backend & Cloud</h3>
          </div>
          <p className="text-lg font-sans text-forge-fg/80 leading-relaxed font-medium">
            Go & Python for high-concurrency APIs. Extensive experience with Serverless architectures using AWS Lambda, DynamoDB, and Supabase.
          </p>
        </motion.div>

        {/* Integration Highlight Callout (Spans 5 cols) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-5 relative overflow-hidden border border-forge-accent/30 bg-gradient-to-br from-forge-accent/10 to-forge-card/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-forge-accent/20 transition-all duration-300 group flex flex-col justify-center"
        >
          {/* Subtle glowing orb inside the card */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-forge-accent/20 rounded-full blur-3xl group-hover:bg-forge-accent/30 transition-colors duration-500" />
          
          <span className="text-forge-accent font-bold uppercase tracking-widest text-sm mb-4">Key Engineering Linkage</span>
          <p className="font-semibold text-xl leading-relaxed text-forge-fg relative z-10">
            Bridging Python's advanced LLM reasoning tasks with a highly performant Go API gateway designed for raw speed and scale.
          </p>
        </motion.div>

        {/* AI & Infrastructure Section (Spans 7 cols) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-7 border border-forge-fg/10 bg-forge-card/40 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:border-forge-accent/30 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4 border-b border-forge-fg/10 pb-6 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] flex items-center justify-center shadow-inner" />
            <h3 className="text-forge-fg font-bold font-sans text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-forge-fg group-hover:to-forge-accent transition-colors">AI & Agentic Systems</h3>
          </div>
          <p className="text-lg font-sans text-forge-fg/80 leading-relaxed font-medium">
            Designing complex multi-agent orchestration pipelines (MCP, Google ADK) and deeply integrating foundation models (Gemini AI, Amazon Bedrock) into robust production systems.
          </p>
        </motion.div>

        {/* Project Management Section (Spans 12 cols - Full Width) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 relative overflow-hidden border border-[#FFBE0B]/20 bg-gradient-to-r from-forge-card/60 to-[#FFBE0B]/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:border-[#FFBE0B]/40 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFBE0B] to-[#E8630A] flex items-center justify-center shadow-inner" />
              <h3 className="text-forge-fg font-bold font-sans text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFBE0B] group-hover:to-[#E8630A] transition-colors">Project Management & Leadership</h3>
            </div>
            <p className="text-lg font-sans text-forge-fg/80 leading-relaxed font-medium">
              Formally trained in Project Management to effectively lead engineering teams, optimize agile delivery pipelines, and ensure technical roadmaps align strictly with business objectives and timelines.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center w-32 h-32 rounded-full border-[4px] border-[#FFBE0B]/20 bg-[#0D0D0D]/50 shadow-inner shrink-0 relative">
            <div className="absolute inset-0 rounded-full border-[4px] border-[#FFBE0B] border-t-transparent animate-[spin_4s_linear_infinite] opacity-50" />
            <span className="font-bold text-[#FFBE0B] font-mono text-xl">100%</span>
            <span className="text-[9px] uppercase tracking-widest text-forge-fg/50 font-bold mt-1">Certified</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
