import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jezreal Momoh",
    "jobTitle": "AI & Software Full-Stack Engineer",
    "url": "https://jezreal.dev",
    "sameAs": [
      "https://github.com/jezrealdev",
      "https://linkedin.com/in/jezreal-momoh"
    ]
  };

  return (
    <footer className="w-full border-t border-forge-fg/10 bg-forge-bg py-8 mt-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-forge-fg/50">
        <div>
          &copy; {currentYear} Jezreal Momoh. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/jezrealdev" target="_blank" rel="noopener noreferrer" className="hover:text-forge-accent">
            GitHub
          </a>
          <a href="https://linkedin.com/in/jezreal-momoh" target="_blank" rel="noopener noreferrer" className="hover:text-forge-accent">
            LinkedIn
          </a>
        </div>
        <div className="text-[10px] text-forge-accent">
          [MX-Optimized Schema Embedded]
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </footer>
  );
}
