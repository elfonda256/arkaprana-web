"use client";

import React from "react";
import Link from "next/link";
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  ChevronRight
} from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
};

const solutionTaglines: Record<string, { tagline: string; specs: string[] }> = {
  network: {
    tagline: "Connect everything. Instantly. Securely.",
    specs: ["Sub-millisecond core routing", "SD-WAN & MPLS integration", "Carrier-neutral optical backbone", "Zero-Trust Network Access (ZTNA)"]
  },
  infra: {
    tagline: "Compute where it matters. Resilient & scalable.",
    specs: ["Tier-3+ modular datacenter topology", "Enterprise compute & NVMe storage", "Automated multi-region failover", "Direct optical interconnects"]
  },
  cloud: {
    tagline: "Sovereign on-premise cloud & agile hybrid clusters.",
    specs: ["Strict data residency control", "Distributed object storage vaults", "High-performance virtualization", "Automated multi-cloud failover"]
  },
  secure: {
    tagline: "Absolute perimeter defense & zero-trust resilience.",
    specs: ["Zero-Trust continuous verification", "Automated SOC & threat hunting", "Hardware Security Module (HSM)", "ISO 27001 & BSSN alignment"]
  },
  managed: {
    tagline: "Autonomous reliability and 24/7 dedicated engineering.",
    specs: ["99.99% guaranteed SLA uptime", "Proactive telemetry & observability", "Rapid incident response matrix", "Lifecycle capacity optimization"]
  },
  ai: {
    tagline: "Private intelligence built for critical enterprise workflows.",
    specs: ["On-premise LLM & RAG pipelines", "Air-gapped deployment option", "Role-based contextual synthesis", "Zero data leakage guarantee"]
  },
  integration: {
    tagline: "Turnkey architecture, procurement, & seamless systems delivery.",
    specs: ["Turnkey enterprise IT blueprints", "Vendor-agnostic hardware procurement", "Full commissioning & acceptance tests", "Executive & admin knowledge transfer"]
  }
};

export default function SolutionsSection() {
  const flagshipSolutions = SOLUTIONS.filter((s) => s.id === "network" || s.id === "infra");
  const secondarySolutions = SOLUTIONS.filter((s) => s.id !== "network" && s.id !== "infra");

  return (
    <section id="solutions" className="py-28 md:py-36 bg-[#030712] relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Productized Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Engineered as products.
            <span className="block text-neutral-400 font-normal">
              Integrated as one sovereign platform.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-2">
            Setiap kemampuan ARKAPRANA dibangun dengan standar arsitektur industri tingkat tinggi—menghilangkan kompleksitas vendor yang terfragmentasi.
          </p>
        </div>

        {/* Flagship Solutions (Wide 2-Column Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {flagshipSolutions.map((sol, index) => {
            const Icon = iconMap[sol.iconName] || Network;
            const meta = solutionTaglines[sol.id] || { tagline: sol.tagline, specs: sol.capabilities };

            return (
              <div
                key={sol.id}
                className="relative rounded-2xl bg-[#060a14] border border-white/[0.1] hover:border-white/[0.22] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Top Metadata Bar */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                    <span className="text-2xl font-mono font-semibold text-neutral-400 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {sol.category}
                    </span>
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {sol.name}
                  </h3>
                  <p className="text-base text-cyan-300 font-medium mb-4">
                    “{meta.tagline}”
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
                    {sol.description}
                  </p>

                  {/* Engineering Specifications */}
                  <div className="space-y-2.5 pt-6 border-t border-white/[0.06] mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                      Architectural Specs:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {meta.specs.map((spec) => (
                        <div key={spec} className="flex items-center space-x-2 text-neutral-300">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                          <span className="text-xs leading-snug">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white hover:text-cyan-300 group-hover:translate-x-1 transition-all gap-1.5"
                  >
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </Link>
                  <span className="text-[10px] font-mono text-neutral-400">{sol.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Solutions Matrix (3 Columns, Clean Modern Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondarySolutions.map((sol, index) => {
            const Icon = iconMap[sol.iconName] || Server;
            const meta = solutionTaglines[sol.id] || { tagline: sol.tagline, specs: sol.capabilities };

            return (
              <div
                key={sol.id}
                className="relative rounded-xl bg-[#060a14] border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <span className="text-lg font-mono font-medium text-neutral-400 group-hover:text-cyan-400 transition-colors">
                      0{index + 3}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1.5 group-hover:text-cyan-200 transition-colors">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mb-3">
                    {meta.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  <div className="space-y-1.5 pt-4 border-t border-white/[0.04] mb-6">
                    {meta.specs.slice(0, 3).map((spec) => (
                      <div key={spec} className="flex items-start text-[11.5px] text-neutral-400 space-x-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center text-xs font-medium text-neutral-300 hover:text-white transition-colors gap-1"
                  >
                    <span>View Technical Details</span>
                    <ArrowRight className="w-3 h-3 text-cyan-400" />
                  </Link>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {sol.badge.split(" ")[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
