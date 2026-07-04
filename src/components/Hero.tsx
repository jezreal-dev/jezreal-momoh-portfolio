"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaBriefcase } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-32 overflow-hidden">
      {/* Ambient Mesh Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forge-accent/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10"
      >
        {/* Content Panel */}
        <div className="max-w-2xl text-left">
          {/* Location Badge */}
          <motion.span variants={itemVariants} className="inline-block font-sans font-semibold text-xs uppercase tracking-widest text-forge-accent bg-forge-accent/10 px-4 py-1.5 rounded-full border border-forge-accent/20">
            Ilorin, Nigeria
          </motion.span>
          
          {/* Main Statement with Gradient Text */}
          <motion.h1 variants={itemVariants} className="mt-6 font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-fg via-forge-fg to-forge-accent">
              BUILDING FULL-STACK AI PRODUCTS FROM SCRATCH.
            </span>
          </motion.h1>
          
          {/* Intro Description */}
          <motion.p variants={itemVariants} className="mt-6 font-sans text-lg md:text-xl font-medium text-forge-fg/80 leading-relaxed max-w-xl">
             I am Jezreal Momoh, an AI & Software Full-Stack Engineer and Cohort 1 Software Engineering Fellow at Learn2Earn NG. I build secure agentic architectures and fast, user-centric interfaces.
          </motion.p>
          
          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3 font-sans text-sm font-medium">
            <a href="https://github.com/jezreal-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-forge-fg/10 bg-forge-card px-5 py-2.5 hover:border-forge-accent hover:text-forge-accent transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jezreal-momoh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-forge-fg/10 bg-forge-card px-5 py-2.5 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://x.com/laerzej_m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-forge-fg/10 bg-forge-card px-5 py-2.5 hover:border-forge-fg hover:text-white transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FaXTwitter size={16} /> Twitter/X
            </a>
            <a href="mailto:jezreelmomoh1234@gmail.com" className="flex items-center gap-2 border border-forge-fg/10 bg-forge-card px-5 py-2.5 hover:border-[#EA4335] hover:text-[#EA4335] transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FaEnvelope size={16} /> Personal
            </a>
            <a href="mailto:jezreelglobal@gmail.com" className="flex items-center gap-2 border border-forge-fg/10 bg-forge-card px-5 py-2.5 hover:border-[#EA4335] hover:text-[#EA4335] transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FaBriefcase size={16} /> Work
            </a>
          </motion.div>
        </div>
        
        {/* Interactive Avatar Container */}
        <motion.div variants={itemVariants} className="relative group perspective-1000">
          {/* Animated Offset Circle Outline */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-forge-accent/40 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-3 -right-3 h-56 w-56 rounded-full border-2 border-forge-accent/50 bg-transparent transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-forge-accent" />
          <div className="relative overflow-hidden h-56 w-56 rounded-full border-4 border-forge-card bg-forge-bg flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/jezreal-momoh.png"
              alt="Jezreal Momoh"
              width={224}
              height={224}
              className="object-cover h-full w-full"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}