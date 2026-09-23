"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  Zap,
  ArrowUpRight
} from "lucide-react";
import { SOLUTION_DISCOVERY_OPTIONS, SolutionDiscoveryOption } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  network: Network,
  infra: Server,
  cloud: Cloud,
  security: ShieldCheck,
  managed: Cpu,
  ai: BrainCircuit,
  automation: Zap,
  integration: Workflow
};

export default function SolutionDiscoverySection() {
  const [selectedId, setSelectedId] = useState<string>("network");

  const currentOption =
    SOLUTION_DISCOVERY_OPTIONS.find((opt) => opt.id === selectedId) ||
    SOLUTION_DISCOVERY_OPTIONS[0];

  const Icon = iconMap[currentOption.id] || Network;

  return (
    <section id="solution-discovery" className="relative py-28 md:py-36 bg-white text-neutral-900 overflow-hidden border-b border-neutral-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Solution Discovery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.08] font-display">
            What are you looking to build?
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-1">
            Pilih sasaran inisiatif teknologi Anda. Kami akan memetakan arsitektur dan kapabilitas ARKAPRANA yang relevan secara instan.
          </p>
        </div>

        {/* 8 Interactive Options Pills / Tabs (Section 06 verbatim) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-12">
          {SOLUTION_DISCOVERY_OPTIONS.map((opt) => {
            const isSelected = opt.id === selectedId;
            const OptIcon = iconMap[opt.id] || Network;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedId(opt.id)}
                className={`group flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-neutral-900 text-white shadow-lg ring-2 ring-neutral-900 translate-y-[-2px]"
                    : "bg-neutral-100 hover:bg-neutral-200/90 text-neutral-700 hover:text-neutral-950 border border-neutral-200/80 hover:-translate-y-0.5"
                }`}
              >
                <OptIcon className={`w-3.5 h-3.5 transition-colors ${isSelected ? "text-cyan-400" : "text-neutral-500 group-hover:text-cyan-600"}`} />
                <span>{opt.label}</span>
                <span className={`w-1 h-1 rounded-full transition-opacity ${isSelected ? "bg-cyan-400 opacity-100" : "opacity-0 group-hover:opacity-60 bg-neutral-400"}`} />
              </button>
            );
          })}
        </div>

        {/* Matched Solution Display Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#030712] text-white p-8 sm:p-12 shadow-2xl border border-white/[0.1] relative overflow-hidden transition-all duration-300">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Visitor's Request Quote */}
          <div className="mb-8 pb-6 border-b border-white/[0.08]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
              Your Requirement:
            </span>
            <div className="text-lg sm:text-xl font-serif italic text-cyan-200 transition-opacity duration-300">
              &ldquo;{currentOption.visitorNeed}&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Solution Narrative (Span 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm shadow-cyan-500/20">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase block">
                    RECOMMENDED ARCHITECTURE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                    {currentOption.matchedSolution}
                  </h3>
                </div>
              </div>

              <div className="text-sm sm:text-base font-medium text-neutral-200 pt-1">
                {currentOption.headline}
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                {currentOption.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={currentOption.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-100 btn-primary-interaction group"
                >
                  <span>{currentOption.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black cta-arrow" />
                </Link>

                <Link
                  href={`/solutions/${currentOption.solutionSlug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] btn-secondary-interaction group"
                >
                  <span>View Full Solution Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white cta-arrow" />
                </Link>
              </div>
            </div>

            {/* Right: Capabilities Spectrum (Span 5) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                Integrated Capabilities:
              </span>
              <div className="space-y-2.5">
                {currentOption.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-cyan-300">
                Turnkey Enterprise Deployment &amp; Engineering SLA
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
