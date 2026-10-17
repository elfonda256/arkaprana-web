"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_PROFILE } from "@/lib/data";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import CompanyProfileModal from "@/components/shared/CompanyProfileModal";
import NalarPageHeroAtmosphere from "@/components/decorative/NalarPageHeroAtmosphere";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const PROJECT_TYPES = [
  "Network Infrastructure",
  "Server & Data Center",
  "Cloud Environment",
  "Cybersecurity Defense",
  "Managed IT Operations",
  "Private AI & RAG",
  "Automation & Robotics",
  "Turnkey System Integration",
  "Technology Consulting",
  "Other"
];

const TIMELINE_OPTIONS = [
  "Exploring / Feasibility",
  "Immediate (< 3 Months)",
  "3–6 Months",
  "6–12 Months",
  "Long Term / Next Fiscal"
];

const BUDGET_OPTIONS = [
  "Not decided",
  "Under discussion",
  "Budget available",
  "Prefer to discuss"
];

const INDUSTRIES = [
  "Konstruksi & Proyek Fisik",
  "Manufaktur & Pabrik Industri",
  "Pelabuhan & Maritim",
  "Logistik & Pergudangan",
  "Properti & Kawasan Komersial",
  "Perhotelan & Hospitality",
  "Pemerintahan & Institusi Publik",
  "Badan Usaha Milik Negara (BUMN)",
  "Perbankan & Finansial",
  "Korporasi & Enterprise",
  "Lainnya"
];

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    industry: INDUSTRIES[0],
    projectType: PROJECT_TYPES[0],
    timeline: TIMELINE_OPTIONS[1],
    budgetRange: BUDGET_OPTIONS[0],
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
      industry: INDUSTRIES[0],
      projectType: PROJECT_TYPES[0],
      timeline: TIMELINE_OPTIONS[1],
      budgetRange: BUDGET_OPTIONS[0],
      description: ""
    });
  };

  return (
    <main className="relative min-h-screen bg-[#08090D] text-white">
      {/* Animated Atmosphere with Ethereal Mist, Waveforms & Orbits */}
      <NalarPageHeroAtmosphere
        badgeText={t("contact_page_badge", "08 · MEJA KONSULTASI · INISIASI PROYEK")}
        headlinePrimary={t("contact_page_title_1", "Mulai Diskusi Rekayasa.")}
        headlineSecondary={t("contact_page_title_2", "Bicara Langsung dengan Tim Arsitek Sistem Kami.")}
        description={t(
          "contact_page_desc",
          "Kami tidak menggunakan tim penjualan perantara. Setiap permintaan konsultasi ditinjau dan ditanggapi langsung oleh principal network & system engineer kami dalam kurun waktu 1x24 jam kerja."
        )}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Main Content Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <ScrollReveal delayMs={100}>
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 shadow-2xl backdrop-blur-md relative">
                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-light text-white font-display">
                        {t("contact_submitted_title", "Permintaan Anda Berhasil Terkirim")}
                      </h3>
                      <div className="text-sm text-cyan-400 font-mono">
                        {t("contact_submitted_desc", "Tim arsitek sistem ARKAPRANA akan menelaah spesifikasi kebutuhan Anda dan menghubungi Anda dalam 1x24 jam kerja.")}
                      </div>
                      <div className="text-xs font-serif italic text-zinc-400 pt-2">
                        &ldquo;Let&apos;s explore what we can build together.&rdquo;
                      </div>
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.position || "Representative")})%20dari%20${encodeURIComponent(formData.company)}%20telah%20mengirimkan%20inquiry%20proyek%20${encodeURIComponent(formData.projectType)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{language === "en" ? "Continue via WhatsApp Instant" : "Lanjutkan via WhatsApp Instan"}</span>
                      </a>

                      <Link
                        href="/"
                        onClick={handleReset}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                      >
                        {language === "en" ? "Back to Homepage" : "Kembali ke Beranda"}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="text-lg font-light text-white font-display">
                        {t("contact_form_title", "Formulir Spesifikasi & Konsultasi Proyek")}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        {language === "en"
                          ? "Fields marked with * are required for architectural review."
                          : "Bidang bertanda * wajib diisi untuk telaah arsitektural."}
                      </p>
                    </div>

                    {/* Name, Company, Position */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_name_label", "Nama Lengkap")} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ir. Budi Santoso"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_company_label", "Perusahaan / Institusi")} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. PT Nusantara Maritime"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_role_label", "Jabatan / Divisi")}
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. IT Director / CTO"
                          value={formData.position}
                          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email, Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_email_label", "Email Korporat")} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.co.id"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_phone_label", "Nomor WhatsApp / Telepon")}
                        </label>
                        <input
                          type="tel"
                          placeholder="081X-XXXX-XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Industry, Project Type, Estimated Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_industry_label", "Sektor Industri")} *
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          {INDUSTRIES.map((ind) => (
                            <option key={ind} value={ind} className="bg-zinc-900 text-white">
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_project_type_label", "Kategori Rekayasa")} *
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          {PROJECT_TYPES.map((pt) => (
                            <option key={pt} value={pt} className="bg-zinc-900 text-white">
                              {pt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          {t("contact_timeline_label", "Target Waktu Implementasi")}
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          {TIMELINE_OPTIONS.map((time) => (
                            <option key={time} value={time} className="bg-zinc-900 text-white">
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Optional Budget Range */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {t("contact_budget_label", "Status Anggaran")}
                        </label>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {language === "en" ? "Non-binding / Optional" : "Tidak mengikat / opsional"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_OPTIONS.map((opt) => {
                          const isSelected = formData.budgetRange === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, budgetRange: opt })}
                              className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-white text-black font-semibold border-white"
                                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        {t("contact_desc_label", "Ringkasan Kebutuhan & Tantangan Arsitektur")} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder={
                          language === "en"
                            ? "Describe your facilities, architecture challenges, location, or target SLA objectives..."
                            : "Uraikan gambaran fasilitas, tantangan arsitektur, lokasi, atau target implementasi yang ingin dicapai..."
                        }
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-black bg-white hover:bg-zinc-200 group shadow-lg active:scale-[0.99] disabled:opacity-50 cursor-pointer transition-all"
                    >
                      <span>{loading ? "Processing..." : t("contact_btn_submit", "Kirim Permintaan Konsultasi Rekayasa")}</span>
                      <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Direct Engineering Channels & Trust Guarantee (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delayMs={150}>
              <div className="bg-zinc-950/80 rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                  {t("contact_direct_reach", "Hubungi Langsung")}
                </span>
                <h3 className="text-xl font-light text-white font-display">
                  {language === "en" ? "Need a fast response for mission-critical timelines?" : "Butuh respons cepat untuk proyek mendesak?"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {language === "en"
                    ? "Reach our encrypted WhatsApp hotline or dispatch your brief directly to our principal systems engineers."
                    : "Hubungi saluran WhatsApp terenkripsi atau kirimkan ringkasan kebutuhan Anda langsung kepada prinsipal arsitek kami."}
                </p>

                <div className="space-y-3.5 pt-1">
                  <a
                    href={COMPANY_PROFILE.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {COMPANY_PROFILE.contact.phone} (WhatsApp)
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        Direct WhatsApp Dispatch • Instant Response
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_PROFILE.contact.email}`}
                    className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-cyan-400/50 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {COMPANY_PROFILE.contact.email}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        {t("contact_sla_promise", "SLA Respon: < 24 Jam Kerja")}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-zinc-900/70 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {t("contact_hq_location", "Kantor Pusat Rekayasa")}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        Indonesia • Nationwide Capabilities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Corporate Resources Box */}
            <ScrollReveal delayMs={200}>
              <div className="bg-zinc-950/80 rounded-3xl border border-white/10 p-6 space-y-3 shadow-2xl backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                  Corporate Resources
                </span>
                <div className="text-sm font-semibold text-white">
                  {language === "en" ? "Download Company Profile & Statements" : "Unduh Dokumen Profil Perusahaan"}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pb-2">
                  {language === "en"
                    ? "Get the official capability overview covering network architecture, modular data centers, and private enterprise AI."
                    : "Dapatkan dokumen overview resmi seputar rekayasa jaringan, infrastruktur data center, dan kedaulatan private AI ARKAPRANA."}
                </p>
                <CompanyProfileModal
                  triggerClassName="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-all cursor-pointer shadow-sm"
                  triggerText={t("btn_download_cp", "Unduh Profil Perusahaan")}
                />
              </div>
            </ScrollReveal>

            {/* Strict Non-Disclosure & Security Assurance */}
            <ScrollReveal delayMs={250}>
              <div className="bg-zinc-950/80 rounded-2xl border border-white/10 p-6 text-xs text-zinc-300 space-y-2 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-white font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{t("contact_nda_note", "Kerahasiaan NDA Dijamin Sejak Kontak Awal")}</span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  {language === "en"
                    ? "All technical specifications, facility drawings, and business discussions are protected under strict Non-Disclosure Agreements (NDA)."
                    : "Seluruh data teknis, denah fasilitas, dan informasi bisnis yang dibagikan terikat perjanjian kerahasiaan ketat (NDA) demi melindungi privasi aset Anda."}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
