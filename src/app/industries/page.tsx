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
    <main className="flex-1 pt-28 pb-20 bg-[#030712] text-white min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section (Section 10 verbatim) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-400 text-xs font-mono">
            <span>INDUSTRY SALES SYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight font-display">
            Technology for Critical Environments.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
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
                className="p-8 sm:p-10 rounded-3xl bg-[#070b16] border border-white/10 hover:border-cyan-500/40 solution-card-interaction flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-6">
                  {/* Abstract Industry Technical Signature Topology */}
                  <div className="p-4 rounded-2xl bg-[#030610] border border-white/[0.06]">
                    <IndustryTopologyVisual slug={ind.slug} className="max-h-20" />
                  </div>

                  {/* Header Strip */}
                  <div className="flex items-center space-x-3.5 pb-5 border-b border-white/[0.08]">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 card-icon shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                        {ind.name}
                      </h2>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                        MISSION-CRITICAL SECTOR
                      </span>
                    </div>
                  </div>

                  <div className="text-base font-serif italic text-cyan-200">
                    &ldquo;{ind.headlineQuote}&rdquo;
                  </div>

                  {/* 1. Industry Challenge */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block font-semibold">
                      Industry Challenge:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {ind.challenge}
                    </p>
                  </div>

                  {/* 2. Technology Environment */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-semibold">
                      Technology Environment:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {ind.environment}
                    </p>
                  </div>

                  {/* 3. Potential Solutions (No fake claims) */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold">
                      Potential Solutions &amp; Capabilities:
                    </span>
                    <div className="space-y-1.5">
                      {ind.solutions.map((sol) => (
                        <div key={sol} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Use Cases / Potential Applications */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                      Potential Applications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.useCases.slice(0, 2).map((uc) => (
                        <div key={uc.title} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-xs font-semibold text-white mb-0.5">
                            {uc.title}
                          </div>
                          <div className="text-[11px] text-neutral-400 line-clamp-2">
                            {uc.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. Implementation Approach & CTA (Section 10 & 11) */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Implementation: 8-Phase Engineering Lifecycle
                  </span>

                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-100 btn-primary-interaction group shrink-0"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black cta-arrow" />
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
