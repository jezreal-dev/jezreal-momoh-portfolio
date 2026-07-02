import React from "react";

export default function SkillMatrix() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <span className="font-mono text-xs uppercase tracking-widest text-forge-accent">[03 // Skill Matrix]</span>
      <h2 className="mt-2 font-sans text-3xl md:text-4xl font-bold tracking-tight text-forge-fg">
        ENGINEERING LINKAGES
      </h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-forge-fg/15 bg-forge-card p-6 rounded-lg font-mono">
          <h3 className="text-forge-fg font-bold border-b border-forge-fg/10 pb-2 mb-4 text-sm">[01. FRONTEND]</h3>
          <p className="text-xs text-forge-fg/70 leading-relaxed">
            Next.js & React to build performant web interfaces. Focus on layout optimization, component isolation, and micro-interactions.
          </p>
        </div>
        
        <div className="border border-forge-fg/15 bg-forge-card p-6 rounded-lg font-mono">
          <h3 className="text-forge-fg font-bold border-b border-forge-fg/10 pb-2 mb-4 text-sm">[02. BACKEND]</h3>
          <p className="text-xs text-forge-fg/70 leading-relaxed">
            Go & Python to construct low-latency JSON REST APIs and worker queues. Clean structures for database pools.
          </p>
        </div>

        <div className="border border-forge-fg/15 bg-forge-card p-6 rounded-lg font-mono">
          <h3 className="text-forge-fg font-bold border-b border-forge-fg/10 pb-2 mb-4 text-sm">[03. AI & SECURITY]</h3>
          <p className="text-xs text-forge-fg/70 leading-relaxed">
            RAG pipeline design, agentic validation workflows, and front-to-back security controls against payload threats.
          </p>
        </div>
      </div>

      <div className="mt-6 border border-forge-accent/20 bg-forge-accent/5 p-6 rounded-lg font-mono text-xs md:text-sm text-forge-fg/90 flex flex-col gap-2">
        <span className="text-forge-accent font-bold">// KEY ENGINEERING LINKAGE</span>
        <p>
          I write Python code for advanced LLM reasoning tasks and parser agents, linked to a performant Go API gateway designed for high-concurrency connections.
        </p>
      </div>
    </section>
  );
}
