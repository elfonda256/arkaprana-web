"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShieldAlert,
  Database,
  FileText,
  Radio,
  Cpu,
  Bot,
  Search,
  Zap,
  BarChart3,
  Lock,
  ArrowRight,
  Server
} from "lucide-react";

export default function MeetAiSection() {
  const [activeTab, setActiveTab] = useState<"architecture" | "pipeline" | "governance">("architecture");

  return (
    <section className="relative py-32 md:py-44 bg-[#02050e] overflow-hidden border-t border-white/[0.08]">
      {/* Deep atmospheric lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-cyan-600/10 via-blue-700/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Launch Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Product Spotlight // Sovereign Intelligence</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
            Meet ARKAPRANA AI.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-cyan-200 to-cyan-400 mt-1">
              Intelligence designed around your organization.
            </span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            Bukan sekadar generic chatbot publik. Sebuah mesin kecerdasan buatan berdaulat yang beroperasi langsung di dalam infrastruktur private Anda—menghubungkan data, proses, dan pengambilan keputusan kritis.
          </p>
        </div>

        {/* Cinematic Architectural Pipeline Console */}
        <div className="relative rounded-3xl bg-[#060a14] border border-white/[0.12] p-6 sm:p-10 shadow-2xl mb-20 overflow-hidden">
          
          {/* Top Bar with Status and Mode Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs tracking-wider text-neutral-300">
                SOVEREIGN REASONING ENGINE // ARCHITECTURE
              </span>
            </div>
            
            <div className="flex items-center space-x-2 font-mono text-xs">
              <span className="text-[11px] text-neutral-500">ISOLATION:</span>
              <span className="px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-[10px]">
                AIR-GAPPED / PRIVATE CLOUD
              </span>
            </div>
          </div>

          {/* 3-Stage Visual Pipeline Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Stage 1: Data Ingestion (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>01. Ingestion Sources</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-colors flex items-center space-x-3">
                <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Unstructured Docs</div>
                  <div className="text-[10px] text-neutral-500">PDF, Contracts, SOPs</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-colors flex items-center space-x-3">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Relational DBs & ERP</div>
                  <div className="text-[10px] text-neutral-500">PostgreSQL, SAP, Oracle</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-colors flex items-center space-x-3">
                <Radio className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Live Telemetry & Logs</div>
                  <div className="text-[10px] text-neutral-500">Network, Syslog, SCADA</div>
                </div>
              </div>
            </div>

            {/* Stage 2: ARKAPRANA Sovereign AI Core (Span 6) */}
            <div className="lg:col-span-6 relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a1226] to-[#040816] border border-cyan-500/30 text-center space-y-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-black font-mono text-[9px] font-bold tracking-widest uppercase">
                Zero Data Leakage Core
              </div>

              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.04] border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-950/60">
                <Cpu className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  ARKAPRANA Neural Engine
                </h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto mt-1 leading-relaxed">
                  Hybrid embedding models + Retrieval Augmented Generation (RAG) running strictly on local server clusters or private virtual clouds.
                </p>
              </div>

              {/* Core Features Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300">
                  AES-256 Vector Vault
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-cyan-300">
                  Role-Based Token ACL
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-neutral-300">
                  Local Inference (No 3rd-Party APIs)
                </span>
              </div>
            </div>

            {/* Stage 3: Operational Deliverables (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>03. Actionable Outputs</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex items-center space-x-3">
                <Search className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Semantic Knowledge</div>
                  <div className="text-[10px] text-neutral-500">Cited enterprise discovery</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex items-center space-x-3">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Autonomous Workflows</div>
                  <div className="text-[10px] text-neutral-500">Script execution & tickets</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex items-center space-x-3">
                <BarChart3 className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-white">Predictive Operations</div>
                  <div className="text-[10px] text-neutral-500">Anomaly alerts & forecasts</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars of ARKAPRANA AI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-[#060a14] border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-cyan-400 mb-6">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Sovereign & Private</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Data Anda tidak pernah dikirim ke server model publik di luar negeri. Seluruh pemrosesan berjalan di server lokal, private cloud, atau infrastruktur on-premise organisasi Anda.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#060a14] border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-cyan-400 mb-6">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Grounded in Enterprise Truth</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Menghilangkan halusinasi dengan mengaitkan setiap jawaban langsung ke dokumen internal, data operasional, dan parameter riil perusahaan dengan atribusi referensi jelas.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#060a14] border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-cyan-400 mb-6">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Actionable Automation</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Bukan sekadar alat tanya jawab, melainkan agen cerdas yang dapat memicu integrasi API, otomasi pelaporan berjadwal, hingga deteksi anomali infrastruktur real-time.
            </p>
          </div>
        </div>

        {/* CTA to Explore AI Architecture */}
        <div className="text-center">
          <Link
            href="/solutions/enterprise-ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-sm"
          >
            <span>Explore ARKAPRANA AI Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </Link>
        </div>

      </div>
    </section>
  );
}
