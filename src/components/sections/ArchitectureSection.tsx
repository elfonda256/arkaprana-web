"use client";

import React, { useState } from "react";
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
  Activity
} from "lucide-react";

interface LayerData {
  level: number;
  name: string;
  category: string;
  summary: string;
  technologies: string[];
  capabilities: string[];
  useCase: string;
  metric: string;
}

const STACK_LAYERS: LayerData[] = [
  {
    level: 6,
    name: "AI & INTELLIGENCE",
    category: "Cognitive Application Tier",
    summary: "Model bahasa internal (LLM), vector reasoning, semantic search, dan otomasi otonom yang berjalan secara terisolasi tanpa risiko kebocoran data.",
    technologies: ["vLLM / TensorRT", "Chroma / Milvus", "Custom RAG Pipelines", "HuggingFace Sovereignty"],
    capabilities: ["Autonomous Document Synthesis", "Internal Enterprise Q&A", "Predictive Event Triggering"],
    useCase: "Analisis ribuan dokumen regulasi, pelaporan otomatis, dan asisten cerdas bagi tim internal.",
    metric: "< 15ms Ingestion Latency"
  },
  {
    level: 5,
    name: "DATA & ANALYTICS",
    category: "Data Orchestration Tier",
    summary: "Arsitektur data lakehouse modern yang mengagregasikan data transaksional, log perangkat, dan sensor IoT secara real-time.",
    technologies: ["Apache Kafka", "PostgreSQL / ClickHouse", "dbt / Data Pipelines", "Delta Lake"],
    capabilities: ["Sub-second Query Streaming", "Unified Metadata Catalog", "Automated Data Governance"],
    useCase: "Konsolidasi data operasional dari puluhan cabang ke dalam satu dashboard analitik sentral.",
    metric: "Millions of Events/sec"
  },
  {
    level: 4,
    name: "SECURITY & ZERO-TRUST",
    category: "Cybersecurity & Governance Tier",
    summary: "Pertahanan siber proaktif berbasis Zero-Trust architecture, continuous authentication, enkripsi end-to-end, dan pemantauan SOC 24/7.",
    technologies: ["ZTNA Protocols", "EDR / XDR Sensors", "Hardware Security Module (HSM)", "ISO 27001 Controls"],
    capabilities: ["Continuous Identity Verification", "Air-Gapped Vault Controls", "Real-Time Anomaly Hunting"],
    useCase: "Mencegah serangan ransomware dan memastikan kedaulatan data finansial dan identitas publik.",
    metric: "Zero-Trust Enforcement"
  },
  {
    level: 3,
    name: "CLOUD & EDGE COMPUTE",
    category: "Virtualization & Compute Tier",
    summary: "Infrastruktur cloud privat, hybrid cloud, dan kluster edge compute modular dengan kemampuan skalabilitas dinamis dan high-availability failover.",
    technologies: ["Kubernetes (K8s)", "Proxmox / VMware", "OpenStack Private Cloud", "Micro-Edge Nodes"],
    capabilities: ["Automated Container Scaling", "Multi-Zone Geo Redundancy", "Micro-Workload Distribution"],
    useCase: "Penyebaran beban kerja aplikasi kritis ke edge lokal tanpa ketergantungan koneksi internet publik.",
    metric: "99.999% Availability"
  },
  {
    level: 2,
    name: "NETWORK & CONNECTIVITY",
    category: "Transmission & Routing Tier",
    summary: "Jaringan serat optik berkapasitas tinggi, interkoneksi SD-WAN cerdas, BGP routing independen, dan backbone komunikasi latensi rendah.",
    technologies: ["Software-Defined WAN (SD-WAN)", "MPLS / Carrier-Neutral Fiber", "100G/400G Optical Switching", "QoS Optimization"],
    capabilities: ["Sub-millisecond Edge Transit", "Dynamic Path Failover", "Encrypted Layer-2/3 Tunnels"],
    useCase: "Interkoneksi antar data center, kantor pusat, dan ratusan site operasional di berbagai pulau.",
    metric: "Sub-millisecond Latency"
  },
  {
    level: 1,
    name: "PHYSICAL INFRASTRUCTURE & HARDWARE",
    category: "Physical Foundation Tier",
    summary: "Data center berstandar Tier-3/4, pasokan daya tak terputus (UPS), sistem pendingin presisi (CRAC), dan cabling terstruktur kelas industri.",
    technologies: ["Tier-3+ Datacenter Facilities", "Precision In-Row Cooling", "Modular High-Density Racks", "Environmental Edge Sensors"],
    capabilities: ["N+1 Redundant Power Feeds", "Thermal Zone Management", "Physical Biometric Access"],
    useCase: "Menjaga kontinuitas perangkat server fisik dalam kondisi lingkungan ekstrem tanpa henti.",
    metric: "Tier-3 Rated Resilience"
  }
];

export default function ArchitectureSection() {
  const [selectedLevel, setSelectedLevel] = useState<number>(6);
  const activeLayer = STACK_LAYERS.find((l) => l.level === selectedLevel) || STACK_LAYERS[0];

  return (
    <section className="py-28 md:py-36 bg-[#030712] relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Integrated Systems Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The ARKAPRANA Stack.
            <span className="block text-neutral-400 font-normal">
              Engineered from physical layer to sovereign intelligence.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-1">
            Bukan potongan solusi lepas. Setiap lapisan dirancang saling menopang secara vertikal—menghasilkan stabilitas mutlak dan performa optimal.
          </p>
        </div>

        {/* Interactive Stack Inspector Grid (Split 6/6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stack Layers Interactive Selector (Span 6) */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-neutral-400 uppercase tracking-widest px-2">
              <span>Vertical Architecture Hierarchy</span>
              <span>Select Layer to Inspect</span>
            </div>

            {STACK_LAYERS.map((layer) => {
              const isSelected = layer.level === selectedLevel;

              return (
                <button
                  key={layer.level}
                  onClick={() => setSelectedLevel(layer.level)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#091124] border-cyan-400/50 shadow-lg shadow-cyan-950/40"
                      : "bg-[#050914] border-white/[0.07] hover:border-white/[0.18] hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-md transition-colors ${
                        isSelected
                          ? "bg-cyan-400 text-black font-bold"
                          : "bg-white/[0.05] text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      L0{layer.level}
                    </span>

                    <div>
                      <div
                        className={`text-sm font-semibold tracking-wide transition-colors ${
                          isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                        }`}
                      >
                        {layer.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {layer.category}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center space-x-3 text-right">
                    <span className="text-[10px] font-mono text-neutral-400">
                      {layer.metric}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? "bg-cyan-400" : "bg-neutral-600 group-hover:bg-neutral-400"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Deep-Dive Inspector Panel (Span 6) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#060a14] border border-white/[0.12] shadow-2xl relative overflow-hidden">
              
              {/* Subtle Ambient Backing */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Inspector Top Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Telemetry Inspector // Layer 0{activeLayer.level}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                  {activeLayer.metric}
                </span>
              </div>

              {/* Layer Title & Category */}
              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {activeLayer.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeLayer.name}
                </h3>
              </div>

              {/* Deep Summary */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                {activeLayer.summary}
              </p>

              {/* Core Technologies Badges */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  Key Architectural Capabilities:
                </span>
                <div className="space-y-2">
                  {activeLayer.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center space-x-2.5 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Use Case Box */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  Mission-Critical Use Case:
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {activeLayer.useCase}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
