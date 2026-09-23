"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";
import { SOLUTIONS, INDUSTRIES, COMPANY_PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#02050c] border-t border-white/[0.08] relative overflow-hidden text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden border border-white/[0.12] bg-[#030712] shadow-sm group-hover:border-cyan-400/50 transition-colors shrink-0">
                <Image
                  src="/images/logo-icon.png"
                  alt="ARKAPRANA Emblem"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base font-semibold tracking-wider text-white font-sans">
                ARKAPRANA
                <span className="inline-block w-1 h-1 rounded-full bg-cyan-400 ml-1.5" />
              </span>
            </Link>

            <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-cyan-400">
              {COMPANY_PROFILE.descriptor}
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Membangun dan mengintegrasikan fondasi digital terpadu—dari infrastruktur fisik, jaringan fiber optic, cloud sovereign, keamanan siber hingga artificial intelligence otonom.
            </p>

            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Core Thesis: <span className="text-neutral-300">{COMPANY_PROFILE.tagline}</span>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-white font-medium mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span>{sol.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-white font-medium mb-4">
              Critical Sectors
            </h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.slice(0, 5).map((ind) => (
                <li key={ind.name}>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1">
                  All 12 Sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Insights */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-white font-medium mb-4">
              Organization
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About ARKAPRANA
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Project Track Record
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Principal Engineers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-white font-medium mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_PROFILE.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_PROFILE.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={COMPANY_PROFILE.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_PROFILE.contact.phone} (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 {COMPANY_PROFILE.legalName}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span>ISO 27001 ALIGNED</span>
            <span>ZERO-TRUST BACKBONE</span>
            <span className="text-neutral-400">JAKARTA, INDONESIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
