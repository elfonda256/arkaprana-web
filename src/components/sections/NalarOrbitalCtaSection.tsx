"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Zap,
  MessageSquare,
  FileText,
  Database,
  Server,
  Network,
  Cpu,
  ShieldAlert,
  Terminal
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NalarOrbitalCtaSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 sm:py-32 md:py-48 bg-[#08090D] text-white overflow-hidden border-t border-b border-white/10">
      
      {/* ========================================================
          CONTINUOUS ROTATING ORBITAL SYSTEM (EXACT REPLICA OF IMAGE 1)
          Real Hardware-Accelerated 60fps Orbital Rotation With Counter-Rotation
          ======================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      >
        {/* Central Core Ambient Glow */}
        <div className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-gradient-to-tr from-[#38BDF8]/15 via-[#5BA7FF]/8 to-transparent blur-3xl pointer-events-none" />

        {/* ----------------------------------------------------
            ORBIT 1: INNER RING (Scaled down on mobile to prevent clipping)
            ---------------------------------------------------- */}
        <div className="absolute w-[260px] xs:w-[280px] sm:w-[380px] md:w-[420px] h-[260px] xs:h-[280px] sm:h-[380px] md:h-[420px] rounded-full border border-white/15 animate-orbital-reverse">
          {/* Badge A (Top): Notion / Knowledge Docs */}
          <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-counter-reverse">
            <FileText className="size-4 sm:size-5 text-white/90" />
          </div>

          {/* Badge B (Bottom): Database */}
          <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-counter-reverse">
            <Database className="size-4 sm:size-5 text-[#38BDF8]" />
          </div>
        </div>

        {/* ----------------------------------------------------
            ORBIT 2: MIDDLE RING (Scaled down on mobile)
            ---------------------------------------------------- */}
        <div className="absolute w-[440px] xs:w-[480px] sm:w-[620px] md:w-[720px] h-[440px] xs:h-[480px] sm:h-[620px] md:h-[720px] rounded-full border border-dashed border-white/15 animate-orbital-slow">
          {/* Badge C (Top Left at ~45deg): AI Model / Private Bot */}
          <div className="absolute top-10 sm:top-12 left-10 sm:left-24 size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-counter-slow">
            <Bot className="size-5 sm:size-6 text-white/95" />
          </div>

          {/* Badge D (Top Right at ~45deg): Supabase / Lightning Fast Stream */}
          <div className="absolute top-10 sm:top-12 right-10 sm:right-24 size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.25)] animate-counter-slow">
            <Zap className="size-5 sm:size-6 text-[#10B981]" />
          </div>

          {/* Badge E (Bottom Right): Slack / Enterprise Chat */}
          <div className="absolute bottom-12 sm:bottom-16 right-14 sm:right-28 size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(224,30,90,0.25)] animate-counter-slow">
            <MessageSquare className="size-4 sm:size-5 text-[#E01E5A]" />
          </div>

          {/* Badge F (Bottom Left): Linux Server Enclave */}
          <div className="absolute bottom-12 sm:bottom-16 left-14 sm:left-28 size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.25)] animate-counter-slow">
            <Server className="size-4 sm:size-5 text-[#38BDF8]" />
          </div>
        </div>

        {/* ----------------------------------------------------
            ORBIT 3: OUTER RING (980px) - REVERSE ROTATION 90s
            ---------------------------------------------------- */}
        <div className="hidden lg:block absolute w-[980px] h-[980px] rounded-full border border-dotted border-white/10 animate-orbital-reverse">
          {/* Badge G: Carrier-Neutral Optical Mesh */}
          <div className="absolute top-1/4 -left-6 size-12 rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-xl animate-counter-reverse">
            <Network className="size-5 text-amber-400" />
          </div>

          {/* Badge H: Cryptographic HSM Token */}
          <div className="absolute top-1/4 -right-6 size-12 rounded-2xl bg-[#121422] border border-white/20 flex items-center justify-center shadow-xl animate-counter-reverse">
            <Cpu className="size-5 text-purple-400" />
          </div>
        </div>

      </div>

      {/* ========================================================
          CENTER CONTENT: EDITORIAL SIGNAL PILL, MONUMENTAL HEADLINE, BOOK A DEMO
          ======================================================== */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.05] text-[10px] sm:text-[11px] font-mono text-white/80 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="tracking-widest uppercase">
            {t("orbital_badge", "11 · ORCHESTRATION · ONE UNIFIED SYSTEM")}
          </span>
        </div>

        {/* Main Dramatic Headline */}
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[56px] font-light text-white tracking-tight leading-[1.18] sm:leading-[1.15] font-display">
            {t("orbital_title_1", "Stop running your business by feel.")}
          </h2>
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[56px] font-light text-white/90 tracking-tight leading-[1.18] sm:leading-[1.15] font-display">
            {t("orbital_title_2", "Start running it with intelligence.")}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-base text-white/65 font-light max-w-2xl mx-auto leading-relaxed">
          {t(
            "orbital_desc",
            "Koneksikan seluruh router, modular data center, cloud privat, dan basis pengetahuan internal Anda ke dalam satu sistem kendali cerdas berdaulat."
          )}
        </p>

        {/* Center Pill CTA Button */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-white/95 transition-all shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{t("orbital_cta", "Book a Demo Session")}</span>
            <ArrowRight className="size-3.5 sm:size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
