# Jezreal Momoh - Premium Next.js Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)

Welcome to the open-source repository for my premium personal portfolio and developer hub.

## Overview

This repository houses the frontend for my portfolio, built using **Next.js 16 (App Router)** and **Tailwind CSS v4** utilizing a custom design system called `Forge`. 

The portfolio is designed to be highly interactive, modern, and performant, featuring glassmorphic UI elements, dynamic newsletter integrations, and a live AI chat assistant.

## Architecture

This Next.js application connects to a standalone Go-based backend microservice called **L2E-Shield** which acts as a highly-secure reverse proxy for my AI Chat features.
- **Frontend Repository (This Repo):** Next.js 16, Tailwind v4
- **Backend Proxy Repository:** [L2E-Shield](https://github.com/jezreal-dev/L2E-Shield) (Go 1.23, Redis, Rate Limiting)

## Features

* **Interactive AI Chat Widget:** Ask questions directly to my AI assistant powered by Gemini.
* **Proof of Work & Skill Matrix:** Custom components showcasing real-world deliverables.
* **Modern Substack Newsletter Signup:** Sleek email capture component.
* **Forge Design System:** Fully custom color palette (`#0D0D0D`, `#E8630A`, `#1C2B3A`, `#FFBE0B`) and typography (`Outfit`, `JetBrains Mono`).

## Getting Started

### Prerequisites

* Node.js v20+
* npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jezreal-dev/jezreal-momoh-portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd jezreal-momoh-portfolio
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the optimized production build using the Webpack compiler.
- `npm run lint`: Runs ESLint against the codebase.

## License

MIT License. See `LICENSE` for more information.
