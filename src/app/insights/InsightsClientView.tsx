"use client";

import React from "react";
import Link from "next/link";
import { INSIGHTS } from "@/lib/data";
import { ArrowRight, Calendar, Library } from "lucide-react";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function InsightsClientView() {
  const { language, t } = useLanguage();

  return (
    <main className="flex-1 bg-[#08090D] text-white min-h-screen">
      {/* 01. HERO WITH SUBTLE MIST, CONCENTRIC ORBITS & DYNAMIC SINE WAVES */}
      <NalarPageHeroAtmosphere
        badgeText={t("ins_page_badge", "04 · RESEARCH & EDITORIAL · ENGINEERING PAPERS")}
        headlinePrimary={t("ins_page_title_1", "Perspectives on Modern Infrastructure & AI.")}
        headlineSecondary={t("ins_page_title_2", "Ground-truth technical papers & regulatory analysis.")}
        description={t(
          "ins_page_desc",
          "Catatan riset dan pemikiran teknik dari para insinyur ARKAPRANA mengenai kedaulatan data, keamanan siber perimeter, dan integrasi kecerdasan buatan enterprise dengan rujukan regulasi resmi."
        )}
      />

      {/* 02. INSIGHT ARTICLES GRID WITH NALAR-GRADE CARDS & SCROLL ANIMATIONS */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSIGHTS.map((post, idx) => (
            <ScrollReveal key={post.id} delayMs={idx * 50}>
              <article className="relative rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_35px_rgba(56,189,248,0.18)] p-7 sm:p-8 backdrop-blur-2xl hover:-translate-y-1.5 h-full">
                {/* Top Specular Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/35 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-5">
                    <span className="text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/20 uppercase font-semibold text-[10.5px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-white/50 text-[11px]">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-light text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug font-display">
                    <Link href={`/insights/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light line-clamp-3">
                    {post.snippet}
                  </p>

                  {post.sources && post.sources.length > 0 && (
                    <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center gap-2 text-[10.5px] font-mono text-[#38BDF8]/80">
                      <Library className="size-3.5 shrink-0" />
                      <span>
                        {post.sources.length}{" "}
                        {language === "en"
                          ? "Official Regulatory Citations & Standards"
                          : "Rujukan Regulasi & Standar Resmi"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/insights/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 group-hover:text-white transition-colors"
                  >
                    <span>{t("btn_read_whitepaper", "Pelajari Dokumen Teknis")}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform text-[#38BDF8]" />
                  </Link>

                  <span className="text-[10px] font-mono text-white/30 uppercase">
                    Whitepaper
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 03. CLOSING CTA BANNER WITH SCROLL REVEAL */}
      <ScrollReveal delayMs={80}>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/10">
          <div className="rounded-3xl border border-white/10 bg-[#0C0E15] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-[#38BDF8]">
                <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>REGULATORY &amp; ARCHITECTURAL ADVISORY</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight font-display">
                {language === "en"
                  ? "Want to Discuss These Research Findings?"
                  : "Ingin Berdiskusi Mengenai Riset Ini?"}
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {language === "en"
                  ? "ARKAPRANA's architecture research team regularly assists corporate CTOs and Principal Engineers in aligning systems with UU PDP compliance and TIA-942 Tier-3 standards."
                  : "Tim riset arsitektur ARKAPRANA rutin mendampingi CTO dan Principal Engineer korporat dalam memetakan kesesuaian sistem dengan kepatuhan UU PDP dan standar TIA-942."}
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
                >
                  <span>{language === "en" ? "Contact Research Team" : "Hubungi Tim Riset"}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
