"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NalarImpactChartSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Immediate fallback trigger
    const initialTimer = setTimeout(() => setIsVisible(true), 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(initialTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#08090D] text-white overflow-hidden border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70 backdrop-blur-md mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">
              {t("impact_badge", "09 · ECONOMIC IMPACT · SCALED ROI")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.18] font-display">
            {t("impact_title_1", "Why this matters")}
          </h2>
          <h2 className="text-3xl sm:text-5xl font-light text-white/45 tracking-tight leading-[1.18] font-display">
            {t("impact_title_2", "in 2030 and beyond.")}
          </h2>
        </div>

        {/* Master Chart & Metrics Container (Rounded Border Box from Image 1) */}
        <div className="rounded-[28px] border border-white/10 bg-[#0C0E15]/95 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Striated Striped Bar Chart (Span 6) */}
            <div className="lg:col-span-6 relative">
              
              {/* Chart Coordinate Area (Height: 440px) */}
              <div className="relative h-[440px] w-full pt-8 pb-4">
                
                {/* Horizontal Dashed Grid Lines (Spanning full chart width from left numbers) */}
                <div className="absolute inset-x-0 bottom-[75px] top-6 pointer-events-none">
                  {/* 15x Line (Positioned at bottom-[215px] so 17.5x bar at 280px rises 65px ABOVE IT) */}
                  <div className="absolute bottom-[215px] inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-white/50 shrink-0 text-right">15x</span>
                    <div className="w-full h-px border-b border-dashed border-white/20" />
                  </div>

                  {/* 10x Line */}
                  <div className="absolute bottom-[150px] inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-white/45 shrink-0 text-right">10x</span>
                    <div className="w-full h-px border-b border-dashed border-white/15" />
                  </div>

                  {/* 5x Line */}
                  <div className="absolute bottom-[85px] inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-white/45 shrink-0 text-right">5x</span>
                    <div className="w-full h-px border-b border-dashed border-white/15" />
                  </div>

                  {/* 1x Baseline */}
                  <div className="absolute bottom-0 inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-white/55 shrink-0 text-right">1x</span>
                    <div className="w-full h-px border-b border-dashed border-white/30" />
                  </div>
                </div>

                {/* 3 Rising Animated Bars (Sitting exactly on bottom-[75px] baseline) */}
                <div className="absolute inset-x-0 bottom-0 top-0 pl-11 pr-2 grid grid-cols-3 gap-4 sm:gap-7 pointer-events-none">
                  
                  {/* Bar 1: 1x (Non-digital incumbents) */}
                  <div className="relative h-full flex flex-col justify-end">
                    {/* Bar and top number */}
                    <div className="absolute bottom-[75px] inset-x-0 flex flex-col items-center">
                      <span className={`font-display text-lg sm:text-xl font-light text-white/70 mb-2 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}>
                        1<span className="text-xs">x</span>
                      </span>
                      <div
                        className="w-full rounded-md border border-white/25 transition-all duration-1000 ease-out"
                        style={{
                          height: isVisible ? "18px" : "0px",
                          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.7) 0, rgba(255,255,255,0.7) 2px, transparent 2px, transparent 4px)",
                        }}
                      />
                    </div>
                    {/* Bottom Label (Below baseline) */}
                    <div className="h-[75px] flex flex-col justify-start pt-3 text-center">
                      <span className="block text-[11px] font-medium text-white/90 leading-tight">
                        {language === "en" ? "Non-digital incumbents" : "Perusahaan Non-Digital"}
                      </span>
                      <span className="block text-[9.5px] font-mono text-white/40 mt-1">
                        {language === "en" ? "Baseline productivity" : "Produktivitas baseline"}
                      </span>
                    </div>
                  </div>

                  {/* Bar 2: 3x (Digital-native businesses) */}
                  <div className="relative h-full flex flex-col justify-end">
                    {/* Bar and top number */}
                    <div className="absolute bottom-[75px] inset-x-0 flex flex-col items-center">
                      <span className={`font-display text-xl sm:text-2xl font-light text-white mb-2 transition-all duration-700 delay-150 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}>
                        3<span className="text-xs">x</span>
                      </span>
                      <div
                        className="w-full rounded-md border border-white/40 transition-all duration-1000 delay-150 ease-out"
                        style={{
                          height: isVisible ? "52px" : "0px",
                          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.85) 0, rgba(255,255,255,0.85) 2px, transparent 2px, transparent 4px)",
                        }}
                      />
                    </div>
                    {/* Bottom Label */}
                    <div className="h-[75px] flex flex-col justify-start pt-3 text-center">
                      <span className="block text-[11px] font-medium text-white/90 leading-tight">
                        {language === "en" ? "Digital-native businesses" : "Bisnis Digital Asli"}
                      </span>
                      <span className="block text-[9.5px] font-mono text-white/40 mt-1">
                        {language === "en" ? "More productive" : "Lebih produktif"}
                      </span>
                    </div>
                  </div>

                  {/* Bar 3: 17.5x (AI-native businesses - VISIBLY 65PX HIGHER THAN 15X LINE!) */}
                  <div className="relative h-full flex flex-col justify-end">
                    {/* Bar and top number */}
                    <div className="absolute bottom-[75px] inset-x-0 flex flex-col items-center">
                      <span className={`font-display text-3xl sm:text-4xl lg:text-[44px] font-light text-white mb-2 tracking-tight transition-all duration-700 delay-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}>
                        17.5<span className="text-sm">x</span>
                      </span>
                      {/* Bar height is 280px! Baseline is 75px, top is 355px, while 15x line is at 290px (75 + 215). Exactly 65px above 15x line! */}
                      <div
                        className={`w-full rounded-md border-2 border-white shadow-[0_0_35px_rgba(255,255,255,0.45)] transition-all duration-1200 delay-300 ease-out ${
                          isVisible ? "animate-scanlines" : ""
                        }`}
                        style={{
                          height: isVisible ? "280px" : "0px",
                          backgroundImage: "repeating-linear-gradient(0deg, #FFFFFF 0, #FFFFFF 2.5px, transparent 2.5px, transparent 5px)",
                          backgroundSize: "100% 16px",
                        }}
                      />
                    </div>
                    {/* Bottom Label */}
                    <div className="h-[75px] flex flex-col justify-start pt-3 text-center">
                      <span className="block text-[11px] font-semibold text-white leading-tight">
                        {language === "en" ? "AI-native businesses" : "Bisnis Berbasis AI"}
                      </span>
                      <span className="block text-[9.5px] font-mono text-[#38BDF8] mt-1 font-medium">
                        {language === "en" ? "Most productive" : "Paling produktif"}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column: 2x2 Impact Metric Grid (Span 6, Exact Replica of Image 1) */}
            <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] divide-y divide-white/[0.08] overflow-hidden">
              
              {/* Row 1: 3x EBIT growth & 2.5 hrs/day Time saved */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                
                {/* Metric 1 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-white flex items-baseline gap-1">
                    <span>3</span>
                    <span className="text-lg text-white/60">x</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_ebit", "EBIT GROWTH")}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {t("impact_ebit_desc", "High performers achieve 3x EBIT impact, and the gap widens every quarter.")}
                    </p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-white flex items-baseline gap-1">
                    <span>2.5</span>
                    <span className="text-xs font-mono text-white/60 font-light">
                      {language === "en" ? "hrs/day" : "jam/hari"}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_time", "TIME SAVED")}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {t("impact_time_desc", "Every employee saves 2.5 hrs a day; operational productivity compounds.")}
                    </p>
                  </div>
                </div>

              </div>

              {/* Row 2: 54% Faster decisions & 2 year window The window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                
                {/* Metric 3 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-white flex items-baseline gap-1">
                    <span>54</span>
                    <span className="text-lg text-white/60">%</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_decision", "FASTER DECISIONS")}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {t("impact_decision_desc", "Organizations report 54% efficiency gains from AI, with 61% automation.")}
                    </p>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-white flex items-baseline gap-1">
                    <span>2</span>
                    <span className="text-xs font-mono text-white/60 font-light">
                      {language === "en" ? "year window" : "jendela 2 thn"}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_window", "THE WINDOW")}
                    </h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">
                      {t("impact_window_desc", "Two years before the leader–laggard technology gap turns structural (McKinsey).")}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Sources Footnote (Exact Copy from Image 1) */}
          <div className="pt-8 mt-8 border-t border-white/[0.06] text-[11px] font-mono text-white/40">
            {language === "en"
              ? "Sources: McKinsey State of AI 2025, PwC AI Jobs Barometer 2025, LSE Inclusion Initiative × Protiviti 2025. Figures illustrative."
              : "Sumber: Riset McKinsey State of AI 2025, PwC AI Jobs Barometer 2025, LSE Inclusion Initiative × Protiviti 2025. Angka bersifat ilustratif."}
          </div>

        </div>

      </div>
    </section>
  );
}
