"use client";

import React, { useEffect, useState } from "react";

interface IndustryTopologyVisualProps {
  slug: string;
  className?: string;
}

export default function IndustryTopologyVisual({
  slug,
  className = ""
}: IndustryTopologyVisualProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
    }
  }, []);

  switch (slug) {
    case "maritime":
      // Maritime: Technical vessel blueprint, offshore satellite uplink & harbor telemetry mesh
      return (
        <svg viewBox="0 0 280 130" className={`w-full h-auto living-blueprint-line ${className}`} fill="none">
          <defs>
            <linearGradient id="maritimeBlueGrad" x1="0" y1="0" x2="280" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Coordinate Waterline Grid */}
          <line x1="10" y1="95" x2="270" y2="95" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="10" y1="110" x2="270" y2="110" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="0.6" />

          {/* Abstract Vessel Hull Technical Blueprint */}
          <polygon
            points="35,95 65,95 210,95 245,65 190,65 55,65 35,95"
            stroke="url(#maritimeBlueGrad)"
            strokeWidth="1.2"
            fill="rgba(6, 182, 212, 0.03)"
          />
          {/* Bridge / Superstructure Outline */}
          <rect x="70" y="42" width="55" height="23" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
          <rect x="85" y="28" width="25" height="14" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
          <line x1="97" y1="28" x2="97" y2="15" stroke="#00f0ff" strokeWidth="1" />

          {/* Satellite Telemetry Vector */}
          <path
            id="vesselSatLink"
            d="M 97 15 L 210 20"
            stroke="rgba(0, 240, 255, 0.45)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          {/* LEO Satellite Node */}
          <circle cx="210" cy="20" r="3" fill="#00f0ff" />
          <circle cx="210" cy="20" r="7" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="0.8" />
          <line x1="202" y1="20" x2="218" y2="20" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="210" y1="12" x2="210" y2="28" stroke="#38bdf8" strokeWidth="0.8" />

          {/* Harbor Base Station Node */}
          <circle cx="250" cy="95" r="3.5" fill="#38bdf8" />
          <circle cx="250" cy="95" r="7" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <line x1="210" y1="95" x2="250" y2="95" stroke="#00f0ff" strokeWidth="1" strokeDasharray="2 2" />

          {/* Traveling Energy Pulse */}
          {!isReducedMotion && (
            <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 2px #00f0ff)">
              <animateMotion
                path="M 97 15 L 210 20 L 250 95"
                dur="12s"
                repeatCount="indefinite"
                keyTimes="0; 0.4; 0.45; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}

          <text x="14" y="20" fill="rgba(148, 163, 184, 0.65)" fontSize="7.5" fontFamily="monospace">
            NAVAL ARCH // SATELLITE TELEMETRY MESH
          </text>
        </svg>
      );

    case "manufacturing":
      // Manufacturing: Technical factory chassis, industrial automation cells & SCADA/PLC deterministic bus
      return (
        <svg viewBox="0 0 280 130" className={`w-full h-auto living-blueprint-line ${className}`} fill="none">
          {/* Plant Roof & Frame Blueprint */}
          <path
            d="M 20 85 L 20 45 L 60 25 L 100 45 L 140 25 L 180 45 L 220 25 L 260 45 L 260 85"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 3"
          />

          {/* Deterministic SCADA High-Speed Linear Bus */}
          <line x1="25" y1="85" x2="255" y2="85" stroke="#38bdf8" strokeWidth="1.2" />

          {/* Automated Cell Nodes & PLC Outlines */}
          {[
            { x: 60, code: "PLC_01", label: "ROBOTIC CELL" },
            { x: 120, code: "PLC_02", label: "CNC MILLING" },
            { x: 180, code: "PLC_03", label: "INSPECTION" },
            { x: 235, code: "GW_01", label: "EDGE GATEWAY" }
          ].map((cell, idx) => (
            <g key={cell.code}>
              <line x1={cell.x} y1="85" x2={cell.x} y2={idx % 2 === 0 ? "52" : "105"} stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" />
              <rect
                x={cell.x - 14}
                y={idx % 2 === 0 ? 38 : 105}
                width="28"
                height="16"
                rx="2"
                fill="rgba(6, 182, 212, 0.1)"
                stroke="#00f0ff"
                strokeWidth="1"
              />
              <circle cx={cell.x} cy="85" r="2.5" fill="#ffffff" />
              <text x={cell.x} y={idx % 2 === 0 ? 49 : 116} textAnchor="middle" fill="#bae6fd" fontSize="6.5" fontFamily="monospace">
                {cell.code}
              </text>
            </g>
          ))}

          {/* Traveling Bus Energy Pulse */}
          {!isReducedMotion && (
            <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 3px #00f0ff)">
              <animateMotion
                path="M 25 85 L 255 85"
                dur="10s"
                repeatCount="indefinite"
                keyTimes="0; 0.35; 0.4; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}

          <text x="14" y="20" fill="rgba(148, 163, 184, 0.65)" fontSize="7.5" fontFamily="monospace">
            OT/IT DETERMINISTIC BUS // IEC 62443 SCHEMATIC
          </text>
        </svg>
      );

    case "logistics":
      // Logistics: High-bay automated warehouse grid & hub-and-spoke tracking trace
      return (
        <svg viewBox="0 0 280 130" className={`w-full h-auto living-blueprint-line ${className}`} fill="none">
          {/* Warehouse Bay Racking Grid */}
          <rect x="25" y="30" width="80" height="80" rx="3" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="25" y1="56" x2="105" y2="56" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" />
          <line x1="25" y1="82" x2="105" y2="82" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" />
          <line x1="65" y1="30" x2="65" y2="110" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" />

          {/* Central Sorting Hub Node */}
          <circle cx="160" cy="70" r="8" stroke="#00f0ff" strokeWidth="1.2" fill="rgba(0, 240, 255, 0.08)" />
          <circle cx="160" cy="70" r="3.5" fill="#ffffff" />

          {/* Distribution Transit Routes */}
          <path d="M 65 56 L 160 70 L 245 40" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M 65 82 L 160 70 L 250 100" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" strokeDasharray="3 2" />

          {/* Regional Depot Nodes */}
          <circle cx="245" cy="40" r="3.5" fill="#38bdf8" />
          <circle cx="250" cy="100" r="3.5" fill="#38bdf8" />

          {/* Route Energy Pulse */}
          {!isReducedMotion && (
            <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 2px #00f0ff)">
              <animateMotion
                path="M 65 56 L 160 70 L 245 40"
                dur="11s"
                repeatCount="indefinite"
                keyTimes="0; 0.4; 0.45; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}

          <text x="14" y="20" fill="rgba(148, 163, 184, 0.65)" fontSize="7.5" fontFamily="monospace">
            AUTOMATED WAREHOUSE // SUB-SECOND ROUTE TRACE
          </text>
        </svg>
      );

    case "construction":
      // Construction: Structural frame & cantilever truss with strain gauge sensors
      return (
        <svg viewBox="0 0 280 130" className={`w-full h-auto living-blueprint-line ${className}`} fill="none">
          {/* Engineering Structural Truss Polygon */}
          <polygon
            points="30,105 140,35 250,105"
            stroke="rgba(56, 189, 248, 0.4)"
            strokeWidth="1.2"
          />
          {/* Internal Cross-Braces */}
          <line x1="30" y1="105" x2="250" y2="105" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1" />
          <line x1="140" y1="35" x2="140" y2="105" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="85" y1="70" x2="140" y2="105" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="0.8" />
          <line x1="195" y1="70" x2="140" y2="105" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="0.8" />

          {/* Ruggedized Sensor Nodes */}
          <circle cx="30" cy="105" r="3.5" fill="#38bdf8" />
          <circle cx="140" cy="35" r="4.5" fill="#00f0ff" />
          <circle cx="250" cy="105" r="3.5" fill="#38bdf8" />
          <circle cx="140" cy="105" r="3" fill="#ffffff" />
          <circle cx="85" cy="70" r="2.5" fill="#bae6fd" />
          <circle cx="195" cy="70" r="2.5" fill="#bae6fd" />

          {/* Pulse along structural vector */}
          {!isReducedMotion && (
            <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 2px #00f0ff)">
              <animateMotion
                path="M 30 105 L 140 35 L 250 105"
                dur="13s"
                repeatCount="indefinite"
                keyTimes="0; 0.45; 0.5; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}

          <text x="14" y="20" fill="rgba(148, 163, 184, 0.65)" fontSize="7.5" fontFamily="monospace">
            STRUCTURAL TRUSS // RUGGEDIZED TELEMETRY GRID
          </text>
        </svg>
      );

    case "government":
      // Government: Multi-layer zero-trust sovereign enclave with air-gapped cryptographic core
      return (
        <svg viewBox="0 0 280 130" className={`w-full h-auto living-blueprint-line ${className}`} fill="none">
          {/* Outer Perimeter Defense Barrier */}
          <polygon
            points="140,25 215,50 215,95 140,118 65,95 65,50"
            stroke="rgba(0, 240, 255, 0.4)"
            strokeWidth="1.2"
            fill="rgba(0, 240, 255, 0.02)"
          />
          {/* Secondary Cryptographic Boundary */}
          <polygon
            points="140,40 190,57 190,88 140,104 90,88 90,57"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 2"
          />

          {/* Air-Gapped Core HSM Vault */}
          <circle cx="140" cy="72" r="10" stroke="#00f0ff" strokeWidth="1.2" fill="#030712" />
          <circle cx="140" cy="72" r="3.5" fill="#ffffff" />

          {/* Sovereign Telemetry Radii */}
          <line x1="140" y1="25" x2="140" y2="40" stroke="#38bdf8" strokeWidth="1" />
          <line x1="140" y1="104" x2="140" y2="118" stroke="#38bdf8" strokeWidth="1" />

          {!isReducedMotion && (
            <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 3px #00f0ff)">
              <animateMotion
                path="M 65 50 L 140 25 L 215 50 L 215 95 L 140 118 L 65 95 Z"
                dur="15s"
                repeatCount="indefinite"
                keyTimes="0; 0.5; 0.55; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}

          <text x="14" y="20" fill="rgba(148, 163, 184, 0.65)" fontSize="7.5" fontFamily="monospace">
            SOVEREIGN ENCLAVE // AIR-GAPPED HSM VAULT
          </text>
        </svg>
      );

    default:
      // Enterprise, BUMN, Property, Hospitality & Data Center: Optical rack backbone & core redundant mesh
      return (
        <svg viewBox="0 0 280 130" className={`w-full h-auto living-blueprint-line ${className}`} fill="none">
          {/* Rack Chassis Frame Outlines */}
          <rect x="35" y="35" width="60" height="75" rx="3" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" strokeDasharray="3 2" />
          <rect x="110" y="35" width="60" height="75" rx="3" stroke="rgba(0, 240, 255, 0.45)" strokeWidth="1.2" />
          <rect x="185" y="35" width="60" height="75" rx="3" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" strokeDasharray="3 2" />

          {/* Optical Interconnect Backplane */}
          <line x1="45" y1="72" x2="235" y2="72" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="65" cy="72" r="3" fill="#00f0ff" />
          <circle cx="140" cy="72" r="4.5" fill="#ffffff" stroke="#00f0ff" strokeWidth="1.2" />
          <circle cx="215" cy="72" r="3" fill="#00f0ff" />

          {/* Server Unit Trays */}
          {[48, 60, 84, 96].map((y) => (
            <g key={y}>
              <line x1="116" y1={y} x2="164" y2={y} stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8" />
            </g>
          ))}

          {!isReducedMotion && (
            <circle r="2" fill="#ffffff" filter="drop-shadow(0 0 3px #00f0ff)">
              <animateMotion
                path="M 45 72 L 235 72"
                dur="12s"
                repeatCount="indefinite"
                keyTimes="0; 0.35; 0.4; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}

          <text x="14" y="20" fill="rgba(148, 163, 184, 0.65)" fontSize="7.5" fontFamily="monospace">
            TIER-3+ CHASSIS // REDUNDANT CORE BACKPLANE
          </text>
        </svg>
      );
  }
}
