"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  Shield,
  Bot,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  Server,
  Network,
  Loader2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FeatureCard {
  id: "analyze" | "delegate" | "functions" | "automate";
  tag: string;
  title: string;
  desc: string;
  userPrompt: string;
  agentResponse: string;
  badge: string;
  metrics: { label: string; value: string; positive?: boolean }[];
  actionLabel: string;
  agentThinkingText: string;
}

const FEATURES_MAP: Record<"id" | "en", FeatureCard[]> = {
  id: [
    {
      id: "analyze",
      tag: "Analisis",
      title: "Analisis telemetri & jaringan real-time",
      desc: "Tanyakan mengapa metrik berubah. Agen AI Arkaprana menemukan pemicunya, menjelaskan anomali, dan menyajikan data valid langsung dari router core.",
      userPrompt: "Cek latensi & anomali trafik backbone fiber Jakarta - Surabaya hari ini.",
      agentResponse: "Menganalisis 8 node DWDM dan 14 router BGP core. Latensi rata-rata stabil pada 3.18ms tanpa jitter signifikan. Tidak ada packet loss terdeteksi.",
      badge: "Telemetri Mesh Optik Terverifikasi",
      agentThinkingText: "Memindai 8 node DWDM & 14 router BGP...",
      metrics: [
        { label: "Latensi JKT-SBY", value: "3.18 ms", positive: true },
        { label: "Throughput Active", value: "94.2 Gbps", positive: true },
        { label: "Packet Loss", value: "0.00%", positive: true },
      ],
      actionLabel: "Unduh Laporan Telemetri (PDF)",
    },
    {
      id: "delegate",
      tag: "Delegasi",
      title: "Delegasikan tugas ke spesialis infrastruktur",
      desc: "Berikan tugas verifikasi backup, audit sertifikat, atau pembaruan konfigurasi. Setiap agen bekerja strictly dalam batasan izin dan audit trail.",
      userPrompt: "Jadwalkan audit sertifikat HSM dan backup snapshot konfigurasi router core.",
      agentResponse: "Tugas didelegasikan ke Security Agent. Audit HSM FIPS 140-3 selesai: semua 32 kunci valid. Backup snapshot konfigurasi berhasil dienkripsi di vault on-premise.",
      badge: "Brankas HSM Tersegel & Tersinkron",
      agentThinkingText: "Menghubungi HSM Enclave & memverifikasi hash kunci...",
      metrics: [
        { label: "Kunci HSM Terverifikasi", value: "32 / 32", positive: true },
        { label: "Zero-Trust State", value: "Active", positive: true },
        { label: "Audit Trail", value: "100% Logged", positive: true },
      ],
      actionLabel: "Verifikasi Audit Hash di Vault",
    },
    {
      id: "functions",
      tag: "Fungsi",
      title: "Terhubung ke seluruh ekosistem multi-vendor",
      desc: "Arkaprana menyatukan router Cisco/Juniper, hypervisor VMware/OpenStack, storage SAN, dan sensor DCIM ke dalam satu sistem kendali cerdas.",
      userPrompt: "Apakah ada modul daya atau suhu rak data center yang mendekati ambang batas?",
      agentResponse: "Memeriksa sensor DCIM di 4 koridor rak. Suhu rata-rata 21.4°C, PUE efisien di 1.31. Sistem pendingin in-row 2N beroperasi optimal tanpa hotspot.",
      badge: "Aliran Data Real-Time DCIM Tier-III",
      agentThinkingText: "Membaca 48 sensor termal & bus daya 2N DCIM...",
      metrics: [
        { label: "PUE Efficiency", value: "1.31 In-Row", positive: true },
        { label: "Rack Temp Avg", value: "21.4 °C", positive: true },
        { label: "Power Redundancy", value: "2N Active", positive: true },
      ],
      actionLabel: "Buka Telemetri DCIM Data Center",
    },
    {
      id: "automate",
      tag: "Otomasi",
      title: "Otomasi mitigasi & failover mandiri 24/7",
      desc: "Tentukan aturan failover cerdas. Sistem mendeteksi degradasi link dan me-reroute trafik dalam milidetik sebelum operasional bisnis Anda terganggu.",
      userPrompt: "Aktifkan auto-failover ke rute optik ring alternatif jika jitter melebihi 2ms.",
      agentResponse: "Aturan mitigasi aktif. Jika degradasi terdeteksi, trafik BGP dialihkan secara otomatis dalam <18ms melalui jalur proteksi redundant DWDM.",
      badge: "Pengalihan Rute Otonom Sub-18ms Siap",
      agentThinkingText: "Memprogram policy BGP rerouting sub-18ms...",
      metrics: [
        { label: "Failover Target", value: "< 18 ms", positive: true },
        { label: "SLA Guarantee", value: "99.982%", positive: true },
        { label: "Mitigation Mode", value: "Autonomous", positive: true },
      ],
      actionLabel: "Konfigurasi Parameter Failover",
    },
  ],
  en: [
    {
      id: "analyze",
      tag: "Analyze",
      title: "Real-time telemetry & network analytics",
      desc: "Ask why metrics moved. Arkaprana's AI agents pinpoint root causes, explain anomalies, and verify data straight from core routers.",
      userPrompt: "Check latency & traffic anomalies across Jakarta - Surabaya fiber backbone today.",
      agentResponse: "Analyzed 8 DWDM nodes and 14 core BGP routers. Average latency is rock-solid at 3.18ms with no significant jitter. Zero packet loss detected.",
      badge: "Optical Mesh Telemetry Verified",
      agentThinkingText: "Scanning 8 DWDM nodes & 14 BGP routers...",
      metrics: [
        { label: "JKT-SBY Latency", value: "3.18 ms", positive: true },
        { label: "Active Throughput", value: "94.2 Gbps", positive: true },
        { label: "Packet Loss", value: "0.00%", positive: true },
      ],
      actionLabel: "Download Telemetry Report (PDF)",
    },
    {
      id: "delegate",
      tag: "Delegate",
      title: "Delegate tasks to infrastructure specialists",
      desc: "Assign backup verifications, certificate audits, or configuration rollouts. Every agent operates strictly within policy boundaries and immutable audit trails.",
      userPrompt: "Schedule an HSM certificate audit and backup snapshot for core router configs.",
      agentResponse: "Task delegated to Security Agent. HSM FIPS 140-3 audit complete: all 32 keys valid. Configuration snapshot encrypted in on-premise vault.",
      badge: "HSM Vault Sealed & Synced",
      agentThinkingText: "Connecting to HSM Enclave & verifying key hashes...",
      metrics: [
        { label: "Verified HSM Keys", value: "32 / 32", positive: true },
        { label: "Zero-Trust State", value: "Active", positive: true },
        { label: "Audit Trail", value: "100% Logged", positive: true },
      ],
      actionLabel: "Verify Audit Hash in Vault",
    },
    {
      id: "functions",
      tag: "Functions",
      title: "Connect across heterogeneous multi-vendor ecosystems",
      desc: "Arkaprana unifies Cisco/Juniper routers, VMware/OpenStack hypervisors, SAN storage, and DCIM sensors into one sovereign command plane.",
      userPrompt: "Are any power modules or data center rack temperatures approaching thresholds?",
      agentResponse: "Inspecting DCIM sensors across 4 rack corridors. Average temp 21.4°C, PUE efficient at 1.31. 2N in-row cooling operating optimally with no hotspots.",
      badge: "DCIM Tier-III Real-Time Feeds",
      agentThinkingText: "Reading 48 thermal sensors & 2N DCIM power buses...",
      metrics: [
        { label: "PUE Efficiency", value: "1.31 In-Row", positive: true },
        { label: "Avg Rack Temp", value: "21.4 °C", positive: true },
        { label: "Power Redundancy", value: "2N Active", positive: true },
      ],
      actionLabel: "Open DCIM Data Center Telemetry",
    },
    {
      id: "automate",
      tag: "Automate",
      title: "24/7 autonomous mitigation & seamless failover",
      desc: "Define intelligent failover policies. The system detects link degradation and reroutes traffic in milliseconds before business operations are affected.",
      userPrompt: "Activate auto-failover to redundant ring route if jitter exceeds 2ms.",
      agentResponse: "Mitigation rule armed. Upon degradation, BGP traffic reroutes autonomously in <18ms across redundant DWDM protection links.",
      badge: "Sub-18ms Autonomous Reroute Ready",
      agentThinkingText: "Programming sub-18ms BGP reroute policy...",
      metrics: [
        { label: "Failover Target", value: "< 18 ms", positive: true },
        { label: "SLA Guarantee", value: "99.982%", positive: true },
        { label: "Mitigation Mode", value: "Autonomous", positive: true },
      ],
      actionLabel: "Configure Failover Parameters",
    },
  ]
};

export default function NalarProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<FeatureCard["id"]>("delegate");
  const { language, setLanguage, t } = useLanguage();
  const [actionDone, setActionDone] = useState(false);

  const features = FEATURES_MAP[language] || FEATURES_MAP.id;

  // Progressive step-by-step animation stage (0: reset, 1: user msg, 2: agent thinking, 3: agent bubble, 4: metrics, 5: button)
  const [animStep, setAnimStep] = useState(1);
  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  // Progressive staggered appearance sequence when tab changes
  useEffect(() => {
    setAnimStep(0);
    setActionDone(false);

    const t1 = setTimeout(() => setAnimStep(1), 120);   // User prompt appears
    const t2 = setTimeout(() => setAnimStep(2), 700);   // Thinking indicator
    const t3 = setTimeout(() => setAnimStep(3), 1600);  // Agent response bubble
    const t4 = setTimeout(() => setAnimStep(4), 2300);  // Metric cards
    const t5 = setTimeout(() => setAnimStep(5), 2900);  // Action CTA button

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [activeTab]);

  // Auto-cycle through tabs every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = features.findIndex((f) => f.id === prev);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [features]);

  const handleSelectTab = (id: FeatureCard["id"]) => {
    setActiveTab(id);
  };

  return (
    <section id="product-showcase" className="relative scroll-mt-24 px-4 sm:px-6 py-20 md:py-32 overflow-hidden bg-[#08090D]">
      
      {/* Background Section Header (Standardized Nalarx Eyebrow & Display Typography) */}
      <div className="max-w-4xl mx-auto text-center mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="tracking-widest uppercase">
            {t("showcase_badge", "01 · PLATFORM · COMMAND CONSOLE")}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.18] font-display">
          {t("showcase_title", "Satu Sistem Cerdas untuk Mengendalikan Seluruh Infrastruktur.")}
        </h2>
        <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          {t(
            "showcase_desc",
            "Bukan sekadar dashboard terpisah — Arkaprana terhubung langsung ke router core, modular data center, dan lingkungan cloud privat Anda."
          )}
        </p>
      </div>

      {/* Main Master Card Showcase Container */}
      <div className="relative mx-auto max-w-[1240px] rounded-3xl border border-white/10 bg-[#0E1017]/95 shadow-[0_30px_90px_rgba(0,0,0,0.7)] p-4 sm:p-8 lg:p-10 lg:min-h-[580px] backdrop-blur-2xl">
        
        {/* Background Liquid Gradient Glow with Grain/Noise */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl -z-10">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] opacity-40 blur-[80px]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.45) 0%, rgba(91, 167, 255, 0.25) 45%, rgba(14, 16, 23, 0) 70%)"
            }}
          />

          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "160px 160px",
            }}
          />
        </div>

        {/* Mobile Horizontal Feature Tab Bar */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {features.map((feat) => {
              const isSelected = activeTab === feat.id;
              return (
                <button
                  key={feat.id}
                  onClick={() => handleSelectTab(feat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-white text-black font-semibold shadow-md scale-105"
                      : "bg-white/[0.06] text-white/60 hover:text-white"
                  }`}
                >
                  {feat.tag}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-white/60 font-light leading-relaxed">
            {activeFeature.desc}
          </p>
        </div>

        {/* 3-Column Layout: Left Cards | Center Hardware Phone Mockup | Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Column (2 Feature Cards) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-5">
            {features.slice(0, 2).map((feat) => {
              const isSelected = activeTab === feat.id;
              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => handleSelectTab(feat.id)}
                  className={`relative isolate flex min-h-[160px] flex-col justify-center rounded-2xl p-6 text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                    isSelected
                      ? "border border-white/25 bg-white/[0.07] shadow-xl translate-x-1"
                      : "border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] opacity-70 hover:opacity-95"
                  }`}
                >
                  {isSelected && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 -z-10 rounded-2xl bg-white/[0.05] animate-nx-progress"
                    />
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#38BDF8]">
                      {feat.tag}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    )}
                  </div>
                  <h3 className={`font-display text-base font-medium leading-snug transition-colors ${
                    isSelected ? "text-white font-semibold" : "text-white/80"
                  }`}>
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/55 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Center Column: Realistic Hardware Phone Mockup with Staggered Interactive Chat (Span 4) */}
          <div className="lg:col-span-4 flex justify-center py-2 sm:py-0">
            <div className="relative mx-auto h-[530px] w-[290px] sm:w-[315px] transition-all">
              
              {/* Outer Phone Hardware Bezel (Metallic Titanium) */}
              <div className="relative h-full w-full rounded-[44px] bg-gradient-to-br from-[#d4d4d8] via-[#71717a] to-[#a1a1aa] p-[2.5px] shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
                
                {/* Physical Hardware Buttons on Left/Right */}
                <span aria-hidden="true" className="absolute top-[80px] -left-[4px] h-[26px] w-[3.5px] rounded-l bg-gradient-to-b from-[#a1a1aa] to-[#52525b]" />
                <span aria-hidden="true" className="absolute top-[120px] -left-[4px] h-[46px] w-[3.5px] rounded-l bg-gradient-to-b from-[#a1a1aa] to-[#52525b]" />
                <span aria-hidden="true" className="absolute top-[180px] -left-[4px] h-[46px] w-[3.5px] rounded-l bg-gradient-to-b from-[#a1a1aa] to-[#52525b]" />
                <span aria-hidden="true" className="absolute top-[140px] -right-[4px] h-[68px] w-[3.5px] rounded-r bg-gradient-to-b from-[#a1a1aa] to-[#52525b]" />

                {/* Inner Screen Case */}
                <div className="h-full w-full rounded-[41px] bg-[#090A0E] p-[3px] overflow-hidden flex flex-col">
                  
                  {/* Screen Content Wrapper */}
                  <div className="relative h-full w-full rounded-[37px] bg-[#10121A] overflow-hidden flex flex-col">
                    
                    {/* Top Status & Dynamic Island */}
                    <div className="pt-2 px-4 pb-2 flex items-center justify-between border-b border-white/[0.06] bg-[#0C0E14] z-20">
                      <div className="mx-auto flex h-[20px] w-[80px] items-center justify-end rounded-full bg-black pr-2">
                        <span className="h-[6px] w-[6px] rounded-full bg-[#1c2a45] ring-[1px] ring-[#0f1626]" />
                      </div>

                      {/* Language Selector Switcher */}
                      <div className="absolute right-3 top-2.5 flex h-[18px] items-center rounded-full border border-white/10 bg-white/[0.05] p-[1.5px]">
                        <button
                          type="button"
                          onClick={() => setLanguage("id")}
                          className={`flex h-full items-center rounded-full px-2 text-[8px] font-mono font-semibold uppercase transition-colors ${
                            language === "id" ? "bg-white text-black" : "text-white/40 hover:text-white"
                          }`}
                        >
                          ID
                        </button>
                        <button
                          type="button"
                          onClick={() => setLanguage("en")}
                          className={`flex h-full items-center rounded-full px-2 text-[8px] font-mono font-semibold uppercase transition-colors ${
                            language === "en" ? "bg-white text-black" : "text-white/40 hover:text-white"
                          }`}
                        >
                          EN
                        </button>
                      </div>
                    </div>

                    {/* Chat Header */}
                    <div className="flex items-center gap-2.5 px-3 py-2.5 bg-[#12141F] border-b border-white/[0.06]">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0284C7] text-white shadow-sm">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-white">
                          Arkaprana Sovereign Agent
                        </p>
                        <p className="truncate text-[9.5px] text-emerald-400 font-mono flex items-center gap-1">
                          <span className="size-1 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{language === "en" ? "Airgapped On-Premises" : "Airgapped On-Premise Terisolasi"}</span>
                        </p>
                      </div>
                    </div>

                    {/* Chat Stream Area with Progressive Step-by-Step Staggered Animation */}
                    <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 [scrollbar-width:none]">
                      
                      {/* Step 1: User Message Bubble (Slides up at 120ms) */}
                      <div
                        className={`flex justify-end transition-all duration-500 ease-out ${
                          animStep >= 1
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        <div className="max-w-[85%] rounded-2xl rounded-tr-xs bg-white text-black px-3 py-2 shadow-sm">
                          <p className="text-[11px] leading-relaxed font-medium">
                            {activeFeature.userPrompt}
                          </p>
                          <span className="block text-[8.5px] text-black/50 text-right mt-0.5">
                            {language === "en" ? "Just now · Operator" : "Baru saja · Operator"}
                          </span>
                        </div>
                      </div>

                      {/* Step 2: Agent Thinking State (Shows at 700ms, hides at 1600ms) */}
                      {animStep === 2 && (
                        <div className="flex justify-start animate-fade-in">
                          <div className="rounded-xl bg-white/[0.06] border border-white/10 px-2.5 py-1.5 flex items-center gap-2 text-[10px] font-mono text-[#38BDF8]">
                            <Loader2 className="size-3 animate-spin text-[#38BDF8]" />
                            <span className="animate-pulse">{activeFeature.agentThinkingText}</span>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Agent Response Card (Slides up at 1600ms) */}
                      <div
                        className={`flex justify-start transition-all duration-600 ease-out ${
                          animStep >= 3
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6 pointer-events-none"
                        }`}
                      >
                        <div className="max-w-[92%] rounded-2xl rounded-tl-xs bg-[#1A1D2A] border border-white/10 px-3 py-2.5 space-y-2.5 shadow-md">
                          
                          {/* Verification Signal */}
                          <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#38BDF8]">
                            <CheckCircle2 className="size-3 text-[#38BDF8]" />
                            <span>{activeFeature.badge}</span>
                          </div>

                          <p className="text-[11px] text-white/90 leading-relaxed font-light">
                            {activeFeature.agentResponse}
                          </p>

                          {/* Step 4: Live Metrics Grid inside phone (Staggers in at 2300ms) */}
                          <div
                            className={`grid grid-cols-3 gap-1.5 pt-1 transition-all duration-500 ${
                              animStep >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                          >
                            {activeFeature.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="rounded-lg bg-white/[0.04] p-1.5 border border-white/[0.06] text-center"
                              >
                                <div className="text-[7.5px] font-mono text-white/40 truncate">
                                  {m.label}
                                </div>
                                <div className="text-[10px] font-mono font-bold text-white mt-0.5">
                                  {m.value}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Step 5: Action Button (Reveals at 2900ms) */}
                          <div
                            className={`transition-all duration-500 ${
                              animStep >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => setActionDone(true)}
                              className={`w-full py-1.5 px-2 rounded-lg text-[9.5px] font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                                actionDone
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                                  : "bg-white/10 text-white hover:bg-white/15 border border-white/15 shadow-sm"
                              }`}
                            >
                              {actionDone ? (
                                <>
                                  <CheckCircle2 className="size-3 text-emerald-400" />
                                  <span>{language === "en" ? "Action Verified in Vault" : "Tindakan Berhasil Diverifikasi"}</span>
                                </>
                              ) : (
                                <>
                                  <span>{activeFeature.actionLabel}</span>
                                  <ArrowRight className="size-2.5" />
                                </>
                              )}
                            </button>
                          </div>

                        </div>
                      </div>

                    </div>

                    {/* Bottom Input Preview Bar */}
                    <div className="p-2 border-t border-white/[0.06] bg-[#0E1017] flex items-center gap-2">
                      <div className="flex-1 rounded-full bg-white/[0.06] px-3 py-1.5 text-[9.5px] text-white/40 font-mono">
                        {language === "en" ? "Ask infrastructure telemetry query..." : "Tanyakan telemetri infrastruktur..."}
                      </div>
                      <div className="size-6 rounded-full bg-[#38BDF8] flex items-center justify-center text-black shadow-sm">
                        <Zap className="size-3 fill-black" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (2 Feature Cards) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-5">
            {features.slice(2, 4).map((feat) => {
              const isSelected = activeTab === feat.id;
              return (
                <button
                  key={feat.id}
                  type="button"
                  onClick={() => handleSelectTab(feat.id)}
                  className={`relative isolate flex min-h-[160px] flex-col justify-center rounded-2xl p-6 text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                    isSelected
                      ? "border border-white/25 bg-white/[0.07] shadow-xl translate-x-1"
                      : "border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] opacity-70 hover:opacity-95"
                  }`}
                >
                  {isSelected && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 -z-10 rounded-2xl bg-white/[0.05] animate-nx-progress"
                    />
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#38BDF8]">
                      {feat.tag}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    )}
                  </div>
                  <h3 className={`font-display text-base font-medium leading-snug transition-colors ${
                    isSelected ? "text-white font-semibold" : "text-white/80"
                  }`}>
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/55 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
