"use client";

import React from "react";
import Link from "next/link";
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
  PhoneCall
} from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
};

export default function SolutionsSection() {
  const primaryProducts = SOLUTIONS.slice(0, 2);
  const secondaryProducts = SOLUTIONS.slice(2);

  return (
    <section id="solutions" className="py-28 md:py-36 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Productized Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
            Engineered as products.
            <span className="block text-neutral-500 font-normal mt-1">
              Integrated as one ecosystem.
            </span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Bukan sekadar katalog layanan konvensional. Setiap domain teknologi ARKAPRANA dirancang dengan standar produk industri tingkat tinggi untuk memastikan kedaulatan, ketahanan, dan skalabilitas jangka panjang.
          </p>
        </div>

        {/* Flagship Showcase (2 Featured Products) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {primaryProducts.map((prod) => {
            const Icon = iconMap[prod.iconName] || Network;
            return (
              <div
                key={prod.id}
                className="group relative rounded-2xl bg-[#F8FAFC] border border-neutral-200/80 p-8 sm:p-10 transition-all duration-300 hover:border-cyan-600/30 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200/60">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-700 font-semibold uppercase">
                      {prod.badge}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-cyan-600 transition-colors" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 font-sans">
                    {prod.name}
                  </h3>

                  <div className="text-xl sm:text-2xl font-serif italic text-neutral-800 mb-4 font-normal">
                    &ldquo;{prod.headlineQuote}&rdquo;
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                    {prod.tagline}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                      Core Capabilities
                    </span>
                    {prod.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200/60 flex items-center justify-between">
                  <Link
                    href={`/solutions/${prod.shortSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 group-hover:text-cyan-700 transition-colors"
                  >
                    <span>Explore {prod.name.replace("ARKAPRANA ", "")} →</span>
                  </Link>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Enterprise Tier
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining 5 Products (3-Column Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {secondaryProducts.map((prod) => {
            const Icon = iconMap[prod.iconName] || Network;
            return (
              <div
                key={prod.id}
                className="group relative rounded-xl bg-[#F8FAFC] border border-neutral-200/70 p-6 sm:p-7 transition-all duration-200 hover:border-cyan-600/30 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200/50">
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 font-semibold uppercase">
                      {prod.badge}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-cyan-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 mb-1">
                    {prod.name}
                  </h3>

                  <div className="text-base font-serif italic text-neutral-700 mb-3 font-normal">
                    &ldquo;{prod.headlineQuote}&rdquo;
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {prod.tagline}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {prod.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-[11px] text-neutral-700">
                        <span className="w-1 h-1 rounded-full bg-cyan-600 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-200/50">
                  <Link
                    href={`/solutions/${prod.shortSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-cyan-700 transition-colors"
                  >
                    <span>Explore {prod.name.replace("ARKAPRANA ", "")} →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 22 Strategic Lead-Gen CTA Strip */}
        <div className="rounded-2xl bg-[#070b16] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/[0.08] shadow-xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
              Architectural Consulting
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Membutuhkan kajian arsitektur sistem khusus?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
              Diskusikan kebutuhan integrasi infrastruktur, kedaulatan data, atau implementasi private AI langsung bersama prinsipal arsitek teknologi ARKAPRANA.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all shrink-0 shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
          >
            <span>Talk to an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </Link>
        </div>

      </div>
    </section>
  );
}
