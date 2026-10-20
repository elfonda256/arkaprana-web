"use client";

import React, { useState } from "react";
import {
  OpticalMeshGlyph,
  ModularDcGlyph,
  SovereignCloudGlyph,
  ZeroTrustHsmGlyph,
  CognitiveAiGlyph
} from "./NalarGlyphs";
import { useLanguage } from "@/context/LanguageContext";

export interface ArchitectureStation {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  status: string;
  metric: string;
  xPercent: number; // 0 to 100 for responsive placement
}

export const ARCH_STATIONS: ArchitectureStation[] = [
  {
    id: "dc",
    code: "L01_PHYSICAL",
    title: "Modular DC",
    subtitle: "Tier-3+ Precision Facilities",
    status: "2N Active",
    metric: "PUE 1.31",
    xPercent: 10,
  },
  {
    id: "fiber",
    code: "L02_TRANSIT",
    title: "DWDM Optical",
    subtitle: "Carrier-Neutral Fiber Mesh",
    status: "Synced",
    metric: "94.2 Gbps",
    xPercent: 30,
  },
  {
    id: "cloud",
    code: "L03_SOVEREIGN",
    title: "Private Cloud",
    subtitle: "Zero-Egress On-Premise",
    status: "Airgapped",
    metric: "100% Domestic",
    xPercent: 50,
  },
  {
    id: "security",
    code: "L04_DEFENSE",
    title: "Zero-Trust HSM",
    subtitle: "Cryptographic Enclave",
    status: "FIPS 140-3",
    metric: "Zero-Leak",
    xPercent: 70,
  },
  {
    id: "ai",
    code: "L05_COGNITIVE",
    title: "Enterprise AI",
    subtitle: "Private RAG & Autonomous Agent",
    status: "Inference Ready",
    metric: "< 15ms Latency",
    xPercent: 90,
  },
];

interface FlowingArchitectureVisualProps {
  selectedStationId: string;
  onSelectStation: (id: string) => void;
}

export default function FlowingArchitectureVisual({
  selectedStationId,
  onSelectStation,
}: FlowingArchitectureVisualProps) {
  const [hoveredStationId, setHoveredStationId] = useState<string | null>(null);
  const { language } = useLanguage();

  const activeId = hoveredStationId || selectedStationId;

  return (
    <div className="w-full relative py-6 select-none">
      
      {/* Top Topology Status Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-slate-600 dark:text-white/50 mb-6 pb-2.5 border-b border-slate-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
          <span className="text-slate-800 dark:text-white/90 font-medium">
            {language === "en" ? "SYNAPSE REAL-TIME ARCHITECTURE BUS" : "BUS ARSITEKTUR REAL-TIME SYNAPSE"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-slate-500 dark:text-white/40">PROTOCOL: DWDM / BGP EVPN / TLS 1.3</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            {language === "en" ? "SIGNAL FLOW: ACTIVE" : "ALIRAN SINYAL: AKTIF"}
          </span>
        </div>
      </div>

      {/* Interactive SVG Flow Canvas Container */}
      <div className="relative rounded-2xl bg-[#0B0D14] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
        
        {/* Subtle grid backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Gradient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-[#38BDF8]/10 blur-[80px] pointer-events-none"
        />

        {/* Desktop / Tablet Flow Canvas */}
        <div className="relative z-10 hidden md:block">
          <svg
            viewBox="0 0 920 180"
            className="w-full h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="laserBeamGrad" x1="0" y1="0" x2="920" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                <stop offset="45%" stopColor="#00F0FF" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#5BA7FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
              </linearGradient>

              <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Horizontal Highway Line */}
            <line
              x1="60"
              y1="90"
              x2="860"
              y2="90"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="2"
            />

            {/* Flowing Laser Signal Connectors */}
            <line
              x1="60"
              y1="90"
              x2="860"
              y2="90"
              stroke="url(#laserBeamGrad)"
              strokeWidth="2.5"
              className="animate-nx-flow"
              filter="url(#laserGlow)"
            />

            {/* Traveling Photon Particle 1 */}
            <circle r="4" fill="#FFFFFF" filter="drop-shadow(0 0 6px #00F0FF)">
              <animateMotion
                path="M 60 90 L 860 90"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Traveling Photon Particle 2 (Reverse feedback wave) */}
            <circle r="3" fill="#38BDF8" filter="drop-shadow(0 0 5px #38BDF8)">
              <animateMotion
                path="M 860 90 L 60 90"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Circuit Loops between stations */}
            <path
              d="M 160 90 C 210 135, 270 135, 320 90"
              stroke="rgba(56, 189, 248, 0.25)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              className="animate-nx-flow-fast"
            />
            <path
              d="M 520 90 C 580 45, 640 45, 700 90"
              stroke="rgba(56, 189, 248, 0.25)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              className="animate-nx-flow-fast"
            />
          </svg>

          {/* Station Overlays directly pinned above the SVG line */}
          <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
            {ARCH_STATIONS.map((st) => {
              const isSelected = activeId === st.id;

              return (
                <div
                  key={st.id}
                  className="pointer-events-auto flex flex-col items-center group cursor-pointer"
                  onClick={() => onSelectStation(st.id)}
                  onMouseEnter={() => setHoveredStationId(st.id)}
                  onMouseLeave={() => setHoveredStationId(null)}
                >
                  {/* Top Status Tag */}
                  <div
                    className={`font-mono text-[9.5px] px-2 py-0.5 rounded-full mb-3 border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#38BDF8]/20 border-[#38BDF8] text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                        : "bg-white/[0.04] border-white/10 text-white/50"
                    }`}
                  >
                    {st.metric}
                  </div>

                  {/* Center Node Target */}
                  <div
                    className={`relative size-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-[#38BDF8] text-black shadow-[0_0_24px_rgba(56,189,248,0.7)] scale-110"
                        : "bg-[#141722] text-white/80 border border-white/15 hover:border-[#38BDF8]/60 hover:text-white"
                    }`}
                  >
                    {st.id === "dc" && <ModularDcGlyph size={26} highlight={isSelected} />}
                    {st.id === "fiber" && <OpticalMeshGlyph size={26} highlight={isSelected} />}
                    {st.id === "cloud" && <SovereignCloudGlyph size={26} highlight={isSelected} />}
                    {st.id === "security" && <ZeroTrustHsmGlyph size={26} highlight={isSelected} />}
                    {st.id === "ai" && <CognitiveAiGlyph size={26} highlight={isSelected} />}

                    {/* Ring ping on active */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-[#38BDF8] animate-ping opacity-35" />
                    )}
                  </div>

                  {/* Bottom Typography Labels */}
                  <div className="text-center mt-3">
                    <span className="block text-xs font-semibold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors">
                      {st.title}
                    </span>
                    <span className="block text-[9.5px] font-mono text-white/45 mt-0.5">
                      {st.code}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Flow Stack */}
        <div className="md:hidden space-y-3 relative z-10">
          {ARCH_STATIONS.map((st, i) => {
            const isSelected = activeId === st.id;
            const isLast = i === ARCH_STATIONS.length - 1;

            return (
              <div key={st.id}>
                <button
                  type="button"
                  onClick={() => onSelectStation(st.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all text-left ${
                    isSelected
                      ? "bg-white/[0.08] border-[#38BDF8] shadow-md"
                      : "bg-white/[0.02] border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-[#38BDF8] text-black shadow-md"
                          : "bg-white/[0.06] text-white/70"
                      }`}
                    >
                      {st.id === "dc" && <ModularDcGlyph size={22} highlight={isSelected} />}
                      {st.id === "fiber" && <OpticalMeshGlyph size={22} highlight={isSelected} />}
                      {st.id === "cloud" && <SovereignCloudGlyph size={22} highlight={isSelected} />}
                      {st.id === "security" && <ZeroTrustHsmGlyph size={22} highlight={isSelected} />}
                      {st.id === "ai" && <CognitiveAiGlyph size={22} highlight={isSelected} />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#38BDF8]">{st.code}</span>
                        <span className="text-xs font-semibold text-white">{st.title}</span>
                      </div>
                      <span className="text-[10px] text-white/50 block font-light">{st.subtitle}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                    {st.metric}
                  </span>
                </button>

                {/* Vertical laser connector between items on mobile */}
                {!isLast && (
                  <div className="h-4 flex justify-center items-center">
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#38BDF8] to-[#5BA7FF] animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
