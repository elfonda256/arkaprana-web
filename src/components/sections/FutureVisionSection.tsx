"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Sparkles } from "lucide-react";

export default function FutureVisionSection() {
  return (
    <section className="py-32 md:py-44 bg-[#02050c] relative overflow-hidden border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 mb-8 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Engineering The Future</span>
        </div>

        {/* Monumental Closing Title */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 font-sans">
          Engineering the foundation.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-cyan-200 to-cyan-400">
            Powering the intelligence.
          </span>
        </h2>

        {/* Narrative Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed mb-12">
          Siap membangun ekosistem teknologi yang resilient, berdaulat, dan siap menyongsong era otomasi kecerdasan buatan? Diskusikan arsitektur sistem Anda bersama Principal Engineer ARKAPRANA.
        </p>

        {/* Apple/Linear Style Dual Pill CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-[0.98] group"
          >
            <span>Initiate Architectural Review</span>
            <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-medium tracking-wide text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
          >
            <span>Discover Company Thesis</span>
          </Link>
        </div>

        {/* 3 Anchors of Confidence */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/[0.06] text-left">
          <div>
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
              01 // Sovereign Sovereignty
            </span>
            <div className="text-sm font-semibold text-white">100% In-Country Governance</div>
            <div className="text-xs text-neutral-400 mt-0.5">Air-gapped models & local data residency</div>
          </div>
          <div>
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
              02 // High Availability
            </span>
            <div className="text-sm font-semibold text-white">99.999% SLA Architecture</div>
            <div className="text-xs text-neutral-400 mt-0.5">Engineered for mission-critical uptime</div>
          </div>
          <div>
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
              03 // Long-Term Stewardship
            </span>
            <div className="text-sm font-semibold text-white">Direct Principal Engineers</div>
            <div className="text-xs text-neutral-400 mt-0.5">End-to-end lifecycle partnership</div>
          </div>
        </div>

      </div>
    </section>
  );
}
