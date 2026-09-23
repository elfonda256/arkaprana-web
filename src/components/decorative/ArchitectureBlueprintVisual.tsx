"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ArchitectureBlueprintVisual() {
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
          // Trigger draw animation on entry
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
      className="w-full max-w-4xl mx-auto my-8 p-4 sm:p-6 rounded-2xl bg-[#030612]/80 border border-white/[0.08] relative overflow-hidden pointer-events-none select-none"
    >
      {/* Background blueprint coordinate marks */}
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-3 pb-2 border-b border-white/[0.06]">
        <span>ARCHITECTURAL BUS TOPOLOGY // SCHEMATIC</span>
        <span className="text-cyan-400">STATUS: {hasDrawn ? "SYNCED" : "INITIALIZING"}</span>
      </div>

      <svg
        viewBox="0 0 760 160"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="archBusGrad" x1="0" y1="0" x2="760" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* ========================================================
            CENTRAL HORIZONTAL HIGHWAY BUS
            ○──────○──────○──────○──────○──────○
            ======================================================== */}
        <line
          x1="50"
          y1="80"
          x2="710"
          y2="80"
          stroke="url(#archBusGrad)"
          strokeWidth="1.2"
          strokeDasharray="660"
          strokeDashoffset={hasDrawn ? "0" : "660"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 1400ms cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />

        {/* Secondary Vertical Return Branches */}
        <path
          d="M 170 80 L 170 125 L 310 125 L 310 80"
          stroke="rgba(56, 189, 248, 0.3)"
          strokeWidth="1"
          strokeDasharray="280"
          strokeDashoffset={hasDrawn ? "0" : "280"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 1600ms cubic-bezier(0.16, 1, 0.3, 1) 300ms"
          }}
        />
        <path
          d="M 450 80 L 450 35 L 590 35 L 590 80"
          stroke="rgba(56, 189, 248, 0.3)"
          strokeWidth="1"
          strokeDasharray="280"
          strokeDashoffset={hasDrawn ? "0" : "280"}
          style={{
            transition: isReducedMotion ? "none" : "stroke-dashoffset 1600ms cubic-bezier(0.16, 1, 0.3, 1) 500ms"
          }}
        />

        {/* ========================================================
            SUBTLE OCCASIONAL ENERGY PULSE (IDLE STATE)
            Gentle traveling dot along main bus (12s cycle)
            ======================================================== */}
        {hasDrawn && !isReducedMotion && isVisible && (
          <circle r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #00f0ff)">
            <animateMotion
              path="M 50 80 L 710 80"
              dur="14s"
              repeatCount="indefinite"
              keyTimes="0; 0.3; 0.35; 1"
              keyPoints="0; 1; 1; 1"
            />
          </circle>
        )}

        {/* ========================================================
            6 ARCHITECTURAL TIERS NODES:
            INFRASTRUCTURE, NETWORK, CLOUD, SECURITY, DATA, AI
            ======================================================== */}
        {[
          { x: 50, label: "INFRASTRUCTURE", code: "01_PHYSICAL", sub: "Compute & Power" },
          { x: 170, label: "NETWORK", code: "02_TRANSIT", sub: "Optical & Mesh" },
          { x: 310, label: "CLOUD", code: "03_SOVEREIGN", sub: "Domestic Soil" },
          { x: 450, label: "SECURITY", code: "04_DEFENSE", sub: "Zero-Trust" },
          { x: 590, label: "DATA", code: "05_PIPELINE", sub: "Unified Lake" },
          { x: 710, label: "AI", code: "06_INTELLIGENCE", sub: "Private RAG" }
        ].map((node, i) => (
          <g
            key={node.code}
            style={{
              opacity: hasDrawn ? 1 : 0,
              transform: hasDrawn ? "translateY(0)" : "translateY(8px)",
              transition: isReducedMotion ? "none" : `opacity 600ms ease ${300 + i * 150}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + i * 150}ms`
            }}
          >
            {/* Outer Concentric Pulse Target */}
            <circle cx={node.x} cy="80" r="9" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx={node.x} cy="80" r="4.5" fill="#030712" stroke="#00f0ff" strokeWidth="1.2" />
            <circle cx={node.x} cy="80" r="2" fill="#38bdf8" />

            {/* Node Typography Labels */}
            <text
              x={node.x}
              y="108"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="9"
              fontFamily="sans-serif"
              fontWeight="600"
              letterSpacing="0.05em"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y="122"
              textAnchor="middle"
              fill="rgba(148, 163, 184, 0.7)"
              fontSize="8"
              fontFamily="monospace"
            >
              {node.code}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
