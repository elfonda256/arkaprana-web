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
      className={`inline-flex items-center gap-1 p-0.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md transition-all ${className}`}
    >
      {showIcon && (
        <span className="pl-2 pr-1 text-white/40 select-none">
          <Globe className="w-3 h-3" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        className={`px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full transition-all duration-200 ${
          language === "id"
            ? "bg-white text-[#08090D] font-bold shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-100"
            : "text-white/60 hover:text-white hover:bg-white/[0.04]"
        }`}
      >
        ID
      </button>
      <span className="text-white/20 text-[10px] select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-white text-[#08090D] font-bold shadow-[0_0_12px_rgba(255,255,255,0.25)] scale-100"
            : "text-white/60 hover:text-white hover:bg-white/[0.04]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
