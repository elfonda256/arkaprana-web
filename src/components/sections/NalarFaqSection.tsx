"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS_MAP: Record<Language, FaqItem[]> = {
  id: [
    {
      id: "what-is",
      question: "Apa itu Arkaprana dan apa perannya bagi organisasi kami?",
      answer: "ARKAPRANA adalah mitra rekayasa teknologi enterprise Indonesia yang membangun dan mengintegrasikan infrastruktur digital terpadu — dari kabel serat optik fisik & ruang data center modular Tier-3+, hingga cloud privat berdaulat dan platform agen AI mandiri yang terhubung langsung ke sistem operasional harian Anda.",
    },
    {
      id: "tech-knowledge",
      question: "Apakah staf kami memerlukan keahlian teknis mendalam untuk mengoperasikan Arkaprana?",
      answer: "Tidak untuk level operasional dan manajemen. Arkaprana menghadirkan antarmuka percakapan natural berbahasa Indonesia di mana eksekutif dan staf dapat langsung menanyakan status jaringan, metrik penjualan, dan audit log tanpa perlu menulis kode SQL atau konfigurasi router CLI manual.",
    },
    {
      id: "connect-tools",
      question: "Bagaimana Arkaprana terhubung dengan sistem perangkat keras & perangkat lunak yang sudah ada?",
      answer: "Arkaprana terintegrasi secara turnkey dengan perangkat keras multi-vendor (Cisco, Juniper, Fortinet, Dell, HPE), hypervisor virtualisasi (VMware, OpenStack, Proxmox), database ERP/POS (SAP, PostgreSQL, Oracle), serta aplikasi alur kerja perpesanan seperti WhatsApp dan Slack.",
    },
    {
      id: "messy-data",
      question: "Data kami tersebar di berbagai spreadsheet Excel dan dokumen terpisah. Apakah sistem tetap dapat bekerja?",
      answer: "Ya. Pipeline Data Lakehouse Arkaprana secara otomatis mengurai, memvalidasi, dan mengindeks spreadsheet Excel, CSV, dokumen PDF, serta log telemetri mentah ke dalam satu katalog metadata terpadu yang siap diproses oleh agen kecerdasan.",
    },
    {
      id: "ai-trust",
      question: "Kerap kali AI berhalusinasi atau mengarang jawaban. Bagaimana akurasi data terjamin?",
      answer: "Arkaprana menggunakan arsitektur Retrieval-Augmented Generation (RAG) ketat berbasis dokumen & log internal faktual. Setiap jawaban diverifikasi silang dengan audit hash dan mencantumkan sumber sitasi dokumen asli. Model dilarang membuat spekulasi di luar data valid.",
    },
    {
      id: "data-protection",
      question: "Bagaimana kedaulatan dan privasi data korporasi kami dilindungi?",
      answer: "Data Anda 100% berada dalam yurisdiksi Republik Indonesia (sesuai PP No. 71/2019 dan UU PDP No. 27/2022). Data dienkripsi dalam transit (TLS 1.3 / MACsec) dan at rest dengan Hardware Security Module (HSM FIPS 140-3). Data internal Anda tidak pernah dikirim ke LLM publik atau digunakan untuk melatih model pihak ketiga.",
    },
    {
      id: "see-results",
      question: "Berapa lama waktu yang dibutuhkan hingga sistem dapat mulai beroperasi?",
      answer: "Integrasi tahap awal telemetri jaringan atau sistem private AI proof-of-value (PoV) dapat dioperasikan dalam waktu 14 hingga 21 hari kerja berkat template blueprint modular siap pakai dari Arkaprana.",
    },
    {
      id: "cost",
      question: "Bagaimana skema investasi dan biaya pengadaan Arkaprana?",
      answer: "Investasi disesuaikan dengan skala infrastruktur dan model pengadaan organisasi Anda, baik melalui skema belanja modal (Capex turnkey) maupun layanan berlangganan terkelola bulanan (Opex Managed IT) dengan garansi SLA ketersediaan hingga 99.99%.",
    },
    {
      id: "who-benefits",
      question: "Sektor bisnis apa saja yang paling diuntungkan dari arsitektur Arkaprana?",
      answer: "Organisasi multi-cabang (ritel modern, logistik, rantai pasok), institusi perbankan & multifinance, perusahaan telekomunikasi/ISP, BUMN energi, serta lembaga pemerintahan yang membutuhkan kedaulatan data tinggi dan toleransi downtime nol.",
    },
  ],
  en: [
    {
      id: "what-is",
      question: "What is Arkaprana and what does it do for our enterprise?",
      answer: "ARKAPRANA is an Indonesian enterprise technology engineering partner that builds and integrates sovereign digital infrastructure — from subterranean fiber optics and Tier-3+ modular data centers to sovereign private cloud and autonomous AI agent platforms connected directly to your core operations.",
    },
    {
      id: "tech-knowledge",
      question: "Do our staff need deep technical expertise to operate Arkaprana?",
      answer: "Not at an operational or executive level. Arkaprana provides a natural conversational command console where leaders and operators can query real-time network status, sales metrics, and audit logs without manual SQL queries or complex router CLI configurations.",
    },
    {
      id: "connect-tools",
      question: "How does Arkaprana connect to our existing heterogeneous systems?",
      answer: "Arkaprana integrates turnkey with multi-vendor network hardware (Cisco, Juniper, Fortinet, Dell, HPE), virtualization hypervisors (VMware, OpenStack, Proxmox), enterprise ERP/POS databases (SAP, PostgreSQL, Oracle), and messaging workflows such as WhatsApp and Slack.",
    },
    {
      id: "messy-data",
      question: "Our data is fragmented across spreadsheets and legacy documents. Will Arkaprana still function?",
      answer: "Yes. Arkaprana's Data Lakehouse pipeline automatically parses, validates, and vectors Excel spreadsheets, CSVs, PDF documentation, and raw telemetry logs into a unified metadata catalog ready for autonomous agent orchestration.",
    },
    {
      id: "ai-trust",
      question: "AI often hallucinates. How can we trust the answers generated?",
      answer: "Arkaprana enforces a deterministic Retrieval-Augmented Generation (RAG) architecture grounded strictly in factual internal documents and logs. Every output is cross-verified with cryptographic audit hashes and verifiable document citations, prohibiting speculative generation.",
    },
    {
      id: "data-protection",
      question: "How is our corporate data protected and governed?",
      answer: "Your data remains 100% within Indonesian jurisdiction (compliant with PP 71/2019 and PDP Law 27/2022). It is protected by TLS 1.3/MACsec in transit and FIPS 140-3 Hardware Security Modules at rest. Your proprietary data is never routed to public LLMs or third-party training pipelines.",
    },
    {
      id: "see-results",
      question: "How quickly can we expect deployment and measurable results?",
      answer: "Initial live network telemetry ingestion and sovereign private AI proof-of-value (PoV) deployments are typically operational within 14 to 21 business days using Arkaprana's pre-certified modular blueprints.",
    },
    {
      id: "cost",
      question: "What is the commercial investment and pricing structure?",
      answer: "Investment is structured around your infrastructure scale and procurement preference, offering both turnkey capital expenditure (Capex) and managed operational subscription models (Opex Managed IT) backed by 99.99% availability SLAs.",
    },
    {
      id: "who-benefits",
      question: "Which industries benefit most from Arkaprana's unified architecture?",
      answer: "Multi-branch retail and logistics enterprises, banking and financial institutions, telecommunication/ISP operators, national energy SOEs, and public sector agencies requiring uncompromising data sovereignty and zero downtime tolerance.",
    },
  ],
};

export default function NalarFaqSection() {
  const { language, t } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>([]);

  const faqs = FAQS_MAP[language] || FAQS_MAP.id;

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
            <span className="tracking-widest uppercase">{t("faq_badge", "10 · KNOWLEDGE BASE · FAQS")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.18] font-display">
            {t("faq_title", "Pertanyaan yang Sering Diajukan")}
          </h2>
          <p className="text-xs sm:text-sm text-white/50 max-w-md mx-auto font-light leading-relaxed">
            {t("faq_desc", "Segala hal yang perlu Anda ketahui mengenai Arkaprana. Tidak menemukan jawaban Anda?")}{" "}
            <Link href="/contact" className="text-white hover:text-[#38BDF8] underline transition-colors">
              {t("faq_reach_out", "Hubungi kami.")}
            </Link>
          </p>
        </div>

        {/* Minimalist Border Accordion List (Centered Max-W-4xl) */}
        <div className="max-w-4xl mx-auto space-y-0 divide-y divide-white/10 border-b border-white/10">
          {faqs.map((faq) => {
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
