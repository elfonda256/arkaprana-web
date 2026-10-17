"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Server,
  Network,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Check,
  ArrowRight,
  Activity,
  Zap
} from "lucide-react";
import { ENVIRONMENT_BUILDER_MODULES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  network: Network,
  server: Server,
  storage: Server,
  cloud: Cloud,
  security: ShieldCheck,
  wifi: Network,
  cctv: ShieldCheck,
  managed: Cpu,
  ai: BrainCircuit
};

export default function EnvironmentBuilderSection() {
  // Default selected modules
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "network",
    "server",
    "cloud",
    "security",
    "managed",
    "ai"
  ]);

  const toggleModule = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectAll = () => {
    setSelectedIds(ENVIRONMENT_BUILDER_MODULES.map((m) => m.id));
  };

  const resetDefault = () => {
    setSelectedIds(["network", "server", "cloud", "security", "managed", "ai"]);
  };

  const selectedModules = ENVIRONMENT_BUILDER_MODULES.filter((m) =>
    selectedIds.includes(m.id)
  );

  const formulaString = selectedModules.map((m) => m.name).join(" + ");
  const contactQueryParam = encodeURIComponent(
    selectedModules.map((m) => m.name).join(", ")
  );

  // Real architectural metrics calculation
  const hasNetwork = selectedIds.includes("network");
  const hasServer = selectedIds.includes("server");
  const hasCloud = selectedIds.includes("cloud");
  const hasSecurity = selectedIds.includes("security");
  const hasManaged = selectedIds.includes("managed");
  const hasAi = selectedIds.includes("ai");

  // Calculated SLA
  let calculatedSla = "99.900%";
  if (hasNetwork && hasServer && hasCloud && hasSecurity && hasManaged) {
    calculatedSla = "99.995%";
  } else if (hasNetwork && hasServer && (hasCloud || hasSecurity)) {
    calculatedSla = "99.982%";
  } else if (selectedIds.length >= 4) {
    calculatedSla = "99.950%";
  }

  // Calculated MTTR Target
  const calculatedMttr = hasManaged
    ? "< 15 Menit (24/7 Managed NOC Pod)"
    : "< 1 Jam (Tier-2 SLA Escalation)";

  // Calculated Failover Mode
  const calculatedFailover = hasNetwork && hasCloud
    ? "Sub-Second Dynamic BGP / EVPN"
    : hasNetwork
    ? "Sub-3s Hardware Failover"
    : "Standard Redundant Path";

  // Active Compliance Frameworks
  const complianceFrameworks: string[] = ["UU PDP 2024", "ISO/IEC 27001"];
  if (hasSecurity || hasCloud || hasServer) complianceFrameworks.push("POJK 11/2022");
  if (hasServer || selectedIds.includes("storage")) complianceFrameworks.push("ANSI/TIA-942");
  if (hasAi) complianceFrameworks.push("Air-Gapped Sovereign AI");

  return (
    <section id="environment-builder" className="py-28 md:py-36 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Dynamic Background Atmosphere */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Index */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-12 border-b border-[var(--border-subtle)] gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              05 // ARCHITECTURE COMPOSER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
              DYNAMIC FABRIC SIMULATION
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Custom Enterprise Stack Builder</span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-12 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight font-display">
            Build your technology environment.
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-1 font-normal max-w-2xl">
            Pilih modul infrastruktur dan kecerdasan yang dibutuhkan organisasi Anda. Visualisasi terpadu kami menyusun cetak biru arsitektur terintegrasi secara real-time.
          </p>
        </div>

        {/* Builder Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: 9 Module Selector Grid (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Select Components ({selectedIds.length}/9)
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-[11px] font-mono text-[var(--accent)] hover:underline transition-colors"
                >
                  Select All
                </button>
                <span className="text-[var(--text-muted)]">•</span>
                <button
                  type="button"
                  onClick={resetDefault}
                  className="text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
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
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group btn-tactile ${
                      isSelected
                        ? "bg-[var(--accent-soft-bg)] border-[var(--accent)] shadow-xs ring-1 ring-[var(--accent)]/30"
                        : "bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border-[var(--border-subtle)] hover:border-[var(--accent)]/30"
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[var(--accent)] text-white shadow-xs"
                            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[var(--text-primary)] font-sans">
                            {mod.name}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">
                            {mod.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                          {mod.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all shrink-0 ${
                        isSelected
                          ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                          : "border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
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
          <div className="lg:col-span-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-6 transition-colors duration-300">
            
            {/* Header Tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-1 font-semibold">
                  Dynamic Visual Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-sans">
                  ARKAPRANA TECHNOLOGY ENVIRONMENT
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)] font-medium self-start sm:self-auto">
                {selectedModules.length} Subsystems Active
              </div>
            </div>

            {/* Formula Progression Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                Selected Architecture Formula
              </span>
              <div className="text-xs sm:text-sm font-mono font-bold text-[var(--accent)] tracking-wide break-words">
                {formulaString}
              </div>
              <div className="text-[var(--text-muted)] text-sm font-mono">↓</div>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] tracking-wide">
                ARKAPRANA TECHNOLOGY ENVIRONMENT
              </div>
            </div>

            {/* Visual Node Matrix Topology with Animated Connection Vector */}
            <div className="py-6 px-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  Interconnected Fabric Topology
                </span>
                <span className="text-[10px] font-mono text-[var(--accent)] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  Live Dynamic Mesh
                </span>
              </div>

              {/* Sequential Flow Progression Bar */}
              <div className="mb-4 p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] overflow-x-auto">
                <div className="flex items-center gap-2 min-w-max text-[11px] font-mono">
                  {selectedModules.map((mod, idx) => (
                    <React.Fragment key={mod.id}>
                      <span className="px-2 py-0.5 rounded bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] text-[var(--accent)] font-medium">
                        {mod.name}
                      </span>
                      {idx < selectedModules.length - 1 && (
                        <div className="flex items-center text-[var(--accent)] font-bold">
                          <span>→</span>
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
                      className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col justify-between space-y-2 hover:border-[var(--accent)]/40 transition-all shadow-xs"
                      style={{
                        animation: `heroEntranceSlide 400ms ease-out ${idx * 60}ms backwards`
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)]">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[9px] font-mono text-[var(--accent)] font-bold">
                          SYS_0{idx + 1}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--text-primary)] font-sans">
                          {mod.name}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)] font-mono">
                          {mod.category}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Enterprise Feasibility & SLA Estimator */}
            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Calculated Architectural Specifications:</span>
                </span>
                <span className="text-[9px] font-mono text-emerald-500 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  LIVE ESTIMATOR
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Projected SLA</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-[var(--accent)]">{calculatedSla}</div>
                  <div className="text-[9px] text-[var(--text-secondary)] font-mono">High Availability</div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Target MTTR</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-emerald-500">{calculatedMttr}</div>
                  <div className="text-[9px] text-[var(--text-secondary)] font-mono">Incident Recovery</div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Failover Dynamic</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-[var(--text-primary)]">{calculatedFailover}</div>
                  <div className="text-[9px] text-[var(--text-secondary)] font-mono">BGP Routing</div>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <div className="text-[10px] font-mono text-[var(--text-muted)] mb-1.5">Automated Compliance Scope:</div>
                <div className="flex flex-wrap gap-1.5">
                  {complianceFrameworks.map((cf) => (
                    <span
                      key={cf}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] flex items-center gap-1"
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      <span>{cf}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Deliverables */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                Integrated Implementation Guarantees:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[var(--text-primary)]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  <span>Single Architectural Point of Contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  <span>Harmonized Multi-Vendor Hardware SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  <span>Full Indonesian Data Sovereignty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  <span>Unified 24/7 Monitoring &amp; Incident NOC</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[var(--text-secondary)] font-mono">
                Formula: <span className="text-[var(--text-primary)] font-bold">{selectedModules.length} Modules Connected</span>
              </div>

              <Link
                href={`/contact?configuration=${contactQueryParam}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shadow-sm"
              >
                <span>Talk to an Engineer</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
