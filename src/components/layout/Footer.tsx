"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SOLUTIONS, INDUSTRIES, COMPANY_PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#02050c] border-t border-white/10 relative overflow-hidden text-slate-400">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <span className="font-mono text-cyan-400 font-bold text-base">A</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-sans">
                ARKAPRANA
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1.5" />
              </span>
            </Link>

            <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-medium">
              {COMPANY_PROFILE.descriptor}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Membangun dan mengintegrasikan fondasi digital terpadu—dari infrastruktur fisik, jaringan data center, cloud, keamanan siber hingga artificial intelligence.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Tagline: <span className="text-slate-300 font-semibold">{COMPANY_PROFILE.tagline}</span>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span>{sol.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs">
              {INDUSTRIES.slice(0, 6).map((ind) => (
                <li key={ind.name}>
                  <Link href="/industries" className="hover:text-cyan-400 transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View all 12 Sectors →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Insights */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About ARKAPRANA
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                  Selected Capabilities
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan-400 transition-colors">
                  Technology Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Discuss Your Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_PROFILE.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_PROFILE.contact.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {COMPANY_PROFILE.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_PROFILE.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {COMPANY_PROFILE.legalName}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-cyan-500/80 font-mono">Enterprise Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
