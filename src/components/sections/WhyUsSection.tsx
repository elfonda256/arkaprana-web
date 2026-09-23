"use client";

import React from "react";
import { WHY_US_PILLARS } from "@/lib/data";
import {
  Binary,
  Layers,
  TrendingUp,
  ShieldCheck,
  Target,
  Handshake
} from "lucide-react";

const icons = [Binary, Layers, TrendingUp, ShieldCheck, Target, Handshake];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>ENGINEERING PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why ARKAPRANA?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Menghilangkan kerumitan integrasi teknologi terfragmentasi. Kami memberikan ketenangan operasional melalui keunggulan rekayasa dan standar enterprise.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={pillar.number}
                className="p-7 rounded-2xl bg-glass-card border border-white/10 hover:border-cyan-500/35 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm font-bold text-cyan-400/80">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-medium text-cyan-400/90 mb-3">
                  {pillar.summary}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
