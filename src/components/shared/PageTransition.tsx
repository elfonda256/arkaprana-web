"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, do not animate
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 380);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`transition-all duration-350 ease-out ${
        isTransitioning ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
