"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Server,
  Network,
  Cloud,
  ShieldCheck,
  Database,
  BrainCircuit,
  Workflow
} from "lucide-react";
import { DISCONNECT_PROBLEMS } from "@/lib/data";

const CONNECTED_PIECES = [
  { id: "infra", label: "Infrastructure", icon: Server, color: "text-amber-600 bg-amber-50 border-amber-200" },
  { id: "network", label: "Network", icon: Network, color: "text-blue-600 bg-blue-50 border-blue-200" },
  { id: "cloud", label: "Cloud", icon: Cloud, color: "text-sky-600 bg-sky-50 border-sky-200" },
  { id: "security", label: "Security", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  { id: "data", label: "Data", icon: Database, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
  { id: "ai", label: "AI", icon: BrainCircuit, color: "text-purple-600 bg-purple-50 border-purple-200" }
];

export default function BusinessProblemSection() {
  const [activeProblem, setActiveProblem] = useState<string>(DISCONNECT_PROBLEMS[0].id);

  return (
    <section className="relative py-28 md:py-36 bg-[#F8FAFC] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80">
      {/* Decorative architectural grid line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neutral-300 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-600 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>The Enterprise Challenge</span>
          </div>
        </div>

        {/* Section Headline (Section 05 verbatim) */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Technology becomes complicated when everything is disconnected.
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-2">
            Pertumbuhan organisasi sering kali meninggalkan tumpukan teknologi multi-vendor yang terpisah, menciptakan celah keamanan, dan memperlambat pengambilan keputusan strategis.
          </p>
        </div>

        {/* Disconnect Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20 max-w-6xl mx-auto">
          {DISCONNECT_PROBLEMS.map((prob, idx) => {
            const isSelected = activeProblem === prob.id;
            return (
              <div
                key={prob.id}
                onClick={() => setActiveProblem(prob.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? "bg-white border-cyan-500 shadow-md ring-1 ring-cyan-500/20"
                    : "bg-white/80 hover:bg-white border-neutral-200/90 shadow-sm hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    PROBLEM 0{idx + 1}
                  </span>
                  <AlertTriangle className={`w-4 h-4 ${isSelected ? "text-amber-500" : "text-neutral-400"}`} />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 font-sans">
                  {prob.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition: ARKAPRANA connects the pieces (Section 05 verbatim) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-neutral-900 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-400 block">
              Integrated Architectural Paradigm
            </span>

            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              ARKAPRANA connects the pieces.
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              Kami menyatukan seluruh spektrum teknologi ke dalam satu arsitektur terorkestrasi: dari kabel fisik di tanah, kluster server, komputasi awan berdaulat, hingga model kecerdasan buatan otonom.
            </p>

            {/* Visual: Infrastructure -> Network -> Cloud -> Security -> Data -> AI (All connected) */}
            <div className="pt-8 pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {CONNECTED_PIECES.map((piece, i) => {
                  const Icon = piece.icon;
                  return (
                    <div
                      key={piece.id}
                      className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-cyan-400/50 transition-colors flex flex-col items-center text-center space-y-2 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-white tracking-wide">
                        {piece.label}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Pillar 0{i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Semua terhubung dalam satu arsitektur berdaulat</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Explore Solutions Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium tracking-wide text-neutral-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.15] transition-all"
              >
                <span>Discuss Your Project</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
