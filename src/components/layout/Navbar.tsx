"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { SOLUTIONS } from "@/lib/data";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdown(false);
  }, [pathname]);

  // Menu items strictly matching Section 07 specifications:
  // Solutions | Industries | Capabilities | Insights | About
  const navLinks = [
    { label: "Solutions", href: "/solutions", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "Capabilities", href: "/#architecture" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo - strictly [SYMBOL] ARKAPRANA (no legal name in header) */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="ARKAPRANA Homepage"
          >
            <BrandLogo variant="dark" size="md" showWordmark={true} showDescriptor={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href.startsWith("/solutions") && pathname.startsWith("/solutions"));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdown(true)}
                    onMouseLeave={() => setSolutionsDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-md transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${
                          solutionsDropdown ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </Link>

                    {/* Solutions Dropdown Mega Menu */}
                    {solutionsDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-[#050914]/95 backdrop-blur-2xl border border-white/[0.12] rounded-xl p-3 shadow-2xl">
                          <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/[0.06] mb-2">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                              Core Technology Pillars
                            </span>
                            <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> 7 Capabilities
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5">
                            {SOLUTIONS.map((sol, idx) => (
                              <Link
                                key={sol.id}
                                href={`/solutions/${sol.slug}`}
                                className="flex flex-col p-2.5 rounded-lg hover:bg-white/[0.05] transition-colors group"
                              >
                                <div className="flex items-center justify-between mb-0.5">
                                  <span className="text-xs font-medium text-neutral-200 group-hover:text-white transition-colors">
                                    {sol.name}
                                  </span>
                                  <span className="text-[9px] font-mono text-neutral-500 group-hover:text-cyan-400">
                                    0{idx + 1}
                                  </span>
                                </div>
                                <span className="text-[10.5px] text-neutral-400 line-clamp-1 leading-snug">
                                  {sol.tagline}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="pt-2 mt-2 border-t border-white/[0.06] flex items-center justify-between px-3">
                            <span className="text-[11px] text-neutral-400">
                              Looking for custom architecture?
                            </span>
                            <Link
                              href="/solutions"
                              className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                            >
                              Explore all solutions <ArrowRight className="w-3 h-3" />
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
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button (Clean Pill: Discuss Project) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3 h-3 text-black" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030712]/98 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-white/[0.08] space-y-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="px-3 text-[11px] text-neutral-500 flex justify-between">
              <span>Jakarta, Indonesia</span>
              <span>elfano2156@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
