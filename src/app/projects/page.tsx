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
    <main className="flex-1 pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen transition-colors duration-300">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--border-strong)] text-[var(--accent-blue)] text-xs font-mono">
            <span>ENGINEERING SHOWCASE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            Selected Capabilities &amp; Solution Architectures.
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Showcase kapabilitas teknis yang memperlihatkan standar rekayasa, toleransi kesalahan (fault-tolerance), dan kepatuhan arsitektur yang kami terapkan pada setiap inisiatif infrastruktur.
          </p>

          <div className="pt-2">
            <span className="inline-block text-[11px] font-mono text-[var(--accent-blue)] px-3 py-1 rounded bg-[var(--accent-glow)] border border-[var(--border-subtle)]">
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
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] px-2.5 py-1 rounded bg-[var(--accent-glow)] border border-[var(--border-strong)]">
                    CAPABILITY SHOWCASE
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    SPEC V2.6
                  </span>
                </div>

                <div className="text-xs font-mono uppercase text-[var(--text-muted)] mb-1 font-semibold">
                  {item.category}
                </div>

                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-blue)] transition-colors font-display">
                  {item.title}
                </h2>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {item.scope}
                </p>

                <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)] mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-1 font-semibold">
                    Architectural Highlights:
                  </span>
                  {item.highlights.map((hl) => (
                    <div key={hl} className="flex items-start text-xs text-[var(--text-secondary)] space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--accent-glow)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors"
                >
                  <span>Request Similar Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
