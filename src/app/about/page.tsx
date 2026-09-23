import React from "react";
import Link from "next/link";
import { COMPANY_PROFILE } from "@/lib/data";
import { ArrowRight, CheckCircle2, Shield, Target, Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | ARKAPRANA Technology & Intelligent Solutions",
  description:
    "Mengenal PT ARKAPRANA TEKNOLOGI NUSANTARA — Visi, misi, dan positioning sebagai perusahaan teknologi yang mengintegrasikan infrastruktur hingga kecerdasan buatan."
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Hero Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>ABOUT COMPANY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering the Digital Future of Nusantara.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            {COMPANY_PROFILE.positioning}
          </p>
        </div>
      </section>

      {/* Corporate Identity & Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Fondasi Engineering yang Tangguh & Berkelanjutan
            </h2>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                <strong>{COMPANY_PROFILE.legalName}</strong> didirikan dengan tekad menghadirkan kapabilitas teknologi kelas enterprise bagi organisasi di Indonesia. Kami memandang bahwa adopsi teknologi cerdas seperti Artificial Intelligence tidak dapat berdiri sendiri tanpa fondasi komputasi fisik, jaringan data, dan keamanan siber yang kokoh.
              </p>
              <p>
                Dengan mengintegrasikan 7 pilar utama (Network, Infrastructure, Cloud, Cybersecurity, Managed Services, AI, dan System Integration), kami memastikan klien kami memiliki arsitektur yang aman dari ancaman, adaptif terhadap pertumbuhan skala data, dan siap mengadopsi otomasi cerdas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060e22] border border-cyan-500/20 shadow-lg space-y-2">
              <div className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                BRAND FORMULA
              </div>
              <div className="text-base font-bold text-white">
                INFRASTRUCTURE → NETWORK → CLOUD → SECURITY → DATA → AI
              </div>
              <p className="text-xs text-slate-400">
                Alur transformasi digital holistik yang menjamin investasi teknologi berbuah efisiensi nyata.
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#081534] to-[#040817] border border-cyan-500/30 shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-cyan-400">
                <Compass className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                  VISI PERUSAHAAN
                </h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed italic">
                &ldquo;{COMPANY_PROFILE.vision}&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-[#060e22] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center space-x-3 text-cyan-400">
                <Target className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                  MISI KORPORAT
                </h3>
              </div>
              <ul className="space-y-3">
                {COMPANY_PROFILE.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-300 space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Siap Membangun Fondasi Teknologi Anda?</h3>
            <p className="text-sm text-slate-400">
              Diskusikan tantangan arsitektur dan kebutuhan infrastruktur organisasi Anda bersama kami.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/25 shrink-0"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
