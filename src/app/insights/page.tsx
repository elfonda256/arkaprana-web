import React from "react";
import Link from "next/link";
import { INSIGHTS } from "@/lib/data";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";

export const metadata = {
  title: "Technology Insights | ARKAPRANA",
  description:
    "Analisis arsitektural dan pemikiran teknik mengenai Private AI, Keamanan Jaringan, Data Center, dan Transformasi Digital Korporat."
};

export default function InsightsPage() {
  return (
    <main className="flex-1 pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--border-strong)] text-[var(--accent-blue)] text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            <span>ENGINEERING PAPERS &amp; EDITORIAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            Perspectives on Modern Infrastructure &amp; AI.
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Catatan riset dan pemikiran teknik dari para insinyur ARKAPRANA mengenai kedaulatan data, keamanan siber perimeter, dan integrasi kecerdasan buatan enterprise.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((post) => (
            <article
              key={post.id}
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-4">
                  <span className="text-[var(--accent-blue)] uppercase font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-blue)] transition-colors leading-snug font-display">
                  <Link href={`/insights/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
                <Link
                  href={`/insights/${post.id}`}
                  className="inline-flex items-center text-xs font-medium text-[var(--accent-blue)] hover:opacity-80 transition-colors group/link"
                >
                  <span>Read Technical Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
