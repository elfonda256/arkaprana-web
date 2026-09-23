"use client";

import React from "react";
import Link from "next/link";
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>COMPREHENSIVE TECHNOLOGY ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Solutions
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tujuh pilar solusi rekayasa teknologi komprehensif—menjembatani kebutuhan komputasi fisik, transmisi data berkecepatan tinggi, hingga otomasi kecerdasan buatan berdaulat.
          </p>
        </div>

        {/* 7 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((sol) => {
            const Icon = iconMap[sol.iconName] || Server;
            const isFeatured = sol.id === "ai" || sol.id === "network";

            return (
              <div
                key={sol.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-glass-card border transition-all duration-300 group hover:-translate-y-1.5 ${
                  isFeatured
                    ? "border-cyan-500/40 shadow-xl shadow-cyan-950/30"
                    : "border-white/10 hover:border-cyan-500/30"
                }`}
              >
                {/* Ambient Card Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div>
                  {/* Card Header (Icon & Badge) */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-lg shadow-cyan-950/50">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      {sol.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                      {sol.name}
                    </h3>
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      {sol.category}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    {sol.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap} className="flex items-start text-xs text-slate-300 space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 group/link transition-colors"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-blue-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white">Need a Custom Integrated Blueprint?</h4>
            <p className="text-xs text-slate-400">
              Konsultasikan arsitektur infrastruktur dan deployment AI Anda bersama tim Principal Engineer ARKAPRANA.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
