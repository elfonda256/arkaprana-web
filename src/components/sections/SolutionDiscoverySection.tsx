"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { SOLUTION_DISCOVERY_OPTIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  network: Network,
  datacenter: Server,
  cloud: Cloud,
  security: ShieldCheck,
  operations: Cpu,
  ai: BrainCircuit,
  integration: Workflow,
  modernize: Server
};

export default function SolutionDiscoverySection() {
  const [selectedId, setSelectedId] = useState<string>("network");

  const currentOption =
    SOLUTION_DISCOVERY_OPTIONS.find((opt) => opt.id === selectedId) ||
    SOLUTION_DISCOVERY_OPTIONS[0];

  const Icon = iconMap[currentOption.id] || Network;

  return (
    <section id="solution-discovery" className="relative py-28 md:py-36 bg-[var(--bg-secondary)] text-[var(--text-primary)] overflow-hidden border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[11px] font-mono tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Solution Discovery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.08] font-display">
            What are you looking to build?
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal pt-1">
            Pilih sasaran inisiatif teknologi Anda. Kami akan memetakan arsitektur dan kapabilitas ARKAPRANA yang relevan secara instan.
          </p>
        </div>

        {/* 8 Interactive Options Pills / Tabs */}
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
                    ? "bg-[var(--accent)] text-white shadow-sm ring-2 ring-[var(--accent)]/30 translate-y-[-2px]"
                    : "bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:-translate-y-0.5"
                }`}
              >
                <OptIcon className={`w-3.5 h-3.5 transition-colors ${isSelected ? "text-white" : "text-[var(--text-muted)] group-hover:text-[var(--accent)]"}`} />
                <span>{opt.label}</span>
                <span className={`w-1 h-1 rounded-full transition-opacity ${isSelected ? "bg-white opacity-100" : "opacity-0 group-hover:opacity-60 bg-[var(--text-muted)]"}`} />
              </button>
            );
          })}
        </div>

        {/* Matched Solution Display Card (Theme-Adaptive) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--bg-card)] text-[var(--text-primary)] p-8 sm:p-12 shadow-xl border border-[var(--border-subtle)] relative overflow-hidden transition-all duration-300">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Visitor's Request Quote */}
          <div className="mb-8 pb-6 border-b border-[var(--border-subtle)]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-1">
              Your Requirement:
            </span>
            <div className="text-lg sm:text-xl font-serif italic text-[var(--accent)] transition-opacity duration-300">
              &ldquo;{currentOption.visitorNeed}&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Solution Narrative (Span 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[var(--accent)] tracking-wider uppercase block font-semibold">
                    RECOMMENDED ARCHITECTURE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-sans">
                    {currentOption.matchedSolution}
                  </h3>
                </div>
              </div>

              <div className="text-sm sm:text-base font-medium text-[var(--text-primary)] pt-1">
                {currentOption.headline}
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                {currentOption.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={currentOption.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shadow-sm"
                >
                  <span>{currentOption.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
                </Link>

                <Link
                  href={`/solutions/${currentOption.solutionSlug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] btn-secondary-interaction group"
                >
                  <span>View Full Solution Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] cta-arrow" />
                </Link>
              </div>
            </div>

            {/* Right: Capabilities Spectrum (Span 5) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                Integrated Capabilities:
              </span>
              <div className="space-y-2.5">
                {currentOption.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)] font-medium">
                Turnkey Enterprise Deployment &amp; Engineering SLA
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
