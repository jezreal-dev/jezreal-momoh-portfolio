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
