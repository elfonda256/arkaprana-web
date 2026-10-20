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
import { getLocalizedCapabilities } from "@/lib/i18nData";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
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
  const capabilities = getLocalizedCapabilities(language);

  return (
    <main className="flex-1 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white min-h-screen">
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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2">
          {capabilities.map((c) => (
            <Link
              key={c.id}
              href={`#${c.slug}`}
              className="text-[11px] font-mono px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:border-[#0284C7] dark:hover:border-[#38BDF8]/50 hover:bg-slate-100 dark:hover:bg-white/[0.09] transition-all hover:scale-105 active:scale-95 shadow-xs"
            >
              0{c.number} {c.title}
            </Link>
          ))}
        </div>
      </NalarPageHeroAtmosphere>
      
      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 02. 8 CAPABILITIES CARDS WITH NALAR-GRADE PRECISION & SCROLL ANIMATIONS */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {capabilities.map((cap, idx) => {
          const Icon = iconMap[cap.id] || Server;

          return (
            <ScrollReveal key={cap.id} delayMs={idx * 50}>
              <div
                id={cap.slug}
                className="relative rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-[#0284C7]/50 dark:hover:border-[#38BDF8]/40 transition-all duration-500 shadow-xl dark:shadow-2xl backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Specular Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0284C7]/30 dark:via-[#38BDF8]/40 to-transparent pointer-events-none" />

                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-white/10 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 sm:size-14 rounded-2xl bg-sky-50 dark:bg-white/[0.04] border border-sky-100 dark:border-white/10 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] shrink-0 group-hover:scale-110 group-hover:border-[#0284C7]/60 dark:group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-[#38BDF8]/10 border border-sky-200 dark:border-[#38BDF8]/20 font-semibold inline-block mb-1">
                        CAPABILITY 0{cap.number} · {cap.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white font-display">
                        {cap.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white/60 self-start sm:self-auto backdrop-blur-md font-medium">
                    {cap.engagementModel}
                  </span>
                </div>

                {/* Grid: What We Do (Span 7) & Typical Requirements (Span 5) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-start">
                  {/* Left Column (Span 7) */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    <div>
                      <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#38BDF8] block mb-2 font-semibold">
                        {t("cap_engineering_focus", "ENGINEERING FOCUS // WHAT WE DO")}
                      </span>
                      <p className="text-sm sm:text-base text-slate-800 dark:text-white/80 leading-relaxed font-light">
                        {cap.whatWeDo}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] space-y-2 hover:border-slate-300 dark:hover:border-white/15 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/40 block">
                        {t("cap_arch_solution", "ARCHITECTURAL SOLUTION")}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-white/65 leading-relaxed font-light">
                        {cap.potentialSolution}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href={cap.ctaHref}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:text-black dark:bg-white dark:hover:bg-white/95 transition-all shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                      >
                        <span>{cap.ctaText}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-white/60 hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors py-2 group/btn font-medium"
                      >
                        <span>{language === "en" ? "Request Blueprint" : "Ajukan Cetak Biru Arsitektur"}</span>
                        <ChevronRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Typical Requirements & Blueprint (Span 5) */}
                  <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 p-5 sm:p-7 space-y-4 sm:space-y-5 font-mono text-xs backdrop-blur-md">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/40 block">
                      {t("cap_typical_req", "TYPICAL REQUIREMENTS")}
                    </span>
                    <ul className="space-y-2.5 sm:space-y-3 font-sans">
                      {cap.typicalRequirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start text-xs text-slate-700 dark:text-white/75 gap-2.5 font-light">
                          <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#38BDF8] block">
                        {t("cap_blueprint_std", "Architecture Blueprint Standard:")}
                      </span>
                      <p className="text-xs font-mono text-slate-600 dark:text-white/60 leading-relaxed font-light">
                        {cap.architecture}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Strip: Key Protocols */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-white/40 mr-1">
                      {t("cap_protocols_std", "Standard Protocols:")}
                    </span>
                    {cap.keyProtocols.map((proto) => (
                      <span
                        key={proto}
                        className="px-2.5 py-0.5 rounded-md text-[10.5px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-white/75 border border-slate-200 dark:border-white/10 hover:border-[#0284C7]/40 dark:hover:border-[#38BDF8]/40 transition-colors"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                    <span>{language === "en" ? "Sovereign RI & ISO 27001 Aligned" : "Kedaulatan RI & Selaras ISO 27001"}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 03. MONUMENTAL NALAR ORBITAL CTA SECTION */}
      <ScrollReveal delayMs={80}>
        <NalarOrbitalCtaSection />
      </ScrollReveal>
    </main>
  );
}
