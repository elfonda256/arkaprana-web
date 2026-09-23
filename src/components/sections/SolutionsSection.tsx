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
  ChevronRight,
  CheckCircle2
} from "lucide-react";

interface ProductStory {
  id: string;
  name: string;
  headlineQuote: string;
  description: string;
  slug: string;
  capabilities: string[];
  ctaText: string;
  icon: React.ElementType;
  tag: string;
}

const PRODUCTS: ProductStory[] = [
  {
    id: "network",
    name: "ARKAPRANA NETWORK",
    headlineQuote: "Connect everything.",
    description: "Enterprise connectivity designed for reliability, visibility and scale.",
    slug: "network",
    capabilities: [
      "Enterprise Network",
      "Fiber Infrastructure",
      "Wi-Fi & Wireless Mesh",
      "Network Monitoring & Telemetry",
      "Structured Cabling"
    ],
    ctaText: "Explore Network →",
    icon: Network,
    tag: "01 • CONNECTIVITY"
  },
  {
    id: "infra",
    name: "ARKAPRANA INFRA",
    headlineQuote: "Build the foundation.",
    description: "Mission-critical physical computing infrastructure engineered for continuous zero-downtime operation.",
    slug: "infra",
    capabilities: [
      "Tier-3+ Datacenter Architecture",
      "Modular Server & SAN Storage",
      "Precision Cooling & Power (UPS)",
      "Disaster Recovery & Hot Sites",
      "Physical Security & Environmental Controls"
    ],
    ctaText: "Explore Infrastructure →",
    icon: Server,
    tag: "02 • INFRASTRUCTURE"
  },
  {
    id: "cloud",
    name: "ARKAPRANA CLOUD",
    headlineQuote: "Run what matters.",
    description: "Sovereign on-premise and hybrid cloud platforms maintaining absolute regulatory jurisdiction and low-latency throughput.",
    slug: "cloud",
    capabilities: [
      "Sovereign On-Premise Cloud",
      "Hybrid Multi-Cloud Orchestration",
      "High-IOPS Distributed Storage",
      "Edge Micro-Data Hubs",
      "Kubernetes & Container Governance"
    ],
    ctaText: "Explore Cloud →",
    icon: Cloud,
    tag: "03 • COMPUTE"
  },
  {
    id: "secure",
    name: "ARKAPRANA SECURE",
    headlineQuote: "Protect the ecosystem.",
    description: "Defensive zero-trust architecture and automated security operations engineered to withstand targeted attacks.",
    slug: "secure",
    capabilities: [
      "Zero-Trust Network Access (ZTNA)",
      "24/7 Continuous Threat Hunting & SOC",
      "Cryptographic HSM Vaults",
      "Identity & Role Micro-Segmentation",
      "ISO 27001 & BSSN Compliance Readiness"
    ],
    ctaText: "Explore Security →",
    icon: ShieldCheck,
    tag: "04 • DEFENSE"
  },
  {
    id: "managed",
    name: "ARKAPRANA MANAGED",
    headlineQuote: "Keep technology moving.",
    description: "Round-the-clock proactive engineering monitoring, telemetry automation, and rapid incident response.",
    slug: "managed",
    capabilities: [
      "24/7 Dedicated Enterprise NOC",
      "99.99% Guaranteed SLA Uptime",
      "Proactive Telemetry Observability",
      "Rapid Hardware Replacement Logistics",
      "Continuous Capacity Optimization"
    ],
    ctaText: "Explore Managed IT →",
    icon: Cpu,
    tag: "05 • RELIABILITY"
  },
  {
    id: "ai",
    name: "ARKAPRANA AI",
    headlineQuote: "Turn knowledge into intelligence.",
    description: "Private sovereign AI models, document intelligence, and cognitive workflow automation deployed entirely on your servers.",
    slug: "ai",
    capabilities: [
      "Private On-Premise LLM & RAG",
      "Enterprise Knowledge Base Engine",
      "Document Intelligence & OCR Synthesis",
      "Autonomous Decision Agents",
      "Strict Air-Gapped Data Isolation"
    ],
    ctaText: "Explore ARKAPRANA AI →",
    icon: BrainCircuit,
    tag: "06 • INTELLIGENCE"
  },
  {
    id: "integration",
    name: "ARKAPRANA INTEGRATION",
    headlineQuote: "Make systems work together.",
    description: "Turnkey enterprise technology delivery, cross-vendor hardware harmonisation, and certified systems integration.",
    slug: "integration",
    capabilities: [
      "Turnkey Enterprise Technology Blueprints",
      "Vendor-Agnostic Hardware Procurement",
      "Multi-System API Orchestration",
      "Certified Commissioning & Acceptance",
      "Principal Executive Knowledge Transfer"
    ],
    ctaText: "Explore Integration →",
    icon: Workflow,
    tag: "07 • SYNTHESIS"
  }
];

export default function SolutionsSection() {
  const primaryProducts = PRODUCTS.slice(0, 2);
  const secondaryProducts = PRODUCTS.slice(2);

  return (
    <section id="solutions" className="py-28 md:py-36 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Productized Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
            Engineered as products.
            <span className="block text-neutral-500 font-normal mt-1">
              Integrated as one ecosystem.
            </span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Bukan sekadar katalog layanan konvensional. Setiap domain teknologi ARKAPRANA dirancang dengan standar produk industri tingkat tinggi untuk memastikan kedaulatan, ketahanan, dan skalabilitas jangka panjang.
          </p>
        </div>

        {/* Flagship Product Showcase (2 Featured Products) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {primaryProducts.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="group relative rounded-2xl bg-[#F8FAFC] border border-neutral-200/80 p-8 sm:p-10 transition-all duration-300 hover:border-cyan-600/30 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200/60">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-700 font-semibold uppercase">
                      {prod.tag}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-cyan-600 transition-colors" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 font-sans">
                    {prod.name}
                  </h3>

                  <div className="text-xl sm:text-2xl font-serif italic text-neutral-800 mb-4 font-normal">
                    &ldquo;{prod.headlineQuote}&rdquo;
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                    {prod.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                      Core Capabilities
                    </span>
                    {prod.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200/60">
                  <Link
                    href={`/solutions/${prod.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 group-hover:text-cyan-700 transition-colors"
                  >
                    <span>{prod.ctaText}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining 5 Products (Clean 3-Column Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProducts.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="group relative rounded-xl bg-[#F8FAFC] border border-neutral-200/70 p-6 sm:p-7 transition-all duration-200 hover:border-cyan-600/30 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200/50">
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 font-semibold uppercase">
                      {prod.tag}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-cyan-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 mb-1">
                    {prod.name}
                  </h3>

                  <div className="text-base font-serif italic text-neutral-700 mb-3 font-normal">
                    &ldquo;{prod.headlineQuote}&rdquo;
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {prod.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-[11px] text-neutral-700">
                        <span className="w-1 h-1 rounded-full bg-cyan-600 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-200/50">
                  <Link
                    href={`/solutions/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-900 group-hover:text-cyan-700 transition-colors"
                  >
                    <span>{prod.ctaText}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
