"use client";

import React, { useEffect, useRef, useState } from "react";
import BrandLogo from "@/components/brand/BrandLogo";

export default function FinalSignatureSection() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-[#02050E] text-white relative overflow-hidden border-t border-white/[0.08]"
      aria-label="ARKAPRANA Signature Thesis"
    >
      {/* Ambient background atmosphere */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-12">
        
        {/* Three Sequential Sentences (Section 25 verbatim) */}
        <div className="space-y-4">
          <div
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-300 font-sans transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
              transitionDelay: "100ms"
            }}
          >
            BUILD THE FOUNDATION.
          </div>

          <div
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
              transitionDelay: "450ms"
            }}
          >
            CONNECT THE SYSTEMS.
          </div>

          <div
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 font-sans transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
              transitionDelay: "800ms"
            }}
          >
            ENABLE THE INTELLIGENCE.
          </div>
        </div>

        {/* Separator Line */}
        <div
          className="w-16 h-0.5 bg-cyan-500/40 mx-auto transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scaleX(1)" : "scaleX(0)",
            transitionDelay: "1100ms"
          }}
        />

        {/* Static Corporate Lockup (Section 25 verbatim) */}
        <div
          className="pt-2 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 16px, 0)",
            transitionDelay: "1300ms"
          }}
        >
          <div className="flex justify-center">
            <BrandLogo variant="dark" size="lg" showWordmark={true} showDescriptor={false} />
          </div>

          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400">
            Technology &amp; Intelligent Solutions
          </p>

          <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-cyan-300 font-mono">
            BUILD. CONNECT. INTELLIGENCE.
          </p>
        </div>

      </div>
    </section>
  );
}
