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
  { id: "infra", label: "Infrastructure", icon: Server },
  { id: "network", label: "Network", icon: Network },
  { id: "cloud", label: "Cloud", icon: Cloud },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "data", label: "Data", icon: Database },
  { id: "ai", label: "AI", icon: BrainCircuit }
];

export default function BusinessProblemSection() {
  const [activeProblem, setActiveProblem] = useState<string>(DISCONNECT_PROBLEMS[0].id);

  return (
    <section className="relative py-28 md:py-36 bg-[var(--bg-secondary)] text-[var(--text-primary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Decorative architectural grid line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[var(--border-subtle)] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[11px] font-mono tracking-widest uppercase shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>The Enterprise Challenge</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12] font-display">
            Technology becomes complicated when everything is disconnected.
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal pt-2">
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
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left solution-card-interaction ${
                  isSelected
                    ? "bg-[var(--bg-card)] border-[var(--accent)] shadow-md ring-1 ring-[var(--accent)]/20 -translate-y-1"
                    : "bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border-[var(--border-subtle)] shadow-xs hover:border-[var(--accent)]/30 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                    PROBLEM 0{idx + 1}
                  </span>
                  <AlertTriangle className={`w-4 h-4 card-icon ${isSelected ? "text-amber-500" : "text-[var(--text-muted)]"}`} />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-sans">
                  {prob.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transition: ARKAPRANA connects the pieces (Harmonious with active theme) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] p-8 sm:p-14 shadow-xl relative overflow-hidden transition-colors duration-300">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent)]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--accent)] block font-semibold">
              Integrated Architectural Paradigm
            </span>

            <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] font-display">
              ARKAPRANA connects the pieces.
            </h3>

            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-normal">
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
                      className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 transition-colors flex flex-col items-center text-center space-y-2 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">
                        {piece.label}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        Pillar 0{i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Semua terhubung dalam satu arsitektur berdaulat</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shadow-sm"
              >
                <span>Explore Solutions Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] btn-secondary-interaction group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] cta-arrow" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
