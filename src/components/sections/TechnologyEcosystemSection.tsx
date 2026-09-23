"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Server,
  Network,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import ArchitectureBlueprintVisual from "@/components/decorative/ArchitectureBlueprintVisual";

const TIERS = [
  {
    id: "infra",
    badge: "01",
    name: "Infrastructure & Compute",
    category: "PHYSICAL FOUNDATION",
    icon: Server,
    tagline: "Desain dan implementasi ruang server & modul data center dengan redundansi Tier-3+.",
    items: [
      "Modular DC & Precision Cooling (InRow/CRAC)",
      "High-Density Compute Clustered Architecture",
      "Tiered NVMe All-Flash Storage Fabrics",
      "Power Distribution Units & UPS N+1 / 2N Redundancy"
    ],
    ctaText: "Explore Infrastructure Architecture",
    href: "/solutions/infrastructure"
  },
  {
    id: "network",
    badge: "02",
    name: "Network & Optical Mesh",
    category: "CONNECTIVITY BACKBONE",
    icon: Network,
    tagline: "Konektivitas enterprise berlatensi ultra-rendah dengan topologi SD-WAN terdistribusi.",
    items: [
      "Campus Structured Cabling & Optical Backbone",
      "Carrier-Neutral Multi-Homed BGP Routing",
      "Enterprise Multi-Site SD-WAN Mesh Overlay",
      "High-Density Wi-Fi 6E/7 Industrial Deployment"
    ],
    ctaText: "Explore Network Solutions",
    href: "/solutions/network"
  },
  {
    id: "cloud",
    badge: "03",
    name: "Sovereign Private Cloud",
    category: "HYBRID ORCHESTRATION",
    icon: Cloud,
    tagline: "Infrastruktur cloud privat berdaulat dalam yurisdiksi Indonesia.",
    items: [
      "On-Premise OpenStack & Nutanix HCI Virtualization",
      "Zero-Egress Private Cloud Compute Fabrics",
      "Automated Multi-Region Disaster Recovery & Backup",
      "Container Orchestration (Kubernetes / OpenShift)"
    ],
    ctaText: "Explore Cloud Architecture",
    href: "/solutions/cloud"
  },
  {
    id: "security",
    badge: "04",
    name: "Cybersecurity & Zero-Trust",
    category: "DEFENSE ARCHITECTURE",
    icon: ShieldCheck,
    tagline: "Proteksi komprehensif perimeter, identitas, dan data dengan arsitektur zero-trust.",
    items: [
      "Perimeter Next-Gen Firewall (NGFW) & Microsegmentation",
      "Identity & Access Governance (IAM / MFA / PAM)",
      "Hardware Security Module (HSM) Key Enclaves",
      "24/7 Managed SOC Telemetry & Incident Response"
    ],
    ctaText: "Explore Cybersecurity Defense",
    href: "/solutions/security"
  },
  {
    id: "managed",
    badge: "05",
    name: "Managed IT & Operations",
    category: "RELIABILITY ENGINEERING",
    icon: Cpu,
    tagline: "Pengawasan performa 24/7 dengan garansi SLA ketersediaan hingga 99.99%.",
    items: [
      "Dedicated Enterprise NOC 24/7/365 Monitoring",
      "Proactive Automated Incident Detection & Self-Healing",
      "Lifecycle Hardware Maintenance & SLA Replacement",
      "Comprehensive Patch Management & Vulnerability Scanning"
    ],
    ctaText: "Explore Managed Services",
    href: "/solutions/managed-it"
  },
  {
    id: "ai",
    badge: "06",
    name: "Applied Artificial Intelligence",
    category: "COGNITIVE PIPELINE",
    icon: BrainCircuit,
    tagline: "Implementasi AI privat berbasis enterprise RAG dan agen cerdas otonom.",
    items: [
      "Private On-Premise LLM Serving (vLLM / TensorRT)",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Autonomous Workflow & Process Automation Agents",
      "Zero-Leakage Proprietary Vector Indexing"
    ],
    ctaText: "Explore AI Platform",
    href: "/solutions/ai"
  },
  {
    id: "integration",
    badge: "07",
    name: "System Integration",
    category: "TURNKEY DELIVERY",
    icon: Workflow,
    tagline: "Pengadaan, instalasi, dan komisioning multi-vendor turnkey untuk kelancaran eksekusi.",
    items: [
      "Multi-Vendor Hardware Procurement & Harmonisation",
      "Certified Field Engineering & Cable Dressing",
      "Turnkey Project Governance & Acceptance (UAT)",
      "Strict Manufacturer Warranty & Distributor SLA Backing"
    ],
    ctaText: "Explore Integration Services",
    href: "/solutions/integration"
  }
];

export default function TechnologyEcosystemSection() {
  const [selectedTierId, setSelectedTierId] = useState<string>("infra");
  const activeTier = TIERS.find((t) => t.id === selectedTierId) || TIERS[0];

  return (
    <section id="ecosystem" className="py-28 md:py-36 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Integrated Architecture Explorer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight font-display">
            Technology should work as one system.
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-1 max-w-2xl font-normal">
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
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between shadow-xs">
              <div className="flex items-center space-x-3.5">
                <BrandLogo variant="auto" size="sm" showWordmark={true} showDescriptor={false} />
              </div>
              <div className="flex items-center space-x-2 font-mono text-[10px] text-[var(--accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                <span>CENTRAL INTEGRATION CORE</span>
              </div>
            </div>

            {/* Signature Technical Bus Architecture */}
            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                <span>Unified System Bus</span>
                <span className="text-[var(--accent)] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
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
                            ? "bg-[var(--accent-soft-bg)] border-[var(--accent)] shadow-xs translate-x-1"
                            : "bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent)]/30 hover:bg-[var(--bg-card-hover)]"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-[var(--accent)] text-white shadow-xs"
                                : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                                L0{idx + 1}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-sans tracking-wide">
                                {tier.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-[var(--text-muted)] line-clamp-1">
                              {tier.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] font-mono transition-opacity ${isSelected ? "text-[var(--accent)] opacity-100 font-semibold" : "opacity-0"}`}>
                            ACTIVE LAYER
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSelected ? "text-[var(--accent)] translate-x-0.5" : "text-[var(--text-muted)]"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Connector Vector Between Layers */}
                      {!isLast && (
                        <div className="h-2.5 flex items-center justify-center relative overflow-hidden">
                          <div className="w-0.5 h-full bg-[var(--border-subtle)] relative">
                            <div
                              className="absolute inset-0 bg-[var(--accent)]"
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

          {/* Right: Active Layer Deep-Dive Inspector (Span 5) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-7 shadow-xl relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-bl-full pointer-events-none" />

              {/* Inspector Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="font-mono text-xs text-[var(--text-primary)] tracking-wider">
                    EXPLORER // {activeTier.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[var(--accent)] font-medium">
                  {activeTier.category}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                {activeTier.tagline}
              </p>

              {/* Core Capabilities List */}
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-3">
                  Core Architectural Capabilities
                </span>
                <div className="space-y-2">
                  {activeTier.items.map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inspector CTAs */}
              <div className="space-y-2.5 pt-2">
                <Link
                  href={activeTier.href}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-full text-xs font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shadow-sm"
                >
                  <span>{activeTier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] btn-secondary-interaction"
                >
                  <span>Discuss Architectural Alignment</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
