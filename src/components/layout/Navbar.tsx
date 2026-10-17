"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Network,
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow
} from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

const MEGA_SOLUTIONS = [
  {
    name: "Network",
    href: "/solutions/network",
    description: "Enterprise connectivity, fiber infrastructure, Wi-Fi & SD-WAN mesh.",
    icon: Network,
    badge: "01"
  },
  {
    name: "Infrastructure",
    href: "/solutions/infrastructure",
    description: "Tier-3+ modular data center, high-density compute & flash storage.",
    icon: Server,
    badge: "02"
  },
  {
    name: "Cloud",
    href: "/solutions/cloud",
    description: "Sovereign on-premise private cloud & resilient hybrid architectures.",
    icon: Cloud,
    badge: "03"
  },
  {
    name: "Security",
    href: "/solutions/security",
    description: "Defense-in-depth zero-trust architecture, HSM vaults & 24/7 SOC.",
    icon: ShieldCheck,
    badge: "04"
  },
  {
    name: "Managed IT",
    href: "/solutions/managed-it",
    description: "24/7 dedicated enterprise NOC monitoring, SLA uptime & preventive care.",
    icon: Cpu,
    badge: "05"
  },
  {
    name: "Artificial Intelligence",
    href: "/solutions/ai",
    description: "Private on-premise LLMs, enterprise RAG & cognitive workflow agents.",
    icon: BrainCircuit,
    badge: "06"
  },
  {
    name: "System Integration",
    href: "/solutions/integration",
    description: "Turnkey hardware procurement, multi-vendor harmonisation & certified commissioning.",
    icon: Workflow,
    badge: "07"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMobileMenuOpen(false);
      setSolutionsDropdown(false);
    });
  }, [pathname]);

  const navLinks = [
    { label: t("nav_solutions", "Solutions"), href: "/solutions", hasDropdown: true },
    { label: t("nav_industries", "Industries"), href: "/industries" },
    { label: t("nav_capabilities", "Capabilities"), href: "/capabilities" },
    { label: t("nav_insights", "Insights"), href: "/insights" },
    { label: t("nav_about", "About"), href: "/about" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4 pointer-events-none">
      <div className="relative mx-auto max-w-[1340px] pointer-events-auto">
        {/* Floating Glass Island Pill Frame */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-2xl md:rounded-full transition-all duration-300 ${
            scrolled
              ? "nav-glass-island shadow-2xl"
              : "bg-[rgba(10,12,18,0.72)] backdrop-blur-xl border border-white/[0.08] shadow-lg"
          }`}
        />

        <nav className="relative flex items-center justify-between px-4 sm:px-6 h-[62px] md:h-[66px]">
          {/* Logo strictly [SYMBOL] ARKAPRANA */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90 shrink-0"
            aria-label="ARKAPRANA Homepage"
          >
            <BrandLogo
              variant="auto"
              size="sm"
              showWordmark={true}
              showDescriptor={false}
              symbolOnlyOnMobile={false}
            />
          </Link>

          {/* Centered Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
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
                      className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "text-white bg-white/10 font-semibold"
                          : "text-white/65 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3 h-3 text-white/50 transition-transform duration-200 ${
                          solutionsDropdown ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </Link>

                    {/* Solutions Mega Menu */}
                    {solutionsDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-3 z-50 dropdown-fluid">
                        <div className="bg-[#0B0D13]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                          <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 mb-3">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/45">
                              {t("nav_pillars_title", "Technology Pillars · Architecture")}
                            </span>
                            <span className="text-[10px] font-mono text-[#38BDF8] flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> {t("nav_7_solutions", "7 Core Solutions")}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {MEGA_SOLUTIONS.map((sol) => {
                              const Icon = sol.icon;
                              return (
                                <Link
                                  key={sol.name}
                                  href={sol.href}
                                  className="flex items-start p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-colors shrink-0 mr-3 mt-0.5">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                      <span className="text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                                        {sol.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-white/40 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <p className="text-[11px] text-white/55 line-clamp-2 leading-relaxed">
                                      {sol.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between px-3 text-[11px]">
                            <span className="text-white/50">
                              {t("nav_custom_env", "Building a custom multi-system environment?")}
                            </span>
                            <Link
                              href="/solutions"
                              className="text-[#38BDF8] hover:underline font-medium inline-flex items-center gap-1"
                            >
                              {t("nav_explore_solutions", "Explore all solutions")} <ArrowRight className="w-3 h-3" />
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
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors ${
                    isActive
                      ? "text-white bg-white/10 font-semibold"
                      : "text-white/65 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Header Controls: Language Toggle & Nalar-Style 'Book a Demo' CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-xs font-semibold whitespace-nowrap bg-white text-[#08090D] hover:bg-slate-100 transition-all duration-300 px-5 h-[34px] shadow-[0_0_18px_rgba(255,255,255,0.15)] hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
            >
              <span>{t("nav_book_demo", "Book a Demo")}</span>
            </Link>
          </div>

          {/* Mobile Right Controls: LanguageToggle + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle showIcon={false} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0D13]/98 backdrop-blur-2xl border-t border-white/10 rounded-b-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 px-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/50">Bahasa / Language</span>
              <LanguageToggle />
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-white/10 space-y-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white text-[#08090D] hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>{t("nav_book_demo", "Book a Demo")}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#08090D]" />
              </Link>
              <div className="px-3 text-[11px] text-white/45 flex justify-between">
                <span>Indonesia</span>
                <span>elfano2156@gmail.com</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
