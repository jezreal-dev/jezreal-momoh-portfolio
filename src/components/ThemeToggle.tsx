"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Placeholder to prevent layout shift during hydration
    return <div className="w-8 h-8" />;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border border-forge-fg/10 bg-forge-card text-forge-fg/80 hover:text-forge-accent hover:border-forge-accent/50 transition-all duration-300 flex items-center justify-center shadow-sm hover:-translate-y-0.5"
    >
      {currentTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
