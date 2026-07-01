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
