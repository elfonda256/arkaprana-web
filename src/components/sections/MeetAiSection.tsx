"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Search,
  Bot
} from "lucide-react";
import { AI_CAPABILITIES, AI_USE_CASES, AI_OPPORTUNITY_AREAS } from "@/lib/data";
import AiProcessingBlueprint from "@/components/decorative/AiProcessingBlueprint";

export default function MeetAiSection() {
  const [activeTab, setActiveTab] = useState<"search" | "knowledge" | "documents" | "insights">("search");
  const [queryState, setQueryState] = useState<"idle" | "searching" | "result">("result");
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>("documents");

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
    <section id="ai-platform" className="relative py-28 md:py-40 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-[var(--accent)]/10 via-[var(--accent)]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--accent)] text-xs font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Future AI Flagship</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.14]">
            Your data. Your infrastructure.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-600">
              Your intelligence.
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
            Turn your internal knowledge, operational logs, and business documentation into practical intelligence your teams can actually use — without sensitive data ever leaving your control.
          </p>

          {/* Capabilities with Status Labels */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-4xl mx-auto">
            {AI_CAPABILITIES.map((cap) => (
              <span
                key={cap.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
              >
                <span>{cap.name}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--accent-soft-bg)] text-[var(--accent)] border border-[var(--border-subtle)] font-medium">
                  {cap.status}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Abstract AI Processing Visualization */}
        <div className="mb-20 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-subtle)]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Abstract AI Processing Pipeline
            </span>
            <span className="text-[10px] font-mono text-[var(--accent)] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Sovereign Ingestion &amp; Inference
            </span>
          </div>

          {/* Technical AI Pipeline Schematic */}
          <AiProcessingBlueprint />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {[
              { step: "01", name: "DOCUMENT", desc: "PDFs, Schematics, ERP Tables & Incident Logs", tag: "Data Ingest" },
              { step: "02", name: "PROCESSING", desc: "Private Tokenization, Chunking & Embeddings", tag: "Feature Extract" },
              { step: "03", name: "KNOWLEDGE", desc: "High-Dimensional Vector & Graph Hierarchy", tag: "Vector Index" },
              { step: "04", name: "AI", desc: "On-Premise Neural Model (Zero Cloud Leakage)", tag: "Local LLM" },
              { step: "05", name: "ANSWER", desc: "Verified Response & Autonomous Workflow Hand-off", tag: "Grounded Output" }
            ].map((node) => (
              <div
                key={node.name}
                className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[var(--accent)] font-bold">{node.step}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]">{node.tag}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-sans tracking-wide group-hover:text-[var(--accent)] transition-colors">
                    {node.name}
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] leading-relaxed mt-3">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive AI Interest & Opportunity Selector */}
        <div className="mb-20 max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl relative overflow-hidden transition-colors duration-300">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Interactive Opportunity Assessment</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] font-sans">
              Explore Your AI Opportunity
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              What would you like AI to improve? Select a target use-case below:
            </p>
          </div>

          {/* 8 Opportunity Buttons */}
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
                      ? "bg-[var(--accent-soft-bg)] border-[var(--accent)] ring-1 ring-[var(--accent)]/50 shadow-sm translate-y-[-1px]"
                      : "bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-card)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[var(--text-primary)] tracking-wide">
                      {area.label}
                    </span>
                    {isSelected ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-subtle)]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Opportunity Assessment Result & CTA */}
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest font-semibold">
                Target Improvement: {currentArea.label}
              </div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                {currentArea.detail}
              </div>
              <p className="text-xs text-[var(--text-secondary)] pt-1">
                ARKAPRANA can help assess the opportunity. Kami menyediakan kajian arsitektur on-premise dan estimasi kebutuhan GPU/hardware.
              </p>
            </div>

            <Link
              href={`/contact?aiFocus=${encodeURIComponent(currentArea.label)}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shrink-0 shadow-sm"
            >
              <span>Discuss AI Requirements</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
            </Link>
          </div>
        </div>

        {/* Visual Conceptual Demo: "ARKAPRANA Knowledge" Mock Interface */}
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl p-6 sm:p-10 mb-16 relative transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--border-subtle)]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--text-primary)] font-sans">
                    ARKAPRANA Knowledge
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)] font-mono">
                    Concept Demo
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Air-Gapped Sovereign Neural Architecture
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              {(["search", "knowledge", "documents", "insights"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[var(--bg-card)] text-[var(--accent)] shadow-xs font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Mock Interactive Query Search Box */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-primary)] font-mono flex-1 mr-2">
                <Search className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span className="truncate">
                  "Bandingkan klausul garansi SLA pada kontrak fiber optik dan data center 2025"
                </span>
              </div>
              <button
                type="button"
                onClick={runSampleQuery}
                className="px-3.5 py-1.5 rounded-lg bg-[var(--accent)] text-white text-xs font-mono font-semibold hover:opacity-90 transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                Run Query
              </button>
            </div>
          </div>

          {/* Query Result Box */}
          {queryState === "searching" ? (
            <div className="p-8 text-center text-xs font-mono text-[var(--text-muted)] space-y-2">
              <div className="w-5 h-5 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto" />
              <span>Synthesizing internal vectorized documents with strict citation tracking...</span>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-emerald-500 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ground Truth Verified • 0% Public Leakage</span>
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Latency: 142ms • Local vLLM Inference
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-normal">
                Berdasarkan sintesis dokumen internal: Kontrak Fiber Optik menetapkan garansi ketersediaan transmisi 99.98% dengan MTTR maksimal 4 jam untuk insiden pemotongan jalur. Kontrak Ruang Server &amp; Data Center menetapkan jaminan ketersediaan daya 99.995% dengan failover baterai UPS redundan 2N+1.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-[var(--text-muted)]">
                <span className="px-2 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center gap-1">
                  <FileCheck className="w-3 h-3 text-[var(--accent)]" />
                  <span>Source: Contract_Fiber_Optic_2025.pdf#page=12</span>
                </span>
                <span className="px-2 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center gap-1">
                  <FileCheck className="w-3 h-3 text-[var(--accent)]" />
                  <span>Source: SLA_Tier3_Datacenter_AnnexA.pdf#page=4</span>
                </span>
              </div>
            </div>
          )}

          {/* Use Cases Pills */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              Enterprise AI Use Cases:
            </span>
            <div className="flex flex-wrap gap-2">
              {AI_USE_CASES.map((uc) => (
                <span
                  key={uc}
                  className="px-3 py-1 rounded-lg text-xs bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
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
