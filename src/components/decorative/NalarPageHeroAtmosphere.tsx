"use client";

import React from "react";
import NalarWaveOrbits from "@/components/decorative/NalarWaveOrbits";

interface NalarPageHeroAtmosphereProps {
  badgeText?: string;
  headlinePrimary: string;
  headlineSecondary?: string;
  description: string;
  children?: React.ReactNode;
}

export default function NalarPageHeroAtmosphere({
  badgeText,
  headlinePrimary,
  headlineSecondary,
  description,
  children,
}: NalarPageHeroAtmosphereProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. Dynamic Responsive Nalar-Style SVG Waveforms, Concentric Orbits & Drifting Mist */}
      <NalarWaveOrbits />

      {/* 2. Subtle Coordinate Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 dark:opacity-15 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(2, 132, 199, 0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 3. Subtle Ambient Center Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(2,132,199,0.08),transparent_80%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(56,189,248,0.08),transparent_80%)] pointer-events-none -z-10"
      />

      {/* Seamless Edge Fades */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent dark:from-[#0B0F19] dark:via-[#0B0F19]/80 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent dark:from-[#0B0F19] pointer-events-none"
      />

      {/* 4. Main Centered Editorial Content with Fluid Entry Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/95 dark:bg-white/[0.05] text-[11px] font-mono text-slate-800 dark:text-white/90 backdrop-blur-md mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase font-medium">{badgeText}</span>
          </div>
        )}

        <div className="space-y-2 max-w-4xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-light text-slate-900 dark:text-white tracking-tight leading-[1.14] font-display">
            {headlinePrimary}
          </h1>
          {headlineSecondary && (
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-light text-slate-700 dark:text-white/75 tracking-tight leading-[1.14] font-display">
              {headlineSecondary}
            </h2>
          )}
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {description}
        </p>

        {children && (
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
