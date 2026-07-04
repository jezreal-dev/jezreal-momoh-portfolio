"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import TimeWidget from "./TimeWidget";

/**
 * Header Component
 * 
 * Provides a sticky top navigation bar with a subtle border and glassmorphism backdrop blur.
 * Uses custom Forge color tokens for theme consistency.
 * 
 * Design Details:
 * 1. Sticky position ensures the navigation bar is always accessible.
 * 2. Glassmorphic backdrop blur (backdrop-blur-md) provides readability over content.
 * 3. Text and border variables map directly to custom Forge tailwind configurations.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-forge-fg/10 bg-forge-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo Branding */}
        <div className="font-mono text-lg font-bold tracking-tight text-forge-fg">
          jezreal<span className="text-forge-accent">.dev</span>
        </div>
        
        {/* Right Side: Nav & Utilities */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-6 font-mono text-sm">
            <a href="#work" className="text-forge-fg/80 hover:text-forge-accent transition-colors font-medium">
              Work
            </a>
            <a href="#skills" className="text-forge-fg/80 hover:text-forge-accent transition-colors font-medium">
              Skills
            </a>
            <a href="#newsletter" className="text-forge-fg/80 hover:text-forge-accent transition-colors font-medium">
              Newsletter
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:border-l sm:border-forge-fg/10 sm:pl-6">
            <div className="hidden md:block">
              <TimeWidget />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
