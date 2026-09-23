"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: "Solutions", href: "/solutions", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-cyan-950/20 py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-transparent border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors">
              <span className="font-mono text-cyan-400 font-bold text-lg tracking-tighter">A</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white font-sans flex items-center">
                ARKAPRANA
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1.5 group-hover:scale-125 transition-transform" />
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.22em] text-slate-400 -mt-0.5 font-mono">
                Technology & Intelligent Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdown(true)}
                    onMouseLeave={() => setSolutionsDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-cyan-400 bg-cyan-500/10"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Solutions Dropdown Menu */}
                    {solutionsDropdown && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-[#060d1e]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl shadow-cyan-950/40">
                          <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-cyan-400/80 border-b border-white/5 mb-1">
                            Ecosystem Pillars
                          </div>
                          {SOLUTIONS.map((sol) => (
                            <Link
                              key={sol.id}
                              href={`/solutions/${sol.slug}`}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-xs text-slate-300 hover:text-white transition-colors group"
                            >
                              <div>
                                <div className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                                  {sol.name}
                                </div>
                                <div className="text-[10px] text-slate-400">{sol.category}</div>
                              </div>
                              <span className="text-[10px] font-mono text-cyan-500/60 group-hover:text-cyan-400">
                                {sol.badge.split(" ")[0]}
                              </span>
                            </Link>
                          ))}
                          <div className="pt-2 border-t border-white/5 mt-1">
                            <Link
                              href="/solutions"
                              className="block text-center text-xs text-cyan-400 hover:text-cyan-300 py-1.5 font-medium"
                            >
                              View All 7 Capabilities →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-2">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
