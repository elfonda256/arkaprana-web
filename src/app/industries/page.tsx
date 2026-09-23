import React from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/data";
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
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Industries & Critical Environments | ARKAPRANA",
  description:
    "Mission-critical engineering and technology solutions tailored for Construction, Manufacturing, Maritime, Logistics, Enterprise, Government, and BUMN sectors in Indonesia.",
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

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-400 text-xs font-mono">
            <span>SECTOR SPECIALIZATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
            Technology for Critical Environments.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Kami memahami bahwa lingkungan maritim lepas pantai membutuhkan pendekatan rekayasa yang sangat berbeda dari pusat data perbankan atau fasilitas manufaktur. ARKAPRANA menghadirkan solusi teknologi yang dirancang sesuai regulasi, keandalan, dan kondisi fisik lingkungan industri Anda.
          </p>
        </div>
      </section>

      {/* Grid of Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.slug] || Building;

            return (
              <div
                key={ind.name}
                id={ind.slug}
                className="p-8 rounded-3xl bg-[#070b16] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center space-x-3.5 mb-5 pb-5 border-b border-white/[0.08]">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {ind.name}
                      </h2>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                        MISSION-CRITICAL SECTOR
                      </span>
                    </div>
                  </div>

                  <div className="text-base font-serif italic text-neutral-200 mb-4">
                    &ldquo;{ind.headlineQuote}&rdquo;
                  </div>

                  {/* Challenge */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      Operational Challenge:
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {ind.challenge}
                    </p>
                  </div>

                  {/* Solutions for */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Targeted Architecture Solutions:
                    </span>
                    {ind.solutions.map((sol) => (
                      <div key={sol} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-neutral-500">
                    SLA Tier
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
