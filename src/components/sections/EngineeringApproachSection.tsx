"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  BarChart3,
  PenTool,
  Hammer,
  Workflow,
  ShieldCheck,
  Cpu,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { PROJECT_JOURNEY_STEPS, ProjectJourneyStep } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Search,
  BarChart3,
  PenTool,
  Hammer,
  Workflow,
  ShieldCheck,
  Cpu,
  TrendingUp
};

export default function EngineeringApproachSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROJECT_JOURNEY_STEPS[activeStepIndex];
  const StepIcon = iconMap[activeStep.iconName] || Search;

  return (
    <section id="engineering" className="py-28 md:py-36 bg-[#030712] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Section 13 verbatim: HOW WE WORK) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Project Delivery Lifecycle</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
            HOW WE WORK
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-1 font-normal">
            Metodologi rekayasa 8 tahap yang teruji untuk memastikan setiap proyek teknologi berjalan dari asesmen kebutuhan presisi hingga evolusi jangka panjang.
          </p>
        </div>

        {/* Interactive Timeline Navigation (Horizontal on Desktop / Vertical on Mobile) */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {PROJECT_JOURNEY_STEPS.map((s, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.1] border-cyan-400 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/50"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">
                      STEP {s.step}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                  </div>
                  <div className="text-xs font-bold text-white tracking-wider font-sans">
                    {s.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Deep-Dive Card */}
        <div className="rounded-3xl bg-[#070b16] border border-white/[0.12] p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
                  PHASE {activeStep.step} OF 08
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {activeStep.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white font-sans tracking-tight">
                {activeStep.step} {activeStep.name} — {activeStep.tagline}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal pt-1">
                {activeStep.description}
              </p>

              <div className="pt-4 flex items-center gap-2.5 text-xs text-cyan-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Deliverable: {activeStep.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-4 text-cyan-400">
                <StepIcon className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                Phase Outcome
              </span>
              <span className="text-sm font-semibold text-white">
                Engineering Sign-Off
              </span>
            </div>

          </div>
        </div>

        {/* Section 13 CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-xs text-neutral-300">
            Ingin mengkaji kesiapan infrastruktur organisasi Anda sebelum memulai proyek?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
          >
            <span>Request Infrastructure Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
