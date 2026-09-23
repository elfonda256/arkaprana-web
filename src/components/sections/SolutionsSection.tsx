"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
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
    <section id="solutions" className="py-28 md:py-36 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Productized Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            Engineered as products.
            <span className="block text-[var(--text-secondary)] font-normal mt-1">
              Integrated as one ecosystem.
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
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
                className="group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-10 solution-card-interaction hover:border-[var(--accent)]/40 flex flex-col justify-between shadow-xs transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono tracking-widest text-[var(--accent)] font-semibold uppercase">
                      {prod.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[var(--accent)] card-hover-arrow" />
                      <Icon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent)] card-icon transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2 font-sans">
                    {prod.name}
                  </h3>

                  <div className="text-xl sm:text-2xl font-serif italic text-[var(--accent)] mb-4 font-normal">
                    &ldquo;{prod.headlineQuote}&rdquo;
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                    {prod.tagline}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                      Core Capabilities
                    </span>
                    {prod.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    href={`/solutions/${prod.shortSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                  >
                    <span>Explore {prod.name.replace("ARKAPRANA ", "")} →</span>
                  </Link>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
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
                className="group relative rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-7 solution-card-interaction hover:border-[var(--accent)]/40 flex flex-col justify-between shadow-xs transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
                    <span className="text-[9px] font-mono tracking-widest text-[var(--text-muted)] font-semibold uppercase">
                      {prod.badge}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] card-hover-arrow" />
                      <Icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] card-icon transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] mb-1">
                    {prod.name}
                  </h3>

                  <div className="text-base font-serif italic text-[var(--text-secondary)] mb-3 font-normal">
                    &ldquo;{prod.headlineQuote}&rdquo;
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                    {prod.tagline}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {prod.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-[11px] text-[var(--text-primary)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href={`/solutions/${prod.shortSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                  >
                    <span>Explore {prod.name.replace("ARKAPRANA ", "")} →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Lead-Gen CTA Strip (Theme-Adaptive) */}
        <div className="rounded-2xl bg-[var(--bg-card)] text-[var(--text-primary)] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[var(--border-subtle)] shadow-xl transition-colors duration-300">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block font-semibold">
              Architectural Consulting
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Membutuhkan kajian arsitektur sistem khusus?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Diskusikan kebutuhan integrasi infrastruktur, kedaulatan data, atau implementasi private AI langsung bersama prinsipal arsitek teknologi ARKAPRANA.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-all shrink-0 shadow-sm active:scale-[0.98] btn-primary-interaction group"
          >
            <span>Talk to an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--btn-primary-text)] cta-arrow" />
          </Link>
        </div>

      </div>
    </section>
  );
}
