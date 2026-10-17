"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StarBeamButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "dark";
  className?: string;
  showArrow?: boolean;
}

export default function StarBeamButton({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: StarBeamButtonProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full p-[1.5px] transition-transform duration-200 active:scale-95 ${className}`}
    >
      {/* Top Orbit Tracer */}
      <div
        className="pointer-events-none absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-top z-0"
        style={{
          background: "radial-gradient(circle, #38BDF8, #5BA7FF 40%, transparent 70%)",
        }}
      />

      {/* Bottom Orbit Tracer */}
      <div
        className="pointer-events-none absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-bottom z-0"
        style={{
          background: "radial-gradient(circle, #5BA7FF, #38BDF8 40%, transparent 70%)",
        }}
      />

      {/* Button Content */}
      <div className="relative z-10">
        <Link
          href={href}
          className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 shadow-lg ${
            isDark
              ? "bg-[#0A0B10] text-white hover:bg-[#12141F] border border-white/10"
              : "bg-white text-[#08090D] hover:bg-slate-100 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]"
          }`}
        >
          <span>{children}</span>
          {showArrow && (
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          )}
        </Link>
      </div>
    </div>
  );
}
