"use client";

import React from "react";
import Link from "next/link";
import {
  COMPANY_PROFILE,
  PROJECT_JOURNEY_STEPS
} from "@/lib/data";
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
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const PILLARS = [
  { name: "NETWORK", desc: "Enterprise connectivity, fiber optic backbone, Wi-Fi 7 & SD-WAN mesh.", icon: Network },
  { name: "INFRASTRUCTURE", desc: "Tier-3+ modular data center, high-density compute & NVMe flash storage.", icon: Server },
  { name: "CLOUD", desc: "Sovereign on-premise private cloud & resilient Kubernetes clusters.", icon: Cloud },
  { name: "CYBERSECURITY", desc: "Defense-in-depth Zero-Trust architecture, HSM vaults & 24/7 SOC.", icon: ShieldCheck },
  { name: "MANAGED IT", desc: "24/7 dedicated enterprise NOC monitoring, SLA uptime & preventive care.", icon: Cpu },
  { name: "AI & AUTOMATION", desc: "Private on-premise LLMs, enterprise RAG & cognitive workflow agents.", icon: BrainCircuit },
  { name: "SYSTEM INTEGRATION", desc: "Turnkey hardware procurement, multi-vendor harmonisation & certified commissioning.", icon: Workflow }
];

const BELIEFS = [
  {
    titleId: "Engineering First",
    titleEn: "Engineering First",
    descId: "Kami percaya bahwa arsitektur teknologi harus dirancang dengan disiplin rekayasa mendalam, bukan sekadar memindahkan kotak perangkat keras atau penjualan lisensi komersial.",
    descEn: "We believe technology architecture must be crafted with rigorous engineering discipline, not mere hardware reselling or commercial license packaging."
  },
  {
    titleId: "Tanpa Kompromi pada Kedaulatan Data",
    titleEn: "Zero Compromise on Data Sovereignty",
    descId: "Data korporat dan kedaulatan informasi organisasi adalah aset paling berharga. Sistem kami dirancang mematuhi regulasi lokal (UU PDP) dengan isolasi penuh di wilayah Indonesia.",
    descEn: "Corporate data and informational sovereignty are inviolable assets. Our systems strictly comply with Indonesian regulatory mandates (UU PDP) via complete in-country isolation."
  },
  {
    titleId: "Ekosistem Terpadu Mengatasi Fragmentasi",
    titleEn: "Integrated Ecosystem Over Fragmentation",
    descId: "Teknologi menjadi rumit saat terpisah. Kami menghubungkan setiap simpul dari kabel serat optik bawah tanah hingga model bahasa kecerdasan buatan dalam satu orkestrasi.",
    descEn: "Technology breaks down when siloed. We interconnect every node—from subterranean fiber-optic conduits to private generative AI models—under unified orchestration."
  },
  {
    titleId: "Model Kemitraan Jangka Panjang",
    titleEn: "Long-Term Partnership Model",
    descId: "Kami tidak hanya membangun dan pergi. Kami mendampingi operasional, memantau telemetri 24/7, dan mengevolusikan infrastruktur seiring pertumbuhan organisasi Anda.",
    descEn: "We do not deploy and vanish. We co-pilot day-2 operations, monitor continuous 24/7 telemetry, and systematically evolve infrastructure alongside your scale."
  }
];

export default function AboutClientView() {
  const { language, t } = useLanguage();

  return (
    <main className="flex-1 bg-[#08090D] text-white min-h-screen">
      {/* 01. HERO WITH SUBTLE MIST, CONCENTRIC ORBITS & DYNAMIC SINE WAVES */}
      <NalarPageHeroAtmosphere
        badgeText={t("abt_page_badge", "05 · ABOUT ARKAPRANA · COMPANY & VISION")}
        headlinePrimary={t("abt_page_title_1", "Technology built for what comes next.")}
        headlineSecondary={t("abt_page_title_2", "Engineering sovereign intelligence for Indonesian enterprise.")}
        description={COMPANY_PROFILE.positioning}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <CompanyProfileModal
            triggerClassName="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            triggerText={t("btn_download_cp", "Download Company Profile")}
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <span>{t("btn_talk_engineer", "Bicara dengan Engineer")}</span>
            <ChevronRight className="size-3.5 text-[#38BDF8]" />
          </Link>
        </div>
      </NalarPageHeroAtmosphere>

      {/* 02. WHO WE ARE */}
      <ScrollReveal delayMs={60}>
        <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10.5px] font-mono text-[#38BDF8]">
                <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>{t("abt_who_badge", "IDENTITY & PURPOSE")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-display tracking-tight leading-[1.18]">
                {t("abt_who_title", "Satu Rekayasa Terpadu untuk Seluruh Lapisan IT.")}
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-mono">
                PT ARKAPRANA TEKNOLOGI NUSANTARA · INDONESIA
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-white/70 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong className="text-white font-medium">PT ARKAPRANA TEKNOLOGI NUSANTARA</strong> (ARKAPRANA) didirikan sebagai perusahaan teknologi dan system integrator rekayasa yang berfokus menghadirkan kapabilitas komputasi, jaringan data, dan kecerdasan buatan kelas enterprise di Indonesia.
              </p>
              <p>
                Kami memandang bahwa adopsi teknologi cerdas seperti Artificial Intelligence tidak dapat berdiri sendiri di ruang hampa. Kecerdasan sejati memerlukan fondasi komputasi fisik, jaringan data berlatensi rendah, serta arsitektur keamanan siber yang tidak dapat ditembus.
              </p>
              <p>
                Melalui kombinasi kemampuan rekayasa teknis tingkat prinsipal dan komitmen kedaulatan data lokal, kami menjadi technology partner bagi organisasi dalam merancang, membangun, mengoperasikan, dan mengevolusikan lingkungan teknologi mereka.
              </p>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F18]/90 border border-white/10 space-y-3 backdrop-blur-xl">
                <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-widest font-semibold block">
                  Strategic Technology Journey
                </span>
                <div className="text-xs sm:text-sm font-semibold text-white font-mono tracking-wider">
                  INFRASTRUCTURE → NETWORK → CLOUD → SECURITY → DATA → AI
                </div>
                <p className="text-xs text-white/50 font-light">
                  {language === "en"
                    ? "A holistic digital transformation pathway ensuring technology investments yield verifiable resilience and zero multi-vendor friction."
                    : "Alur transformasi digital holistik yang menjamin investasi teknologi berbuah stabilitas dan efisiensi nyata tanpa gesekan antar-vendor."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 03. WHAT WE BELIEVE */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10.5px] font-mono text-[#38BDF8]">
              <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_beliefs_badge", "ENGINEERING PHILOSOPHY")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-display tracking-tight">
              {t("abt_beliefs_title", "Prinsip Rekayasa Kami")}
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-light max-w-xl mx-auto">
              {t("abt_beliefs_desc", "Prinsip fundamental yang memandu setiap desain arsitektur, pemilihan vendor, dan komitmen operasional kami.")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BELIEFS.map((b, idx) => (
            <ScrollReveal key={b.titleId} delayMs={idx * 50}>
              <div
                className="relative rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 p-8 sm:p-9 space-y-4 shadow-xl backdrop-blur-2xl group hover:-translate-y-1 h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-mono text-[#38BDF8] uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/20 font-semibold">
                    {language === "en" ? `PRINCIPLE 0${idx + 1}` : `PRINSIP 0${idx + 1}`}
                  </span>
                  <span className="size-1.5 rounded-full bg-white/20 group-hover:bg-[#38BDF8] transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white font-display">
                  {language === "en" ? b.titleEn : b.titleId}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                  {language === "en" ? b.descEn : b.descId}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 04. VISION & MISSION */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Vision */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={50}>
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0F18]/90 border border-white/10 shadow-2xl backdrop-blur-2xl space-y-6 flex flex-col justify-between hover:border-[#38BDF8]/30 transition-all h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-[#38BDF8]">
                    <Compass className="size-6" />
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/80">
                      VISI PERUSAHAAN (VISION)
                    </h3>
                  </div>
                  <p className="text-lg sm:text-2xl font-light text-white/95 leading-relaxed italic font-serif">
                    &ldquo;{COMPANY_PROFILE.vision}&rdquo;
                  </p>
                </div>
                <div className="text-[10.5px] font-mono text-[#38BDF8] pt-4 border-t border-white/[0.06]">
                  PT ARKAPRANA TEKNOLOGI NUSANTARA · KEDAULATAN IT INDONESIA
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Mission */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={100}>
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0F18]/90 border border-white/10 shadow-2xl backdrop-blur-2xl space-y-6 hover:border-[#38BDF8]/30 transition-all h-full">
                <div className="flex items-center gap-2.5 text-[#38BDF8]">
                  <Target className="size-6" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-white/80">
                    MISI PERUSAHAAN (MISSION)
                  </h3>
                </div>
                <ul className="space-y-4">
                  {COMPANY_PROFILE.missions.map((mission, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-white/70 gap-3.5 font-light">
                      <span className="size-5 rounded-md bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 font-semibold">
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

      {/* 05. WHAT WE BUILD (7 CAPABILITY PILLARS) */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10.5px] font-mono text-[#38BDF8]">
              <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_pillars_badge", "CORE TECHNOLOGY PILLARS")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-display tracking-tight">
              {t("abt_pillars_title", "Fondasi Teknologi yang Kami Bangun")}
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-light max-w-xl mx-auto">
              {language === "en"
                ? "Unified engineering solution spectrum from physical infrastructure to autonomous AI workflows."
                : "Spektrum solusi rekayasa terpadu dari infrastruktur fisik hingga otomasi kecerdasan buatan."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.name} delayMs={idx * 50}>
                <div
                  className="relative rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-500 p-7 flex flex-col justify-between group shadow-xl backdrop-blur-2xl hover:-translate-y-1 h-full"
                >
                  <div>
                    <div className="size-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] mb-5 group-hover:scale-110 group-hover:border-[#38BDF8]/50 transition-all shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-light text-white mb-2 font-display">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/[0.06]">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-white transition-colors"
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

      {/* 06. HOW WE WORK (8-PHASE METHODOLOGY) */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10.5px] font-mono text-[#38BDF8]">
              <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_method_badge", "DISCIPLINED METHODOLOGY")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-display tracking-tight">
              {t("abt_method_title", "Metodologi Rekayasa 8 Tahap")}
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-light max-w-xl mx-auto">
              {language === "en"
                ? "A systematic engineering lifecycle from precision needs assessment to long-term architectural evolution."
                : "Siklus rekayasa sistematis dari asesmen kebutuhan presisi hingga evolusi jangka panjang."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECT_JOURNEY_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} delayMs={idx * 40}>
              <div
                className="p-6 rounded-2xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 space-y-3 shadow-lg backdrop-blur-xl h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#38BDF8] font-semibold">
                    STEP {step.step}
                  </span>
                  <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                </div>
                <h4 className="text-base font-semibold text-white font-display">
                  {step.name}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {step.tagline}
                </p>
                <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-white/40">
                  Deliverable: {step.deliverable}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 07. LEADERSHIP COUNCIL */}
      <section className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <ScrollReveal delayMs={40}>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10.5px] font-mono text-[#38BDF8]">
              <span className="size-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{t("abt_lead_badge", "GOVERNANCE & PRACTICE")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-display tracking-tight">
              {t("abt_lead_title", "Dewan Pimpinan & Rekayasa Sistem")}
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-light max-w-xl mx-auto">
              {language === "en"
                ? "Directed by systems engineers, network architects, and information security specialists committed to technical integrity."
                : "Dikelola oleh para insinyur sistem, arsitek jaringan, dan spesialis keamanan informasi yang berkomitmen pada integritas teknis."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <ScrollReveal delayMs={50}>
            <div className="p-8 rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 space-y-4 shadow-xl backdrop-blur-xl h-full">
              <div className="size-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] shadow-inner">
                <Users className="size-6" />
              </div>
              <h4 className="text-lg font-light text-white font-display">Principal Systems Architect</h4>
              <div className="text-xs font-mono text-[#38BDF8]">Office of the CTO</div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {language === "en"
                  ? "Leads backbone network topology design, private cloud fabric, and data sovereignty compliance audits."
                  : "Memimpin perancangan topologi jaringan backbone, arsitektur private cloud, dan audit kedaulatan data."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="p-8 rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 space-y-4 shadow-xl backdrop-blur-xl h-full">
              <div className="size-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] shadow-inner">
                <ShieldCheck className="size-6" />
              </div>
              <h4 className="text-lg font-light text-white font-display">Principal Security Officer</h4>
              <div className="text-xs font-mono text-[#38BDF8]">Zero-Trust Practice</div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {language === "en"
                  ? "Directs cybersecurity governance, ISO 27001 audit standards, HSM deployments, and perimeter defense."
                  : "Menangani tata kelola keamanan siber, kepatuhan audit ISO 27001, implementasi HSM, dan enkripsi perimeter."}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <div className="p-8 rounded-3xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 space-y-4 shadow-xl backdrop-blur-xl h-full">
              <div className="size-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] shadow-inner">
                <BrainCircuit className="size-6" />
              </div>
              <h4 className="text-lg font-light text-white font-display">Head of Cognitive Engineering</h4>
              <div className="text-xs font-mono text-[#38BDF8]">ARKAPRANA AI Lab</div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {language === "en"
                  ? "Directs research and delivery of on-premise sovereign LLMs, enterprise RAG, and cognitive workflow agents."
                  : "Memimpin riset dan implementasi Private On-Premise LLM, sistem RAG, serta otomasi alur kerja korporat."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 08. CLOSING CONTACT DESK */}
      <ScrollReveal delayMs={80}>
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="rounded-3xl border border-white/10 bg-[#0C0E15] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] block">
                Official Communication Desk
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight font-display">
                {language === "en" ? "Ready to Partner with ARKAPRANA?" : "Siap Bermitra Bersama ARKAPRANA?"}
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {language === "en"
                  ? "Discuss your digital infrastructure architecture and sovereign intelligent solutions directly with our principal engineering council."
                  : "Diskusikan kebutuhan arsitektur infrastruktur digital dan solusi cerdas Anda langsung bersama tim principal engineer kami."}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/50">
                <span className="flex items-center gap-2">
                  <Mail className="size-3.5 text-[#38BDF8]" />
                  <span>{COMPANY_PROFILE.contact.email}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="size-3.5 text-[#38BDF8]" />
                  <span>{COMPANY_PROFILE.contact.phone}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-[#38BDF8]" />
                  <span>Indonesia</span>
                </span>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <CompanyProfileModal
                  triggerClassName="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
                  triggerText={t("btn_download_cp", "Download Company Profile")}
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <span>{t("btn_discuss_project", "Mulai Diskusi Proyek")}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
