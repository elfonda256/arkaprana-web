"use client";

import React from "react";
import { ARCHITECTURE_LAYERS } from "@/lib/data";
import {
  Users,
  LayoutGrid,
  BrainCircuit,
  Database,
  CloudCog,
  Shield,
  Share2,
  Boxes,
  ArrowDown
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  LayoutGrid,
  BrainCircuit,
  Database,
  CloudCog,
  Shield,
  Share2,
  Boxes
};

export default function ArchitectureSection() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>ENTERPRISE BLUEPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Full-Stack Technology Architecture
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Arsitektur terintegrasi yang memastikan setiap lapisan—dari fasilitas fisik hingga antarmuka pengguna akhir—bekerja dalam satu kesatuan yang terorkestrasi.
          </p>
        </div>

        {/* Vertical Stack Architecture Diagram */}
        <div className="space-y-3 relative">
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const Icon = iconMap[layer.icon] || Boxes;
            const isAi = layer.name.includes("AI");
            const isSecurity = layer.name.includes("SECURITY");

            return (
              <div key={layer.level} className="relative group">
                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
                    isAi
                      ? "bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border-cyan-500/40 shadow-lg shadow-cyan-950/30"
                      : isSecurity
                      ? "bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border-blue-500/30"
                      : "bg-[#060e22]/70 hover:bg-[#091534] border-white/10 hover:border-cyan-500/30"
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <span className="font-mono text-xs text-cyan-400 font-bold px-2 py-1 rounded bg-black/40 border border-cyan-500/20">
                      LEVEL {layer.level}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {layer.name}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 max-w-md sm:text-right pl-12 sm:pl-0">
                    {layer.detail}
                  </p>
                </div>

                {/* Micro Connector Arrow between layers */}
                {idx < ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-center -my-1.5 relative z-10">
                    <div className="w-5 h-5 rounded-full bg-[#030712] border border-cyan-500/30 flex items-center justify-center text-cyan-400/60 shadow">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
