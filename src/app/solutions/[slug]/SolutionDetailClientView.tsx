"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocalizedSolutionBySlug } from "@/lib/i18nData";
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
  ChevronLeft,
  ShieldAlert,
  MessageSquare,
  LifeBuoy
} from "lucide-react";
import NalarWaveOrbits from "@/components/decorative/NalarWaveOrbits";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
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

const HOW_IT_WORKS_STEPS = {
  id: [
    { step: "01", name: "Assess", desc: "Audit menyeluruh terhadap kondisi fisik, kapasitas, dan beban kerja eksisting." },
    { step: "02", name: "Design", desc: "Penyusunan blueprint arsitektur terinci dengan simulasi kapasitas dan redundansi." },
    { step: "03", name: "Procure", desc: "Pengadaan perangkat keras resmi bergaransi distributor resmi Indonesia." },
    { step: "04", name: "Deploy", desc: "Instalasi fisik, penarikan kabel, konfigurasi sistem, dan pengujian standar." },
    { step: "05", name: "Integrate", desc: "Harmonisasi protokol, sinkronisasi API antar-vendor, dan uji penerimaan (UAT)." },
    { step: "06", name: "Support", desc: "Dukungan operasional berkelanjutan, pemantauan telemetri 24/7, dan garansi SLA." }
  ],
  en: [
    { step: "01", name: "Assess", desc: "Comprehensive audit of physical facilities, loads, and legacy bottlenecks." },
    { step: "02", name: "Design", desc: "Detailed architectural blueprint engineering with capacity and SLA simulations." },
    { step: "03", name: "Procure", desc: "Sourcing certified genuine hardware through authorized Indonesian distributors." },
    { step: "04", name: "Deploy", desc: "Physical installation, certified cabling, system hardening, and testing." },
    { step: "05", name: "Integrate", desc: "Multi-vendor protocol alignment, API telemetry synchronization, and formal UAT." },
    { step: "06", name: "Support", desc: "24/7/365 operational management, NOC telemetry monitoring, and SLA guarantees." }
  ]
};

interface SolutionDetailClientViewProps {
  slug: string;
}

export default function SolutionDetailClientView({ slug }: SolutionDetailClientViewProps) {
  const { language, t } = useLanguage();
  const sol = getLocalizedSolutionBySlug(slug, language) || getLocalizedSolutionBySlug(slug, "id");

  if (!sol) {
    notFound();
  }

  const Icon = iconMap[sol.iconName] || Server;
  const howItWorks = HOW_IT_WORKS_STEPS[language] || HOW_IT_WORKS_STEPS.id;

  return (
    <div className="min-h-screen bg-[#08090D] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Responsive Waveforms, Orbits & Drifting Mist */}
      <NalarWaveOrbits />

      {/* Subtle Coordinate Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="size-3.5 text-[#38BDF8]" />
            <span>{t("btn_back_solutions", "Kembali ke Seluruh Solusi")}</span>
          </Link>
        </div>

        {/* 01. HERO WITH CENTERED DISPLAY */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>{sol.badge} · {sol.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.12] font-display">
            {sol.name}
          </h1>

          <div className="text-xl sm:text-2xl font-serif italic text-white/80 max-w-2xl mx-auto">
            &ldquo;{sol.headlineQuote}&rdquo;
          </div>

          <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            {sol.description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?solution=${encodeURIComponent(sol.name)}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
            >
              <span>{language === "en" ? "Consult Topology" : "Konsultasikan Topologi"}</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href={
                language === "en"
                  ? `https://wa.me/62816997963?text=Hello%20ARKAPRANA,%20I%20would%20like%20to%20consult%20directly%20with%20an%20engineer%20regarding%20${encodeURIComponent(sol.name)}`
                  : `https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berkonsultasi%20langsung%20dengan%20engineer%20mengenai%20${encodeURIComponent(sol.name)}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <MessageSquare className="size-3.5 text-emerald-400" />
              <span>{language === "en" ? "Direct WhatsApp Desk" : "Meja WhatsApp Langsung"}</span>
            </a>
          </div>
        </div>

        {/* 02. THE CHALLENGE & WHAT WE BUILD */}
        <ScrollReveal delayMs={50}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* THE CHALLENGE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0F18]/90 border border-red-500/25 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider">
                <ShieldAlert className="size-4" />
                <span>{language === "en" ? "THE CHALLENGE" : "TANTANGAN OPERASIONAL"}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-light text-white font-display">
                {language === "en" ? "Operational Bottlenecks Addressed" : "Tantangan Operasional yang Dihadapi"}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                {sol.problem}
              </p>
            </div>

            {/* WHAT WE BUILD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0F18]/90 border border-[#38BDF8]/30 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-xs uppercase tracking-wider">
                <CheckCircle2 className="size-4" />
                <span>{language === "en" ? "WHAT WE BUILD" : "REKAYASA ARSITEKTUR"}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-light text-white font-display">
                {language === "en" ? "Unified Architectural Engineering" : "Rekayasa Solusi Terpadu"}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                {sol.solutionStatement}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 03. HOW IT WORKS */}
        <ScrollReveal delayMs={60}>
          <div className="mb-24">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-3 flex flex-col items-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] px-3 py-1 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10">
                {language === "en" ? "Delivery Methodology" : "Metodologi Eksekusi"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white font-display tracking-tight">
                {language === "en" ? "Systematic Execution Lifecycle" : "Siklus Eksekusi Sistematis"}
              </h2>
              <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light">
                {language === "en"
                  ? "From initial physical assessment to complete integration and long-term availability SLAs."
                  : "Dari asesmen fisik awal hingga integrasi penuh dan jaminan ketersediaan operasional jangka panjang."}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {howItWorks.map((hw) => (
                <div
                  key={hw.step}
                  className="p-5 rounded-2xl bg-[#0D0F18]/90 border border-white/10 flex flex-col justify-between space-y-3 shadow-lg hover:border-[#38BDF8]/40 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#38BDF8] block mb-1">
                      PHASE {hw.step}
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      {hw.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-white/50 leading-relaxed font-light">
                    {hw.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 04. CAPABILITIES */}
        <ScrollReveal delayMs={70}>
          <div className="mb-24">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-3 flex flex-col items-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] px-3 py-1 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10">
                {language === "en" ? "Integrated Capabilities" : "Kapabilitas Terintegrasi"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white font-display tracking-tight">
                {language === "en" ? "Specific Engineering Modules" : "Modul Rekayasa Spesifik"}
              </h2>
              <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light">
                {language === "en"
                  ? `Technical engineering modules integrated within the ${sol.name} domain.`
                  : `Spesifikasi modul teknis yang terintegrasi di dalam domain ${sol.name}.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sol.capabilities.map((cap, idx) => (
                <div
                  key={cap}
                  className="p-5 rounded-2xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-colors flex items-start gap-3.5 shadow-lg"
                >
                  <div className="size-7 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/25 flex items-center justify-center text-[#38BDF8] text-xs font-mono font-semibold shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/85 leading-snug">
                    {cap}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 05. TECHNOLOGY SPECS BOX */}
        <ScrollReveal delayMs={80}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0F18]/90 border border-white/10 shadow-2xl mb-24 relative overflow-hidden backdrop-blur-xl">
            <div className="max-w-3xl mb-10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8]">
                {language === "en" ? "Architectural Specifications" : "Spesifikasi Arsitektur"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white font-display">
                {language === "en" ? "Technical Specs & Redundancy" : "Spesifikasi Teknis & Redundansi"}
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                {sol.architectureFocus}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  Topology Fabric
                </span>
                <p className="text-xs font-mono text-white">
                  {sol.architectureDetails.topology}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  Protocols
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {sol.architectureDetails.protocols.map((p) => (
                    <span key={p} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-[#38BDF8]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  Security Tier
                </span>
                <p className="text-xs font-mono text-white">
                  {sol.architectureDetails.securityTier}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  Redundancy Model
                </span>
                <p className="text-xs font-mono text-emerald-400 font-semibold">
                  {sol.architectureDetails.redundancy}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 06. ONGOING SUPPORT & SLA */}
        <ScrollReveal delayMs={90}>
          <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#0D0F18]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
                  <LifeBuoy className="size-4" />
                  <span>{language === "en" ? "ONGOING SUPPORT & SLA" : "DUKUNGAN & JAMINAN SLA"}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white font-display">
                  {language === "en" ? "Continuous 24/7 Operational Management" : "Dukungan Operasional Berkelanjutan 24/7"}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {language === "en"
                    ? "Every deployment is backed by certified NOC/SOC engineers with 24/7 real-time telemetry, 99.99% availability SLAs, and sub-15 minute critical incident response."
                    : "Seluruh implementasi didukung oleh tim Network & Security Operations Center (NOC/SOC) dengan pemantauan telemetri waktu nyata, jaminan SLA ketersediaan 99.99%, pembaruan berkala, dan penanganan eskalasi cepat di bawah 15 menit."}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white/50">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>{language === "en" ? "24/7 Proactive Monitoring" : "Pemantauan Proaktif 24/7"}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-white/80">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>{language === "en" ? "SLA Contract 99.99%" : "Kontrak SLA 99.99%"}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-white/80">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    <span>{language === "en" ? "Quarterly Architecture Review" : "Tinjauan Arsitektur Berkala"}</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href={`/contact?solution=${encodeURIComponent(sol.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
                >
                  <span>{language === "en" ? "Initiate Consultation" : "Mulai Konsultasi"}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href={
                    language === "en"
                      ? `https://wa.me/62816997963?text=Hello%20ARKAPRANA,%20I%20would%20like%20to%20consult%20with%20an%20engineer%20regarding%20${encodeURIComponent(sol.name)}`
                      : `https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berkonsultasi%20dengan%20engineer%20mengenai%20${encodeURIComponent(sol.name)}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
                >
                  <MessageSquare className="size-3.5 text-emerald-400" />
                  <span>{language === "en" ? "Talk to an Engineer" : "Bicara dengan Engineer"}</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* MONUMENTAL NALAR ORBITAL CTA SECTION */}
      <ScrollReveal delayMs={80}>
        <NalarOrbitalCtaSection />
      </ScrollReveal>
    </div>
  );
}
