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
import LivingOutlineHero from "@/components/decorative/LivingOutlineHero";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"topology" | "cloud" | "ai">("topology");

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Calm Abstract Digital Infrastructure Canvas Background */}
      <NetworkTopologyCanvas />

      {/* ARKAPRANA Living Outline: Large Abstract Technical Blueprint Silhouette */}
      <LivingOutlineHero />

      {/* Subtle grid and ambient vignette */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Subtle edge fades for seamless transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Refined Brand Typography & Cinematic Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Small Technical Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[11px] font-mono tracking-widest uppercase shadow-xs"
              style={{ animation: "heroEntranceFade 400ms ease-out 300ms backwards" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>BUILD. CONNECT. INTELLIGENCE.</span>
            </div>

            {/* Large Display Headline (Human, Confident, Editorial Weight 600) */}
            <h1
              className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-[var(--text-primary)] leading-[1.16] font-display"
              style={{ animation: "heroEntranceSlide 600ms cubic-bezier(0.16, 1, 0.3, 1) 500ms backwards" }}
            >
              Technology infrastructure and intelligent solutions for organizations building what comes next.
            </h1>

            {/* Supporting Paragraph */}
            <p
              className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-[1.65] font-normal"
              style={{ animation: "heroEntranceSlide 600ms cubic-bezier(0.16, 1, 0.3, 1) 700ms backwards" }}
            >
              From network infrastructure and private cloud to cybersecurity, managed IT and AI — ARKAPRANA helps organizations build technology environments that are reliable, secure and ready to grow.
            </p>

            {/* Microcopy Credibility */}
            <p
              className="text-xs text-[var(--text-muted)] font-mono tracking-wide max-w-2xl mx-auto lg:mx-0"
              style={{ animation: "heroEntranceSlide 500ms cubic-bezier(0.16, 1, 0.3, 1) 850ms backwards" }}
            >
              Engineered and maintained by senior systems practitioners in Indonesia.
            </p>

            {/* Dual CTAs */}
            <div
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              style={{ animation: "heroEntranceSlide 500ms cubic-bezier(0.16, 1, 0.3, 1) 950ms backwards" }}
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold tracking-normal bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shadow-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
              </Link>

              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-medium tracking-normal text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] btn-secondary-interaction group"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] cta-arrow" />
              </Link>
            </div>

            {/* Quiet Credibility Architecture Indicators */}
            <div
              className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-left"
              style={{ animation: "heroEntranceFade 600ms ease-out 1100ms backwards" }}
            >
              <div>
                <div className="tech-label">01 / INFRASTRUCTURE</div>
                <div className="text-sm font-medium text-[var(--text-primary)] mt-1">Mission Critical</div>
                <div className="text-xs text-[var(--text-secondary)]">Datacenter &amp; Optical</div>
              </div>
              <div>
                <div className="tech-label">02 / SECURITY</div>
                <div className="text-sm font-medium text-[var(--text-primary)] mt-1">Zero-Trust</div>
                <div className="text-xs text-[var(--text-secondary)]">End-to-End Defense</div>
              </div>
              <div>
                <div className="tech-label">03 / INTELLIGENCE</div>
                <div className="text-sm font-medium text-[var(--text-primary)] mt-1">Private AI</div>
                <div className="text-xs text-[var(--text-secondary)]">On-Premise &amp; RAG</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural System Visualization (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle backglow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[var(--accent)]/10 via-[var(--accent)]/5 to-transparent rounded-2xl blur-xl pointer-events-none" />

              {/* Hardware Console Container */}
              <div
                className="relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl p-5 transition-colors duration-300"
                style={{ animation: "heroEntranceSlide 600ms cubic-bezier(0.16, 1, 0.3, 1) 600ms backwards" }}
              >
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-mono text-[11px] text-[var(--text-primary)] tracking-wider">
                      ARKAPRANA CORE TOPOLOGY
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-[10px] text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                </div>

                {/* Tab Controls for System Inspection */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-subtle)] mb-5">
                  <button
                    onClick={() => setActiveTab("topology")}
                    className={`py-1.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "topology"
                        ? "bg-[var(--bg-card)] text-[var(--accent)] font-semibold shadow-xs"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    01. Network
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`py-1.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "cloud"
                        ? "bg-[var(--bg-card)] text-[var(--accent)] font-semibold shadow-xs"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    02. Cloud &amp; Sec
                  </button>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`py-1.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "ai"
                        ? "bg-[var(--bg-card)] text-[var(--accent)] font-semibold shadow-xs"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
                          <div className="text-xs font-semibold text-[var(--text-primary)]">Backbone Fiber &amp; Core Routing</div>
                          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Carrier-Neutral Optical Transit</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[var(--accent)] font-medium">
                          &lt; 1ms JITTER
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-[var(--text-secondary)]">SD-WAN Mesh Nodes</span>
                          <span className="text-[var(--text-primary)] font-medium">Active (Multi-Zone)</span>
                        </div>
                        <div className="w-full bg-[var(--border-subtle)] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-[var(--accent)] to-blue-600 h-full w-[94%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-[var(--text-secondary)]">
                          <span>Bandwidth Optimization: 99.8%</span>
                          <span>Zero Packet Drop</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <span className="text-[var(--text-muted)] block text-[9px] uppercase">Routing Protocol</span>
                          <span className="text-[var(--text-primary)]">BGP4 / MPLS / OSPF</span>
                        </div>
                        <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <span className="text-[var(--text-muted)] block text-[9px] uppercase">Telemetry</span>
                          <span className="text-emerald-500 font-medium">Continuous 24/7</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "cloud" && (
                    <div className="space-y-3.5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold text-[var(--text-primary)]">Sovereign Cloud &amp; Zero-Trust</div>
                          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Private Cluster &amp; Air-Gapped Vaults</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[var(--accent)] font-medium">
                          ISO 27001 ALIGNED
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-[var(--text-secondary)]">Zero-Trust Continuous Verification</span>
                          <span className="text-[var(--text-primary)] font-medium">Enforced</span>
                        </div>
                        <div className="w-full bg-[var(--border-subtle)] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-600 to-[var(--accent)] h-full w-[100%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-[var(--text-secondary)]">
                          <span>Perimeter: Micro-Segmented</span>
                          <span>Mutual TLS v1.3</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <span className="text-[var(--text-muted)] block text-[9px] uppercase">Data Sovereignty</span>
                          <span className="text-[var(--text-primary)]">100% Indonesian On-Premise</span>
                        </div>
                        <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <span className="text-[var(--text-muted)] block text-[9px] uppercase">Encryption</span>
                          <span className="text-[var(--accent)] font-medium">AES-256 / HSM Vault</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-3.5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold text-[var(--text-primary)]">ARKAPRANA AI Cognitive Pipeline</div>
                          <div className="text-[11px] text-[var(--text-secondary)] mt-0.5">Private RAG &amp; Autonomous Agents</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[var(--accent)] font-medium">
                          ZERO DATA LEAK
                        </span>
                      </div>

                      <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono">
                          <span className="text-[var(--text-secondary)]">Enterprise Vector Index</span>
                          <span className="text-[var(--accent)] font-medium">Live Ingestion</span>
                        </div>
                        <div className="w-full bg-[var(--border-subtle)] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-[var(--accent)] via-blue-500 to-indigo-500 h-full w-[88%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-[var(--text-secondary)]">
                          <span>Query Latency: &lt; 20ms</span>
                          <span>Context Size: 128k Tokens</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <span className="text-[var(--text-muted)] block text-[9px] uppercase">Model Serving</span>
                          <span className="text-[var(--text-primary)]">vLLM / TensorRT-LLM</span>
                        </div>
                        <div className="p-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <span className="text-[var(--text-muted)] block text-[9px] uppercase">Security Level</span>
                          <span className="text-emerald-500 font-medium">Strictly Isolated</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Console Footer */}
                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                  <span className="font-mono">INFRASTRUCTURE → INTELLIGENCE</span>
                  <Link
                    href="/solutions"
                    className="text-[var(--accent)] hover:underline font-medium inline-flex items-center gap-1"
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
