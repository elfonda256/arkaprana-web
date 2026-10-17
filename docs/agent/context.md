# Arkaprana Web — Agent Context & Architecture

> **Repository**: [elfonda256/arkaprana-web](https://github.com/elfonda256/arkaprana-web)  
> **Production**: [https://arkaprana-web.vercel.app/](https://arkaprana-web.vercel.app/)  
> **Framework**: Next.js 16.3.6 (Turbopack, App Router) · React 19 · TypeScript · Tailwind CSS v4  
> **Design Language**: Dark Luxury & Enterprise Intelligence (inspired by [nalarx.com](https://nalarx.com))

---

## 1. Project Overview & Identity
ARKAPRANA adalah perusahaan teknologi infrastruktur dan sistem cerdas Indonesia. Platform ini memposisikan Arkaprana sebagai mitra strategis korporasi, BUMN, dan institusi pemerintahan dalam membangun:
- **Konektivitas & Jaringan** (Enterprise Optical Mesh, SD-WAN, Dark Fiber)
- **Modular Data Center & Sovereign Private Cloud** (Tier-3+ on-premise compute & storage)
- **Zero-Trust Security & HSM** (Defense-in-depth, microsegmentation, 24/7 SOC)
- **Private AI & Enterprise Intelligence** (Sovereign on-premise LLMs, Vector DB, RAG tanpa ekfiltrasi data)
- **Managed IT & Turnkey System Integration**

---

## 2. Directory Structure & File Map

```
scratch/arkaprana-web/
├── docs/
│   └── agent/
│       ├── context.md          # Dokumen ini: konteks menyeluruh arsitektur & konvensi proyek
│       └── decisions.md        # Architectural Decision Records (ADR)
├── public/                     # Static assets & brand media
├── src/
│   ├── app/                    # Next.js App Router (pages & layouts)
│   │   ├── layout.tsx          # Root layout & font orchestration
│   │   ├── page.tsx            # Homepage 11-step storytelling
│   │   ├── globals.css         # Design tokens, keyframe animations & utilities
│   │   ├── solutions/          # 7 Solution routes (/network, /ai, /security, dll.)
│   │   ├── capabilities/       # 8 Technical architecture blueprints
│   │   ├── industries/         # 9 Sector specializations (Maritime, BUMN, dll.)
│   │   ├── insights/           # Thought leadership & architecture essays
│   │   ├── about/              # Enterprise profile & philosophy
│   │   └── contact/            # Enterprise qualification & contact desk
│   ├── components/
│   │   ├── brand/              # Vector logos, wordmarks & symbol lockups
│   │   ├── canvas/             # Interactive background animations
│   │   ├── decorative/         # SVG blueprints, living outlines & ornaments
│   │   ├── layout/             # Navbar (floating glass pill), Footer, CTAs
│   │   ├── sections/           # Modular homepage storytelling sections
│   │   └── shared/             # Reusable UI primitives & animations
│   ├── context/                # Client state (Theme, Interactive builders)
│   └── lib/                    # Content data, utilities & route helpers
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Design System & UI/UX Guidelines (Nalarx Inspired)

1. **Atmosfer Deep Obsidian / Dark Luxury**:
   - Primary Background: `#08090D` / `#0D0D11`
   - Elevated Cards: `#12131A` / `#161822` dengan border halus `rgba(255, 255, 255, 0.08)`
   - Accents: Electric Cyan / Blue Signal (`#38BDF8`, `#5BA7FF`) dan Fire Orange (`#FF5722`) sebagai sinyal status aktif.

2. **Sistem Animasi Utama**:
   - **Waveform Strands (`nx-wave`)**: SVG multi-layer gelombang data/sinyal dengan animasi auto-draw saat dibuka.
   - **Orbital Satellites (`nx-orbit-svg`)**: Garis elips orbit dengan titik satelit berdenyut (`nx-node`).
   - **Star-Beam Moving Border**: Tombol pill CTA dengan sinar laser radial yang berputar mengitari tepi tombol.
   - **Shimmer Text**: Gradient clip beranimasi halus pada link sekunder.
   - **Flowing Dashes**: Konektor arsitektur data dengan animasi gradient bergerak kontinu.
   - **Interactive Hardware/Console Mockups**: Mockup konsol/terminal realistik dengan efek liquid noise mesh.

---

## 4. Execution Roadmap (Tahap 1 - 3)

- [x] **Setup Struktur Dokumentasi**: Inisialisasi `docs/agent/context.md` & `docs/agent/decisions.md` (standar rapi seperti zks-catering-web).
- [x] **Tahap 1 (Nomor 1)**: Upgrade Hero Section & Floating Header (Waveform strands, orbital animation, star-beam CTA button, shimmer text, glassmorphic floating pill navbar).
- [x] **Tahap 2 (Nomor 2)**: Interactive Hardware Showcase / Command Center (Mockup frame perangkat dengan liquid gradient noise mesh, auto-cycling progress bar, live interactive tabs & simulated telemetry).
- [x] **Tahap 3 (Nomor 3)**: Flowing Architecture & Technical Glyphs (Flowing dashed laser connectors dengan foton bergerak, animated SVG glyphs untuk 7 pilar solusi, dan enterprise accordion drawers dengan multi-vendor specs).
- [x] **Sinkronisasi Desktop**: Seluruh kode rapi tersinkronisasi di `/Users/mymac/Desktop/arkaprana-web`.

