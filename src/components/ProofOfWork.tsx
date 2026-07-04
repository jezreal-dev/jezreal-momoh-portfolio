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
    title: "VoltIQ",
    badge: "AI EV Fleet Optimization",
    problem: "Commercial EV fleets in Lagos need to shift charging to off-peak grid hours to reduce high tariff costs.",
    solution: "A real-time optimization engine that monitors battery states and uses Amazon Bedrock to dynamically schedule vehicle charging.",
    tech: ["Go", "AWS Lambda", "DynamoDB", "WebSockets", "Amazon Bedrock"],
    github: "https://github.com/jezreal-dev/VoltIQ",
    live: "https://voltiq-ai.lovable.app",
  },
  {
    id: "02",
    title: "EduPilot",
    badge: "AI Curriculum Engine",
    problem: "Nigerian teachers spend 15+ hours/week planning lessons manually and mapping syllabi.",
    solution: "An intelligent web app that parses unstructured PDFs and transforms them into active teaching schedules and pacing guides.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI"],
    github: "https://github.com/jezreal-dev/edupilot",
    live: "https://edupilot.vercel.app",
  },
  {
    id: "03",
    title: "Ropa-Sci",
    badge: "Multiplayer TUI Platform",
    problem: "Terminal games lack modern aesthetics, reliable local multiplayer, and predictive AI opponents.",
    solution: "A collaborative Go-based TUI featuring a predictive Markov Chain AI, P2P WebSockets, and a thread-safe JSON state store.",
    tech: ["Go", "Bubble Tea", "WebSockets", "P2P Networking"],
    github: "https://github.com/jezreal-dev/ropa-sci",
  },
  {
    id: "04",
    title: "SRE Triage Agent",
    badge: "Google AI Agents Capstone",
    problem: "Manual triage of infrastructure incidents lacks standardized RCA documentation and slows down resolution.",
    solution: "A multi-agent orchestration pipeline that classifies events, searches runbooks, generates RCA docs, and enforces human-in-the-loop safety gates.",
    tech: ["Python", "MCP", "Google ADK", "LLM Orchestration"],
    github: "https://github.com/jezreal-dev/google-ai-agents-intensive",
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
                  <span className="font-mono text-sm text-forge-accent">{project.id} {"//"}</span>
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
