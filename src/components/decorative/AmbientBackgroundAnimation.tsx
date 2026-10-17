"use client";

import React, { memo } from "react";

/**
 * AmbientBackgroundAnimation Component
 * 
 * Provides an ultra-subtle, minimalist background animation layer across the entire site.
 * Designed to eliminate "flatness" without introducing visual noise, distraction, or performance cost.
 * 
 * Features:
 * 1. Infinite Seamless Micro-Grid Drift (60px cycle, 36s period, <2px/s imperceptible motion).
 * 2. Dual Atmospheric Breath Orbs (diffused 160px gaussian radial auras reflecting theme accent).
 * 3. Delicate 1px Telemetry Sweep Beam (resting 20s, sweeps in 5s with 4% peak opacity).
 * 4. Micro-Telemetry Coordinate Pointers (discreet 9px IBM Plex Mono engineering indicators).
 * 5. Radial Edge Vignette (ensures centered content always maintains maximum contrast and legibility).
 * 
 * Automatically responds to Dark Mode (#080A0F) and Light Mode (#F7F8FA) using theme CSS variables.
 */
function AmbientBackgroundAnimationComponent() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Seamless Micro-Grid Layer (Static, Zero CPU Repaint Cost) */}
      <div
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-60 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--tech-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--tech-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. Primary Atmospheric Aura Orb (Top Right) - Hardware Gradient (0 blur overhead) */}
      <div
        className="absolute -top-[10vw] -right-[10vw] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none opacity-60 dark:opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      {/* 3. Secondary Atmospheric Aura Orb (Bottom Left) - Hardware Gradient (0 blur overhead) */}
      <div
        className="absolute -bottom-[10vw] -left-[10vw] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none opacity-50 dark:opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--accent-soft-bg) 0%, transparent 70%)",
        }}
      />

      {/* 4. Telemetry Hairline Scan Ray (Sweeps down periodically) */}
      <div className="ambient-scan-beam absolute left-0 right-0 top-0 h-[1px]">
        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--accent) 35%, var(--accent-cyan) 65%, transparent 100%)",
            boxShadow: "0 0 12px 1px var(--accent-glow)",
          }}
        />
      </div>

      {/* 5. Minimalist Engineering Peripheral Telemetry Nodes (Barely perceptible corner markers) */}
      <div className="hidden lg:flex flex-col justify-between absolute inset-y-8 left-8 text-[9px] font-mono tracking-widest text-[var(--text-faint)] opacity-35 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="ambient-telemetry-pulse w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>SYS.GRID // CALIBRATED</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
          <span>LAT 06°12&apos;S // LON 106°49&apos;E</span>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-between items-end absolute inset-y-8 right-8 text-[9px] font-mono tracking-widest text-[var(--text-faint)] opacity-35 pointer-events-none">
        <div className="flex items-center gap-2">
          <span>FREQ: 100G FIBER // 99.99%</span>
          <span className="w-1.5 h-1.5 rounded-full border border-[var(--border-subtle)]" />
        </div>
        <div className="flex items-center gap-2">
          <span>NODE: ID-JKT-HQ</span>
          <span className="ambient-telemetry-pulse w-1 h-1 rounded-full bg-[var(--accent-cyan)]" />
        </div>
      </div>

      {/* 6. Soft Center-to-Edge Vignette Mask: Keeps center clear and readable */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, var(--bg-primary) 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}

export const AmbientBackgroundAnimation = memo(AmbientBackgroundAnimationComponent);
export default AmbientBackgroundAnimation;
