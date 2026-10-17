"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Network,
  Server,
  Cloud,
  BrainCircuit,
  Workflow,
  Compass,
  ChevronRight
} from "lucide-react";
import { CAPABILITIES_DATA } from "@/lib/data";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  "cap-network": Network,
  "cap-datacenter": Server,
  "cap-cloud": Cloud,
  "cap-security": ShieldCheck,
  "cap-integration": Workflow,
  "cap-managed": Cpu,
  "cap-ai": BrainCircuit,
  "cap-consulting": Compass
};

export default function CapabilitiesClientView() {
  const { language, t } = useLanguage();

  return (
    <main className="flex-1 bg-[#08090D] text-white min-h-screen">
      {/* 01. HERO WITH SUBTLE MIST, CONCENTRIC ORBITS & DYNAMIC SINE WAVES */}
      <NalarPageHeroAtmosphere
        badgeText={t("cap_page_badge", "03 · CAPABILITY BLUEPRINTS · 8 ENGINEERING DISCIPLINES")}
        headlinePrimary={t("cap_page_title_1", "Enterprise Capabilities.")}
        headlineSecondary={t("cap_page_title_2", "Architectural blueprints for critical scale.")}
        description={t(
          "cap_page_desc",
          "Kredibilitas rekayasa ARKAPRANA dibangun dari kedalaman arsitektur teknis, pemahaman regulasi kedaulatan data lokal, dan metodologi implementasi standar industri tanpa klaim semu."
        )}
      >
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {CAPABILITIES_DATA.map((c) => (
            <Link
              key={c.id}
              href={`#${c.slug}`}
              className="text-[11px] font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-[#38BDF8]/50 hover:bg-white/[0.09] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              0{c.number} {c.title}
            </Link>
          ))}
        </div>
      </NalarPageHeroAtmosphere>

      {/* 02. 8 CAPABILITIES CARDS WITH NALAR-GRADE PRECISION & SCROLL ANIMATIONS */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {CAPABILITIES_DATA.map((cap, idx) => {
          const Icon = iconMap[cap.id] || Server;

          return (
            <ScrollReveal key={cap.id} delayMs={idx * 50}>
              <div
                id={cap.slug}
                className="relative rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 shadow-2xl backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Specular Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent pointer-events-none" />

                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 group-hover:scale-110 group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/20 font-semibold inline-block mb-1">
                        CAPABILITY 0{cap.number} · {cap.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-light text-white font-display">
                        {cap.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/60 self-start sm:self-auto backdrop-blur-md">
                    {cap.engagementModel}
                  </span>
                </div>

                {/* Grid: What We Do (Span 7) & Typical Requirements (Span 5) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
                  {/* Left Column (Span 7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#38BDF8] block mb-2 font-semibold">
                        {t("cap_engineering_focus", "ENGINEERING FOCUS // WHAT WE DO")}
                      </span>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                        {cap.whatWeDo}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-white/15 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                        {t("cap_arch_solution", "ARCHITECTURAL SOLUTION")}
                      </span>
                      <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                        {cap.potentialSolution}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={cap.ctaHref}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                      >
                        <span>{cap.ctaText}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-[#38BDF8] transition-colors py-2 group/btn"
                      >
                        <span>{language === "en" ? "Request Blueprint" : "Ajukan Cetak Biru Arsitektur"}</span>
                        <ChevronRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Typical Requirements & Blueprint (Span 5) */}
                  <div className="lg:col-span-5 rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-7 space-y-5 font-mono text-xs backdrop-blur-md">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                      {t("cap_typical_req", "TYPICAL REQUIREMENTS")}
                    </span>
                    <ul className="space-y-3 font-sans">
                      {cap.typicalRequirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start text-xs text-white/75 gap-2.5 font-light">
                          <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/[0.06] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] block">
                        {t("cap_blueprint_std", "Architecture Blueprint Standard:")}
                      </span>
                      <p className="text-xs font-mono text-white/60 leading-relaxed font-light">
                        {cap.architecture}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Strip: Key Protocols */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-white/40 mr-1">
                      {t("cap_protocols_std", "Standard Protocols:")}
                    </span>
                    {cap.keyProtocols.map((proto) => (
                      <span
                        key={proto}
                        className="px-2.5 py-0.5 rounded-md text-[10.5px] font-mono bg-white/[0.04] text-white/75 border border-white/10 hover:border-[#38BDF8]/40 transition-colors"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Sovereign RI &amp; ISO 27001 Aligned</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* 03. CLOSING CTA BANNER WITH SCROLL REVEAL */}
      <ScrollReveal delayMs={80}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/10">
          <div className="rounded-3xl border border-white/10 bg-[#0C0E15] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-[#38BDF8]">
                <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>TECHNICAL CAPABILITY VALIDATION</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight font-display">
                {language === "en"
                  ? "Want to Audit or Benchmark These Capabilities?"
                  : "Ingin Mengaudit atau Menguji Kapabilitas Ini?"}
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {language === "en"
                  ? "Consult directly with ARKAPRANA's system architects for network readiness mapping, compute power calculations, or on-premise private AI simulations."
                  : "Diskusikan langsung bersama tim arsitek ARKAPRANA untuk pemetaan kesiapan jaringan, perhitungan beban daya komputasi, atau simulasi model AI privat on-premise."}
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
                >
                  <span>{t("btn_consult_capability", "Mulai Konsultasi Kapabilitas")}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
