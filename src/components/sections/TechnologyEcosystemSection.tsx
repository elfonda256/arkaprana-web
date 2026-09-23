"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Server,
  Network,
  Cloud,
  ShieldCheck,
  Database,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import ArchitectureBlueprintVisual from "@/components/decorative/ArchitectureBlueprintVisual";

interface EcosystemTier {
  id: string;
  name: string;
  category: string;
  tagline: string;
  items: string[];
  specs: { label: string; value: string }[];
  route: string;
  icon: React.ElementType;
}

const TIERS: EcosystemTier[] = [
  {
    id: "infra",
    name: "INFRASTRUCTURE",
    category: "Physical Foundation Layer",
    tagline: "Tier-3+ datacenter facilities, high-density compute & resilient storage.",
    items: [
      "Servers",
      "Storage",
      "Virtualization",
      "Data Center",
      "Backup"
    ],
    specs: [
      { label: "Tier Rating", value: "Tier-3+ Resilient" },
      { label: "Power Redundancy", value: "Dual Feed 2N+1 UPS" },
      { label: "Cooling", value: "In-Row Precision CRAC" },
      { label: "Compute Density", value: "Up to 40kW / Rack" }
    ],
    route: "/solutions/infrastructure",
    icon: Server
  },
  {
    id: "network",
    name: "NETWORK",
    category: "Connectivity & Routing Layer",
    tagline: "High-speed transmission, carrier-neutral transit & unified mesh.",
    items: [
      "Enterprise Connectivity",
      "Fiber Infrastructure",
      "Enterprise Wi-Fi",
      "Network Monitoring",
      "Structured Cabling"
    ],
    specs: [
      { label: "Core Transit", value: "Optical Single-Mode" },
      { label: "Routing Latency", value: "< 1ms Core Jitter" },
      { label: "Protocols", value: "BGP4, MPLS, OSPF" },
      { label: "Redundancy", value: "Sub-50ms Fast Reroute" }
    ],
    route: "/solutions/network",
    icon: Network
  },
  {
    id: "cloud",
    name: "CLOUD",
    category: "Sovereign Virtualization Layer",
    tagline: "Private on-premise cloud with 100% domestic data jurisdiction.",
    items: [
      "Sovereign Cloud",
      "Hybrid Multi-Cloud",
      "Kubernetes Platform",
      "Object Storage (S3)",
      "Automated Failover"
    ],
    specs: [
      { label: "Jurisdiction", value: "100% Indonesian Soil" },
      { label: "Availability", value: "99.999% SLA" },
      { label: "Storage Engine", value: "Distributed High-IOPS" },
      { label: "Control", value: "Private Kubernetes Mesh" }
    ],
    route: "/solutions/cloud",
    icon: Cloud
  },
  {
    id: "security",
    name: "SECURITY",
    category: "Zero-Trust & Governance Layer",
    tagline: "Perimeter micro-segmentation, HSM vaults & continuous SOC hunting.",
    items: [
      "Zero-Trust Access (ZTNA)",
      "Perimeter Defense",
      "Cryptographic HSM Vault",
      "Continuous SOC Hunting",
      "ISO 27001 Compliance"
    ],
    specs: [
      { label: "Verification", value: "Never Trust, Always Verify" },
      { label: "Crypto Standard", value: "FIPS 140-2 Level 3" },
      { label: "SOC Response", value: "< 15 Min SLA" },
      { label: "Audit Readiness", value: "UU PDP & BSSN Aligned" }
    ],
    route: "/solutions/security",
    icon: ShieldCheck
  },
  {
    id: "data",
    name: "DATA",
    category: "Unified Telemetry & Lakehouse Layer",
    tagline: "Real-time streaming pipeline, unified metadata & telemetry governance.",
    items: [
      "Data Lakehouse",
      "Real-Time Telemetry",
      "Event-Driven Streaming",
      "Unified Metadata Catalog",
      "Lineage & Governance"
    ],
    specs: [
      { label: "Ingestion Speed", value: "Millions Events/sec" },
      { label: "Pipeline", value: "Kafka / Columnar CDC" },
      { label: "Telemetry", value: "24/7 Sensor Mesh" },
      { label: "Data Quality", value: "Automated Lineage" }
    ],
    route: "/capabilities#automation-architecture",
    icon: Database
  },
  {
    id: "ai",
    name: "AI",
    category: "Cognitive Intelligence Layer",
    tagline: "Private on-premise foundation models, RAG & autonomous agents.",
    items: [
      "Private AI",
      "RAG Architecture",
      "Knowledge Base",
      "Document Intelligence",
      "Workflow Automation"
    ],
    specs: [
      { label: "Model Isolation", value: "100% Air-Gapped" },
      { label: "Query Latency", value: "< 15ms Vector Search" },
      { label: "Data Leakage", value: "Zero External Exposure" },
      { label: "Context Window", value: "Up to 128k Tokens" }
    ],
    route: "/solutions/ai",
    icon: BrainCircuit
  }
];

export default function TechnologyEcosystemSection() {
  const [selectedTierId, setSelectedTierId] = useState<string>("infra");
  const activeTier = TIERS.find((t) => t.id === selectedTierId) || TIERS[0];

  return (
    <section id="ecosystem" className="py-28 md:py-36 bg-[#030712] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Integrated Architecture Explorer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight font-display">
            Technology should work as one system.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-1 max-w-2xl font-normal">
            Connect the systems your organization depends on — from physical datacenter compute and optical networking to sovereign cloud, cybersecurity, and practical AI.
          </p>
        </div>

        {/* ARKAPRANA Living Outline: Architecture Schematic Bus */}
        <ArchitectureBlueprintVisual />

        {/* Interactive Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Orbital Nodes Grid (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Center Brand Node Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#060a14] via-[#091122] to-[#060a14] border border-cyan-500/30 flex items-center justify-between shadow-xl">
              <div className="flex items-center space-x-3.5">
                <BrandLogo variant="dark" size="sm" showWordmark={true} showDescriptor={false} />
              </div>
              <div className="flex items-center space-x-2 font-mono text-[10px] text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>CENTRAL INTEGRATION CORE</span>
              </div>
            </div>

            {/* Signature Technical Bus Architecture (Section 08):
                INFRASTRUCTURE ↓ NETWORK ↓ CLOUD ↓ SECURITY ↓ DATA ↓ AI */}
            <div className="p-4 rounded-2xl bg-[#040814]/90 border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                <span>Unified System Bus</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  Active Telemetry Stream
                </span>
              </div>

              {/* Vertical Stack with Animated Connector Lines */}
              <div className="relative space-y-2">
                {TIERS.map((tier, idx) => {
                  const isSelected = tier.id === selectedTierId;
                  const Icon = tier.icon;
                  const isLast = idx === TIERS.length - 1;

                  return (
                    <div key={tier.id} className="relative">
                      <button
                        type="button"
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-cyan-950/40 border-cyan-400/80 shadow-md shadow-cyan-500/20 translate-x-1"
                            : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected ? "bg-cyan-400 text-black shadow-sm" : "bg-white/[0.05] text-neutral-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono text-cyan-400 font-semibold">
                                L0{idx + 1}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-white font-sans tracking-wide">
                                {tier.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-neutral-400 line-clamp-1">
                              {tier.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] font-mono transition-opacity ${isSelected ? "text-cyan-300 opacity-100" : "opacity-0"}`}>
                            ACTIVE LAYER
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSelected ? "text-cyan-400 translate-x-0.5" : "text-neutral-600"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Animated Data Bus Connection Vector Between Layers */}
                      {!isLast && (
                        <div className="h-2.5 flex items-center justify-center relative overflow-hidden">
                          <div className="w-0.5 h-full bg-white/[0.12] relative">
                            <div
                              className="absolute inset-0 bg-cyan-400"
                              style={{
                                animation: `dataPulse 2.4s ease-in-out infinite ${idx * 0.35}s`
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Active Layer Architectural Deep-Dive Inspector (Span 5) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-[#070b16] border border-white/[0.12] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              {/* Inspector Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs text-neutral-300 tracking-wider">
                    EXPLORER // {activeTier.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                  {activeTier.category}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                {activeTier.tagline}
              </p>

              {/* Core Capabilities List (Section 09 verbatim) */}
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  Core Architectural Capabilities
                </span>
                <div className="space-y-2">
                  {activeTier.items.map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center gap-2.5 text-xs text-neutral-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {activeTier.specs.map((sp) => (
                  <div key={sp.label} className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="block text-[9px] font-mono uppercase text-neutral-500">
                      {sp.label}
                    </span>
                    <span className="text-[11px] font-semibold text-white mt-0.5 block truncate">
                      {sp.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Pelajari spesifikasi mendalam
                </span>
                <Link
                  href={activeTier.route}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Explore {activeTier.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
