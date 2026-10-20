"use client";

import React from "react";
import Link from "next/link";
import { getLocalizedSolutions } from "@/lib/i18nData";
import {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight
} from "lucide-react";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
import EnvironmentBuilderSection from "@/components/sections/EnvironmentBuilderSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
};

export default function SolutionsClientView() {
  const { language, t } = useLanguage();
  const solutions = getLocalizedSolutions(language);

  return (
    <main className="flex-1 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white min-h-screen">
      {/* 01. HERO WITH SUBTLE MIST, CONCENTRIC ORBITS, & DYNAMIC SINE WAVES */}
      <NalarPageHeroAtmosphere
        badgeText={t("sol_page_badge", "01 · ENTERPRISE SOLUTIONS · 7 CORE DOMAINS")}
        headlinePrimary={t("sol_page_title_1", "Integrated Architecture.")}
        headlineSecondary={t("sol_page_title_2", "From Foundation to Intelligence.")}
        description={t(
          "sol_page_desc",
          "Jelajahi tujuh domain kapabilitas rekayasa teknologi ARKAPRANA. Setiap solusi dirancang modular, kompatibel antar-vendor, dan scalable untuk keandalan operasional jangka panjang."
        )}
      >
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-2">
          {solutions.map((s) => (
            <Link
              key={s.id}
              href={`#${s.slug}`}
              className="text-[11px] font-mono px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:border-[#0284C7] dark:hover:border-[#38BDF8]/50 hover:bg-slate-100 dark:hover:bg-white/[0.09] transition-all hover:scale-105 active:scale-95 shadow-xs"
            >
              {s.badge} {s.name}
            </Link>
          ))}
        </div>
      </NalarPageHeroAtmosphere>
      
      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 02. SOLUTIONS CARDS WITH NALAR-GRADE SPATIAL REFINEMENT & SCROLL ANIMATIONS */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {solutions.map((sol, idx) => {
          const Icon = iconMap[sol.iconName] || Server;
          const isReversed = idx % 2 !== 0;

          return (
            <ScrollReveal key={sol.id} delayMs={idx * 60}>
              <div
                id={sol.slug}
                className="relative rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-[#0284C7]/50 dark:hover:border-[#38BDF8]/40 transition-all duration-500 shadow-xl dark:shadow-2xl backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Specular Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0284C7]/30 dark:via-[#38BDF8]/40 to-transparent pointer-events-none" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Scope & Overview (Span 7) */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 sm:size-14 rounded-2xl bg-sky-50 dark:bg-white/[0.04] border border-sky-100 dark:border-white/10 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] shrink-0 group-hover:scale-110 group-hover:border-[#0284C7]/60 dark:group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 shadow-inner">
                        <Icon className="size-6 sm:size-7" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-[#38BDF8]/10 border border-sky-200 dark:border-[#38BDF8]/20 font-semibold inline-block mb-1">
                          {sol.badge} · {sol.category}
                        </span>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 dark:text-white tracking-tight font-display">
                          {sol.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-800 dark:text-white/90 font-medium font-serif leading-relaxed">
                      {sol.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 font-light leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Capabilities Checklist */}
                    <div className="pt-2">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/40 mb-3 flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
                        {t("sol_scope_title", "Scope of Engineering Capabilities")}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs text-slate-700 dark:text-white/75">
                        {sol.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.04] hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-100/80 dark:hover:bg-white/[0.05] transition-colors"
                          >
                            <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="font-light">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:text-black dark:bg-white dark:hover:bg-white/95 transition-all shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                      >
                        <span>{t("btn_deep_dive", "Deep Dive Architecture")}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <Link
                        href={`/contact?solution=${encodeURIComponent(sol.name)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-white/65 hover:text-[#0284C7] dark:hover:text-[#38BDF8] transition-colors py-2 group/btn font-medium"
                      >
                        <span>{t("btn_inquire_spec", "Inquire Specification")}</span>
                        <ChevronRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Technical Specs (Span 5) */}
                  <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 p-5 sm:p-7 space-y-4 sm:space-y-5 font-mono text-xs backdrop-blur-md relative overflow-hidden group-hover:border-[#0284C7]/40 dark:group-hover:border-[#38BDF8]/30 transition-all">
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-white/10 text-[#0284C7] dark:text-[#38BDF8] font-semibold">
                      <span className="flex items-center gap-2">
                        <Layers className="size-4" />
                        <span>{t("sol_tech_arch", "TECHNICAL ARCHITECTURE")}</span>
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-white/40">
                        {language === "en" ? "ENTERPRISE GRADE" : "STANDAR ENTERPRISE"}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-widest block mb-1.5">
                        {t("sol_arch_focus", "Core Architecture Focus")}
                      </span>
                      <p className="text-slate-800 dark:text-white/80 font-sans text-xs leading-relaxed font-light">
                        {sol.architectureFocus}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-white/[0.06]">
                      <span className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-widest block mb-2">
                        {t("sol_verified_deliverables", "Standard Verified Deliverables")}
                      </span>
                      <ul className="space-y-2 text-slate-700 dark:text-white/75 font-sans text-xs">
                        {sol.deliverables.map((del) => (
                          <li key={del} className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] shrink-0" />
                            <span className="font-light">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] text-slate-600 dark:text-white/45">
                      <span>{t("sol_sla_guarantee", "Vendor Agnostic SLA")}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping" />
                        {language === "en" ? "99.99% Guaranteed" : "Garansi 99.99%"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 03. INTERACTIVE ARCHITECTURE & CAPACITY ESTIMATOR (LIVE ENVIRONMENT BUILDER) */}
      <EnvironmentBuilderSection />

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 04. MONUMENTAL NALAR ORBITAL CTA SECTION */}
      <ScrollReveal delayMs={100}>
        <NalarOrbitalCtaSection />
      </ScrollReveal>
    </main>
  );
}
