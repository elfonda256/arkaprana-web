"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] opacity-50" />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center justify-center size-8 sm:size-8.5 rounded-full border border-slate-200/90 dark:border-white/15 bg-white/90 dark:bg-white/[0.06] text-slate-700 dark:text-white/80 hover:text-sky-600 dark:hover:text-white hover:border-sky-300 dark:hover:border-white/30 transition-all duration-300 shadow-xs cursor-pointer group"
      aria-label={isLight ? "Beralih ke mode gelap (Dark Mode)" : "Beralih ke mode terang (Light Mode)"}
      title={isLight ? "Dark Mode" : "Light Mode"}
    >
      <span className="sr-only">Toggle theme</span>
      {isLight ? (
        <Moon className="size-4 text-slate-700 group-hover:text-sky-600 transition-colors" />
      ) : (
        <Sun className="size-4 text-amber-300 group-hover:text-amber-200 transition-colors" />
      )}
    </button>
  );
}
