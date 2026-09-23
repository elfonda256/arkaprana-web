"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StatementSection() {
  return (
    <section className="relative py-32 md:py-44 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Subtle vertical spine line connecting sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 via-cyan-500/40 to-transparent pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Monospaced quiet category indicator */}
        <div className="inline-flex items-center gap-2 mb-10 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>The Arkaprana Thesis</span>
        </div>

        {/* Monumental, high-contrast, calm statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.2] mb-10 font-sans">
          Technology should not be fragmented.
          <span className="block text-neutral-400 font-normal mt-3">
            It must operate as a single, coherent ecosystem.
          </span>
        </h2>

        {/* Supporting thesis paragraph with generous line-height */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-14">
          Dari kabel serat optik bawah tanah dan fasilitas data center bersertifikasi, hingga model kecerdasan buatan otonom yang bekerja langsung di dalam alur operasional organisasi Anda. ARKAPRANA mendesain, menggelar, dan mengelola seluruh spektrum tersebut tanpa celah integrasi.
        </p>

        {/* Horizontal System Progression Bar */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 pt-8 border-t border-white/[0.08]">
          <div className="text-left md:text-center py-2">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Step 01</span>
            <span className="text-xs font-medium text-white">Infra</span>
          </div>
          <div className="text-left md:text-center py-2">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Step 02</span>
            <span className="text-xs font-medium text-white">Network</span>
          </div>
          <div className="text-left md:text-center py-2">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Step 03</span>
            <span className="text-xs font-medium text-white">Cloud</span>
          </div>
          <div className="text-left md:text-center py-2">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Step 04</span>
            <span className="text-xs font-medium text-white">Security</span>
          </div>
          <div className="text-left md:text-center py-2">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Step 05</span>
            <span className="text-xs font-medium text-white">Data</span>
          </div>
          <div className="text-left md:text-center py-2">
            <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Step 06</span>
            <span className="text-xs font-medium text-white">Private AI</span>
          </div>
        </div>

      </div>
    </section>
  );
}
