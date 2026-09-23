"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_ENGAGEMENT_MODELS } from "@/lib/data";
import { ArrowRight, CheckCircle, Briefcase, RefreshCw, Sparkles } from "lucide-react";

const icons = [Briefcase, RefreshCw, Sparkles];

export default function EngagementSection() {
  return (
    <section className="py-24 bg-[#040817] border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>ENGAGEMENT ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Partner
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Dari inisiatif proyek awal hingga kontrak layanan terkelola berkesinambungan (managed services), ARKAPRANA mendampingi evolusi teknologi organisasi Anda di setiap fase.
          </p>
        </div>

        {/* 3 Engagement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_ENGAGEMENT_MODELS.map((model, idx) => {
            const Icon = icons[idx];
            const isHighlight = model.id === "managed";

            return (
              <div
                key={model.id}
                className={`flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                  isHighlight
                    ? "bg-gradient-to-b from-[#0a1738] to-[#050c20] border-cyan-500/40 shadow-2xl shadow-cyan-950/40"
                    : "bg-[#060e22]/70 border-white/10 hover:border-cyan-500/30"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {model.name}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400/90 uppercase tracking-wider mb-4">
                    {model.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Engagement Scope:
                    </span>
                    {model.deliverables.map((item) => (
                      <div key={item} className="flex items-start text-xs text-slate-300 space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/contact?engagement=${encodeURIComponent(model.id)}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400 transition-colors"
                  >
                    <span>Discuss {model.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
