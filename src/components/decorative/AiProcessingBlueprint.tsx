"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AiProcessingBlueprint() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [animStage, setAnimStage] = useState(0); // 0: init, 1: doc, 2: knowledge, 3: core, 4: answer, 5: idle
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      setAnimStage(5);
      setHasRun(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          // Sequential single-run animation: total ~3.8 seconds, then stop (Items 15 & 16)
          setAnimStage(1); // Document appears (0ms)
          setTimeout(() => setAnimStage(2), 900);  // Knowledge connects (900ms)
          setTimeout(() => setAnimStage(3), 1900); // AI core processes (1900ms)
          setTimeout(() => setAnimStage(4), 2900); // Answer appears (2900ms)
          setTimeout(() => setAnimStage(5), 3800); // Stop main loop; only tiny micro-indicator remains
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasRun]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="w-full my-6 p-5 sm:p-7 rounded-2xl bg-[#030612]/95 border border-white/[0.08] relative overflow-hidden pointer-events-none select-none"
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-white/[0.06]">
        <span>SOVEREIGN DATA PIPELINE // SCHEMATIC</span>
        <span className="text-cyan-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {animStage >= 5 ? "SYSTEM IDLE // VERIFIED" : "SEQUENTIAL PROCESSING"}
        </span>
      </div>

      <svg
        viewBox="0 0 780 180"
        className="w-full h-auto living-blueprint-line"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aiRefinedGrad" x1="0" y1="90" x2="780" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ========================================================
            STAGE 1: DOCUMENT CHASSIS
            ======================================================== */}
        <g
          style={{
            opacity: animStage >= 1 ? 0.9 : 0.2,
            transition: isReducedMotion ? "none" : "opacity 500ms ease"
          }}
        >
          <polygon
            points="40,35 90,35 110,55 110,145 40,145"
            stroke="rgba(56, 189, 248, 0.45)"
            strokeWidth="1.2"
            fill="rgba(56, 189, 248, 0.02)"
          />
          <polyline points="90,35 90,55 110,55" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1" />
          <line x1="52" y1="65" x2="98" y2="65" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="52" y1="80" x2="98" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="52" y1="95" x2="85" y2="95" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="52" y1="110" x2="98" y2="110" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 3" />

          <text x="75" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            DOCUMENT
          </text>
          <text x="75" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            01 / INGEST
          </text>
        </g>

        {/* Connective Line: Document -> Knowledge */}
        <line
          x1="110"
          y1="90"
          x2="220"
          y2="90"
          stroke="url(#aiRefinedGrad)"
          strokeWidth="1.2"
          strokeDasharray="110"
          strokeDashoffset={animStage >= 2 ? "0" : "110"}
          style={{ transition: isReducedMotion ? "none" : "stroke-dashoffset 600ms ease" }}
        />

        {/* ========================================================
            STAGE 2: KNOWLEDGE GRAPH NODES
            ======================================================== */}
        <g
          style={{
            opacity: animStage >= 2 ? 0.9 : 0.2,
            transition: isReducedMotion ? "none" : "opacity 500ms ease"
          }}
        >
          <line x1="220" y1="90" x2="255" y2="55" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
          <line x1="220" y1="90" x2="255" y2="125" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
          <line x1="255" y1="55" x2="300" y2="90" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
          <line x1="255" y1="125" x2="300" y2="90" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />

          <circle cx="220" cy="90" r="3.5" fill="#38bdf8" />
          <circle cx="255" cy="55" r="3.5" fill="#00f0ff" />
          <circle cx="255" cy="125" r="3.5" fill="#00f0ff" />
          <circle cx="300" cy="90" r="4.5" fill="#030712" stroke="#38bdf8" strokeWidth="1.2" />
          <circle cx="300" cy="90" r="2" fill="#ffffff" />

          <text x="260" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            KNOWLEDGE
          </text>
          <text x="260" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            02 / VECTOR
          </text>
        </g>

        {/* Connective Line: Knowledge -> Core */}
        <line
          x1="300"
          y1="90"
          x2="410"
          y2="90"
          stroke="url(#aiRefinedGrad)"
          strokeWidth="1.2"
          strokeDasharray="110"
          strokeDashoffset={animStage >= 3 ? "0" : "110"}
          style={{ transition: isReducedMotion ? "none" : "stroke-dashoffset 600ms ease" }}
        />

        {/* ========================================================
            STAGE 3: NEURAL AI PROCESSING CORE
            ======================================================== */}
        <g
          style={{
            opacity: animStage >= 3 ? 0.95 : 0.2,
            transition: isReducedMotion ? "none" : "opacity 500ms ease"
          }}
        >
          <rect
            x="410"
            y="45"
            width="90"
            height="90"
            rx="4"
            stroke="rgba(0, 240, 255, 0.5)"
            strokeWidth="1.2"
            fill="rgba(0, 240, 255, 0.03)"
          />
          <rect
            x="424"
            y="59"
            width="62"
            height="62"
            rx="2"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="1"
            strokeDasharray="3 2"
          />

          {[55, 75, 95, 115].map((y) => (
            <React.Fragment key={`pad-${y}`}>
              <line x1="404" y1={y} x2="410" y2={y} stroke="#38bdf8" strokeWidth="1" />
              <line x1="500" y1={y} x2="506" y2={y} stroke="#38bdf8" strokeWidth="1" />
            </React.Fragment>
          ))}

          {/* Core Center Node */}
          <circle cx="455" cy="90" r="7" fill="#030712" stroke="#00f0ff" strokeWidth="1.2" />
          <circle cx="455" cy="90" r="3" fill="#ffffff" />

          {/* ITEM 16: ONLY ONE SMALL INDICATOR REMAINS ACTIVE AFTER ANIMATION FINISHES */}
          {animStage >= 5 && !isReducedMotion && (
            <circle cx="455" cy="90" r="12" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="0.8">
              <animate attributeName="r" values="7;14;7" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
          )}

          <text x="455" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            PRIVATE AI
          </text>
          <text x="455" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            03 / NEURAL CORE
          </text>
        </g>

        {/* Connective Line: Core -> Answer */}
        <line
          x1="500"
          y1="90"
          x2="610"
          y2="90"
          stroke="url(#aiRefinedGrad)"
          strokeWidth="1.2"
          strokeDasharray="110"
          strokeDashoffset={animStage >= 4 ? "0" : "110"}
          style={{ transition: isReducedMotion ? "none" : "stroke-dashoffset 600ms ease" }}
        />

        {/* ========================================================
            STAGE 4: GROUNDED ANSWER OUTPUT
            ======================================================== */}
        <g
          style={{
            opacity: animStage >= 4 ? 0.9 : 0.2,
            transition: isReducedMotion ? "none" : "opacity 500ms ease"
          }}
        >
          <circle cx="640" cy="90" r="22" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="640" cy="90" r="14" stroke="#00f0ff" strokeWidth="1.2" fill="rgba(0, 240, 255, 0.05)" />
          
          <polyline points="633,90 638,95 648,84" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          <text x="640" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            ANSWER
          </text>
          <text x="640" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            04 / GROUNDED
          </text>
        </g>
      </svg>
    </div>
  );
}
