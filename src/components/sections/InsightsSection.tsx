"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/lib/data";

export default function InsightsSection() {
  const featuredArticle = INSIGHTS[0];
  const listArticles = INSIGHTS.slice(1);

  return (
    <section id="insights" className="py-28 md:py-36 bg-white text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>ARKAPRANA INSIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Engineering Perspectives.
            <span className="block text-neutral-500 font-normal mt-1">
              Architecture for the decade ahead.
            </span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Catatan teknis, analisis arsitektur, dan prinsip rekayasa sistem yang disusun langsung oleh para insinyur dan praktisi infrastruktur ARKAPRANA.
          </p>
        </div>

        {/* Editorial Technology Magazine Layout (Featured Article + Clean Article List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Large Featured Article (Span 7) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl border border-neutral-200/90 p-8 sm:p-12 flex flex-col justify-between group hover:border-neutral-300 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-700">
                  FEATURED RESEARCH ESSAY
                </span>
                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-neutral-400" /> {featuredArticle.readTime}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-6 font-sans group-hover:text-cyan-800 transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 font-normal">
                {featuredArticle.snippet}
              </p>

              {/* Technical Abstract Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded bg-white border border-neutral-200 text-[10.5px] font-mono text-neutral-700">
                  Data Sovereignty
                </span>
                <span className="px-2.5 py-1 rounded bg-white border border-neutral-200 text-[10.5px] font-mono text-neutral-700">
                  On-Premise LLM
                </span>
                <span className="px-2.5 py-1 rounded bg-white border border-neutral-200 text-[10.5px] font-mono text-neutral-700">
                  Enterprise RAG
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200/80 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-mono">
                By Principal Engineering Group
              </span>
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-cyan-700 transition-colors"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Clean Article List (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {listArticles.map((article) => (
              <Link
                key={article.title}
                href={`/insights/${article.slug}`}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-neutral-200/70 hover:border-neutral-300 hover:bg-neutral-100/50 transition-all duration-200 block group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                  <span className="text-neutral-500 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-neutral-400">
                    {article.readTime}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-cyan-800 transition-colors mb-1.5 leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {article.snippet}
                </p>

                <div className="mt-2.5 flex items-center text-[11px] font-semibold text-neutral-800 group-hover:text-cyan-700 transition-colors">
                  <span>Explore Technical Analysis</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
