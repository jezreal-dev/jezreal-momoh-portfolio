"use client";

import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-forge-fg/10 bg-forge-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="font-mono text-lg font-bold tracking-tight text-forge-fg">
          jezreal<span className="text-forge-accent">.dev</span>
        </div>
        <nav className="flex items-center gap-6 font-mono text-sm">
          <a href="#work" className="text-forge-fg/80 hover:text-forge-accent transition-colors">
            [Work]
          </a>
          <a href="#skills" className="text-forge-fg/80 hover:text-forge-accent transition-colors">
            [Skills]
          </a>
          <a href="#newsletter" className="text-forge-fg/80 hover:text-forge-accent transition-colors">
            [Substack]
          </a>
        </nav>
      </div>
    </header>
  );
}
