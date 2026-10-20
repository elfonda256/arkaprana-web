"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Server,
  Network,
  Database,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface UsecaseTab {
  id: string;
  tabLabel: string;
  code: string;
  targetRole: string;
  headline: string;
  bgImage: string;
  leftInputs: { title: string; subtitle: string; icon: React.ElementType }[];
  agentSteps: { num: string; title: string; desc: string; icon: React.ElementType }[];
  rightOutputs: { title: string; subtitle: string; icon: React.ElementType }[];
}

const USECASES_MAP: Record<"id" | "en", UsecaseTab[]> = {
  id: [
    {
      id: "retail",
      tabLabel: "Ritel & Rantai Pasok",
      code: "01 · RITEL & RANTAI PASOK · OTOMASI MULTI-CABANG",
      targetRole: "Untuk Head of IT · Manajer Regional · Operasional Toko",
      headline: "Tingkatkan efisiensi jaringan & operasional cabang tanpa henti setiap hari.",
      bgImage: "/images/usecase-retail.jpg",
      leftInputs: [
        {
          title: "SD-WAN Core",
          subtitle: "140 router cabang, link SLA",
          icon: Network,
        },
        {
          title: "Sensor In-Row DCIM",
          subtitle: "Suhu, PUE, UPS 2N",
          icon: Server,
        },
        {
          title: "Sinkronisasi ERP & POS",
          subtitle: "Log transaksi, antrean kasir",
          icon: Database,
        },
      ],
      agentSteps: [
        {
          num: "01",
          title: "Ingest & Validasi",
          desc: "Membaca telemetri serat optik real-time & memverifikasi zero-jitter.",
          icon: Layers,
        },
        {
          num: "02",
          title: "Prediksi & Scoring",
          desc: "Model AI mendeteksi anomali degradasi link sebelum toko buka.",
          icon: Cpu,
        },
        {
          num: "03",
          title: "Rencana & Mitigasi",
          desc: "Otomasi failover mandiri sub-18ms & enkripsi snapshot ke vault.",
          icon: ShieldCheck,
        },
      ],
      rightOutputs: [
        {
          title: "WhatsApp SLA Cabang",
          subtitle: "Laporan harian terkirim 07:00",
          icon: MessageSquare,
        },
        {
          title: "Peta Latensi Regional",
          subtitle: "Dashboard real-time Head of IT",
          icon: BarChart3,
        },
        {
          title: "Log Reroute Sub-18ms",
          subtitle: "Tercatat di vault audit trail",
          icon: CheckCircle2,
        },
      ],
    },
    {
      id: "telecom",
      tabLabel: "Telekomunikasi & Transit",
      code: "02 · TELEKOMUNIKASI & ISP · DWDM TRANSIT TULANG PUNGGUNG",
      targetRole: "Untuk VP Arsitektur Jaringan · Operasi Carrier · Lead NOC",
      headline: "Transmisi data optik multi-terabit dengan latensi terendah antar-kota.",
      bgImage: "/images/usecase-network.jpg",
      leftInputs: [
        {
          title: "Transponder Optik DWDM",
          subtitle: "8 node ring, 100G lambda",
          icon: Network,
        },
        {
          title: "Sesi Peering BGP",
          subtitle: "Netral operator multi-homed",
          icon: Server,
        },
        {
          title: "Monitoring Serat Optik",
          subtitle: "Atenuasi optik real-time OTDR",
          icon: Database,
        },
      ],
      agentSteps: [
        {
          num: "01",
          title: "Pemantauan Optik",
          desc: "Mendeteksi fluktuasi sinyal DWDM dengan presisi desibel optik.",
          icon: Layers,
        },
        {
          num: "02",
          title: "Anomali Jitter AI",
          desc: "Korelasikan degradasi kabel dengan anomali cuaca & rute fisik.",
          icon: Cpu,
        },
        {
          num: "03",
          title: "Pengalihan Jalur Mandiri",
          desc: "Pengalihan rute optik otomatis tanpa diskoneksi sesi BGP aktif.",
          icon: ShieldCheck,
        },
      ],
      rightOutputs: [
        {
          title: "Siaran Kritis NOC",
          subtitle: "Eskalasi instan tim Tier-3",
          icon: MessageSquare,
        },
        {
          title: "Matriks Kesehatan Backbone",
          subtitle: "Monitoring terpadu 24/7/365",
          icon: BarChart3,
        },
        {
          title: "Atenuasi Zero-Loss",
          subtitle: "SLA garansi 99.99% terpenuhi",
          icon: CheckCircle2,
        },
      ],
    },
    {
      id: "finance",
      tabLabel: "Perbankan & Finansial",
      code: "03 · PERBANKAN & KEUANGAN · PERTAHANAN ZERO-TRUST HSM",
      targetRole: "Untuk Chief Information Security Officer · Chief Risk Officer",
      headline: "Kedaulatan data finansial & brankas kriptografi FIPS 140-3 tanpa risiko kebocoran.",
      bgImage: "/images/usecase-datacenter.jpg",
      leftInputs: [
        {
          title: "Gateway API Core Banking",
          subtitle: "Perimeter zero-trust TLS 1.3",
          icon: Server,
        },
        {
          title: "Hardware Thales HSM",
          subtitle: "Brankas kunci enkripsi master",
          icon: ShieldCheck,
        },
        {
          title: "Telemetri SIEM & SOC",
          subtitle: "Autentikasi PAM berkelanjutan",
          icon: Database,
        },
      ],
      agentSteps: [
        {
          num: "01",
          title: "Audit Siklus Kunci",
          desc: "Memvalidasi seluruh 32 master kunci kriptografi secara air-gapped.",
          icon: Layers,
        },
        {
          num: "02",
          title: "Perilaku Zero-Trust",
          desc: "Menganalisis anomali akses database nasabah dengan AI terisolasi.",
          icon: Cpu,
        },
        {
          num: "03",
          title: "Penguncian Enclave",
          desc: "Mengunci sesi akses berisiko dan memicu isolasi segmen otomatis.",
          icon: ShieldCheck,
        },
      ],
      rightOutputs: [
        {
          title: "Hash Kepatuhan Audit",
          subtitle: "Sesuai regulasi BI & OJK",
          icon: MessageSquare,
        },
        {
          title: "Postur Zero-Trust",
          subtitle: "Status mikrosegmentasi 100%",
          icon: BarChart3,
        },
        {
          title: "Enclave Kunci Airgapped",
          subtitle: "Tanpa kebocoran telemetri eksternal",
          icon: CheckCircle2,
        },
      ],
    },
  ],
  en: [
    {
      id: "retail",
      tabLabel: "Retail & Supply Chain",
      code: "01 · RETAIL & SUPPLY CHAIN · MULTI-SITE AUTOMATION",
      targetRole: "For Head of IT · Regional Managers · Store Operations",
      headline: "Maximize branch network uptime and daily operations with zero manual friction.",
      bgImage: "/images/usecase-retail.jpg",
      leftInputs: [
        {
          title: "SD-WAN Core",
          subtitle: "140 branch routers, link SLA",
          icon: Network,
        },
        {
          title: "In-Row DCIM Sensors",
          subtitle: "Temperature, PUE, UPS 2N",
          icon: Server,
        },
        {
          title: "ERP & POS Sync",
          subtitle: "Transaction logs, queue status",
          icon: Database,
        },
      ],
      agentSteps: [
        {
          num: "01",
          title: "Ingest & Validate",
          desc: "Continuous optical telemetry monitoring with sub-millisecond precision.",
          icon: Layers,
        },
        {
          num: "02",
          title: "Forecast & Score",
          desc: "Predictive AI models detect link degradation before stores open.",
          icon: Cpu,
        },
        {
          num: "03",
          title: "Plan & Mitigate",
          desc: "Autonomous sub-18ms failover execution and vault encrypted snapshots.",
          icon: ShieldCheck,
        },
      ],
      rightOutputs: [
        {
          title: "Daily WhatsApp Briefing",
          subtitle: "Automated executive summary sent at 07:00",
          icon: MessageSquare,
        },
        {
          title: "Regional Latency Map",
          subtitle: "Live telemetry dashboard for Head of IT",
          icon: BarChart3,
        },
        {
          title: "Sub-18ms Reroute Log",
          subtitle: "Permanently stored in tamper-proof audit vault",
          icon: CheckCircle2,
        },
      ],
    },
    {
      id: "telecom",
      tabLabel: "Telecom & Optical Transit",
      code: "02 · TELECOM & ISP · HIGHWAY DWDM TRANSIT",
      targetRole: "For VP Network Architecture · Carrier Operations · NOC Leads",
      headline: "Multi-terabit optical data transit with guaranteed lowest inter-city latency.",
      bgImage: "/images/usecase-network.jpg",
      leftInputs: [
        {
          title: "DWDM Optical Transponders",
          subtitle: "8 ring nodes, 100G lambda",
          icon: Network,
        },
        {
          title: "BGP Peering Sessions",
          subtitle: "Carrier-neutral multi-homed",
          icon: Server,
        },
        {
          title: "Dark Fiber Monitoring",
          subtitle: "Real-time OTDR attenuation",
          icon: Database,
        },
      ],
      agentSteps: [
        {
          num: "01",
          title: "Optical Monitoring",
          desc: "Detect subtle optical power loss and decibel fluctuations instantly.",
          icon: Layers,
        },
        {
          num: "02",
          title: "AI Jitter Diagnostics",
          desc: "Correlate signal attenuation with environmental & physical route events.",
          icon: Cpu,
        },
        {
          num: "03",
          title: "Autonomous Path Shift",
          desc: "Instant non-disruptive optical rerouting maintaining active BGP sessions.",
          icon: ShieldCheck,
        },
      ],
      rightOutputs: [
        {
          title: "NOC Critical Broadcast",
          subtitle: "Automated sub-15min escalation to Tier-3 engineers",
          icon: MessageSquare,
        },
        {
          title: "Backbone Health Matrix",
          subtitle: "Unified 24/7/365 telemetry monitoring plane",
          icon: BarChart3,
        },
        {
          title: "Zero-Loss Attenuation",
          subtitle: "Statutory 99.99% availability SLA fulfillment",
          icon: CheckCircle2,
        },
      ],
    },
    {
      id: "finance",
      tabLabel: "Banking & Financial Services",
      code: "03 · BANKING & FINANCIAL · ZERO-TRUST HSM DEFENSE",
      targetRole: "For Chief Information Security Officer · Chief Risk Officer",
      headline: "Financial data sovereignty & FIPS 140-3 cryptography vaults with zero leakage risk.",
      bgImage: "/images/usecase-datacenter.jpg",
      leftInputs: [
        {
          title: "Core Banking API Gateway",
          subtitle: "TLS 1.3 Zero-Trust perimeter",
          icon: Server,
        },
        {
          title: "Thales HSM Hardware",
          subtitle: "Master encryption key vault",
          icon: ShieldCheck,
        },
        {
          title: "SIEM & SOC Telemetry",
          subtitle: "Continuous PAM authentication",
          icon: Database,
        },
      ],
      agentSteps: [
        {
          num: "01",
          title: "Key Lifecycle Audit",
          desc: "Air-gapped verification of all 32 cryptographic master keys.",
          icon: Layers,
        },
        {
          num: "02",
          title: "Zero-Trust Behavioral",
          desc: "Isolated AI models detect unauthorized account query anomalies.",
          icon: Cpu,
        },
        {
          num: "03",
          title: "Enclave Lockdown",
          desc: "Instant isolation of anomalous sessions with zero collateral downtime.",
          icon: ShieldCheck,
        },
      ],
      rightOutputs: [
        {
          title: "Compliance Audit Hash",
          subtitle: "Fully compliant with Indonesian Central Bank & OJK",
          icon: MessageSquare,
        },
        {
          title: "Zero-Trust Posture",
          subtitle: "100% microsegmented network topology",
          icon: BarChart3,
        },
        {
          title: "Airgapped Key Enclave",
          subtitle: "Zero outbound telemetry leakage",
          icon: CheckCircle2,
        },
      ],
    },
  ]
};

export default function NalarUsecasesSection() {
  const [selectedTabId, setSelectedTabId] = useState<string>("retail");
  const { t, language } = useLanguage();

  const usecases = USECASES_MAP[language] || USECASES_MAP.id;
  const activeUsecase =
    usecases.find((u) => u.id === selectedTabId) || usecases[0];

  return (
    <section id="use-cases" className="relative py-24 md:py-32 bg-[#FFFFFF] dark:bg-[#0B0F19] text-slate-900 dark:text-white overflow-hidden">
      
      {/* Background Ambient Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(2, 132, 199, 0.12) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED (Image 2) */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300/80 dark:border-white/10 bg-slate-100/90 dark:bg-white/[0.04] text-[11px] font-mono text-slate-700 dark:text-white/70 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase font-medium">
              {t("usecases_badge", "02 · DEPLOYMENT · ENTERPRISE USE CASES")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-[1.18] font-display">
            {t("usecases_title", "Skenario Nyata. Eksekusi Mandiri.")}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            {t(
              "usecases_desc",
              "Lihat bagaimana arsitektur agen terintegrasi Arkaprana mengolah sinyal telemetri mentah, menjalankan mitigasi otonom, dan melindungi kelangsungan bisnis Anda."
            )}
          </p>
        </div>

        {/* Centered Top Pill Tab Switcher (Exact replica of Nalarx Image 2) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/90 dark:bg-[#131B2E] border border-slate-200/90 dark:border-slate-700/60 backdrop-blur-xl max-w-full overflow-x-auto [scrollbar-width:none] shadow-xs">
            {usecases.map((tab) => {
              const isSelected = selectedTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTabId(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black font-semibold shadow-md scale-100"
                      : "text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Use Case Card with Cinematic Photograph (Replica of Image 2) */}
        <div className="relative rounded-[32px] overflow-hidden border border-slate-700/60 bg-[#131B2E] shadow-[0_30px_90px_rgba(0,0,0,0.6)] transition-all duration-500">
          
          {/* Photographic Background Image with Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            <Image
              src={activeUsecase.bgImage}
              alt={activeUsecase.headline}
              fill
              priority
              className="object-cover object-center brightness-90 transition-all duration-700 scale-105"
            />
            {/* Deep Cinematic Gradient Overlay for Maximum Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-[#090A0E]/85 to-[#090A0E]/50" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090A0E]/40 to-[#090A0E]/90" />
          </div>

          {/* Card Content Container */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-10">
            
            {/* Top Meta Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/15">
              <span className="font-mono text-[11px] text-white/60 tracking-wider uppercase">
                {activeUsecase.code}
              </span>
              <span className="font-mono text-[11px] text-[#38BDF8] tracking-wider uppercase">
                {activeUsecase.targetRole}
              </span>
            </div>

            {/* Headline in High-Craft Typography */}
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-[1.2] font-display">
                {activeUsecase.headline}
              </h3>
            </div>

            {/* Architecture Pipeline Workflow Diagram (Replica of Nalarx Image 2 Layout) */}
            <div className="pt-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                
                {/* Left Column: 3 Input Source Cards (Span 3) */}
                <div className="lg:col-span-3 space-y-3">
                  {activeUsecase.leftInputs.map((inp, idx) => {
                    const Icon = inp.icon;
                    return (
                      <div
                        key={inp.title}
                        className="p-3.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-between gap-3 shadow-md"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="size-8 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#38BDF8] shrink-0">
                            <Icon className="size-4" />
                          </div>
                          <div className="truncate">
                            <h4 className="text-xs font-semibold text-white truncate">
                              {inp.title}
                            </h4>
                            <p className="text-[10px] text-white/50 font-mono truncate">
                              {inp.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Visual Connector Dot */}
                        <div className="hidden lg:flex items-center justify-center">
                          <span className="size-2 rounded-full bg-[#38BDF8] animate-pulse" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Center Column: Glowing Agent Engine Container (Span 6, Matches Nalarx Orange Box in Image 2) */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#C2410C] to-[#9A3412] p-5 sm:p-6 shadow-[0_20px_50px_rgba(234,88,12,0.35)] border border-orange-400/40 text-white overflow-hidden">
                    
                    {/* Top Container Badge */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/20">
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/90">
                        {language === "en" ? "ARKAPRANA ENTERPRISE AGENTS" : "AGEN ENTERPRISE ARKAPRANA"}
                      </span>
                      <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-white/80">
                        <span className="size-1.5 rounded-full bg-white animate-ping" />
                        <span>{language === "en" ? "Autonomous Run" : "Eksekusi Mandiri"}</span>
                      </div>
                    </div>

                    {/* 3 Step Cards Inside Center Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeUsecase.agentSteps.map((step) => {
                        const StepIcon = step.icon;
                        return (
                          <div
                            key={step.num}
                            className="rounded-xl bg-black/30 border border-white/15 p-3.5 backdrop-blur-sm flex flex-col justify-between min-h-[140px]"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="size-6 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                <StepIcon className="size-3" />
                              </div>
                              <span className="font-mono text-[10px] font-bold text-white/60">
                                {step.num}
                              </span>
                            </div>

                            <div>
                              <h5 className="text-xs font-semibold text-white tracking-tight mb-1">
                                {step.title}
                              </h5>
                              <p className="text-[10px] text-white/80 leading-relaxed font-light">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>

                {/* Right Column: 3 Output Destinations (Span 3) */}
                <div className="lg:col-span-3 space-y-3">
                  {activeUsecase.rightOutputs.map((out, idx) => {
                    const OutIcon = out.icon;
                    return (
                      <div
                        key={out.title}
                        className="p-3.5 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-md flex items-center gap-3 shadow-md"
                      >
                        <div className="size-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <OutIcon className="size-4" />
                        </div>
                        <div className="truncate min-w-0">
                          <h4 className="text-xs font-semibold text-white truncate">
                            {out.title}
                          </h4>
                          <p className="text-[10px] text-emerald-400/80 font-mono truncate">
                            {out.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
