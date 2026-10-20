"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocalizedInsightBySlug } from "@/lib/i18nData";
import { ChevronLeft, Calendar, Library, ExternalLink, ArrowRight, MessageSquare } from "lucide-react";
import PrintWhitepaperButton from "@/components/shared/PrintWhitepaperButton";
import NalarWaveOrbits from "@/components/decorative/NalarWaveOrbits";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface InsightDetailClientViewProps {
  slug: string;
}

export default function InsightDetailClientView({ slug }: InsightDetailClientViewProps) {
  const { language, t } = useLanguage();
  const post = getLocalizedInsightBySlug(slug, language) || getLocalizedInsightBySlug(slug, "id");

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 pt-32 pb-24 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white min-h-screen relative overflow-hidden">
      {/* Dynamic Responsive Waveforms, Orbits & Drifting Mist - Confined Strictly to Top Header */}
      <div className="absolute top-0 inset-x-0 h-[480px] pointer-events-none overflow-hidden select-none -z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] print:hidden">
        <NalarWaveOrbits />
      </div>

      {/* Subtle Coordinate Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none -z-10 print:hidden"
        style={{
          backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Navigation Breadcrumb & Executive Print Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/insights"
          className="inline-flex items-center text-xs font-mono text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white transition-colors px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-white/[0.03] backdrop-blur-md shadow-xs"
        >
          <ChevronLeft className="size-3.5 mr-1 text-slate-500 dark:text-white/60" />
          <span>{t("btn_back_insights", "Kembali ke Dokumen Wawasan")}</span>
        </Link>

        <PrintWhitepaperButton />
      </div>

      {/* Article Header & Printable Whitepaper Document */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Printable Official Letterhead */}
        <div className="hidden print:block mb-8 pb-4 border-b-2 border-black text-black">
          <div className="flex justify-between items-start text-xs font-mono">
            <div>
              <div className="font-extrabold text-base tracking-wider">PT ARKAPRANA TEKNOLOGI NUSANTARA</div>
              <div className="text-[11px] text-gray-700 font-semibold">DIVISI REKAYASA ARSITEKTUR TEKNOLOGI &amp; REGULASI KORPORAT</div>
              <div className="text-[10px] text-gray-500">Jakarta Selatan, DKI Jakarta 12530 • www.arkaprana.co.id</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-xs">ENTERPRISE TECHNICAL ADVISORY</div>
              <div className="text-[10px] text-gray-600">KLASIFIKASI: DOKUMEN RESMI</div>
              <div className="text-[10px] text-gray-600">REF: {post.category.toUpperCase()} // {post.date}</div>
            </div>
          </div>
        </div>

        <header className="space-y-6 pb-10 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-white/50">
            <span className="text-[#0284C7] dark:text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-[#38BDF8]/10 border border-sky-200 dark:border-[#38BDF8]/20 uppercase font-semibold text-[10.5px]">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3" />
              {post.date}
            </span>
            <span>•</span>
            <span>{language === "en" ? "6 min read" : "6 mnt baca"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-light text-slate-900 dark:text-white tracking-tight leading-[1.15] font-display">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-white/70 leading-relaxed font-light pt-2">
            {post.snippet}
          </p>
        </header>

        {/* Passing Light Hairline Divider */}
        <div className="beam-divider my-8" />

        {/* Content Body */}
        <div className="py-8 sm:py-12 text-slate-800 dark:text-white/75 leading-relaxed space-y-10 sm:space-y-12 text-sm sm:text-base font-light">
          {post.sections && post.sections.length > 0 ? (
            <div className="space-y-10 sm:space-y-12">
              {/* Executive Outline / Quick Navigation */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 shadow-lg space-y-3 backdrop-blur-xl">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#0284C7] dark:text-[#38BDF8] font-semibold block">
                  {language === "en" ? "Document Blueprint // Section Index" : "Cetak Biru Dokumen // Daftar Pembahasan"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700 dark:text-white/80">
                  {post.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="text-[#0284C7] dark:text-[#38BDF8] font-bold">0{sIdx + 1}.</span>
                      <span className="truncate">{sec.title.replace(/^\d+\.\s*/, "")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-Section Technical Narrative */}
              {post.sections.map((section, idx) => (
                <ScrollReveal key={idx} delayMs={idx * 40}>
                  <section className="space-y-5 pt-8 border-t border-slate-200 dark:border-white/10 first:border-0 first:pt-0">
                    <h2 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white font-display tracking-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-white/70 leading-relaxed font-light">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {section.takeaway && (
                      <div className="p-5 rounded-2xl bg-sky-50/70 dark:bg-[#0E1524] border-l-4 border-[#0284C7] dark:border-[#38BDF8] border-r border-t border-b border-sky-200 dark:border-slate-700/50 text-xs sm:text-sm text-slate-800 dark:text-white/90">
                        <span className="font-mono text-[10px] uppercase text-[#0284C7] dark:text-[#38BDF8] font-semibold tracking-wider block mb-1">
                          {language === "en" ? "Engineering Principle // Key Takeaway" : "Prinsip Rekayasa // Key Takeaway"}
                        </span>
                        <p className="leading-relaxed font-light">{section.takeaway}</p>
                      </div>
                    )}
                  </section>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p>{post.content}</p>
          )}

          {/* Key Engineering Takeaway */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 shadow-lg my-10 space-y-2 backdrop-blur-xl">
            <h4 className="text-xs font-bold text-[#0284C7] dark:text-[#38BDF8] font-mono uppercase tracking-widest">
              {language === "en" ? "Final Architectural Synthesis" : "Sintesis Akhir Arsitektur"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-white/70 leading-relaxed font-light">
              {language === "en"
                ? "Resilient sovereign technology architecture is never about picking superficial software at the top layer, but rather ensuring physical layer integrity, strictly preserved domestic jurisdiction boundaries, non-blocking optical redundancy, and continuously audited zero-trust access controls."
                : "Arsitektur teknologi yang berdaulat dan tangguh tidak dimulai dari pemilihan software di lapisan teratas, melainkan dari integritas layer fisik, kedaulatan data di dalam yurisdiksi nasional, redundansi transmisi non-blocking, serta model tata kelola keamanan zero-trust yang diverifikasi secara berkelanjutan."}
            </p>
          </div>

          {/* Official Sources & Citations Section */}
          {post.sources && post.sources.length > 0 && (
            <div className="pt-10 mt-12 border-t border-slate-200 dark:border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-[#0284C7] dark:text-[#38BDF8]">
                  <Library className="size-4" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                    {language === "en" ? "Official References & Citations" : "Daftar Sumber Acuan & Rujukan Resmi"}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-white/40">
                  {post.sources.length} {language === "en" ? "Verified Regulatory Documents & Industry Standards" : "Dokumen Regulasi & Standar Industri Terverifikasi"}
                </span>
              </div>

              <div className="space-y-3.5">
                {post.sources.map((src, srcIdx) => (
                  <div
                    key={srcIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-[#0284C7]/40 dark:hover:border-[#38BDF8]/40 shadow-xs transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-[#0284C7] dark:bg-[#38BDF8]/10 dark:border-[#38BDF8]/20 dark:text-[#38BDF8]">
                          {src.referenceNumber}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-white/50">
                          {src.type}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-white/40">
                          • {src.year}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8] transition-colors leading-snug">
                        {src.title}
                      </div>

                      <div className="text-[11px] font-mono text-slate-500 dark:text-white/45">
                        {language === "en" ? "Publisher / Authority:" : "Penerbit / Otoritas:"}{" "}
                        <span className="text-slate-700 dark:text-white/70">{src.institution}</span>
                      </div>
                    </div>

                    {src.url && (
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[#0284C7] dark:text-[#38BDF8] hover:underline shrink-0 self-start sm:self-center px-3 py-1 rounded-full bg-sky-50 dark:bg-white/[0.04] border border-sky-200 dark:border-white/10 hover:border-sky-300 dark:hover:border-white/20 transition-all print:hidden"
                      >
                        <span>{language === "en" ? "View Document" : "Lihat Dokumen"}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Post Footer CTA (Web Only) */}
        <ScrollReveal delayMs={60}>
          <footer className="pt-8 border-t border-slate-200 dark:border-white/10 mt-12 p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl dark:shadow-2xl backdrop-blur-xl print:hidden">
            <div className="space-y-1 max-w-md">
              <h4 className="text-base sm:text-lg font-light text-slate-900 dark:text-white font-display">
                {language === "en" ? "Planning a Similar Technological Initiative?" : "Merencanakan Inisiatif Teknologi Serupa?"}
              </h4>
              <p className="text-xs text-slate-600 dark:text-white/50 font-light">
                {language === "en"
                  ? "Consult technical feasibility, data architecture, and regulatory compliance directly with ARKAPRANA Principal Engineers."
                  : "Konsultasikan kelayakan teknis, arsitektur data, dan kepatuhan regulasi bersama Principal Engineer ARKAPRANA."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:text-black dark:bg-white dark:hover:bg-white/95 transition-all shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
              >
                <span>{language === "en" ? "Start Technical Discussion" : "Mulai Diskusi Teknis"}</span>
                <ArrowRight className="size-3.5" />
              </Link>

              <a
                href={
                  language === "en"
                    ? "https://wa.me/62816997963?text=Hello%20ARKAPRANA,%20I%20am%20interested%20in%20discussing%20technology%20initiatives%20with%20an%20engineer"
                    : "https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20tertarik%20berdiskusi%20dengan%20engineer%20mengenai%20inisiatif%20teknologi"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-mono text-slate-700 hover:text-slate-950 dark:text-white/70 dark:hover:text-white bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200/80 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 transition-all"
              >
                <MessageSquare className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{language === "en" ? "Direct WhatsApp Desk" : "Meja WhatsApp Langsung"}</span>
              </a>
            </div>
          </footer>
        </ScrollReveal>

        {/* Printable Official Document Footer */}
        <div className="hidden print:block mt-12 pt-4 border-t border-black text-[10px] text-gray-700 font-mono">
          <div className="flex justify-between items-center">
            <span>© PT ARKAPRANA TEKNOLOGI NUSANTARA • www.arkaprana.co.id</span>
            <span>
              {language === "en"
                ? "Document Approved for Executive & Enterprise IT Committee Review"
                : "Dokumen Disetujui untuk Evaluasi Direksi & Komite IT Korporat"}
            </span>
          </div>
        </div>
      </article>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* MONUMENTAL NALAR ORBITAL CTA SECTION */}
      <div className="print:hidden">
        <ScrollReveal delayMs={80}>
          <NalarOrbitalCtaSection />
        </ScrollReveal>
      </div>
    </main>
  );
}
