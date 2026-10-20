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
      className="relative py-24 md:py-36 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-[11px] font-mono text-slate-700 dark:text-white/70 backdrop-blur-md mb-2 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">
              {t("impact_badge", "09 · ECONOMIC IMPACT · SCALED ROI")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-[1.18] font-display">
            {t("impact_title_1", "Why this matters")}
          </h2>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-400 dark:text-white/45 tracking-tight leading-[1.18] font-display">
            {t("impact_title_2", "in 2030 and beyond.")}
          </h2>
        </div>

        {/* Master Chart & Metrics Container (Rounded Border Box from Image 1) */}
        <div className="rounded-[28px] border border-slate-200 dark:border-slate-700/60 bg-white/95 dark:bg-[#131B2E]/95 p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Striated Striped Bar Chart (Span 6) */}
            <div className="lg:col-span-6 relative">
              
              {/* Chart Coordinate Area (Height: 440px) */}
              <div className="relative h-[440px] w-full pt-8 pb-4">
                
                {/* Horizontal Dashed Grid Lines (Spanning full chart width from left numbers) */}
                <div className="absolute inset-x-0 bottom-[75px] top-6 pointer-events-none">
                  {/* 15x Line (Positioned at bottom-[215px] so 17.5x bar at 280px rises 65px ABOVE IT) */}
                  <div className="absolute bottom-[215px] inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-slate-500 dark:text-white/50 shrink-0 text-right">15x</span>
                    <div className="w-full h-px border-b border-dashed border-slate-300 dark:border-white/20" />
                  </div>

                  {/* 10x Line */}
                  <div className="absolute bottom-[150px] inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-slate-400 dark:text-white/45 shrink-0 text-right">10x</span>
                    <div className="w-full h-px border-b border-dashed border-slate-200 dark:border-white/15" />
                  </div>

                  {/* 5x Line */}
                  <div className="absolute bottom-[85px] inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-slate-400 dark:text-white/45 shrink-0 text-right">5x</span>
                    <div className="w-full h-px border-b border-dashed border-slate-200 dark:border-white/15" />
                  </div>

                  {/* 1x Baseline */}
                  <div className="absolute bottom-0 inset-x-0 flex items-center gap-3 w-full">
                    <span className="w-8 text-[11px] font-mono text-slate-600 dark:text-white/55 shrink-0 text-right font-medium">1x</span>
                    <div className="w-full h-px border-b border-dashed border-slate-300 dark:border-white/30" />
                  </div>
                </div>

                {/* 3 Rising Animated Bars (Sitting exactly on bottom-[75px] baseline) */}
                <div className="absolute inset-x-0 bottom-0 top-0 pl-11 pr-2 grid grid-cols-3 gap-4 sm:gap-7 pointer-events-none">
                  
                  {/* Bar 1: 1x (Non-digital incumbents) */}
                  <div className="relative h-full flex flex-col justify-end">
                    {/* Bar and top number */}
                    <div className="absolute bottom-[75px] inset-x-0 flex flex-col items-center">
                      <span className={`font-display text-lg sm:text-xl font-light text-slate-600 dark:text-white/70 mb-2 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}>
                        1<span className="text-xs">x</span>
                      </span>
                      <div
                        className="w-full rounded-md border border-slate-300 dark:border-white/25 transition-all duration-1000 ease-out bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.35)_0,rgba(15,23,42,0.35)_2px,transparent_2px,transparent_4px)] dark:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.7)_0,rgba(255,255,255,0.7)_2px,transparent_2px,transparent_4px)]"
                        style={{
                          height: isVisible ? "18px" : "0px",
                        }}
                      />
                    </div>
                    {/* Bottom Label (Below baseline) */}
                    <div className="h-[75px] flex flex-col justify-start pt-3 text-center">
                      <span className="block text-[11px] font-medium text-slate-800 dark:text-white/90 leading-tight">
                        {language === "en" ? "Non-digital incumbents" : "Perusahaan Non-Digital"}
                      </span>
                      <span className="block text-[9.5px] font-mono text-slate-500 dark:text-white/40 mt-1">
                        {language === "en" ? "Baseline productivity" : "Produktivitas baseline"}
                      </span>
                    </div>
                  </div>

                  {/* Bar 2: 3x (Digital-native businesses) */}
                  <div className="relative h-full flex flex-col justify-end">
                    {/* Bar and top number */}
                    <div className="absolute bottom-[75px] inset-x-0 flex flex-col items-center">
                      <span className={`font-display text-xl sm:text-2xl font-light text-slate-900 dark:text-white mb-2 transition-all duration-700 delay-150 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}>
                        3<span className="text-xs">x</span>
                      </span>
                      <div
                        className="w-full rounded-md border border-slate-400 dark:border-white/40 transition-all duration-1000 delay-150 ease-out bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.65)_0,rgba(15,23,42,0.65)_2px,transparent_2px,transparent_4px)] dark:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.85)_0,rgba(255,255,255,0.85)_2px,transparent_2px,transparent_4px)]"
                        style={{
                          height: isVisible ? "52px" : "0px",
                        }}
                      />
                    </div>
                    {/* Bottom Label */}
                    <div className="h-[75px] flex flex-col justify-start pt-3 text-center">
                      <span className="block text-[11px] font-medium text-slate-800 dark:text-white/90 leading-tight">
                        {language === "en" ? "Digital-native businesses" : "Bisnis Digital Asli"}
                      </span>
                      <span className="block text-[9.5px] font-mono text-slate-500 dark:text-white/40 mt-1">
                        {language === "en" ? "More productive" : "Lebih produktif"}
                      </span>
                    </div>
                  </div>

                  {/* Bar 3: 17.5x (AI-native businesses - VISIBLY 65PX HIGHER THAN 15X LINE!) */}
                  <div className="relative h-full flex flex-col justify-end">
                    {/* Bar and top number */}
                    <div className="absolute bottom-[75px] inset-x-0 flex flex-col items-center">
                      <span className={`font-display text-3xl sm:text-4xl lg:text-[44px] font-light text-slate-950 dark:text-white mb-2 tracking-tight transition-all duration-700 delay-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}>
                        17.5<span className="text-sm">x</span>
                      </span>
                      {/* Bar height is 280px! Baseline is 75px, top is 355px, while 15x line is at 290px (75 + 215). Exactly 65px above 15x line! */}
                      <div
                        className={`w-full rounded-md border-2 border-[#0284C7] dark:border-white shadow-[0_0_25px_rgba(2,132,199,0.3)] dark:shadow-[0_0_35px_rgba(255,255,255,0.45)] transition-all duration-1200 delay-300 ease-out bg-[repeating-linear-gradient(0deg,#0284C7_0,#0284C7_2.5px,transparent_2.5px,transparent_5px)] dark:bg-[repeating-linear-gradient(0deg,#FFFFFF_0,#FFFFFF_2.5px,transparent_2.5px,transparent_5px)] ${
                          isVisible ? "animate-scanlines" : ""
                        }`}
                        style={{
                          height: isVisible ? "280px" : "0px",
                          backgroundSize: "100% 16px",
                        }}
                      />
                    </div>
                    {/* Bottom Label */}
                    <div className="h-[75px] flex flex-col justify-start pt-3 text-center">
                      <span className="block text-[11px] font-semibold text-slate-900 dark:text-white leading-tight">
                        {language === "en" ? "AI-native businesses" : "Bisnis Berbasis AI"}
                      </span>
                      <span className="block text-[9.5px] font-mono text-[#0284C7] dark:text-[#38BDF8] mt-1 font-semibold">
                        {language === "en" ? "Most productive" : "Paling produktif"}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column: 2x2 Impact Metric Grid (Span 6, Exact Replica of Image 1) */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02] divide-y divide-slate-200 dark:divide-white/[0.08] overflow-hidden">
              
              {/* Row 1: 3x EBIT growth & 2.5 hrs/day Time saved */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/[0.08]">
                
                {/* Metric 1 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-slate-900 dark:text-white flex items-baseline gap-1">
                    <span>3</span>
                    <span className="text-lg text-slate-500 dark:text-white/60">x</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_ebit", "EBIT GROWTH")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                      {t("impact_ebit_desc", "High performers achieve 3x EBIT impact, and the gap widens every quarter.")}
                    </p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-slate-900 dark:text-white flex items-baseline gap-1">
                    <span>2.5</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-white/60 font-light">
                      {language === "en" ? "hrs/day" : "jam/hari"}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_time", "TIME SAVED")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                      {t("impact_time_desc", "Every employee saves 2.5 hrs a day; operational productivity compounds.")}
                    </p>
                  </div>
                </div>

              </div>

              {/* Row 2: 54% Faster decisions & 2 year window The window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/[0.08]">
                
                {/* Metric 3 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-slate-900 dark:text-white flex items-baseline gap-1">
                    <span>54</span>
                    <span className="text-lg text-slate-500 dark:text-white/60">%</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_decision", "FASTER DECISIONS")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                      {t("impact_decision_desc", "Organizations report 54% efficiency gains from AI, with 61% automation.")}
                    </p>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-6 sm:p-7 space-y-3 group hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="font-display text-4xl sm:text-5xl font-light text-slate-900 dark:text-white flex items-baseline gap-1">
                    <span>2</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-white/60 font-light">
                      {language === "en" ? "year window" : "jendela 2 thn"}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 font-mono">
                      {t("impact_window", "THE WINDOW")}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                      {t("impact_window_desc", "Two years before the leader–laggard technology gap turns structural (McKinsey).")}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Sources Footnote (Exact Copy from Image 1) */}
          <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/[0.06] text-[11px] font-mono text-slate-500 dark:text-white/40">
            {language === "en"
              ? "Sources: McKinsey State of AI 2025, PwC AI Jobs Barometer 2025, LSE Inclusion Initiative × Protiviti 2025. Figures illustrative."
              : "Sumber: Riset McKinsey State of AI 2025, PwC AI Jobs Barometer 2025, LSE Inclusion Initiative × Protiviti 2025. Angka bersifat ilustratif."}
          </div>

        </div>

      </div>
    </section>
  );
}
