"use client";

import React, { useState } from "react";
import { COMPANY_PROFILE } from "@/lib/data";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    solutionNeeded: "Network",
    projectDescription: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const solutionOptions = [
    "Network & Connectivity",
    "Infrastructure & Data Center",
    "Cloud & Virtualization",
    "Cybersecurity & Resilience",
    "Managed IT Services",
    "AI & Automation",
    "System Integration",
    "Turnkey / Other"
  ];

  const industryOptions = [
    "Manufacturing",
    "Shipping & Maritime",
    "Construction",
    "Government / BUMN",
    "Logistics & Supply Chain",
    "Property & Real Estate",
    "Hospitality",
    "Engineering",
    "Financial Services",
    "Education",
    "Healthcare",
    "Other Enterprise"
  ];

  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build What Comes Next.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tell us about your technology challenge, infrastructure requirements, or digital transformation initiative. Tim Principal Architect ARKAPRANA siap mendampingi Anda.
          </p>
        </div>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#081329] to-[#040817] border border-white/10 shadow-2xl relative">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Inquiry Received Successfully
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name}</strong>. Tim Principal Engineer ARKAPRANA akan mempelajari spesifikasi proyek organisasi Anda dan menghubungi Anda dalam 1x24 jam kerja.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        industry: "",
                        solutionNeeded: "Network",
                        projectDescription: ""
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hendra Wijaya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PT Nusantara Logistik"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hendra@company.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 XXXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Industry Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400 focus:outline-none text-slate-200 text-xs transition-colors"
                    >
                      <option value="">Select Industry</option>
                      {industryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Primary Solution Needed
                    </label>
                    <select
                      value={formData.solutionNeeded}
                      onChange={(e) => setFormData({ ...formData, solutionNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400 focus:outline-none text-slate-200 text-xs transition-colors"
                    >
                      {solutionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Project Description & Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current technology infrastructure, challenges, or goals..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? "Transmitting..." : "Start a Conversation"}</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info & Enterprise Commitments (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#060e22] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                COMMUNICATION CHANNELS
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Registered Headquarters</div>
                    <p className="text-slate-400 mt-0.5">{COMPANY_PROFILE.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Advisory Inquiries</div>
                    <a href={`mailto:${COMPANY_PROFILE.contact.email}`} className="text-cyan-400 hover:underline">
                      {COMPANY_PROFILE.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Corporate Telephony</div>
                    <p className="text-slate-400 mt-0.5">{COMPANY_PROFILE.contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>SLA Response Window: &lt; 24 Jam Kerja</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Non-Disclosure Agreement (NDA) Ready</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-2">
                Enterprise & Government Procurement
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kami siap berpartisipasi dalam proses RFI, RFP, dan tender pengadaan sistem terintegrasi BUMN serta lembaga negara dengan kepatuhan penuh terhadap tata kelola formal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
