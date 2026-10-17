"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  id: {
    // Nav
    nav_solutions: "Solusi",
    nav_industries: "Industri",
    nav_capabilities: "Kapabilitas",
    nav_insights: "Wawasan",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    nav_book_demo: "Pesan Demo",
    nav_see_how: "Lihat Cara Kerjanya",
    nav_custom_env: "Membangun ekosistem multi-sistem khusus?",
    nav_explore_solutions: "Jelajahi seluruh solusi",
    nav_pillars_title: "Pilar Teknologi · Arsitektur",
    nav_7_solutions: "7 Solusi Inti",

    // Hero
    hero_badge: "SOVEREIGN INTELLIGENCE & INFRASTRUCTURE LAYER",
    hero_headline: "Lapisan Kecerdasan AI untuk Infrastruktur & Agen Enterprise",
    hero_desc: "ARKAPRANA menghubungkan setiap router, modular data center, dan sistem korporasi di perusahaan Anda — mengubah telemetri dan pengetahuan internal menjadi aksi otonom berdaulat.",
    hero_cta_demo: "Pesan Demo",
    hero_cta_see_how: "Lihat Cara Kerjanya",

    // Section 01: Product Showcase
    showcase_badge: "01 · PLATFORM · COMMAND CONSOLE",
    showcase_title: "Satu Sistem Cerdas untuk Mengendalikan Seluruh Infrastruktur.",
    showcase_desc: "Bukan sekadar dashboard terpisah — Arkaprana terhubung langsung ke router core, modular data center, dan lingkungan cloud privat Anda.",

    // Section 02: Floating Apps
    floating_title_1: "Perusahaan Anda berjalan di atas puluhan aplikasi yang tidak saling bicara.",
    floating_title_2: "Arkaprana menyatukannya menjadi satu otak yang hidup. Aman, Terkelola, Berdaulat.",
    floating_subtitle: "Satu Sistem Kendali Cerdas Berdaulat · Terintegrasi Real-Time",

    // Section 03: Use Cases
    usecases_badge: "02 · DEPLOYMENT · ENTERPRISE USE CASES",
    usecases_title: "Skenario Nyata. Eksekusi Mandiri.",
    usecases_desc: "Lihat bagaimana arsitektur agen terintegrasi Arkaprana mengolah sinyal telemetri mentah, menjalankan mitigasi otonom, dan melindungi kelangsungan bisnis Anda.",

    // Section 04: Ecosystem
    ecosystem_badge: "03 · ARCHITECTURE · INTEGRATED ECOSYSTEM",
    ecosystem_title: "Teknologi Harus Bekerja Sebagai Satu Sistem.",
    ecosystem_desc: "Dari ruang server fisik Tier-3 dan jaringan transmisi optik DWDM, hingga cloud privat berdaulat dan otomasi AI otonom — Arkaprana mengintegrasikan seluruh domain rekayasa Anda tanpa fragmentasi.",
    ecosystem_drawers_title: "Architectural Domain Drawers",
    ecosystem_drawers_hint: "Klik untuk membuka spesifikasi teknis",

    // Section 05: Capabilities / Solutions
    solutions_badge: "05 · CAPABILITIES · 7 CORE PILLARS",
    solutions_title: "Tujuh Domain Rekayasa, Satu Ekosistem Terpadu.",
    solutions_desc: "Bukan sekadar katalog layanan konvensional. Setiap pilar teknologi ARKAPRANA dirancang dengan standar produk industri tingkat tinggi untuk memastikan kedaulatan data, ketahanan sistem, dan skalabilitas tanpa gesekan multi-vendor.",

    // Section 06: Industries
    industries_badge: "06 · PROVEN FIELD ADOPTION · INDUSTRIES",
    industries_title_1: "Bagaimana Arkaprana menggerakkan alur kerja",
    industries_title_2: "di seluruh sektor industri.",
    industries_desc: "8 Sektor Industri Korporasi · Solusi Teruji Tanpa Duplikasi Sistem",

    // Section 07: Enterprise Audit
    audit_badge: "08 · GOVERNANCE & AUDIT",
    audit_title: "Dibangun untuk standar enterprise.",
    audit_subtitle: "Dari implementasi hingga kepatuhan regulasi, setiap lapisan lulus audit ketat.",
    audit_live: "Otomatis memverifikasi arsitektur keamanan live",

    // Section 08: 2030 Impact
    impact_badge: "09 · ECONOMIC IMPACT · SCALED ROI",
    impact_title_1: "Mengapa ini penting",
    impact_title_2: "di tahun 2030 dan seterusnya.",
    impact_ebit: "PERTUMBUHAN EBIT",
    impact_ebit_desc: "Pelaku terdepan meraih dampak EBIT 3x lipat, memperlebar keunggulan kompetitif setiap kuartal.",
    impact_time: "WAKTU TERHEMAT",
    impact_time_desc: "Setiap karyawan menghemat 2.5 jam sehari; produktivitas operasional bertumbuh eksponensial.",
    impact_decision: "KEPUTUSAN LEBIH CEPAT",
    impact_decision_desc: "Organisasi melaporkan efisiensi 54% dari AI dengan otomasi proses hingga 61%.",
    impact_window: "JENDELA WAKTU",
    impact_window_desc: "Tersisa dua tahun sebelum kesenjangan teknologi pemenang dan tertinggal menjadi permanen.",

    // Section 09: Friction
    friction_badge: "04 · DIAGNOSTIC · MULTI-VENDOR FRICTION",
    friction_title: "Ketika Sistem Berjalan Terisolasi, Downtime Menjadi Hal yang Tak Terhindarkan.",
    friction_desc: "Pertumbuhan organisasi sering kali mewariskan tumpukan teknologi dari belasan vendor berbeda. Tanpa satu arsitektur terpadu, setiap pembaruan menimbulkan celah keamanan, latensi tersembunyi, dan saling lempar tanggung jawab.",

    // Section 10: FAQ
    faq_badge: "10 · KNOWLEDGE BASE · FAQS",
    faq_title: "Pertanyaan yang Sering Diajukan",
    faq_desc: "Segala hal yang perlu Anda ketahui mengenai Arkaprana. Tidak menemukan jawaban Anda?",
    faq_reach_out: "Hubungi kami.",

    // Section 11: Orbital CTA
    orbital_badge: "11 · ORCHESTRATION · ONE UNIFIED SYSTEM",
    orbital_title_1: "Hentikan menjalankan bisnis dengan perasaan.",
    orbital_title_2: "Mulai jalankan dengan kecerdasan sistem.",
    orbital_desc: "Koneksikan seluruh router, modular data center, cloud privat, dan basis pengetahuan internal Anda ke dalam satu sistem kendali cerdas berdaulat.",
    orbital_cta: "Pesan Sesi Demo",

    // Common CTAs & Buttons
    btn_deep_dive: "Eksplorasi Arsitektur",
    btn_inquire_spec: "Ajukan Spesifikasi Teknis",
    btn_consult_sector: "Konsultasikan Kebutuhan Sektor",
    btn_consult_capability: "Konsultasikan Kapabilitas",
    btn_discuss_project: "Mulai Diskusi Proyek",
    btn_download_cp: "Unduh Profil Perusahaan",
    btn_back_solutions: "Kembali ke Seluruh Solusi",
    btn_back_insights: "Kembali ke Dokumen Wawasan",
    btn_read_whitepaper: "Pelajari Dokumen Teknis",
    btn_talk_engineer: "Bicara dengan Engineer",

    // Solutions Page
    sol_page_badge: "01 · SOLUSI ENTERPRISE · 7 DOMAIN INTI",
    sol_page_title_1: "Arsitektur Terpadu.",
    sol_page_title_2: "Dari Fondasi Hingga Kecerdasan.",
    sol_page_desc: "Jelajahi tujuh domain kapabilitas rekayasa teknologi ARKAPRANA. Setiap solusi dirancang modular, kompatibel antar-vendor, dan scalable untuk keandalan operasional jangka panjang.",
    sol_scope_title: "Cakupan Rekayasa Teknis",
    sol_tech_arch: "ARSITEKTUR TEKNIS",
    sol_arch_focus: "Fokus Inti Arsitektur",
    sol_verified_deliverables: "Output Resmi Terverifikasi",
    sol_sla_guarantee: "Jaminan SLA Vendor-Agnostik",

    // Capabilities Page
    cap_page_badge: "03 · CETAK BIRU KAPABILITAS · 8 DISIPLIN REKAYASA",
    cap_page_title_1: "Kapabilitas Enterprise.",
    cap_page_title_2: "Cetak biru arsitektural untuk skala kritis.",
    cap_page_desc: "Kredibilitas rekayasa ARKAPRANA dibangun dari kedalaman arsitektur teknis, pemahaman regulasi kedaulatan data lokal, dan metodologi implementasi standar industri tanpa klaim semu.",
    cap_engineering_focus: "FOKUS REKAYASA // WHAT WE DO",
    cap_arch_solution: "SOLUSI ARSITEKTUR",
    cap_typical_req: "PERSYARATAN TIPIKAL",
    cap_blueprint_std: "Standar Blueprint Arsitektur:",
    cap_protocols_std: "Protokol Standar:",

    // Industries Page
    ind_page_badge: "02 · ARSITEKTUR INDUSTRI · SISTEM MULTI-SEKTOR",
    ind_page_title_1: "Teknologi untuk Lingkungan Kritis.",
    ind_page_title_2: "Teruji di lapangan di 8 sektor korporat.",
    ind_page_desc: "Kami memahami bahwa lingkungan maritim lepas pantai membutuhkan pendekatan rekayasa yang sangat berbeda dari pusat komputasi perbankan atau fasilitas manufaktur industri. ARKAPRANA merancang solusi teknologi yang disesuaikan dengan kondisi fisik lingkungan dan kebutuhan operasional nyata organisasi Anda.",

    // Insights Page
    ins_page_badge: "04 · RISET & EDITORIAL · DOKUMEN REKAYASA",
    ins_page_title_1: "Perspektif Infrastruktur Modern & AI.",
    ins_page_title_2: "Dokumen teknis berbasis data lapangan & analisis regulasi.",
    ins_page_desc: "Catatan riset dan pemikiran teknik dari para insinyur ARKAPRANA mengenai kedaulatan data, keamanan siber perimeter, dan integrasi kecerdasan buatan enterprise dengan rujukan regulasi resmi.",

    // About Page
    abt_page_badge: "05 · TENTANG ARKAPRANA · PERUSAHAAN & VISI",
    abt_page_title_1: "Teknologi yang dibangun untuk masa depan.",
    abt_page_title_2: "Rekayasa kecerdasan berdaulat bagi enterprise Indonesia.",
    abt_who_badge: "IDENTITAS & TUJUAN",
    abt_who_title: "Satu Rekayasa Terpadu untuk Seluruh Lapisan IT.",
    abt_beliefs_badge: "FILOSOFI REKAYASA",
    abt_beliefs_title: "Prinsip Rekayasa Kami",
    abt_beliefs_desc: "Prinsip fundamental yang memandu setiap desain arsitektur, pemilihan vendor, dan komitmen operasional kami.",
    abt_pillars_badge: "PILAR TEKNOLOGI INTI",
    abt_pillars_title: "Fondasi Teknologi yang Kami Bangun",
    abt_method_badge: "METODOLOGI BERDISIPLIN",
    abt_method_title: "Metodologi Rekayasa 8 Tahap",
    abt_lead_badge: "TATA KELOLA & PRAKTIK",
    abt_lead_title: "Dewan Pimpinan & Rekayasa Sistem",

    // Projects Page
    proj_page_badge: "07 · STUDI KASUS ARSITEKTUR · REKAYASA SISTEM TERBUKTI",
    proj_page_title_1: "Studi Kasus Arsitektur &",
    proj_page_title_2: "Implementasi Lapangan.",
    proj_page_desc: "Dokumentasi rekayasa arsitektur nyata: dari modernisasi core network perbankan tier-3, sovereign private AI on-premise BUMN, hingga mitigasi risiko regulasi UU PDP dan POJK 11/2022 dengan verifikasi metrik sebelum vs sesudah.",
    proj_subtext: "Semua arsitektur dirancang untuk toleransi kesalahan sub-detik dan isolasi kedaulatan data Indonesia.",
    proj_filter_all: "Semua Sektor",
    proj_filter_banking: "Perbankan & Finansial",
    proj_filter_energy: "Energi & Manufaktur",
    proj_filter_healthcare: "Kesehatan Terdistribusi",
    proj_filter_public: "Infrastruktur Publik",
    proj_verified_metrics: "Metrik Terverifikasi Lapangan",
    proj_btn_topology: "Buka / Tutup Topologi Arsitektur",

    // Contact Page
    contact_page_badge: "08 · MEJA KONSULTASI · INISIASI PROYEK",
    contact_page_title_1: "Mulai Diskusi Rekayasa.",
    contact_page_title_2: "Bicara Langsung dengan Tim Arsitek Sistem Kami.",
    contact_page_desc: "Kami tidak menggunakan tim penjualan perantara. Setiap permintaan konsultasi ditinjau dan ditanggapi langsung oleh principal network & system engineer kami dalam kurun waktu 1x24 jam kerja.",
    contact_direct_reach: "Hubungi Langsung",
    contact_hq_location: "Kantor Pusat Rekayasa",
    contact_sla_promise: "SLA Respon: < 24 Jam Kerja",
    contact_nda_note: "Kerahasiaan NDA Dijamin Sejak Kontak Awal",
    contact_form_title: "Formulir Spesifikasi & Konsultasi Proyek",
    contact_name_label: "Nama Lengkap",
    contact_company_label: "Perusahaan / Institusi",
    contact_role_label: "Jabatan / Divisi",
    contact_email_label: "Email Korporat",
    contact_phone_label: "Nomor WhatsApp / Telepon",
    contact_industry_label: "Sektor Industri",
    contact_project_type_label: "Kategori Rekayasa",
    contact_timeline_label: "Target Waktu Implementasi",
    contact_budget_label: "Status Anggaran",
    contact_desc_label: "Ringkasan Kebutuhan & Tantangan Arsitektur",
    contact_btn_submit: "Kirim Permintaan Konsultasi Rekayasa",
    contact_submitted_title: "Permintaan Anda Berhasil Terkirim",
    contact_submitted_desc: "Tim arsitek sistem ARKAPRANA akan menelaah spesifikasi kebutuhan Anda dan menghubungi Anda dalam 1x24 jam kerja.",

    // Footer
    footer_desc: "Membangun dan mengintegrasikan fondasi teknologi terpadu—dari infrastruktur fisik, jaringan berkecepatan tinggi, cloud sovereign, keamanan siber hingga artificial intelligence otonom.",
    footer_thesis: "Tesis Inti: BUILD. CONNECT. INTELLIGENCE.",
    footer_rights: "© 2026 PT ARKAPRANA TEKNOLOGI NUSANTARA. Seluruh Hak Dilindungi."
  },

  en: {
    // Nav
    nav_solutions: "Solutions",
    nav_industries: "Industries",
    nav_capabilities: "Capabilities",
    nav_insights: "Insights",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book_demo: "Book a Demo",
    nav_see_how: "See How it Works",
    nav_custom_env: "Building a custom multi-system environment?",
    nav_explore_solutions: "Explore all solutions",
    nav_pillars_title: "Technology Pillars · Architecture",
    nav_7_solutions: "7 Core Solutions",

    // Hero
    hero_badge: "SOVEREIGN INTELLIGENCE & INFRASTRUCTURE LAYER",
    hero_headline: "The AI Intelligence Layer for Enterprise Infrastructure & Agents",
    hero_desc: "ARKAPRANA connects every router, modular data center, and enterprise system in your company — turning telemetry and internal knowledge into sovereign autonomous actions.",
    hero_cta_demo: "Book a Demo",
    hero_cta_see_how: "See How it Works",

    // Section 01: Product Showcase
    showcase_badge: "01 · PLATFORM · COMMAND CONSOLE",
    showcase_title: "One Intelligent System to Command Your Entire Infrastructure.",
    showcase_desc: "Not another siloed dashboard — Arkaprana connects directly to your core routers, modular data centers, and private cloud environments.",

    // Section 02: Floating Apps
    floating_title_1: "Your company runs on dozens of apps that don't talk to each other.",
    floating_title_2: "Arkaprana unifies them into one living brain. Secure, Governed, Private.",
    floating_subtitle: "One Sovereign Intelligent Control System · Integrated in Real-Time",

    // Section 03: Use Cases
    usecases_badge: "02 · DEPLOYMENT · ENTERPRISE USE CASES",
    usecases_title: "Real Scenarios. Autonomous Execution.",
    usecases_desc: "See how Arkaprana's unified agent architecture digests raw telemetry, executes autonomous mitigation, and safeguards business continuity.",

    // Section 04: Ecosystem
    ecosystem_badge: "03 · ARCHITECTURE · INTEGRATED ECOSYSTEM",
    ecosystem_title: "Technology Must Work As One System.",
    ecosystem_desc: "From Tier-3 physical server rooms and DWDM optical backbones to sovereign private cloud and autonomous AI workflows — Arkaprana unifies all your engineering domains without fragmentation.",
    ecosystem_drawers_title: "Architectural Domain Drawers",
    ecosystem_drawers_hint: "Click to open technical specifications",

    // Section 05: Capabilities / Solutions
    solutions_badge: "05 · CAPABILITIES · 7 CORE PILLARS",
    solutions_title: "Seven Engineering Domains, One Integrated Ecosystem.",
    solutions_desc: "Not a generic services catalog. Every ARKAPRANA technology pillar is built with high-grade product discipline to ensure data sovereignty, resilience, and multi-vendor scalability.",

    // Section 06: Industries
    industries_badge: "06 · PROVEN FIELD ADOPTION · INDUSTRIES",
    industries_title_1: "How Arkaprana moves work",
    industries_title_2: "across every industry.",
    industries_desc: "8 Enterprise Industry Sectors · Field-Proven Solutions Without Redundancy",

    // Section 07: Enterprise Audit
    audit_badge: "08 · GOVERNANCE & AUDIT",
    audit_title: "Built for the enterprise.",
    audit_subtitle: "From deployment to compliance, every layer meets your audit bar.",
    audit_live: "Automatically verifying live security architecture",

    // Section 08: 2030 Impact
    impact_badge: "09 · ECONOMIC IMPACT · SCALED ROI",
    impact_title_1: "Why this matters",
    impact_title_2: "in 2030 and beyond.",
    impact_ebit: "EBIT GROWTH",
    impact_ebit_desc: "High performers achieve 3x EBIT impact, and the gap widens every quarter.",
    impact_time: "TIME SAVED",
    impact_time_desc: "Every employee saves 2.5 hrs a day; operational productivity compounds.",
    impact_decision: "FASTER DECISIONS",
    impact_decision_desc: "Organizations report 54% efficiency gains from AI, with 61% automation.",
    impact_window: "THE WINDOW",
    impact_window_desc: "Two years before the leader-laggard technology gap turns structural (McKinsey).",

    // Section 09: Friction
    friction_badge: "04 · DIAGNOSTIC · MULTI-VENDOR FRICTION",
    friction_title: "When Systems Operate In Silos, Costly Downtime Is Inevitable.",
    friction_desc: "Enterprise expansion often inherits a patchwork of disparate vendors. Without unified architecture, upgrades introduce security gaps, hidden latency, and finger-pointing.",

    // Section 10: FAQ
    faq_badge: "10 · KNOWLEDGE BASE · FAQS",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Everything you need to know about Arkaprana. Can't find what you're looking for?",
    faq_reach_out: "Reach out.",

    // Section 11: Orbital CTA
    orbital_badge: "11 · ORCHESTRATION · ONE UNIFIED SYSTEM",
    orbital_title_1: "Stop running your business by feel.",
    orbital_title_2: "Start running it with intelligence.",
    orbital_desc: "Connect every router, modular data center, private cloud, and internal knowledge repository into one unified sovereign control system.",
    orbital_cta: "Book a Demo Session",

    // Common CTAs & Buttons
    btn_deep_dive: "Deep Dive Architecture",
    btn_inquire_spec: "Inquire Specification",
    btn_consult_sector: "Consult Sector Architecture",
    btn_consult_capability: "Consult Capability",
    btn_discuss_project: "Discuss Your Project",
    btn_download_cp: "Download Company Profile",
    btn_back_solutions: "Back to All Solutions",
    btn_back_insights: "Back to Insight Documents",
    btn_read_whitepaper: "Read Technical Whitepaper",
    btn_talk_engineer: "Talk to an Engineer",

    // Solutions Page
    sol_page_badge: "01 · ENTERPRISE SOLUTIONS · 7 CORE DOMAINS",
    sol_page_title_1: "Integrated Architecture.",
    sol_page_title_2: "From Foundation to Intelligence.",
    sol_page_desc: "Explore ARKAPRANA's seven engineering capability domains. Modular, multi-vendor compatible, and built for mission-critical enterprise scale.",
    sol_scope_title: "Scope of Engineering Capabilities",
    sol_tech_arch: "TECHNICAL ARCHITECTURE",
    sol_arch_focus: "Core Architecture Focus",
    sol_verified_deliverables: "Standard Verified Deliverables",
    sol_sla_guarantee: "Vendor-Agnostic SLA Guarantee",

    // Capabilities Page
    cap_page_badge: "03 · CAPABILITY BLUEPRINTS · 8 ENGINEERING DISCIPLINES",
    cap_page_title_1: "Enterprise Capabilities.",
    cap_page_title_2: "Architectural blueprints for critical scale.",
    cap_page_desc: "ARKAPRANA's engineering credibility is grounded in rigorous technical depth, domestic data sovereignty mastery, and industry-standard execution without generic claims.",
    cap_engineering_focus: "ENGINEERING FOCUS // WHAT WE DO",
    cap_arch_solution: "ARCHITECTURAL SOLUTION",
    cap_typical_req: "TYPICAL REQUIREMENTS",
    cap_blueprint_std: "Architecture Blueprint Standard:",
    cap_protocols_std: "Standard Protocols:",

    // Industries Page
    ind_page_badge: "02 · INDUSTRY ARCHITECTURE · MULTI-SECTOR SYSTEMS",
    ind_page_title_1: "Technology for Critical Environments.",
    ind_page_title_2: "Field-proven across 8 enterprise sectors.",
    ind_page_desc: "We understand that offshore maritime environments demand a completely different engineering approach than banking computing centers or heavy manufacturing facilities. ARKAPRANA engineers tailored topologies for your physical and operational reality.",

    // Insights Page
    ins_page_badge: "04 · RESEARCH & EDITORIAL · ENGINEERING PAPERS",
    ins_page_title_1: "Perspectives on Modern Infrastructure & AI.",
    ins_page_title_2: "Ground-truth technical papers & regulatory analysis.",
    ins_page_desc: "Field-tested research and engineering perspectives from ARKAPRANA engineers on data sovereignty, perimeter cybersecurity, and private enterprise AI aligned with official regulations.",

    // About Page
    abt_page_badge: "05 · ABOUT ARKAPRANA · COMPANY & VISION",
    abt_page_title_1: "Technology built for what comes next.",
    abt_page_title_2: "Engineering sovereign intelligence for Indonesian enterprise.",
    abt_who_badge: "IDENTITY & PURPOSE",
    abt_who_title: "Unified Engineering Across Every IT Layer.",
    abt_beliefs_badge: "ENGINEERING PHILOSOPHY",
    abt_beliefs_title: "Our Engineering Beliefs",
    abt_beliefs_desc: "The fundamental principles guiding every architecture blueprint, vendor selection, and long-term operational commitment.",
    abt_pillars_badge: "CORE TECHNOLOGY PILLARS",
    abt_pillars_title: "The Technology Foundation We Build",
    abt_method_badge: "DISCIPLINED METHODOLOGY",
    abt_method_title: "8-Phase Engineering Methodology",
    abt_lead_badge: "GOVERNANCE & PRACTICE",
    abt_lead_title: "Leadership & Engineering Council",

    // Projects Page
    proj_page_badge: "07 · ARCHITECTURAL CASE STUDIES · PROVEN SYSTEM BLUEPRINTS",
    proj_page_title_1: "Architectural Case Studies &",
    proj_page_title_2: "Field Deployments.",
    proj_page_desc: "Field-tested architectural blueprints: from tier-3 banking core network modernization and sovereign private AI to full compliance with Indonesian PDP Law and OJK 11/2022 standards.",
    proj_subtext: "All architectures are engineered for sub-second fault tolerance and domestic Indonesian data sovereignty.",
    proj_filter_all: "All Sectors",
    proj_filter_banking: "Banking & Financial",
    proj_filter_energy: "Energy & Manufacturing",
    proj_filter_healthcare: "Distributed Healthcare",
    proj_filter_public: "Public Infrastructure",
    proj_verified_metrics: "Field-Verified Metrics",
    proj_btn_topology: "Toggle Architecture Topology",

    // Contact Page
    contact_page_badge: "08 · CONSULTATION DESK · PROJECT INITIATION",
    contact_page_title_1: "Initiate Engineering Discussion.",
    contact_page_title_2: "Speak Directly with Our System Architects.",
    contact_page_desc: "No sales middlemen. Every consultation inquiry is analyzed and answered directly by our principal network & system engineers within 24 business hours.",
    contact_direct_reach: "Direct Contact",
    contact_hq_location: "Engineering Headquarters",
    contact_sla_promise: "Response SLA: < 24 Business Hours",
    contact_nda_note: "Strict NDA Confidentiality from Day One",
    contact_form_title: "Project Specification & Consultation Form",
    contact_name_label: "Full Name",
    contact_company_label: "Company / Organization",
    contact_role_label: "Role / Division",
    contact_email_label: "Corporate Email",
    contact_phone_label: "WhatsApp / Phone",
    contact_industry_label: "Industry Sector",
    contact_project_type_label: "Engineering Category",
    contact_timeline_label: "Target Deployment Timeline",
    contact_budget_label: "Budget Status",
    contact_desc_label: "Architecture Requirements & Pain Points",
    contact_btn_submit: "Submit Engineering Inquiry",
    contact_submitted_title: "Inquiry Successfully Dispatched",
    contact_submitted_desc: "ARKAPRANA's systems architecture team will review your specifications and contact you within 24 business hours.",

    // Footer
    footer_desc: "Architecting and orchestrating unified technology foundations—from physical infrastructure, high-throughput networks, sovereign cloud, and zero-trust cybersecurity to autonomous AI.",
    footer_thesis: "Core Thesis: BUILD. CONNECT. INTELLIGENCE.",
    footer_rights: "© 2026 PT ARKAPRANA TEKNOLOGI NUSANTARA. All Rights Reserved."
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "id",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("arkaprana_lang") as Language | null;
      if (saved && (saved === "id" || saved === "en")) {
        setLanguageState(saved);
        document.documentElement.setAttribute("lang", saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("arkaprana_lang", lang);
      document.documentElement.setAttribute("lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === "id" ? "en" : "id";
    setLanguage(next);
  };

  const t = (key: string, fallback?: string): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.id;
    return dict[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
