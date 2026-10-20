"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  X,
  CheckCircle2,
  Clock,
  Send
} from "lucide-react";
import { CORPORATE_DOCUMENTS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  triggerClassName?: string;
  triggerText?: string;
}

export default function CompanyProfileModal({
  triggerClassName = "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/95 transition-all shadow-md active:scale-[0.98] cursor-pointer",
  triggerText
}: Props) {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [requestEmail, setRequestEmail] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  const defaultTrigger = t("btn_download_cp", "Download Company Profile");
  const buttonLabel = triggerText || defaultTrigger;

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestEmail) return;
    setRequestSent(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={triggerClassName}
      >
        <span>{buttonLabel}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-[calc(100vw-1.5rem)] sm:max-w-2xl rounded-3xl bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] p-5 sm:p-10 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-[var(--text-primary)] font-display">
                    {language === "en" ? "Corporate Document Center" : "Pusat Dokumen Korporat"}
                  </h3>
                  <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-wider block">
                    PT ARKAPRANA TEKNOLOGI NUSANTARA
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setRequestSent(false);
                }}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                aria-label={language === "en" ? "Close dialog" : "Tutup dialog"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto py-5 sm:py-6 space-y-5 sm:space-y-6 flex-1 pr-1">
              
              {/* Primary Profile Spotlight */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-strong)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase text-[var(--accent-blue)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
                    <span>{language === "en" ? "Official Edition 2026" : "Edisi Resmi 2026"}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-display">
                    ARKAPRANA Company Profile
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {language === "en"
                      ? "Engineering systems overview, infrastructure architecture, and sovereign AI capabilities."
                      : "Overview sistem integrasi, arsitektur infrastruktur, dan kapabilitas private AI."}
                  </p>
                </div>

                <a
                  href="/documents/arkaprana-company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent-blue)] hover:opacity-90 text-white text-xs font-semibold tracking-wide shrink-0 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>{language === "en" ? "Download PDF" : "Unduh PDF"}</span>
                </a>
              </div>

              {/* Structure of Corporate Document System */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                  {language === "en"
                    ? "Corporate Document System (Future Releases)"
                    : "Sistem Dokumen Korporasi (Rilis Bertahap)"}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CORPORATE_DOCUMENTS.slice(1).map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <div className="text-xs font-semibold text-[var(--text-primary)] truncate">
                          {doc.title}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)] font-mono truncate">
                          {doc.filename}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)] shrink-0">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{language === "en" ? "Coming Soon" : "Segera Hadir"}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Document By Email Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-semibold text-[var(--text-primary)] block">
                  {language === "en"
                    ? "Need specific technical documents for corporate procurement or tenders?"
                    : "Butuh dokumen spesifik untuk tender atau pengadaan korporat?"}
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {language === "en"
                    ? "Enter your institutional email. Our representative will deliver the verified technical documentation package within 24 business hours."
                    : "Masukkan email institusi Anda. Tim representatif kami akan mengirimkan paket dokumen kapabilitas teknis resmi dalam waktu 1x24 jam kerja."}
                </p>

                {requestSent ? (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      {language === "en"
                        ? `Request received. Documents will be dispatched to ${requestEmail}.`
                        : `Permintaan diterima. Dokumen akan dikirim ke ${requestEmail}.`}
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleRequestSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder={language === "en" ? "name@company.com" : "nama@perusahaan.co.id"}
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[var(--accent-blue)] text-white hover:opacity-90 text-xs font-semibold transition-all shrink-0 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === "en" ? "Request" : "Kirim Permintaan"}</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="pt-3.5 border-t border-[var(--border-subtle)] text-center text-[10.5px] text-[var(--text-muted)] font-mono">
              PT ARKAPRANA TEKNOLOGI NUSANTARA • {language === "en" ? "Non-Disclosure Agreement (NDA) Available Upon Request" : "Perjanjian Kerahasiaan (NDA) Tersedia Berdasarkan Permintaan"}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
