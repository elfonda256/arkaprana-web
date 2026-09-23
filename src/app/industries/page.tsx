import React from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/data";
import IndustryTopologyVisual from "@/components/shared/IndustryTopologyVisual";
import {
  Factory,
  Ship,
  HardHat,
  Landmark,
  Building2,
  Truck,
  Building,
  Hotel,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Industry Solutions & Sector Systems | ARKAPRANA",
  description:
    "Mission-critical technology architectures tailored for Construction, Manufacturing, Maritime, Logistics, Property, Hospitality, Enterprise, Government, and BUMN in Indonesia.",
};

const iconMap: Record<string, React.ElementType> = {
  construction: HardHat,
  manufacturing: Factory,
  maritime: Ship,
  logistics: Truck,
  property: Building2,
  hospitality: Hotel,
  enterprise: Building,
  government: Landmark,
  bumn: Landmark
};

export default function IndustriesPage() {
  return (
    <main className="flex-1 pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section (Section 10 verbatim) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[var(--border-subtle)] relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--border-strong)] text-[var(--accent-blue)] text-xs font-mono">
            <span>INDUSTRY SALES SYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight font-display">
            Technology for Critical Environments.
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Kami memahami bahwa lingkungan maritim lepas pantai membutuhkan pendekatan rekayasa yang sangat berbeda dari pusat komputasi perbankan atau fasilitas manufaktur industri. ARKAPRANA merancang solusi teknologi yang disesuaikan dengan kondisi fisik lingkungan dan kebutuhan operasional nyata organisasi Anda.
          </p>
        </div>
      </section>

      {/* Grid of Industries (Section 10 & 11) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.slug] || Building;
            const ctaLabel = `Discuss ${ind.name} Requirements`;

            return (
              <div
                key={ind.name}
                id={ind.slug}
                className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] solution-card-interaction flex flex-col justify-between group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Abstract Industry Technical Signature Topology */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <IndustryTopologyVisual slug={ind.slug} className="max-h-20" />
                  </div>

                  {/* Header Strip */}
                  <div className="flex items-center space-x-3.5 pb-5 border-b border-[var(--border-subtle)]">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)] card-icon shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors font-display">
                        {ind.name}
                      </h2>
                      <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-wider">
                        MISSION-CRITICAL SECTOR
                      </span>
                    </div>
                  </div>

                  <div className="text-base font-serif italic text-[var(--accent-blue)]">
                    &ldquo;{ind.headlineQuote}&rdquo;
                  </div>

                  {/* 1. Industry Challenge */}
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-500 block font-semibold">
                      Industry Challenge:
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      {ind.challenge}
                    </p>
                  </div>

                  {/* 2. Technology Environment */}
                  <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 block font-semibold">
                      Technology Environment:
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      {ind.environment}
                    </p>
                  </div>

                  {/* 3. Potential Solutions (No fake claims) */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-blue)] block font-semibold">
                      Potential Solutions &amp; Capabilities:
                    </span>
                    <div className="space-y-1.5">
                      {ind.solutions.map((sol) => (
                        <div key={sol} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Use Cases / Potential Applications */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
                      Potential Applications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.useCases.slice(0, 2).map((uc) => (
                        <div key={uc.title} className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                          <div className="text-xs font-semibold text-[var(--text-primary)] mb-0.5">
                            {uc.title}
                          </div>
                          <div className="text-[11px] text-[var(--text-secondary)] line-clamp-2">
                            {uc.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. Implementation Approach & CTA */}
                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    Implementation: 8-Phase Engineering Lifecycle
                  </span>

                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-white bg-[var(--accent-blue)] hover:opacity-90 btn-primary-interaction group shrink-0 transition-all shadow-sm"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white cta-arrow" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
