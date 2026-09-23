"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  X,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Send
} from "lucide-react";
import { CORPORATE_DOCUMENTS } from "@/lib/data";

interface Props {
  triggerClassName?: string;
  triggerText?: string;
}

export default function CompanyProfileModal({
  triggerClassName = "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-neutral-900 bg-white hover:bg-neutral-200 transition-all shadow-md active:scale-[0.98]",
  triggerText = "DOWNLOAD COMPANY PROFILE →"
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [requestEmail, setRequestEmail] = useState("");
  const [requestSent, setRequestSent] = useState(false);

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
        <span>{triggerText}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#090E1A] text-white border border-white/[0.12] p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                    Corporate Document Center
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
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
                className="text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto py-6 space-y-6 flex-1 pr-1">
              
              {/* Primary Profile Spotlight */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-blue-950/20 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Official Edition 2026</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    ARKAPRANA Company Profile
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Overview sistem integrasi, arsitektur infrastruktur, dan kapabilitas private AI.
                  </p>
                </div>

                <a
                  href="/documents/arkaprana-company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold tracking-wide shrink-0 transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Structure of Corporate Document System (Section 29 verbatim) */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Corporate Document System (Future Releases)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CORPORATE_DOCUMENTS.slice(1).map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-white">
                          {doc.title}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-mono">
                          {doc.filename}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono bg-white/[0.05] text-neutral-400 border border-white/[0.08]">
                        <Clock className="w-2.5 h-2.5" />
                        <span>Coming Soon</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Document By Email Box */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                <span className="text-xs font-semibold text-white block">
                  Butuh dokumen spesifik untuk tender atau pengadaan korporat?
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Masukkan email institusi Anda. Tim representatif kami akan mengirimkan paket dokumen kapabilitas teknis resmi dalam waktu 1x24 jam.
                </p>

                {requestSent ? (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Permintaan diterima. Dokumen akan dikirim ke {requestEmail}.</span>
                  </div>
                ) : (
                  <form onSubmit={handleRequestSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="nama@perusahaan.co.id"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-all shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/[0.08] text-center text-[11px] text-neutral-400 font-mono">
              PT ARKAPRANA TEKNOLOGI NUSANTARA • Non-Disclosure Agreement (NDA) Available Upon Request
            </div>

          </div>
        </div>
      )}
    </>
  );
}
