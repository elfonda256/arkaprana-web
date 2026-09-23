"use client";

import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck, Cpu, Radio } from "lucide-react";

export default function FutureVisionSection() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#081534] via-[#050c20] to-[#02050e] border border-cyan-500/30 shadow-2xl p-8 sm:p-14 overflow-hidden relative">
          {/* Decorative Corner Watermark */}
          <div className="absolute -bottom-10 -right-10 w-96 h-96 opacity-10 pointer-events-none">
            <Globe className="w-full h-full text-cyan-400" />
          </div>

          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>INDONESIA SOVEREIGN TECHNOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building Indonesia&apos;s Next Technology Infrastructure.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ARKAPRANA dibangun dengan visi untuk berkembang dari <em>technology integrator</em> menjadi <strong>intelligent technology company</strong> yang menghadirkan infrastruktur, layanan digital, automation dan artificial intelligence untuk organisasi di Indonesia dan pasar global.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 font-bold">SOVEREIGNTY</div>
                <div className="text-sm font-semibold text-white">Data Residency In-Country</div>
                <div className="text-xs text-slate-400">100% on-premise governance</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 font-bold">SCALE</div>
                <div className="text-sm font-semibold text-white">Archipelago Interconnect</div>
                <div className="text-xs text-slate-400">Multi-island enterprise networks</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 font-bold">FUTURE-READY</div>
                <div className="text-sm font-semibold text-white">Autonomous AI Systems</div>
                <div className="text-xs text-slate-400">Operational intelligence at scale</div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/25"
              >
                <span>Read Company Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
