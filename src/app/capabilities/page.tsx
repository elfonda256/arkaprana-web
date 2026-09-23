import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Network, Server, Cloud, BrainCircuit, Workflow, Zap } from "lucide-react";
import { CAPABILITIES_DATA } from "@/lib/data";

export const metadata = {
  title: "Technical Capabilities & Architecture Blueprints | ARKAPRANA",
  description:
    "Explore ARKAPRANA's technical capabilities across enterprise networking, data center infrastructure, sovereign cloud, zero-trust security, and private AI environments.",
};

const iconMap: Record<string, React.ElementType> = {
  "cap-network": Network,
  "cap-datacenter": Server,
  "cap-ai": BrainCircuit,
  "cap-security": ShieldCheck,
  "cap-managed": Cpu,
  "cap-cloud": Cloud,
  "cap-integration": Workflow,
  "cap-automation": Zap
};

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Architecture &amp; Engineering Systems</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
            Technical Capabilities.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-cyan-200 to-cyan-400">
              Blueprints for critical scale.
            </span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Kredibilitas rekayasa ARKAPRANA dibangun dari kedalaman arsitektur teknis, pemahaman mendalam atas regulasi kedaulatan data, dan metodologi implementasi standar industri tanpa klaim semu.
          </p>
        </div>

        {/* 8 Technical Capability Showcases */}
        <div className="space-y-12 mb-20">
          {CAPABILITIES_DATA.map((cap) => {
            const Icon = iconMap[cap.id] || Server;
            return (
              <div
                key={cap.id}
                id={cap.slug}
                className="rounded-3xl bg-[#070b16] border border-white/[0.1] p-8 sm:p-12 shadow-2xl relative overflow-hidden hover:border-white/[0.18] transition-all group"
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
                        CAPABILITY BLUEPRINT // {cap.number}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
                        {cap.title}
                      </h2>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300 self-start sm:self-auto">
                    {cap.category}
                  </span>
                </div>

                {/* 4-Quadrant Architecture Deep-Dive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Challenge */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                      The Operational Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {cap.challenge}
                    </p>
                  </div>

                  {/* Engineering Approach */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold">
                      Engineering Approach
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {cap.approach}
                    </p>
                  </div>

                  {/* Architecture Blueprint */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                      Technical Architecture Details
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-mono">
                      {cap.architecture}
                    </p>
                  </div>

                  {/* Potential Outcome */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block font-semibold">
                      Targeted Architectural Outcome
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {cap.potentialOutcome}
                    </p>
                  </div>

                </div>

                {/* Footer Strip with Protocols, Deliverables & CTA */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Protocols */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Core Protocols &amp; Standards
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.keyProtocols.map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10.5px] font-mono text-neutral-300">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <Link
                    href={`/contact?capability=${encodeURIComponent(cap.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all shrink-0 self-start lg:self-auto"
                  >
                    <span>Discuss This Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Consultation Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-[#060a14] via-[#091122] to-[#060a14] border border-white/[0.1] p-10 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for bespoke technology engineering?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Setiap arsitektur ARKAPRANA disesuaikan secara presisi dengan kebutuhan lapangan, batasan regulasi, dan skalabilitas jangka panjang organisasi Anda.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
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
