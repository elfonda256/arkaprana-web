"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  HardDrive,
  Activity,
  BrainCircuit,
  Zap,
  Sparkles,
  RefreshCw,
  SlidersHorizontal
} from "lucide-react";
import { ENVIRONMENT_BUILDER_MODULES, EnvModule } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  network: Network,
  server: Server,
  storage: Database,
  cloud: Cloud,
  security: ShieldCheck,
  backup: HardDrive,
  monitoring: Activity,
  ai: BrainCircuit,
  automation: Zap
};

export default function EnvironmentBuilderSection() {
  // Default selected modules: NETWORK, SERVER, BACKUP, SECURITY, AI (matching prompt example)
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "network",
    "server",
    "backup",
    "security",
    "ai"
  ]);

  const toggleModule = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev; // Keep at least one
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const selectAll = () => {
    setSelectedIds(ENVIRONMENT_BUILDER_MODULES.map((m) => m.id));
  };

  const resetDefault = () => {
    setSelectedIds(["network", "server", "backup", "security", "ai"]);
  };

  const selectedModules = ENVIRONMENT_BUILDER_MODULES.filter((m) =>
    selectedIds.includes(m.id)
  );

  const formulaString = selectedModules.map((m) => m.name).join(" + ");
  const contactQueryParam = encodeURIComponent(
    selectedModules.map((m) => m.name).join(", ")
  );

  return (
    <section id="environment-builder" className="py-28 md:py-36 bg-[#02050E] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-cyan-600/10 via-blue-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Section 12 verbatim) */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Interactive Architecture Tool</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight font-display">
            Build your technology environment.
          </h2>

          <p className="text-neutral-300 text-base sm:text-xl leading-relaxed pt-1 font-normal">
            Pilih modul infrastruktur dan kecerdasan yang dibutuhkan organisasi Anda. Sistem visual kami akan menyusun cetak biru arsitektur terintegrasi secara real-time.
          </p>
        </div>

        {/* Builder Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: 9 Module Selector Grid (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Select Components ({selectedIds.length}/9)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Select All
                </button>
                <span className="text-neutral-600">•</span>
                <button
                  type="button"
                  onClick={resetDefault}
                  className="text-[11px] font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {ENVIRONMENT_BUILDER_MODULES.map((mod) => {
                const isSelected = selectedIds.includes(mod.id);
                const Icon = iconMap[mod.id] || Server;

                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? "bg-white/[0.06] border-cyan-400/50 shadow-md ring-1 ring-cyan-400/20"
                        : "bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.06] hover:border-white/[0.12]"
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/40"
                            : "bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white font-sans">
                            {mod.name}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {mod.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                          {mod.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all shrink-0 ${
                        isSelected
                          ? "bg-cyan-400 border-cyan-400 text-black"
                          : "border-white/[0.2] bg-white/[0.02]"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Architecture Preview & Blueprint (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#060A14] border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Header Tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  Dynamic Visual Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  ARKAPRANA TECHNOLOGY ENVIRONMENT
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono text-cyan-300 self-start sm:self-auto">
                {selectedModules.length} Subsystems Active
              </div>
            </div>

            {/* Formula Progression Box (Section 12 verbatim) */}
            {/* NETWORK + SERVER + BACKUP + SECURITY + AI ↓ ARKAPRANA TECHNOLOGY ENVIRONMENT */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                Selected Architecture Formula
              </span>
              <div className="text-xs sm:text-sm font-mono font-bold text-cyan-200 tracking-wide break-words">
                {formulaString}
              </div>
              <div className="text-neutral-500 text-sm font-mono">↓</div>
              <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                ARKAPRANA TECHNOLOGY ENVIRONMENT
              </div>
            </div>

            {/* Visual Node Matrix Topology with Animated Connection Vector */}
            <div className="py-6 px-4 rounded-2xl bg-[#030610] border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Interconnected Fabric Topology
                </span>
                <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live Dynamic Mesh
                </span>
              </div>

              {/* Sequential Flow Progression Bar */}
              <div className="mb-4 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max text-[11px] font-mono">
                  {selectedModules.map((mod, idx) => (
                    <React.Fragment key={mod.id}>
                      <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {mod.name}
                      </span>
                      {idx < selectedModules.length - 1 && (
                        <div className="flex items-center text-cyan-400 font-bold">
                          <span className="inline-block animate-pulse">→</span>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Grid of active nodes with fade + scale transition */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedModules.map((mod, idx) => {
                  const Icon = iconMap[mod.id] || Server;
                  return (
                    <div
                      key={mod.id}
                      className="p-3.5 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-cyan-400/40 flex flex-col justify-between space-y-2 group hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10"
                      style={{
                        animation: `logoReveal 350ms cubic-bezier(0.16, 1, 0.3, 1) ${idx * 40}ms forwards`
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                          {mod.badge}
                        </span>
                        <Icon className="w-4 h-4 text-neutral-300 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-sans">
                          {mod.name}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono mt-0.5 line-clamp-1">
                          {mod.spec}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interconnect summary with animated signal */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Fabric: Spine-Leaf / Zero-Trust Mesh</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Validated Dynamic Architecture
                </span>
              </div>
            </div>

            {/* Key Outcomes & Integrated Benefits */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                Environment Architecture Benefits:
              </span>
              <div className="space-y-2">
                {selectedModules.slice(0, 4).map((mod) => (
                  <div key={mod.id} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">{mod.name}:</strong> {mod.benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 12 Closing Callout & CTA */}
            {/* "Need help designing this environment? TALK TO AN ENGINEER →" */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">
                  Need help designing this environment?
                </div>
                <div className="text-xs text-neutral-400">
                  Konsultasikan spesifikasi teknis dan estimasi kapasitas bersama Principal Engineer.
                </div>
              </div>

              <Link
                href={`/contact?blueprint=${contactQueryParam}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-100 btn-primary-interaction group shrink-0"
              >
                <span>Talk to an Engineer</span>
                <ArrowRight className="w-3.5 h-3.5 text-black cta-arrow" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
