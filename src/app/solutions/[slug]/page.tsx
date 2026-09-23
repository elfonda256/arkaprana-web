import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  ChevronLeft,
  Layers,
  ShieldAlert,
  Terminal
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
  return SOLUTIONS.map((sol) => ({
    slug: sol.slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: `${sol.name} | ARKAPRANA Technology Solutions`,
    description: sol.description
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);

  if (!sol) {
    notFound();
  }

  const Icon = iconMap[sol.iconName] || Server;

  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/solutions"
          className="inline-flex items-center text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
          <span>Back to Solutions Portfolio</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>{sol.badge} • ARCHITECTURE SPECIFICATION</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {sol.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono uppercase text-cyan-400/80 tracking-wider">
                {sol.category}
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-200 font-medium pt-2">
            {sol.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {sol.description}
          </p>
        </div>
      </section>

      {/* Main Technical Specs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Scope & Deliverables */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Comprehensive Scope of Engineering
              </h2>
              <div className="space-y-3">
                {sol.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start space-x-3 hover:border-cyan-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">{cap}</div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Direncanakan sesuai standar kepatuhan industri dan arsitektur redundansi N+1.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Project Deliverables & Artifacts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sol.deliverables.map((del) => (
                  <div
                    key={del}
                    className="p-4 rounded-xl bg-[#060e22] border border-white/10 text-xs font-mono text-slate-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Future Readiness & Consultation Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-[#081534] to-[#040915] border border-cyan-500/30 shadow-xl space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                ENTERPRISE READINESS
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  <strong>Architectural Core:</strong> {sol.architectureFocus}
                </p>
                <p>
                  <strong>Deployment Model:</strong> Turnkey Project, SLA-backed Managed Support, or Hybrid Integration.
                </p>
                <p>
                  <strong>Vendor Neutrality:</strong> Compatible with Cisco, Juniper, Dell, HPE, Fortinet, NVIDIA, and Open-Source Enterprise Stacks.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/contact?solution=${encodeURIComponent(sol.name)}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/25"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sub-platform Expansion Note */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Sub-Platform Architecture
              </div>
              <div className="text-xs text-slate-300">
                Modul ini dirancang dengan microservices API-first yang di masa depan siap dihubungkan ke sub-domain khusus seperti <code className="text-cyan-400 font-mono">{sol.id}.arkaprana.com</code>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
