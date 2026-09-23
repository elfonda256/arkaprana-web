"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export default function ThemeToggle({ className = "", compact = false }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();

  // Prevent hydration mismatch by rendering quiet placeholder
  if (!mounted) {
    return (
      <div
        className={`h-7 px-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isLight = theme === "light";

  if (compact) {
    return (
      <button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className={`inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all ${className}`}
        aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
        title={`Switch to ${isLight ? "dark" : "light"} mode`}
      >
        {isLight ? (
          <Moon className="w-3.5 h-3.5 transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-3.5 h-3.5 transition-transform duration-300 rotate-0 text-cyan-400" />
        )}
      </button>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center p-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] select-none transition-colors ${className}`}
      role="radiogroup"
      aria-label="Theme selector"
    >
      {/* Light Option */}
      <button
        type="button"
        role="radio"
        aria-checked={isLight}
        onClick={() => setTheme("light")}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all duration-200 ${
          isLight
            ? "text-[var(--text-primary)] font-semibold shadow-xs bg-[var(--bg-card)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        <Sun className={`w-3 h-3 ${isLight ? "text-[#1769E0]" : "opacity-60"}`} />
        <span>LIGHT</span>
      </button>

      {/* Dark Option */}
      <button
        type="button"
        role="radio"
        aria-checked={!isLight}
        onClick={() => setTheme("dark")}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all duration-200 ${
          !isLight
            ? "text-[var(--text-primary)] font-semibold shadow-xs bg-[var(--bg-card)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        <Moon className={`w-3 h-3 ${!isLight ? "text-[#5BA7FF]" : "opacity-60"}`} />
        <span>DARK</span>
      </button>
    </div>
  );
}
