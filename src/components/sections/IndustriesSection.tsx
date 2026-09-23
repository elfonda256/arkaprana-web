"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";
import IndustryTopologyVisual from "@/components/shared/IndustryTopologyVisual";

const SECTOR_ARCHITECTURES: Record<string, { layer: string; label: string; detail: string }[]> = {
  maritime: [
    { layer: "01 / CONNECTIVITY", label: "CONNECTIVITY", detail: "LEO/VSAT satellite uplink & offshore wireless mesh" },
    { layer: "02 / INFRASTRUCTURE", label: "INFRASTRUCTURE", detail: "Ruggedized marine server racks & bridge switch fabric" },
    { layer: "03 / SECURITY", label: "SECURITY", detail: "Vessel AIS telemetry authentication & air-gapped bridge network" },
    { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "Centralized fleet voyage telemetry & container manifest index" },
    { layer: "05 / AI", label: "AI", detail: "Sea-lane route optimization & collision avoidance models" }
  ],
  manufacturing: [
    { layer: "01 / CONNECTIVITY", label: "CONNECTIVITY", detail: "Deterministic IEC 62443 industrial bus & Wi-Fi 7 mesh" },
    { layer: "02 / INFRASTRUCTURE", label: "INFRASTRUCTURE", detail: "Armored single-mode optical core & vibration-resistant edge nodes" },
    { layer: "03 / SECURITY", label: "SECURITY", detail: "Air-gapped OT/IT firewall segmentation & PLC attestation" },
    { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "Real-time sensor telemetry lake & ERP production ledger" },
    { layer: "05 / AI", label: "AI", detail: "Predictive machine vibration diagnostics & visual quality assurance" }
  ],
  logistics: [
    { layer: "01 / CONNECTIVITY", label: "CONNECTIVITY", detail: "Sub-second roaming RF scanner mesh & directional warehouse APs" },
    { layer: "02 / INFRASTRUCTURE", label: "INFRASTRUCTURE", detail: "High-bay automated rack nodes & cold-storage rated switches" },
    { layer: "03 / SECURITY", label: "SECURITY", detail: "Multi-tenant supply chain access tokens & encrypted fleet tunnels" },
    { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "High-IOPS automated warehouse inventory ledger (WMS)" },
    { layer: "05 / AI", label: "AI", detail: "Dynamic dispatch routing & autonomous forklift navigation" }
  ],
  construction: [
    { layer: "01 / CONNECTIVITY", label: "CONNECTIVITY", detail: "Solar-powered field microwave links & cellular backup" },
    { layer: "02 / INFRASTRUCTURE", label: "INFRASTRUCTURE", detail: "Transportable containerized micro datacenters & rugged nodes" },
    { layer: "03 / SECURITY", label: "SECURITY", detail: "Perimeter access control with biometric badge validation" },
    { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "BIM schematic repositories & heavy equipment operational logs" },
    { layer: "05 / AI", label: "AI", detail: "Structural strain forecasting & drone safety hazard detection" }
  ],
  government: [
    { layer: "01 / CONNECTIVITY", label: "CONNECTIVITY", detail: "Encrypted state-level fiber rings & carrier-neutral peering" },
    { layer: "02 / INFRASTRUCTURE", label: "INFRASTRUCTURE", detail: "Tier-3+ sovereign on-premise datacenter with domestic data residency" },
    { layer: "03 / SECURITY", label: "SECURITY", detail: "BSSN/ISO 27001 zero-trust sovereign enclave with HSM cryptographic core" },
    { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "National public service data lake & cross-agency verified registries" },
    { layer: "05 / AI", label: "AI", detail: "Air-gapped private LLMs for legal policy analysis & document classification" }
  ]
};

const DEFAULT_SECTOR_ARCH = [
  { layer: "01 / CONNECTIVITY", label: "CONNECTIVITY", detail: "Nationwide multi-branch SD-WAN & 100G optical interconnect" },
  { layer: "02 / INFRASTRUCTURE", label: "INFRASTRUCTURE", detail: "Hybrid private cloud compute clusters & all-flash SAN storage" },
  { layer: "03 / SECURITY", label: "SECURITY", detail: "Global Single Sign-On (SSO), mTLS v1.3 & 24/7 autonomous SOC" },
  { layer: "04 / KNOWLEDGE", label: "KNOWLEDGE", detail: "Unified enterprise data warehouse & vector knowledge base" },
  { layer: "05 / AI", label: "AI", detail: "Private on-premise RAG assistant & workflow automation agents" }
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].name);
  const activeIndustry = INDUSTRIES.find((i) => i.name === selectedIndustry) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-28 md:py-36 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Mission-Critical Environments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Technology for Critical Environments.
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Setiap sektor memiliki karakteristik operasional yang khas. ARKAPRANA merekayasa arsitektur teknologi yang disesuaikan secara presisi dengan tuntutan nyata di lapangan tanpa kompromi keandalan.
          </p>
        </div>

        {/* 9-Industry Interactive Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-neutral-200">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.name}
              onClick={() => setSelectedIndustry(ind.name)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                selectedIndustry === ind.name
                  ? "bg-neutral-900 text-white shadow-md -translate-y-0.5"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Active Industry Deep-Dive Showcase */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-neutral-200/90 p-8 sm:p-12 mb-14 shadow-sm transition-all duration-300">
          {/* Abstract Industry Technical Signature Topology */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#040814] border border-white/[0.08] shadow-inner space-y-4">
            <IndustryTopologyVisual slug={activeIndustry.slug} className="max-h-24 sm:max-h-28" />

            {/* 5 Architectural Layers for Selected Industry (Item 17) */}
            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-5 gap-3">
              {(SECTOR_ARCHITECTURES[activeIndustry.slug] || DEFAULT_SECTOR_ARCH).map((item) => (
                <div key={item.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[9px] font-mono text-cyan-400 font-bold block uppercase tracking-wider mb-0.5">
                    {item.layer}
                  </span>
                  <div className="text-[11px] font-bold text-white mb-1">
                    {item.label}
                  </div>
                  <p className="text-[10px] text-neutral-400 leading-snug">
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
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
                  SECTOR FOCUS // {activeIndustry.slug.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-neutral-900 font-sans tracking-tight">
                  {activeIndustry.name}
                </h3>
                <div className="text-lg sm:text-xl font-serif italic text-neutral-700 mt-2 font-normal">
                  &ldquo;{activeIndustry.headlineQuote}&rdquo;
                </div>
              </div>

              {/* Challenge Box */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1.5">
                  The Operational Challenge
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {activeIndustry.challenge}
                </p>
              </div>

              {/* Technology Environment */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1.5">
                  Operating Technology Environment
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {activeIndustry.environment}
                </p>
              </div>

              {/* Potential Solutions */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                  Targeted Architecture Solutions
                </span>
                <div className="space-y-2">
                  {activeIndustry.solutions.map((sol) => (
                    <div key={sol} className="flex items-center gap-2.5 text-xs text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span className="font-medium">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Applied Use Cases (Span 6) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                Representative Applied Scenarios
              </span>

              {activeIndustry.useCases.map((uc, idx) => (
                <div
                  key={uc.title}
                  className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-neutral-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-neutral-900">
                      {uc.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Scenario 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {uc.detail}
                  </p>
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/industries"
                  className="text-xs font-semibold text-neutral-900 hover:text-cyan-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore full industry catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Section 22 Strategic Lead-Gen CTA Strip */}
        <div className="rounded-2xl bg-[#070b16] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08] shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
              Industry Implementation Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Mengoperasikan fasilitas industri atau infrastruktur kritis?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
              Jadwalkan konsultasi awal untuk mengidentifikasi kebutuhan konektivitas lapangan, keamanan perimeter, atau integrasi data terdistribusi bersama tim kami.
            </p>
          </div>

          <Link
            href={`/contact?industry=${encodeURIComponent(selectedIndustry)}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-100 btn-primary-interaction group shrink-0"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-3.5 h-3.5 text-black cta-arrow" />
          </Link>
        </div>

      </div>
    </section>
  );
}
