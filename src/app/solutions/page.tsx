import React from "react";
import Link from "next/link";
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
  Layers
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

export const metadata = {
  title: "Solutions | ARKAPRANA Technology & Intelligent Solutions",
  description:
    "7 Lini Solusi Komprehensif ARKAPRANA: Network, IT Infrastructure, Cloud, Cybersecurity, Managed IT, AI & Automation, dan System Integration."
};

export default function SolutionsPage() {
  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>ENTERPRISE SOLUTIONS PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight font-display">
            Integrated Architecture from Foundation to Intelligence.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Jelajahi tujuh domain kapabilitas rekayasa teknologi ARKAPRANA. Setiap solusi dirancang modular, kompatibel antar-vendor, dan scalable untuk pertumbuhan jangka panjang.
          </p>
        </div>
      </section>

      {/* Solutions Detail Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {SOLUTIONS.map((sol, idx) => {
          const Icon = iconMap[sol.iconName] || Server;
          const isReversed = idx % 2 !== 0;

          return (
            <div
              key={sol.id}
              id={sol.slug}
              className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#081329] to-[#040915] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                      {sol.badge} • {sol.category}
                    </span>
                    <h2 className="text-2xl font-semibold text-white tracking-tight font-display">
                      {sol.name}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-medium text-slate-300">
                  {sol.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {sol.description}
                </p>

                {/* Capabilities Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold mb-2">
                    Scope of Engineering:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {sol.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow"
                  >
                    <span>Deep Dive Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?solution=${encodeURIComponent(sol.name)}`}
                    className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Inquire Specification →
                  </Link>
                </div>
              </div>

              {/* Architectural Technical Box (Span 5) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-cyan-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    TECHNICAL SPECS
                  </span>
                  <span className="text-[10px] text-slate-500">ENTERPRISE GRADE</span>
                </div>

                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                    Architectural Focus
                  </div>
                  <div className="text-slate-300 font-sans text-xs">
                    {sol.architectureFocus}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">
                    Standard Deliverables
                  </div>
                  <ul className="space-y-1.5 text-slate-300 font-sans text-xs">
                    {sol.deliverables.map((del) => (
                      <li key={del} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
