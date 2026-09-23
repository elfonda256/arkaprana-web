"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Lock, Cpu, Database, FileText, Bot } from "lucide-react";
import AiCoreFlowCanvas from "@/components/canvas/AiCoreFlowCanvas";

export default function AiFutureSection() {
  const aiCapabilities = [
    { title: "Sovereign Private AI", desc: "Model kecerdasan buatan beroperasi 100% di perimeter on-premise tanpa kebocoran data ke cloud publik." },
    { title: "Enterprise Knowledge Base (RAG)", desc: "Menghubungkan ratusan ribu dokumen internal, SOP, dan kontrak ke asisten AI yang kontekstual dan akurat." },
    { title: "Intelligent Document Processing (IDP)", desc: "Ekstraksi data faktur, manifest kapal, gambar teknik, dan formulir legal secara instan." },
    { title: "Autonomous Workflow Automation", desc: "Memicu alur kerja terotomatisasi berdasarkan analisa kognitif data operasional real-time." },
    { title: "Executive Decision Analytics", desc: "Pemodelan tren prediktif bisnis dan sintesis laporan manajemen secara otomatis." },
    { title: "Departmental Role-Based Access", desc: "Setiap departemen hanya mengakses pengetahuan yang diotorisasi dengan standar keamanan perbankan." }
  ];

  return (
    <section className="py-24 bg-[#030611] relative overflow-hidden border-t border-b border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERPRISE COGNITIVE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Data to Intelligence.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            AI yang bekerja di dalam ekosistem teknologi organisasi Anda. Bukan sekadar chatbot umum, melainkan kecerdasan kognitif berdaulat yang terhubung langsung ke data operasional.
          </p>
        </div>

        {/* AI Core Interactive Topology Canvas */}
        <div className="rounded-3xl bg-gradient-to-b from-[#060e22] via-[#040817] to-[#02050e] border border-cyan-500/30 shadow-2xl p-6 sm:p-10 mb-14 relative">
          <div className="text-center max-w-xl mx-auto mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              CONVERGENT ARCHITECTURAL DATA FLOW
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Seluruh node data organisasi mengalir menuju sentral ARKAPRANA AI Core untuk pemrosesan cerdas
            </p>
          </div>

          {/* Canvas Component */}
          <AiCoreFlowCanvas />

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Air-Gapped & Sovereign Data Privacy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>On-Premise GPU Accelerated Clusters</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Context-Aware Semantic Search</span>
            </div>
          </div>
        </div>

        {/* Capabilities Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-200 group"
            >
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {cap.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href="/solutions/arkaprana-ai"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
          >
            <span>Explore AI Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
