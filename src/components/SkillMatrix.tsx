import React from "react";

export default function SkillMatrix() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-sans text-sm font-semibold uppercase tracking-widest text-forge-accent">Technical Expertise</span>
        <h2 className="mt-2 font-sans text-3xl md:text-4xl font-bold tracking-tight text-forge-fg">
          ENGINEERING LINKAGES
        </h2>
      </div>
      
      {/* Category Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend Section */}
        <div className="border border-forge-fg/5 bg-forge-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-forge-fg font-bold font-sans text-xl border-b border-forge-fg/10 pb-4 mb-4">Frontend</h3>
          <p className="text-base font-sans text-forge-fg/80 leading-relaxed font-medium">
            Next.js, TypeScript, & Tailwind CSS to build performant web interfaces. Experience with global state (Zustand) and WebSockets for real-time dashboards.
          </p>
        </div>
        
        {/* Backend Section */}
        <div className="border border-forge-fg/5 bg-forge-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-forge-fg font-bold font-sans text-xl border-b border-forge-fg/10 pb-4 mb-4">Backend & Cloud</h3>
          <p className="text-base font-sans text-forge-fg/80 leading-relaxed font-medium">
            Go & Python for high-concurrency APIs. Serverless architecture using AWS Lambda, DynamoDB, SQS, and Supabase / PostgreSQL.
          </p>
        </div>

        {/* AI & Infrastructure Section */}
        <div className="border border-forge-fg/5 bg-forge-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-forge-fg font-bold font-sans text-xl border-b border-forge-fg/10 pb-4 mb-4">AI & Agentic Systems</h3>
          <p className="text-base font-sans text-forge-fg/80 leading-relaxed font-medium">
            Designing multi-agent orchestration pipelines (MCP, Google ADK) and integrating LLMs (Gemini AI, Amazon Bedrock) into production systems.
          </p>
        </div>
      </div>

      {/* Integration Highlight Callout */}
      <div className="mt-10 border border-forge-accent/20 bg-forge-accent/5 p-8 rounded-xl font-sans text-sm md:text-base text-forge-fg/90 flex flex-col gap-3 shadow-sm">
        <span className="text-forge-accent font-bold uppercase tracking-wider text-sm">Key Engineering Linkage</span>
        <p className="font-medium leading-relaxed">
          I write Python code for advanced LLM reasoning tasks and parser agents, linked to a performant Go API gateway designed for high-concurrency connections.
        </p>
      </div>
    </section>
  );
}
