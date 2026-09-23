"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Server, Network, Cloud, Shield, Database, BrainCircuit } from "lucide-react";

export default function WhoWeAreSection() {
  const architectureFlow = [
    { title: "Infrastructure", label: "01 FOUNDATION", icon: Server, desc: "High-density servers, modular data centers & precision power" },
    { title: "Connectivity", label: "02 NETWORK", icon: Network, desc: "Fiber optic backbones, structured cabling & enterprise Wi-Fi" },
    { title: "Cloud", label: "03 VIRTUALIZATION", icon: Cloud, desc: "Sovereign on-premise private clouds & hybrid computing" },
    { title: "Security", label: "04 DEFENSE", icon: Shield, desc: "Zero-trust network access, next-gen firewall & immutable backup" },
    { title: "Data", label: "05 STORAGE", icon: Database, desc: "Structured databases, semantic vector stores & enterprise repositories" },
    { title: "Intelligence", label: "06 COGNITIVE", icon: BrainCircuit, desc: "Private AI assistant, RAG architecture & workflow automation" }
  ];

  return (
    <section className="py-24 bg-[#040915] border-t border-b border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Technology Built for What Comes Next.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">ARKAPRANA</strong> adalah perusahaan teknologi yang menghadirkan solusi terintegrasi mulai dari infrastruktur IT, jaringan, cloud, cybersecurity, managed services hingga artificial intelligence.
              </p>
              <p>
                Berangkat dari fondasi engineering dan infrastructure, ARKAPRANA membangun teknologi yang dapat berkembang mengikuti kebutuhan bisnis. Kami bukan sekadar vendor pengadaan, melainkan mitra rekayasa jangka panjang yang memastikan keandalan, keamanan, dan kecerdasan ekosistem digital Anda.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-cyan-500/10 border border-white/15 hover:border-cyan-400 transition-all duration-200 group"
              >
                <span>Discover ARKAPRANA</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Architecture Flow Diagram (Span 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#081329] to-[#040915] border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  INTEGRATED ARCHITECTURAL MATRIX
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  L1 PHYSICAL → L6 INTELLIGENCE
                </span>
              </div>

              <div className="space-y-3">
                {architectureFlow.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-cyan-500/[0.08] border border-white/5 hover:border-cyan-500/40 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono text-cyan-400/80 font-medium">
                              {item.label}
                            </span>
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1">{item.desc}</p>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                        0{idx + 1}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>RELIABLE • SECURE • SCALABLE • CONNECTED</span>
                <span className="text-cyan-400 font-semibold">INTELLIGENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
