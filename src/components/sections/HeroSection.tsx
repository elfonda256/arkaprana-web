"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import NetworkTopologyCanvas from "@/components/canvas/NetworkTopologyCanvas";
import NalarWaveOrbits from "@/components/decorative/NalarWaveOrbits";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#08090D] transition-colors duration-300">
      {/* 1. Abstract Topology Canvas */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_75%,transparent)] -z-20">
        <NetworkTopologyCanvas />
      </div>

      {/* 2. Responsive Nalar-Style SVG Waveforms, Concentric Orbits & Atmospheric Drifting Mist */}
      <NalarWaveOrbits />

      {/* 3. Subtle ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(56,189,248,0.09),transparent_80%)] pointer-events-none -z-10" />

      {/* Edge Fades for Seamless Section Transition */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#08090D] via-[#08090D]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08090D] to-transparent pointer-events-none" />

      {/* Main Center Editorial Content (Exact Layout of Nalarx Image 3) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-mono text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase text-[10.5px] text-white/90">
              {t("hero_badge", "SOVEREIGN INTELLIGENCE & INFRASTRUCTURE LAYER")}
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-normal tracking-tight text-white leading-[1.14] font-serif max-w-4xl mx-auto">
            {t("hero_headline", "The AI Intelligence Layer for Enterprise Infrastructure & Agents")}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed font-light">
            {t(
              "hero_desc",
              "ARKAPRANA connects every router, modular data center, and enterprise system in your company — turning telemetry and internal knowledge into sovereign autonomous actions."
            )}
          </p>

          {/* Centered Dual Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            {/* White Solid Pill "Book a Demo" */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/95 transition-all shadow-[0_0_28px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{t("hero_cta_demo", "Book a Demo")}</span>
            </Link>

            {/* "See How it Works" Text Link */}
            <Link
              href="#product-showcase"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/75 hover:text-white transition-colors group py-2"
            >
              <span>{t("hero_cta_see_how", "See How it Works")}</span>
              <ChevronRight className="w-4 h-4 text-white/50 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
