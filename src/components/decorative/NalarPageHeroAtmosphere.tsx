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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#08090D] text-white border-b border-white/10 transition-colors duration-300">
      {/* 1. Dynamic Responsive Nalar-Style SVG Waveforms, Concentric Orbits & Drifting Mist */}
      <NalarWaveOrbits />

      {/* 2. Subtle Coordinate Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 3. Subtle Ambient Center Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(56,189,248,0.08),transparent_80%)] pointer-events-none -z-10"
      />

      {/* Seamless Edge Fades */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#08090D] via-[#08090D]/80 to-transparent pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08090D] to-transparent pointer-events-none"
      />

      {/* 4. Main Centered Editorial Content with Fluid Entry Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70 backdrop-blur-md mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">{badgeText}</span>
          </div>
        )}

        <div className="space-y-2 max-w-4xl mx-auto mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-light text-white tracking-tight leading-[1.14] font-display">
            {headlinePrimary}
          </h1>
          {headlineSecondary && (
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-light text-white/45 tracking-tight leading-[1.14] font-display">
              {headlineSecondary}
            </h2>
          )}
        </div>

        <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
