"use client";

import React from "react";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/data";
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

  return (
    <main className="flex-1 bg-[#08090D] text-white min-h-screen">
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
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.id}
              href={`#${s.slug}`}
              className="text-[11px] font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-[#38BDF8]/50 hover:bg-white/[0.09] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              {s.badge} {s.name}
            </Link>
          ))}
        </div>
      </NalarPageHeroAtmosphere>

      {/* 02. SOLUTIONS CARDS WITH NALAR-GRADE SPATIAL REFINEMENT & SCROLL ANIMATIONS */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {SOLUTIONS.map((sol, idx) => {
          const Icon = iconMap[sol.iconName] || Server;
          const isReversed = idx % 2 !== 0;

          return (
            <ScrollReveal key={sol.id} delayMs={idx * 60}>
              <div
                id={sol.slug}
                className="relative rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 shadow-2xl backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden group hover:-translate-y-1"
              >
                {/* Top Specular Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent pointer-events-none" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Scope & Overview (Span 7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 group-hover:scale-110 group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 shadow-inner">
                        <Icon className="size-7" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/20 font-semibold inline-block mb-1">
                          {sol.badge} · {sol.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight font-display">
                          {sol.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-white/90 font-medium font-serif leading-relaxed">
                      {sol.tagline}
                    </p>

                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Capabilities Checklist */}
                    <div className="pt-2">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                        {t("sol_scope_title", "Scope of Engineering Capabilities")}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-white/75">
                        {sol.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/15 hover:bg-white/[0.05] transition-colors"
                          >
                            <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="font-light">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/solutions/${sol.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                      >
                        <span>{t("btn_deep_dive", "Deep Dive Architecture")}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>

                      <Link
                        href={`/contact?solution=${encodeURIComponent(sol.name)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/65 hover:text-[#38BDF8] transition-colors py-2 group/btn"
                      >
                        <span>{t("btn_inquire_spec", "Inquire Specification")}</span>
                        <ChevronRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural Technical Specs (Span 5) */}
                  <div className="lg:col-span-5 rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-7 space-y-5 font-mono text-xs backdrop-blur-md relative overflow-hidden group-hover:border-[#38BDF8]/30 transition-all">
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-[#38BDF8] font-semibold">
                      <span className="flex items-center gap-2">
                        <Layers className="size-4" />
                        <span>{t("sol_tech_arch", "TECHNICAL ARCHITECTURE")}</span>
                      </span>
                      <span className="text-[10px] text-white/40">ENTERPRISE GRADE</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1.5">
                        {t("sol_arch_focus", "Core Architecture Focus")}
                      </span>
                      <p className="text-white/80 font-sans text-xs leading-relaxed font-light">
                        {sol.architectureFocus}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06]">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                        {t("sol_verified_deliverables", "Standard Verified Deliverables")}
                      </span>
                      <ul className="space-y-2 text-white/75 font-sans text-xs">
                        {sol.deliverables.map((del) => (
                          <li key={del} className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                            <span className="font-light">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/45">
                      <span>{t("sol_sla_guarantee", "Vendor Agnostic SLA")}</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                        99.99% Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* 03. CLOSING CTA BANNER WITH SCROLL REVEAL & MIST GLOW */}
      <ScrollReveal delayMs={100}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/10">
          <div className="rounded-3xl border border-white/10 bg-[#0C0E15] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-[#38BDF8]">
                <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>BESPOKE TOPOLOGY CONSULTATION</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight font-display">
                {language === "en"
                  ? "Need a Custom Topology for Your Organization?"
                  : "Butuh Topologi Khusus untuk Organisasi Anda?"}
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {language === "en"
                  ? "ARKAPRANA's principal engineering team conducts infrastructure audits, capacity simulations, and tailored architecture blueprints aligned with your operational SLAs."
                  : "Tim principal engineer ARKAPRANA siap melakukan audit infrastruktur, simulasi kapasitas, dan menyusun blueprint arsitektur yang disesuaikan dengan SLA operasional Anda."}
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
                >
                  <span>{t("btn_discuss_project", "Mulai Diskusi Proyek")}</span>
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
