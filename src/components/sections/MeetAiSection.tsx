"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Database,
  FileText,
  Radio,
  Search,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Server,
  Cpu,
  Layers,
  Bot
} from "lucide-react";

export default function MeetAiSection() {
  const [queryState, setQueryState] = useState<"idle" | "searching" | "result">("result");

  const runSampleQuery = () => {
    setQueryState("searching");
    setTimeout(() => {
      setQueryState("result");
    }, 700);
  };

  const featurePillars = [
    "Private AI",
    "On-Premise AI",
    "RAG Architecture",
    "Enterprise Knowledge Base",
    "Document Intelligence",
    "AI Assistant",
    "Workflow Automation"
  ];

  return (
    <section className="relative py-32 md:py-44 bg-[#02050E] text-white overflow-hidden border-t border-b border-white/[0.08]">
      {/* Deep atmospheric lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-cyan-600/10 via-blue-700/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Launch Header (Section 12 verbatim) */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Product Spotlight // Private Intelligence</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-sans">
            From Data to Intelligence.
          </h2>

          <p className="text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
            Private AI and intelligent automation designed around your organization.
          </p>

          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed pt-1">
            Bukan sekadar API publik pihak ketiga. Model kecerdasan buatan berdaulat yang beroperasi langsung di dalam infrastruktur private Anda—menjaga kerahasiaan dokumen dan kedaulatan data secara mutlak.
          </p>

          {/* Feature Pillars Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-2xl mx-auto">
            {featurePillars.map((feat) => (
              <span
                key={feat}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:border-cyan-400/40 transition-colors"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Pipeline Architecture (Section 12) */}
        {/* DOCUMENTS, DATABASES, APPLICATIONS, KNOWLEDGE ↓ ARKAPRANA AI ↓ SEARCH, ASSIST, ANALYZE, AUTOMATE */}
        <div className="mb-20 bg-[#060A14] rounded-2xl border border-white/[0.1] p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-1">
              Data-To-Intelligence Cognitive Pipeline
            </span>
            <span className="text-xs text-neutral-500">
              Interactive end-to-end knowledge flow
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Input Sources */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                01 • Input Knowledge
              </span>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-200">DOCUMENTS</span>
                <span className="text-[10px] text-neutral-500">PDF, SOP, Contracts</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-200">DATABASES</span>
                <span className="text-[10px] text-neutral-500">SQL, NoSQL, ERP</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-200">APPLICATIONS</span>
                <span className="text-[10px] text-neutral-500">CRM, HRIS, Ticketing</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-200">KNOWLEDGE</span>
                <span className="text-[10px] text-neutral-500">Wiki, Technical Specs</span>
              </div>
            </div>

            {/* Central Engine: ARKAPRANA AI */}
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-cyan-950/40 via-[#0a1224] to-[#060a14] border border-cyan-500/30 text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-3">
                <Bot className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                Core Neural Processor
              </span>
              <h3 className="text-xl font-black text-white tracking-wider">
                ARKAPRANA AI
              </h3>
              <p className="text-[11px] text-neutral-400 mt-2 max-w-[200px] leading-relaxed">
                Private RAG &amp; Vector Embeddings isolated on-premise.
              </p>
              <div className="mt-4 px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
                ZERO EXTERNAL LEAKAGE
              </div>
            </div>

            {/* Cognitive Actions Output */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                02 • Cognitive Outputs
              </span>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300">SEARCH</span>
                <span className="text-[10px] text-neutral-400">Semantic &amp; Vector Search</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300">ASSIST</span>
                <span className="text-[10px] text-neutral-400">Contextual Co-Pilot</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300">ANALYZE</span>
                <span className="text-[10px] text-neutral-400">Automated Synthesis</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-300">AUTOMATE</span>
                <span className="text-[10px] text-neutral-400">Event-Driven Workflows</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 13: AI Product Experience Mock Interface */}
        {/* "Enterprise AI Knowledge Assistant" Product Visualization */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#070B16] border border-white/[0.14] shadow-2xl p-6 sm:p-8 mb-16">
          
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-neutral-300">
                Enterprise AI Knowledge Assistant // v2.6.4
              </span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ISOLATED ON-PREMISE</span>
            </div>
          </div>

          {/* Interactive Chat Console Simulation */}
          <div className="space-y-4">
            
            {/* User Prompt Message */}
            <div className="flex items-start space-x-3 max-w-xl">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-neutral-300 shrink-0">
                U
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] text-xs sm:text-sm text-neutral-100 font-sans">
                &ldquo;Find the latest project requirements.&rdquo;
              </div>
            </div>

            {/* AI Reasoning / Searching State */}
            <div className="flex items-start space-x-3 max-w-2xl ml-auto justify-end">
              <div className="w-full sm:max-w-xl p-4 sm:p-5 rounded-2xl rounded-tr-sm bg-[#0A1224] border border-cyan-500/30 text-xs sm:text-sm space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 pb-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    Searching organizational knowledge...
                  </span>
                  <span className="text-neutral-500">14ms latency</span>
                </div>

                {/* Sources Scanned Indicator */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono text-neutral-400">
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.05] flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" /> Documents
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.05] flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" /> Policies
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.05] flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" /> Project Files
                  </div>
                  <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.05] flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" /> Knowledge Base
                  </div>
                </div>

                {/* Synthesized Result */}
                <div className="pt-2 text-xs text-neutral-200 leading-relaxed space-y-2">
                  <div className="font-semibold text-white flex items-center gap-1.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Result: Relevant information found.
                  </div>
                  <p className="text-[11.5px] text-neutral-300 leading-relaxed">
                    Spesifikasi proyek migrasi data center Q3 2026: Memerlukan interkoneksi serat optik berkecepatan 100G redundan, arsitektur failover multi-zona, zero-trust network access, serta penempatan kluster server komputasi berdaulat tanpa koneksi data pihak ketiga.
                  </p>
                  <div className="text-[10px] font-mono text-neutral-500 pt-1">
                    Citations: [SOP-DC-2026.pdf § 4.2] • [Security-ZeroTrust-v3.md]
                  </div>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-mono text-cyan-300 shrink-0">
                AI
              </div>
            </div>

          </div>

          {/* Interactive Trigger & Action Bar */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-neutral-400">
              Concept visualization of enterprise sovereign deployment.
            </span>
            <button
              onClick={runSampleQuery}
              className="px-3.5 py-1.5 rounded-md text-xs font-mono text-cyan-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-colors"
            >
              Re-run Mock Query ⟳
            </button>
          </div>
        </div>

        {/* CTA (Section 12 verbatim) */}
        <div className="text-center">
          <Link
            href="/solutions/ai"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] group"
          >
            <span>Explore ARKAPRANA AI</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-black" />
          </Link>
        </div>

      </div>
    </section>
  );
}
