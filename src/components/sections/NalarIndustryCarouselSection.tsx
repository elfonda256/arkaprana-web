"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface IndustryCard {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
}

const INDUSTRY_CARDS_MAP: Record<"id" | "en", IndustryCard[]> = {
  id: [
    {
      id: "fmcg",
      tag: "FMCG & DISTRIBUSI",
      title: "Kehabisan stok terdeteksi sebelum rak display kosong.",
      caption: "Ketersediaan stok di seluruh gudang diperiksa setiap pagi — rute restock dan mitigasi jalur telah disiapkan otomatis.",
      image: "/images/usecase-retail.jpg",
    },
    {
      id: "manufacturing",
      tag: "MANUFAKTUR & PABRIK CERDAS",
      title: "Nol downtime tak terencana di lini robotik perakitan.",
      caption: "Telemetri sensor PLC/SCADA sub-milidetik mendeteksi anomali vibrasi spindle motor sebelum lini perakitan berhenti.",
      image: "/images/industry-manufacturing.jpg",
    },
    {
      id: "retail",
      tag: "RITEL MULTI-CABANG",
      title: "Rekonsiliasi transaksi seluruh toko selesai sebelum Senin.",
      caption: "Sinkronisasi otomatis di 140 terminal kasir cabang melalui jaringan SD-WAN berlatensi rendah tanpa packet loss.",
      image: "/images/industry-retail.jpg",
    },
    {
      id: "energy",
      tag: "ENERGI & PERTAMBANGAN",
      title: "Penyeimbangan grid 500kV & dispatch armada otonom.",
      caption: "Integrasi sensor telemetri gardu induk & dispatch armada tambang terisolasi secara real-time melalui private mesh link.",
      image: "/images/industry-energy.jpg",
    },
    {
      id: "banking",
      tag: "PERBANKAN & KEUANGAN",
      title: "Verifikasi risiko kredit terkonsolidasi dalam satu jawaban.",
      caption: "Model risiko terisolasi (air-gapped) dan brankas kunci HSM divalidasi sub-detik di atas sistem core banking yang aman.",
      image: "/images/usecase-datacenter.jpg",
    },
    {
      id: "telecom",
      tag: "TELEKOMUNIKASI & ISP",
      title: "Mesh serat optik netral-operator teralihkan dalam < 18ms.",
      caption: "Throughput transmisi DWDM dimonitor 24/7 dengan failover otonom sebelum link korporat mengalami degradasi.",
      image: "/images/usecase-network.jpg",
    },
    {
      id: "healthcare",
      tag: "KESEHATAN & FARMASI",
      title: "Telemetri medis & arsip rekam medis terlindungi tanpa bocor.",
      caption: "Transmisi arsip PACS resolusi tinggi dan enkripsi rekam medis pasien sesuai standar kepatuhan regulasi UU PDP & HIPAA.",
      image: "/images/industry-healthcare.jpg",
    },
    {
      id: "datacenter",
      tag: "PUSAT DATA & CLOUD",
      title: "Komputasi modular Tier-III beroperasi pada PUE < 1.35.",
      caption: "Pendinginan in-row presisi tinggi, dual-bus 2N UPS, dan orkestrasi private cloud on-premise dengan kedaulatan data penuh.",
      image: "/images/datacenter.jpg",
    },
  ],
  en: [
    {
      id: "fmcg",
      tag: "FMCG & DISTRIBUTION",
      title: "Stockouts flagged days before the shelf goes empty.",
      caption: "Stock cover across every warehouse, checked every morning — with the restock and failover route already drafted.",
      image: "/images/usecase-retail.jpg",
    },
    {
      id: "manufacturing",
      tag: "MANUFACTURING & SMART FACTORIES",
      title: "Zero unplanned factory downtime across robotic lines.",
      caption: "Sub-millisecond PLC/SCADA sensor telemetry detects motor spindle vibration anomalies before assembly halts.",
      image: "/images/industry-manufacturing.jpg",
    },
    {
      id: "retail",
      tag: "MULTI-SITE RETAIL",
      title: "Every channel's revenue reconciled before Monday.",
      caption: "Automated transaction sync across 140 branch terminals with low-latency SD-WAN and zero data loss.",
      image: "/images/industry-retail.jpg",
    },
    {
      id: "energy",
      tag: "ENERGY & MINING",
      title: "Autonomous 500kV grid balancing & heavy fleet routing.",
      caption: "Real-time substation telemetry integration & autonomous dispatch for isolated mining fleets over private mesh links.",
      image: "/images/industry-energy.jpg",
    },
    {
      id: "banking",
      tag: "BANKING & FINANCE",
      title: "Credit reviews assembled from every system in one answer.",
      caption: "Airgapped risk models and HSM key enclaves validated in sub-seconds across isolated core banking systems.",
      image: "/images/usecase-datacenter.jpg",
    },
    {
      id: "telecom",
      tag: "TELECOMMUNICATIONS",
      title: "Carrier-neutral fiber mesh rerouted within sub-18 milliseconds.",
      caption: "DWDM optical throughput monitored 24/7 with autonomous failover before enterprise links experience degradation.",
      image: "/images/usecase-network.jpg",
    },
    {
      id: "healthcare",
      tag: "HEALTHCARE & PHARMA",
      title: "Medical telemetry & EHR enclaves protected with zero leakage.",
      caption: "High-resolution PACS transmissions and patient record cryptography adhering strictly to Indonesian PDP Law & HIPAA.",
      image: "/images/industry-healthcare.jpg",
    },
    {
      id: "datacenter",
      tag: "DATA CENTER & CLOUD",
      title: "Modular Tier-III compute operational at PUE < 1.35.",
      caption: "High-precision in-row cooling, dual-bus 2N UPS, and on-premise private cloud orchestration with total data sovereignty.",
      image: "/images/datacenter.jpg",
    },
  ]
};

export default function NalarIndustryCarouselSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { t, language } = useLanguage();
  const industryCards = INDUSTRY_CARDS_MAP[language] || INDUSTRY_CARDS_MAP.id;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] text-[11px] font-mono text-slate-800 dark:text-white/80 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] dark:bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase font-medium">
              {t("industries_badge", "06 · PROVEN FIELD ADOPTION · INDUSTRIES")}
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-[1.18] font-display">
              {t("industries_title_1", "How Arkaprana moves work")}
            </h2>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-600 dark:text-white/60 tracking-tight leading-[1.18] font-display">
              {t("industries_title_2", "across every industry.")}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50 font-mono pt-1">
            {t("industries_desc", "8 Sektor Industri Korporasi · Solusi Teruji Tanpa Duplikasi Sistem")}
          </p>

          {/* Centered Circular Arrow Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={scrollLeft}
              className="size-11 rounded-full bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/15 transition-all cursor-pointer active:scale-95 shadow-md"
              aria-label="Scroll left"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="size-11 rounded-full bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/15 transition-all cursor-pointer active:scale-95 shadow-md"
              aria-label="Scroll right"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel of Tall Photographic Cards (Exact Replica of Image 5) */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory touch-pan-y"
        >
          {industryCards.map((card) => (
            <div
              key={card.id}
              className="relative shrink-0 w-[290px] sm:w-[340px] h-[490px] rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-900 shadow-xl dark:shadow-2xl snap-start group flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:border-sky-500/50 dark:hover:border-white/30"
            >
              {/* Full Background Photograph - 100% Unique Image Per Industry */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 290px, 340px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95] contrast-[1.05]"
                />
                {/* Dark Gradient Overlay for Supreme Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-black/50" />
              </div>

              {/* Card Content - Top Title */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug font-display">
                  {card.title}
                </h3>
              </div>

              {/* Card Content - Bottom Caption & Tag */}
              <div className="relative z-10 space-y-3 pt-6 border-t border-white/15">
                <p className="text-xs text-white/75 leading-relaxed font-light line-clamp-3">
                  {card.caption}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block font-mono text-[9.5px] tracking-widest text-[#38BDF8] uppercase font-semibold">
                    {card.tag}
                  </span>
                  <span className="size-1.5 rounded-full bg-[#38BDF8] opacity-75 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
