"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function AiProcessingBlueprint() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [animStage, setAnimStage] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const { theme } = useTheme();

  const isLight = theme === "light";

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
          setAnimStage(1);
          setTimeout(() => setAnimStage(2), 900);
          setTimeout(() => setAnimStage(3), 1900);
          setTimeout(() => setAnimStage(4), 2900);
          setTimeout(() => setAnimStage(5), 3800);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasRun]);

  const activeColor = isLight ? "#1769E0" : "#38bdf8";
  const glowColor = isLight ? "rgba(23, 105, 224, 0.4)" : "#00f0ff";
  const strokeBase = isLight ? "rgba(100, 116, 139, 0.2)" : "rgba(255, 255, 255, 0.08)";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="w-full my-6 p-5 sm:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] relative overflow-hidden pointer-events-none select-none transition-colors duration-300 shadow-xs"
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4 pb-2 border-b border-[var(--border-subtle)]">
        <span>SOVEREIGN DATA PIPELINE // SCHEMATIC</span>
        <span className="text-[var(--accent)] flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
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
          <linearGradient id="aiProcGrad" x1="0" y1="0" x2="780" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={activeColor} stopOpacity="0.25" />
            <stop offset="50%" stopColor={activeColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={activeColor} stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Highway Bus */}
        <line
          x1="60"
          y1="90"
          x2="720"
          y2="90"
          stroke="url(#aiProcGrad)"
          strokeWidth="1.2"
          strokeDasharray="660"
          strokeDashoffset={animStage >= 1 ? "0" : "660"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 1200ms cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />

        {/* Stage 1: Document */}
        <g
          style={{
            opacity: animStage >= 1 ? 1 : 0.2,
            transition: "opacity 500ms ease"
          }}
        >
          <rect
            x="30"
            y="45"
            width="90"
            height="90"
            rx="8"
            stroke={animStage === 1 ? activeColor : strokeBase}
            strokeWidth="1"
            fill={isLight ? "rgba(23, 105, 224, 0.04)" : "rgba(255, 255, 255, 0.02)"}
          />
          <text x="75" y="85" textAnchor="middle" fill={isLight ? "#111827" : "#FFFFFF"} fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            DOCUMENTS
          </text>
          <text x="75" y="100" textAnchor="middle" fill={isLight ? "#667085" : "#94A3B8"} fontSize="8" fontFamily="monospace">
            01_INGEST
          </text>
        </g>

        {/* Stage 2: Processing & Vectorizing */}
        <g
          style={{
            opacity: animStage >= 2 ? 1 : 0.2,
            transition: "opacity 500ms ease"
          }}
        >
          <rect
            x="200"
            y="45"
            width="100"
            height="90"
            rx="8"
            stroke={animStage === 2 ? activeColor : strokeBase}
            strokeWidth="1"
            fill={isLight ? "rgba(23, 105, 224, 0.04)" : "rgba(255, 255, 255, 0.02)"}
          />
          <text x="250" y="85" textAnchor="middle" fill={isLight ? "#111827" : "#FFFFFF"} fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            CHUNKING
          </text>
          <text x="250" y="100" textAnchor="middle" fill={isLight ? "#667085" : "#94A3B8"} fontSize="8" fontFamily="monospace">
            02_EMBED
          </text>
        </g>

        {/* Stage 3: Sovereign Vector Store */}
        <g
          style={{
            opacity: animStage >= 3 ? 1 : 0.2,
            transition: "opacity 500ms ease"
          }}
        >
          <rect
            x="380"
            y="45"
            width="100"
            height="90"
            rx="8"
            stroke={animStage === 3 ? activeColor : strokeBase}
            strokeWidth="1"
            fill={isLight ? "rgba(23, 105, 224, 0.04)" : "rgba(255, 255, 255, 0.02)"}
          />
          <text x="430" y="85" textAnchor="middle" fill={isLight ? "#111827" : "#FFFFFF"} fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            VECTOR INDEX
          </text>
          <text x="430" y="100" textAnchor="middle" fill={isLight ? "#667085" : "#94A3B8"} fontSize="8" fontFamily="monospace">
            03_STORAGE
          </text>
        </g>

        {/* Stage 4: On-Prem LLM Core */}
        <g
          style={{
            opacity: animStage >= 4 ? 1 : 0.2,
            transition: "opacity 500ms ease"
          }}
        >
          <rect
            x="560"
            y="45"
            width="90"
            height="90"
            rx="8"
            stroke={animStage === 4 ? activeColor : strokeBase}
            strokeWidth="1"
            fill={isLight ? "rgba(23, 105, 224, 0.04)" : "rgba(255, 255, 255, 0.02)"}
          />
          <text x="605" y="85" textAnchor="middle" fill={isLight ? "#111827" : "#FFFFFF"} fontSize="9.5" fontFamily="monospace" fontWeight="bold">
            ON-PREM LLM
          </text>
          <text x="605" y="100" textAnchor="middle" fill={isLight ? "#667085" : "#94A3B8"} fontSize="8" fontFamily="monospace">
            04_REASON
          </text>
        </g>

        {/* Stage 5: Verified Output */}
        <g
          style={{
            opacity: animStage >= 5 ? 1 : 0.2,
            transition: "opacity 500ms ease"
          }}
        >
          <circle
            cx="720"
            cy="90"
            r="16"
            stroke={animStage >= 5 ? activeColor : strokeBase}
            strokeWidth="1.2"
            fill={isLight ? "rgba(23, 105, 224, 0.08)" : "rgba(255, 255, 255, 0.04)"}
          />
          <circle cx="720" cy="90" r="4" fill={activeColor} />
          <text x="720" y="125" textAnchor="middle" fill={activeColor} fontSize="8" fontFamily="monospace" fontWeight="bold">
            05_ANSWER
          </text>
        </g>

        {/* Occasional Pulse Dot */}
        {animStage >= 5 && !isReducedMotion && (
          <circle r="2.2" fill={activeColor} filter={`drop-shadow(0 0 3px ${glowColor})`}>
            <animateMotion
              path="M 60 90 L 720 90"
              dur="12s"
              repeatCount="indefinite"
              keyTimes="0; 0.35; 0.4; 1"
              keyPoints="0; 1; 1; 1"
            />
          </circle>
        )}
      </svg>
    </div>
  );
}
