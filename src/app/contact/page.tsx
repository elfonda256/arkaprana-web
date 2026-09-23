"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_PROFILE } from "@/lib/data";
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, FileText } from "lucide-react";
import CompanyProfileModal from "@/components/shared/CompanyProfileModal";

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
    <main className="flex-1 pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--border-strong)] text-[var(--accent-blue)] text-xs font-mono">
            <span>ENTERPRISE INQUIRY DESK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight font-display">
            Let's Build What's Next.
          </h1>

          <p className="text-base sm:text-xl text-[var(--text-primary)] leading-relaxed font-normal">
            Tell us what you're building, and let's design the technology behind it.
          </p>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Sampaikan parameter teknis, lokasi, dan target arsitektur organisasi Anda. Tim Principal Engineer ARKAPRANA siap melakukan kajian mendalam tanpa komitmen awal.
          </p>
        </div>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm relative">
            {submitted ? (
              /* Section 26: Qualified Lead Success Screen */
              <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display">
                    Thank you for reaching out to ARKAPRANA.
                  </h3>
                  <div className="text-base text-[var(--accent-blue)] font-medium">
                    Your project information has been received.
                  </div>
                  <div className="text-sm font-serif italic text-[var(--text-secondary)]">
                    &ldquo;Let's explore what we can build together.&rdquo;
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed pt-2">
                  Tim Principal Systems Engineer ARKAPRANA akan menelaah spesifikasi kebutuhan Anda dan menghubungi kembali melalui email atau nomor telepon resmi dalam waktu 1x24 jam kerja.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.position || "Representative")})%20dari%20${encodeURIComponent(formData.company)}%20telah%20mengirimkan%20inquiry%20proyek%20${encodeURIComponent(formData.projectType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Lanjutkan via WhatsApp Instan</span>
                  </a>

                  {/* Section 26 CTA: Back to ARKAPRANA */}
                  <Link
                    href="/"
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all"
                  >
                    Back to ARKAPRANA
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name, Company, Position (Section 25 verbatim) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ir. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Nusantara Maritime"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IT Director / CTO"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    />
                  </div>
                </div>

                {/* Email, Phone (Section 25 verbatim) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="081X-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    />
                  </div>
                </div>

                {/* Industry, Project Type, Estimated Timeline (Section 25 verbatim) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Industry *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    >
                      {PROJECT_TYPES.map((pt) => (
                        <option key={pt} value={pt} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                    >
                      {TIMELINE_OPTIONS.map((time) => (
                        <option key={time} value={time} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Budget Range (Section 25 verbatim) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Budget Range (Optional)
                    </label>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono">
                      Tidak mengikat / opsional
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
                              ? "bg-[var(--accent-glow)] border-[var(--border-strong)] text-[var(--accent-blue)] font-semibold"
                              : "bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Description * (Section 25 verbatim) */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Project Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Uraikan gambaran fasilitas, tantangan arsitektur, lokasi, atau target implementasi yang ingin dicapai..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors resize-none"
                  />
                </div>

                {/* Section 25 CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-[var(--accent-blue)] hover:opacity-90 btn-primary-interaction group shadow-md active:scale-[0.99] disabled:opacity-50 cursor-pointer transition-all"
                >
                  <span>{loading ? "Processing..." : "Discuss Your Project"}</span>
                  <ArrowRight className="w-4 h-4 text-white cta-arrow" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Engineering Channels & Trust Guarantee (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-8 space-y-6 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] block">
                Direct Engineering Dispatch
              </span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-display">
                Butuh respons cepat untuk proyek mendesak?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Hubungi saluran WhatsApp terenkripsi atau kirimkan ringkasan kebutuhan Anda langsung kepada prinsipal arsitek kami.
              </p>

              <div className="space-y-3.5 pt-1">
                <a
                  href={COMPANY_PROFILE.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                      {COMPANY_PROFILE.contact.phone} (WhatsApp)
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">
                      Direct WhatsApp Dispatch • Instant Response
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_PROFILE.contact.email}`}
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
                      {COMPANY_PROFILE.contact.email}
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">
                      Official Desk • SLA &lt; 24h
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">
                      Indonesia
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">
                      Nationwide Implementation Capabilities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Resources Box */}
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                Corporate Resources
              </span>
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                Download Company Profile &amp; Statements
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pb-2">
                Dapatkan dokumen overview resmi seputar rekayasa jaringan, infrastruktur data center, dan kedaulatan private AI ARKAPRANA.
              </p>
              <CompanyProfileModal
                triggerClassName="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all cursor-pointer shadow-sm"
                triggerText="Download Company Profile"
              />
            </div>

            {/* Strict Non-Disclosure & Security Assurance */}
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)] p-6 text-xs text-[var(--text-secondary)] space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)]" />
                <span>Strict Non-Disclosure &amp; Security Assurance</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                Seluruh data teknis, denah fasilitas, dan informasi bisnis yang dibagikan terikat perjanjian kerahasiaan ketat (NDA) demi melindungi privasi aset Anda.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
