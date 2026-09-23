"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Layers,
  Cpu,
  Compass,
  BrainCircuit,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { ENGAGEMENT_MODELS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "MODEL 01": Briefcase,
  "MODEL 02": Layers,
  "MODEL 03": Cpu,
  "MODEL 04": Compass,
  "MODEL 05": BrainCircuit
};

export default function EngagementModelsSection() {
  return (
    <section id="engagement-models" className="py-28 md:py-36 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Collaboration Framework</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight font-display">
            How we can work together.
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-1 font-normal">
            Setiap organisasi memiliki dinamika pengadaan dan kematangan teknologi yang berbeda. Kami menyediakan lima model kerja sama terstruktur sesuai skala kebutuhan Anda.
          </p>
        </div>

        {/* 5 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ENGAGEMENT_MODELS.map((model) => {
            const Icon = iconMap[model.modelNumber] || Briefcase;

            return (
              <div
                key={model.modelNumber}
                className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
                    <span className="text-[11px] font-mono text-[var(--accent)] font-semibold tracking-wider">
                      {model.modelNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-sans tracking-tight mb-2">
                    {model.name}
                  </h3>

                  <div className="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)] mb-4">
                    &ldquo;{model.tagline}&rdquo;
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {model.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-6">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block mb-1">
                      Ideal Application:
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {model.bestFor}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                      Key Deliverables:
                    </span>
                    {model.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/contact?model=${encodeURIComponent(model.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                  >
                    <span>Discuss This Model</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Consultation CTA Box */}
          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-3 font-semibold">
                Tailored Partnership
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] font-sans tracking-tight mb-3">
                Need a hybrid engagement?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                Banyak klien kami menggabungkan Model Project Delivery untuk tahap pembangunan fisik awal, dilanjutkan dengan Model Managed IT untuk stabilitas operasional harian.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-[var(--border-subtle)]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Discuss Your Requirements</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
