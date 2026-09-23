"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Maximize2,
  CheckCircle2,
  Layers
} from "lucide-react";
import { BUSINESS_VALUE_THEMES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  reliability: Activity,
  security: ShieldCheck,
  visibility: Activity,
  efficiency: Zap,
  scalability: Maximize2
};

export default function BusinessValueSection() {
  return (
    <section className="py-28 md:py-36 bg-[#F8FAFC] text-neutral-900 overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Section 15 verbatim) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-neutral-600 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Operational Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Technology should create business value.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-1">
            Investasi teknologi bukan sekadar membeli perangkat keras atau lisensi perangkat lunak. ARKAPRANA merancang lingkungan komputasi yang secara langsung menopang kelangsungan, efisiensi, dan ekspansi organisasi Anda.
          </p>
        </div>

        {/* 5 Business Value Themes Grid (Section 15 verbatim) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BUSINESS_VALUE_THEMES.map((themeItem, idx) => {
            const Icon = iconMap[themeItem.id] || Layers;
            return (
              <div
                key={themeItem.id}
                className="p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                      THEME 0{idx + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-[10px] font-mono font-medium text-neutral-600">
                      {themeItem.metricTag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight mb-2 group-hover:text-cyan-700 transition-colors">
                    {themeItem.theme}
                  </h3>

                  <div className="text-sm font-semibold text-neutral-700 mb-3">
                    {themeItem.headline}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {themeItem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-900 group-hover:text-cyan-600 transition-colors">
                  <span>Explore Engineering Principles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Strategic Technology Journey */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-4">
                Strategic Journey
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight mb-3">
                BUILD → MANAGE → SECURE → OPTIMIZE → INTELLIGENCE
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Pendekatan evolusioner yang memungkinkan organisasi mematangkan infrastruktur dasarnya terlebih dahulu sebelum menggelar otomasi dan kecerdasan buatan tingkat lanjut.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/[0.1]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
              >
                <span>Discuss Your Technology Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
