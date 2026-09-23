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
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENGINEERING PAPERS & EDITORIAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perspectives on Modern Infrastructure & AI.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
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
              className="p-8 rounded-2xl bg-gradient-to-b from-[#081329] to-[#040817] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span className="text-cyan-400 uppercase font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3 text-slate-500">
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

                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  <Link href={`/insights/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <Link
                  href={`/insights/${post.id}`}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group/link"
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
