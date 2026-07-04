"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center bg-forge-card border border-forge-fg/10 rounded-full p-1 shadow-lg backdrop-blur-sm transition-all">
      <button
        onClick={() => setTheme("light")}
        aria-label="Light theme"
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === "light" ? "bg-forge-fg text-forge-bg shadow-sm" : "text-forge-fg/50 hover:text-forge-fg"
        }`}
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme("system")}
        aria-label="System theme"
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === "system" ? "bg-forge-fg text-forge-bg shadow-sm" : "text-forge-fg/50 hover:text-forge-fg"
        }`}
      >
        <Monitor size={18} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === "dark" ? "bg-forge-fg text-forge-bg shadow-sm" : "text-forge-fg/50 hover:text-forge-fg"
        }`}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}
