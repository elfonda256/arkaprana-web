"use client";

import React from "react";
import { Printer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrintWhitepaperButton() {
  const { language } = useLanguage();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      onClick={handlePrint}
      type="button"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all cursor-pointer shadow-xs active:scale-[0.98] print:hidden"
      title={
        language === "en"
          ? "Print or Save as PDF for Executive Board / IT Committee Review"
          : "Cetak atau Simpan sebagai PDF untuk Rapat Direksi / Komite IT"
      }
    >
      <Printer className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
      <span>
        {language === "en"
          ? "Print Official Document / Export PDF"
          : "Cetak Dokumen Resmi / Ekspor PDF"}
      </span>
    </button>
  );
}
