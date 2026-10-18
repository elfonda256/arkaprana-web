"use client";

import React from "react";
import {
  FileSpreadsheet,
  MessageCircle,
  Database,
  Building2,
  TrendingDown,
  ShoppingBag,
  Package,
  Layers,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NalarFloatingAppsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 md:py-44 bg-[#F5F3EC] text-[#141518] overflow-hidden border-t border-b border-[#E3DFD5]">
      
      {/* 1. Atmospheric Drifting Smoky Background */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-[10%] left-[20%] w-[800px] h-[600px] rounded-full bg-gradient-to-br from-[#EAE6DB]/70 via-[#DDD8CC]/40 to-transparent blur-3xl animate-smoke" />
        <div className="absolute top-[40%] right-[10%] w-[700px] h-[550px] rounded-full bg-gradient-to-tr from-[#E6E1D4]/60 via-[#D8D2C2]/35 to-transparent blur-3xl animate-smoke" style={{ animationDelay: "-8s" }} />
        
        {/* Subtle Paper Grain / Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-auto sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-center items-center">
        
        {/* ========================================================
            CENTRAL NALAR-STYLE MONUMENTAL EDITORIAL HEADLINE
            ======================================================== */}
        <div className="relative z-20 max-w-3xl mx-auto text-center px-2 sm:px-4 select-none">
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-normal tracking-tight leading-[1.28] font-serif text-[#1C1E24]">
            {t("floating_title_1", "Your company runs on dozens of apps that don't talk to each other.")}{" "}
            <span className="text-[#989489] font-light">
              {t("floating_title_2", "Arkaprana unifies them into one living brain. Secure, Governed, Private.")}
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm font-mono tracking-wider uppercase text-[#888478]">
            {t("floating_subtitle", "Satu Sistem Kendali Cerdas Berdaulat · Terintegrasi Real-Time")}
          </p>

          {/* ========================================================
              MOBILE REFINED CONNECTED APP CARDS (sm:hidden)
              Non-overlapping, touch-friendly 2-column cards on phones
              ======================================================== */}
          <div className="sm:hidden mt-8 w-full max-w-md mx-auto text-left">
            <div className="flex items-center justify-between px-1 mb-3 text-[10px] font-mono text-[#787469] uppercase tracking-wider">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {language === "en" ? "Connected Ecosystem" : "Ekosistem Terkoneksi"}
              </span>
              <span>{language === "en" ? "Live Telemetry Feeds" : "Aliran Data Aktif"}</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Mobile Card 1: Odoo ERP */}
              <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#8E44AD]" />
                    <span className="text-[11px] font-bold text-[#8E44AD]">odoo</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#71717A] bg-[#F4F4F5] px-1.5 py-0.2 rounded-full font-medium">
                    {language === "en" ? "4 days" : "4 hari"}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#18181B] font-mono truncate">SKU-A14 WH-BKS01</div>
                <div className="text-[9.5px] text-[#71717A] mt-0.5 truncate">
                  {language === "en" ? "Stock cover · inventory" : "Ketersediaan stok"}
                </div>
              </div>

              {/* Mobile Card 2: SAP S/4HANA */}
              <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-black text-[#008FD3]">SAP</span>
                  <span className="text-[9px] font-mono font-medium text-[#52525B] bg-[#F4F4F5] px-1.5 py-0.2 rounded-full">
                    23 POs
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#18181B] font-mono truncate">PO-88121 GRN</div>
                <div className="text-[9.5px] text-[#71717A] mt-0.5 truncate">
                  {language === "en" ? "Unmatched POs" : "PO Belum Cocok"}
                </div>
              </div>

              {/* Mobile Card 3: Shopee */}
              <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <ShoppingBag className="size-3 text-[#EE4D2D]" />
                    <span className="text-[11px] font-bold text-[#EE4D2D]">Shopee</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full">
                    3.1%
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#18181B] font-mono truncate">SHP-STORE-02</div>
                <div className="text-[9.5px] text-[#71717A] mt-0.5 truncate">
                  {language === "en" ? "Return rate" : "Tingkat retur"}
                </div>
              </div>

              {/* Mobile Card 4: Tokopedia */}
              <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#03AC0E]" />
                    <span className="text-[11px] font-bold text-[#03AC0E]">tokopedia</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded-full">
                    -7%
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#18181B] font-mono truncate">CHNL TPD-01</div>
                <div className="text-[9.5px] text-[#71717A] mt-0.5 truncate">
                  {language === "en" ? "Revenue MoM" : "Pendapatan MoM"}
                </div>
              </div>

              {/* Mobile Card 5: Accurate ERP */}
              <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#E53935]" />
                    <span className="text-[11px] font-bold text-[#E53935]">accurate</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded-full">
                    -Rp 67jt
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#18181B] truncate">PT MITRA JAYA</div>
                <div className="text-[9.5px] text-[#71717A] mt-0.5 truncate">
                  {language === "en" ? "47 days overdue" : "Terlambat 47 hari"}
                </div>
              </div>

              {/* Mobile Card 6: WhatsApp CS */}
              <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-[#E2DED4]">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="size-3 text-[#25D366]" />
                    <span className="text-[11px] font-bold text-[#25D366]">WhatsApp</span>
                  </div>
                  <span className="text-[9px] font-mono font-semibold text-[#71717A] bg-[#F4F4F5] px-1.5 py-0.2 rounded-full">
                    38 chats
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-[#18181B] font-mono truncate">CS INBOX</div>
                <div className="text-[9.5px] text-[#71717A] mt-0.5 truncate">
                  {language === "en" ? "Unanswered" : "Belum Dijawab"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            9 FLOATING ENTERPRISE SATELLITE CARDS (DESKTOP & TABLET: hidden sm:block)
            Continuous Floating Movement With Physics Offsets
            ======================================================== */}

        {/* Card 1: Odoo ERP (Top Left, White Card) */}
        <div className="hidden sm:block absolute top-4 sm:top-10 left-2 sm:left-12 lg:left-20 z-10 animate-float-a">
          <div className="w-[180px] sm:w-[210px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E2DED4] transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#8E44AD]" />
                <span className="text-[11px] font-bold tracking-tight text-[#8E44AD] font-sans">odoo</span>
              </div>
              <span className="text-[10px] font-mono text-[#71717A] bg-[#F4F4F5] px-2 py-0.5 rounded-full font-medium">
                {language === "en" ? "4 days" : "4 hari"}
              </span>
            </div>
            <div className="text-xs font-semibold text-[#18181B] font-mono">SKU-A14 WH-BKS01</div>
            <div className="text-[10px] text-[#71717A] mt-0.5">
              {language === "en" ? "Stock cover · inventory" : "Ketersediaan stok · inventaris"}
            </div>
          </div>
        </div>

        {/* Card 2: Meta Ads (Top Center, Wireframe Paper Card) */}
        <div className="hidden sm:block absolute top-6 sm:top-12 left-[44%] lg:left-[42%] z-10 animate-float-b">
          <div className="w-[170px] sm:w-[190px] bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-dashed border-[#B8B4AA] shadow-sm">
            <div className="text-[9.5px] font-mono text-[#52525B] flex items-center gap-1 uppercase tracking-wider font-semibold">
              <span className="text-[8px]">▶</span> META ADS
            </div>
            <div className="text-[11px] font-mono font-medium text-[#27272A] mt-1">CAMP: MTA-2210</div>
            <div className="text-[10px] font-mono text-amber-700 font-semibold mt-0.5">
              {language === "en" ? "CPL RISING" : "CPL MENINGKAT"}
            </div>
          </div>
        </div>

        {/* Card 3: Shopee E-Commerce (Top Right, White Card) */}
        <div className="hidden sm:block absolute top-6 sm:top-12 right-2 sm:right-10 lg:right-24 z-10 animate-float-c">
          <div className="w-[170px] sm:w-[195px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E2DED4] transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="size-3.5 text-[#EE4D2D]" />
                <span className="text-[11px] font-bold text-[#EE4D2D]">Shopee</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">3.1%</span>
            </div>
            <div className="text-xs font-semibold text-[#18181B] font-mono">SHP-STORE-02</div>
            <div className="text-[10px] text-[#71717A] mt-0.5">
              {language === "en" ? "Return rate" : "Tingkat retur"}
            </div>
          </div>
        </div>

        {/* Card 4: Google Sheets (Mid Left, Wireframe Paper Card) */}
        <div className="hidden sm:block absolute top-[44%] left-3 sm:left-10 lg:left-16 z-10 animate-float-d">
          <div className="w-[180px] sm:w-[200px] bg-white/70 backdrop-blur-sm rounded-xl p-3.5 border border-dashed border-[#B8B4AA] shadow-sm">
            <div className="text-[9.5px] font-mono text-[#52525B] flex items-center gap-1 uppercase tracking-wider font-semibold">
              <span className="text-[8px]">▶</span> GOOGLE SHEETS
            </div>
            <div className="text-[11px] font-mono font-medium text-[#27272A] mt-1">SHT: Q3-TGT</div>
            <div className="text-[9.5px] font-mono text-[#71717A] mt-0.5">
              {language === "en" ? "LAST EDIT · 21D AGO" : "EDIT TERAKHIR · 21 HARI LALU"}
            </div>
          </div>
        </div>

        {/* Card 5: Tokopedia (Mid Right, White Card) */}
        <div className="hidden sm:block absolute top-[40%] right-3 sm:right-12 lg:right-16 z-10 animate-float-a">
          <div className="w-[175px] sm:w-[200px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E2DED4] transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#03AC0E]" />
                <span className="text-[11px] font-bold text-[#03AC0E]">tokopedia</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">-7%</span>
            </div>
            <div className="text-xs font-semibold text-[#18181B] font-mono">CHNL TPD-01</div>
            <div className="text-[10px] text-[#71717A] mt-0.5">
              {language === "en" ? "Revenue MoM" : "Pendapatan MoM"}
            </div>
          </div>
        </div>

        {/* Card 6: Accurate ERP (Bottom Left, White Card) */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-12 left-2 sm:left-14 lg:left-20 z-10 animate-float-b">
          <div className="w-[185px] sm:w-[220px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E2DED4] transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#E53935]" />
                <span className="text-[11px] font-bold text-[#E53935]">accurate</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">-Rp 67 jt</span>
            </div>
            <div className="text-xs font-semibold text-[#18181B]">PT MITRA JAYA</div>
            <div className="text-[10px] text-[#71717A] mt-0.5">
              {language === "en" ? "47 days overdue" : "Terlambat 47 hari"}
            </div>
          </div>
        </div>

        {/* Card 7: SAP S/4HANA (Bottom Center, White Card) */}
        <div className="hidden sm:block absolute bottom-6 sm:bottom-10 left-[36%] sm:left-[40%] lg:left-[38%] z-10 animate-float-c">
          <div className="w-[170px] sm:w-[195px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E2DED4] transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black text-[#008FD3] tracking-wider font-sans">SAP</span>
              <span className="text-[10px] font-mono font-medium text-[#52525B] bg-[#F4F4F5] px-2 py-0.5 rounded-full">23 POs</span>
            </div>
            <div className="text-xs font-semibold text-[#18181B] font-mono">PO-88121 GRN</div>
            <div className="text-[10px] text-[#71717A] mt-0.5">
              {language === "en" ? "Unmatched POs" : "PO Belum Cocok"}
            </div>
          </div>
        </div>

        {/* Card 8: Mekari Talenta (Bottom Mid-Right, Wireframe Paper Card) */}
        <div className="hidden sm:block absolute bottom-8 sm:bottom-14 right-[28%] lg:right-[26%] z-10 animate-float-d">
          <div className="w-[180px] sm:w-[200px] bg-white/70 backdrop-blur-sm rounded-xl p-3.5 border border-dashed border-[#B8B4AA] shadow-sm">
            <div className="text-[9.5px] font-mono text-[#52525B] flex items-center gap-1 uppercase tracking-wider font-semibold">
              <span className="text-[8px]">▶</span> MEKARI TALENTA
            </div>
            <div className="text-[11px] font-mono font-medium text-[#27272A] mt-1">PRL: AUG-26</div>
            <div className="text-[9.5px] font-mono text-[#71717A] mt-0.5">
              {language === "en" ? "PAYROLL RUN" : "EKSEKUSI GAJI"}
            </div>
          </div>
        </div>

        {/* Card 9: WhatsApp CS / NOC (Bottom Right, White Card) */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-12 right-2 sm:right-10 lg:right-16 z-10 animate-float-a">
          <div className="w-[175px] sm:w-[205px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E2DED4] transition-transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <MessageCircle className="size-3.5 text-[#25D366]" />
                <span className="text-[11px] font-bold text-[#25D366]">WhatsApp</span>
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#71717A] bg-[#F4F4F5] px-2 py-0.5 rounded-full">38 chats</span>
            </div>
            <div className="text-xs font-semibold text-[#18181B] font-mono">CS INBOX</div>
            <div className="text-[10px] text-[#71717A] mt-0.5">
              {language === "en" ? "Unanswered" : "Belum Dijawab"}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
