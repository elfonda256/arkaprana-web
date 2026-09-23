"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Network, Sparkles, Terminal, ChevronRight } from "lucide-react";
import NetworkTopologyCanvas from "@/components/canvas/NetworkTopologyCanvas";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"infra" | "mesh" | "ai">("infra");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030712]">
      {/* Calm Interactive Network Topology Canvas Background */}
      <NetworkTopologyCanvas />

      {/* Subtle grid and ambient vignette */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Subtle edge fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Typography & Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Subtle Minimalist Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-neutral-300 text-[11px] font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Technology Infrastructure • Cloud • Private AI</span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] font-sans">
                BUILD.
                <span className="block text-white/90">CONNECT.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  INTELLIGENCE.
                </span>
              </h1>
            </div>

            {/* Sharp Subheadline */}
            <p className="text-base sm:text-lg text-neutral-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              ARKAPRANA membangun fondasi teknologi terpadu yang menghubungkan infrastruktur fisik, jaringan berkecepatan tinggi, keamanan siber zero-trust, cloud sovereign, dan kecerdasan buatan untuk organisasi berkinerja tinggi.
            </p>

            {/* Clean Apple/Linear Style Dual Pill CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-[0.98] group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-wide text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
              >
                <span>Initiate Consultation</span>
              </Link>
            </div>

            {/* Quiet Architecture Metrics */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Foundation</div>
                <div className="text-sm font-semibold text-white mt-0.5">Mission Critical</div>
                <div className="text-[11px] text-neutral-400">Tier-3+ Datacenter & Fiber</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Defense</div>
                <div className="text-sm font-semibold text-white mt-0.5">Zero-Trust</div>
                <div className="text-[11px] text-neutral-400">End-to-End Encryption</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Cognition</div>
                <div className="text-sm font-semibold text-white mt-0.5">Private AI</div>
                <div className="text-[11px] text-neutral-400">On-Premise & Sovereign</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Digital Twin / Inspector (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle ambient back-glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-2xl blur-xl pointer-events-none" />

              {/* Main Architectural Hardware Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#070b16] border border-white/[0.1] shadow-2xl p-4 sm:p-5">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-[11px] font-mono tracking-wider text-neutral-300">
                      ARKAPRANA ARCHITECTURE MATRIX
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 font-mono text-[10px] text-neutral-400">
                    <span className="text-cyan-400">SYS::ACTIVE</span>
                  </div>
                </div>

                {/* Layer Selector Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-white/[0.03] rounded-lg border border-white/[0.06] mb-3.5 text-center font-mono text-[11px]">
                  <button
                    onClick={() => setActiveTab("infra")}
                    className={`py-1.5 px-2 rounded-md transition-all ${
                      activeTab === "infra"
                        ? "bg-white/[0.1] text-white font-medium border border-white/[0.12]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    01 Infra
                  </button>
                  <button
                    onClick={() => setActiveTab("mesh")}
                    className={`py-1.5 px-2 rounded-md transition-all ${
                      activeTab === "mesh"
                        ? "bg-white/[0.1] text-white font-medium border border-white/[0.12]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    02 Network
                  </button>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`py-1.5 px-2 rounded-md transition-all ${
                      activeTab === "ai"
                        ? "bg-white/[0.1] text-white font-medium border border-white/[0.12]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    03 Sovereign AI
                  </button>
                </div>

                {/* Cinematic Visual Stage */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-white/[0.08] mb-3.5 group bg-black/40">
                  <Image
                    src={
                      activeTab === "infra"
                        ? "/images/datacenter.jpg"
                        : activeTab === "mesh"
                        ? "/images/cybersecurity.jpg"
                        : "/images/ai-core.jpg"
                    }
                    alt="ARKAPRANA Enterprise Architecture"
                    fill
                    priority
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-transparent to-transparent" />

                  {/* Dynamic Floating Telemetry Status */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#050914]/85 backdrop-blur-md border border-white/[0.1] flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2.5">
                      {activeTab === "infra" && <Cpu className="w-4 h-4 text-cyan-400" />}
                      {activeTab === "mesh" && <Network className="w-4 h-4 text-cyan-400" />}
                      {activeTab === "ai" && <Sparkles className="w-4 h-4 text-cyan-400" />}
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase font-mono">
                          {activeTab === "infra"
                            ? "Compute & Facility Tier"
                            : activeTab === "mesh"
                            ? "Encrypted Mesh Backbone"
                            : "Private Neural Ingestion"}
                        </div>
                        <div className="font-medium text-white text-xs">
                          {activeTab === "infra"
                            ? "Tier-3 Datacenter & Micro-Nodes"
                            : activeTab === "mesh"
                            ? "Zero-Trust Software Defined WAN"
                            : "Enterprise LLM / RAG Engine"}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-cyan-400 text-[11px] bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                      {activeTab === "infra" ? "99.999% SLA" : activeTab === "mesh" ? "0.4ms Latency" : "Air-Gapped"}
                    </span>
                  </div>
                </div>

                {/* Subsystem Telemetry Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="text-[11px] text-neutral-300">Security Gate</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">Zero-Trust</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="text-[11px] text-neutral-300">Orchestration</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-300">Autonomous</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
