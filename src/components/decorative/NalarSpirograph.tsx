"use client";

import React from "react";

interface SpirographProps {
  className?: string;
  size?: number;
}

export default function NalarSpirograph({ className = "", size = 260 }: SpirographProps) {
  const steps = 36;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none transition-transform duration-700 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="spiroFade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </radialGradient>
      </defs>

      <g opacity="0.85">
        {Array.from({ length: steps }).map((_, i) => {
          const angle = (i * 360) / steps;
          return (
            <ellipse
              key={i}
              cx="150"
              cy="150"
              rx="125"
              ry="50"
              transform={`rotate(${angle} 150 150)`}
              stroke="currentColor"
              strokeWidth="0.75"
              strokeOpacity={0.18 + (i % 3) * 0.08}
              fill="none"
            />
          );
        })}
        {/* Inner concentric rings */}
        <circle cx="150" cy="150" r="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        <circle cx="150" cy="150" r="25" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="150" cy="150" r="4" fill="currentColor" fillOpacity="0.5" />
      </g>
    </svg>
  );
}
