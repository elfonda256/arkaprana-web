"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  FileText,
  Lock,
  ChevronRight
} from "lucide-react";
import { COMPANY_PROFILE } from "@/lib/data";
import CompanyProfileModal from "@/components/shared/CompanyProfileModal";

const INDUSTRIES = [
  "Maritime & Logistics",
  "Mining & Heavy Industry",
  "Plantation & Agriculture",
  "Financial Services & Banking",
  "Healthcare & Hospital Systems",
  "Manufacturing & Industrial",
  "Government & Smart City",
  "Retail & Enterprise Distribution",
  "Telecommunications & Media"
];

const PROJECT_TYPES = [
  "New Infrastructure Architecture (Greenfield)",
  "Network Modernization & SD-WAN Mesh",
  "Private Cloud & Virtualization Setup",
  "Cybersecurity Hardening & SOC Implementation",
  "Private On-Premise AI / Enterprise RAG",
  "Full Turnkey System Integration",
  "Dedicated 24/7 Managed IT Services"
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 1 Month)",
  "Upcoming Quarter (1-3 Months)",
  "Planning Phase (3-6 Months)",
  "Annual Budget Cycle (6+ Months)"
];

const BUDGET_OPTIONS = [
  "< IDR 250 Juta",
  "IDR 250Jt - 1M",
  "IDR 1M - 5M",
  "> IDR 5 Miliar"
];

export default function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    industry: INDUSTRIES[0],
    projectType: PROJECT_TYPES[0],
    timeline: TIMELINE_OPTIONS[0],
    budgetRange: "",
    description: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const handleBackToHome = () => {
    setStatus("idle");
    setFormData({
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
      industry: INDUSTRIES[0],
      projectType: PROJECT_TYPES[0],
      timeline: TIMELINE_OPTIONS[0],
      budgetRange: "",
      description: ""
    });
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Narrative Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Enterprise Inquiry Desk</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05] font-sans">
            Let's Build What's Next.
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-xl leading-relaxed pt-1 max-w-2xl font-normal">
            Tell us what you're building, and let's design the technology behind it.
          </p>

          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
            Kaji kebutuhan infrastruktur, jaringan, cloud, keamanan siber, atau kecerdasan buatan organisasi Anda langsung bersama tim Principal Engineer ARKAPRANA.
          </p>
        </div>

        {/* Form and Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Enterprise Inquiry Form (Span 7) */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-8 sm:p-10 shadow-xl relative overflow-hidden transition-colors duration-300">
            
            {/* Qualified Lead Success Screen */}
            {status === "success" ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-sans">
                    Thank you for reaching out to ARKAPRANA.
                  </h3>
                  <div className="text-base text-[var(--accent)] font-medium">
                    Your project information has been received.
                  </div>
                  <div className="text-sm font-serif italic text-[var(--text-secondary)]">
                    &ldquo;Let's explore what we can build together.&rdquo;
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed pt-2">
                  Tim Principal Systems Engineer ARKAPRANA akan menelaah spesifikasi kebutuhan Anda dan menghubungi kembali melalui email atau telepon resmi dalam waktu 1x24 jam kerja.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.position || "Representative")})%20dari%20${encodeURIComponent(formData.company)}%20telah%20mengirimkan%20inquiry%20proyek%20${encodeURIComponent(formData.projectType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Lanjutkan via WhatsApp Instan</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleBackToHome}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] border border-[var(--border-subtle)] transition-all cursor-pointer"
                  >
                    Back to ARKAPRANA
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name, Company, Position */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ir. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Nusantara Maritime"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IT Director / CTO"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                {/* Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="081X-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                {/* Industry, Project Type, Estimated Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Industry *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      {PROJECT_TYPES.map((pt) => (
                        <option key={pt} value={pt} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      {TIMELINE_OPTIONS.map((time) => (
                        <option key={time} value={time} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Budget Range */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)]">
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
                              ? "bg-[var(--accent-soft-bg)] border-[var(--accent)] text-[var(--accent)] font-semibold shadow-xs"
                              : "bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/30"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Description * */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Project Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Uraikan gambaran fasilitas, tantangan arsitektur, lokasi, atau target implementasi yang ingin dicapai..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 btn-primary-interaction group shadow-sm active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  <span>{status === "submitting" ? "Processing..." : "Discuss Your Project"}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--btn-primary-text)] cta-arrow" />
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Direct Engineering Channels & Trust Guarantee (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-8 space-y-6 shadow-sm transition-colors duration-300">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block font-semibold">
                Direct Channels
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-sans">
                Prefer direct technical consultation?
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
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
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
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {COMPANY_PROFILE.contact.email}
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">
                      Official Desk • SLA &lt; 24h
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] shrink-0">
                    <MapPin className="w-4 h-4 text-[var(--accent)]" />
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

            {/* Corporate Document Center Trigger */}
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-6 space-y-3 shadow-sm transition-colors duration-300">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block font-semibold">
                Corporate Resources
              </span>
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                Download Company Profile &amp; Statements
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pb-2">
                Dapatkan dokumen overview resmi seputar rekayasa jaringan, infrastruktur data center, dan kedaulatan private AI ARKAPRANA.
              </p>
              <CompanyProfileModal
                triggerClassName="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-hover-bg)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all cursor-pointer shadow-xs"
                triggerText="Download Company Profile"
              />
            </div>

            {/* Non-Disclosure Agreement Guarantee */}
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)] p-6 text-xs text-[var(--text-secondary)] space-y-2 shadow-xs transition-colors duration-300">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                <span>Strict Non-Disclosure &amp; Security Assurance</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                Seluruh data teknis, denah fasilitas, dan informasi bisnis yang dibagikan terikat perjanjian kerahasiaan ketat (NDA) demi melindungi privasi aset Anda.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
