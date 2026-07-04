import React from "react";

/**
 * SkillMatrix Component
 * 
 * Displays the core skill competencies grouped into clean categories.
 * Showcases frontend, backend, and security domains, with a custom callout block.
 * 
 * Design Details:
 * 1. Grid layout transitions dynamically from single column on small screens to three columns (md:grid-cols-3).
 * 2. Employs JetBrains Mono for a consistent technical aesthetic.
 * 3. Highlights the integration of Go and Python for concurrent systems and AI modeling.
 */
export default function SkillMatrix() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      {/* Section Header */}
      <span className="font-mono text-xs uppercase tracking-widest text-forge-accent">[03 // Skill Matrix]</span>
      <h2 className="mt-2 font-sans text-3xl md:text-4xl font-bold tracking-tight text-forge-fg">
        ENGINEERING LINKAGES
      </h2>
      
      {/* Category Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend Section */}
        <div className="border border-forge-fg/15 bg-forge-card p-6 rounded-lg font-mono">
          <h3 className="text-forge-fg font-bold border-b border-forge-fg/10 pb-2 mb-4 text-sm">[01. FRONTEND]</h3>
          <p className="text-xs text-forge-fg/70 leading-relaxed">
            Next.js, TypeScript, & Tailwind CSS to build performant web interfaces. Experience with global state (Zustand) and WebSockets for real-time dashboards.
          </p>
        </div>
        
        {/* Backend Section */}
        <div className="border border-forge-fg/15 bg-forge-card p-6 rounded-lg font-mono">
          <h3 className="text-forge-fg font-bold border-b border-forge-fg/10 pb-2 mb-4 text-sm">[02. BACKEND & CLOUD]</h3>
          <p className="text-xs text-forge-fg/70 leading-relaxed">
            Go & Python for high-concurrency APIs. Serverless architecture using AWS Lambda, DynamoDB, SQS, and Supabase / PostgreSQL.
          </p>
        </div>

        {/* AI & Infrastructure Section */}
        <div className="border border-forge-fg/15 bg-forge-card p-6 rounded-lg font-mono">
          <h3 className="text-forge-fg font-bold border-b border-forge-fg/10 pb-2 mb-4 text-sm">[03. AI & AGENTIC SYSTEMS]</h3>
          <p className="text-xs text-forge-fg/70 leading-relaxed">
            Designing multi-agent orchestration pipelines (MCP, Google ADK) and integrating LLMs (Gemini AI, Amazon Bedrock) into production systems.
          </p>
        </div>
      </div>

      {/* Integration Highlight Callout */}
      <div className="mt-6 border border-forge-accent/20 bg-forge-accent/5 p-6 rounded-lg font-mono text-xs md:text-sm text-forge-fg/90 flex flex-col gap-2">
        <span className="text-forge-accent font-bold">{"//"} KEY ENGINEERING LINKAGE</span>
        <p>
          I write Python code for advanced LLM reasoning tasks and parser agents, linked to a performant Go API gateway designed for high-concurrency connections.
        </p>
      </div>
    </section>
  );
}
