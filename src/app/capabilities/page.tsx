import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Network,
  Server,
  Cloud,
  BrainCircuit,
  Workflow,
  Compass,
  FileCheck
} from "lucide-react";
import { CAPABILITIES_DATA } from "@/lib/data";

export const metadata = {
  title: "Company Capabilities & Architecture Blueprints | ARKAPRANA",
  description:
    "Explore ARKAPRANA's 8 core capabilities across network engineering, infrastructure, sovereign cloud, cybersecurity, system integration, managed IT, AI & automation, and technology consulting.",
};

const iconMap: Record<string, React.ElementType> = {
  "cap-network": Network,
  "cap-datacenter": Server,
  "cap-cloud": Cloud,
  "cap-security": ShieldCheck,
  "cap-integration": Workflow,
  "cap-managed": Cpu,
  "cap-ai": BrainCircuit,
  "cap-consulting": Compass
};

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Section 18 verbatim) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Enterprise Engineering Disciplines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
            Company Capabilities.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-cyan-200 to-cyan-400">
              Architectural blueprints for critical scale.
            </span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-1 max-w-2xl font-normal">
            Kredibilitas rekayasa ARKAPRANA dibangun dari kedalaman arsitektur teknis, pemahaman regulasi kedaulatan data lokal, dan metodologi implementasi standar industri tanpa klaim semu.
          </p>
        </div>

        {/* 8 Technical Capabilities (Section 18 verbatim) */}
        <div className="space-y-12 mb-20">
          {CAPABILITIES_DATA.map((cap) => {
            const Icon = iconMap[cap.id] || Server;

            return (
              <div
                key={cap.id}
                id={cap.slug}
                className="rounded-3xl bg-[#070b16] border border-white/[0.1] p-8 sm:p-12 shadow-2xl relative overflow-hidden hover:border-cyan-400/40 solution-card-interaction flex flex-col justify-between group"
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 card-icon shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
                        CAPABILITY 0{cap.number} // {cap.category}
                      </span>
                      <h2 className="text-xl sm:text-3xl font-bold text-white font-sans group-hover:text-cyan-200 transition-colors">
                        {cap.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300 self-start sm:self-auto">
                    {cap.engagementModel}
                  </span>
                </div>

                {/* Section 18: What We Do, Typical Requirements, Potential Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  
                  {/* Left Column: What We Do & Potential Solution (Span 7) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1.5 font-semibold">
                        WHAT WE DO
                      </span>
                      <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                        {cap.whatWeDo}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                        POTENTIAL SOLUTION
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {cap.potentialSolution}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                          ENGAGEMENT MODEL
                        </span>
                        <span className="text-xs font-semibold text-cyan-300">
                          {cap.engagementModel}
                        </span>
                      </div>

                      <Link
                        href={cap.ctaHref}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-100 btn-primary-interaction group shrink-0 shadow-sm"
                      >
                        <span>{cap.ctaText}</span>
                        <ArrowRight className="w-3 h-3 text-black cta-arrow" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Typical Requirements (Span 5) */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-[#040814] border border-white/[0.08] space-y-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                      TYPICAL REQUIREMENTS
                    </span>
                    <ul className="space-y-3">
                      {cap.typicalRequirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start text-xs text-neutral-300 space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/[0.06] space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                        Architecture Blueprint:
                      </span>
                      <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                        {cap.architecture}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer Strip: Key Protocols & Deliverables */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 mr-1">
                      Protocols:
                    </span>
                    {cap.keyProtocols.map((proto) => (
                      <span
                        key={proto}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-mono text-cyan-300">
                    SLA Tier: 99.99% • Full As-Built Documentation
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Closing Consultation Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-[#060a14] via-[#091122] to-[#060a14] border border-cyan-500/30 p-8 sm:p-14 text-center space-y-5 shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
            Custom Architecture Requirements
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-sans tracking-tight">
            Need a hybrid multi-disciplinary architecture?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Kombinasikan rekayasa jaringan, infrastruktur server, pertahanan siber, dan private AI ke dalam satu kesatuan kontrak integrasi.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-xl hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
