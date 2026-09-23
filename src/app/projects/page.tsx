import React from "react";
import Link from "next/link";
import { CAPABILITIES_SHOWCASE } from "@/lib/data";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Network, Layers } from "lucide-react";

export const metadata = {
  title: "Capability Showcase | ARKAPRANA Technology Solutions",
  description:
    "Selected Capabilities Showcase: Menampilkan kedalaman rekayasa teknologi dan arsitektur deployment PT ARKAPRANA TEKNOLOGI NUSANTARA."
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>ENGINEERING SHOWCASE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Selected Capabilities & Solution Architectures.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Showcase kapabilitas teknis yang memperlihatkan standar rekayasa, toleransi kesalahan (fault-tolerance), dan kepatuhan arsitektur yang kami terapkan pada setiap inisiatif infrastruktur.
          </p>

          <div className="pt-2">
            <span className="inline-block text-[11px] font-mono text-cyan-400/90 px-3 py-1 rounded bg-white/5 border border-white/10">
              Note: Model arsitektur ini disusun berdasarkan metodologi terverifikasi untuk implementasi nyata skala korporat.
            </span>
          </div>
        </div>
      </section>

      {/* Capabilities Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES_SHOWCASE.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#081329] to-[#040817] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30">
                    CAPABILITY SHOWCASE
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    SPEC V2.6
                  </span>
                </div>

                <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                  {item.category}
                </div>

                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.scope}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Architectural Highlights:
                  </span>
                  {item.highlights.map((hl) => (
                    <div key={hl} className="flex items-start text-xs text-slate-300 space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition-colors"
                >
                  <span>Request Similar Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
