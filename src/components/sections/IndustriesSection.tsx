"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/data";
import {
  Factory,
  Ship,
  HardHat,
  Landmark,
  Building2,
  Truck,
  Building,
  Hotel,
  Wrench,
  BadgeDollarSign,
  GraduationCap,
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Ship,
  HardHat,
  Landmark,
  Building2,
  Truck,
  Building,
  Hotel,
  Wrench,
  BadgeDollarSign,
  GraduationCap,
  HeartPulse
};

// Strategic Cluster Definitions
const CLUSTERS = [
  { id: "all", label: "All Critical Sectors" },
  { id: "heavy", label: "Heavy Industry & Maritime" },
  { id: "enterprise", label: "Governance & Finance" },
  { id: "infrastructure", label: "Critical Facilities & Healthcare" }
];

const industryClusters: Record<string, "heavy" | "enterprise" | "infrastructure"> = {
  "Manufaktur & Pabrik": "heavy",
  "Pelabuhan & Maritim": "heavy",
  "Pertambangan & Energi": "heavy",
  "Logistik & Pergudangan": "heavy",
  "Konstruksi & Proyek": "heavy",
  "Pemerintahan & BUMN": "enterprise",
  "Perbankan & Fintech": "enterprise",
  "Korporasi & Perkantoran": "enterprise",
  "Pendidikan & Kampus": "enterprise",
  "Kawasan Komersial": "infrastructure",
  "Perhotelan & Hospitality": "infrastructure",
  "Rumah Sakit & Kesehatan": "infrastructure"
};

export default function IndustriesSection() {
  const [activeCluster, setActiveCluster] = useState<string>("all");

  const filteredIndustries = INDUSTRIES.filter((ind) => {
    if (activeCluster === "all") return true;
    return industryClusters[ind.name] === activeCluster;
  });

  return (
    <section id="industries" className="py-28 md:py-36 bg-[#040814] border-t border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Built For Critical Environments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Engineered where failure
            <span className="block text-neutral-400 font-normal">
              is not an acceptable option.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-1">
            Dari anjungan lepas pantai maritim hingga pusat data lembaga keuangan terpusat, ARKAPRANA merekayasa sistem yang sanggup bertahan di lingkungan paling menuntut.
          </p>
        </div>

        {/* Cluster Selector Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CLUSTERS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCluster(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeCluster === c.id
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Editorial Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => {
            const Icon = iconMap[ind.icon] || Building;

            return (
              <div
                key={ind.name}
                className="p-7 rounded-2xl bg-[#060a15] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      Mission Critical
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      Targeted Ecosystem Architecture:
                    </span>
                    <span className="text-xs font-medium text-neutral-200 block">
                      {ind.solutions}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Consult Industry Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strategic Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#060a14] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Have Highly Regulated or Remote Deployment Needs?</h4>
            <p className="text-xs text-neutral-400 max-w-xl">
              Spesialis arsitek industri ARKAPRANA siap melakukan site survey mendalam dan menyusun kajian teknis kelayakan untuk fasilitas Anda.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-sm"
          >
            Schedule Technical Assessment
          </Link>
        </div>

      </div>
    </section>
  );
}
