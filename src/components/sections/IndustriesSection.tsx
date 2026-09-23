"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { INDUSTRIES } from "@/lib/data";
import IndustryTopologyVisual from "@/components/shared/IndustryTopologyVisual";

const DEFAULT_SECTOR_ARCH = [
  { layer: "01 / PHYSICAL", label: "EDGE & COMPUTE", detail: "Industrial-grade hardware & ruggedized network appliances" },
  { layer: "02 / TRANSIT", label: "OPTICAL MESH", detail: "Encrypted SD-WAN overlay & low-latency optical interconnects" },
  { layer: "03 / SECURITY", label: "SECURITY", detail: "Global Single Sign-On (SSO), mTLS v1.3 & 24/7 autonomous SOC" },
  { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "Unified enterprise data warehouse & vector knowledge base" },
  { layer: "05 / AI", label: "AI", detail: "Private on-premise RAG assistant & workflow automation agents" }
];

const SECTOR_ARCHITECTURES: Record<string, typeof DEFAULT_SECTOR_ARCH> = {
  manufacturing: [
    { layer: "01 / SENSORS", label: "OT / PLC TELEMETRY", detail: "SCADA real-time telemetry, Modbus to MQTT bridge & edge IoT gateways" },
    { layer: "02 / FABRIC", label: "INDUSTRIAL MESH", detail: "Redundant TSN switches, deterministic Ethernet & factory floor APs" },
    { layer: "03 / AIR-GAP", label: "PERIMETER DEFENSE", detail: "IEC 62443 industrial firewalls, DMZ isolation & anomaly tripwires" },
    { layer: "04 / SOVEREIGN", label: "ON-PREM CLUSTER", detail: "Local private HCI cluster for sub-second assembly line decisions" },
    { layer: "05 / VISION", label: "AI QUALITY AUDIT", detail: "Autonomous optical QA cameras & edge predictive maintenance models" }
  ]
};

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].name);
  const activeIndustry = INDUSTRIES.find((i) => i.name === selectedIndustry) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-28 md:py-36 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Mission-Critical Environments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12] font-display">
            Technology for Critical Environments.
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Setiap sektor memiliki karakteristik operasional yang khas. ARKAPRANA merekayasa arsitektur teknologi yang disesuaikan secara presisi dengan tuntutan nyata di lapangan tanpa kompromi keandalan.
          </p>
        </div>

        {/* 9-Industry Interactive Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[var(--border-subtle)]">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.name}
              onClick={() => setSelectedIndustry(ind.name)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                selectedIndustry === ind.name
                  ? "bg-[var(--accent)] text-white shadow-xs -translate-y-0.5"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Active Industry Deep-Dive Showcase */}
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-8 sm:p-12 mb-14 shadow-xs transition-all duration-300">
          {/* Abstract Industry Technical Signature Topology */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
            <IndustryTopologyVisual slug={activeIndustry.slug} className="max-h-24 sm:max-h-28" />

            {/* 5 Architectural Layers for Selected Industry */}
            <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-5 gap-3">
              {(SECTOR_ARCHITECTURES[activeIndustry.slug] || DEFAULT_SECTOR_ARCH).map((item) => (
                <div key={item.label} className="p-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                  <span className="text-[9px] font-mono text-[var(--accent)] font-bold block uppercase tracking-wider mb-0.5">
                    {item.layer}
                  </span>
                  <div className="text-[11px] font-bold text-[var(--text-primary)] mb-1">
                    {item.label}
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] leading-snug">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Challenge & Environment (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block mb-2">
                  SECTOR FOCUS // {activeIndustry.slug.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] font-sans tracking-tight">
                  {activeIndustry.name}
                </h3>
                <div className="text-lg sm:text-xl font-serif italic text-[var(--accent)] mt-2 font-normal">
                  &ldquo;{activeIndustry.headlineQuote}&rdquo;
                </div>
              </div>

              {/* Challenge Box */}
              <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-bold block mb-1.5">
                  The Operational Challenge
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeIndustry.challenge}
                </p>
              </div>

              {/* Technology Environment */}
              <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-bold block mb-1.5">
                  Operating Technology Environment
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeIndustry.environment}
                </p>
              </div>

              {/* Potential Solutions */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold block mb-3">
                  Targeted Architecture Solutions
                </span>
                <div className="space-y-2">
                  {activeIndustry.solutions.map((sol) => (
                    <div key={sol} className="flex items-center gap-2.5 text-xs text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span className="font-medium">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Applied Use Cases (Span 6) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold block">
                Representative Applied Scenarios
              </span>

              {activeIndustry.useCases.map((uc, idx) => (
                <div
                  key={uc.title}
                  className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      {uc.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      Scenario 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {uc.detail}
                  </p>
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/industries"
                  className="text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore full industry catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Strategic Lead-Gen CTA Strip */}
        <div className="rounded-2xl bg-[var(--bg-card)] text-[var(--text-primary)] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[var(--border-subtle)] shadow-xl transition-colors duration-300">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block font-semibold">
              Industry Implementation Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Mengoperasikan fasilitas industri atau infrastruktur kritis?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Jadwalkan konsultasi awal untuk mengidentifikasi kebutuhan konektivitas lapangan, keamanan perimeter, atau integrasi data terdistribusi bersama tim kami.
            </p>
          </div>

          <Link
            href={`/contact?industry=${encodeURIComponent(selectedIndustry)}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shrink-0 shadow-sm"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
          </Link>
        </div>

      </div>
    </section>
  );
}
