"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/lib/data";

export default function InsightsSection() {
  const featuredArticle = INSIGHTS[0];
  const listArticles = INSIGHTS.slice(1);

  return (
    <section id="insights" className="py-28 md:py-36 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>ARKAPRANA INSIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12] font-display">
            Engineering Perspectives.
            <span className="block text-[var(--text-secondary)] font-normal mt-1">
              Architecture for the decade ahead.
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Catatan teknis, analisis arsitektur, dan prinsip rekayasa sistem yang disusun langsung oleh para insinyur dan praktisi infrastruktur ARKAPRANA.
          </p>
        </div>

        {/* Editorial Technology Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Large Featured Article (Span 7) */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] p-8 sm:p-12 flex flex-col justify-between group hover:border-[var(--accent)]/40 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                  FEATURED RESEARCH ESSAY
                </span>
                <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[var(--text-muted)]" /> {featuredArticle.readTime}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight mb-6 font-sans group-hover:text-[var(--accent)] transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 font-normal">
                {featuredArticle.snippet}
              </p>

              {/* Technical Abstract Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[10.5px] font-mono text-[var(--text-secondary)]">
                  Data Sovereignty
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[10.5px] font-mono text-[var(--text-secondary)]">
                  On-Premise LLM
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[10.5px] font-mono text-[var(--text-secondary)]">
                  Enterprise RAG
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)] font-mono">
                By Principal Engineering Group
              </span>
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group btn-secondary-interaction"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] cta-arrow" />
              </Link>
            </div>
          </div>

          {/* Clean Article List (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {listArticles.map((article) => (
              <Link
                key={article.title}
                href={`/insights/${article.slug}`}
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                  <span className="text-[var(--text-muted)] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    {article.readTime}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1.5 leading-snug">
                  {article.title}
                </h4>

                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                  {article.snippet}
                </p>

                <div className="mt-2.5 flex items-center text-[11px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  <span>Explore Technical Analysis</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-[var(--accent)]" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
