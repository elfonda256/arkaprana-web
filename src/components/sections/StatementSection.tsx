"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StatementSection() {
  return (
    <section className="relative py-32 md:py-44 bg-[#F8FAFC] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80">
      {/* Subtle architectural vertical spine */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neutral-300 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Monospaced quiet category indicator */}
        <div className="inline-flex items-center gap-2.5 mb-10 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
          <span>The Arkaprana Thesis</span>
        </div>

        {/* Monumental Transition Statement (Section 08 verbatim) */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08] mb-8 font-sans">
          Technology shouldn't be fragmented.
          <span className="block text-neutral-500 font-medium mt-3">
            It should work as one system.
          </span>
        </h2>

        {/* Supporting thesis paragraph with generous line-height & whitespace */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal mb-16">
          Dari fondasi kabel serat optik bawah tanah dan fasilitas data center bersertifikasi, hingga model kecerdasan buatan otonom yang bekerja langsung di dalam alur operasional organisasi Anda. ARKAPRANA mendesain, menggelar, dan mengintegrasikan seluruh spektrum tersebut sebagai satu kesatuan yang kohesif.
        </p>

        {/* Horizontal Progression System (BUILD → CONNECT → RUN → PROTECT → UNDERSTAND → INTELLIGENCE) */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 pt-10 border-t border-neutral-200">
          <div className="p-4 rounded-xl bg-white border border-neutral-200/70 shadow-sm text-left">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">01 • BUILD</span>
            <span className="text-sm font-bold text-neutral-900 mt-1 block">Infrastructure</span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">Data Center &amp; Fiber</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200/70 shadow-sm text-left">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">02 • CONNECT</span>
            <span className="text-sm font-bold text-neutral-900 mt-1 block">Network</span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">SD-WAN &amp; MPLS</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200/70 shadow-sm text-left">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">03 • RUN</span>
            <span className="text-sm font-bold text-neutral-900 mt-1 block">Cloud</span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">Sovereign On-Premise</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200/70 shadow-sm text-left">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">04 • PROTECT</span>
            <span className="text-sm font-bold text-neutral-900 mt-1 block">Security</span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">Zero-Trust &amp; SOC</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200/70 shadow-sm text-left">
            <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">05 • UNDERSTAND</span>
            <span className="text-sm font-bold text-neutral-900 mt-1 block">Data</span>
            <span className="text-[11px] text-neutral-500 mt-0.5 block">Unified Lakehouse</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-cyan-200 shadow-sm text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-cyan-500/10 rounded-bl-xl pointer-events-none" />
            <span className="block text-[10px] font-mono text-cyan-700 uppercase tracking-widest">06 • COGNITION</span>
            <span className="text-sm font-bold text-neutral-900 mt-1 block">Intelligence</span>
            <span className="text-[11px] text-cyan-700 font-medium mt-0.5 block">Private AI &amp; RAG</span>
          </div>
        </div>

      </div>
    </section>
  );
}
