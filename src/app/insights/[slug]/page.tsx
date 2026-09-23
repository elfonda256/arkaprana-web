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
    <main className="flex-1 pt-28 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <Link
          href="/insights"
          className="inline-flex items-center text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
          <span>Back to Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="space-y-4 pb-8 border-b border-[var(--border-subtle)]">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="text-[var(--accent-blue)] uppercase font-semibold">
              {post.category}
            </span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-[var(--text-muted)] flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-[var(--text-muted)] flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            {post.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-normal pt-2">
            {post.snippet}
          </p>
        </header>

        {/* Content Body */}
        <div className="py-10 prose max-w-none text-[var(--text-secondary)] leading-relaxed space-y-6 text-sm sm:text-base">
          <p>{post.content}</p>

          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] my-8">
            <h4 className="text-sm font-bold text-[var(--accent-blue)] font-mono uppercase tracking-wider mb-2">
              Key Engineering Takeaway
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Arsitektur teknologi yang kokoh tidak dimulai dari pemilihan software di lapisan atas, melainkan dari integritas layer fisik, kedaulatan data, redundansi transmisi, serta model tata kelola keamanan yang diverifikasi berkelanjutan.
            </p>
          </div>
        </div>

        {/* Post Footer CTA */}
        <footer className="pt-8 border-t border-[var(--border-subtle)] mt-12 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[var(--text-primary)] font-display">
              Planning a similar technology initiative?
            </h4>
            <p className="text-xs text-[var(--text-muted)]">
              Talk to an ARKAPRANA engineer. Diskusikan kelayakan teknis dan arsitektur untuk organisasi Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-[var(--accent-blue)] text-white hover:opacity-90 transition-all shadow-md active:scale-[0.98]"
            >
              <span>DISCUSS YOUR REQUIREMENT →</span>
            </Link>

            <a
              href="https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20tertarik%20berdiskusi%20dengan%20engineer%20mengenai%20inisiatif%20teknologi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all"
            >
              <span>Talk to an Engineer</span>
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
