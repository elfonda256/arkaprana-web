"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  PenTool,
  Hammer,
  Workflow,
  ShieldCheck,
  Cpu,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface TimelineStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    name: "DISCOVER",
    tagline: "Comprehensive Field & Infrastructure Audit",
    description: "Audit mendalam atas jalur kabel eksisting, pemetaan interferensi spektrum frekuensi radio, perhitungan beban daya listrik, dan audit kepatuhan regulasi data.",
    deliverable: "Comprehensive Site Audit & Gap Analysis Report",
    icon: Search
  },
  {
    step: "02",
    name: "DESIGN",
    tagline: "Architectural Blueprinting & Simulation",
    description: "Perancangan topologi redundan multi-tier, simulasi CFD sirkulasi pendingin ruang server, skema pengalamatan IP, dan penetapan spesifikasi perangkat keras.",
    deliverable: "Engineering CAD Blueprint & Sizing Matrix",
    icon: PenTool
  },
  {
    step: "03",
    name: "BUILD",
    tagline: "Precision Physical & MEP Construction",
    description: "Instalasi raised floor, penarikan kabel serat optik berstandar TIA-942, instalasi sistem UPS dual-feed, proteksi kebakaran gas Novec 1230, dan rack server.",
    deliverable: "Physical Infrastructure Commissioning & Fluke Test",
    icon: Hammer
  },
  {
    step: "04",
    name: "INTEGRATE",
    tagline: "Multi-Vendor Systems Harmonisation",
    description: "Penyelarasan perangkat keras lintas produsen, orkestrasi middleware API, konfigurasi protokol routing BGP/SD-WAN, dan sinkronisasi database lakehouse.",
    deliverable: "Multi-System Interoperability Sign-Off",
    icon: Workflow
  },
  {
    step: "05",
    name: "SECURE",
    tagline: "Zero-Trust Perimeter & HSM Hardening",
    description: "Penggelaran kebijakan least-privilege ZTNA, isolasi segmentasi mikro VLAN, pengamanan brankas kriptografi hardware HSM, dan penetration testing menyeluruh.",
    deliverable: "Zero-Trust Enforcement & Vulnerability Sign-Off",
    icon: ShieldCheck
  },
  {
    step: "06",
    name: "MANAGE",
    tagline: "24/7 Dedicated NOC/SOC Observability",
    description: "Pengawasan telemetri waktu nyata tanpa henti oleh tim insinyur bersertifikasi dengan jaminan SLA ketersediaan 99.99% dan protokol mitigasi cepat.",
    deliverable: "Live NOC Portal Access & Monthly SLA Ledger",
    icon: Cpu
  },
  {
    step: "07",
    name: "OPTIMIZE",
    tagline: "Continuous Tuning & Cognitive Evolution",
    description: "Evaluasi berkala atas efisiensi termal data center (PUE), perencanaan kapasitas bandwidth masa depan, dan penyempurnaan alur kerja Private AI internal.",
    deliverable: "Quarterly Strategic Architecture Roadmap",
    icon: TrendingUp
  }
];

export default function EngineeringApproachSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = TIMELINE_STEPS[activeStepIndex];

  return (
    <section id="engineering" className="py-28 md:py-36 bg-[#030712] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Section 18 verbatim) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Engineering Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
            Engineered for the Real World.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl font-normal">
            Metodologi rekayasa 7 tahap yang teruji untuk memastikan setiap proyek teknologi berjalan dari asesmen lapangan yang presisi hingga pengoperasian otonom tanpa henti.
          </p>
        </div>

        {/* Horizontal Interactive Timeline on Desktop / Vertical on Mobile */}
        <div className="mb-12">
          
          {/* Step Pill Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {TIMELINE_STEPS.map((s, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={s.name}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? "bg-white/[0.1] border-cyan-400/80 shadow-lg shadow-cyan-500/10"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">
                      PHASE {s.step}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </div>
                  <div className="text-xs font-bold text-white tracking-wider">
                    {s.name}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Active Phase Deep-Dive Card */}
        <div className="rounded-3xl bg-[#070b16] border border-white/[0.12] p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
                  STAGE 0{activeStepIndex + 1} OF 07
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {activeStep.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white font-sans tracking-tight">
                {activeStep.name} • {activeStep.tagline}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal pt-1">
                {activeStep.description}
              </p>

              <div className="pt-4 flex items-center gap-2.5 text-xs text-cyan-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Primary Deliverable: {activeStep.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-4 text-cyan-400">
                <activeStep.icon className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                Engineering Standard
              </span>
              <span className="text-sm font-semibold text-white">
                ISO 27001 &amp; TIA-942 Aligned
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
