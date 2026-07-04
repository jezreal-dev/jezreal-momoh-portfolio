import React from "react";

const projects = [
  {
    id: "01",
    title: "VoltIQ",
    badge: "Production SaaS",
    problem: "Data centers faced a 15% efficiency loss due to unoptimized cooling and power management.",
    solution: "Architected a scalable Next.js dashboard integrated with IoT sensors. Processed real-time telemetry data to dynamically adjust cooling, saving an estimated 12% in energy costs across 3 facilities.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    github: "https://github.com/jezreal-dev/voltiq",
    live: "https://voltiq.example.com",
  },
  {
    id: "02",
    title: "EduPilot",
    badge: "EdTech Platform",
    problem: "University course registration was plagued by severe latency during peak enrollment periods.",
    solution: "Designed and implemented a distributed microservices backend using Go. Leveraged Redis caching to handle 10k+ concurrent users, reducing average page load from 4.2s to 300ms.",
    tech: ["Go", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/jezreal-dev/edupilot",
    live: "https://edupilot.example.com",
  },
  {
    id: "03",
    title: "Ropa-Sci",
    badge: "Game Backend",
    problem: "Existing online Rock-Paper-Scissors games lacked a robust, cheat-proof multiplayer architecture.",
    solution: "Built an authoritative game server with Go and WebSockets. Implemented state synchronization and basic matchmaking to ensure fair play for concurrent global users.",
    tech: ["Go", "WebSockets", "Concurrency"],
    github: "https://github.com/jezreal-dev/ropa-sci",
    live: "",
  },
  {
    id: "04",
    title: "L2E-Shield",
    badge: "Security API",
    problem: "Public AI agents were susceptible to prompt injection and rate-limit abuse by malicious actors.",
    solution: "Developed a secure API Gateway in Go serving as a reverse proxy. Features custom rate-limiting algorithms and payload sanitization before routing to upstream LLMs.",
    tech: ["Go", "Reverse Proxy", "Security Contexts"],
    github: "https://github.com/jezreal-dev/l2e-shield",
    live: "",
  }
];

export default function ProofOfWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <div className="mb-12">
        <span className="font-sans text-sm font-semibold uppercase tracking-widest text-forge-accent">Featured Projects</span>
        <h2 className="mt-2 font-sans text-3xl md:text-4xl font-bold tracking-tight text-forge-fg">
          SHIPPED CODE & LIVE SYSTEMS
        </h2>
      </div>
      
      {/* Projects Grid */}
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div key={project.id} className="relative border border-forge-fg/10 bg-forge-card p-6 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            {/* Project Card Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-forge-fg/10 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-medium text-forge-accent bg-forge-accent/10 px-3 py-1 rounded-full">{project.id}</span>
                <h3 className="font-sans text-2xl font-bold text-forge-fg">{project.title}</h3>
              </div>
              {project.badge && (
                <span className="font-sans font-medium text-xs bg-forge-accent/10 text-forge-accent px-3 py-1 rounded-full">
                  {project.badge}
                </span>
              )}
            </div>
            {/* Project Problem & Solution Statements */}
            <div className="space-y-4 font-sans text-base text-forge-fg/90">
              <p>
                <span className="text-forge-accent font-semibold">PROBLEM:</span> {project.problem}
              </p>
              <p>
                <span className="text-forge-accent font-semibold">SOLUTION:</span> {project.solution}
              </p>
            </div>
            {/* Project Footer: Tech Stack & Links */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Tech Stack Array */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-forge-bg border border-forge-fg/10 px-2 py-1 text-xs text-forge-fg/70 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Project Links */}
              <div className="flex gap-4 pt-4 md:pt-0 text-sm font-medium">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-forge-accent hover:underline">
                  GitHub Repository
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-forge-fg/60 hover:text-forge-fg hover:underline">
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
