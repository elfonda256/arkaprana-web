import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/data";
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
  ShieldAlert
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
    title: `${sol.name} | ARKAPRANA Technology Solutions`,
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

        {/* 01. HERO (Section 11) */}
        <div className="max-w-4xl mb-20 space-y-6">
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

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={`/contact?solution=${encodeURIComponent(sol.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>
            <span className="text-xs font-mono text-neutral-400">
              Enterprise Engineering Tier
            </span>
          </div>
        </div>

        {/* 02. PROBLEM & 03. SOLUTION (Section 11) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Problem */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#070b16] border border-red-500/20 space-y-4">
            <div className="flex items-center space-x-2 text-red-400 font-mono text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>The Operational Challenge</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Tantangan Yang Dihadapi Organisasi
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              {sol.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#070b16] border border-cyan-500/30 space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The ARKAPRANA Solution</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Rekayasa Arsitektur Terpadu
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              {sol.solutionStatement}
            </p>
          </div>

        </div>

        {/* 04. CAPABILITIES (Section 11) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Core Modules
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Capabilities Spectrum
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

        {/* 05. ARCHITECTURE (Section 11) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#070b16] border border-white/[0.1] shadow-2xl mb-20 relative overflow-hidden">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Technical Deep-Dive
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Architecture Blueprint &amp; Specs
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

        {/* 06. USE CASES (Section 11) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Real-World Applications
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Applied Enterprise Scenarios
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Skenario implementasi nyata dan hasil performa arsitektur di industri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sol.useCases.map((uc, idx) => (
              <div
                key={uc.title}
                className="p-6 rounded-2xl bg-[#070b16] border border-white/[0.08] hover:border-white/[0.15] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block mb-2">
                    CASE STUDY 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {uc.scenario}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-xs text-cyan-300 font-mono">
                  Impact: {uc.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 07. IMPLEMENTATION (Section 11) */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Project Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Implementation Methodology
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              4 tahap eksekusi bertahap untuk menjamin implementasi zero-incident.
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

        {/* 08. FAQ (Section 11) */}
        <div className="mb-20 max-w-4xl">
          <div className="mb-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Knowledge &amp; Verification
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {sol.faq.map((item) => (
              <div key={item.question} className="p-6 rounded-2xl bg-[#070b16] border border-white/[0.08]">
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pl-6">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 09. CTA (Section 11 verbatim: CTA selalu: Discuss Your Project →) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#060a14] via-[#091122] to-[#060a14] border border-cyan-500/30 p-10 sm:p-14 text-center space-y-5 shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
            Initiate Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-sans tracking-tight">
            Ready to deploy {sol.name}?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Konsultasikan parameter teknis, lokasi, dan kebutuhan arsitektur Anda langsung bersama Principal Systems Engineer ARKAPRANA.
          </p>
          <div className="pt-3">
            <Link
              href={`/contact?solution=${encodeURIComponent(sol.name)}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
