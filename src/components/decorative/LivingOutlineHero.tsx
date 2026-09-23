"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LivingOutlineHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      return;
    }

    // IntersectionObserver to pause when hero is offscreen
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    // Desktop-only subtle parallax (max 3-5px)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return; // Strict disable on mobile & tablet
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yNorm = (e.clientY / innerHeight - 0.5) * 2;
      setParallaxOffset({
        x: Math.round(xNorm * 4), // max 4px
        y: Math.round(yNorm * 3)  // max 3px
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-[-40px] xl:right-0 w-[540px] sm:w-[680px] lg:w-[780px] h-[580px] sm:h-[680px] pointer-events-none select-none z-0 overflow-visible opacity-80"
      style={{
        transform: !isReducedMotion
          ? `translate3d(${parallaxOffset.x}px, calc(-50% + ${parallaxOffset.y}px), 0)`
          : "translate3d(0, -50%, 0)",
        transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      <svg
        viewBox="0 0 800 700"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animationPlayState: isVisible && !isReducedMotion ? "running" : "paused"
        }}
      >
        <defs>
          {/* Subtle line gradients */}
          <linearGradient id="heroOutlineGrad1" x1="0" y1="0" x2="800" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="heroOutlineGrad2" x1="100" y1="100" x2="700" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>

          <filter id="subtleBlueprintGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================
            LAYER 1: BACKGROUND INFRASTRUCTURE CHASSIS BLUEPRINT
            Subtle 1px geometric grid & modular racks
            ======================================================== */}
        <g opacity="0.18" className="living-blueprint-line">
          {/* Rack Chassis Frames */}
          <rect x="240" y="80" width="460" height="520" rx="8" stroke="url(#heroOutlineGrad1)" strokeWidth="1" strokeDasharray="6 4" />
          <rect x="260" y="100" width="420" height="150" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <rect x="260" y="270" width="420" height="150" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <rect x="260" y="440" width="420" height="140" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

          {/* Internal Blade / Module Dividers */}
          {[130, 160, 190, 220].map((y) => (
            <line key={`blade1-${y}`} x1="280" y1={y} x2="660" y2={y} stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" />
          ))}
          {[300, 330, 360, 390].map((y) => (
            <line key={`blade2-${y}`} x1="280" y1={y} x2="660" y2={y} stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" />
          ))}
          {[470, 500, 530, 560].map((y) => (
            <line key={`blade3-${y}`} x1="280" y1={y} x2="660" y2={y} stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.8" />
          ))}

          {/* Vertical Bus & Conduit Guides */}
          <line x1="200" y1="50" x2="200" y2="650" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="720" y1="50" x2="720" y2="650" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 5" />
        </g>

        {/* ========================================================
            LAYER 2: LIVING FIBER TRACE CHANNELS
            Slow animated SVG stroke-dashoffset line drawing
            ======================================================== */}
        <g opacity="0.28" filter="url(#subtleBlueprintGlow)">
          {/* Main Highway Bus 1: Top-Left to Rack Spine */}
          <path
            d="M 120 140 L 200 140 L 200 280 L 320 280 L 320 340 L 480 340"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="400"
            strokeDashoffset="0"
            style={{
              animation: !isReducedMotion && isVisible ? "livingOutlineTrace 18s ease-in-out infinite" : "none"
            }}
          />

          {/* Highway Bus 2: Right Distribution Trunk */}
          <path
            d="M 740 180 L 660 180 L 660 460 L 520 460 L 520 520 L 400 520"
            stroke="#00f0ff"
            strokeWidth="1.2"
            strokeDasharray="450"
            strokeDashoffset="0"
            style={{
              animation: !isReducedMotion && isVisible ? "livingOutlineTrace 22s ease-in-out infinite 3s" : "none"
            }}
          />

          {/* Cross-Link Telemetry Vector */}
          <path
            d="M 200 480 L 300 480 L 360 420 L 580 420"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1"
            strokeDasharray="350"
            strokeDashoffset="0"
            style={{
              animation: !isReducedMotion && isVisible ? "livingOutlineTrace 20s ease-in-out infinite 6s" : "none"
            }}
          />
        </g>

        {/* ========================================================
            LAYER 3: SIGNATURE EFFECT — "TECHNICAL TRACE"
            ●───────○ \ └─────● (Illuminates, traces, then fades)
            ======================================================== */}
        <g>
          {/* Trace 1: Upper Router Interconnect */}
          <g style={{ animation: !isReducedMotion && isVisible ? "technicalTraceEffect 16s ease-in-out infinite" : "none" }}>
            <circle cx="160" cy="180" r="3" fill="#00f0ff" />
            <circle cx="160" cy="180" r="7" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" />
            <path
              d="M 160 180 L 260 180 L 260 230 L 380 230"
              stroke="#00f0ff"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="350"
              strokeDashoffset="0"
            />
            <circle cx="380" cy="230" r="2.5" fill="#ffffff" />
          </g>

          {/* Trace 2: Core Switch Mesh Interconnect */}
          <g style={{ animation: !isReducedMotion && isVisible ? "technicalTraceEffect 20s ease-in-out infinite 5s" : "none" }}>
            <circle cx="340" cy="380" r="3" fill="#38bdf8" />
            <circle cx="340" cy="380" r="6" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
            <path
              d="M 340 380 L 460 380 L 460 300 L 580 300"
              stroke="#38bdf8"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="400"
              strokeDashoffset="0"
            />
            <circle cx="580" cy="300" r="2.5" fill="#38bdf8" />
          </g>

          {/* Trace 3: Lower Compute Cluster Node */}
          <g style={{ animation: !isReducedMotion && isVisible ? "technicalTraceEffect 18s ease-in-out infinite 10s" : "none" }}>
            <circle cx="620" cy="510" r="3" fill="#00f0ff" />
            <circle cx="620" cy="510" r="6" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" />
            <path
              d="M 620 510 L 500 510 L 500 570 L 360 570"
              stroke="#00f0ff"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="380"
              strokeDashoffset="0"
            />
            <circle cx="360" cy="570" r="2.5" fill="#ffffff" />
          </g>
        </g>

        {/* ========================================================
            LAYER 4: TECHNICAL NODES MATRIX & BLUEPRINT LABELS
            Subtle coordinate points and technical annotations
            ======================================================== */}
        <g opacity="0.22" className="living-blueprint-line">
          {/* Coordinate intersections */}
          {[
            { cx: 200, cy: 140 },
            { cx: 320, cy: 340 },
            { cx: 480, cy: 340 },
            { cx: 660, cy: 180 },
            { cx: 520, cy: 460 },
            { cx: 400, cy: 520 },
            { cx: 360, cy: 420 },
            { cx: 580, cy: 420 }
          ].map((pt, i) => (
            <g key={`pt-${i}`}>
              <circle cx={pt.cx} cy={pt.cy} r="2" fill="#bae6fd" />
              <line x1={pt.cx - 4} y1={pt.cy} x2={pt.cx + 4} y2={pt.cy} stroke="#38bdf8" strokeWidth="0.8" />
              <line x1={pt.cx} y1={pt.cy - 4} x2={pt.cx} y2={pt.cy + 4} stroke="#38bdf8" strokeWidth="0.8" />
            </g>
          ))}

          {/* Technical Blueprint Callouts / Metadata (monospaced) */}
          <text x="260" y="70" fill="rgba(148, 163, 184, 0.7)" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">
            SYS_ARCH // TIER-3+ BACKPLANE [SEC_01]
          </text>
          <text x="260" y="618" fill="rgba(148, 163, 184, 0.6)" fontSize="8" fontFamily="monospace" letterSpacing="0.08em">
            SCALE: 1:1 // AIR-GAPPED BUS // 100G TRANSIT
          </text>
          <text x="630" y="94" fill="rgba(56, 189, 248, 0.8)" fontSize="8" fontFamily="monospace">
            OPTICAL_CORE_OK
          </text>
        </g>
      </svg>
    </div>
  );
}
