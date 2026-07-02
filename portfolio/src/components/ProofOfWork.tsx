import React from "react";

// Represents metadata structure for showcased projects.
interface Project {
  id: string;
  title: string;
  badge?: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  live?: string;
}

// Showcased projects demonstrating active full-stack and backend Go achievements.
const projects: Project[] = [
  {
    id: "01",
    title: "EduPilot",
    badge: "IIHDevBox Hackathon Winner",
    problem: "Nigerian teachers spend 15+ hours/week planning lessons manually.",
    solution: "An AI copilot automating curriculum-aligned lesson planning and resource generation.",
    tech: ["Next.js", "React", "Go API", "PostgreSQL"],
    github: "https://github.com/jezrealdev/edupilot",
    live: "https://edupilot.ng",
  },
  {
    id: "02",
    title: "L2E-Shield",
    badge: "Open-Source Gateway",
    problem: "AI API endpoints are vulnerable to prompt injections and denial-of-wallet token exhaustion.",
    solution: "A lightweight Go proxy caching LLM calls and filtering malicious prompts before they hit downstream APIs.",
    tech: ["Go", "Redis", "Docker", "Gemini API"],
    github: "https://github.com/jezrealdev/l2e-shield",
  },
];

/**
 * ProofOfWork Component
 * 
 * Showcases completed projects in an vertical chronological timeline style.
 * Maps project structures to clean monospace cards.
 * 
 * Design Details:
 * 1. Timeline accent line (border-l-2) matches the primary accent color at low opacity.
 * 2. Responsive wrapping handles diverse badge lengths and spacing cleanly.
 * 3. Text blocks split the description into clear problem and solution statements.
 */
export default function ProofOfWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      {/* Timeline wrapper */}
      <div className="border-l-2 border-forge-accent/20 pl-6 md:pl-8">
        {/* Section Header */}
        <span className="font-mono text-xs uppercase tracking-widest text-forge-accent">[02 // Proof of Work]</span>
        <h2 className="mt-2 font-sans text-3xl md:text-4xl font-bold tracking-tight text-forge-fg">
          SHIPPED CODE & LIVE SYSTEMS
        </h2>
        {/* Projects Timeline Grid */}
        <div className="mt-12 flex flex-col gap-12">
          {projects.map((project) => (
            <div key={project.id} className="relative border border-forge-fg/15 bg-forge-card p-6 md:p-8 rounded-lg">
              {/* Project Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-forge-fg/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-forge-accent">{project.id} //</span>
                  <h3 className="font-sans text-xl font-bold text-forge-fg">{project.title}</h3>
                </div>
                {project.badge && (
                  <span className="font-mono text-[11px] bg-forge-accent/10 border border-forge-accent/30 text-forge-accent px-2 py-0.5 rounded">
                    {project.badge}
                  </span>
                )}
              </div>
              {/* Project Problem & Solution Statements */}
              <div className="space-y-4 font-mono text-sm text-forge-fg/80">
                <p>
                  <span className="text-forge-accent">PROBLEM:</span> {project.problem}
                </p>
                <p>
                  <span className="text-forge-accent">SOLUTION:</span> {project.solution}
                </p>
                {/* Tech Badge List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-forge-bg text-forge-fg border border-forge-fg/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                {/* Project Links */}
                <div className="flex gap-4 pt-4 text-xs">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-forge-accent hover:underline">
                    [GitHub Repository]
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-forge-fg/60 hover:text-forge-fg hover:underline">
                      [Live Site]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
