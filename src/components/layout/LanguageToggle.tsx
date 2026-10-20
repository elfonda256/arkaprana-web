"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
  showIcon?: boolean;
}

export default function LanguageToggle({ className = "", showIcon = true }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center gap-1 p-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 backdrop-blur-md transition-all ${className}`}
    >
      {showIcon && (
        <span className="pl-2 pr-1 text-slate-500 dark:text-white/50 select-none">
          <Globe className="w-3 h-3" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        className={`px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
          language === "id"
            ? "bg-slate-900 text-white dark:bg-white dark:text-[#0B0F19] font-bold shadow-xs dark:shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-100"
            : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.06]"
        }`}
      >
        ID
      </button>
      <span className="text-slate-300 dark:text-white/25 text-[10px] select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "bg-slate-900 text-white dark:bg-white dark:text-[#0B0F19] font-bold shadow-xs dark:shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-100"
            : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.06]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
