# Jezreal Momoh Portfolio

A bespoke, premium, single-page developer portfolio website designed with editorial minimalism, semantic HTML, and high-performance engineering.

## 1. Project Overview

This repository hosts the personal brand and developer portfolio of Jezreal Momoh, an AI and Software Full-Stack Engineer. The application is custom-engineered using modern web development standards to ensure fast loading times, responsive design, and search engine optimization.

## 2. Design System and Aesthetics (The Forge)

The user interface follows a custom-designed visual theme named "Forge," which prioritizes high-contrast editorial spacing, clean offset layouts, and readable developer typography.

### Color Palette

| Token Name | Hex Value | Purpose |
|---|---|---|
| Background | #0D0D0D | Main page background (sleek dark mode) |
| Accent | #E8630A | Burnt orange accents for buttons, borders, and highlights |
| Foreground | #F5F0E8 | Warm off-white text for primary reading |
| Cards | #1C2B3A | Dark slate blue background for console cards and sections |
| Highlight | #FFBE0B | Vibrant gold highlight accents for special highlights |

### Typography

1. **Headings:** Styled with the Outfit font family to provide a modern, structural look.
2. **Monospace Elements:** Styled with the JetBrains Mono font family for terminal cards, code snippets, and structured labels.

## 3. Tech Stack

1. **Framework:** Next.js (App Router)
2. **Styling:** Tailwind CSS v4 (configured via modern CSS-first theme directives)
3. **Compiler:** Webpack (utilized to ensure local compatibility across path length restrictions)
4. **Icons and Media:** Custom vector SVGs to maintain layout crispness on Retina displays

## 4. Engineering Standards

1. **Machine Experience (MX) Optimization:** Structured entirely with semantic HTML5 tags (header, main, section, footer) and JSON-LD structured schema metadata to guarantee readability for AI crawl agents, LLM parsers, and search engine bots.
2. **Micro-Animations:** Fluid transition effects applied to interactive states, including group-hover triggers on image containers.
3. **Encoding & Grammar Hygiene:** Zero Byte Order Marks (BOMs) in source code files, strict layout alignment, and no use of em-dashes.

## 5. Local Setup and Installation

Follow these instructions to run the project locally on your machine.

### Installation

Change directory into the portfolio folder and install the node dependencies:
```bash
cd portfolio
npm install
```

### Development Server

Run the development server locally:
```bash
npm run dev
```

Open http://localhost:3000 in your browser to inspect the application.

### Production Compilation

Compile the static production package:
```bash
npm run build
```
