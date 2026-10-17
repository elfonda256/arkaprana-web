import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHTS } from "@/lib/data";
import { ChevronLeft, Calendar, Library, ExternalLink, ArrowRight, MessageSquare } from "lucide-react";
import PrintWhitepaperButton from "@/components/shared/PrintWhitepaperButton";
import NalarWaveOrbits from "@/components/decorative/NalarWaveOrbits";
import ScrollReveal from "@/components/shared/ScrollReveal";

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
    <main className="flex-1 pt-32 pb-24 bg-[#08090D] text-white min-h-screen relative overflow-hidden">
      {/* Dynamic Responsive Waveforms, Orbits & Drifting Mist */}
      <div className="print:hidden">
        <NalarWaveOrbits />
      </div>

      {/* Subtle Coordinate Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none -z-10 print:hidden"
        style={{
          backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Navigation Breadcrumb & Executive Print Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/insights"
          className="inline-flex items-center text-xs font-mono text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <ChevronLeft className="size-3.5 mr-1" />
          <span>Kembali ke Dokumen Insights</span>
        </Link>

        <PrintWhitepaperButton />
      </div>

      {/* Article Header & Printable Whitepaper Document */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Printable Official Letterhead */}
        <div className="hidden print:block mb-8 pb-4 border-b-2 border-black text-black">
          <div className="flex justify-between items-start text-xs font-mono">
            <div>
              <div className="font-extrabold text-base tracking-wider">PT ARKAPRANA TEKNOLOGI NUSANTARA</div>
              <div className="text-[11px] text-gray-700 font-semibold">DIVISI REKAYASA ARSITEKTUR TEKNOLOGI &amp; REGULASI KORPORAT</div>
              <div className="text-[10px] text-gray-500">Jakarta Selatan, DKI Jakarta 12530 • www.arkaprana.co.id</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-xs">ENTERPRISE TECHNICAL ADVISORY</div>
              <div className="text-[10px] text-gray-600">KLASIFIKASI: DOKUMEN RESMI</div>
              <div className="text-[10px] text-gray-600">REF: {post.category.toUpperCase()} // {post.date}</div>
            </div>
          </div>
        </div>

        <header className="space-y-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono text-white/50">
            <span className="text-[#38BDF8] px-2.5 py-0.5 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/20 uppercase font-semibold text-[10.5px]">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-light text-white tracking-tight leading-[1.15] font-display">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light pt-2">
            {post.snippet}
          </p>
        </header>

        {/* Content Body */}
        <div className="py-12 text-white/75 leading-relaxed space-y-12 text-sm sm:text-base font-light">
          {post.sections && post.sections.length > 0 ? (
            <div className="space-y-12">
              {/* Executive Outline / Quick Navigation */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0F18]/90 border border-white/10 space-y-3 backdrop-blur-xl">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#38BDF8] font-semibold block">
                  Cetak Biru Dokumen // Daftar Pembahasan
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/80">
                  {post.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="text-[#38BDF8] font-bold">0{sIdx + 1}.</span>
                      <span className="truncate">{sec.title.replace(/^\d+\.\s*/, "")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-Section Technical Narrative */}
              {post.sections.map((section, idx) => (
                <ScrollReveal key={idx} delayMs={idx * 40}>
                  <section className="space-y-5 pt-8 border-t border-white/10 first:border-0 first:pt-0">
                    <h2 className="text-xl sm:text-2xl font-light text-white font-display tracking-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {section.takeaway && (
                      <div className="p-5 rounded-2xl bg-black/40 border-l-4 border-[#38BDF8] border-r border-t border-b border-white/10 text-xs sm:text-sm text-white/90">
                        <span className="font-mono text-[10px] uppercase text-[#38BDF8] font-semibold tracking-wider block mb-1">
                          Prinsip Rekayasa // Key Takeaway
                        </span>
                        <p className="leading-relaxed font-light">{section.takeaway}</p>
                      </div>
                    )}
                  </section>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p>{post.content}</p>
          )}

          {/* Key Engineering Takeaway */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0F18]/90 border border-white/10 shadow-xl my-10 space-y-2 backdrop-blur-xl">
            <h4 className="text-xs font-bold text-[#38BDF8] font-mono uppercase tracking-widest">
              Sintesis Akhir Arsitektur
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Arsitektur teknologi yang berdaulat dan tangguh tidak dimulai dari pemilihan software di lapisan teratas, melainkan dari integritas layer fisik, kedaulatan data di dalam yurisdiksi nasional, redundansi transmisi non-blocking, serta model tata kelola keamanan zero-trust yang diverifikasi secara berkelanjutan.
            </p>
          </div>

          {/* Official Sources & Citations Section */}
          {post.sources && post.sources.length > 0 && (
            <div className="pt-10 mt-12 border-t border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#38BDF8]">
                  <Library className="size-4" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                    Daftar Sumber Acuan &amp; Rujukan Resmi
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-white/40">
                  {post.sources.length} Dokumen Regulasi &amp; Standar Industri Terverifikasi
                </span>
              </div>

              <div className="space-y-3.5">
                {post.sources.map((src, srcIdx) => (
                  <div
                    key={srcIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0D0F18]/90 border border-white/10 hover:border-[#38BDF8]/40 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4 group"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8]">
                          {src.referenceNumber}
                        </span>
                        <span className="text-[10px] font-mono text-white/50">
                          {src.type}
                        </span>
                        <span className="text-[10px] font-mono text-white/40">
                          • {src.year}
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm font-medium text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                        {src.title}
                      </div>

                      <div className="text-[11px] font-mono text-white/45">
                        Penerbit / Otoritas: <span className="text-white/70">{src.institution}</span>
                      </div>
                    </div>

                    {src.url && (
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[#38BDF8] hover:underline shrink-0 self-start sm:self-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all print:hidden"
                      >
                        <span>Lihat Dokumen</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Post Footer CTA (Web Only) */}
        <ScrollReveal delayMs={60}>
          <footer className="pt-8 border-t border-white/10 mt-12 p-8 sm:p-10 rounded-3xl bg-[#0D0F18]/90 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl backdrop-blur-xl print:hidden">
            <div className="space-y-1 max-w-md">
              <h4 className="text-base sm:text-lg font-light text-white font-display">
                Merencanakan Inisiatif Teknologi Serupa?
              </h4>
              <p className="text-xs text-white/50 font-light">
                Konsultasikan kelayakan teknis, arsitektur data, dan kepatuhan regulasi bersama Principal Engineer ARKAPRANA.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-white/95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
              >
                <span>Mulai Diskusi Teknis</span>
                <ArrowRight className="size-3.5" />
              </Link>

              <a
                href="https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20tertarik%20berdiskusi%20dengan%20engineer%20mengenai%20inisiatif%20teknologi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-mono text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
              >
                <MessageSquare className="size-3.5 text-emerald-400" />
                <span>Direct WhatsApp Desk</span>
              </a>
            </div>
          </footer>
        </ScrollReveal>

        {/* Printable Official Document Footer */}
        <div className="hidden print:block mt-12 pt-4 border-t border-black text-[10px] text-gray-700 font-mono">
          <div className="flex justify-between items-center">
            <span>© PT ARKAPRANA TEKNOLOGI NUSANTARA • www.arkaprana.co.id</span>
            <span>Dokumen Disetujui untuk Evaluasi Direksi &amp; Komite IT Korporat</span>
          </div>
        </div>
      </article>
    </main>
  );
}
