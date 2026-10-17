"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Maximize2,
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
    <section className="py-28 md:py-36 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Index */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-12 border-b border-[var(--border-subtle)] gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              04 // VALUE ASSURANCE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
              ENTERPRISE BUSINESS OUTCOMES
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verifiable Engineering Metrics</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-14 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12] font-display">
            Technology should create business value.
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal pt-1 max-w-3xl">
            Investasi teknologi bukan sekadar membeli perangkat keras atau lisensi perangkat lunak. ARKAPRANA merancang lingkungan komputasi yang secara langsung menopang kelangsungan, efisiensi, dan ekspansi organisasi Anda.
          </p>
        </div>

        {/* 5 Business Value Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BUSINESS_VALUE_THEMES.map((themeItem, idx) => {
            const Icon = iconMap[themeItem.id] || Layers;
            return (
              <div
                key={themeItem.id}
                className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[var(--accent)]" />
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
                        THEME 0{idx + 1}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[10px] font-mono font-medium text-[var(--text-secondary)]">
                      {themeItem.metricTag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-sans tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {themeItem.theme}
                  </h3>

                  <div className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                    {themeItem.headline}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {themeItem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  <span>Explore Engineering Principles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-30"
              style={{ background: "radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-widest block mb-4 font-semibold">
                Strategic Journey
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] font-display tracking-tight mb-3">
                Build → Manage → Secure → Optimize → Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Pendekatan evolusioner yang memungkinkan organisasi mematangkan infrastruktur dasarnya terlebih dahulu sebelum menggelar otomasi dan kecerdasan buatan tingkat lanjut.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-[var(--border-subtle)]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] hover:underline transition-colors"
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
