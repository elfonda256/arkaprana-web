"use client";

import React from "react";

interface GlyphProps {
  className?: string;
  size?: number;
  highlight?: boolean;
}

/**
 * 01. Optical Mesh & Fiber Transport Glyph
 * Concentric DWDM optical rings with orthogonal carrier wave buses
 */
export function OpticalMeshGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1"
        strokeOpacity={highlight ? "0.35" : "0.15"}
        strokeDasharray="3 3"
        className="animate-nx-rotate-slow"
      />
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1.2"
        strokeOpacity={highlight ? "0.85" : "0.4"}
      />
      {/* 4 Optical Nodes on Ring */}
      <circle cx="24" cy="10" r="2" fill={highlight ? "#38BDF8" : "#5BA7FF"} />
      <circle cx="38" cy="24" r="2" fill={highlight ? "#38BDF8" : "#5BA7FF"} />
      <circle cx="24" cy="38" r="2" fill={highlight ? "#38BDF8" : "#5BA7FF"} />
      <circle cx="10" cy="24" r="2" fill={highlight ? "#38BDF8" : "#5BA7FF"} />

      {/* Crosshair & Core Photon */}
      <line x1="16" y1="24" x2="32" y2="24" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.8" />
      <line x1="24" y1="16" x2="24" y2="32" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.8" />
      <circle cx="24" cy="24" r="3.5" fill="#38BDF8" className="animate-pulse" />
      <circle cx="24" cy="24" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 02. Infrastructure & Modular Datacenter Facility Glyph
 * Precision server chassis with airflow ventilation channels & dual PSU rails
 */
export function ModularDcGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      {/* Outer Chassis Frame */}
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="5"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1.2"
        strokeOpacity={highlight ? "0.85" : "0.4"}
      />
      {/* Rack Bays */}
      <line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="8" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />

      {/* Power Rails & Drive Indicator Pips */}
      <circle cx="14" cy="13" r="1.5" fill="#38BDF8" />
      <circle cx="19" cy="13" r="1.5" fill="#38BDF8" fillOpacity="0.5" />
      <rect x="25" y="12" width="10" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />

      <circle cx="14" cy="23" r="1.5" fill="#10B981" />
      <circle cx="19" cy="23" r="1.5" fill="#10B981" fillOpacity="0.5" />
      <rect x="25" y="22" width="10" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />

      <circle cx="14" cy="33" r="1.5" fill="#38BDF8" />
      <circle cx="19" cy="33" r="1.5" fill="#38BDF8" fillOpacity="0.5" />
      <rect x="25" y="32" width="10" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/**
 * 03. Sovereign Private Cloud Glyph
 * Isometric hypervisor cube cluster with sovereign domestic soil seal
 */
export function SovereignCloudGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      {/* Isometric Cube 1 (Top Left) */}
      <path
        d="M24 6L36 13V27L24 34L12 27V13L24 6Z"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1.2"
        strokeOpacity={highlight ? "0.9" : "0.45"}
      />
      <line x1="24" y1="20" x2="24" y2="34" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="20" x2="36" y2="13" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="20" x2="12" y2="13" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

      {/* Internal Floating Micro-Core */}
      <circle cx="24" cy="20" r="3" fill="#38BDF8" className="animate-nx-pulse-glow" />
      <circle cx="24" cy="20" r="1" fill="#FFFFFF" />

      {/* Orbiting Sovereign Perimeter Pips */}
      <circle cx="24" cy="40" r="1.5" fill="#38BDF8" fillOpacity="0.7" />
      <circle cx="42" cy="27" r="1.5" fill="#38BDF8" fillOpacity="0.7" />
      <circle cx="6" cy="27" r="1.5" fill="#38BDF8" fillOpacity="0.7" />
    </svg>
  );
}

/**
 * 04. Cybersecurity & HSM Enclave Glyph
 * Hexagonal cryptographic enclave shield with biometric cipher locks
 */
export function ZeroTrustHsmGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      {/* Hexagonal Shield Envelope */}
      <path
        d="M24 7L38 13V25C38 33 24 41 24 41C24 41 10 33 10 25V13L24 7Z"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1.2"
        strokeOpacity={highlight ? "0.9" : "0.4"}
      />
      {/* Internal Vault Lock Ring */}
      <circle
        cx="24"
        cy="23"
        r="6"
        stroke="#38BDF8"
        strokeWidth="1.2"
        strokeOpacity="0.8"
        strokeDasharray="2 2"
      />
      <rect x="22.5" y="21.5" width="3" height="5" rx="1" fill="#FFFFFF" />
      <circle cx="24" cy="20" r="1" fill="#00F0FF" />

      {/* Microsegmentation Verification Ticks */}
      <line x1="24" y1="12" x2="24" y2="15" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="24" y1="31" x2="24" y2="34" stroke="#38BDF8" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * 05. Managed IT & Operations 24/7 Glyph
 * Telemetry radar sweep with real-time heartbeat pulse
 */
export function ManagedSreGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1"
        strokeOpacity={highlight ? "0.3" : "0.15"}
      />
      <circle
        cx="24"
        cy="24"
        r="11"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1.2"
        strokeOpacity={highlight ? "0.7" : "0.35"}
      />
      {/* Heartbeat EKG Signal Line */}
      <path
        d="M10 24H18L21 16L24 32L27 20L30 24H38"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="32" r="2" fill="#10B981" />
    </svg>
  );
}

/**
 * 06. Applied Artificial Intelligence & Cognitive Tier Glyph
 * Hexagonal neural matrix with tensor weight synaptic nodes
 */
export function CognitiveAiGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      {/* Outer Hex Lattice */}
      <path
        d="M24 8L37 15.5V30.5L24 38L11 30.5V15.5L24 8Z"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1"
        strokeOpacity={highlight ? "0.35" : "0.2"}
        strokeDasharray="2 2"
      />

      {/* Synaptic Interconnect Lines */}
      <line x1="24" y1="8" x2="24" y2="24" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="37" y1="15.5" x2="24" y2="24" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="37" y1="30.5" x2="24" y2="24" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="24" y1="38" x2="24" y2="24" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="11" y1="30.5" x2="24" y2="24" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="11" y1="15.5" x2="24" y2="24" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />

      {/* Tensor Core Nodes */}
      <circle cx="24" cy="8" r="2" fill="#5BA7FF" />
      <circle cx="37" cy="15.5" r="2" fill="#5BA7FF" />
      <circle cx="37" cy="30.5" r="2" fill="#5BA7FF" />
      <circle cx="24" cy="38" r="2" fill="#5BA7FF" />
      <circle cx="11" cy="30.5" r="2" fill="#5BA7FF" />
      <circle cx="11" cy="15.5" r="2" fill="#5BA7FF" />

      {/* Central Cognitive Processor */}
      <circle cx="24" cy="24" r="4.5" fill="#38BDF8" className="animate-nx-pulse-glow" />
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * 07. Turnkey System Integration Glyph
 * Precision interlocking geometric orthogonal bus with acceptance markers
 */
export function SystemIntegrationGlyph({ className = "", size = 48, highlight = false }: GlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-110 ${className}`}
    >
      {/* 2 Interlocking Blocks */}
      <rect
        x="9"
        y="9"
        width="18"
        height="18"
        rx="3"
        stroke={highlight ? "#38BDF8" : "currentColor"}
        strokeWidth="1.2"
        strokeOpacity={highlight ? "0.85" : "0.4"}
      />
      <rect
        x="21"
        y="21"
        width="18"
        height="18"
        rx="3"
        stroke="#5BA7FF"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      {/* Interlocking Junction Cross */}
      <line x1="18" y1="21" x2="27" y2="21" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="21" y1="18" x2="21" y2="27" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="21" cy="21" r="2.5" fill="#38BDF8" />
      <circle cx="32" cy="14" r="1.5" fill="#10B981" />
      <circle cx="14" cy="32" r="1.5" fill="#10B981" />
    </svg>
  );
}
