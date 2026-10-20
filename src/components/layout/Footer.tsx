"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE } from "@/lib/data";
import { getLocalizedSolutions, getLocalizedIndustries } from "@/lib/i18nData";
import BrandLogo from "@/components/brand/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const solutions = getLocalizedSolutions(language);
  const industries = getLocalizedIndustries(language);

  return (
    <footer className="bg-slate-100 dark:bg-[#080C14] relative overflow-hidden text-slate-600 dark:text-white/60 transition-colors duration-300">
      {/* Top Animated Passing Light Beam Divider */}
      <div className="beam-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group transition-opacity hover:opacity-90">
              <BrandLogo variant="auto" size="md" showWordmark={true} showDescriptor={false} />
            </Link>

            <p className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8] font-semibold">
              {language === "en" ? "Sovereign Infrastructure & AI" : "Infrastruktur & AI Berdaulat"}
            </p>

            <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed max-w-sm font-light">
              {t("footer_desc", "Membangun dan mengintegrasikan fondasi teknologi terpadu—dari infrastruktur fisik, jaringan berkecepatan tinggi, cloud sovereign, keamanan siber hingga artificial intelligence otonom.")}
            </p>

            <div className="pt-2 text-xs font-mono text-slate-800 dark:text-white/80 font-medium">
              <span className="text-slate-500 dark:text-white/40">{t("footer_thesis", "Core Thesis: ")}</span>BUILD. CONNECT. INTELLIGENCE.
            </div>

            <div className="pt-1 text-[11px] text-slate-500 dark:text-white/40 font-mono">
              PT ARKAPRANA TEKNOLOGI NUSANTARA
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-slate-900 dark:text-white/90 font-semibold mb-4">
              {language === "en" ? "Solutions" : "Solusi"}
            </h4>
            <ul className="space-y-2 text-xs">
              {solutions.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors flex items-center group font-light"
                  >
                    <span>{sol.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0284C7] dark:text-[#38BDF8]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-slate-900 dark:text-white/90 font-semibold mb-4">
              {language === "en" ? "Industries" : "Sektor Industri"}
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {industries.slice(0, 5).map((ind) => (
                <li key={ind.name}>
                  <Link href="/industries" className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-[#0284C7] dark:text-[#38BDF8] hover:underline font-medium inline-flex items-center gap-1">
                  {language === "en" ? "All 8 Sectors →" : "Seluruh 8 Sektor →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Insights */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-slate-900 dark:text-white/90 font-semibold mb-4">
              {language === "en" ? "Navigation" : "Navigasi"}
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/capabilities" className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors">
                  {language === "en" ? "Capabilities Blueprint" : "Cetak Biru Kapabilitas"}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors">
                  {language === "en" ? "Case Studies & Deployments" : "Studi Kasus & Proyek"}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors">
                  {language === "en" ? "Technical Insights" : "Wawasan Rekayasa"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors">
                  {language === "en" ? "About ARKAPRANA" : "Tentang ARKAPRANA"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors">
                  {language === "en" ? "Principal Consultation Desk" : "Meja Konsultasi Insinyur"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Minimal */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-slate-900 dark:text-white/90 font-semibold mb-4">
              {language === "en" ? "Contact" : "Kontak"}
            </h4>
            <div className="space-y-3 text-xs font-light">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.contact.email}`}
                  className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors"
                >
                  {COMPANY_PROFILE.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0" />
                <a
                  href={COMPANY_PROFILE.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-950 dark:text-white/60 dark:hover:text-white transition-colors"
                >
                  {COMPANY_PROFILE.contact.phone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-600 dark:text-white/60">Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-white/40 gap-4">
          <p>{t("footer_rights", "© 2026 PT ARKAPRANA TEKNOLOGI NUSANTARA. Seluruh Hak Dilindungi.")}</p>
          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span>BUILD. CONNECT. INTELLIGENCE.</span>
            <span className="text-slate-700 dark:text-white/60 font-semibold">INDONESIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
