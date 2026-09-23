import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHTS } from "@/lib/data";
import { ChevronLeft, Calendar, Clock, ArrowRight, Share2, Bookmark } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((post) => ({
    slug: post.id
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.id === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ARKAPRANA Insights`,
    description: post.snippet
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712]">
      {/* Navigation Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/insights"
          className="inline-flex items-center text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
          <span>Back to Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="space-y-4 pb-8 border-b border-white/10">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="text-cyan-400 uppercase font-semibold">
              {post.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {post.snippet}
          </p>
        </header>

        {/* Body Content */}
        <div className="py-12 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed border-b border-white/10">
          <p>{post.content}</p>

          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 my-8 space-y-2">
            <h4 className="text-sm font-bold text-cyan-400 font-mono uppercase">
              Key Engineering Takeaway
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Arsitektur teknologi yang kokoh dimulai dengan perencanaan modular dan prinsip zero-trust. Menghubungkan titik terlemah infrastruktur fisik sebelum melangkah ke otomasi AI adalah strategi paling efektif untuk menjamin ROI dan keberlanjutan operasional enterprise.
            </p>
          </div>

          <p>
            Di ARKAPRANA, tim Principal Engineer kami selalu memulai setiap proyek dengan audit menyeluruh terhadap arsitektur jaringan, pola aliran data, dan kepatuhan hukum yang berlaku di Indonesia.
          </p>
        </div>

        {/* Bottom Actions */}
        <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Published by <strong>ARKAPRANA Technology Advisory Team</strong>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow"
          >
            <span>Consult With Our Engineers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
