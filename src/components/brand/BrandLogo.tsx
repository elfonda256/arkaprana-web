"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

interface BrandLogoProps {
  variant?: "dark" | "light" | "auto";
  showWordmark?: boolean;
  showDescriptor?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  symbolOnlyOnMobile?: boolean;
}

export default function BrandLogo({
  variant = "auto",
  showWordmark = true,
  showDescriptor = false,
  size = "md",
  className = "",
  symbolOnlyOnMobile = false,
}: BrandLogoProps) {
  const { theme } = useTheme();

  // Determine effective visual variant
  const effectiveVariant = variant === "auto" ? theme : variant;
  const isLight = effectiveVariant === "light";

  // Height sizing
  const heightClasses = {
    sm: "h-6 sm:h-7",
    md: "h-7 sm:h-8",
    lg: "h-9 sm:h-11",
  };

  const symbolSizes = {
    sm: { w: 24, h: 24 },
    md: { w: 28, h: 28 },
    lg: { w: 38, h: 38 },
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none animate-logo-reveal ${heightClasses[size]} ${className}`}
      aria-label="PT ARKAPRANA TEKNOLOGI NUSANTARA"
    >
      {/* Geometric "A" Emblem Vector */}
      <div className="relative flex-shrink-0 flex items-center justify-center transition-opacity duration-300">
        <Image
          src={isLight ? "/brand/arkaprana-symbol-light.svg" : "/brand/arkaprana-symbol-dark.svg"}
          alt="ARKAPRANA Symbol"
          width={symbolSizes[size].w}
          height={symbolSizes[size].h}
          className="w-auto h-full max-h-7 sm:max-h-8 object-contain transition-transform duration-300 ease-out"
          priority
        />
      </div>

      {/* ARKAPRANA Wordmark & Optional Descriptor */}
      {showWordmark && (
        <div
          className={`flex flex-col justify-center leading-none ${
            symbolOnlyOnMobile ? "hidden sm:flex" : "flex"
          }`}
        >
          <div className="flex items-center tracking-[0.16em] font-bold">
            <span
              className={`text-[15px] sm:text-[17px] font-black uppercase tracking-[0.16em] transition-colors duration-300 ${
                isLight ? "text-[#111827]" : "text-[#E8ECF2]"
              }`}
              style={{
                fontFamily:
                  "var(--font-space-grotesk), system-ui, -apple-system, sans-serif",
                letterSpacing: "0.16em",
              }}
            >
              ARKAPRANA
            </span>
          </div>

          {showDescriptor && (
            <span
              className={`text-[8px] sm:text-[9px] font-mono tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300 ${
                isLight ? "text-[#667085]" : "text-[#98A2B3]"
              }`}
            >
              PT ARKAPRANA TEKNOLOGI NUSANTARA
            </span>
          )}
        </div>
      )}
    </div>
  );
}
