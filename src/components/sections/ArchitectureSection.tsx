"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Database,
  Shield,
  CloudCog,
  Share2,
  Boxes,
  Cpu,
  Layers,
  CheckCircle,
  Terminal,
  Activity,
  ArrowRight
} from "lucide-react";

interface StackLayer {
  level: number;
  verb: string;
  name: string;
  category: string;
  summary: string;
  technologies: string[];
  capabilities: string[];
  specs: { label: string; value: string }[];
  metric: string;
}

const STACK_LAYERS: StackLayer[] = [
  {
    level: 6,
    verb: "INTELLIGENCE",
    name: "AI & Cognitive Automation",
    category: "Autonomous Intelligence Tier",
    summary: "Model bahasa internal (private LLM), retrieval-augmented generation (RAG), semantic vector reasoning, dan otomasi otonom yang berjalan terisolasi di server internal organisasi.",
    technologies: ["vLLM / TensorRT-LLM", "Chroma / Milvus Vector DB", "LangChain / Custom RAG", "Sovereign Weights"],
    capabilities: ["Autonomous Document Synthesis", "Internal Enterprise Q&A", "Predictive Decision Workflows"],
    specs: [
      { label: "Deployment", value: "Air-Gapped / On-Premise" },
      { label: "Vector Latency", value: "< 15ms Query Response" },
      { label: "Context Window", value: "Up to 128k Tokens" },
      { label: "Data Leakage Risk", value: "Strict Zero (0%)" }
    ],
    metric: "< 15ms Vector Response"
  },
  {
    level: 5,
    verb: "UNDERSTAND",
    name: "Data Lakehouse & Streaming",
    category: "Data Orchestration Tier",
    summary: "Arsitektur data lakehouse modern yang mengagregasikan data transaksional, log perangkat, telemetri jaringan, dan sensor operasional secara real-time ke dalam satu metadata terpadu.",
    technologies: ["Apache Kafka", "PostgreSQL / ClickHouse", "dbt / Airflow Pipelines", "Delta Lake / Iceberg"],
    capabilities: ["Sub-second Query Streaming", "Unified Metadata Catalog", "Automated Data Governance"],
    specs: [
      { label: "Throughput", value: "Millions of Events/sec" },
      { label: "Query Engine", value: "Distributed Columnar" },
      { label: "Governance", value: "Role-Based Lineage" },
      { label: "Sync Mode", value: "Real-time CDC Streaming" }
    ],
    metric: "Millions Events/sec"
  },
  {
    level: 4,
    verb: "PROTECT",
    name: "Security & Zero-Trust Defense",
    category: "Cybersecurity & Governance Tier",
    summary: "Pertahanan siber berlapis berbasis arsitektur Zero-Trust, verifikasi identitas berkelanjutan, enkripsi end-to-end, hardware security module (HSM), dan pemantauan ancaman 24/7.",
    technologies: ["ZTNA Protocols", "EDR / XDR Sensors", "Hardware Security Module (HSM)", "ISO 27001 Controls"],
    capabilities: ["Continuous Identity Verification", "Air-Gapped Vault Controls", "Real-Time Anomaly Hunting"],
    specs: [
      { label: "Architecture", value: "Zero-Trust Perimeter" },
      { label: "Cryptographic Std", value: "AES-256-GCM / RSA-4096" },
      { label: "SOC Response", value: "< 15 Min SLA" },
      { label: "Compliance", value: "ISO 27001 & BSSN Aligned" }
    ],
    metric: "Zero-Trust Enforced"
  },
  {
    level: 3,
    verb: "RUN",
    name: "Cloud & Edge Compute",
    category: "Virtualization & Compute Tier",
    summary: "Infrastruktur cloud privat berdaulat, kluster hybrid cloud, dan node edge compute modular dengan kemampuan skalabilitas dinamis serta high-availability failover otomatis.",
    technologies: ["Kubernetes (K8s)", "Proxmox / VMware ESXi", "OpenStack Private Cloud", "Micro-Edge Clusters"],
    capabilities: ["Automated Container Scaling", "Multi-Zone Geo Redundancy", "Micro-Workload Distribution"],
    specs: [
      { label: "Availability SLA", value: "99.999% Guaranteed" },
      { label: "Jurisdiction", value: "100% Indonesian Soil" },
      { label: "Failover Time", value: "< 3 Seconds Automatic" },
      { label: "Orchestration", value: "Declarative GitOps" }
    ],
    metric: "99.999% Availability"
  },
  {
    level: 2,
    verb: "CONNECT",
    name: "Network & Optical Backbone",
    category: "Transmission & Routing Tier",
    summary: "Jaringan serat optik berkapasitas tinggi, interkoneksi SD-WAN multi-jalur, BGP routing independen, dan backbone komunikasi latensi sub-milidetik yang tahan gangguan.",
    technologies: ["Software-Defined WAN (SD-WAN)", "MPLS / Dark Fiber", "100G/400G Optical Switching", "Dynamic QoS"],
    capabilities: ["Sub-millisecond Edge Transit", "Dynamic Path Failover", "Encrypted Layer-2/3 Tunnels"],
    specs: [
      { label: "Core Transit", value: "Carrier-Neutral Optical" },
      { label: "Packet Loss Rate", value: "0.0001% Tolerance" },
      { label: "Routing Latency", value: "< 1ms Jitter" },
      { label: "Encryption", value: "Hardware Line-Rate" }
    ],
    metric: "Sub-millisecond Latency"
  },
  {
    level: 1,
    verb: "BUILD",
    name: "Physical Infrastructure & Hardware",
    category: "Physical Foundation Tier",
    summary: "Fasilitas data center berstandar Tier-3/4, pasokan daya ganda tanpa jeda (UPS), sistem pendingin presisi (CRAC), dan instalasi kabel serat optik terstruktur kelas industri.",
    technologies: ["Tier-3+ Datacenter Facilities", "Precision In-Row Cooling", "Modular High-Density Racks", "Environmental Edge Sensors"],
    capabilities: ["N+1 Redundant Power Feeds", "Thermal Zone Management", "Physical Biometric Access"],
    specs: [
      { label: "Facility Tier", value: "Tier-3+ Rated Architecture" },
      { label: "Power Redundancy", value: "Dual Feed 2N+1 UPS" },
      { label: "Fire Suppression", value: "Clean Agent Novec 1230" },
      { label: "Structural Cabling", value: "Cat6A / Single-Mode Fiber" }
    ],
    metric: "Tier-3 Rated Resilience"
  }
];

export default function ArchitectureSection() {
  const [selectedLevel, setSelectedLevel] = useState<number>(6);
  const activeLayer = STACK_LAYERS.find((l) => l.level === selectedLevel) || STACK_LAYERS[0];

  return (
    <section id="architecture" className="py-28 md:py-36 bg-[#030712] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ARKAPRANA Technology Stack</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            From physical infrastructure
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-cyan-200 to-cyan-400">
              to autonomous intelligence.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl font-normal">
            Visualisasi arsitektur berlapis yang mengintegrasikan setiap lapisan teknologi organisasi menjadi satu sistem yang kokoh dan berkesinambungan. Arahkan kursor atau pilih setiap lapisan untuk memeriksa detail teknis.
          </p>
        </div>

        {/* Interactive Stack Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The 6-Layer Architecture Stack (Span 6) */}
          <div className="lg:col-span-6 space-y-2.5">
            {STACK_LAYERS.map((layer) => {
              const isSelected = selectedLevel === layer.level;
              return (
                <div
                  key={layer.level}
                  onMouseEnter={() => setSelectedLevel(layer.level)}
                  onClick={() => setSelectedLevel(layer.level)}
                  className={`cursor-pointer rounded-xl p-4 sm:p-5 transition-all duration-200 border ${
                    isSelected
                      ? "bg-white/[0.07] border-cyan-400/60 shadow-lg shadow-cyan-500/10 translate-x-1"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                          isSelected
                            ? "bg-cyan-400 text-black font-semibold"
                            : "bg-white/[0.06] text-neutral-400"
                        }`}
                      >
                        {layer.verb}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                        {layer.name}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline-block">
                      Level 0{layer.level}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-1">
                    {layer.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Active Layer Technical Deep-Dive Inspector (Span 6) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-2xl bg-[#070b16] border border-white/[0.12] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              {/* Inspector Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs text-neutral-300 tracking-wider uppercase">
                    ACTIVE TIER: {activeLayer.verb} // LEVEL 0{activeLayer.level}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                  {activeLayer.metric}
                </span>
              </div>

              {/* Title & Category */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                  {activeLayer.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeLayer.name}
                </h3>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                {activeLayer.summary}
              </p>

              {/* Key Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {activeLayer.specs.map((sp) => (
                  <div key={sp.label} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="block text-[10px] font-mono uppercase text-neutral-400">
                      {sp.label}
                    </span>
                    <span className="text-xs font-semibold text-white mt-0.5 block">
                      {sp.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Involved */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                  Core Engineering Protocols &amp; Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] border border-white/[0.08] text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Ready to deploy this layer?
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Consult Systems Architect <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
