"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AiProcessingBlueprint() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="w-full my-6 p-5 sm:p-7 rounded-2xl bg-[#020612]/90 border border-white/[0.08] relative overflow-hidden pointer-events-none select-none"
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-white/[0.06]">
        <span>SOVEREIGN INGESTION &amp; NEURAL ENGINE // SCHEMATIC BLUEPRINT</span>
        <span className="text-cyan-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          AIR-GAPPED VECTOR COMPUTE
        </span>
      </div>

      <svg
        viewBox="0 0 780 180"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aiBlueprintGrad" x1="0" y1="90" x2="780" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ========================================================
            STAGE 1: DOCUMENT CHASSIS (LEFT)
            Schematic blueprint of unstructured enterprise files
            ======================================================== */}
        <g opacity="0.8">
          {/* Document Boundary */}
          <polygon
            points="40,35 90,35 110,55 110,145 40,145"
            stroke="rgba(56, 189, 248, 0.4)"
            strokeWidth="1.2"
            fill="rgba(56, 189, 248, 0.02)"
          />
          <polyline points="90,35 90,55 110,55" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />

          {/* Internal Content Track Vectors */}
          <line x1="52" y1="65" x2="98" y2="65" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="52" y1="80" x2="98" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="52" y1="95" x2="85" y2="95" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="52" y1="110" x2="98" y2="110" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 3" />

          <text x="75" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            DOCUMENT
          </text>
          <text x="75" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            INGESTION
          </text>
        </g>

        {/* Connective Highway 1: Document to Knowledge */}
        <path
          id="aiPathDocToKnowledge"
          d="M 110 90 L 220 90"
          stroke="url(#aiBlueprintGrad)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* ========================================================
            STAGE 2: KNOWLEDGE GRAPH NODES (CENTER-LEFT)
            Interconnected vector topology
            ======================================================== */}
        <g opacity="0.85">
          {/* Constellation Vectors */}
          <line x1="220" y1="90" x2="255" y2="55" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <line x1="220" y1="90" x2="255" y2="125" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <line x1="255" y1="55" x2="300" y2="90" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <line x1="255" y1="125" x2="300" y2="90" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <line x1="255" y1="55" x2="255" y2="125" stroke="rgba(0, 240, 255, 0.25)" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Graph Nodes */}
          <circle cx="220" cy="90" r="3.5" fill="#38bdf8" />
          <circle cx="255" cy="55" r="3.5" fill="#00f0ff" />
          <circle cx="255" cy="125" r="3.5" fill="#00f0ff" />
          <circle cx="300" cy="90" r="4.5" fill="#030712" stroke="#38bdf8" strokeWidth="1.2" />
          <circle cx="300" cy="90" r="2" fill="#ffffff" />

          <text x="260" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            KNOWLEDGE
          </text>
          <text x="260" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            VECTOR INDEX
          </text>
        </g>

        {/* Connective Highway 2: Knowledge to AI Core */}
        <path
          id="aiPathKnowledgeToCore"
          d="M 300 90 L 410 90"
          stroke="url(#aiBlueprintGrad)"
          strokeWidth="1.2"
        />

        {/* ========================================================
            STAGE 3: NEURAL AI PROCESSING CORE (CENTER-RIGHT)
            Technical processor chassis with air-gap perimeter
            ======================================================== */}
        <g opacity="0.9">
          {/* Air-Gapped Outer Perimeter */}
          <rect
            x="410"
            y="45"
            width="90"
            height="90"
            rx="6"
            stroke="rgba(0, 240, 255, 0.45)"
            strokeWidth="1.2"
            fill="rgba(0, 240, 255, 0.03)"
          />
          {/* Inner Concentric Core */}
          <rect
            x="424"
            y="59"
            width="62"
            height="62"
            rx="3"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 2"
          />

          {/* Processor Micro-Pads */}
          {[55, 75, 95, 115].map((y) => (
            <line key={`padL-${y}`} x1="404" y1={y} x2="410" y2={y} stroke="#38bdf8" strokeWidth="1" />
          ))}
          {[55, 75, 95, 115].map((y) => (
            <line key={`padR-${y}`} x1="500" y1={y} x2="506" y2={y} stroke="#38bdf8" strokeWidth="1" />
          ))}

          {/* Core Center Node */}
          <circle cx="455" cy="90" r="7" fill="#030712" stroke="#00f0ff" strokeWidth="1.2" />
          <circle cx="455" cy="90" r="3" fill="#ffffff" />

          <text x="455" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            PRIVATE AI
          </text>
          <text x="455" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            ON-PREM INFERENCE
          </text>
        </g>

        {/* Connective Highway 3: AI Core to Answer */}
        <path
          id="aiPathCoreToAnswer"
          d="M 500 90 L 610 90"
          stroke="url(#aiBlueprintGrad)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* ========================================================
            STAGE 4: GROUNDED ANSWER OUTPUT (RIGHT)
            Validated response & automation dispatch
            ======================================================== */}
        <g opacity="0.85">
          <circle cx="640" cy="90" r="22" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="640" cy="90" r="14" stroke="#00f0ff" strokeWidth="1.2" fill="rgba(0, 240, 255, 0.05)" />
          
          {/* Precision Checkmark Outline */}
          <polyline points="633,90 638,95 648,84" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Radiating telemetry rays */}
          <line x1="640" y1="64" x2="640" y2="58" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
          <line x1="640" y1="116" x2="640" y2="122" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
          <line x1="666" y1="90" x2="672" y2="90" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />

          <text x="640" y="162" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="600">
            ANSWER
          </text>
          <text x="640" y="174" textAnchor="middle" fill="rgba(148, 163, 184, 0.7)" fontSize="7.5" fontFamily="monospace">
            VERIFIED GROUNDING
          </text>
        </g>

        {/* ========================================================
            SLOW ENERGY PULSE ALONG PIPELINE (16s cycle)
            Travels: Document -> Knowledge -> Core -> Answer -> Idle
            ======================================================== */}
        {!isReducedMotion && isVisible && (
          <circle r="2.5" fill="#ffffff" filter="drop-shadow(0 0 3px #00f0ff)">
            <animateMotion
              path="M 110 90 L 220 90 L 300 90 L 455 90 L 640 90"
              dur="16s"
              repeatCount="indefinite"
              keyTimes="0; 0.4; 0.45; 1"
              keyPoints="0; 1; 1; 1"
            />
          </circle>
        )}
      </svg>
    </div>
  );
}
