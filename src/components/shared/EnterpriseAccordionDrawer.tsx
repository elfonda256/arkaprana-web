"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Shield,
  Server,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  ExternalLink,
  Zap,
  Activity
} from "lucide-react";

export interface AccordionItemData {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  category?: string;
  summary: string;
  vendors?: string[];
  specs?: { label: string; value: string }[];
  compliance?: string[];
  benchmarks?: { label: string; value: string }[];
  sla?: string;
}

export type DrawerItem = AccordionItemData;

interface EnterpriseAccordionDrawerProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  onSelect?: (id: string) => void;
}

export default function EnterpriseAccordionDrawer({
  items,
  defaultOpenId,
  onSelect
}: EnterpriseAccordionDrawerProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggleItem = (id: string) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next && onSelect) {
      onSelect(next);
    }
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white/[0.05] border-[#38BDF8]/40 shadow-lg"
                : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10"
            }`}
          >
            {/* Drawer Header Button */}
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <span
                  className={`font-mono text-xs px-2.5 py-1 rounded-md border font-semibold tracking-wider uppercase transition-colors shrink-0 ${
                    isOpen
                      ? "bg-[#38BDF8]/15 border-[#38BDF8]/30 text-[#38BDF8]"
                      : "bg-white/[0.04] border-white/10 text-white/60"
                  }`}
                >
                  {item.badge}
                </span>

                <div className="truncate">
                  <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight flex items-center gap-2">
                    <span>{item.title}</span>
                    {isOpen && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse shrink-0" />
                    )}
                  </h4>
                  <p className="text-xs text-white/50 font-mono line-clamp-1 mt-0.5">
                    {item.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-2">
                <span className="hidden sm:inline-block text-[11px] font-mono text-[#38BDF8]/80">
                  {item.sla}
                </span>
                <div
                  className={`size-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen
                      ? "bg-white/10 border-white/20 text-white rotate-180"
                      : "bg-white/[0.03] border-white/10 text-white/50"
                  }`}
                >
                  <ChevronDown className="size-4" />
                </div>
              </div>
            </button>

            {/* Expandable Accordion Body (CSS Grid Smooth Height) */}
            <div className={`accordion-wrapper ${isOpen ? "is-open" : ""}`}>
              <div className="accordion-inner">
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-white/[0.06] space-y-5">
                  
                  {/* Summary Text */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    {item.summary}
                  </p>

                  {/* 3-Column Specifications Grid */}
                  {item.specs && item.specs.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {item.specs.map((sp) => (
                        <div
                          key={sp.label}
                          className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center sm:text-left"
                        >
                          <span className="text-[10px] font-mono uppercase text-white/40 block truncate">
                            {sp.label}
                          </span>
                          <span className="text-xs font-mono font-semibold text-white mt-0.5 block truncate">
                            {sp.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Multi-Vendor Compatibility & Compliance Tags */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                    {item.vendors && item.vendors.length > 0 && (
                      <div>
                        <span className="text-[10px] font-mono uppercase text-white/40 block mb-1.5">
                          Multi-Vendor Ecosystem
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.vendors.map((v) => (
                            <span
                              key={v}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-white/80"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.compliance && item.compliance.length > 0 && (
                      <div>
                        <span className="text-[10px] font-mono uppercase text-white/40 block mb-1.5">
                          Security & Compliance
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.compliance.map((c) => (
                            <span
                              key={c}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-1"
                            >
                              <CheckCircle2 className="size-2.5" />
                              <span>{c}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
