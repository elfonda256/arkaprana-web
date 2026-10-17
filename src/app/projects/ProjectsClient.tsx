"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Layers,
  ChevronDown,
  ChevronUp,
  Activity,
  Building2,
  MapPin
} from "lucide-react";
import { PROJECT_CASE_STUDIES } from "@/lib/data";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsClient() {
  const { t, language } = useLanguage();
  const [activeSector, setActiveSector] = useState<string>("all");
  const [expandedTopologyId, setExpandedTopologyId] = useState<string | null>("cs-banking");

  const sectorFilters = [
    { id: "all", label: t("proj_filter_all", "Semua Sektor") },
    { id: "banking", label: t("proj_filter_banking", "Perbankan & Finansial") },
    { id: "energy", label: t("proj_filter_energy", "Energi & Manufaktur") },
    { id: "healthcare", label: t("proj_filter_healthcare", "Kesehatan Terdistribusi") },
    { id: "public", label: t("proj_filter_public", "Infrastruktur Publik") }
  ];

  const filteredProjects = PROJECT_CASE_STUDIES.filter((cs) => {
    if (activeSector === "all") return true;
    if (activeSector === "energy") {
      return cs.sector === "energy" || cs.sector === "manufacturing";
    }
    return cs.sector === activeSector;
  });

  const toggleTopology = (id: string) => {
    setExpandedTopologyId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen bg-[#08090D] text-white">
      {/* Animated Atmosphere with Ethereal Mist, Waveforms & Orbits */}
      <NalarPageHeroAtmosphere
        badgeText={t("proj_page_badge", "07 · ARCHITECTURAL CASE STUDIES · PROVEN SYSTEM BLUEPRINTS")}
        headlinePrimary={t("proj_page_title_1", "Studi Kasus Arsitektur &")}
        headlineSecondary={t("proj_page_title_2", "Implementasi Lapangan.")}
        description={t("proj_page_desc", "Dokumentasi rekayasa arsitektur nyata: dari modernisasi core network perbankan tier-3, sovereign private AI on-premise BUMN, hingga mitigasi risiko regulasi UU PDP dan POJK 11/2022 dengan verifikasi metrik sebelum vs sesudah.")}
      >
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400 pt-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t("proj_subtext", "Semua arsitektur dirancang untuk toleransi kesalahan sub-detik dan isolasi kedaulatan data Indonesia.")}</span>
        </div>
      </NalarPageHeroAtmosphere>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Global Architecture KPI Strip */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                Uptime SLA Target
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                99.995%
              </div>
              <div className="text-[11px] text-zinc-400">High-Availability Fabric</div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                Failover Tolerance
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                &lt; 650 ms
              </div>
              <div className="text-[11px] text-zinc-400">Sub-Second BGP Routing</div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                Data Sovereignty
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                100% On-Prem
              </div>
              <div className="text-[11px] text-zinc-400">UU PDP 2024 Compliant</div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                Regulatory Readiness
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                POJK + TIA-942
              </div>
              <div className="text-[11px] text-zinc-400">Certified Tier-3 Design</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Sector Filter Bar */}
        <ScrollReveal delayMs={150}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {sectorFilters.map((tab) => {
                const isActive = activeSector === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSector(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                        : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-2 opacity-70 text-[10px]">
                      {tab.id === "all"
                        ? `(${PROJECT_CASE_STUDIES.length})`
                        : tab.id === "energy"
                        ? `(${PROJECT_CASE_STUDIES.filter(p => p.sector === "energy" || p.sector === "manufacturing").length})`
                        : `(${PROJECT_CASE_STUDIES.filter(p => p.sector === tab.id).length})`}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Deployment Models</span>
              </span>
              <span>|</span>
              <span>Zero SPOF Architecture</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Case Studies Deep Architectural Cards */}
        <div className="space-y-12">
          {filteredProjects.map((cs, idx) => {
            const isTopologyOpen = expandedTopologyId === cs.id;

            return (
              <ScrollReveal key={cs.id} delayMs={idx * 60}>
                <article
                  id={cs.slug}
                  className="rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden shadow-2xl backdrop-blur-md group hover:-translate-y-1"
                >
                  {/* Card Header Bar */}
                  <div className="p-6 sm:p-8 border-b border-white/10 bg-white/[0.02]">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                          {cs.code}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          {cs.sectorLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{cs.location}</span>
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white font-display tracking-tight leading-snug mb-3">
                      {cs.title}
                    </h2>

                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{language === "en" ? `Client Profile: ${cs.clientType}` : `Profil Klien: ${cs.clientType}`}</span>
                    </div>
                  </div>

                  {/* Challenge vs Solution Overview */}
                  <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-white/10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>{language === "en" ? "Initial Operational Challenge" : "Tantangan Operasional Awal"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>{language === "en" ? "ARKAPRANA Architecture Solution" : "Rekayasa Arsitektur Arkaprana"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {cs.architectureSolution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Metrics Before vs After */}
                  <div className="p-6 sm:p-8 bg-white/[0.01] border-b border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{t("proj_verified_metrics", "Verifikasi Metrik Operasional Sebelum vs Sesudah")}</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-medium">
                        Verified Outcomes
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {cs.metricsBeforeAfter.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-4 rounded-xl bg-zinc-900/70 border border-white/10 space-y-2"
                        >
                          <div className="text-[11px] font-mono font-semibold text-zinc-400 truncate">
                            {m.metric}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                              <span>{language === "en" ? "Before:" : "Sebelum:"}</span>
                              <span className="line-through text-red-400">{m.before}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs font-mono font-bold text-white">
                              <span>{language === "en" ? "After:" : "Sesudah:"}</span>
                              <span className="text-emerald-400">{m.after}</span>
                            </div>
                          </div>
                          <div className="pt-2 border-t border-white/10">
                            <span className="inline-block text-[10px] font-mono font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                              {m.improvement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Topology Breakdown Toggle */}
                  <div className="p-6 sm:p-8 border-b border-white/10">
                    <button
                      onClick={() => toggleTopology(cs.id)}
                      className="w-full flex items-center justify-between py-2 text-left group/btn cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-mono font-semibold text-white group-hover/btn:text-cyan-300 transition-colors">
                          {isTopologyOpen
                            ? (language === "en" ? "Hide System & Protocol Topology Breakdown" : "Tutup Diagram Topologi Sistem & Protokol")
                            : (language === "en" ? "Show System & Protocol Topology Breakdown" : "Buka Diagram Topologi Sistem & Protokol")}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          (4 Layers Detail)
                        </span>
                      </div>
                      <div className="p-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover/btn:text-white">
                        {isTopologyOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isTopologyOpen && (
                      <div className="mt-6 space-y-3 pt-6 border-t border-white/10 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {cs.topologyLayers.map((layer, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-4 rounded-xl bg-zinc-900/70 border border-white/10 space-y-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-mono font-bold text-cyan-300">
                                  0{lIdx + 1} // {layer.layer}
                                </span>
                                <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-black/40 border border-white/10">
                                  {layer.tech}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-300 leading-relaxed">
                                {layer.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Regulatory Compliance & Hardware Standards Bar */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/[0.02]">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block font-semibold">
                        {language === "en" ? "Verified Regulatory & Compliance Standards:" : "Standar Regulasi & Kepatuhan Terverifikasi:"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.regulatoryCompliance.map((reg) => (
                          <span
                            key={reg}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                          >
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            <span>{reg}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                      <Link
                        href={`/contact?project=${encodeURIComponent(cs.code)}&title=${encodeURIComponent(cs.title)}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-white text-black hover:bg-zinc-200 transition-all shadow-md group/link"
                      >
                        <span>{language === "en" ? "Consult Similar Architecture" : "Konsultasikan Arsitektur Serupa"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
