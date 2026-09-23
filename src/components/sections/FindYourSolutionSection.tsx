"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, HelpCircle, ArrowUpRight } from "lucide-react";

const IMPROVE_OPTIONS = [
  "Connectivity",
  "Infrastructure",
  "Security",
  "Cloud",
  "IT Operations",
  "AI",
  "Automation",
  "System Integration",
  "Digital Transformation"
];

const CHALLENGE_OPTIONS = [
  "High network latency & frequent inter-branch downtime",
  "Aging physical servers & high datacenter cooling/power costs",
  "Strict data sovereignty regulations (UU PDP / Financial compliance)",
  "Internal IT team overwhelmed by routine troubleshooting",
  "Manual repetitive document processing & fragmented knowledge",
  "Multi-vendor integration failure & incompatible hardware"
];

const TIMELINE_OPTIONS = [
  "Immediate deployment (< 3 Months)",
  "Mid-term strategic rollout (3–6 Months)",
  "New facility / site expansion (6–12 Months)",
  "Exploratory feasibility study & architectural audit"
];

export default function FindYourSolutionSection() {
  const [selectedImprove, setSelectedImprove] = useState<string>("Connectivity");
  const [selectedChallenge, setSelectedChallenge] = useState<string>(CHALLENGE_OPTIONS[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(TIMELINE_OPTIONS[0]);

  // Rule-based recommendation engine
  const getRecommendation = () => {
    switch (selectedImprove) {
      case "Connectivity":
        return {
          primarySolution: "ARKAPRANA NETWORK",
          secondarySolution: "ARKAPRANA SECURE",
          route: "/solutions/network",
          focus: "Carrier-Neutral Fiber Backbone & High-Density SD-WAN Mesh",
          reason: "Solusi ini mengeliminasi single point of failure dan menstabilkan latensi koneksi antar site di bawah 20ms.",
          deliverables: ["Site Survey Heatmap", "Switching Matrix Specification", "Failover SLA Verification"]
        };
      case "Infrastructure":
        return {
          primarySolution: "ARKAPRANA INFRA",
          secondarySolution: "ARKAPRANA CLOUD",
          route: "/solutions/infrastructure",
          focus: "Tier-3+ Datacenter Facilities & High-Density Compute Clusters",
          reason: "Menjamin ketersediaan daya redundan 2N+1 dan pendinginan presisi in-row untuk beban komputasi kritis 24/7.",
          deliverables: ["Tier-3 Engineering Blueprint", "CFD Thermal Simulation", "Commissioning Acceptance"]
        };
      case "Security":
        return {
          primarySolution: "ARKAPRANA SECURE",
          secondarySolution: "ARKAPRANA MANAGED",
          route: "/solutions/security",
          focus: "Zero-Trust Architecture, HSM Vaults & 24/7 Threat Hunting",
          reason: "Melindungi perimeter dan identitas internal secara menyeluruh serta memastikan kesiapan audit ISO 27001.",
          deliverables: ["Threat & Vulnerability Assessment", "Zero-Trust Framework", "Incident Response Protocol"]
        };
      case "Cloud":
        return {
          primarySolution: "ARKAPRANA CLOUD",
          secondarySolution: "ARKAPRANA INFRA",
          route: "/solutions/cloud",
          focus: "Sovereign Private Cloud & Kubernetes Enterprise Cluster",
          reason: "Menghadirkan fleksibilitas cloud dengan kedaulatan data 100% di yurisdiksi Indonesia dan zero egress fee.",
          deliverables: ["Private Cloud Blueprint", "S3 Storage Cluster Setup", "Disaster Recovery Automation"]
        };
      case "IT Operations":
        return {
          primarySolution: "ARKAPRANA MANAGED",
          secondarySolution: "ARKAPRANA NETWORK",
          route: "/solutions/managed-it",
          focus: "24/7 Dedicated Enterprise NOC & SLA-Backed Engineering",
          reason: "Mengambil alih monitoring infrastruktur dan troubleshooting teknis sehingga tim internal Anda fokus pada bisnis.",
          deliverables: ["SLA Contract 99.99%", "24/7 NOC Access Portal", "Monthly Executive Health Audit"]
        };
      case "AI":
      case "Automation":
        return {
          primarySolution: "ARKAPRANA AI",
          secondarySolution: "ARKAPRANA INFRA",
          route: "/solutions/ai",
          focus: "Private On-Premise LLM, Enterprise RAG & Document Intelligence",
          reason: "Mengotomasi pemahaman ribuan dokumen organisasi tanpa risiko kebocoran data rahasia ke cloud publik.",
          deliverables: ["Private RAG Architecture", "Isolated Vector Catalog", "Document Extraction Model"]
        };
      case "System Integration":
      case "Digital Transformation":
      default:
        return {
          primarySolution: "ARKAPRANA INTEGRATION",
          secondarySolution: "ARKAPRANA NETWORK",
          route: "/solutions/integration",
          focus: "Turnkey Architecture, Hardware Harmonisation & Commissioning",
          reason: "Bertindak sebagai single point of accountability untuk pengadaan resmi dan integrasi multi-vendor tanpa konflik.",
          deliverables: ["Turnkey Project Execution Blueprint", "Distributor Warranty Ledger", "As-Built CAD Drawings"]
        };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="solution-finder" className="py-28 md:py-36 bg-[#F8FAFC] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Section 12 verbatim) */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Interactive Architecture Matcher</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Not sure where to start?
            <span className="block text-neutral-500 font-normal mt-1">
              Tell us what you're trying to solve.
            </span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Gunakan kuesioner interaktif sederhana berikut untuk mendapatkan rekomendasi arsitektur teknologi ARKAPRANA yang paling sesuai dengan prioritas dan skala kebutuhan organisasi Anda.
          </p>
        </div>

        {/* Interactive Questionnaire Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: 3 Interactive Questions (Span 7) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-sm">
            
            {/* Question 1: What are you trying to improve? */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 font-semibold">
                Question 01 • What are you trying to improve?
              </label>
              <div className="flex flex-wrap gap-2">
                {IMPROVE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedImprove(opt)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedImprove === opt
                        ? "bg-neutral-900 text-white shadow-md scale-[1.02]"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: What's your current challenge? */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 font-semibold">
                Question 02 • What's your current challenge?
              </label>
              <div className="space-y-2">
                {CHALLENGE_OPTIONS.map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChallenge(ch)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm transition-all border flex items-center justify-between ${
                      selectedChallenge === ch
                        ? "bg-cyan-50/60 border-cyan-500/80 text-neutral-900 font-semibold shadow-sm"
                        : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{ch}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                        selectedChallenge === ch
                          ? "border-cyan-600 bg-cyan-600 text-white"
                          : "border-neutral-300"
                      }`}
                    >
                      {selectedChallenge === ch && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: What are you planning? */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 font-semibold">
                Question 03 • What is your planning timeline?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TIMELINE_OPTIONS.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTimeline(time)}
                    className={`text-left p-3 rounded-xl text-xs transition-all border ${
                      selectedTimeline === time
                        ? "bg-neutral-900 text-white font-medium border-neutral-900"
                        : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Dynamic Rule-Based Recommendation Box (Span 5) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-[#070b16] text-white p-7 sm:p-8 border border-white/[0.12] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

              {/* Recommendation Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> ARKAPRANA MAY HELP WITH:
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  Targeted Architecture
                </span>
              </div>

              {/* Recommended Solution Title */}
              <div className="mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Primary Recommendation
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {rec.primarySolution}
                </h3>
                <div className="text-xs text-cyan-300 font-mono mt-1">
                  + {rec.secondarySolution}
                </div>
              </div>

              {/* Architecture Focus */}
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] mb-5">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                  Recommended Architecture Focus
                </span>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {rec.focus}
                </div>
              </div>

              {/* Rationale */}
              <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                {rec.reason}
              </p>

              {/* Key Deliverables */}
              <div className="mb-6 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                  Expected Technical Deliverables
                </span>
                {rec.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* Strategic CTA (Section 12 & 22) */}
              <div className="pt-5 border-t border-white/[0.08]">
                <Link
                  href={`/contact?interest=${encodeURIComponent(selectedImprove)}&timeline=${encodeURIComponent(selectedTimeline)}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
                >
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
