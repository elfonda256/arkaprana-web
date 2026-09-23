"use client";

import React, { useState } from "react";
import { COMPANY_PROFILE } from "@/lib/data";
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";

const PROJECT_TYPES = [
  "Network",
  "Infrastructure",
  "Cloud",
  "Cybersecurity",
  "Managed IT",
  "AI",
  "Automation",
  "System Integration",
  "Other"
];

const TIMELINE_OPTIONS = [
  "Exploring",
  "0–3 Months",
  "3–6 Months",
  "6–12 Months",
  "Long Term"
];

const INDUSTRIES = [
  "Konstruksi & Proyek",
  "Manufaktur & Pabrik",
  "Pelabuhan & Maritim",
  "Logistik & Pergudangan",
  "Properti & Komersial",
  "Perhotelan & Hospitality",
  "Pemerintahan & BUMN",
  "Perbankan & Finansial",
  "Korporasi & Enterprise",
  "Lainnya"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    industry: INDUSTRIES[0],
    projectType: PROJECT_TYPES[0],
    timeline: TIMELINE_OPTIONS[1],
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
    }, 700);
  };

  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712] text-white min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Section (Section 23 verbatim) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-cyan-400 text-xs font-mono">
            <span>DIRECT ENGAGEMENT DESK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-sans">
            Let's Build What's Next.
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal">
            Tell us what you're building, and let's design the technology behind it.
          </p>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
            Sampaikan parameter teknis, lokasi, dan target arsitektur organisasi Anda. Tim Principal Engineer ARKAPRANA siap melakukan kajian mendalam.
          </p>
        </div>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#070b16] border border-white/[0.12] shadow-2xl relative">
            {submitted ? (
              <div className="py-16 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Thank you. Your project information has been received.
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Informasi proyek Anda telah dicatat. Tim Principal Engineer ARKAPRANA akan mempelajari spesifikasi organisasi Anda dan menghubungi dalam waktu 1x24 jam kerja.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.role)})%20dari%20${encodeURIComponent(formData.company)}%20telah%20mengirimkan%20inquiry%20proyek%20${encodeURIComponent(formData.projectType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Lanjutkan via WhatsApp Langsung</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        role: "",
                        email: "",
                        phone: "",
                        industry: INDUSTRIES[0],
                        projectType: PROJECT_TYPES[0],
                        timeline: TIMELINE_OPTIONS[1],
                        description: ""
                      });
                    }}
                    className="px-6 py-3 rounded-full text-xs font-medium text-neutral-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name, Company, Role */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Nama Lengkap *
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
                      Perusahaan / Organisasi *
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
                      Jabatan / Role *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. IT Director / CTO"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Email Korporat *
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
                      Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="081X-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Industry, Project Type, Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Sektor Industri
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
                      Timeline *
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

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Uraikan tantangan infrastruktur, lokasi fasilitas, perkiraan skala node, atau target implementasi..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-xl hover:shadow-cyan-500/20 active:scale-[0.99] disabled:opacity-50"
                >
                  <span>{loading ? "Processing..." : "Start a Conversation"}</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Channels & Guarantees (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="p-8 rounded-3xl bg-[#070b16] border border-white/[0.1] space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                Direct Engineering Dispatch
              </span>
              <h3 className="text-xl font-bold text-white">
                Butuh respons cepat untuk proyek mendesak?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Hubungi saluran komunikasi terenkripsi atau kirimkan ringkasan kebutuhan Anda langsung kepada tim prinsipal kami.
              </p>

              <div className="space-y-4 pt-1">
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
                      Official Desk • Response &lt; 24h
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

            {/* Non-Disclosure Agreement Guarantee */}
            <div className="p-6 rounded-2xl bg-[#070b16] border border-white/[0.08] space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Strict Non-Disclosure &amp; Confidentiality Guarantee</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Seluruh data teknis, denah fasilitas, dan spesifikasi arsitektur yang Anda bagikan dilindungi dengan standar kerahasiaan ketat (NDA) sebelum kajian teknis dimulai.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
