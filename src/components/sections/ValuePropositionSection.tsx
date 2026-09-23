"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ValuePropositionSection() {
  const pillars = [
    { text: "Your infrastructure.", desc: "Fasilitas data center, ruang server, daya & pendinginan presisi." },
    { text: "Your network.", desc: "Serat optik, interkoneksi SD-WAN, routing & enterprise Wi-Fi." },
    { text: "Your cloud.", desc: "Private cloud mandiri, multi-tenant & kedaulatan data lokal." },
    { text: "Your security.", desc: "Arsitektur Zero-Trust, enkripsi HSM, perimeter & pemantauan 24/7." },
    { text: "Your data.", desc: "Danau data terpadu, telemetri real-time & tata kelola terintegrasi." },
    { text: "Your intelligence.", desc: "Private AI on-premise, enterprise RAG & otomasi otonom." },
  ];

  return (
    <section className="relative py-32 md:py-48 bg-[#F8FAFC] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80">
      {/* Subtle vertical architectural guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-neutral-300 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2.5 mb-10 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
          <span>The Arkaprana Thesis</span>
        </div>

        {/* Lead Statement (Section 08 verbatim) */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08] mb-12 font-sans">
          Technology shouldn't be fragmented.
        </h2>

        {/* 6-Part Proposition Stack with Large Typography */}
        <div className="max-w-3xl mx-auto text-left py-10 px-6 sm:px-12 rounded-3xl bg-white border border-neutral-200/90 shadow-sm mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => (
              <div key={pillar.text} className="border-l-2 border-neutral-200 pl-4 py-1 hover:border-cyan-600 transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight">
                  {pillar.text}
                </div>
                <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affirmation Conclusion (Section 08 verbatim) */}
        <div className="space-y-4">
          <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 font-sans">
            ARKAPRANA connects them.
          </div>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-2">
            Membangun ekosistem teknologi yang utuh—tanpa celah integrasi, tanpa kebingungan multi-vendor, dan tanpa kompromi pada kedaulatan serta performa operasional Anda.
          </p>
        </div>

      </div>
    </section>
  );
}
