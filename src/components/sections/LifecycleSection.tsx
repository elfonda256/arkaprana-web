"use client";

import React, { useState } from "react";
import { PROJECT_LIFECYCLE } from "@/lib/data";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LifecycleSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-28 md:py-36 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Methodology & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            From strategic assessment
            <span className="block text-neutral-400 font-normal">
              to continuous telemetry.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-1">
            Metodologi engineering 6 tahap yang terstruktur, memastikan setiap inisiatif teknologi berjalan tepat waktu, patuh pada standar keamanan, dan memberikan hasil terukur.
          </p>
        </div>

        {/* Interactive Lifecycle Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {PROJECT_LIFECYCLE.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeStep === idx
                  ? "bg-[#091124] border-cyan-400/50 shadow-lg shadow-cyan-950/30"
                  : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.04]"
              }`}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-1">
                PHASE 0{step.step}
              </div>
              <div className={`text-xs font-semibold tracking-wide transition-colors ${
                activeStep === idx ? "text-white" : "text-neutral-300"
              }`}>
                {step.phase}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Highlight Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#060a14] border border-white/[0.1] shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-5">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-950/40 text-cyan-300 font-semibold border border-cyan-800/40">
                PHASE 0{PROJECT_LIFECYCLE[activeStep].step} // STAGE GATE
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {PROJECT_LIFECYCLE[activeStep].phase}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {PROJECT_LIFECYCLE[activeStep].desc}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Standardized Principal Engineering Gate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Verifiable Deliverables & Benchmark Sign-Off</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
