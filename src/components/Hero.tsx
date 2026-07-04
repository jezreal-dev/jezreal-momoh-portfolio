import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaBriefcase } from "react-icons/fa6";

/**
 * Hero Component
 * 
 * Renders the introductory hero section with a bold statement, bio description,
 * call to action links, and a custom interactive avatar.
 * 
 * Design Details:
 * 1. Responsive flex layout (flex-col-reverse lg:flex-row) keeps content readable on all views.
 * 2. Visual layout features an editorial statement in Outfit and mono details in JetBrains Mono.
 * 3. The interactive avatar uses group-hover to animate a burnt orange offset border.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Content Panel */}
        <div className="max-w-2xl text-left">
          {/* Location Badge */}
          <span className="font-mono text-xs uppercase tracking-widest text-forge-accent bg-forge-card px-3 py-1 rounded">
            Ilorin, Nigeria
          </span>
          {/* Main Statement */}
          <h1 className="mt-6 font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forge-fg leading-none">
            BUILDING FULL-STACK AI PRODUCTS FROM SCRATCH.
          </h1>
          {/* Intro Description */}
          <p className="mt-6 font-sans text-lg text-forge-fg/80 leading-relaxed">
             I am Jezreal Momoh, an AI & Software Full-Stack Engineer and Cohort 1 Software Engineering Fellow at Learn2Earn NG. I build secure agentic architectures and fast, user-centric interfaces.
          </p>
          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm">
            <a href="https://github.com/jezreal-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-forge-fg/20 bg-forge-card px-4 py-2 hover:border-forge-accent hover:text-forge-accent transition-colors rounded-md">
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jezreal-momoh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-forge-fg/20 bg-forge-card px-4 py-2 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors rounded-md">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://x.com/laerzej_m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-forge-fg/20 bg-forge-card px-4 py-2 hover:border-forge-fg hover:text-white transition-colors rounded-md">
              <FaXTwitter size={16} /> Twitter/X
            </a>
            <a href="mailto:jezreelmomoh1234@gmail.com" className="flex items-center gap-2 border border-forge-fg/20 bg-forge-card px-4 py-2 hover:border-[#EA4335] hover:text-[#EA4335] transition-colors rounded-md">
              <FaEnvelope size={16} /> Personal
            </a>
            <a href="mailto:jezreelglobal@gmail.com" className="flex items-center gap-2 border border-forge-fg/20 bg-forge-card px-4 py-2 hover:border-[#EA4335] hover:text-[#EA4335] transition-colors rounded-md">
              <FaBriefcase size={16} /> Work
            </a>
          </div>
        </div>
        {/* Interactive Avatar Container */}
        <div className="relative group">
          {/* Animated Offset Circle Outline */}
          <div className="absolute -bottom-3 -right-3 h-48 w-48 rounded-full border-2 border-forge-accent bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          {/* Avatar Image Frame */}
          <div className="relative overflow-hidden h-48 w-48 rounded-full border border-forge-fg/10 bg-forge-card flex items-center justify-center">
            <Image
              src="/images/headshot-placeholder.svg"
              alt="Jezreal Momoh"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}