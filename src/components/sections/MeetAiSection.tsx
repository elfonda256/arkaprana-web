"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Database,
  FileText,
  Search,
  Zap,
  ArrowRight,
  CheckCircle2,
  Bot,
  BookOpen,
  Layers,
  LineChart,
  Shield,
  HelpCircle,
  FileCheck
} from "lucide-react";
import { AI_OPPORTUNITY_AREAS } from "@/lib/data";
import AiProcessingBlueprint from "@/components/decorative/AiProcessingBlueprint";

const AI_CAPABILITIES = [
  { name: "PRIVATE AI", status: "Capability" },
  { name: "ON-PREMISE AI", status: "Capability" },
  { name: "RAG", status: "Capability" },
  { name: "ENTERPRISE KNOWLEDGE BASE", status: "Capability" },
  { name: "DOCUMENT INTELLIGENCE", status: "Capability" },
  { name: "AI ASSISTANT", status: "Capability" },
  { name: "WORKFLOW AUTOMATION", status: "Capability" },
  { name: "AI ANALYTICS", status: "Concept" }
];

const AI_USE_CASES = [
  "Document Search",
  "Knowledge Assistant",
  "Policy Search",
  "Technical Document Analysis",
  "Project Knowledge",
  "Internal Q&A",
  "Workflow Automation"
];

export default function MeetAiSection() {
  const [activeTab, setActiveTab] = useState<"search" | "knowledge" | "documents" | "insights">("search");
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>("documents");
  const [queryState, setQueryState] = useState<"idle" | "searching" | "result">("result");

  const runSampleQuery = () => {
    setQueryState("searching");
    setTimeout(() => {
      setQueryState("result");
    }, 600);
  };

  const currentArea =
    AI_OPPORTUNITY_AREAS.find((a) => a.id === selectedOpportunity) ||
    AI_OPPORTUNITY_AREAS[0];

  return (
    <section id="ai-platform" className="relative py-28 md:py-40 bg-[#02050E] text-white overflow-hidden border-t border-b border-white/[0.08]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-cyan-600/10 via-blue-700/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header (Section 16 verbatim) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Future AI Flagship</span>
          </div>

          {/* Headline (Editorial, Confident, Human) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
            Your data. Your infrastructure.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400">
              Your intelligence.
            </span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
            Turn your internal knowledge, operational logs, and business documentation into practical intelligence your teams can actually use — without sensitive data ever leaving your control.
          </p>

          {/* Capabilities with Honest Status Labels (Section 16 verbatim) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-4xl mx-auto">
            {AI_CAPABILITIES.map((cap) => (
              <span
                key={cap.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300"
              >
                <span>{cap.name}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                  {cap.status}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Section 11: Abstract AI Processing Visualization */}
        {/* DOCUMENT ↓ PROCESSING ↓ KNOWLEDGE ↓ AI ↓ ANSWER */}
        <div className="mb-20 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#030610] border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Abstract AI Processing Pipeline
            </span>
            <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Sovereign Ingestion &amp; Inference
            </span>
          </div>

          {/* ARKAPRANA Living Outline: Technical AI Pipeline Schematic */}
          <AiProcessingBlueprint />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {[
              { step: "01", name: "DOCUMENT", desc: "PDFs, Schematics, ERP Tables & Incident Logs", tag: "Data Ingest" },
              { step: "02", name: "PROCESSING", desc: "Private Tokenization, Chunking & Embeddings", tag: "Feature Extract" },
              { step: "03", name: "KNOWLEDGE", desc: "High-Dimensional Vector & Graph Hierarchy", tag: "Vector Index" },
              { step: "04", name: "AI", desc: "On-Premise Neural Model (Zero Cloud Leakage)", tag: "Local LLM" },
              { step: "05", name: "ANSWER", desc: "Verified Response & Autonomous Workflow Hand-off", tag: "Grounded Output" }
            ].map((node, i) => (
              <div
                key={node.name}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">{node.step}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-neutral-400">{node.tag}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white font-sans tracking-wide group-hover:text-cyan-200 transition-colors">
                    {node.name}
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-relaxed mt-3">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 12: Interactive AI Interest & Opportunity Selector */}
        {/* "Explore Your AI Opportunity" with 8 Use Cases */}
        <div className="mb-20 max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#060A14] border border-white/[0.1] shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              <Sparkles className="w-3 h-3" />
              <span>Interactive Opportunity Assessment</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white font-sans">
              Explore Your AI Opportunity
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              What would you like AI to improve? Select a target use-case below:
            </p>
          </div>

          {/* 8 Opportunity Buttons (Section 12 & 17 verbatim) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            {AI_OPPORTUNITY_AREAS.map((area) => {
              const isSelected = selectedOpportunity === area.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedOpportunity(area.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-cyan-950/40 border-cyan-400 ring-1 ring-cyan-400/50 shadow-lg shadow-cyan-500/20 translate-y-[-1px]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {area.label}
                    </span>
                    {isSelected ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Opportunity Assessment Result & CTA */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                Target Improvement: {currentArea.label}
              </div>
              <div className="text-sm font-semibold text-white">
                {currentArea.detail}
              </div>
              <p className="text-xs text-neutral-400 pt-1">
                ARKAPRANA can help assess the opportunity. Kami menyediakan kajian arsitektur on-premise dan estimasi kebutuhan GPU/hardware.
              </p>
            </div>

            <Link
              href={`/contact?aiFocus=${encodeURIComponent(currentArea.label)}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-100 btn-primary-interaction group shrink-0"
            >
              <span>Discuss AI Requirements</span>
              <ArrowRight className="w-3.5 h-3.5 text-black cta-arrow" />
            </Link>
          </div>
        </div>

        {/* Visual Conceptual Demo: "ARKAPRANA Knowledge" Mock Interface */}
        <div className="rounded-3xl bg-[#060A14] border border-white/[0.12] shadow-2xl p-6 sm:p-10 mb-16 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white font-sans">
                    ARKAPRANA Knowledge
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.1] text-neutral-400 font-mono">
                    Concept Demo
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  Air-Gapped Sovereign Neural Architecture
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              {(["search", "knowledge", "documents", "insights"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-white/[0.1] text-cyan-300 shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Mock Interactive Query Search Box */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 font-mono flex-1 mr-2">
                <Search className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">
                  "Bandingkan klausul garansi SLA pada kontrak fiber optik dan data center 2025"
                </span>
              </div>
              <button
                type="button"
                onClick={runSampleQuery}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-400 text-black text-xs font-mono font-semibold hover:bg-cyan-300 transition-colors shrink-0 cursor-pointer"
              >
                Run Query
              </button>
            </div>
          </div>

          {/* Query Result Box */}
          {queryState === "searching" ? (
            <div className="p-8 text-center text-xs font-mono text-neutral-400 space-y-2">
              <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
              <span>Synthesizing internal vectorized documents with strict citation tracking...</span>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ground Truth Verified • 0% Public Leakage</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  Latency: 142ms • Local vLLM Inference
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                Berdasarkan sintesis dokumen internal: Kontrak Fiber Optik menetapkan garansi ketersediaan transmisi 99.98% dengan MTTR maksimal 4 jam untuk insiden pemotongan jalur. Kontrak Ruang Server &amp; Data Center menetapkan jaminan ketersediaan daya 99.995% dengan failover baterai UPS redundan 2N+1.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-neutral-400">
                <span className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] flex items-center gap-1">
                  <FileCheck className="w-3 h-3 text-cyan-400" />
                  <span>Source: Contract_Fiber_Optic_2025.pdf#page=12</span>
                </span>
                <span className="px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] flex items-center gap-1">
                  <FileCheck className="w-3 h-3 text-cyan-400" />
                  <span>Source: SLA_Tier3_Datacenter_AnnexA.pdf#page=4</span>
                </span>
              </div>
            </div>
          )}

          {/* Use Cases Pills (Section 16 verbatim) */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Enterprise AI Use Cases:
            </span>
            <div className="flex flex-wrap gap-2">
              {AI_USE_CASES.map((uc) => (
                <span
                  key={uc}
                  className="px-3 py-1 rounded-lg text-xs bg-white/[0.03] border border-white/[0.06] text-neutral-300"
                >
                  {uc}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
