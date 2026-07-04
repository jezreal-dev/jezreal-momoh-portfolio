import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaBriefcase } from "react-icons/fa6";
/**
 * Footer Component
 * 
 * Provides a responsive footer layout containing copyright information, social links,
 * and an embedded JSON-LD schema metadata block for Search Engine Optimization (SEO)
 * and Machine Experience (MX) compliance.
 * 
 * Design Details:
 * 1. Flex layout changes direction on medium screens (md:flex-row) for optimal layout.
 * 2. Custom Forge color variables ensure styling consistency.
 * 3. Script element embeds schema data structured according to Schema.org standards.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // JSON-LD structured data for Person entity to improve indexing quality.
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jezreal Momoh",
    "jobTitle": "AI & Software Full-Stack Engineer",
    "url": "https://jezrealmomoh.vercel.app",
    "sameAs": [
      "https://github.com/jezreal-dev",
      "https://www.linkedin.com/in/jezreal-momoh/",
      "https://x.com/laerzej_m"
    ]
  };

  return (
    <footer className="w-full border-t border-forge-fg/10 bg-forge-bg py-8 mt-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-forge-fg/50">
        {/* Copyright info */}
        <div>
          &copy; {currentYear} Jezreal Momoh. All rights reserved.
        </div>
        {/* Social Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/jezreal-dev" target="_blank" rel="noopener noreferrer" className="hover:text-forge-accent" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jezreal-momoh/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2]" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/laerzej_m" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Twitter/X">
            <FaXTwitter />
          </a>
          <a href="mailto:jezreelmomoh1234@gmail.com" className="hover:text-[#EA4335]" aria-label="Personal Email">
            <FaEnvelope />
          </a>
          <a href="mailto:jezreelglobal@gmail.com" className="hover:text-[#EA4335]" aria-label="Work Email">
            <FaBriefcase />
          </a>
        </div>
        {/* MX Indicator */}
        <div className="text-[10px] text-forge-accent">
          [MX-Optimized Schema Embedded]
        </div>
        {/* JSON-LD Script Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </footer>
  );
}
