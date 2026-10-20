"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getLocalizedIndustries } from "@/lib/i18nData";
import {
  Factory,
  Ship,
  HardHat,
  Landmark,
  Building2,
  Truck,
  Building,
  Hotel,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  construction: HardHat,
  manufacturing: Factory,
  maritime: Ship,
  logistics: Truck,
  property: Building2,
  hospitality: Hotel,
  enterprise: Building,
  government: Landmark,
  bumn: Landmark
};

// Map each industry to real curated photography
const industryImages: Record<string, string> = {
  manufacturing: "/images/industry-manufacturing.jpg",
  energy: "/images/industry-energy.jpg",
  retail: "/images/industry-retail.jpg",
  healthcare: "/images/industry-healthcare.jpg",
  logistics: "/images/industry-manufacturing.jpg",
  maritime: "/images/usecase-telecom.jpg",
  property: "/images/industry-retail.jpg",
  enterprise: "/images/usecase-datacenter.jpg",
  government: "/images/industry-energy.jpg",
  bumn: "/images/industry-healthcare.jpg",
  construction: "/images/industry-manufacturing.jpg",
  hospitality: "/images/industry-retail.jpg"
};

export default function IndustriesClientView() {
  const { language, t } = useLanguage();
  const industries = getLocalizedIndustries(language);

  return (
    <main className="flex-1 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white min-h-screen">
      {/* 01. HERO WITH SUBTLE MIST, CONCENTRIC ORBITS & DYNAMIC SINE WAVES */}
      <NalarPageHeroAtmosphere
        badgeText={t("ind_page_badge", "02 · INDUSTRY ARCHITECTURE · MULTI-SECTOR SYSTEMS")}
        headlinePrimary={t("ind_page_title_1", "Technology for Critical Environments.")}
        headlineSecondary={t("ind_page_title_2", "Field-proven across 8 enterprise sectors.")}
        description={t(
          "ind_page_desc",
          "Kami memahami bahwa lingkungan maritim lepas pantai membutuhkan pendekatan rekayasa yang sangat berbeda dari pusat komputasi perbankan atau fasilitas manufaktur industri. ARKAPRANA merancang solusi teknologi yang disesuaikan dengan kondisi fisik lingkungan dan kebutuhan operasional nyata organisasi Anda."
        )}
      />

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 02. INDUSTRIES GRID WITH REFINED SPATIAL GOVERNANCE & SCROLL ANIMATIONS */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {industries.map((ind, idx) => {
            const Icon = iconMap[ind.slug] || Building;
            const photoPath = industryImages[ind.slug] || "/images/industry-manufacturing.jpg";

            return (
              <ScrollReveal key={ind.name} delayMs={idx * 60}>
                <div
                  id={ind.slug}
                  className="relative rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-[#0284C7]/50 dark:hover:border-[#38BDF8]/40 transition-all duration-500 shadow-xl dark:shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 h-full"
                >
                  {/* Top Specular Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0284C7]/30 dark:via-[#38BDF8]/40 to-transparent pointer-events-none" />

                  <div>
                    {/* Photo Banner with Dark Overlay & Dynamic Topology Indicator */}
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-slate-200 dark:border-white/10">
                      <Image
                        src={photoPath}
                        alt={ind.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 dark:opacity-50 brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent dark:from-[#0D0F18] dark:via-[#0D0F18]/60" />

                      {/* Topology Graphic Overlay */}
                      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="size-10 rounded-xl bg-black/60 border border-white/20 flex items-center justify-center text-[#38BDF8] backdrop-blur-md group-hover:border-[#38BDF8]/50 transition-colors">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider block font-semibold">
                              {language === "en" ? "MISSION-CRITICAL SECTOR" : "SEKTOR MISI KRITIS"}
                            </span>
                            <h2 className="text-xl font-light text-white font-display">
                              {ind.name}
                            </h2>
                          </div>
                        </div>

                        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-emerald-400 backdrop-blur-md font-medium">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{language === "en" ? "Active Topology" : "Topologi Aktif"}</span>
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="text-base font-serif italic text-slate-800 dark:text-white/90 leading-snug">
                        &ldquo;{ind.headlineQuote}&rdquo;
                      </div>

                      {/* Challenge & Environment Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-white/[0.02] border border-rose-200 dark:border-red-500/20 space-y-1 hover:border-rose-300 dark:hover:border-red-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-700 dark:text-red-400 block font-semibold">
                            {language === "en" ? "Industry Challenge:" : "Tantangan Industri:"}
                          </span>
                          <p className="text-xs text-slate-700 dark:text-white/60 leading-relaxed font-light">
                            {ind.challenge}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-white/[0.02] border border-amber-200 dark:border-amber-500/20 space-y-1 hover:border-amber-300 dark:hover:border-amber-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 block font-semibold">
                            {language === "en" ? "Operating Environment:" : "Lingkungan Operasional:"}
                          </span>
                          <p className="text-xs text-slate-700 dark:text-white/60 leading-relaxed font-light">
                            {ind.environment}
                          </p>
                        </div>
                      </div>

                      {/* Solutions Scope */}
                      <div className="space-y-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/40 block">
                          {language === "en" ? "Potential Solutions & Capabilities:" : "Solusi & Kapabilitas:"}
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {ind.solutions.map((sol) => (
                            <div key={sol} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-white/75 font-light">
                              <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/[0.06]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-white/40 block">
                          {language === "en" ? "Field Applications:" : "Aplikasi di Lapangan:"}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {ind.useCases.slice(0, 2).map((uc) => (
                            <div key={uc.title} className="p-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors">
                              <div className="text-xs font-semibold text-slate-900 dark:text-white mb-0.5">
                                {uc.title}
                              </div>
                              <div className="text-[11px] text-slate-600 dark:text-white/50 font-light line-clamp-2">
                                {uc.detail}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Strip */}
                  <div className="p-5 sm:px-8 sm:py-5 border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-white/40">
                      {language === "en" ? "Implementation: 8-Phase Engineering" : "Implementasi: 8 Tahap Rekayasa Teknik"}
                    </span>

                    <Link
                      href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:text-black dark:bg-white dark:hover:bg-white/95 transition-all shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                    >
                      <span>{t("btn_consult_sector", "Konsultasikan Kebutuhan Sektor")}</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
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
