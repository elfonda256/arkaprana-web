"use client";

import React from "react";
import { APPROACH_STEPS } from "@/lib/data";
import { Network, Server, Cloud, Shield, BrainCircuit, ArrowRight } from "lucide-react";

const icons = [Network, Server, Cloud, Shield, BrainCircuit];

export default function ApproachSection() {
  return (
    <section className="py-24 bg-[#040817] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>THE ARKAPRANA APPROACH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Infrastructure to Intelligence.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Kami tidak sekadar memasang hardware atau menjual software terisolasi. ARKAPRANA merekayasa sebuah <strong>ekosistem teknologi terpadu</strong> yang beroperasi saling mendukung dari lapisan fisik kabel hingga model kognitif kecerdasan buatan.
          </p>
        </div>

        {/* Horizontal Journey Flow */}
        <div className="relative">
          {/* Connecting Flow Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-indigo-500/30 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {APPROACH_STEPS.map((step, idx) => {
              const Icon = icons[idx];
              return (
                <div
                  key={step.step}
                  className="flex flex-col p-6 rounded-2xl bg-gradient-to-b from-[#081329] to-[#040817] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-black text-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/80 uppercase tracking-wider mb-3">
                    {step.category}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statement of Ecosystem */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 py-2 px-4 rounded-full bg-white/5 border border-white/5">
            <span>NETWORK</span>
            <span className="text-cyan-400">→</span>
            <span>INFRASTRUCTURE</span>
            <span className="text-cyan-400">→</span>
            <span>CLOUD</span>
            <span className="text-cyan-400">→</span>
            <span>SECURITY</span>
            <span className="text-cyan-400">→</span>
            <span>DATA</span>
            <span className="text-cyan-400">→</span>
            <span className="text-cyan-300 font-semibold">ARTIFICIAL INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
