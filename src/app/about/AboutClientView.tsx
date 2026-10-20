"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_PROFILE } from "@/lib/data";
import { getLocalizedAboutData } from "@/lib/i18nData";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Compass,
  Server,
  Network,
  Cloud,
  Cpu,
  BrainCircuit,
  Workflow,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from "lucide-react";
import CompanyProfileModal from "@/components/shared/CompanyProfileModal";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const PILLAR_ICONS = [
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
];

const LEADERSHIP_ICONS = [
  Users,
  Network,
  ShieldCheck,
  BrainCircuit
];

export default function AboutClientView() {
  const { language, t } = useLanguage();
  const aboutData = getLocalizedAboutData(language);

  return (
    <main className="flex-1 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white min-h-screen">
      {/* 01. HERO WITH SUBTLE MIST, CONCENTRIC ORBITS & DYNAMIC SINE WAVES */}
      <NalarPageHeroAtmosphere
        badgeText={t("abt_page_badge", "05 · ABOUT ARKAPRANA · COMPANY & VISION")}
        headlinePrimary={t("abt_page_title_1", "Technology built for what comes next.")}
        headlineSecondary={t("abt_page_title_2", "Engineering sovereign intelligence for Indonesian enterprise.")}
        description={
          language === "en"
            ? "PT ARKAPRANA TEKNOLOGI NUSANTARA is an enterprise systems integrator providing high-density computing, carrier-grade data networks, and sovereign artificial intelligence capabilities in Indonesia."
            : COMPANY_PROFILE.positioning
        }
      >
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <CompanyProfileModal
            triggerClassName="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/95 transition-all shadow-md dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            triggerText={t("btn_download_cp", "Download Company Profile")}
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium text-slate-700 hover:text-slate-950 dark:text-white/80 dark:hover:text-white bg-white/90 dark:bg-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/15 transition-all hover:scale-105 active:scale-95 shadow-xs"
          >
            <span>{t("btn_talk_engineer", "Bicara dengan Engineer")}</span>
            <ChevronRight className="size-3.5 text-sky-600 dark:text-[#38BDF8]" />
          </Link>
        </div>
      </NalarPageHeroAtmosphere>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 02. WHO WE ARE */}
      <ScrollReveal delayMs={60}>
        <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] shadow-xs">
                <span className="size-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
                <span>{t("abt_who_badge", "IDENTITY & PURPOSE")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white font-display tracking-tight leading-[1.18]">
                {t("abt_who_title", "Satu Rekayasa Terpadu untuk Seluruh Lapisan IT.")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50 font-mono">
                PT ARKAPRANA TEKNOLOGI NUSANTARA · INDONESIA
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light">
              {language === "en" ? (
                <>
                  <p>
                    <strong className="text-slate-900 dark:text-white font-semibold">PT ARKAPRANA TEKNOLOGI NUSANTARA</strong> (ARKAPRANA) was established as an enterprise engineering firm and systems integrator delivering critical compute, carrier-grade data networks, and sovereign artificial intelligence capabilities across Indonesia.
                  </p>
                  <p>
                    We believe that intelligent technology adoption such as Artificial Intelligence cannot exist in a vacuum. True intelligence requires physical computing foundations, ultra-low latency optical networks, and impenetrable Zero-Trust cybersecurity architectures.
                  </p>
                  <p>
                    Through principal-level engineering mastery and unyielding commitment to domestic data sovereignty, we serve as the trusted technology partner for enterprises designing, building, operating, and evolving their technological ecosystems.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong className="text-slate-900 dark:text-white font-semibold">PT ARKAPRANA TEKNOLOGI NUSANTARA</strong> (ARKAPRANA) didirikan sebagai perusahaan teknologi dan system integrator rekayasa yang berfokus menghadirkan kapabilitas komputasi, jaringan data, dan kecerdasan buatan kelas enterprise di Indonesia.
                  </p>
                  <p>
                    Kami memandang bahwa adopsi teknologi cerdas seperti Artificial Intelligence tidak dapat berdiri sendiri di ruang hampa. Kecerdasan sejati memerlukan fondasi komputasi fisik, jaringan data berlatensi rendah, serta arsitektur keamanan siber yang tidak dapat ditembus.
                  </p>
                  <p>
                    Melalui kombinasi kemampuan rekayasa teknis tingkat prinsipal dan komitmen kedaulatan data lokal, kami menjadi technology partner bagi organisasi dalam merancang, membangun, mengoperasikan, dan mengevolusikan lingkungan teknologi mereka.
                  </p>
                </>
              )}

              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 space-y-3 shadow-xl backdrop-blur-xl">
                <span className="text-[10px] font-mono text-sky-600 dark:text-[#38BDF8] uppercase tracking-widest font-semibold block">
                  {language === "en" ? "Strategic Technology Journey" : "Tahapan Transformasi Strategis"}
                </span>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono tracking-wider">
                  INFRASTRUCTURE → NETWORK → CLOUD → SECURITY → DATA → AI
                </div>
                <p className="text-xs text-slate-600 dark:text-white/50 font-light">
                  {language === "en"
                    ? "A holistic digital transformation pathway ensuring technology investments yield verifiable resilience and zero multi-vendor friction."
                    : "Alur transformasi digital holistik yang menjamin investasi teknologi berbuah stabilitas dan efisiensi nyata tanpa gesekan antar-vendor."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 03. WHAT WE BELIEVE */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] shadow-xs">
              <span className="size-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_beliefs_badge", "ENGINEERING PHILOSOPHY")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white font-display tracking-tight">
              {t("abt_beliefs_title", "Prinsip Rekayasa Kami")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 font-light max-w-xl mx-auto">
              {t("abt_beliefs_desc", "Prinsip fundamental yang memandu setiap desain arsitektur, pemilihan vendor, dan komitmen operasional kami.")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {aboutData.beliefs.map((b, idx) => (
            <ScrollReveal key={b.title} delayMs={idx * 50}>
              <div className="relative rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-sky-400/50 dark:hover:border-[#38BDF8]/40 transition-all duration-500 p-8 sm:p-9 space-y-4 shadow-xl backdrop-blur-2xl group hover:-translate-y-1 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-[#38BDF8]/10 border border-sky-200 dark:border-[#38BDF8]/20 font-semibold">
                      {language === "en" ? `BELIEF 0${idx + 1}` : `PRINSIP 0${idx + 1}`}
                    </span>
                    <span className="size-1.5 rounded-full bg-slate-300 dark:bg-white/20 group-hover:bg-[#38BDF8] transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-slate-900 dark:text-white font-display">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 04. VISION & MISSION */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Vision */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={50}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 shadow-xl backdrop-blur-2xl space-y-6 flex flex-col justify-between hover:border-sky-400/50 dark:hover:border-[#38BDF8]/30 transition-all h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-sky-600 dark:text-[#38BDF8]">
                    <Compass className="size-6" />
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-800 dark:text-white/80">
                      {language === "en" ? "CORPORATE VISION" : "VISI PERUSAHAAN (VISION)"}
                    </h3>
                  </div>
                  <p className="text-lg sm:text-2xl font-light text-slate-900 dark:text-white/95 leading-relaxed italic font-serif">
                    &ldquo;{aboutData.vision}&rdquo;
                  </p>
                </div>

                <div className="text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                  PT ARKAPRANA TEKNOLOGI NUSANTARA · {language === "en" ? "SOVEREIGN ARCHITECTURE" : "KEDAULATAN IT INDONESIA"}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Mission */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={100}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 shadow-xl backdrop-blur-2xl space-y-6 hover:border-sky-400/50 dark:hover:border-[#38BDF8]/30 transition-all h-full">
                <div className="flex items-center gap-2.5 text-sky-600 dark:text-[#38BDF8]">
                  <Target className="size-6" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-800 dark:text-white/80">
                    {language === "en" ? "CORPORATE MISSION" : "MISI PERUSAHAAN (MISSION)"}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {aboutData.missions.map((mission, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-white/70 gap-3.5 font-light">
                      <span className="size-5 rounded-md bg-sky-50 dark:bg-[#38BDF8]/10 text-sky-600 dark:text-[#38BDF8] border border-sky-200 dark:border-[#38BDF8]/20 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 05. WHAT WE BUILD (7 CAPABILITY PILLARS) */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] shadow-xs">
              <span className="size-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_pillars_badge", "CORE TECHNOLOGY PILLARS")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white font-display tracking-tight">
              {t("abt_pillars_title", "Fondasi Teknologi yang Kami Bangun")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 font-light max-w-xl mx-auto">
              {language === "en"
                ? "Unified engineering solution spectrum from physical infrastructure to autonomous AI workflows."
                : "Spektrum solusi rekayasa terpadu dari infrastruktur fisik hingga otomasi kecerdasan buatan."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.pillars.map((p, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length] || Server;
            return (
              <ScrollReveal key={p.name} delayMs={idx * 50}>
                <div className="relative rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-sky-400/50 dark:hover:border-[#38BDF8]/40 transition-all duration-500 p-7 flex flex-col justify-between group shadow-xl backdrop-blur-2xl hover:-translate-y-1 h-full">
                  <div>
                    <div className="size-12 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center text-sky-600 dark:text-[#38BDF8] mb-5 group-hover:scale-110 group-hover:border-[#38BDF8]/50 transition-all shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-light text-slate-900 dark:text-white mb-2 font-display">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/[0.06]">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-[#38BDF8] hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <span>{language === "en" ? "Explore Specs" : "Pelajari Spesifikasi"}</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 06. HOW WE WORK (8-PHASE METHODOLOGY) */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] shadow-xs">
              <span className="size-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_method_badge", "DISCIPLINED METHODOLOGY")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white font-display tracking-tight">
              {t("abt_method_title", "Metodologi Rekayasa 8 Tahap")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 font-light max-w-xl mx-auto">
              {language === "en"
                ? "A systematic engineering lifecycle from precision needs assessment to long-term architectural evolution."
                : "Siklus rekayasa sistematis dari asesmen kebutuhan presisi hingga evolusi jangka panjang."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutData.methodology.map((step, idx) => (
            <ScrollReveal key={step.step} delayMs={idx * 40}>
              <div className="p-6 rounded-2xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-sky-400/50 dark:hover:border-[#38BDF8]/40 transition-all duration-300 space-y-3 shadow-lg backdrop-blur-xl h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-sky-600 dark:text-[#38BDF8] font-semibold">
                      STEP {step.step}
                    </span>
                    <span className="size-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white font-display">
                    {step.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] text-[10px] font-mono text-slate-500 dark:text-white/40">
                  {language === "en" ? "Phase Verification Gate" : "Gerbang Verifikasi Tahap"}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 07. LEADERSHIP COUNCIL */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[10.5px] font-mono text-sky-600 dark:text-[#38BDF8] shadow-xs">
              <span className="size-1.5 rounded-full bg-sky-500 dark:bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_lead_badge", "GOVERNANCE & PRACTICE")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white font-display tracking-tight">
              {t("abt_lead_title", "Dewan Pimpinan & Rekayasa Sistem")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 font-light max-w-xl mx-auto">
              {language === "en"
                ? "Directed by systems engineers, network architects, and information security specialists committed to technical integrity."
                : "Dikelola oleh para insinyur sistem, arsitek jaringan, dan spesialis keamanan informasi yang berkomitmen pada integritas teknis."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.leadership.map((leader, idx) => {
            const Icon = LEADERSHIP_ICONS[idx % LEADERSHIP_ICONS.length] || Users;
            return (
              <ScrollReveal key={leader.name} delayMs={idx * 50}>
                <div className="p-7 rounded-3xl bg-white dark:bg-[#131B2E]/95 border border-slate-200 dark:border-slate-700/60 hover:border-sky-400/50 dark:hover:border-[#38BDF8]/40 transition-all duration-300 space-y-4 shadow-xl backdrop-blur-xl h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="size-12 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center text-sky-600 dark:text-[#38BDF8] shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white font-display leading-tight mb-1">
                        {leader.name}
                      </h4>
                      <div className="text-[11px] font-mono text-sky-600 dark:text-[#38BDF8] font-medium">
                        {leader.role}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-light">
                      {leader.focus}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] text-[10px] font-mono text-slate-500 dark:text-white/40">
                    {leader.credentials}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* 08. CLOSING CONTACT DESK */}
      <ScrollReveal delayMs={80}>
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-[#131B2E] p-8 sm:p-14 shadow-xl dark:shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 dark:text-[#38BDF8] font-semibold block">
                {language === "en" ? "Official Communication Desk" : "Meja Komunikasi Resmi"}
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight font-display">
                {language === "en" ? "Ready to Partner with ARKAPRANA?" : "Siap Bermitra Bersama ARKAPRANA?"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-white/60 font-light leading-relaxed">
                {language === "en"
                  ? "Discuss your digital infrastructure architecture and sovereign intelligent solutions directly with our principal engineering council."
                  : "Diskusikan kebutuhan arsitektur infrastruktur digital dan solusi cerdas Anda langsung bersama tim principal engineer kami."}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600 dark:text-white/50">
                <span className="flex items-center gap-2">
                  <Mail className="size-3.5 text-sky-600 dark:text-[#38BDF8]" />
                  <span>{COMPANY_PROFILE.contact.email}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="size-3.5 text-sky-600 dark:text-[#38BDF8]" />
                  <span>{COMPANY_PROFILE.contact.phone}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-sky-600 dark:text-[#38BDF8]" />
                  <span>Indonesia</span>
                </span>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <CompanyProfileModal
                  triggerClassName="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/95 transition-all shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
                  triggerText={t("btn_download_cp", "Download Company Profile")}
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium text-slate-700 hover:text-slate-950 dark:text-white/80 dark:hover:text-white bg-white/90 dark:bg-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/15 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <span>{t("btn_discuss_project", "Mulai Diskusi Proyek")}</span>
                  <ArrowRight className="size-3.5 text-sky-600 dark:text-white/70" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Passing Light Hairline Divider */}
      <div className="beam-divider" />

      {/* MONUMENTAL NALAR ORBITAL CTA SECTION */}
      <ScrollReveal delayMs={80}>
        <NalarOrbitalCtaSection />
      </ScrollReveal>
    </main>
  );
}
