"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function MobileStickyCta() {
  const waNumber = "62816997963";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-3 bg-[#030712]/90 backdrop-blur-lg border-t border-white/[0.1] shadow-2xl safe-area-inset-bottom">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Quick Chat Trigger */}
        <a
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo ARKAPRANA, saya ingin mendiskusikan inisiatif proyek teknologi organisasi kami.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 shadow-md active:scale-95 transition-all"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Primary Discuss Project Sticky CTA (Section 45 verbatim) */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-white hover:bg-neutral-200 text-neutral-900 font-semibold text-xs tracking-wide shadow-md active:scale-95 transition-all"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
