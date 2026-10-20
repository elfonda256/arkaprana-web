"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertOctagon,
  CheckCircle2,
  Server,
  Network,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  ArrowUpRight,
  TrendingDown,
  Flame
} from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

interface DiagnosticCase {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  fragmented: {
    title: string;
    scenario: string;
    symptoms: string[];
    riskLevel: string;
    costImpact: string;
  };
  arkaprana: {
    title: string;
    architecture: string;
    mechanisms: string[];
    slaGuarantee: string;
    gainMetric: string;
  };
}

const DIAGNOSTIC_CASES_MAP: Record<Language, DiagnosticCase[]> = {
  id: [
    {
      id: "outages",
      tag: "01 // ESKALASI INSIDEN & SLA",
      title: "Saling Lempar Tanggung Jawab Multi-Vendor vs. Akuntabilitas Tunggal",
      subtitle: "Ketika insiden P1 terjadi, waktu terbuang untuk membuktikan vendor mana yang bersalah sementara bisnis kehilangan ratusan juta rupiah per jam.",
      fragmented: {
        title: "Labirin Fragmentasi Multi-Vendor",
        scenario: "ISP mengklaim lonjakan latensi berasal dari core switch internal. Vendor switch menyalahkan OS virtualisasi hypervisor. Tim database melihat locked transaction. Tidak ada vendor yang bertanggung jawab terhadap hasil akhir operasional.",
        symptoms: [
          "Rata-rata MTTR membengkak hingga 4.8 jam per insiden",
          "5+ kontrak vendor terpisah dengan jalur eskalasi berbeda",
          "Audit post-mortem tanpa kesimpulan akar masalah pasti"
        ],
        riskLevel: "RISIKO OPERASIONAL KRITIS",
        costImpact: "Estimasi kerugian downtime: Rp 120jt - 450jt / jam"
      },
      arkaprana: {
        title: "Disiplin Rekayasa Terpadu ARKAPRANA",
        architecture: "Satu arsitektur terintegrasi penuh dari serat optik fisik Layer 1 hingga routing aplikasi Layer 7. Satu kontrak, satu titik kontak rekayasa, dan satu jaminan SLA komprehensif.",
        mechanisms: [
          "Korelasi telemetri otomatis lintas lapisan & pemulihan mandiri",
          "Dedicated 24/7/365 Jakarta NOC dengan respon insiden <15 menit",
          "Akuntabilitas rekayasa tunggal dengan jaminan SLA 99.98%"
        ],
        slaGuarantee: "SLA KETERSEDIAAN 99.98% / MTTR < 15 MENIT",
        gainMetric: "MTTR: 4.8 Jam ➔ 14 Menit (-95% Downtime)"
      }
    },
    {
      id: "sovereignty",
      tag: "02 // KEDAULATAN DATA & SHADOW AI",
      title: "Celah Kepatuhan Publik vs. AI Berdaulat Air-Gapped",
      subtitle: "Mengirimkan data korporat ke API cloud publik pihak ketiga melanggar regulasi domestik dan membuka celah kebocoran kekayaan intelektual.",
      fragmented: {
        title: "Egress Cloud Publik & Paparan Kepatuhan",
        scenario: "Departemen internal mengadopsi model AI publik tanpa pengawasan tim IT. Dokumen finansial, data nasabah, dan rahasia dagang terunggah ke server cloud luar negeri, melanggar ketentuan UU PDP 2024 dan regulasi OJK.",
        symptoms: [
          "Celah kebocoran data sensitif ke server publik asing",
          "Ancaman denda regulasi UU PDP hingga 2% dari pendapatan tahunan",
          "Biaya egress cloud publik yang membengkak tanpa kendali"
        ],
        riskLevel: "RISIKO REGULASI & HUKUM TINGGI",
        costImpact: "Potensi sanksi UU PDP & kerugian reputasi tak terukur"
      },
      arkaprana: {
        title: "Kecerdasan On-Premise Berdaulat Air-Gapped",
        architecture: "Infrastruktur Private LLM & Enterprise RAG yang dijalankan 100% di dalam data center Anda atau private cloud domestik Indonesia dengan enkripsi FIPS 140-3 HSM.",
        mechanisms: [
          "Batasan data tanpa egress 100%: data tidak pernah meninggalkan jaringan lokal",
          "Sepenuhnya patuh amanat UU PDP No. 27/2022 dan regulasi BI / OJK",
          "Dedicated on-premise GPU clusters (vLLM / TensorRT) dengan latensi sub-50ms"
        ],
        slaGuarantee: "100% KEDAULATAN DOMESTIK / ZERO DATA EGRESS",
        gainMetric: "Paparan Data: Tak Terkendali ➔ 0% Tanpa Egress"
      }
    },
    {
      id: "cabling",
      tag: "03 // KEKUSUTAN FISIK & LATENSI",
      title: "Kabel Tambal Sulam vs. Kain Spine-Leaf Redaman Rendah",
      subtitle: "Kabel kusut, redaman optik tinggi, dan ketiadaan jalur proteksi redundan menciptakan titik kegagalan tunggal tersembunyi di ruang server.",
      fragmented: {
        title: "Pengkabelan Ad-Hoc & Single Point of Failure (SPOF)",
        scenario: "Kabel fiber dan copper dipasang secara bertahap tanpa dokumentasi port yang rapi. Tidak ada pengujian OTDR berkala. Kerusakan satu link backbone memicu cascading failure pada seluruh cabang operasional.",
        symptoms: [
          "Packet loss sporadis dan jitter mikro yang merusak transaksi database",
          "Rack server berantakan menghambat sirkulasi pendingin (hotspots)",
          "Waktu troubleshooting kabel memakan waktu berjam-jam saat pemadaman"
        ],
        riskLevel: "KERENTANAN FISIK TERSEMBUNYI",
        costImpact: "Kerusakan hardware akibat panas berlebih & bottleneck jaringan"
      },
      arkaprana: {
        title: "Arsitektur Fisik Bersertifikasi TIA-942",
        architecture: "Pemasangan kabel terstruktur berstandar industri dengan pengujian Fluke DSX-8000, redundansi N+1, topologi Spine-Leaf non-blocking, dan modul pendinginan presisi InRow.",
        mechanisms: [
          "Fluke-certified 100% pass rate untuk kabel serat optik dan Cat6A/7",
          "Dual-homed BGP & redundant path routing tanpa single point of failure",
          "Clean rack dressing & color-coded cable hierarchy dengan skema visual lengkap"
        ],
        slaGuarantee: "PATUH TIA-942 TIER-3+ / TOPOLOGI ZERO-SPOF",
        gainMetric: "Packet Loss: 2.4% Tidak Stabil ➔ <0.01% SLA Redaman Rendah"
      }
    }
  ],
  en: [
    {
      id: "outages",
      tag: "01 // INCIDENT ESCALATION & SLA",
      title: "Multi-Vendor Finger-Pointing vs. Single Accountability",
      subtitle: "When P1 incidents occur, hours are lost proving which vendor is at fault while the business hemorrhages revenue every hour.",
      fragmented: {
        title: "The Multi-Vendor Fragmentation Maze",
        scenario: "ISP claims latency spikes originate from internal core switches. Switch vendor blames hypervisor OS. Database team sees locked transactions. No vendor assumes end-to-end accountability.",
        symptoms: [
          "Average MTTR balloons to 4.8 hours per critical outage",
          "5+ disparate vendor contracts with misaligned escalation chains",
          "Post-mortem audits without definitive root cause identification"
        ],
        riskLevel: "CRITICAL OPERATIONAL RISK",
        costImpact: "Estimated downtime cost: $8,000 - $30,000 / hour"
      },
      arkaprana: {
        title: "ARKAPRANA Unified Engineering Discipline",
        architecture: "One fully integrated architecture spanning Layer 1 physical fiber to Layer 7 application routing. Single contract, dedicated engineering contact, and comprehensive SLA.",
        mechanisms: [
          "Automated cross-layer telemetry correlation & self-healing",
          "Dedicated 24/7/365 Jakarta NOC with sub-15 minute response",
          "Single-throat-to-choke accountability backed by 99.98% SLA"
        ],
        slaGuarantee: "SLA AVAILABILITY 99.98% / MTTR < 15 MIN",
        gainMetric: "MTTR: 4.8 Hours ➔ 14 Minutes (-95% Downtime)"
      }
    },
    {
      id: "sovereignty",
      tag: "02 // DATA SOVEREIGNTY & SHADOW AI",
      title: "Compliance Blindspots vs. Air-Gapped Sovereign AI",
      subtitle: "Streaming proprietary corporate data to public cloud APIs violates domestic regulations and exposes intellectual property.",
      fragmented: {
        title: "Public Cloud Egress & Compliance Exposure",
        scenario: "Internal departments adopt public AI tools without IT governance. Financial statements, customer records, and trade secrets are uploaded to foreign cloud nodes, violating domestic privacy laws.",
        symptoms: [
          "Sensitive data leakage risks to overseas public servers",
          "Regulatory fines of up to 2% annual revenue under PDP legislation",
          "Uncontrolled cloud egress and recurring token API surcharges"
        ],
        riskLevel: "HIGH REGULATORY & LEGAL RISK",
        costImpact: "Severe regulatory penalties and unquantifiable reputational harm"
      },
      arkaprana: {
        title: "Air-Gapped Sovereign On-Premise Intelligence",
        architecture: "Private LLM and Enterprise RAG clusters deployed 100% inside client-owned facilities or sovereign domestic nodes with FIPS 140-3 HSM encryption.",
        mechanisms: [
          "100% zero-egress data boundary: data never traverses public networks",
          "Strict compliance with Indonesian PDP Law No. 27/2022 and BI/OJK guidelines",
          "Dedicated on-premise GPU clusters (vLLM / TensorRT) delivering sub-50ms latency"
        ],
        slaGuarantee: "100% DOMESTIC SOVEREIGNTY / ZERO DATA EGRESS",
        gainMetric: "Data Exposure: Uncontrolled ➔ 0% Zero Egress"
      }
    },
    {
      id: "cabling",
      tag: "03 // PHYSICAL SPRAWL & LATENCY",
      title: "Uncertified Patchwork vs. Spine-Leaf Low-Loss Fabric",
      subtitle: "Tangled patch cables, high optical attenuation, and uncertified links introduce hidden single points of failure inside server rooms.",
      fragmented: {
        title: "Ad-Hoc Cabling & Single Point of Failure (SPOF)",
        scenario: "Fiber and copper runs installed incrementally without rigorous port labeling. Lack of periodic OTDR calibration leads to cascading branch outages when one backbone link fails.",
        symptoms: [
          "Sporadic packet loss and micro-jitter disrupting transactional databases",
          "Messy server racks obstructing airflow causing thermal hotspots",
          "Hours wasted tracing unlabeled patch cords during critical downtime"
        ],
        riskLevel: "HIDDEN PHYSICAL VULNERABILITY",
        costImpact: "Hardware degradation from thermal hotspots and bandwidth throttling"
      },
      arkaprana: {
        title: "Certified TIA-942 Physical Architecture",
        architecture: "Structured cabling engineered to TIA-942 Tier-3+ standards with Fluke DSX-8000 validation, N+1 redundancy, non-blocking Spine-Leaf topology, and InRow cooling.",
        mechanisms: [
          "Fluke-certified 100% pass rate for optical fiber and Cat6A/7 runs",
          "Dual-homed BGP and redundant routing eliminating single points of failure",
          "Pristine rack dressing with color-coded cable hierarchies and topological mapping"
        ],
        slaGuarantee: "TIA-942 TIER-3+ COMPLIANT / ZERO-SPOF TOPOLOGY",
        gainMetric: "Packet Loss: 2.4% Unstable ➔ <0.01% Low-Loss SLA"
      }
    }
  ]
};

const UNIFIED_PILLARS_MAP: Record<Language, { step: string; name: string; detail: string; icon: React.ElementType }[]> = {
  id: [
    { step: "01", name: "Data Center Fisik", detail: "Rak TIA-942 Tier-3+, pendingin InRow, distribusi daya dual-path", icon: Server },
    { step: "02", name: "Optik & SD-WAN", detail: "BGP carrier-neutral, mesh latensi ultra-rendah, serat optik teruji", icon: Network },
    { step: "03", name: "Cloud Berdaulat", detail: "Virtualisasi on-premise, batasan zero-egress, private cloud domestik", icon: Cloud },
    { step: "04", name: "Pertahanan Zero-Trust", detail: "Modul keamanan hardware, mikrosegmentasi, telemetri SOC 24/7", icon: ShieldCheck },
    { step: "05", name: "AI Mandiri Berdaulat", detail: "Enterprise RAG, serving LLM lokal di GPU privat, proteksi kebocoran data", icon: BrainCircuit }
  ],
  en: [
    { step: "01", name: "Physical Datacenter", detail: "TIA-942 Tier-3+ racks, InRow cooling, dual-path power distribution", icon: Server },
    { step: "02", name: "Optical & SD-WAN", detail: "Carrier-neutral BGP, ultra-low latency mesh, certified low-loss fiber", icon: Network },
    { step: "03", name: "Sovereign Cloud", detail: "On-premise virtualization, zero-egress boundary, domestic private cloud", icon: Cloud },
    { step: "04", name: "Zero-Trust Defense", detail: "Hardware security modules, microsegmentation, 24/7 SOC telemetry", icon: ShieldCheck },
    { step: "05", name: "Autonomous Private AI", detail: "Enterprise RAG, private LLM serving on local GPUs, zero public data leak", icon: BrainCircuit }
  ]
};

export default function BusinessProblemSection() {
  const { language, t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<string>("outages");

  const diagnosticCases = DIAGNOSTIC_CASES_MAP[language] || DIAGNOSTIC_CASES_MAP.id;
  const activeCase = diagnosticCases.find((c) => c.id === activeTabId) || diagnosticCases[0];
  const unifiedPillars = UNIFIED_PILLARS_MAP[language] || UNIFIED_PILLARS_MAP.id;

  return (
    <section className="relative py-24 sm:py-32 bg-[var(--bg-secondary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standardized Nalarx Eyebrow & Display Headline: CENTERED AS REQUESTED */}
        <div className="max-w-4xl mx-auto text-center mb-14 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-[11px] font-mono text-slate-700 dark:text-white/70 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">{t("friction_badge", "04 · DIAGNOSTIC · MULTI-VENDOR FRICTION")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-[var(--text-primary)] tracking-tight leading-[1.18] font-display">
            {t("friction_title", "Ketika Sistem Berjalan Terisolasi, Downtime Menjadi Hal yang Tak Terhindarkan.")}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl mx-auto">
            {t("friction_desc", "Pertumbuhan organisasi sering kali mewariskan tumpukan teknologi dari belasan vendor berbeda. Tanpa satu arsitektur terpadu, setiap pembaruan menimbulkan celah keamanan, latensi tersembunyi, dan saling lempar tanggung jawab.")}
          </p>
        </div>

        {/* Diagnostic Dimension Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-10 shadow-xs">
          {diagnosticCases.map((item) => {
            const isSelected = item.id === activeTabId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTabId(item.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer btn-tactile ${
                  isSelected
                    ? "bg-[var(--bg-secondary)] border border-[var(--accent)] text-[var(--text-primary)] shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono tracking-wider ${isSelected ? "text-[var(--accent)] font-semibold" : "text-[var(--text-muted)]"}`}>
                    {item.tag}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />}
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-tight truncate">
                  {item.title.split(" vs. ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Contrast Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-20">
          
          {/* Left Column: Fragmented Multi-Vendor Reality (Span 6) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-rose-500/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-rose-500">
                  <AlertOctagon className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">
                    {language === "en" ? "FRAGILE REALITY // MULTI-VENDOR" : "REALITAS RENTAN // MULTI-VENDOR"}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 font-medium">
                  {activeCase.fragmented.riskLevel}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 font-sans">
                  {activeCase.fragmented.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeCase.fragmented.scenario}
                </p>
              </div>

              {/* Symptoms Checklist */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                  {language === "en" ? "Observed Operational Friction:" : "Friksi Operasional Teramati:"}
                </span>
                {activeCase.fragmented.symptoms.map((symptom, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10 text-xs text-[var(--text-primary)] flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Cost Indicator */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 text-rose-500 font-medium">
                <Flame className="w-3.5 h-3.5" />
                <span>{activeCase.fragmented.costImpact}</span>
              </span>
            </div>
          </div>

          {/* Right Column: ARKAPRANA Unified Architecture (Span 6) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--accent)]/40 shadow-md relative overflow-hidden flex flex-col justify-between ring-1 ring-[var(--accent)]/15">
            <div className="space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">
                    {language === "en" ? "UNIFIED ARCHITECTURE // ARKAPRANA" : "ARSITEKTUR TERPADU // ARKAPRANA"}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-soft-bg)] text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                  {activeCase.arkaprana.slaGuarantee}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 font-sans">
                  {activeCase.arkaprana.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activeCase.arkaprana.architecture}
                </p>
              </div>

              {/* Mechanisms Checklist */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                  {language === "en" ? "Engineered Governance & Controls:" : "Tata Kelola & Kontrol Rekayasa:"}
                </span>
                {activeCase.arkaprana.mechanisms.map((mech, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] flex items-start gap-2.5 hover:border-[var(--accent)]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{mech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Gain Indicator */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--accent)] font-semibold flex items-center gap-1.5">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Impact: {activeCase.arkaprana.gainMetric}</span>
              </span>
              <span className="text-[var(--text-muted)] text-[10px]">
                {language === "en" ? "Verified SLA Standard" : "Standar SLA Terverifikasi"}
              </span>
            </div>
          </div>

        </div>

        {/* Architectural Cohesion Banner: The 5-Layer Unified Pipeline */}
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] font-semibold block">
              {language === "en" ? "COHESIVE FULL-STACK PIPELINE" : "PIPELINE LENGKAP TERKOORDINASI"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display">
              {language === "en" ? "From physical fiber to autonomous private AI." : "Dari serat optik fisik hingga kecerdasan buatan mandiri."}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              {language === "en"
                ? "ARKAPRANA eliminates vendor fragmentation by connecting your entire technology stack into one orchestrated architecture:"
                : "ARKAPRANA mengeliminasi fragmentasi vendor dengan menghubungkan seluruh fondasi teknologi ke dalam satu arsitektur terorkestrasi:"}
            </p>
          </div>

          {/* 5-Step Pipeline Strip */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
            {unifiedPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.step}
                  className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 transition-colors group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-[var(--accent)]">
                      L{pillar.step}
                    </span>
                    <Icon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] mb-1">
                      {pillar.name}
                    </div>
                    <div className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                      {pillar.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[var(--border-subtle)] gap-4">
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                {language === "en"
                  ? "One sovereign architecture under Indonesian jurisdiction."
                  : "Satu arsitektur berdaulat di bawah yurisdiksi Indonesia."}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-tactile shadow-sm"
              >
                <span>{language === "en" ? "View Integrated Solutions" : "Lihat Solusi Terintegrasi"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] btn-tactile"
              >
                <span>{language === "en" ? "Audit Your Infrastructure" : "Audit Infrastruktur Anda"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
