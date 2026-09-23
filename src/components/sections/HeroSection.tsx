"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Network,
  Cloud,
  Lock,
  Database,
  Terminal,
  Activity,
  ChevronRight,
} from "lucide-react";
import NetworkTopologyCanvas from "@/components/canvas/NetworkTopologyCanvas";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"topology" | "cloud" | "ai">("topology");

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#030712]">
      {/* Calm Abstract Digital Infrastructure Canvas Background */}
      <NetworkTopologyCanvas />

      {/* Subtle grid and ambient vignette */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Subtle edge fades for seamless transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Brand Typography & Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Minimalist Descriptor Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-neutral-300 text-[11px] font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Technology &amp; Intelligent Solutions</span>
            </div>

            {/* Monumental Headline: BUILD. CONNECT. INTELLIGENCE. */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.94] font-sans">
                BUILD.
                <span className="block text-white/90">CONNECT.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  INTELLIGENCE.
                </span>
              </h1>
            </div>

            {/* Subheadline (Section 04 verbatim) */}
            <p className="text-base sm:text-xl text-neutral-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Technology infrastructure and intelligent solutions for organizations building what comes next.
            </p>

            {/* Microcopy (Section 04 verbatim) */}
            <p className="text-xs sm:text-sm text-cyan-300/90 font-mono tracking-wide max-w-2xl mx-auto lg:mx-0">
              From infrastructure and connectivity to AI and intelligent automation.
            </p>

            {/* Dual CTAs (Section 04 verbatim) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-100 btn-primary-interaction group"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 text-black cta-arrow" />
              </Link>

              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-medium tracking-wide text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] btn-secondary-interaction group"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white cta-arrow" />
              </Link>
            </div>

            {/* Quiet Credibility Architecture Indicators */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Infrastructure</div>
                <div className="text-sm font-semibold text-white mt-0.5">Mission Critical</div>
                <div className="text-[11px] text-neutral-400">Datacenter &amp; Optical</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Security</div>
                <div className="text-sm font-semibold text-white mt-0.5">Zero-Trust</div>
                <div className="text-[11px] text-neutral-400">End-to-End Defense</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Intelligence</div>
                <div className="text-sm font-semibold text-white mt-0.5">Private AI</div>
                <div className="text-[11px] text-neutral-400">On-Premise &amp; RAG</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural System Visualization (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle backglow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-2xl blur-xl pointer-events-none" />

              {/* Hardware Console Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#070b16] border border-white/[0.1] shadow-2xl p-5">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="font-mono text-[11px] text-neutral-300 tracking-wider">
                      ARKAPRANA CORE TOPOLOGY
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-[10px] text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                {/* Tab Controls for System Inspection */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/[0.03] rounded-lg border border-white/[0.06] mb-5">
                  <button
                    onClick={() => setActiveTab("topology")}
                    className={`py-1.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "topology"
                        ? "bg-white/[0.1] text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    01. Network
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`py-1.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "cloud"
                        ? "bg-white/[0.1] text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    02. Cloud &amp; Sec
                  </button>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`py-1.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "ai"
                        ? "bg-white/[0.1] text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    03. Private AI
                  </button>
                </div>

                {/* Dynamic Content Panel */}
                <div className="min-h-[220px] flex flex-col justify-between">
                  {activeTab === "topology" && (
                    <div className="space-y-3.5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold text-white">Backbone Fiber &amp; Core Routing</div>
                          <div className="text-[11px] text-neutral-400 mt-0.5">Carrier-Neutral Optical Transit</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                          &lt; 1ms JITTER
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-neutral-400">SD-WAN Mesh Nodes</span>
                          <span className="text-white">Active (Multi-Zone)</span>
                        </div>
                        <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[94%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-400">
                          <span>Bandwidth Optimization: 99.8%</span>
                          <span>Zero Packet Drop</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-neutral-400 block text-[9px] uppercase">Routing Protocol</span>
                          <span className="text-neutral-200">BGP4 / MPLS / OSPF</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-neutral-400 block text-[9px] uppercase">Telemetry</span>
                          <span className="text-emerald-400">Continuous 24/7</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "cloud" && (
                    <div className="space-y-3.5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold text-white">Sovereign Cloud &amp; Zero-Trust</div>
                          <div className="text-[11px] text-neutral-400 mt-0.5">Private Cluster &amp; Air-Gapped Vaults</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-blue-300">
                          ISO 27001 ALIGNED
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-neutral-400">Zero-Trust Continuous Verification</span>
                          <span className="text-white">Enforced</span>
                        </div>
                        <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[100%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-400">
                          <span>Perimeter: Micro-Segmented</span>
                          <span>Mutual TLS v1.3</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-neutral-400 block text-[9px] uppercase">Data Sovereignty</span>
                          <span className="text-neutral-200">100% Indonesian On-Premise</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-neutral-400 block text-[9px] uppercase">Encryption</span>
                          <span className="text-cyan-400">AES-256 / HSM Vault</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-3.5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold text-white">ARKAPRANA AI Cognitive Pipeline</div>
                          <div className="text-[11px] text-neutral-400 mt-0.5">Private RAG &amp; Autonomous Agents</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                          ZERO DATA LEAK
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-neutral-400">Enterprise Vector Index</span>
                          <span className="text-cyan-300">Live Ingestion</span>
                        </div>
                        <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-400 via-sky-300 to-white h-full w-[88%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-400">
                          <span>Query Latency: &lt; 20ms</span>
                          <span>Context Size: 128k Tokens</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-neutral-400 block text-[9px] uppercase">Model Serving</span>
                          <span className="text-neutral-200">vLLM / TensorRT-LLM</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-neutral-400 block text-[9px] uppercase">Security Level</span>
                          <span className="text-emerald-400">Strictly Isolated</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Console Footer */}
                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="font-mono">INFRASTRUCTURE → INTELLIGENCE</span>
                  <Link
                    href="/solutions"
                    className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                  >
                    View Specs <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
