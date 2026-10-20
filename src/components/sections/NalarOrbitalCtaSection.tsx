"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NalarOrbitalCtaSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 sm:py-36 md:py-48 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      
      {/* ========================================================
          BACKGROUND: AMBIENT GLOW & ARCHITECTURAL GRID RINGS
          ======================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      >
        {/* Central Core Ambient Glow */}
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#38BDF8]/20 via-[#0284C7]/10 dark:from-[#38BDF8]/15 dark:via-[#5BA7FF]/8 to-transparent blur-3xl pointer-events-none" />

        {/* Subtle Architectural Coordinate Rings (Static depth guides) */}
        <div className="absolute w-[300px] sm:w-[420px] md:w-[480px] h-[300px] sm:h-[420px] md:h-[480px] rounded-full border border-slate-300/70 dark:border-white/10 pointer-events-none" />
        <div className="absolute w-[500px] sm:w-[680px] md:w-[760px] h-[500px] sm:h-[680px] md:h-[760px] rounded-full border border-dashed border-slate-300/60 dark:border-white/10 pointer-events-none" />
        <div className="hidden lg:block absolute w-[960px] h-[960px] rounded-full border border-dotted border-slate-300/40 dark:border-white/5 pointer-events-none" />
      </div>

      {/* ========================================================
          DYNAMIC IN-AND-OUT INTELLIGENCE NODES (GERAK MASUK & KELUAR)
          Scaled proportionally across all viewports to prevent overflow
          ======================================================== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        
        {/* Responsive Scale Wrapper Centered at (50%, 50%) */}
        <div className="relative w-0 h-0 scale-[0.52] xs:scale-[0.64] sm:scale-[0.80] md:scale-[0.94] lg:scale-100 origin-center pointer-events-none">
          
          {/* 1. OpenAI / ChatGPT (Top-Left: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-1 pointer-events-auto">
            <div
              title="OpenAI"
              className="size-16 xs:size-18 sm:size-20 md:size-24 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-3 sm:p-4 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/openai-transparent.png"
                alt="OpenAI"
                className="size-9 xs:size-10 sm:size-12 md:size-14 object-contain dark:invert"
              />
            </div>
          </div>

          {/* 2. Anthropic Claude (Top-Right: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-2 pointer-events-auto">
            <div
              title="Anthropic Claude"
              className="size-16 xs:size-18 sm:size-20 md:size-24 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-3 sm:p-4 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/claude.png"
                alt="Anthropic Claude"
                className="size-9 xs:size-10 sm:size-12 md:size-14 object-contain"
              />
            </div>
          </div>

          {/* 3. Notion (Top-Center: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-3 pointer-events-auto">
            <div
              title="Notion Enterprise"
              className="size-15 xs:size-17 sm:size-19 md:size-22 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-2.5 sm:p-3.5 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/notion.png"
                alt="Notion"
                className="size-8.5 xs:size-9.5 sm:size-11 md:size-13 object-contain dark:invert"
              />
            </div>
          </div>

          {/* 4. DeepSeek (Bottom-Left: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-4 pointer-events-auto">
            <div
              title="DeepSeek"
              className="size-16 xs:size-18 sm:size-20 md:size-24 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-3 sm:p-4 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/deepseek.png"
                alt="DeepSeek"
                className="size-9 xs:size-10 sm:size-12 md:size-14 object-contain"
              />
            </div>
          </div>

          {/* 5. Google Gemini (Bottom-Right: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-5 pointer-events-auto">
            <div
              title="Google Gemini"
              className="size-16 xs:size-18 sm:size-20 md:size-24 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-3 sm:p-4 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/gemini.png"
                alt="Google Gemini"
                className="size-9 xs:size-10 sm:size-12 md:size-14 object-contain"
              />
            </div>
          </div>

          {/* 6. Microsoft Copilot (Bottom-Center-Right: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-6 pointer-events-auto">
            <div
              title="Microsoft Copilot"
              className="size-15 xs:size-17 sm:size-19 md:size-22 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-2.5 sm:p-3.5 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/copilot.png"
                alt="Microsoft Copilot"
                className="size-8.5 xs:size-9.5 sm:size-11 md:size-13 object-contain"
              />
            </div>
          </div>

          {/* 7. Autonomous Core (Bottom-Center-Left: Masuk & Keluar) */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-inout-7 pointer-events-auto">
            <div
              title="Autonomous Core"
              className="size-15 xs:size-17 sm:size-19 md:size-22 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#131B2E]/95 border border-slate-200/90 dark:border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md p-2.5 sm:p-3.5 hover:scale-125 transition-transform cursor-pointer"
            >
              <img
                src="/brand/ai/slash-orb.png"
                alt="Autonomous Core"
                className="size-8.5 xs:size-9.5 sm:size-11 md:size-13 object-contain dark:invert"
              />
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================
          CENTER CONTENT: EDITORIAL SIGNAL PILL, MONUMENTAL HEADLINE, BOOK A DEMO
          ======================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/95 dark:bg-white/[0.05] text-[10px] sm:text-[11px] font-mono text-slate-800 dark:text-white/90 backdrop-blur-md shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
          <span className="tracking-widest uppercase font-medium">
            {t("orbital_badge", "11 · ORCHESTRATION · ONE UNIFIED SYSTEM")}
          </span>
        </div>

        {/* Main Dramatic Headline */}
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[56px] font-light text-slate-950 dark:text-white tracking-tight leading-[1.18] sm:leading-[1.15] font-display">
            {t("orbital_title_1", "Stop running your business by feel.")}
          </h2>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[56px] font-light text-slate-700 dark:text-white/90 tracking-tight leading-[1.18] sm:leading-[1.15] font-display">
            {t("orbital_title_2", "Start running it with intelligence.")}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-slate-700 dark:text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
          {t(
            "orbital_desc",
            "Koneksikan seluruh router, modular data center, cloud privat, dan basis pengetahuan internal Anda ke dalam satu sistem kendali cerdas berdaulat."
          )}
        </p>

        {/* Center Pill CTA Button */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-black text-xs sm:text-sm font-semibold hover:bg-slate-800 dark:hover:bg-white/95 transition-all shadow-lg dark:shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{t("orbital_cta", "Book a Demo Session")}</span>
            <ArrowRight className="size-3.5 sm:size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
