"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SOLUTIONS, INDUSTRIES, COMPANY_PROFILE } from "@/lib/data";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#02050C] border-t border-white/[0.08] relative overflow-hidden text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group transition-opacity hover:opacity-90">
              <BrandLogo variant="dark" size="md" showWordmark={true} showDescriptor={false} />
            </Link>

            <p className="text-[11px] uppercase font-mono tracking-[0.2em] text-cyan-400">
              Technology &amp; Intelligent Solutions
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Membangun dan mengintegrasikan fondasi teknologi terpadu—dari infrastruktur fisik, jaringan berkecepatan tinggi, cloud sovereign, keamanan siber hingga artificial intelligence otonom.
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-300">
              <span className="text-neutral-500">Core Thesis: </span>BUILD. CONNECT. INTELLIGENCE.
            </div>

            <div className="pt-1 text-[11px] text-neutral-500 font-mono">
              PT ARKAPRANA TEKNOLOGI NUSANTARA
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
              Industries
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

          {/* Column 3: Capabilities & Insights */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-white font-medium mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#architecture" className="hover:text-white transition-colors">
                  Capabilities Stack
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  ARKAPRANA Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About ARKAPRANA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Principal Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Minimal */}
          <div>
            <h4 className="text-[11px] uppercase font-mono tracking-widest text-white font-medium mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs">
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
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 PT ARKAPRANA TEKNOLOGI NUSANTARA. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <span>BUILD. CONNECT. INTELLIGENCE.</span>
            <span className="text-neutral-400">INDONESIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
