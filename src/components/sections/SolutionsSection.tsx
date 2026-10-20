"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { getLocalizedSolutions } from "@/lib/i18nData";
import { useLanguage } from "@/context/LanguageContext";
import {
  OpticalMeshGlyph,
  CognitiveAiGlyph,
  ModularDcGlyph,
  ZeroTrustHsmGlyph,
  ManagedSreGlyph,
  SovereignCloudGlyph,
  SystemIntegrationGlyph
} from "@/components/decorative/NalarGlyphs";

export default function SolutionsSection() {
  const { language, t } = useLanguage();
  const solutions = getLocalizedSolutions(language);

  const networkSol = solutions.find((s) => s.id === "network") || solutions[0];
  const aiSol = solutions.find((s) => s.id === "ai") || solutions[5];
  const infraSol = solutions.find((s) => s.id === "infrastructure") || solutions[1];
  const secSol = solutions.find((s) => s.id === "security") || solutions[3];
  const managedSol = solutions.find((s) => s.id === "managed-it") || solutions[4];
  const cloudSol = solutions.find((s) => s.id === "cloud") || solutions[2];
  const integrationSol = solutions.find((s) => s.id === "integration") || solutions[6];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle background ambient mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(2, 132, 199, 0.12) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300/80 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[11px] font-mono text-slate-700 dark:text-white/70 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase font-medium">
              {t("solutions_badge", "05 · CAPABILITIES · 7 CORE PILLARS")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-light text-slate-900 dark:text-white tracking-tight leading-[1.18] font-display">
            {t("solutions_title", "Tujuh Domain Rekayasa, Satu Ekosistem Terpadu.")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            {t(
              "solutions_desc",
              "Bukan sekadar katalog layanan konvensional. Setiap pilar teknologi ARKAPRANA dirancang dengan standar produk industri tingkat tinggi untuk memastikan kedaulatan data, ketahanan sistem, dan skalabilitas tanpa gesekan multi-vendor."
            )}
          </p>
        </div>

        {/* Asymmetric Bento Architecture Grid with Nalar-Style Technical Glyphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          
          {/* Bento Tile 1 (Span 7): Network & Optical Backbone */}
          <div
            className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 relative overflow-hidden group backdrop-blur-xl"
          >
            {/* Top Specular Reflection Highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent pointer-events-none" />

            <div>
              {/* Header Meta with Technical Glyph */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-2xl bg-sky-50 dark:bg-white/[0.04] border border-sky-100 dark:border-white/10 flex items-center justify-center text-sky-600 dark:text-[#38BDF8] group-hover:border-sky-400 dark:group-hover:border-[#38BDF8]/50 transition-colors">
                    <OpticalMeshGlyph size={30} highlight={true} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold uppercase block">
                      {networkSol.badge} · TRANSIT HIGHWAY
                    </span>
                    <span className="text-xs text-slate-500 dark:text-white/50 font-mono">
                      Carrier-Neutral Optical Transport
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-medium">
                    &lt; 0.8ms JITTER
                  </span>
                  <Link
                    href={`/solutions/${networkSol.shortSlug}`}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-white/70 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    aria-label="Lihat detail Network"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 dark:text-white font-display mb-2">
                {networkSol.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-6 max-w-xl font-light">
                {networkSol.description}
              </p>

              {/* Architectural Technical Schematic Simulation */}
              <div className="rounded-2xl bg-slate-50 dark:bg-[#0E1524] border border-slate-200/80 dark:border-white/[0.06] p-4 mb-6">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-white/40 mb-3 pb-2 border-b border-slate-200/80 dark:border-white/[0.06]">
                  <span>{language === "en" ? "TOPOLOGY: MULTI-PATH OPTICAL RING" : "TOPOLOGI: RING OPTIK MULTI-JALUR"}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">{language === "en" ? "DWDM OPTICAL HIGHWAY" : "JALUR OPTIK DWDM"}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] shadow-xs">
                    <div className="text-[9px] text-slate-500 dark:text-white/40 uppercase">
                      {language === "en" ? "Throughput" : "Kapasitas Transmisi"}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">Nx100 Gbps</div>
                    <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">
                      {language === "en" ? "Zero Packet Loss" : "Nol Kehilangan Paket"}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] shadow-xs">
                    <div className="text-[9px] text-slate-500 dark:text-white/40 uppercase">
                      {language === "en" ? "Failover Time" : "Waktu Pengalihan"}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">&lt; 18ms</div>
                    <div className="text-[9px] text-sky-600 dark:text-[#38BDF8] font-medium">BGP Multi-Homing</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] shadow-xs">
                    <div className="text-[9px] text-slate-500 dark:text-white/40 uppercase">
                      {language === "en" ? "Coverage" : "Jangkauan"}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                      {language === "en" ? "Nationwide" : "Nasional"}
                    </div>
                    <div className="text-[9px] text-sky-600 dark:text-[#38BDF8] font-medium">Fiber + SD-WAN</div>
                  </div>
                </div>
              </div>

              {/* Capabilities Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-white/80">
                {networkSol.capabilities.slice(0, 4).map((cap) => (
                  <div key={cap} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#38BDF8] shrink-0" />
                    <span className="text-[12px] font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/40">
                STANDARDS: IEEE 802.3ba · BGP4 · ITU-T G.694.1
              </span>
              <Link
                href={`/solutions/${networkSol.shortSlug}`}
                className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38BDF8] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{language === "en" ? "Network Specifications" : "Spesifikasi Jaringan"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Tile 2 (Span 5): Private AI & Cognitive Engine */}
          <div
            className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 relative overflow-hidden group backdrop-blur-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center gap-3.5">
                  <div className="size-11 rounded-2xl bg-sky-50 dark:bg-white/[0.04] border border-sky-100 dark:border-white/10 flex items-center justify-center text-sky-600 dark:text-[#38BDF8] group-hover:border-sky-400 dark:group-hover:border-[#38BDF8]/50 transition-colors">
                    <CognitiveAiGlyph size={30} highlight={true} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold uppercase block">
                      {aiSol.badge} · COGNITIVE
                    </span>
                    <span className="text-xs text-slate-500 dark:text-white/50 font-mono">
                      {language === "en" ? "Air-Gapped Sovereign AI" : "AI Berdaulat Air-Gapped"}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-medium">
                  {language === "en" ? "0% DATA LEAKAGE" : "0% KEBOCORAN DATA"}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 dark:text-white font-display mb-2">
                {aiSol.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-6 font-light">
                {aiSol.description}
              </p>

              {/* Security & RAG Highlight Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0E1524] border border-slate-200/80 dark:border-white/[0.06] space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-white/40 text-[10px] uppercase">
                    {language === "en" ? "Model Architecture" : "Arsitektur Model"}
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold">Local vLLM / TensorRT</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono border-t border-slate-200/80 dark:border-white/[0.06] pt-2">
                  <span className="text-slate-500 dark:text-white/40 text-[10px] uppercase">
                    {language === "en" ? "Enterprise Knowledge Vault" : "Brankas Pengetahuan Korporat"}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Airgapped Vector Index</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono border-t border-slate-200/80 dark:border-white/[0.06] pt-2">
                  <span className="text-slate-500 dark:text-white/40 text-[10px] uppercase">
                    {language === "en" ? "Sovereign Regulation" : "Regulasi Kedaulatan"}
                  </span>
                  <span className="text-sky-600 dark:text-[#38BDF8] font-semibold">100% On-Premise Indonesia</span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-white/80">
                {aiSol.capabilities.slice(0, 3).map((cap) => (
                  <li key={cap} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] shrink-0" />
                    <span className="font-light">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/40">
                LATENCY: &lt; 15ms VECTOR INFERENCE
              </span>
              <Link
                href={`/solutions/${aiSol.shortSlug}`}
                className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38BDF8] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{language === "en" ? "AI Specifications" : "Spesifikasi AI"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Row 2: 3 Specialized Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          
          {/* Card 3: Modular Data Center & Compute */}
          <div className="rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 group backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <ModularDcGlyph size={26} highlight={true} />
                  <span className="text-[10px] font-mono tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold uppercase">
                    {infraSol.badge}
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70">
                  TIER-III COMPLIANT
                </span>
              </div>

              <h4 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white mb-1.5 font-display">
                {infraSol.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed mb-4 font-light">
                {infraSol.tagline}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1524] border border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono space-y-1.5 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-white/40">{language === "en" ? "PUE Target:" : "Target PUE:"}</span>
                  <span className="text-slate-900 dark:text-white font-semibold">&lt; 1.31 In-Row</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-white/40">{language === "en" ? "Power Topology:" : "Topologi Daya:"}</span>
                  <span className="text-slate-900 dark:text-white font-semibold">2N Dual-Bus</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
              <Link
                href={`/solutions/${infraSol.shortSlug}`}
                className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38BDF8] inline-flex items-center gap-1 transition-colors"
              >
                <span>{language === "en" ? "View Data Center" : "Lihat Pusat Data"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Zero-Trust Security & HSM Defense */}
          <div className="rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 group backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <ZeroTrustHsmGlyph size={26} highlight={true} />
                  <span className="text-[10px] font-mono tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold uppercase">
                    {secSol.badge}
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-medium">
                  FIPS 140-3 L3
                </span>
              </div>

              <h4 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white mb-1.5 font-display">
                {secSol.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed mb-4 font-light">
                {secSol.tagline}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1524] border border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono space-y-1.5 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-white/40">Perimeter:</span>
                  <span className="text-slate-900 dark:text-white font-semibold">Micro-Segmented</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-white/40">SOC Telemetry:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">24/7 SIEM &amp; EDR</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
              <Link
                href={`/solutions/${secSol.shortSlug}`}
                className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38BDF8] inline-flex items-center gap-1 transition-colors"
              >
                <span>{language === "en" ? "View Cybersecurity" : "Lihat Keamanan Siber"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 5: Managed IT & Operations */}
          <div className="rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 group backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <ManagedSreGlyph size={26} highlight={true} />
                  <span className="text-[10px] font-mono tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold uppercase">
                    {managedSol.badge}
                  </span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70">
                  24/7 NOC ESCORT
                </span>
              </div>

              <h4 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white mb-1.5 font-display">
                {managedSol.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed mb-4 font-light">
                {managedSol.tagline}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1524] border border-slate-200/80 dark:border-white/[0.06] text-[11px] font-mono space-y-1.5 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-white/40">{language === "en" ? "SLA Availability:" : "Ketersediaan SLA:"}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    {language === "en" ? "99.982% Guarantee" : "Garansi 99.982%"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-white/40">{language === "en" ? "Escalation Matrix:" : "Matriks Eskalasi:"}</span>
                  <span className="text-slate-900 dark:text-white font-semibold">Tier-3 SRE</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
              <Link
                href={`/solutions/${managedSol.shortSlug}`}
                className="text-xs font-semibold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-[#38BDF8] inline-flex items-center gap-1 transition-colors"
              >
                <span>{language === "en" ? "View Managed IT" : "Lihat Layanan TI Terkelola"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Row 3: 2 Broad Domain Integration Strips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card 6: Sovereign Private Cloud */}
          <div className="rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 group backdrop-blur-xl">
            <div className="space-y-2 max-w-md">
              <div className="flex items-center gap-2.5">
                <SovereignCloudGlyph size={24} highlight={true} />
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold">
                  {cloudSol.badge} · SOVEREIGN PRIVATE CLOUD
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-medium tracking-tight text-slate-900 dark:text-white font-display">
                {cloudSol.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                {cloudSol.tagline}
              </p>
            </div>
            <Link
              href={`/solutions/${cloudSol.shortSlug}`}
              className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:bg-slate-900 hover:text-white dark:hover:border-[#38BDF8] dark:hover:text-white transition-all shrink-0 ml-4 group-hover:translate-x-1"
              aria-label="Buka Cloud Solutions"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 7: Turnkey System Integration */}
          <div className="rounded-2xl bg-white dark:bg-[#131B2E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-sky-400 dark:hover:border-[#38BDF8]/40 hover:shadow-[0_12px_36px_rgba(2,132,199,0.08)] transition-all duration-300 group backdrop-blur-xl">
            <div className="space-y-2 max-w-md">
              <div className="flex items-center gap-2.5">
                <SystemIntegrationGlyph size={24} highlight={true} />
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold">
                  {integrationSol.badge} · SYSTEM INTEGRATION
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-medium tracking-tight text-slate-900 dark:text-white font-display">
                {integrationSol.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                {integrationSol.tagline}
              </p>
            </div>
            <Link
              href={`/solutions/${integrationSol.shortSlug}`}
              className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:bg-slate-900 hover:text-white dark:hover:border-[#38BDF8] dark:hover:text-white transition-all shrink-0 ml-4 group-hover:translate-x-1"
              aria-label="Buka System Integration"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
