import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHTS } from "@/lib/data";
import { ChevronLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  INSIGHTS.forEach((post) => {
    params.push({ slug: post.slug });
    if (post.id && post.id !== post.slug) {
      params.push({ slug: post.id });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug || p.id === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ARKAPRANA Insights`,
    description: post.snippet
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = INSIGHTS.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 pt-28 pb-20 bg-[#030712] text-white min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <Link
          href="/insights"
          className="inline-flex items-center text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
          <span>Back to Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="space-y-4 pb-8 border-b border-white/10">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="text-cyan-400 uppercase font-semibold">
              {post.category}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            {post.title}
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed font-normal pt-2">
            {post.snippet}
          </p>
        </header>

        {/* Content Body */}
        <div className="py-10 prose prose-invert prose-cyan max-w-none text-neutral-300 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>{post.content}</p>

          <div className="p-6 rounded-2xl bg-[#070b16] border border-white/[0.1] my-8">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2">
              Key Engineering Takeaway
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Arsitektur teknologi yang kokoh tidak dimulai dari pemilihan software di lapisan atas, melainkan dari integritas layer fisik, kedaulatan data, redundansi transmisi, serta model tata kelola keamanan yang diverifikasi berkelanjutan.
            </p>
          </div>
        </div>

        {/* Post Footer CTA */}
        <footer className="pt-8 border-t border-white/10 mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">
            Ingin mendiskusikan arsitektur ini untuk organisasi Anda?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors shrink-0"
          >
            <span>Talk to an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
