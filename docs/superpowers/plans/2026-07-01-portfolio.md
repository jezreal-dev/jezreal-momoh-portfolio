# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bespoke, premium, single-page portfolio website for Jezreal Momoh using Next.js App Router (Static Export) and Tailwind CSS with custom Forge theme tokens.

**Architecture:** A modular React single-page application where each layout component (Header, Hero, ValueRole, ProofOfWork, SkillMatrix, Newsletter, Footer) is structured in separate files. Responsive layout, sub-second page loads, semantic HTML, and structured JSON-LD metadata for search engine indexing.

**Tech Stack:** Next.js, React, Tailwind CSS, TypeScript

## Global Constraints

- Background Color: `#0D0D0D`
- Accent Color: `#E8630A`
- Foreground Text Color: `#F5F0E8`
- Cards Background Color: `#1C2B3A`
- Highlight Color: `#FFBE0B`
- Typography: Outfit (Headings), JetBrains Mono (Monospace code elements)
- Strict Grammar: No em dashes (—) anywhere
- No AI clichés (e.g. "genuinely", "honestly", "delve", "straightforward", "testament")
- No bullet lists unless representing a code checklist or UI layout

---

### Task 1: Next.js Initialization & Forge Theme Config

**Files:**
- Create: `package.json`
- Create: `tailwind.config.ts`
- Create: `next.config.ts`
- Create: `vercel.json`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: None
- Produces: App structure and Tailwind configuration with custom Forge color variables.

- [ ] **Step 1: Scaffold Next.js App in workspace root**

Run command to scaffold the app. Since the directory is non-empty, we will use the non-interactive setup with defaults:
```powershell
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --use-npm --disable-git --yes
```

- [ ] **Step 2: Add static export config to next.config.ts**

Open `next.config.ts` (or `next.config.js`) and modify it to:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3: Add custom Forge color tokens to tailwind.config.ts**

Modify the Tailwind configuration to define our Forge theme. Replace standard extend colors and fonts:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          bg: "#0D0D0D",
          accent: "#E8630A",
          fg: "#F5F0E8",
          card: "#1C2B3A",
          amber: "#FFBE0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Update src/app/globals.css for theme defaults**

Replace content in `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    background-color: #0D0D0D;
    color: #F5F0E8;
    font-family: var(--font-outfit), sans-serif;
  }
}
```

- [ ] **Step 5: Create vercel.json for clean deployment mapping**

Create `vercel.json` in the root:
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

- [ ] **Step 6: Verify build executes static export**

Run: `npm run build`  
Expected: Build succeeds and generates static files under the `out` directory.

- [ ] **Step 7: Commit task changes**

Run:
```powershell
git add package.json tailwind.config.ts next.config.ts vercel.json src/app/globals.css
git commit -m "chore: scaffold Next.js project with custom Forge Tailwind tokens"
```

---

### Task 2: Layout & Core Shell Components (Header & Footer)

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: Custom Forge Tailwind configuration
- Produces: Header nav structure, Footer copyright + social links, and Google font injections in layouts.

- [ ] **Step 1: Create Header Component**

Create `src/components/Header.tsx`:
```tsx
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
```

- [ ] **Step 2: Create Footer Component with JSON-LD metadata**

Create `src/components/Footer.tsx`:
```tsx
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
```

- [ ] **Step 3: Modify Layout file to integrate Google Fonts and structure**

Replace `src/app/layout.tsx` to include `Outfit` and `JetBrains_Mono` fonts:
```tsx
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Jezreal Momoh | AI & Software Full-Stack Engineer",
  description: "AI & Software Full-Stack Engineer building in public from Nigeria. Founder of EduPilot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build succeeds**

Run: `npm run build`  
Expected: Successful build with static assets exported.

- [ ] **Step 5: Commit changes**

Run:
```powershell
git add src/app/layout.tsx src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat: add Header and Footer shell with fonts and JSON-LD schema"
```

---

### Task 3: Hero & Value/Role Components

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/ValueRole.tsx`
- Modify: `src/app/page.tsx`
- Create: `public/images/headshot-placeholder.svg`

**Interfaces:**
- Consumes: Custom Forge layout shell.
- Produces: Hero and Value/Role blocks mounted to page.tsx.

- [ ] **Step 1: Create headshot placeholder image**

Create SVG asset at `public/images/headshot-placeholder.svg`:
```xml
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="100" fill="#1C2B3A"/>
  <circle cx="100" cy="80" r="40" fill="#E8630A"/>
  <path d="M40 160 C 40 120, 160 120, 160 160" stroke="#E8630A" stroke-width="8" fill="none"/>
</svg>
```

- [ ] **Step 2: Create Hero Component**

Create `src/components/Hero.tsx` with editorial alignment and offset border picture frame:
```tsx
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-forge-accent bg-forge-card px-3 py-1 rounded">
            Ilorin, Nigeria
          </span>
          <h1 className="mt-6 font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-forge-fg leading-none">
            BUILDING FULL-STACK AI PRODUCTS FROM SCRATCH.
          </h1>
          <p className="mt-6 font-sans text-lg text-forge-fg/80 leading-relaxed">
            I am Jezreal Momoh, an AI & Software Full-Stack Engineer and Cohort 1 Software Engineering Fellow at Learn2Earn NG. I build secure agentic architectures and fast, user-centric interfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <a href="https://github.com/jezrealdev" target="_blank" rel="noopener noreferrer" className="border border-forge-accent px-5 py-2 hover:bg-forge-accent hover:text-forge-bg transition-colors">
              [GitHub Profile]
            </a>
            <a href="https://linkedin.com/in/jezreal-momoh" target="_blank" rel="noopener noreferrer" className="border border-forge-fg/20 px-5 py-2 hover:border-forge-fg transition-colors">
              [LinkedIn]
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-3 -right-3 h-48 w-48 rounded-full border-2 border-forge-accent bg-transparent transition-transform duration-300 hover:translate-x-1 hover:translate-y-1" />
          <div className="relative overflow-hidden h-48 w-48 rounded-full border border-forge-fg/10 bg-forge-card flex items-center justify-center">
            <Image
              src="/images/headshot-placeholder.svg"
              alt="Jezreal Momoh"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create Value/Role Component**

Create `src/components/ValueRole.tsx` using a monospaced "Build in Public" console block:
```tsx
import React from "react";

export default function ValueRole() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="border border-forge-fg/15 bg-forge-card p-6 md:p-8 rounded-lg font-mono">
        <div className="flex items-center gap-2 border-b border-forge-fg/10 pb-4 mb-4">
          <span className="h-3 w-3 rounded-full bg-forge-accent" />
          <span className="text-xs text-forge-fg/60">jezreal@forge:~/philosophy</span>
        </div>
        <h2 className="text-forge-accent text-sm uppercase tracking-wider mb-2">[Core Value Proposition]</h2>
        <p className="text-sm sm:text-base text-forge-fg/90 leading-relaxed max-w-3xl">
          I help early-career African developers and builders understand what it actually looks like to build and deploy real, secure, AI-powered full-stack products by sharing the raw, unfiltered journey of doing it myself, from Ilorin, Nigeria.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Mount Hero and Value/Role to Page**

Replace `src/app/page.tsx` with:
```tsx
import Hero from "@/components/Hero";
import ValueRole from "@/components/ValueRole";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ValueRole />
    </div>
  );
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`  
Expected: Successful compilation.

- [ ] **Step 6: Commit changes**

Run:
```powershell
git add public/images/headshot-placeholder.svg src/components/Hero.tsx src/components/ValueRole.tsx src/app/page.tsx
git commit -m "feat: implement Hero and Value/Role components with offset styling"
```

---

### Task 4: Proof of Work & Skill Matrix Components

**Files:**
- Create: `src/components/ProofOfWork.tsx`
- Create: `src/components/SkillMatrix.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: Custom Forge layout shell.
- Produces: Project timeline and dynamic skill listings.

- [ ] **Step 1: Create ProofOfWork Component**

Create `src/components/ProofOfWork.tsx`:
```tsx
import React from "react";

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

export default function ProofOfWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <div className="border-l-2 border-forge-accent/20 pl-6 md:pl-8">
        <span className="font-mono text-xs uppercase tracking-widest text-forge-accent">[02 // Proof of Work]</span>
        <h2 className="mt-2 font-sans text-3xl md:text-4xl font-bold tracking-tight text-forge-fg">
          SHIPPED CODE & LIVE SYSTEMS
        </h2>
        <div className="mt-12 flex flex-col gap-12">
          {projects.map((project) => (
            <div key={project.id} className="relative border border-forge-fg/15 bg-forge-card p-6 md:p-8 rounded-lg">
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
              <div className="space-y-4 font-mono text-sm text-forge-fg/80">
                <p>
                  <span className="text-forge-accent">PROBLEM:</span> {project.problem}
                </p>
                <p>
                  <span className="text-forge-accent">SOLUTION:</span> {project.solution}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-forge-bg text-forge-fg border border-forge-fg/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
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
```

- [ ] **Step 2: Create SkillMatrix Component**

Create `src/components/SkillMatrix.tsx` with dynamic connective callouts:
```tsx
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
```

- [ ] **Step 3: Mount Components to page.tsx**

Modify `src/app/page.tsx` to include `ProofOfWork` and `SkillMatrix`:
```tsx
import Hero from "@/components/Hero";
import ValueRole from "@/components/ValueRole";
import ProofOfWork from "@/components/ProofOfWork";
import SkillMatrix from "@/components/SkillMatrix";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ValueRole />
      <ProofOfWork />
      <SkillMatrix />
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`  
Expected: Static build completes with zero linting or routing issues.

- [ ] **Step 5: Commit changes**

Run:
```powershell
git add src/components/ProofOfWork.tsx src/components/SkillMatrix.tsx src/app/page.tsx
git commit -m "feat: implement ProofOfWork and SkillMatrix components"
```

---

### Task 5: Newsletter Component & Final Verification

**Files:**
- Create: `src/components/Newsletter.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: Complete page wrapper.
- Produces: Integrated Substack newsletter signup footer element.

- [ ] **Step 1: Create Newsletter Component**

Create `src/components/Newsletter.tsx`:
```tsx
"use client";

import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <div className="border border-forge-fg/15 bg-forge-card p-8 rounded-lg text-center font-mono">
        <span className="text-xs uppercase tracking-widest text-forge-accent">[Weekly Reflections]</span>
        <h2 className="mt-3 font-sans text-2xl md:text-3xl font-bold tracking-tight text-forge-fg">
          BUILDING IN PUBLIC NEWSLETTER
        </h2>
        <p className="mt-4 text-sm text-forge-fg/80 max-w-lg mx-auto leading-relaxed">
          I write a weekly Sunday newsletter sharing raw engineering logs, lesson plans, and full-stack strategies.
        </p>
        <form
          action="https://jezrealdev.substack.com/subscribe"
          method="GET"
          target="_blank"
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address..."
            required
            className="flex-grow bg-forge-bg border border-forge-fg/20 px-4 py-3 text-sm text-forge-fg placeholder-forge-fg/40 focus:outline-none focus:border-forge-accent"
          />
          <button
            type="submit"
            className="bg-forge-accent text-forge-bg font-bold px-6 py-3 text-sm hover:bg-forge-accent/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Mount Newsletter to page.tsx**

Modify `src/app/page.tsx` to mount `Newsletter`:
```tsx
import Hero from "@/components/Hero";
import ValueRole from "@/components/ValueRole";
import ProofOfWork from "@/components/ProofOfWork";
import SkillMatrix from "@/components/SkillMatrix";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <ValueRole />
      <ProofOfWork />
      <SkillMatrix />
      <Newsletter />
    </div>
  );
}
```

- [ ] **Step 3: Run final production build**

Run: `npm run build`  
Expected: The export finishes successfully with output in `out/`.

- [ ] **Step 4: Commit all changes**

Run:
```powershell
git add src/components/Newsletter.tsx src/app/page.tsx
git commit -m "feat: add Substack newsletter signup component"
```
