"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_ENGAGEMENT_MODELS } from "@/lib/data";
import { ArrowRight, CheckCircle2, Briefcase, RefreshCw, Sparkles } from "lucide-react";

const icons = [Briefcase, RefreshCw, Sparkles];

export default function EngagementSection() {
  return (
    <section className="py-28 md:py-36 bg-[#030712] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Engagement Models</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            How we partner.
            <span className="block text-neutral-400 font-normal">
              Structured for long-term operational velocity.
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pt-1">
            Dari inisiatif proyek khusus hingga kontrak kemitraan teknologi jangka panjang terkelola (managed engineering).
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
                className={`flex flex-col justify-between p-8 sm:p-9 rounded-2xl border transition-all duration-300 ${
                  isHighlight
                    ? "bg-[#070d1e] border-cyan-400/40 shadow-xl shadow-cyan-950/30"
                    : "bg-[#060a14] border-white/[0.08] hover:border-white/[0.2]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.06]">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      Model 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5">
                    {model.name}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                    {model.tagline}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <div className="space-y-2.5 pt-5 border-t border-white/[0.06] mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                      Engagement Scope:
                    </span>
                    {model.deliverables.map((item) => (
                      <div key={item} className="flex items-start text-xs text-neutral-300 space-x-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/contact?engagement=${encodeURIComponent(model.id)}`}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isHighlight
                        ? "bg-white text-black hover:bg-neutral-200 shadow-sm"
                        : "bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.1]"
                    }`}
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
