"use client";

import React from "react";

export default function NalarWaveOrbits() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0 flex items-center justify-center"
    >
      {/* ========================================================
          1. REAL VISIBLE ATMOSPHERIC MIST (SUBTLE & DRIFTING - "SAMAR-SAMAR")
          Luminous, soft organic vapor plumes drifting gently in the background
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Mist Plume (Soft cyan-blue haze) */}
        <div 
          className="absolute -top-[10%] left-[5%] w-[680px] h-[520px] rounded-full blur-[90px] animate-mist-1 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.22) 0%, rgba(91, 167, 255, 0.12) 45%, transparent 70%)"
          }} 
        />
        
        {/* Right Mist Plume (Soft indigo-cyan drift) */}
        <div 
          className="absolute top-[20%] right-[4%] w-[720px] h-[560px] rounded-full blur-[100px] animate-mist-2 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(91, 167, 255, 0.20) 0%, rgba(56, 189, 248, 0.10) 45%, transparent 70%)"
          }}
        />

        {/* Center Horizon Vapor (Gentle luminous breathe) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] rounded-full blur-[110px] pointer-events-none animate-pulse"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, rgba(56, 189, 248, 0.08) 35%, transparent 70%)",
            animationDuration: "8s"
          }}
        />
      </div>

      {/* ========================================================
          2. UNIFIED RESPONSIVE SINE WAVES (LEFT) & ORBITAL RINGS (RIGHT)
          Fixed inside a 1440x480 coordinate viewBox, perfectly visible on screen
          ======================================================== */}
      <div className="relative w-full max-w-[1440px] h-[480px] flex items-center justify-between opacity-95">
        <svg
          viewBox="0 0 1440 480"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Left Wave Gradient */}
            <linearGradient id="waveGlow" x1="0" y1="240" x2="520" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#5BA7FF" stopOpacity="0.95" />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
            </linearGradient>

            {/* Connecting Horizon Laser */}
            <linearGradient id="horizonLaser" x1="520" y1="240" x2="920" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#5BA7FF" stopOpacity="0.15" />
              <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
            </linearGradient>

            {/* Right Orbit Gradient */}
            <linearGradient id="orbitGlow" x1="920" y1="240" x2="1440" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#5BA7FF" stopOpacity="0.7" />
              <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
            </linearGradient>

            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ----------------------------------------------------
              LEFT SIDE: MULTI-STRAND CONVERGING SINE WAVEFORMS (IMAGE 3)
              ---------------------------------------------------- */}
          {/* Strand 1 (Primary High Amplitude) */}
          <path
            d="M 0 240 Q 60 70 120 240 T 240 240 T 360 240 T 440 240 T 490 240 L 530 240"
            stroke="url(#waveGlow)"
            strokeWidth="1.8"
            filter="url(#laserGlow)"
            className="animate-wave-pulse"
          />

          {/* Strand 2 (Wide Harmonic) */}
          <path
            d="M 0 240 Q 75 390 150 240 T 300 240 T 420 240 T 480 240 L 530 240"
            stroke="url(#waveGlow)"
            strokeWidth="1.4"
            opacity="0.8"
          />

          {/* Strand 3 (High-Frequency Carrier) */}
          <path
            d="M 0 240 Q 45 130 90 240 T 180 240 T 270 240 T 360 240 T 450 240 T 500 240 L 530 240"
            stroke="url(#waveGlow)"
            strokeWidth="1.2"
            opacity="0.65"
          />

          {/* Strand 4 (Inverted Resilient Pulse) */}
          <path
            d="M 0 240 Q 90 340 180 240 T 360 240 T 460 240 L 530 240"
            stroke="url(#waveGlow)"
            strokeWidth="1.2"
            opacity="0.5"
          />

          {/* Strand 5 (Subtle Ambient Ripple) */}
          <path
            d="M 0 240 Q 110 150 220 240 T 440 240 L 530 240"
            stroke="url(#waveGlow)"
            strokeWidth="1.0"
            opacity="0.4"
          />

          {/* ----------------------------------------------------
              CENTER: CONNECTING LASER HORIZON LINE
              ---------------------------------------------------- */}
          <line
            x1="530"
            y1="240"
            x2="910"
            y2="240"
            stroke="url(#horizonLaser)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="animate-laser-flow"
          />

          {/* ----------------------------------------------------
              RIGHT SIDE: CONCENTRIC ORBITAL RINGS & SATELLITES (IMAGE 3)
              ---------------------------------------------------- */}
          {/* Outer Orbit Ellipse */}
          <ellipse
            cx="1140"
            cy="240"
            rx="270"
            ry="95"
            stroke="url(#orbitGlow)"
            strokeWidth="1.5"
            filter="url(#laserGlow)"
          />

          {/* Middle Orbit Ellipse */}
          <ellipse
            cx="1140"
            cy="240"
            rx="210"
            ry="68"
            stroke="url(#orbitGlow)"
            strokeWidth="1.2"
            strokeDasharray="5 5"
            opacity="0.75"
          />

          {/* Inner Orbit Ellipse */}
          <ellipse
            cx="1140"
            cy="240"
            rx="140"
            ry="42"
            stroke="url(#orbitGlow)"
            strokeWidth="1.0"
            opacity="0.55"
          />

          {/* Satellite Dots on Orbit Track (Actively Glowing & Pulsing) */}
          <circle cx="910" cy="240" r="4" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: "3s" }} />
          <circle cx="910" cy="240" r="3" fill="#38BDF8" />
          
          <circle cx="1140" cy="145" r="3.5" fill="#FFFFFF" className="animate-pulse" />
          <circle cx="1140" cy="335" r="3.5" fill="#38BDF8" className="animate-pulse" />
          
          <circle cx="1350" cy="205" r="4" fill="#5BA7FF" className="animate-pulse" />
          <circle cx="1410" cy="240" r="3" fill="#FFFFFF" />
          
          <circle cx="1020" cy="178" r="3" fill="#38BDF8" />
          <circle cx="1260" cy="302" r="3" fill="#5BA7FF" />
        </svg>
      </div>
    </div>
  );
}
