"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "what-is",
    question: "What is Arkaprana and what does it do for my business?",
    answer: "ARKAPRANA adalah perusahaan teknologi Indonesia yang membantu organisasi membangun dan mengintegrasikan infrastruktur digital — mulai dari kabel serat optik fisik & ruang data center modular, hingga cloud privat berdaulat dan platform agen AI mandiri yang terhubung langsung ke sistem operasional harian Anda.",
  },
  {
    id: "tech-knowledge",
    question: "Do I need technical knowledge to use Arkaprana?",
    answer: "Tidak untuk level operasional dan manajemen. Arkaprana menghadirkan antarmuka percakapan natural berbahasa Indonesia di mana eksekutif dan staf dapat langsung menanyakan status jaringan, metrik penjualan, dan audit log tanpa perlu menulis kode SQL atau konfigurasi router CLI manual.",
  },
  {
    id: "connect-tools",
    question: "How does Arkaprana connect to my existing business tools?",
    answer: "Arkaprana terintegrasi secara turnkey dengan perangkat keras multi-vendor (Cisco, Juniper, Fortinet), hypervisor virtualisasi (VMware, OpenStack, Nutanix), database ERP/POS (SAP, PostgreSQL, Oracle), serta aplikasi perpesanan seperti WhatsApp dan Slack.",
  },
  {
    id: "messy-data",
    question: "Our data is messy and lives in spreadsheets. Will Arkaprana still work?",
    answer: "Ya. Pipeline Data Lakehouse Arkaprana secara otomatis mengurai, memvalidasi, dan mengindeks spreadsheet Excel, CSV, dokumen PDF, serta log telemetri mentah ke dalam satu katalog metadata terpadu yang siap diproses oleh agen kecerdasan.",
  },
  {
    id: "ai-trust",
    question: "AI makes things up. Can I trust the answers?",
    answer: "Arkaprana menggunakan arsitektur Retrieval-Augmented Generation (RAG) ketat berbasis dokumen & log internal faktual. Setiap jawaban diverifikasi silang dengan audit hash dan mencantumkan sumber sitasi dokumen asli. Model dilarang membuat spekulasi di luar data valid.",
  },
  {
    id: "data-protection",
    question: "How is my business data protected?",
    answer: "Data Anda 100% berada dalam yurisdiksi Republik Indonesia (sesuai PP No. 71/2019). Data dienkripsi dalam transit (TLS 1.3 / MACsec) dan at rest dengan Hardware Security Module (HSM FIPS 140-3). Data internal Anda tidak pernah dikirim ke LLM publik atau digunakan untuk melatih model pihak ketiga.",
  },
  {
    id: "see-results",
    question: "How quickly can I see results?",
    answer: "Integrasi tahap awal telemetri jaringan atau sistem private AI proof-of-value (PoV) dapat dioperasikan dalam waktu 14 hingga 21 hari kerja berkat template blueprint modular siap pakai dari Arkaprana.",
  },
  {
    id: "cost",
    question: "How much does Arkaprana cost?",
    answer: "Investasi disesuaikan dengan skala infrastruktur dan model pengadaan organisasi Anda, baik melalui skema belanja modal (Capex turnkey) maupun layanan berlangganan terkelola bulanan (Opex Managed IT) dengan garansi SLA ketersediaan hingga 99.99%.",
  },
  {
    id: "who-benefits",
    question: "What kind of businesses benefit most from Arkaprana?",
    answer: "Organisasi multi-cabang (ritel modern, logistik, FMCG), institusi perbankan & multifinance, perusahaan telekomunikasi/ISP, BUMN, serta lembaga pemerintahan yang membutuhkan kedaulatan data tinggi dan tidak boleh mengalami downtime operasional.",
  },
];

export default function NalarFaqSection() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-[#08090D] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-16 pb-8 border-b border-white/10 space-y-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">10 · KNOWLEDGE BASE · FAQS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.18] font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-white/50 max-w-md mx-auto font-light leading-relaxed">
            Everything you need to know about Arkaprana. Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-white hover:text-[#38BDF8] underline transition-colors">
              Reach out.
            </Link>
          </p>
        </div>

        {/* Minimalist Border Accordion List (Centered Max-W-4xl) */}
        <div className="max-w-4xl mx-auto space-y-0 divide-y divide-white/10 border-b border-white/10">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div key={faq.id} className="transition-colors group">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left transition-colors cursor-pointer group-hover:text-[#38BDF8]"
                >
                  <div className="flex items-center gap-4 pr-6">
                    <span className="text-white/40 group-hover:text-[#38BDF8] transition-colors shrink-0">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                    <span className="text-base sm:text-lg font-light text-white/90 group-hover:text-white font-display tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                </button>

                {/* Smooth Expandable Answer */}
                <div className={`accordion-wrapper ${isOpen ? "is-open" : ""}`}>
                  <div className="accordion-inner">
                    <div className="pl-8 pb-6 pr-4 max-w-3xl">
                      <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
