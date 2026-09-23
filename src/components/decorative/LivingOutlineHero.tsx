"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function LivingOutlineHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const { theme } = useTheme();

  const isLight = theme === "light";

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

    // Desktop-only subtle parallax (max 3px)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 2;
      const yNorm = (e.clientY / innerHeight - 0.5) * 2;
      setParallaxOffset({
        x: Math.round(xNorm * 3),
        y: Math.round(yNorm * 2)
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
      className={`absolute top-1/2 -translate-y-1/2 right-0 lg:right-[-20px] xl:right-0 w-[500px] sm:w-[640px] lg:w-[740px] h-[540px] sm:h-[640px] pointer-events-none select-none z-0 overflow-visible transition-opacity duration-500 ${
        isLight ? "opacity-50" : "opacity-45"
      }`}
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
          <linearGradient id="heroRefinedGrad1" x1="0" y1="0" x2="800" y2="700" gradientUnits="userSpaceOnUse">
            {isLight ? (
              <>
                <stop offset="0%" stopColor="#1769E0" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#64748B" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.14" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.18" />
              </>
            )}
          </linearGradient>

          <filter id="heroSubtleFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation={isLight ? "0.6" : "1.0"} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================
            STATIC ARCHITECTURAL BLUEPRINT (CHASSIS & BACKBONE)
            Light: soft blue-gray (8-15% opacity)
            Dark: cool blue/soft cyan (10-20% opacity)
            ======================================================== */}
        <g opacity={isLight ? "0.18" : "0.25"} className="living-blueprint-line">
          {/* Main Enclosure Blueprint */}
          <rect x="250" y="90" width="450" height="500" rx="4" stroke="url(#heroRefinedGrad1)" strokeWidth="1" strokeDasharray="4 4" />
          <rect x="270" y="110" width="410" height="140" rx="2" stroke={isLight ? "rgba(100,116,139,0.18)" : "rgba(255,255,255,0.08)"} strokeWidth="0.8" />
          <rect x="270" y="270" width="410" height="140" rx="2" stroke={isLight ? "rgba(100,116,139,0.18)" : "rgba(255,255,255,0.08)"} strokeWidth="0.8" />
          <rect x="270" y="430" width="410" height="140" rx="2" stroke={isLight ? "rgba(100,116,139,0.18)" : "rgba(255,255,255,0.08)"} strokeWidth="0.8" />

          {/* Internal Shelf Guides */}
          {[140, 175, 210].map((y) => (
            <line key={`shelf1-${y}`} x1="290" y1={y} x2="660" y2={y} stroke={isLight ? "rgba(100,116,139,0.14)" : "rgba(56, 189, 248, 0.1)"} strokeWidth="0.7" />
          ))}
          {[300, 335, 370].map((y) => (
            <line key={`shelf2-${y}`} x1="290" y1={y} x2="660" y2={y} stroke={isLight ? "rgba(100,116,139,0.14)" : "rgba(56, 189, 248, 0.1)"} strokeWidth="0.7" />
          ))}
          {[460, 495, 530].map((y) => (
            <line key={`shelf3-${y}`} x1="290" y1={y} x2="660" y2={y} stroke={isLight ? "rgba(100,116,139,0.14)" : "rgba(56, 189, 248, 0.1)"} strokeWidth="0.7" />
          ))}

          {/* Optical Conduit Traces */}
          <line x1="210" y1="60" x2="210" y2="630" stroke={isLight ? "rgba(100,116,139,0.16)" : "rgba(56, 189, 248, 0.14)"} strokeWidth="0.8" strokeDasharray="3 4" />
          <line x1="710" y1="60" x2="710" y2="630" stroke={isLight ? "rgba(100,116,139,0.16)" : "rgba(56, 189, 248, 0.14)"} strokeWidth="0.8" strokeDasharray="3 4" />

          {/* Connective Interlinks */}
          <path d="M 210 175 L 270 175" stroke={isLight ? "rgba(23,105,224,0.22)" : "rgba(56, 189, 248, 0.18)"} strokeWidth="0.8" />
          <path d="M 210 335 L 270 335" stroke={isLight ? "rgba(23,105,224,0.22)" : "rgba(56, 189, 248, 0.18)"} strokeWidth="0.8" />
          <path d="M 680 335 L 710 335" stroke={isLight ? "rgba(23,105,224,0.22)" : "rgba(56, 189, 248, 0.18)"} strokeWidth="0.8" />
          <path d="M 680 495 L 710 495" stroke={isLight ? "rgba(23,105,224,0.22)" : "rgba(56, 189, 248, 0.18)"} strokeWidth="0.8" />
        </g>

        {/* ========================================================
            SUBTLE TECHNICAL TRACE & PULSE
            Light: signal corporate blue pulse (#1769E0)
            Dark: cool blue/cyan pulse (#00f0ff)
            ======================================================== */}
        <g opacity={isLight ? "0.75" : "0.85"} filter="url(#heroSubtleFilter)">
          <g
            style={{
              animation: !isReducedMotion && isVisible
                ? "technicalTraceEffect 20s ease-in-out infinite"
                : "none"
            }}
          >
            {/* Origin Node ● */}
            <circle cx="210" cy="240" r="3" fill={isLight ? "#1769E0" : "#00f0ff"} />
            <circle cx="210" cy="240" r="6" stroke={isLight ? "rgba(23, 105, 224, 0.25)" : "rgba(0, 240, 255, 0.3)"} strokeWidth="0.8" />

            {/* Path: ●───────────────○ \ │ \ └──────● */}
            <path
              d="M 210 240 L 420 240 L 420 380 L 590 380"
              stroke={isLight ? "#1769E0" : "#38bdf8"}
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="480"
              strokeDashoffset="0"
            />

            {/* Intermediate Waypoint Node ○ */}
            <circle cx="420" cy="240" r="2.5" fill={isLight ? "#F7F8FA" : "#080A0F"} stroke={isLight ? "#1769E0" : "#38bdf8"} strokeWidth="1" />

            {/* Destination Node ● */}
            <circle cx="590" cy="380" r="2.5" fill={isLight ? "#111827" : "#ffffff"} />
          </g>

          {/* Occasional Rare Data Pulse (every 20s, staggered) */}
          {!isReducedMotion && isVisible && (
            <circle r="1.8" fill={isLight ? "#1769E0" : "#ffffff"} filter={isLight ? "drop-shadow(0 0 2px rgba(23, 105, 224, 0.4))" : "drop-shadow(0 0 2px #00f0ff)"}>
              <animateMotion
                path="M 210 240 L 420 240 L 420 380 L 590 380"
                dur="20s"
                repeatCount="indefinite"
                keyTimes="0; 0.35; 0.4; 1"
                keyPoints="0; 1; 1; 1"
              />
            </circle>
          )}
        </g>

        {/* ========================================================
            DISCREET TECHNICAL DATUM MARKS & COORDINATES
            ======================================================== */}
        <g opacity={isLight ? "0.35" : "0.3"} className="living-blueprint-line">
          {[
            { cx: 270, cy: 110 },
            { cx: 680, cy: 110 },
            { cx: 270, cy: 570 },
            { cx: 680, cy: 570 }
          ].map((pt, i) => (
            <g key={`corner-${i}`}>
              <line x1={pt.cx - 3} y1={pt.cy} x2={pt.cx + 3} y2={pt.cy} stroke={isLight ? "#1769E0" : "#38bdf8"} strokeWidth="0.8" />
              <line x1={pt.cx} y1={pt.cy - 3} x2={pt.cx} y2={pt.cy + 3} stroke={isLight ? "#1769E0" : "#38bdf8"} strokeWidth="0.8" />
            </g>
          ))}

          <text x="270" y="80" fill={isLight ? "rgba(100, 116, 139, 0.7)" : "rgba(148, 163, 184, 0.8)"} fontSize="8.5" fontFamily="monospace" letterSpacing="0.15em">
            SYS_ENCLOSURE // OPTICAL FABRIC [REV_5.4]
          </text>
          <text x="680" y="80" textAnchor="end" fill={isLight ? "rgba(23, 105, 224, 0.7)" : "rgba(56, 189, 248, 0.7)"} fontSize="8" fontFamily="monospace">
            PASSIVE_OK
          </text>
        </g>
      </svg>
    </div>
  );
}
