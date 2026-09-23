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

const MEGA_SOLUTIONS = [
  {
    name: "NETWORK",
    href: "/solutions/network",
    description: "Enterprise connectivity, fiber infrastructure, Wi-Fi & SD-WAN mesh.",
    icon: Network,
    badge: "01"
  },
  {
    name: "INFRASTRUCTURE",
    href: "/solutions/infrastructure",
    description: "Tier-3+ modular data center, high-density compute & flash storage.",
    icon: Server,
    badge: "02"
  },
  {
    name: "CLOUD",
    href: "/solutions/cloud",
    description: "Sovereign on-premise private cloud & resilient hybrid architectures.",
    icon: Cloud,
    badge: "03"
  },
  {
    name: "SECURITY",
    href: "/solutions/security",
    description: "Defense-in-depth zero-trust architecture, HSM vaults & 24/7 SOC.",
    icon: ShieldCheck,
    badge: "04"
  },
  {
    name: "MANAGED IT",
    href: "/solutions/managed-it",
    description: "24/7 dedicated enterprise NOC monitoring, SLA uptime & preventive care.",
    icon: Cpu,
    badge: "05"
  },
  {
    name: "AI",
    href: "/solutions/ai",
    description: "Private on-premise LLMs, enterprise RAG & cognitive workflow agents.",
    icon: BrainCircuit,
    badge: "06"
  },
  {
    name: "INTEGRATION",
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

  const navLinks = [
    { label: "Solutions", href: "/solutions", hasDropdown: true },
    { label: "Industries", href: "/industries" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo strictly [SYMBOL] ARKAPRANA (no legal name in header) */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="ARKAPRANA Homepage"
          >
            <BrandLogo
              variant="dark"
              size="md"
              showWordmark={true}
              showDescriptor={false}
              symbolOnlyOnMobile={false}
            />
          </Link>

          {/* Desktop Navigation Links */}
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

                    {/* V4 Solutions Mega Menu */}
                    {solutionsDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-[#050914]/98 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-4 shadow-2xl">
                          
                          <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/[0.06] mb-3">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                              Technology Pillars // Architecture
                            </span>
                            <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> 7 Core Solutions
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {MEGA_SOLUTIONS.map((sol) => {
                              const Icon = sol.icon;
                              return (
                                <Link
                                  key={sol.name}
                                  href={sol.href}
                                  className="flex items-start p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors shrink-0 mr-3 mt-0.5">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                      <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {sol.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                                      {sol.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between px-3 text-[11px]">
                            <span className="text-neutral-400">
                              Building a custom multi-system environment?
                            </span>
                            <Link
                              href="/solutions"
                              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
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

          {/* Header Action Button: Discuss Project → */}
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
              <span>Indonesia</span>
              <span>elfano2156@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
