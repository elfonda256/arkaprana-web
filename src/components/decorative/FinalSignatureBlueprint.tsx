"use client";

import React, { useEffect, useRef, useState } from "react";

export default function FinalSignatureBlueprint() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      setHasDrawn(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !hasDrawn) {
          setHasDrawn(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasDrawn]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-35"
    >
      <svg
        viewBox="0 0 900 450"
        className="w-[850px] sm:w-[1000px] h-auto max-w-none living-blueprint-line"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="finalBlueprintGrad" x1="0" y1="225" x2="900" y2="225" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* ========================================================
            FOUNDATION BASELINE BLUEPRINT GRID
            "BUILD THE FOUNDATION"
            ======================================================== */}
        <line
          x1="50"
          y1="340"
          x2="850"
          y2="340"
          stroke="url(#finalBlueprintGrad)"
          strokeWidth="1.2"
          strokeDasharray="800"
          strokeDashoffset={hasDrawn ? "0" : "800"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 1600ms cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />

        {/* Foundation Structural Pilings */}
        {[150, 300, 450, 600, 750].map((x) => (
          <line
            key={`piling-${x}`}
            x1={x}
            y1="340"
            x2={x}
            y2="390"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* ========================================================
            SYSTEM INTERCONNECT MESH
            "CONNECT THE SYSTEMS"
            ======================================================== */}
        <path
          d="M 120 340 L 260 220 L 450 220 L 640 220 L 780 340"
          stroke="rgba(56, 189, 248, 0.35)"
          strokeWidth="1"
          strokeDasharray="900"
          strokeDashoffset={hasDrawn ? "0" : "900"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 2000ms cubic-bezier(0.16, 1, 0.3, 1) 300ms"
          }}
        />

        {/* ========================================================
            INTELLIGENCE CONVERGENCE APEX
            "ENABLE THE INTELLIGENCE"
            ======================================================== */}
        <path
          d="M 260 220 L 450 100 L 640 220"
          stroke="rgba(0, 240, 255, 0.5)"
          strokeWidth="1.2"
          strokeDasharray="600"
          strokeDashoffset={hasDrawn ? "0" : "600"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 1800ms cubic-bezier(0.16, 1, 0.3, 1) 600ms"
          }}
        />

        {/* Apex Concentric Neural Core Node */}
        <g
          style={{
            opacity: hasDrawn ? 1 : 0,
            transform: hasDrawn ? "scale(1)" : "scale(0.8)",
            transformOrigin: "450px 100px",
            transition: isReducedMotion ? "none" : "opacity 800ms ease 1200ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 1200ms"
          }}
        >
          <circle cx="450" cy="100" r="26" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="450" cy="100" r="14" stroke="#00f0ff" strokeWidth="1.2" fill="rgba(0, 240, 255, 0.05)" />
          <circle cx="450" cy="100" r="4" fill="#ffffff" />
        </g>

        {/* Intersecting Foundation Nodes */}
        {[
          { x: 260, y: 220 },
          { x: 640, y: 220 },
          { x: 120, y: 340 },
          { x: 450, y: 340 },
          { x: 780, y: 340 }
        ].map((pt, i) => (
          <circle
            key={`pt-${i}`}
            cx={pt.x}
            cy={pt.y}
            r="3.5"
            fill="#38bdf8"
            style={{
              opacity: hasDrawn ? 1 : 0,
              transition: isReducedMotion ? "none" : `opacity 500ms ease ${900 + i * 100}ms`
            }}
          />
        ))}

        {/* ========================================================
            RARE GENTLE DATA PULSES (IDLE STATE)
            Gentle traveling dot along apex (18s cycle)
            ======================================================== */}
        {hasDrawn && !isReducedMotion && isVisible && (
          <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 3px #00f0ff)">
            <animateMotion
              path="M 120 340 L 260 220 L 450 100 L 640 220 L 780 340"
              dur="18s"
              repeatCount="indefinite"
              keyTimes="0; 0.45; 0.5; 1"
              keyPoints="0; 1; 1; 1"
            />
          </circle>
        )}

        {/* Technical Blueprint Annotations */}
        <text x="450" y="70" textAnchor="middle" fill="rgba(148, 163, 184, 0.5)" fontSize="8" fontFamily="monospace" letterSpacing="0.2em">
          ARKAPRANA SOVEREIGN ARCHITECTURE // DATUM APEX
        </text>
      </svg>
    </div>
  );
}
