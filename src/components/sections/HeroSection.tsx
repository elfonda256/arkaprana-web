"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Network, Sparkles } from "lucide-react";
import NetworkTopologyCanvas from "@/components/canvas/NetworkTopologyCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030712]">
      {/* Interactive Network Topology Canvas Background */}
      <NetworkTopologyCanvas />

      {/* Cyber Grid & Radial Glow Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Subtle top & bottom edge gradients */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Headings (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Enterprise Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Technology Infrastructure • Intelligent Solutions • Enterprise IT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
              BUILD. CONNECT.{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                INTELLIGENCE.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              ARKAPRANA membangun fondasi teknologi yang menghubungkan infrastruktur, keamanan siber, cloud, data, dan kecerdasan buatan untuk organisasi yang siap berkembang.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400/50 transition-all duration-200"
              >
                <span>Discuss Your Project</span>
              </Link>
            </div>

            {/* Architectural Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">01 LAYER</div>
                <div className="text-sm font-semibold text-white">Infra & Network</div>
                <div className="text-[11px] text-slate-400">High-uptime backbone</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">02 LAYER</div>
                <div className="text-sm font-semibold text-white">Cloud & Secure</div>
                <div className="text-[11px] text-slate-400">Zero-Trust defense</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">03 LAYER</div>
                <div className="text-sm font-semibold text-white">Private AI</div>
                <div className="text-[11px] text-slate-400">Sovereign intelligence</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-70 animate-pulse-glow" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a1532] to-[#040817] border border-cyan-500/30 shadow-2xl p-4 sm:p-5">
                {/* Header bar of visual container */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>ARKAPRANA ECOSYSTEM NODE</span>
                  </div>
                  <span className="text-slate-500 text-[10px]">STATUS: OPTIMAL</span>
                </div>

                {/* Primary Cinematic Asset */}
                <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden border border-white/10 mb-4 group">
                  <Image
                    src="/images/datacenter.jpg"
                    alt="ARKAPRANA Enterprise Data Center & Server Infrastructure"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-transparent to-transparent" />
                  
                  {/* Floating Telemetry Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-medium">Core Data Center Node</span>
                    </div>
                    <span className="font-mono text-cyan-400 text-[11px]">99.99% Uptime</span>
                  </div>
                </div>

                {/* Micro Ecosystem Feed */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center space-x-2.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Cybersecurity</div>
                      <div className="font-semibold text-slate-200">Zero-Trust Active</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center space-x-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Cognitive Layer</div>
                      <div className="font-semibold text-slate-200">Private AI Ready</div>
                    </div>
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
