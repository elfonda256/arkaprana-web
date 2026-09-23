"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  direction?: "up" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.15,
  direction = "up"
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const translateYStyle =
    direction === "up"
      ? isVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, 24px, 0)"
      : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: translateYStyle,
        transition: `opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
        willChange: isVisible ? "auto" : "opacity, transform"
      }}
    >
      {children}
    </div>
  );
}
