"use client";

import React from "react";
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
  ArrowRight
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

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-[#040915] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>SECTOR SPECIALIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology for Every Critical Environment.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Setiap sektor industri menghadapi tantangan keandalan dan regulasi yang unik. Kami merekayasa solusi spesifik yang teruji untuk beban operasional kritis.
          </p>
        </div>

        {/* 12 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || Building;

            return (
              <div
                key={ind.name}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#081329] to-[#040817] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {ind.name}
                    </h3>
                  </div>

                  <div className="mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      Solutions for:
                    </span>
                    <p className="text-xs font-medium text-slate-200">
                      {ind.solutions}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="text-[11px] font-semibold text-slate-400 hover:text-cyan-400 flex items-center group/item transition-colors"
                  >
                    <span>Consult Industry Needs</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/item:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
