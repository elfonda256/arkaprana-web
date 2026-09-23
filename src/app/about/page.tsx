import React from "react";
import Link from "next/link";
import { COMPANY_PROFILE, PROJECT_JOURNEY_STEPS, TECHNOLOGY_PARTNER_CATEGORIES } from "@/lib/data";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Target,
  Compass,
  Sparkles,
  Server,
  Network,
  Cloud,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  Users,
  Building,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import CompanyProfileModal from "@/components/shared/CompanyProfileModal";

export const metadata = {
  title: "About Us | ARKAPRANA Technology & Intelligent Solutions",
  description:
    "Mengenal PT ARKAPRANA TEKNOLOGI NUSANTARA — Visi, misi, dan positioning sebagai perusahaan teknologi yang mengintegrasikan infrastruktur hingga kecerdasan buatan.",
};

const PILLARS = [
  { name: "NETWORK", desc: "Enterprise connectivity, fiber optic backbone, Wi-Fi 7 & SD-WAN mesh.", icon: Network },
  { name: "INFRASTRUCTURE", desc: "Tier-3+ modular data center, high-density compute & NVMe flash storage.", icon: Server },
  { name: "CLOUD", desc: "Sovereign on-premise private cloud & resilient Kubernetes clusters.", icon: Cloud },
  { name: "CYBERSECURITY", desc: "Defense-in-depth Zero-Trust architecture, HSM vaults & 24/7 SOC.", icon: ShieldCheck },
  { name: "MANAGED IT", desc: "24/7 dedicated enterprise NOC monitoring, SLA uptime & preventive care.", icon: Cpu },
  { name: "AI & AUTOMATION", desc: "Private on-premise LLMs, enterprise RAG & cognitive workflow agents.", icon: BrainCircuit },
  { name: "SYSTEM INTEGRATION", desc: "Turnkey hardware procurement, multi-vendor harmonisation & certified commissioning.", icon: Workflow }
];

const BELIEFS = [
  {
    title: "Engineering First",
    desc: "Kami percaya bahwa arsitektur teknologi harus dirancang dengan disiplin rekayasa mendalam, bukan sekadar memindahkan kotak perangkat keras atau penjualan lisensi komersial."
  },
  {
    title: "Zero Compromise on Data Sovereignty",
    desc: "Data korporat dan kedaulatan informasi organisasi adalah aset paling berharga. Sistem kami dirancang mematuhi regulasi lokal (UU PDP) dengan isolasi penuh di wilayah Indonesia."
  },
  {
    title: "Integrated Ecosystem Over Fragmentation",
    desc: "Teknologi menjadi rumit saat terpisah. Kami menghubungkan setiap simpul dari kabel serat optik bawah tanah hingga model bahasa kecerdasan buatan dalam satu orkestrasi."
  },
  {
    title: "Long-Term Partnership Model",
    desc: "Kami tidak hanya membangun dan pergi. Kami mendampingi operasional, memantau telemetri 24/7, dan mengevolusikan infrastruktur seiring pertumbuhan organisasi Anda."
  }
];

export default function AboutPage() {
  return (
    <main className="flex-1 pt-28 pb-24 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none" />

      {/* 01. HERO */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[var(--border-subtle)] z-10">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--border-strong)] text-[var(--accent-blue)] text-xs font-mono">
            <span>COMPANY PROFILE // PT ARKAPRANA TEKNOLOGI NUSANTARA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            Technology built for what comes next.
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal pt-2">
            {COMPANY_PROFILE.positioning}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <CompanyProfileModal
              triggerClassName="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[var(--accent-blue)] hover:opacity-90 transition-all shadow-md active:scale-[0.98] cursor-pointer"
              triggerText="Download Company Profile"
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-medium tracking-wide text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-all"
            >
              <span>Discuss Your Requirement</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 02. WHO WE ARE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
              Identity &amp; Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
              Who We Are
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
              PT ARKAPRANA TEKNOLOGI NUSANTARA • INDONESIA
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-[var(--text-primary)]">PT ARKAPRANA TEKNOLOGI NUSANTARA</strong> (ARKAPRANA) didirikan sebagai perusahaan teknologi dan system integrator rekayasa yang berfokus menghadirkan kapabilitas komputasi, jaringan data, dan kecerdasan buatan kelas enterprise di Indonesia.
            </p>
            <p>
              Kami memandang bahwa adopsi teknologi cerdas seperti Artificial Intelligence tidak dapat berdiri sendiri di ruang hampa. Kecerdasan sejati memerlukan fondasi komputasi fisik, jaringan data berlatensi rendah, serta arsitektur keamanan siber yang tidak dapat ditembus.
            </p>
            <p>
              Melalui kombinasi kemampuan rekayasa teknis tingkat prinsipal dan komitmen kedaulatan data lokal, kami menjadi technology partner bagi organisasi dalam merancang, membangun, mengoperasikan, dan mengevolusikan lingkungan teknologi mereka.
            </p>

            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest font-semibold">
                Strategic Technology Journey
              </div>
              <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-mono">
                INFRASTRUCTURE → NETWORK → CLOUD → SECURITY → DATA → AI
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Alur transformasi digital holistik yang menjamin investasi teknologi berbuah stabilitas dan efisiensi nyata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. WHAT WE BELIEVE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
            Core Beliefs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            What We Believe
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Prinsip fundamental yang memandu setiap desain arsitektur, pemilihan vendor, dan komitmen operasional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BELIEFS.map((b, idx) => (
            <div
              key={b.title}
              className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all space-y-3 shadow-sm hover:shadow-md"
            >
              <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest">
                BELIEF 0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. VISION & MISSION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Vision */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-[var(--accent-blue)]">
              <Compass className="w-6 h-6" />
              <h3 className="text-base font-bold text-[var(--text-primary)] font-mono uppercase tracking-wider">
                VISI PERUSAHAAN (VISION)
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed italic font-serif">
              &ldquo;{COMPANY_PROFILE.vision}&rdquo;
            </p>
            <div className="pt-2 text-[10px] font-mono text-[var(--accent-blue)]">
              PT ARKAPRANA TEKNOLOGI NUSANTARA • INDONESIA
            </div>
          </div>

          {/* Mission */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 text-[var(--accent-blue)]">
              <Target className="w-6 h-6" />
              <h3 className="text-base font-bold text-[var(--text-primary)] font-mono uppercase tracking-wider">
                MISI PERUSAHAAN (MISSION)
              </h3>
            </div>
            <ul className="space-y-3.5">
              {COMPANY_PROFILE.missions.map((mission, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[var(--text-secondary)] space-x-3">
                  <span className="w-5 h-5 rounded-md bg-[var(--accent-glow)] text-[var(--accent-blue)] flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 05. WHAT WE BUILD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
            Core Technology Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            What We Build
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Spektrum solusi rekayasa terpadu yang dirancang untuk skala enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-display">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-subtle)]">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-blue)] hover:opacity-80 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 06. HOW WE WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            How We Work
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Siklus rekayasa 8 tahap dari asesmen kebutuhan presisi hingga evolusi jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECT_JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[var(--accent-blue)]">
                  STEP {step.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]" />
              </div>
              <h4 className="text-sm font-bold text-[var(--text-primary)] font-display">
                {step.name}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                {step.tagline}
              </p>
              <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)]">
                Deliverable: {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07. TECHNOLOGY ECOSYSTEM */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
            Architecture Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            Technology Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Kategori arsitektur teknologi global yang kami kuasai dan orkestrasikan secara vendor-neutral.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECHNOLOGY_PARTNER_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--text-primary)] font-display">
                  {cat.category}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--accent-blue)] border border-[var(--border-subtle)] font-semibold">
                  {cat.tier}
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {cat.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. LEADERSHIP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-b border-[var(--border-subtle)]">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
            Governance &amp; Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
            Leadership &amp; Engineering Council
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Dikelola oleh para insinyur sistem, arsitek jaringan, dan spesialis keamanan informasi yang berkomitmen pada integritas teknis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)]">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)] font-display">Principal Systems Architect</h4>
            <div className="text-xs font-mono text-[var(--accent-blue)]">Office of the CTO</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Memimpin perancangan topologi jaringan backbone, arsitektur private cloud, dan audit kedaulatan data.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)] font-display">Principal Security Officer</h4>
            <div className="text-xs font-mono text-[var(--accent-blue)]">Zero-Trust Practice</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Menangani tata kelola keamanan siber, kepatuhan audit ISO 27001, implementasi HSM, dan enkripsi perimeter.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-blue)]">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[var(--text-primary)] font-display">Head of Cognitive Engineering</h4>
            <div className="text-xs font-mono text-[var(--accent-blue)]">ARKAPRANA AI Lab</div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Memimpin riset dan implementasi Private On-Premise LLM, sistem RAG, serta otomasi alur kerja korporat.
            </p>
          </div>
        </div>
      </section>

      {/* 09. CONTACT & COMPANY INFORMATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-14 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono text-[var(--accent-blue)] uppercase tracking-widest block">
              Official Communication Desk
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] font-display tracking-tight">
              Ready to collaborate with ARKAPRANA?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Diskusikan kebutuhan arsitektur infrastruktur digital dan solusi cerdas Anda langsung bersama perwakilan resmi kami.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-mono text-[var(--text-muted)] justify-center md:justify-start">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                <span>{COMPANY_PROFILE.contact.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                <span>{COMPANY_PROFILE.contact.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                <span>Indonesia</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <CompanyProfileModal
              triggerClassName="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-[var(--accent-blue)] hover:opacity-90 transition-all shadow-md cursor-pointer"
              triggerText="Download Company Profile"
            />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all"
            >
              <span>Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
