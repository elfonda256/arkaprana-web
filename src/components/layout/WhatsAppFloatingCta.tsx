"use client";

import React, { useState } from "react";
import { MessageSquare, X, ArrowUpRight, Shield, Sparkles, Building, Layers } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

interface WaOptionItem {
  id: string;
  label: string;
  desc: string;
  text: string;
  icon: React.ElementType;
}

const WA_OPTIONS_MAP: Record<Language, WaOptionItem[]> = {
  id: [
    {
      id: "project",
      label: "Diskusikan Proyek",
      desc: "Inisiasi proyek baru, upgrade infrastruktur atau data center",
      text: "Halo ARKAPRANA, saya ingin mendiskusikan kebutuhan proyek teknologi untuk organisasi kami.",
      icon: Building
    },
    {
      id: "solution",
      label: "Tanyakan Solusi",
      desc: "Pertanyaan teknis seputar Network, Cloud, Security, atau Managed IT",
      text: "Halo ARKAPRANA, saya ingin menanyakan rincian solusi dan spesifikasi teknis enterprise Anda.",
      icon: Layers
    },
    {
      id: "ai",
      label: "Eksplorasi AI Privat",
      desc: "Kajian adopsi Private On-Premise LLM, RAG & Otomasi Cerdas",
      text: "Halo ARKAPRANA, saya tertarik mengeksplorasi implementasi Private AI dan Otomasi Dokumen untuk perusahaan kami.",
      icon: Sparkles
    },
    {
      id: "partnership",
      label: "Kemitraan Teknologi",
      desc: "Diskusi kolaborasi strategis, kemitraan vendor & integrasi",
      text: "Halo ARKAPRANA, kami ingin mendiskusikan peluang kolaborasi dan kemitraan teknologi strategis.",
      icon: Shield
    }
  ],
  en: [
    {
      id: "project",
      label: "Discuss a Project",
      desc: "Initiate new infrastructure, data center, or network project",
      text: "Hello ARKAPRANA, I would like to discuss a technology project requirement for our organization.",
      icon: Building
    },
    {
      id: "solution",
      label: "Ask About a Solution",
      desc: "Technical specifications on Network, Cloud, Security, or Managed IT",
      text: "Hello ARKAPRANA, I would like to inquire about your enterprise solution specifications.",
      icon: Layers
    },
    {
      id: "ai",
      label: "Explore Sovereign AI",
      desc: "Feasibility study on Private On-Premise LLM, Enterprise RAG & Agents",
      text: "Hello ARKAPRANA, I am interested in exploring Private AI and Document Automation for our enterprise.",
      icon: Sparkles
    },
    {
      id: "partnership",
      label: "Technology Partnership",
      desc: "Strategic integration, vendor synergy, and long-term collaboration",
      text: "Hello ARKAPRANA, we would like to discuss strategic technology partnership opportunities.",
      icon: Shield
    }
  ]
};

export default function WhatsAppFloatingCta() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const waNumber = "62816997963"; // 0816-997-963

  const options = WA_OPTIONS_MAP[language] || WA_OPTIONS_MAP.id;

  const handleSelectOption = (text: string) => {
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={language === "en" ? "Talk to ARKAPRANA on WhatsApp" : "Hubungi ARKAPRANA via WhatsApp"}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-500/25 transition-all duration-200 active:scale-95 border border-emerald-400/30"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full" />
          </div>
          <span className="text-xs font-semibold tracking-wide">
            {language === "en" ? "Talk to ARKAPRANA" : "Bicara dengan ARKAPRANA"}
          </span>
        </button>
      </div>

      {/* Floating Modal Card */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-3xl bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-2xl p-6 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-500">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] font-display">
                  {language === "en" ? "Talk to ARKAPRANA" : "Bicara dengan ARKAPRANA"}
                </h4>
                <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                  {language === "en" ? "Direct WhatsApp Engineering Desk" : "Meja Konsultasi WhatsApp Langsung"}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
            {language === "en"
              ? "Select an engineering consultation topic below to connect directly with ARKAPRANA engineers:"
              : "Pilih topik konsultasi di bawah untuk langsung terhubung dengan tim teknis ARKAPRANA:"}
          </p>

          {/* 4 Choices */}
          <div className="space-y-2 mb-4">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.text)}
                  className="w-full text-left p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--accent-glow)] border border-[var(--border-subtle)] hover:border-emerald-500/40 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors font-display">
                        {opt.label}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)] line-clamp-1">
                        {opt.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)] text-center">
            {language === "en"
              ? "Hotline: +62 816-997-963 • Rapid business hour response"
              : "Hotline: +62 816-997-963 • Respon cepat di jam kerja"}
          </div>

        </div>
      )}
    </>
  );
}
