"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Layers,
  Cpu,
  Compass,
  BrainCircuit
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
    <section id="engagement-models" className="py-28 md:py-36 bg-[#030712] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Section 14 verbatim) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Collaboration Framework</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight font-display">
            How we can work together.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-1 font-normal">
            Setiap organisasi memiliki dinamika pengadaan dan kematangan teknologi yang berbeda. Kami menyediakan lima model kerja sama terstruktur sesuai skala kebutuhan Anda.
          </p>
        </div>

        {/* 5 Models Grid (Section 14 verbatim) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ENGAGEMENT_MODELS.map((model) => {
            const Icon = iconMap[model.modelNumber] || Briefcase;

            return (
              <div
                key={model.modelNumber}
                className="p-8 rounded-3xl bg-[#070b16] border border-white/[0.08] hover:border-cyan-400/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                    <span className="text-[11px] font-mono text-cyan-400 tracking-wider">
                      {model.modelNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-neutral-300 group-hover:text-cyan-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight mb-2">
                    {model.name}
                  </h3>

                  <div className="text-xs sm:text-sm font-serif italic text-cyan-200 mb-4">
                    &ldquo;{model.tagline}&rdquo;
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-normal">
                    {model.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                      Ideal Application:
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {model.bestFor}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Key Deliverables:
                    </span>
                    {model.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href={`/contact?model=${encodeURIComponent(model.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss This Model</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Consultation CTA Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#060a14] via-[#0b152b] to-[#060a14] border border-cyan-500/30 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-3">
                Tailored Partnership
              </span>
              <h3 className="text-2xl font-bold text-white font-sans tracking-tight mb-3">
                Need a hybrid engagement?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                Banyak klien kami menggabungkan Model Project Delivery untuk tahap pembangunan fisik awal, dilanjutkan dengan Model Managed IT untuk stabilitas operasional harian.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.1]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-lg active:scale-[0.98]"
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
