"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].name);
  const activeIndustry = INDUSTRIES.find((i) => i.name === selectedIndustry) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-28 md:py-36 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Mission-Critical Environments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Technology for Critical Environments.
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Setiap sektor memiliki karakteristik operasional yang khas. ARKAPRANA merekayasa arsitektur teknologi yang disesuaikan secara presisi dengan tuntutan nyata di lapangan tanpa kompromi keandalan.
          </p>
        </div>

        {/* 9-Industry Interactive Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-neutral-200">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.name}
              onClick={() => setSelectedIndustry(ind.name)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedIndustry === ind.name
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Active Industry Deep-Dive Showcase */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-neutral-200/90 p-8 sm:p-12 mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Challenge & Environment (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
                  SECTOR FOCUS // {activeIndustry.slug.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-neutral-900 font-sans tracking-tight">
                  {activeIndustry.name}
                </h3>
                <div className="text-lg sm:text-xl font-serif italic text-neutral-700 mt-2 font-normal">
                  &ldquo;{activeIndustry.headlineQuote}&rdquo;
                </div>
              </div>

              {/* Challenge Box */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1.5">
                  The Operational Challenge
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {activeIndustry.challenge}
                </p>
              </div>

              {/* Technology Environment */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1.5">
                  Operating Technology Environment
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {activeIndustry.environment}
                </p>
              </div>

              {/* Potential Solutions */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                  Targeted Architecture Solutions
                </span>
                <div className="space-y-2">
                  {activeIndustry.solutions.map((sol) => (
                    <div key={sol} className="flex items-center gap-2.5 text-xs text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span className="font-medium">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Applied Use Cases (Span 6) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                Representative Applied Scenarios
              </span>

              {activeIndustry.useCases.map((uc, idx) => (
                <div
                  key={uc.title}
                  className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-neutral-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-neutral-900">
                      {uc.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Scenario 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {uc.detail}
                  </p>
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/industries"
                  className="text-xs font-semibold text-neutral-900 hover:text-cyan-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore full industry catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Section 22 Strategic Lead-Gen CTA Strip */}
        <div className="rounded-2xl bg-[#070b16] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08] shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
              Industry Implementation Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Mengoperasikan fasilitas industri atau infrastruktur kritis?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
              Jadwalkan konsultasi awal untuk mengidentifikasi kebutuhan konektivitas lapangan, keamanan perimeter, atau integrasi data terdistribusi bersama tim kami.
            </p>
          </div>

          <Link
            href={`/contact?industry=${encodeURIComponent(selectedIndustry)}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shrink-0 shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </Link>
        </div>

      </div>
    </section>
  );
}
