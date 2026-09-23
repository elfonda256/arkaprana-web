"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  PenTool,
  ShoppingCart,
  Wrench,
  Workflow,
  ClipboardCheck,
  CheckCircle2,
  LifeBuoy,
  ArrowRight
} from "lucide-react";
import { PROJECT_JOURNEY_STEPS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Search,
  PenTool,
  ShoppingCart,
  Wrench,
  Workflow,
  ClipboardCheck,
  CheckCircle2,
  LifeBuoy
};

export default function EngineeringApproachSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROJECT_JOURNEY_STEPS[activeStepIndex];
  const StepIcon = iconMap[activeStep.iconName] || Search;

  return (
    <section id="engineering" className="py-28 md:py-36 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Project Delivery Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight font-display">
            How we work.
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-1 font-normal max-w-2xl">
            We build things properly — and stay involved long after deployment. Our 8-stage engineering process ensures every system is grounded in real operational constraints, built to specification, and supported continuously.
          </p>
        </div>

        {/* Interactive Timeline Navigation with Progressive Connector Line */}
        <div className="mb-10 relative">
          {/* Background Track & Progressive Indicator */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--border-subtle)] -translate-y-1/2 pointer-events-none z-0">
            <div
              className="h-full bg-gradient-to-r from-[var(--accent)] to-blue-600 transition-all duration-500 ease-out"
              style={{
                width: `${((activeStepIndex + 1) / PROJECT_JOURNEY_STEPS.length) * 100}%`
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative z-10">
            {PROJECT_JOURNEY_STEPS.map((s, idx) => {
              const isSelected = activeStepIndex === idx;
              const isPassed = idx <= activeStepIndex;
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[var(--accent-soft-bg)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]/40 -translate-y-1"
                      : isPassed
                      ? "bg-[var(--bg-card)] border-[var(--accent)]/30 hover:border-[var(--accent)]/50"
                      : "bg-[var(--bg-card)] border-[var(--border-subtle)] hover:bg-[var(--bg-card-hover)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isPassed ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                      STEP {s.step}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />}
                  </div>
                  <div className="text-xs font-bold text-[var(--text-primary)] tracking-wider font-sans">
                    {s.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Deep-Dive Card */}
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-12 shadow-xl relative overflow-hidden mb-8 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 rounded bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent)] font-medium">
                  PHASE {activeStep.step} OF 08
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {activeStep.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] font-sans tracking-tight">
                {activeStep.step} {activeStep.name} — {activeStep.tagline}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal pt-1">
                {activeStep.description}
              </p>

              <div className="pt-4 flex items-center gap-2.5 text-xs text-[var(--accent)] font-mono font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>Deliverable: {activeStep.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 text-[var(--accent)]">
                <StepIcon className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-1">
                Phase Outcome
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Engineering Sign-Off
              </span>
            </div>

          </div>
        </div>

        {/* Section CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-colors duration-300">
          <span className="text-xs text-[var(--text-secondary)]">
            Ingin mengkaji kesiapan infrastruktur organisasi Anda sebelum memulai proyek?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] hover:underline transition-colors btn-secondary-interaction group"
          >
            <span>Request Infrastructure Assessment</span>
            <ArrowRight className="w-3.5 h-3.5 cta-arrow" />
          </Link>
        </div>

      </div>
    </section>
  );
}
