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

const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: "outages",
    tag: "01 // INCIDENT ESCALATION & SLA",
    title: "Multi-Vendor Finger-Pointing vs. Single Accountability",
    subtitle: "Ketika insiden P1 terjadi, waktu terbuang untuk membuktikan vendor mana yang bersalah sementara bisnis kehilangan miliaran rupiah per jam.",
    fragmented: {
      title: "The Multi-Vendor Fragmentation Maze",
      scenario: "ISP mengklaim lonjakan latensi berasal dari core switch internal. Vendor switch menyalahkan OS virtualisasi hypervisor. Tim database melihat locked transaction. Tidak ada vendor yang bertanggung jawab terhadap end-to-end outcome.",
      symptoms: [
        "Rata-rata MTTR membengkak hingga 4.8 jam per insiden",
        "5+ kontrak vendor terpisah dengan eskalasi berbeda",
        "Audit post-mortem tanpa kesimpulan akar masalah pasti"
      ],
      riskLevel: "CRITICAL OPERATIONAL RISK",
      costImpact: "Estimasi kerugian downtime: Rp 120jt - 450jt / jam"
    },
    arkaprana: {
      title: "ARKAPRANA Unified Engineering Discipline",
      architecture: "Satu arsitektur terintegrasi penuh dari serat optik fisik Layer 1 hingga routing aplikasi Layer 7. Satu kontrak, satu titik kontak rekayasa, dan satu jaminan SLA komprehensif.",
      mechanisms: [
        "Automated cross-layer telemetry correlation & self-healing",
        "Dedicated 24/7/365 Jakarta NOC dengan respon insiden <15 menit",
        "Single-throat-to-choke accountability dengan garansi SLA 99.98%"
      ],
      slaGuarantee: "SLA AVAILABILITY 99.98% / MTTR < 15 MIN",
      gainMetric: "MTTR: 4.8 Jam ➔ 14 Menit (-95% Downtime)"
    }
  },
  {
    id: "sovereignty",
    tag: "02 // DATA SOVEREIGNTY & SHADOW AI",
    title: "Compliance Blindspots vs. Air-Gapped Sovereign AI",
    subtitle: "Mengirimkan data korporat ke API cloud publik pihak ketiga melanggar regulasi domestik dan membuka celah kebocoran kekayaan intelektual.",
    fragmented: {
      title: "Public Cloud Egress & Compliance Exposure",
      scenario: "Departemen internal mengadopsi model AI publik tanpa pengawasan tim IT. Dokumen finansial, data nasabah, dan rahasia dagang terunggah ke server cloud luar negeri, melanggar ketentuan UU PDP 2024 dan regulasi OJK.",
      symptoms: [
        "Celah kebocoran data sensitif ke server publik asing",
        "Ancaman denda regulasi UU PDP hingga 2% dari pendapatan tahunan",
        "Biaya egress cloud publik yang membengkak tanpa kendali"
      ],
      riskLevel: "HIGH REGULATORY & LEGAL RISK",
      costImpact: "Potensi sanksi UU PDP & kerugian reputasi tak terukur"
    },
    arkaprana: {
      title: "Air-Gapped Sovereign On-Premise Intelligence",
      architecture: "Infrastruktur Private LLM & Enterprise RAG yang dijalankan 100% di dalam data center Anda atau private cloud domestik Indonesia dengan enkripsi FIPS 140-3 HSM.",
      mechanisms: [
        "100% zero-egress data boundary: data tidak pernah meninggalkan jaringan lokal",
        "Penuh sesuai amanat UU PDP No. 27/2022 dan regulasi BI / OJK",
        "Dedicated on-premise GPU clusters (vLLM / TensorRT) dengan latensi sub-50ms"
      ],
      slaGuarantee: "100% DOMESTIC SOVEREIGNTY / ZERO DATA EGRESS",
      gainMetric: "Data Exposure: Uncontrolled ➔ 0% Zero Egress"
    }
  },
  {
    id: "cabling",
    tag: "03 // PHYSICAL SPRAWL & LATENCY",
    title: "Uncertified Patchwork vs. Spine-Leaf Low-Loss Fabric",
    subtitle: "Kabel kusut, redaman optik tinggi, dan ketiadaan jalur proteksi redundan menciptakan single point of failure tersembunyi di ruang server.",
    fragmented: {
      title: "Ad-Hoc Cabling & Single Point of Failure (SPOF)",
      scenario: "Kabel fiber dan copper dipasang secara bertahap tanpa dokumentasi port yang rapi. Tidak ada pengujian OTDR berkala. Kerusakan satu link backbone memicu cascading failure pada seluruh cabang operasional.",
      symptoms: [
        "Packet loss sporadis dan jitter mikro yang merusak transaksi database",
        "Rack server berantakan menghambat sirkulasi pendingin (hotspots)",
        "Waktu troubleshooting kabel memakan waktu berjam-jam saat pemadaman"
      ],
      riskLevel: "HIDDEN PHYSICAL VULNERABILITY",
      costImpact: "Kerusakan hardware akibat panas berlebih & bottleneck jaringan"
    },
    arkaprana: {
      title: "Certified TIA-942 Physical Architecture",
      architecture: "Pemasangan kabel terstruktur berstandar industri dengan pengujian Fluke DSX-8000, redundansi N+1, topologi Spine-Leaf non-blocking, dan modul pendinginan presisi InRow.",
      mechanisms: [
        "Fluke-certified 100% pass rate untuk kabel serat optik dan Cat6A/7",
        "Dual-homed BGP & redundant path routing tanpa single point of failure",
        "Clean rack dressing & color-coded cable hierarchy dengan skema visual lengkap"
      ],
      slaGuarantee: "TIA-942 TIER-3+ COMPLIANT / ZERO-SPOF TOPOLOGY",
      gainMetric: "Packet Loss: 2.4% Unstable ➔ <0.01% Low-Loss SLA"
    }
  }
];

const UNIFIED_PILLARS = [
  { step: "01", name: "Physical Datacenter", detail: "TIA-942 Tier-3+ racks, InRow cooling, dual-path power distribution", icon: Server },
  { step: "02", name: "Optical & SD-WAN", detail: "Carrier-neutral BGP, ultra-low latency mesh, certified low-loss fiber", icon: Network },
  { step: "03", name: "Sovereign Cloud", detail: "On-premise virtualization, zero-egress boundary, domestic private cloud", icon: Cloud },
  { step: "04", name: "Zero-Trust Defense", detail: "Hardware security modules, microsegmentation, 24/7 SOC telemetry", icon: ShieldCheck },
  { step: "05", name: "Autonomous Private AI", detail: "Enterprise RAG, private LLM serving on local GPUs, no public data leak", icon: BrainCircuit }
];

export default function BusinessProblemSection() {
  const [activeTabId, setActiveTabId] = useState<string>("outages");
  const activeCase = DIAGNOSTIC_CASES.find((c) => c.id === activeTabId) || DIAGNOSTIC_CASES[0];

  return (
    <section className="relative py-24 sm:py-32 bg-[var(--bg-secondary)] text-[var(--text-primary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standardized Nalarx Eyebrow & Display Headline: CENTERED AS REQUESTED */}
        <div className="max-w-4xl mx-auto text-center mb-14 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">04 · DIAGNOSTIC · MULTI-VENDOR FRICTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.18] font-display">
            Ketika Sistem Berjalan Terisolasi, Downtime Menjadi Hal yang Tak Terhindarkan.
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Pertumbuhan organisasi sering kali mewariskan tumpukan teknologi dari belasan vendor berbeda. Tanpa satu arsitektur terpadu, setiap pembaruan menimbulkan celah keamanan, latensi tersembunyi, dan saling lempar tanggung jawab.
          </p>
        </div>

        {/* Diagnostic Dimension Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-10 shadow-xs">
          {DIAGNOSTIC_CASES.map((item) => {
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
                    FRAGILE REALITY // MULTI-VENDOR
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
                  Observed Operational Friction:
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
                    UNIFIED ARCHITECTURE // ARKAPRANA
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
                  Engineered Governance &amp; Controls:
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
              <span className="text-[var(--text-muted)] text-[10px]">Verified SLA Standard</span>
            </div>
          </div>

        </div>

        {/* Architectural Cohesion Banner: The 5-Layer Unified Pipeline */}
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--accent)] font-semibold block">
              COHESIVE FULL-STACK PIPELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display">
              From physical fiber to autonomous private AI.
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
              ARKAPRANA mengeliminasi fragmentasi vendor dengan menghubungkan seluruh fondasi teknologi ke dalam satu arsitektur terorkestrasi:
            </p>
          </div>

          {/* 5-Step Pipeline Strip */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
            {UNIFIED_PILLARS.map((pillar) => {
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
              <span>Satu arsitektur berdaulat di bawah yurisdiksi Indonesia.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-tactile shadow-sm"
              >
                <span>Lihat Solusi Terintegrasi</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)]" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] btn-tactile"
              >
                <span>Audit Infrastruktur Anda</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

