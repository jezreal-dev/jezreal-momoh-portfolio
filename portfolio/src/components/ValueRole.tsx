import React from "react";

/**
 * ValueRole Component
 * 
 * Displays the core value proposition statement within a terminal-themed container.
 * Employs mono styling (JetBrains Mono) and interactive border styles for a technical design feel.
 * 
 * Design Details:
 * 1. Card container uses the Forge card background and subtle border.
 * 2. Terminal header elements (mock path indicator, colored status dot) provide visual hierarchy.
 * 3. Max-width constraint on paragraph improves text readability.
 */
export default function ValueRole() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="border border-forge-fg/15 bg-forge-card p-6 md:p-8 rounded-lg font-mono">
        {/* Terminal Window Header */}
        <div className="flex items-center gap-2 border-b border-forge-fg/10 pb-4 mb-4">
          <span className="h-3 w-3 rounded-full bg-forge-accent" />
          <span className="text-xs text-forge-fg/60">jezreal@forge:~/philosophy</span>
        </div>
        {/* Value Proposition Statement */}
        <h2 className="text-forge-accent text-sm uppercase tracking-wider mb-2">[Core Value Proposition]</h2>
        <p className="text-sm sm:text-base text-forge-fg/90 leading-relaxed max-w-3xl">
          I help early-career African developers and builders understand what it actually looks like to build and deploy real, secure, AI-powered full-stack products by sharing the raw, unfiltered journey of doing it myself, from Ilorin, Nigeria.
        </p>
      </div>
    </section>
  );
}