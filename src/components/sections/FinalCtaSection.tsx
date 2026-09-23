"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  FileText
} from "lucide-react";
import { COMPANY_PROFILE } from "@/lib/data";
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

export default function FinalCtaSection() {
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 600);
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
      timeline: TIMELINE_OPTIONS[1],
      budgetRange: BUDGET_OPTIONS[0],
      description: ""
    });
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#030712] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Narrative Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Enterprise Inquiry Desk</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] font-sans">
            Let's Build What's Next.
          </h2>

          <p className="text-neutral-300 text-base sm:text-xl leading-relaxed pt-1 max-w-2xl font-normal">
            Tell us what you're building, and let's design the technology behind it.
          </p>

          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
            Kaji kebutuhan infrastruktur, jaringan, cloud, keamanan siber, atau kecerdasan buatan organisasi Anda langsung bersama tim Principal Engineer ARKAPRANA.
          </p>
        </div>

        {/* Form and Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Enterprise Inquiry Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#070b16] rounded-3xl border border-white/[0.12] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Section 26: Qualified Lead Success Screen */}
            {status === "success" ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                    Thank you for reaching out to ARKAPRANA.
                  </h3>
                  <div className="text-base text-cyan-300 font-medium">
                    Your project information has been received.
                  </div>
                  <div className="text-sm font-serif italic text-neutral-300">
                    &ldquo;Let's explore what we can build together.&rdquo;
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed pt-2">
                  Tim Principal Systems Engineer ARKAPRANA akan menelaah spesifikasi kebutuhan Anda dan menghubungi kembali melalui email atau telepon resmi dalam waktu 1x24 jam kerja.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.position || "Representative")})%20dari%20${encodeURIComponent(formData.company)}%20telah%20mengirimkan%20inquiry%20proyek%20${encodeURIComponent(formData.projectType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-colors shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Lanjutkan via WhatsApp Instan</span>
                  </a>

                  {/* Section 26 CTA: Back to ARKAPRANA */}
                  <button
                    type="button"
                    onClick={handleBackToHome}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all cursor-pointer"
                  >
                    Back to ARKAPRANA
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name, Company, Position (Section 25 verbatim) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ir. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Nusantara Maritime"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IT Director / CTO"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email, Phone (Section 25 verbatim) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="081X-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Industry, Project Type, Estimated Timeline (Section 25 verbatim) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Industry *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1020] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#0a1020] text-white">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1020] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {PROJECT_TYPES.map((pt) => (
                        <option key={pt} value={pt} className="bg-[#0a1020] text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1020] border border-white/[0.1] text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {TIMELINE_OPTIONS.map((time) => (
                        <option key={time} value={time} className="bg-[#0a1020] text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Budget Range (Section 25 verbatim) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                      Budget Range (Optional)
                    </label>
                    <span className="text-[10px] text-neutral-500 font-mono">
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
                              ? "bg-white/[0.1] border-cyan-400 text-cyan-300"
                              : "bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white hover:border-white/[0.15]"
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
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Uraikan gambaran fasilitas, tantangan arsitektur, lokasi, atau target implementasi yang ingin dicapai..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Section 25 CTA: DISCUSS YOUR PROJECT / SUBMIT PROJECT INQUIRY */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-black bg-white hover:bg-neutral-100 btn-primary-interaction group shadow-xl active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  <span>{status === "submitting" ? "Processing..." : "DISCUSS YOUR PROJECT"}</span>
                  <ArrowRight className="w-4 h-4 text-black cta-arrow" />
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Direct Engineering Channels & Trust Guarantee (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="bg-[#070b16] rounded-3xl border border-white/[0.1] p-6 sm:p-8 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                Direct Engineering Dispatch
              </span>
              <h3 className="text-xl font-bold text-white font-sans">
                Butuh respons cepat untuk proyek mendesak?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Hubungi saluran WhatsApp terenkripsi atau kirimkan ringkasan kebutuhan Anda langsung kepada prinsipal arsitek kami.
              </p>

              <div className="space-y-3.5 pt-1">
                <a
                  href={COMPANY_PROFILE.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {COMPANY_PROFILE.contact.phone} (WhatsApp)
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Direct WhatsApp Dispatch • Instant Response
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_PROFILE.contact.email}`}
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {COMPANY_PROFILE.contact.email}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Official Desk • SLA &lt; 24h
                    </div>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-neutral-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Indonesia
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      Nationwide Implementation Capabilities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Document Center Trigger (Section 28) */}
            <div className="bg-[#070b16] rounded-3xl border border-white/[0.08] p-6 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                Corporate Resources
              </span>
              <div className="text-sm font-semibold text-white">
                Download Company Profile &amp; Statements
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pb-2">
                Dapatkan dokumen overview resmi seputar rekayasa jaringan, infrastruktur data center, dan kedaulatan private AI ARKAPRANA.
              </p>
              <CompanyProfileModal
                triggerClassName="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white border border-white/[0.1] transition-all cursor-pointer"
                triggerText="DOWNLOAD COMPANY PROFILE →"
              />
            </div>

            {/* Non-Disclosure Agreement Guarantee */}
            <div className="bg-[#070b16] rounded-2xl border border-white/[0.08] p-6 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Strict Non-Disclosure &amp; Security Assurance</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Seluruh data teknis, denah fasilitas, dan informasi bisnis yang dibagikan terikat perjanjian kerahasiaan ketat (NDA) demi melindungi privasi aset Anda.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
