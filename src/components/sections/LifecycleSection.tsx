"use client";

import React, { useState } from "react";
import { PROJECT_LIFECYCLE } from "@/lib/data";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function LifecycleSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>METHODOLOGY & EXECUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Strategy to Deployment.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Metodologi engineering 6 tahap yang terstruktur, memastikan setiap inisiatif teknologi berjalan tepat waktu, patuh pada standar keamanan, dan memberikan hasil terukur.
          </p>
        </div>

        {/* Interactive Lifecycle Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PROJECT_LIFECYCLE.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeStep === idx
                  ? "bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-950/40 scale-102"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="font-mono text-xs text-cyan-400 font-bold mb-1">
                PHASE {step.step}
              </div>
              <div className="text-sm font-bold text-white tracking-wide">
                {step.phase}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Highlight Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#081534] via-[#050c20] to-[#02050e] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-400/20 text-cyan-300 font-semibold border border-cyan-400/30">
                PHASE {PROJECT_LIFECYCLE[activeStep].step} OF 06
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {PROJECT_LIFECYCLE[activeStep].phase}
              </h3>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              {PROJECT_LIFECYCLE[activeStep].desc}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Standardized Engineering Review Gate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Verifiable Deliverable Artifacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
