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

export const metadata = {
  title: "Industries | ARKAPRANA Technology & Intelligent Solutions",
  description:
    "Solusi rekayasa teknologi dan infrastruktur digital untuk 12 sektor industri krusial: Manufaktur, Maritim, Konstruksi, Pemerintahan, BUMN, Finansial, dan lainnya."
};

export default function IndustriesPage() {
  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>CRITICAL ENVIRONMENTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for High-Stakes Operations.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Kami memahami bahwa lingkungan operasional pelabuhan kapal berbeda drastis dengan ruang kendali data center perbankan. ARKAPRANA menghadirkan arsitektur yang disesuaikan dengan regulasi dan reliabilitas industri Anda.
          </p>
        </div>
      </section>

      {/* Grid of 12 Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || Building;

            return (
              <div
                key={ind.name}
                className="p-8 rounded-2xl bg-gradient-to-b from-[#081329] to-[#040817] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {ind.name}
                      </h2>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                        MISSION-CRITICAL
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-slate-200 mb-2 font-mono">
                    {ind.headline}
                  </h3>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                      Solutions for:
                    </span>
                    <p className="text-xs font-semibold text-slate-300">
                      {ind.solutions}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <span>Discuss {ind.name} Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
