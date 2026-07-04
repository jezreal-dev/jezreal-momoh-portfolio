"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "VoltIQ",
    badge: "AI Fleet Engine",
    problem: "Commercial EV fleets in Lagos lack real-time charging optimization, leading to downtime and high costs.",
    solution: "A real-time AI-powered charging optimization engine built entirely on AWS Serverless and Amazon Bedrock.",
    tech: ["Go", "AWS Lambda", "DynamoDB", "Amazon Bedrock"],
    github: "https://github.com/jezreal-dev/voltiq",
    live: "https://voltiq-ai.lovable.app",
  },
  {
    id: "02",
    title: "EduPilot",
    badge: "IIHDevBox Hackathon Winner",
    problem: "Nigerian teachers spend 15+ hours/week planning lessons manually.",
    solution: "An AI copilot automating curriculum-aligned lesson planning and resource generation.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini API"],
    github: "https://github.com/jezreal-dev/edupilot",
    live: "https://edupilot.ng",
  },
  {
    id: "03",
    title: "L2E-Shield",
    badge: "Open-Source Gateway",
    problem: "AI API endpoints are vulnerable to prompt injections and denial-of-wallet token exhaustion.",
    solution: "A high-performance Go proxy caching LLM calls and filtering malicious prompts before they hit downstream APIs.",
    tech: ["Go", "Redis", "Docker", "Gemini API"],
    github: "https://github.com/jezreal-dev/L2E-Shield",
    live: "",
  },
  {
    id: "04",
    title: "ASCII Art Web Generator",
    badge: "REST API Dashboard",
    problem: "Need a high-performance, containerized backend to generate monospaced ASCII banner art dynamically.",
    solution: "A Go web server and REST API featuring template-based rendering and async AJAX submissions.",
    tech: ["Go", "HTML/CSS", "JavaScript", "Docker"],
    github: "https://github.com/jezreal-dev/ascii-art-web",
    live: "",
  },
  {
    id: "05",
    title: "Ropa-Sci",
    badge: "Multiplayer TUI",
    problem: "Terminal environments lack modern, interactive, and predictable multiplayer gaming platforms.",
    solution: "A modern, multiplayer Rock-Paper-Scissors TUI gaming platform with predictive AI and P2P WebSockets.",
    tech: ["Go", "Bubble Tea", "WebSockets", "JSON State"],
    github: "https://github.com/jezreal-dev/ropa-sci",
    live: "",
  }
];

export default function ProofOfWork() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-forge-accent bg-forge-accent/10 px-4 py-1.5 rounded-full border border-forge-accent/20">Featured Projects</span>
        <h2 className="mt-6 font-sans text-4xl md:text-5xl font-extrabold tracking-tight text-forge-fg">
          SHIPPED CODE & LIVE SYSTEMS
        </h2>
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-10"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden border border-forge-fg/10 bg-forge-card/60 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-forge-accent/10 hover:border-forge-accent/40 transition-all duration-300 group"
          >
            {/* Ambient hover glow inside card */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-forge-accent/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            {/* Project Card Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forge-fg/10 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <span className="font-sans text-lg font-bold text-forge-bg bg-forge-accent px-3 py-1 rounded-full shadow-inner">{project.id}</span>
                <h3 className="font-sans text-3xl font-extrabold text-forge-fg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-forge-fg group-hover:to-forge-accent transition-colors duration-300">{project.title}</h3>
              </div>
              {project.badge && (
                <span className="font-sans font-bold text-xs uppercase tracking-wider bg-forge-accent/10 text-forge-accent px-4 py-1.5 rounded-full border border-forge-accent/20">
                  {project.badge}
                </span>
              )}
            </div>
            
            {/* Project Problem & Solution Statements */}
            <div className="space-y-6 font-sans text-lg text-forge-fg/80 font-medium">
              <p>
                <span className="text-forge-accent font-bold uppercase tracking-wider text-sm block mb-1">Problem</span> 
                {project.problem}
              </p>
              <p>
                <span className="text-forge-accent font-bold uppercase tracking-wider text-sm block mb-1">Solution</span> 
                {project.solution}
              </p>
            </div>
            
            {/* Project Footer: Tech Stack & Links */}
            <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Tech Stack Array */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-forge-bg border border-forge-fg/10 px-3 py-1.5 text-sm font-semibold text-forge-fg/80 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Project Links */}
              <div className="flex gap-6 pt-4 md:pt-0 text-base font-bold">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-forge-fg hover:text-forge-accent flex items-center gap-2 transition-colors">
                  View Source
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-forge-fg hover:text-forge-accent flex items-center gap-2 transition-colors">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
