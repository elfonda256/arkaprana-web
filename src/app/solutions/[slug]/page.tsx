import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS, getSolutionBySlug, COMPANY_PROFILE } from "@/lib/data";
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
  Layers,
  HelpCircle,
  Activity,
  Terminal,
  ShieldAlert,
  MessageSquare,
  Wrench,
  LifeBuoy
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
};

// 6-Step How It Works Lifecycle (Section 07 verbatim: Assess, Design, Procure, Deploy, Integrate, Support)
const HOW_IT_WORKS_STEPS = [
  { step: "01", name: "Assess", desc: "Audit menyeluruh terhadap kondisi fisik, kapasitas, dan beban kerja eksisting." },
  { step: "02", name: "Design", desc: "Penyusunan blueprint arsitektur terinci dengan simulasi kapasitas dan redundansi." },
  { step: "03", name: "Procure", desc: "Pengadaan perangkat keras resmi bergaransi distributor resmi Indonesia." },
  { step: "04", name: "Deploy", desc: "Instalasi fisik, penarikan kabel, konfigurasi sistem, dan pengujian standar." },
  { step: "05", name: "Integrate", desc: "Harmonisasi protokol, sinkronisasi API antar-vendor, dan uji penerimaan (UAT)." },
  { step: "06", name: "Support", desc: "Dukungan operasional berkelanjutan, pemantauan telemetri 24/7, dan garansi SLA." }
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const shortSlugs = SOLUTIONS.map((sol) => ({ slug: sol.shortSlug }));
  const longSlugs = SOLUTIONS.map((sol) => ({ slug: sol.slug }));
  return [...shortSlugs, ...longSlugs];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);
  if (!sol) return {};
  return {
    title: `${sol.name} | ARKAPRANA Enterprise Solutions`,
    description: sol.description
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const sol = getSolutionBySlug(slug);

  if (!sol) {
    notFound();
  }

  const Icon = iconMap[sol.iconName] || Server;

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>
        </div>

        {/* 01. HERO (Section 07 & 09) */}
        <div className="max-w-4xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-400 text-xs font-mono">
            <span>{sol.badge}</span>
            <span>•</span>
            <span>{sol.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-sans">
            {sol.name}
          </h1>

          <div className="text-2xl sm:text-3xl font-serif italic text-cyan-200">
            &ldquo;{sol.headlineQuote}&rdquo;
          </div>

          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal">
            {sol.tagline}
          </p>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
            {sol.description}
          </p>

          {/* Section 09: Dual CTAs ("Discuss Your Requirement" & "Talk to an Engineer") */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={`/contact?solution=${encodeURIComponent(sol.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>

            <a
              href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berkonsultasi%20langsung%20dengan%20engineer%20mengenai%20${encodeURIComponent(sol.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-medium tracking-wide text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.15] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Talk to an Engineer</span>
            </a>
          </div>
        </div>

        {/* 02. THE CHALLENGE & WHAT WE BUILD (Section 07 verbatim) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* THE CHALLENGE */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#070b16] border border-red-500/20 space-y-4">
            <div className="flex items-center space-x-2 text-red-400 font-mono text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Tantangan Operasional yang Dihadapi
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              {sol.problem}
            </p>
          </div>

          {/* WHAT WE BUILD */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#070b16] border border-cyan-500/30 space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>WHAT WE BUILD</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Rekayasa Solusi Terpadu
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              {sol.solutionStatement}
            </p>
          </div>

        </div>

        {/* 03. HOW IT WORKS (Section 07 verbatim: Assess, Design, Procure, Deploy, Integrate, Support) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Delivery Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-sans">
              HOW IT WORKS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Siklus eksekusi sistematis dari asesmen awal hingga dukungan operasional jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {HOW_IT_WORKS_STEPS.map((hw) => (
              <div
                key={hw.step}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                    PHASE {hw.step}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {hw.name}
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {hw.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 04. CAPABILITIES (Section 07 verbatim) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Integrated Modules
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-sans">
              CAPABILITIES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Spesifikasi modul teknis yang terintegrasi di dalam domain {sol.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sol.capabilities.map((cap, idx) => (
              <div
                key={cap}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xs font-mono shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-200">
                  {cap}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05. TECHNOLOGY (Section 07 verbatim) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#070b16] border border-white/[0.1] shadow-2xl mb-20 relative overflow-hidden">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Architectural Specifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-sans">
              TECHNOLOGY
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              {sol.architectureFocus}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                Topology Fabric
              </span>
              <p className="text-xs font-mono text-neutral-200">
                {sol.architectureDetails.topology}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                Protocols
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {sol.architectureDetails.protocols.map((p) => (
                  <span key={p} className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-cyan-300">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                Security Tier
              </span>
              <p className="text-xs font-mono text-neutral-200">
                {sol.architectureDetails.securityTier}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                Redundancy Model
              </span>
              <p className="text-xs font-mono text-emerald-400">
                {sol.architectureDetails.redundancy}
              </p>
            </div>
          </div>
        </div>

        {/* 06. IMPLEMENTATION (Section 07 verbatim) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Project Delivery Phases
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-sans">
              IMPLEMENTATION
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Tahapan eksekusi rekayasa bertahap untuk menjamin implementasi zero-incident.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sol.implementationSteps.map((step) => (
              <div key={step.phase} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-1">
                  {step.phase}
                </span>
                <h4 className="text-sm font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 07. ONGOING SUPPORT (Section 07 verbatim) */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#060a14] border border-white/[0.08] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <LifeBuoy className="w-4 h-4" />
                <span>ONGOING SUPPORT &amp; SLA</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-sans">
                Dukungan Operasional Berkelanjutan 24/7
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Seluruh implementasi didukung oleh tim Network &amp; Security Operations Center (NOC/SOC) dengan pemantauan telemetri waktu nyata, jaminan SLA ketersediaan 99.99%, pembaruan firmware berkala, dan penanganan eskalasi cepat di bawah 15 menit.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>24/7 Proactive Monitoring</span>
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SLA Contract 99.99%</span>
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quarterly Architecture Review</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href={`/contact?solution=${encodeURIComponent(sol.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-md active:scale-[0.98]"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </Link>
              <a
                href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berkonsultasi%20dengan%20engineer%20mengenai%20${encodeURIComponent(sol.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Talk to an Engineer</span>
              </a>
            </div>
          </div>
        </div>

        {/* 08. FINAL CTA (Section 09 verbatim: Discuss Your Requirement & Talk to an Engineer) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#060a14] via-[#091122] to-[#060a14] border border-cyan-500/30 p-10 sm:p-14 text-center space-y-5 shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
            Initiate Architecture Discussion
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-sans tracking-tight">
            Ready to deploy {sol.name}?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Konsultasikan parameter teknis, lokasi, dan kebutuhan arsitektur Anda langsung bersama Principal Systems Engineer ARKAPRANA.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?solution=${encodeURIComponent(sol.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>

            <a
              href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berbicara%20dengan%20engineer%20mengenai%20${encodeURIComponent(sol.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-medium tracking-wide text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Talk to an Engineer</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
