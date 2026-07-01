# Design Specification: Jezreal Momoh Portfolio Website

**Date**: 2026-07-01  
**Author**: Antigravity (Personal Brand Manager & AI Assistant)  
**Topic**: Premium Single-Page Portfolio  
**Target Tech**: Next.js App Router (Static Export) + Tailwind CSS + Vercel

---

## 1. Executive Summary

This document specifies the design and implementation details for a bespoke, premium, single-page portfolio website for Jezreal Momoh. The site showcases his work as an **AI & Software Full-Stack Engineer** based in Ilorin, Nigeria. The design avoids generic AI-template clichés (neon borders, cyan grids, floating particles) in favor of **Intentional Minimalism**, typographic contrast, and offset layouts reminiscent of editorial/technical publications.

---

## 2. Brand Identity & Visual Theme ("Forge")

To stand out from standard developer portfolios, we will strictly implement the **Forge** visual palette:

| Asset / Token | Color Value | Purpose |
|---|---|---|
| Primary Background | `#0D0D0D` | Warm near-black background |
| Primary Accent | `#E8630A` | Burnt orange / ember accents, borders, offsets |
| Secondary Foreground | `#F5F0E8` | Warm off-white / cream body text |
| Secondary Background | `#1C2B3A` | Deep navy-slate for cards and highlights |
| Highlight Accent | `#FFBE0B` | Amber for specific highlights, tags, and states |

### Typography
*   **Display Font**: `Outfit` (loaded via Google Fonts) for headlines and high-level structural statements.
*   **Monospace Font**: `JetBrains Mono` for code blocks, labels, metadata, and structural offsets.

---

## 3. Architecture & File Structure

We will implement a modular structure using Next.js App Router. Each section of the landing page is isolated into its own component to keep files small, highly readable, and maintainable.

```text
/ (workspace root)
├── package.json
├── tsconfig.json
├── tailwind.config.js          # Tailored with Forge theme color tokens
├── next.config.js              # Configured for static export (output: 'export')
├── vercel.json                 # Vercel deployment settings
├── public/
│   ├── images/
│   │   └── headshot-placeholder.svg
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx          # Font loads, HTML wrapper, layout config
    │   ├── page.tsx            # Main single-page index importing all components
    │   └── globals.css         # Global CSS variable fallbacks, reset
    └── components/
        ├── Header.tsx          # Minimal sticky/static header
        ├── Hero.tsx            # Headline and offset profile frame
        ├── ValueRole.tsx       # Core value proposition statement
        ├── ProofOfWork.tsx     # EduPilot & SRE projects list
        ├── SkillMatrix.tsx     # Linked skills grid
        ├── Newsletter.tsx      # Substack signup form
        └── Footer.tsx          # Legal, links, and JSON-LD metadata block
```

---

## 4. Component Layout Specifications

### A. Header Component
*   **Aesthetics**: Sleek, sticky bar with background-blur (`backdrop-blur-md bg-opacity-70`).
*   **Content**: Left-aligned branding `jezreal.dev`. Right-aligned navigation links: `Work`, `Skills`, `Substack`.
*   **Interactive**: Underline animation for links using `#E8630A` on hover.

### B. Hero Component
*   **Aesthetics**: Offset visual elements. 
*   **Content**: Large bold headline: "BUILDING FULL-STACK AI PRODUCTS FROM ILORIN, NIGERIA". Monospaced subtitle detailing current role and fellowship status.
*   **Headshot Frame**: A circular or rounded frame (`rounded-2xl`) housing a placeholder image. Behind the frame, a hard border shadow offset (`translate-x-3 translate-y-3 bg-forge-accent`) creates a layered, physical design feel.

### C. Value/Role Component
*   **Aesthetics**: Clean, full-bleed section highlighting his core mission: helping developers see the real journey of full-stack AI building in public.
*   **Typography**: JetBrains Mono for a terminal-like text box.

### D. Proof of Work Component
*   **Aesthetics**: Alternating cards or timeline flow with a vertical accent line (`border-l border-forge-accent/20`).
*   **Project 1: EduPilot**:
    *   *Highlight*: Winner of IIHDevBox Hackathon.
    *   *Problem*: "Nigerian teachers spend 15+ hours/week planning lessons manually."
    *   *Solution*: "An AI copilot automating curriculum-aligned lesson planning."
    *   *Tech*: Badges for Next.js, React, Go API, PostgreSQL.
    *   *Links*: Clean text-based links: `[GitHub Repo]` and `[Live App]`.
*   **Project 2: L2E-Shield (Secure RAG Gateway)**:
    *   *Problem*: "AI API endpoints are vulnerable to prompt injections and denial-of-wallet token exhaustion."
    *   *Solution*: "A lightweight Go proxy caching LLM calls and filtering malicious prompts before they hit downstream APIs."
    *   *Tech*: Go, Redis, Docker, Gemini API.
    *   *Links*: `[GitHub Repo]`.

### E. Skill Matrix Component
*   **Aesthetics**: Multi-column responsive layout.
*   **linkages**:
    *   Frontend: Next.js & React (Crafting fast, clean UIs).
    *   Backend: Go & Python (Sub-10ms REST APIs & concurrent pipelines).
    *   AI & SRE: RAG architectures & prompt injection controls.
*   *Linkage Callout*: A full-width block showing how the languages combine ("Go for high-concurrency routing | Python for LLM parsing").

### F. Newsletter Component
*   **Aesthetics**: Offset newsletter banner styled with `#1C2B3A` background and `#F5F0E8` text.
*   **Form**: Action pointing to Jezreal's Substack. Single email input and Subscribe button.

---

## 5. Non-Functional Requirements & Performance

1.  **Sub-Second Load Times**: Keep bundle sizes small. No heavy animation libraries. Use CSS transitions for micro-interactions.
2.  **Machine Experience (MX)**: Include a schema script (`ld+json`) in the document head specifying `Person`, `SoftwareApplication` (EduPilot), and `Fellowship` details.
3.  **Static Export Compatibility**: Next.js must build cleanly to static files (`npm run build` runs `next build` which outputs to `out/`).

---

## 6. Verification Plan

### Automated Tests
*   `npm run build`: Verify zero build errors and successful static export.
*   `npm run lint`: Verify ESLint passes.

### Manual Verification
*   Responsive checks on mobile screens (simulate on Chrome developer tools).
*   Form validation check for Substack input.
