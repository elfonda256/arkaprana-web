"use client";

import React from "react";

interface IndustryTopologyVisualProps {
  slug: string;
  className?: string;
}

export default function IndustryTopologyVisual({
  slug,
  className = ""
}: IndustryTopologyVisualProps) {
  switch (slug) {
    case "maritime":
      // Maritime: Offshore vessel nodes, maritime lanes & satellite telemetry vectors
      return (
        <svg viewBox="0 0 240 120" className={`w-full h-auto ${className}`} fill="none">
          <path d="M10 80 Q 70 65, 130 85 T 230 75" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M20 50 Q 80 40, 150 55 T 230 45" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
          <circle cx="50" cy="45" r="3.5" fill="#38bdf8" />
          <circle cx="50" cy="45" r="7" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
          <circle cx="140" cy="75" r="3.5" fill="#00f0ff" />
          <circle cx="140" cy="75" r="8" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" />
          <circle cx="205" cy="50" r="3" fill="#38bdf8" />
          <line x1="50" y1="45" x2="140" y2="75" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="140" y1="75" x2="205" y2="50" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="0.8" />
          <text x="14" y="24" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace">OFFSHORE MESH // MARITIME TRANSIT</text>
        </svg>
      );

    case "manufacturing":
      // Manufacturing: Connected SCADA/PLC factory nodes on linear bus
      return (
        <svg viewBox="0 0 240 120" className={`w-full h-auto ${className}`} fill="none">
          <line x1="20" y1="60" x2="220" y2="60" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
          {[40, 85, 130, 175].map((x, idx) => (
            <g key={x}>
              <line x1={x} y1="60" x2={x} y2={idx % 2 === 0 ? "35" : "85"} stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" />
              <rect x={x - 8} y={idx % 2 === 0 ? 20 : 85} width="16" height="14" rx="2" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1" />
              <circle cx={x} cy="60" r="2.5" fill="#00f0ff" />
            </g>
          ))}
          <text x="14" y="24" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace">OT/IT SCADA BUS // DETERMINISTIC</text>
        </svg>
      );

    case "logistics":
      // Logistics: Hub-and-spoke distribution network
      return (
        <svg viewBox="0 0 240 120" className={`w-full h-auto ${className}`} fill="none">
          <circle cx="120" cy="60" r="5" fill="#00f0ff" />
          <circle cx="120" cy="60" r="12" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" />
          {[
            { cx: 45, cy: 35 },
            { cx: 55, cy: 85 },
            { cx: 185, cy: 35 },
            { cx: 195, cy: 80 }
          ].map((spoke, idx) => (
            <g key={idx}>
              <line x1="120" y1="60" x2={spoke.cx} y2={spoke.cy} stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx={spoke.cx} cy={spoke.cy} r="3" fill="#38bdf8" />
            </g>
          ))}
          <text x="14" y="24" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace">DISTRIBUTION HUB // REAL-TIME TRANSIT</text>
        </svg>
      );

    case "construction":
      // Construction: Heavy infrastructure project network & field node grid
      return (
        <svg viewBox="0 0 240 120" className={`w-full h-auto ${className}`} fill="none">
          <polygon points="40,85 120,30 200,85" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
          <line x1="120" y1="30" x2="120" y2="85" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="40" cy="85" r="3.5" fill="#38bdf8" />
          <circle cx="120" cy="30" r="4" fill="#00f0ff" />
          <circle cx="200" cy="85" r="3.5" fill="#38bdf8" />
          <circle cx="120" cy="85" r="2.5" fill="#bae6fd" />
          <text x="14" y="24" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace">PROJECT FIELD MESH // RUGGEDIZED</text>
        </svg>
      );

    case "government":
      // Government: Shielded perimeter zero-trust network
      return (
        <svg viewBox="0 0 240 120" className={`w-full h-auto ${className}`} fill="none">
          <polygon points="120,20 180,45 180,85 120,105 60,85 60,45" stroke="rgba(0, 240, 255, 0.45)" strokeWidth="1.2" />
          <polygon points="120,35 160,52 160,78 120,92 80,78 80,52" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="120" cy="62" r="4.5" fill="#00f0ff" />
          <text x="14" y="24" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace">ZERO-TRUST SOVEREIGN ENCLAVE</text>
        </svg>
      );

    default:
      // General Enterprise / Facilities: Resilient multi-tier cluster
      return (
        <svg viewBox="0 0 240 120" className={`w-full h-auto ${className}`} fill="none">
          <circle cx="60" cy="60" r="18" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="60" cy="60" r="4" fill="#38bdf8" />
          <circle cx="180" cy="60" r="18" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="180" cy="60" r="4" fill="#00f0ff" />
          <path d="M78 60 C 100 40, 140 40, 162 60" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1.2" />
          <path d="M78 60 C 100 80, 140 80, 162 60" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <text x="14" y="24" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace">MULTI-TIER ENTERPRISE TOPOLOGY</text>
        </svg>
      );
  }
}
