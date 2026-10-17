# Architectural Decision Records (ADR)

Dokumen ini mencatat keputusan arsitektur, desain, dan konvensi implementasi untuk proyek **Arkaprana Web**.

---

## ADR-001: Standardisasi Dokumentasi Proyek Mengikuti Pola `zks-catering-web`
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User menginginkan penataan file proyek yang rapi dan terstruktur seperti pada repositori referensi `zks-catering-web`, di mana konteks sistem, stack, dan rekaman keputusan disimpan di folder `docs/agent/`.
- **Keputusan**:
  1. Membuat direktori `docs/agent/`.
  2. Menyimpan ringkasan arsitektur, peta file, dan roadmap di [`docs/agent/context.md`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/docs/agent/context.md).
  3. Mencatat setiap perubahan arsitektural dan keputusan teknis di [`docs/agent/decisions.md`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/docs/agent/decisions.md).
- **Konsekuensi**: Memudahkan pelacakan riwayat pengembangan, mempermudah orientasi agen/developer baru, dan menjaga kebersihan root direktori.

---

## ADR-002: Transformasi Visual & Animasi Berorientasi High-Craft UI (Inspirasi Nalarx.com)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User meminta agar animasi dan UI di web Arkaprana dirombak menjadi elegan, futuristik, dan bertenaga tinggi seperti `https://nalarx.com`.
- **Keputusan**:
  1. **Atmosfer**: Mengadopsi dark luxury palette (`#08090D`, `#0D0D11`, aksen neon cyan `#38BDF8` & amber/blue signals).
  2. **Hero Wave & Orbits**: Menggunakan SVG paths dengan timing bezier untuk menciptakan gelombang frekuensi telekomunikasi/data terpadu yang menggambar otomatis (`stroke-dashoffset` animation).
  3. **Comet / Star-Beam Button**: Menerapkan animasi kilatan cahaya berputar (*orbital laser/star border*) pada tombol CTA utama.
  4. **Shimmer Text**: Menerapkan efek kilau gradasi bergerak pada tombol sekunder.
  5. **Floating Island Pill Header**: Menggantikan border-bottom header standar dengan floating pill navbar ber-glassmorphism tinggi (`backdrop-filter: blur(18px)`).
- **Tahapan Eksekusi**:
  - **Tahap 1**: Hero Section & Header upgrade (Completed).
  - **Tahap 2**: Interactive Command Center & Private AI Console (Completed).
  - **Tahap 3**: Flowing architecture connectors, animated SVG glyphs, dan accordion enterprise.

---

## ADR-003: Implementasi Hardware Command Center Showcase & Liquid Noise Mesh (Tahap 2)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: Merombak area showcase produk interaktif agar mengadopsi estetika Nalarx: frame perangkat keras presisi tinggi (*titanium phone bezel*), latar belakang *liquid gradient mesh* dengan tekstur *fractal grain*, serta *interactive telemetry chat stream*.
- **Keputusan**:
  1. Membuat komponen [`NalarProductShowcaseSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarProductShowcaseSection.tsx).
  2. Menyediakan 4 pilar interaksi: `Analyze` (Telemetri DWDM), `Delegate` (Audit HSM), `Functions` (DCIM Multi-Vendor), dan `Automate` (Sub-18ms Autonomous Failover).
  3. Memasang auto-cycling timer (10 detik) dengan visual progress bar (`.animate-nx-progress`).
  4. Menyediakan simulasi dialog interaktif lengkap dengan tombol tindakan (*action verification pill*).

---

## ADR-004: Duplikasi dan Sinkronisasi Proyek Bersih ke Desktop
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User meminta agar salinan folder proyek yang sudah rapi dibuatkan langsung di folder Desktop.
- **Keputusan**: Menyinkronkan seluruh pohon kode bersih Arkaprana Web ke direktori target:
  `/Users/mymac/Desktop/arkaprana-web`
  (mengecualikan cache `.next` dan folder dependensi berat `node_modules` agar tetap ramping dan bersih).

---

## ADR-005: Implementasi Flowing Architecture Connectors, Animated SVG Glyphs, & Enterprise Accordion (Tahap 3)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: Menyelesaikan Tahap 3 transformasi Nalarx.com: visual aliran arsitektur dinamis dengan partikel sinyal bergerak, glif teknis vektor berskala presisi, serta laci akordeon spesifikasi enterprise.
- **Keputusan**:
  1. **Flowing Architecture Visual**: Membuat [`FlowingArchitectureVisual.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/FlowingArchitectureVisual.tsx) dengan SVG highway horizontal berkas laser neon (`.animate-nx-flow`), partikel foton bergerak (`<animateMotion>`), serta 5 stasiun stasiun arsitektur interaktif (Modular DC, DWDM Optical, Private Cloud, Zero-Trust HSM, Enterprise AI).
  2. **Technical Animated Glyphs**: Membuat [`NalarGlyphs.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarGlyphs.tsx) untuk 7 pilar solusi Arkaprana (`OpticalMeshGlyph`, `CognitiveAiGlyph`, `ModularDcGlyph`, `ZeroTrustHsmGlyph`, `ManagedSreGlyph`, `SovereignCloudGlyph`, `SystemIntegrationGlyph`).
  3. **Enterprise Accordion Drawers**: Membuat [`EnterpriseAccordionDrawer.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/shared/EnterpriseAccordionDrawer.tsx) menggunakan transisi halus CSS grid (`grid-template-rows: 0fr -> 1fr`) yang menampilkan rincian multi-vendor (Cisco, Juniper, VMware, NVIDIA), komoditas kepatuhan, serta benchmark telemetri live.
  4. **Integrasi Section**: Mengintegrasikan visual dan laci akordeon ke [`TechnologyEcosystemSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/TechnologyEcosystemSection.tsx) dan [`SolutionsSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/SolutionsSection.tsx).

---

## ADR-006: Animasi Percakapan Bertahap (Phone Console) & Usecase Showcase Berlatar Fotografi Sinematik (Inspirasi Gambar Nalarx)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: Menanggapi umpan balik visual dari user (Gambar 1 dan Gambar 2):
  1. Animasi pada simulasi konsol ponsel harus muncul **secara bertahap** (staggered sequential reveal: pesan user -> status thinking agen -> balasan terverifikasi -> kartu metrik berurutan -> tombol aksi).
  2. Sub-judul / eyebrow badge distandardisasi seragam di seluruh halaman website (`0X · KATEGORI · NAMA`).
  3. Menghadirkan seksi Use Case enterprise berlatar belakang fotografi sinematik dengan diagram pipeline agen 3-kolom yang identik dengan Gambar 2 Nalarx.
  4. Peningkatan responsivitas mobile di seluruh komponen interaktif.
- **Keputusan**:
  1. **Progressive Chat Timeline**: Menambahkan sequencer state `animStep` (1 hingga 5) di [`NalarProductShowcaseSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarProductShowcaseSection.tsx).
  2. **Usecases Pipeline Showcase**: Membuat komponen baru [`NalarUsecasesSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarUsecasesSection.tsx) dengan fotografi sinematik (Retail/Logistics, Optical Highway, Tier-3 DC) serta tab switcher pill terpusat.
  3. **Standardisasi Eyebrow & Typo**: Menyelaraskan seluruh badge seksi dengan chip pill seragam, heading `font-display`, dan transisi bertahap `ScrollReveal`.
  4. **Sinkronisasi Otomatis**: Menyinkronkan seluruh aset gambar baru dan kode ke folder Desktop `/Users/mymac/Desktop/arkaprana-web`.

---

## ADR-007: Implementasi 5 Seksi Khas Nalarx (Orbital Integration, Warm Cream Audit, Industry Carousel, 17.5x Chart, & Minimal FAQ)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User meminta agar 5 fitur dan animasi spesifik yang ada pada gambar tangkapan layar Nalarx diimplementasikan ke dalam web Arkaprana.
- **Keputusan**:
  1. **Orbital Integration CTA (Gambar 1)**: Membuat [`NalarOrbitalCtaSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarOrbitalCtaSection.tsx) dengan cincin orbit SVG elips, badge aplikasi melayang (OpenAI, Notion, Supabase, Slack, DB), headline dramatis *"Stop running your business by feel. Start running it with intelligence"*, dan tombol *"Book a Demo"*.
  2. **Warm Cream Enterprise Audit (Gambar 2)**: Membuat [`NalarEnterpriseAuditSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarEnterpriseAuditSection.tsx) dengan palet krem hangat `#F5F3ED`, ornamen roset spirograph geometris [`NalarSpirograph.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarSpirograph.tsx), serta baris interaktif dengan kartu preview metalik gelap SOC 2 & PP 71/2019.
  3. **Industry Photographic Carousel (Gambar 3)**: Membuat [`NalarIndustryCarouselSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarIndustryCarouselSection.tsx) dengan tombol panah navigasi melingkar `(←) (→)` dan 4 kartu foto sinematik rasio tinggi (FMCG, Retail, Perbankan, Telekomunikasi).
  4. **Impact Metric & 17.5x Bar Chart (Gambar 4)**: Membuat [`NalarImpactChartSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarImpactChartSection.tsx) dengan diagram batang bergaris (*striated striped pattern*) membandingkan 1x, 3x, dan 17.5x efisiensi AI-native, dilengkapi grid metrik 2x2 (*3x EBIT growth, 2.5 hrs/day, 54% decisions, 2 year window*).
  5. **Minimalist Dark FAQ Accordion (Gambar 5)**: Membuat [`NalarFaqSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarFaqSection.tsx) dengan garis pemisah tipis, indikator `+` / `−`, dan 9 pertanyaan kunci arsitektur enterprise.
  6. **Sinkronisasi Kode**: Seluruh file disinkronkan ke `/Users/mymac/Desktop/arkaprana-web`.

---

## ADR-008: Visual Refinement — Rotasi Orbital CTA Paling Bawah, Pengungkapan Jawaban Audit Otomatis, Cloud Aplikasi Melayang Nalarx (Gambar 3), Penghapusan Stack Hero (Gambar 4), & Ekspansi Karosel Industri Tanpa Duplikasi Gambar (Gambar 5)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User memberikan 5 instruksi presisi berdasarkan umpan balik visual gambar tangkapan layar:
  1. Gerakan animasi dinilai belum bergerak nyata: orbit dan kartu harus bergerak kontinyu 60fps.
  2. Gambar 1 (Orbital CTA *"Stop running your business by feel..."*) dipindahkan ke paling bawah halaman website, dengan badge satelit yang benar-benar mengorbit secara berputar.
  3. Gambar 2 (*Built for the enterprise*): tidak perlu diklik untuk melihat jawaban; jawaban dan preview card harus otomatis tampil bergantian secara berkala (*auto-cycling*).
  4. Gambar 3 (*"Your company runs on dozens of apps that don't talk to each other..."*): dibuatkan seksi identik berlatar kertas krem lembut berasap dengan 9 kartu satelit enterprise (Odoo, Meta Ads, Shopee, Google Sheets, Tokopedia, Accurate, SAP, Mekari Talenta, WhatsApp) yang melayang (*zero-gravity drift animation*).
  5. Gambar 4 (*ARKAPRANA SYSTEM STACK* di Hero Section): dihapus secara menyeluruh dari web sesuai permintaan tegas user.
  6. Gambar 5 (Karosel Industri): diperbanyak industrinya (termasuk Manufaktur, Energi/Pertambangan, Kesehatan/Farmasi) dan dipastikan tidak ada gambar yang berulang/ganda (100% unique per card).
- **Keputusan**:
  1. **Hero Section Redesign**: Menghapus kartu `ARKAPRANA SYSTEM STACK` dari [`HeroSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/HeroSection.tsx). Mengubah tata letak Hero menjadi terpusat, elegan, dan monumental dengan teks tajam, strip 4 metrik rekayasa, dan latar belakang gelombang kosmik yang bersih.
  2. **Auto-Cycling Enterprise Audit**: Memperbarui [`NalarEnterpriseAuditSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarEnterpriseAuditSection.tsx) dengan timer rotasi otomatis 4.2 detik, bilah progres shimmer, serta tampilan jawaban instan tanpa perlu diklik.
  3. **Floating Apps Cloud (Gambar 3)**: Membuat [`NalarFloatingAppsSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarFloatingAppsSection.tsx) dengan palet krem `#F5F3EC`, kabut dinamis `.animate-smoke`, tipografi monumental sentral, dan 9 kartu satelit terdistribusi dengan animasi mengambang `.animate-float-a/b/c/d`.
  4. **Ekspansi Karosel Industri Tanpa Duplikasi**: Memperbarui [`NalarIndustryCarouselSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarIndustryCarouselSection.tsx) menjadi 8 industri lengkap (FMCG, Manufaktur, Retail, Energi & Tambang, Perbankan, Telekomunikasi, Kesehatan & Farmasi, Data Center). Menggunakan Sharp untuk memproduksi 100% gambar unik per sektor (`industry-manufacturing.jpg`, `industry-energy.jpg`, `industry-healthcare.jpg`, `industry-retail.jpg`), menjamin nol duplikasi.
  5. **Orbital Motion & Penempatan Paling Bawah**: Memperbarui [`NalarOrbitalCtaSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarOrbitalCtaSection.tsx) dengan cincin orbit berlapis yang berputar kontinyu (`.animate-orbital-slow` dan `.animate-orbital-reverse`) dengan teknik counter-rotation sehingga ikon selalu tegak lurus sembari mengelilingi pusat. Memindahkannya ke bagian paling bawah [`page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/page.tsx) tepat sebelum konversi formulir & tanda tangan akhir.
  6. **Sinkronisasi File Desktop**: Memastikan seluruh berkas termutakhir tersinkronisasi ke `/Users/mymac/Desktop/arkaprana-web`.

---

## ADR-009: Visual Refinement — Animasi & Penataan Diagram Dampak 2030 (Gambar 1), Fotografi Nyata Estetik Karosel (Gambar 2), Halaman Awal Nalarx dengan Kabut Latar Belakang (Gambar 3), & Penguncian Eksklusif Dark Mode
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User memberikan instruksi visual baru berdasarkan 3 tangkapan layar:
  1. **Gambar 1 (*Why this matters in 2030*)**: Belum ada animasi dan visual chart dinilai "masih ngaco" (garis grid Y-axis terpisah di atas batang, batang tidak tumbuh dari garis sumbu, serta garis loreng statis).
  2. **Gambar 2 (*How Arkaprana moves work across every industry*)**: Gambar kartu selain FMCG sebelumnya menggunakan wireframe vektor SVG gelap yang tampak kosong; user meminta gambar yang merepresentasikan *aesthetic* fotografi nyata arsitektural.
  3. **Gambar 3 (*The AI Intelligence Layer...*)**: Halaman awal hero website dibuat persis seperti tangkapan layar Nalarx (headline monumental, gelombang sinus di kiri, cincin orbit di kanan, tombol *Book a Demo* + *See How it Works*, notch ponsel konsol di bawah tengah) **beserta animasi kabut/mist dinamis melayang di latar belakangnya**.
  4. **Penguncian Tema**: Menghilangkan salah satu mode agar website eksklusif dan konsisten seperti Nalarx.com (mode terang/light mode dihapus, mengunci website sepenuhnya ke mode gelap/dark luxury).
- **Keputusan**:
  1. **Animasi & Presisi Diagram Dampak 2030**: Memperbarui [`NalarImpactChartSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarImpactChartSection.tsx) dengan sistem koordinat grid horizontal terpadu (garis putus-putus 15x, 10x, 5x, 1x berada persis di latar belakang batang), animasi pertumbuhan tinggi batang saat scroll (`useInView`), efek loreng bergerak kontinyu (`.animate-scanlines`), serta grid metrik 2x2 (*3x EBIT growth, 2.5 hrs/day, 54% decisions, 2 year window*) yang selaras dengan Gambar 1.
  2. **Fotografi Nyata Estetik untuk Setiap Industri**: Menghapus seluruh wireframe vektor skematik. Memproduksi aset fotografi arsitektur nyata beresolusi tinggi dengan Sharp: `industry-manufacturing.jpg` (pabrik robotika beriluminasi emas), `industry-energy.jpg` (transmisi gardu induk nokturnal beriluminasi sian listrik), `industry-retail.jpg` (atrium kaca ritel modern hangat), dan `industry-healthcare.jpg` (fasilitas komputasi klinis steril). Setiap kartu di [`NalarIndustryCarouselSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarIndustryCarouselSection.tsx) memiliki foto arsitektur nyata yang estetik dan tanpa duplikasi.
  3. **Hero Halaman Awal dengan Kabut Latar Belakang (Gambar 3)**: Memperbarui [`HeroSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/HeroSection.tsx) dan [`NalarWaveOrbits.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarWaveOrbits.tsx) dengan lapisan kabut/mist atmosferik organik yang melayang perlahan (`.animate-mist-1` dan `.animate-mist-2`), gelombang sinus kiri dan orbit kanan terhubung di garis horizon, tombol pill putih *Book a Demo* + tautan *See How it Works*, serta notch ponsel konsol dengan chip `EN | ID` di bagian bawah yang menjembatani ke seksi konsol di bawahnya.
  4. **Penghapusan Light Mode & Penguncian Dark Mode**: Menghapus tombol `ThemeToggle` dari [`Navbar.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/layout/Navbar.tsx), menonaktifkan aturan `[data-theme="light"]` di [`globals.css`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/globals.css), serta mengunci [`ThemeContext.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/context/ThemeContext.tsx) ke `dark` secara permanen agar menyerupai pengalaman Nalarx.com yang gelap, mewah, dan terfokus.
  5. **Sinkronisasi Kode**: Menyinkronkan seluruh berkas dan aset gambar terbaru ke direktori Desktop `/Users/mymac/Desktop/arkaprana-web`.

---

## ADR-010: Presisi Visual — Batang 17.5x Menjulang di Atas Garis 15x (Gambar 1), Sentralisasi Semua Header Bab/Seksi (Gambar 2), Peniadaan Live Telemetry & Penguatan Animasi Hero (Gambar 3), Peniadaan Active Domain Inspector (Gambar 4), serta Peniadaan Form & Signature Akhir (Gambar 5)
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User memberikan 5 instruksi koreksi spesifik berdasarkan 5 tangkapan layar visual:
  1. **Gambar 1 (*Why this matters in 2030*)**: Batang animasi 17.5x masih salah karena posisinya harus berada **di atas** garis 15x di sebelah kiri.
  2. **Gambar 2 (*Skenario Nyata. Eksekusi Mandiri*)**: Setiap perpindahan bab/seksi di seluruh website harus diposisikan di tengah (*center-aligned*).
  3. **Gambar 3 (*Hero Section*)**: Animasi hero belum terlihat jelas dan user meminta untuk menghapus elemen "Live Telemetry" di bagian bawah.
  4. **Gambar 4 (*Active Domain Inspector Card*)**: Kartu inspektur domain fisik L01_FOUNDATION di seksi ekosistem arsitektur diminta untuk dihapus.
  5. **Gambar 5 (*Let's Build What's Next & Signature*)**: Formulir kontak serta segitiga tanda tangan akhir diminta untuk dihapus, menjadikan seksi Orbital CTA (*Stop running your business by feel...*) sebagai puncak penutup halaman sebelum footer.
- **Keputusan**:
  1. **Koreksi Ketinggian Batang 17.5x vs Garis 15x (Gambar 1)**: Memperbarui [`NalarImpactChartSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarImpactChartSection.tsx) dengan sistem koordinat absolut berbasis baseline `bottom-[75px]`. Garis 15x dipatok pada ketinggian `215px` di atas baseline, sedangkan batang 17.5x menjulang setinggi `280px` di atas baseline. Hal ini membuat batang 17.5x secara nyata dan dramatis **65 pixel lebih tinggi daripada garis 15x di sebelah kiri**, dengan animasi pertumbuhan saat di-scroll dan garis loreng zebra dinamis (`.animate-scanlines`).
  2. **Sentralisasi Seluruh Header Bab/Seksi (Gambar 2)**: Memverifikasi dan menyelaraskan seluruh komponen seksi website ([`NalarUsecasesSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarUsecasesSection.tsx), [`NalarProductShowcaseSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarProductShowcaseSection.tsx), [`TechnologyEcosystemSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/TechnologyEcosystemSection.tsx), [`SolutionsSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/SolutionsSection.tsx), [`NalarIndustryCarouselSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarIndustryCarouselSection.tsx), [`NalarEnterpriseAuditSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarEnterpriseAuditSection.tsx), [`NalarImpactChartSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarImpactChartSection.tsx), [`BusinessProblemSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/BusinessProblemSection.tsx), [`NalarFaqSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarFaqSection.tsx), dan [`NalarOrbitalCtaSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarOrbitalCtaSection.tsx)) agar seluruh eyebrow badge, judul utama display, dan subjudul paragraf berada di posisi **center** (`text-center`, `mx-auto`, `items-center`).
  3. **Peniadaan Live Telemetry & Penguatan Animasi Hero (Gambar 3)**: Menghapus modul notch bawah (*Live Telemetry / EN | ID*) dari [`HeroSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/HeroSection.tsx). Memperkuat animasi atmosferik kabut mist di [`NalarWaveOrbits.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarWaveOrbits.tsx) dan [`globals.css`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/globals.css) (`.animate-mist-1`, `.animate-mist-2`), serta menambahkan animasi arus laser horizon bergerak (`.animate-laser-flow`) dan gelombang sinus optik pulsatif (`.animate-wave-pulse`) yang berputar dan bercahaya jelas di latar belakang.
  4. **Peniadaan Active Domain Inspector Card (Gambar 4)**: Menghapus panel kartu `ACTIVE DOMAIN INSPECTOR` dari [`TechnologyEcosystemSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/TechnologyEcosystemSection.tsx). Struktur drawer akordeon diubah menjadi terpusat (`max-w-4xl mx-auto`) dengan integrasi tipe data `AccordionItemData` yang aman di [`EnterpriseAccordionDrawer.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/shared/EnterpriseAccordionDrawer.tsx).
  5. **Peniadaan Formulir & Tanda Tangan Akhir (Gambar 5)**: Menghapus komponen `FinalCtaSection` (formulir inquiry & channel) dan `FinalSignatureSection` (tanda tangan segitiga) dari [`src/app/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/page.tsx). Menjadikan seksi [`NalarOrbitalCtaSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarOrbitalCtaSection.tsx) (*Stop running your business by feel. Start running it with intelligence.*) sebagai penutup utama yang megah dan berputar sebelum footer.
---

## ADR-011: Ekspansi Visual Nalarx ke Seluruh Halaman (Solutions, Industries, Capabilities, Insights, About) & Kalibrasi Kabut Hero Samar-Samar
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User meminta:
  1. Menerapkan looks, animasi, dan tata kelola ruang (*spacing*) Nalarx secara menyeluruh ke seluruh menu halaman: `solutions`, `industries`, `capabilities`, `insights`, dan `about`.
  2. Memperbaiki tampilan kabut (*mist*) di latar belakang hero halaman utama (homepage) agar benar-benar terlihat melayang namun dibuat samar-samar (*subtle & organic*) agar tidak mengganggu keterbacaan teks utama.
- **Keputusan**:
  1. **Perbaikan Kabut Hero Homepage**: Mengganti arbitrary Tailwind class `bg-[radial-gradient(...)]` pada [`NalarWaveOrbits.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarWaveOrbits.tsx) menjadi `style={{ background: "radial-gradient(...)" }}` murni dengan opasitas lembut (16%-22%) dan blur 90-110px. Hal ini mengatasi masalah purging CSS parser Tailwind sehingga kabut atmosferik kini tampil nyata, melayang perlahan (`.animate-mist-1` dan `.animate-mist-2`), dan tetap samar-samar tanpa mengganggu hierarki tipografi.
  2. **Komponen Reusable Hero Subhalaman**: Membuat [`NalarPageHeroAtmosphere.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarPageHeroAtmosphere.tsx) yang memuat kabut halus, grid koordinat ambient, eyebrow pill terpusat, dan tipografi display monumental bertingkat dua (*primary + secondary text-white/45*).
  3. **Overhaul Halaman Solutions**: Memperbarui [`solutions/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/solutions/page.tsx) dan [`solutions/[slug]/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/solutions/[slug]/page.tsx) dengan palet `#08090D`, kartu bento dark glassmorphism 3D, sorotan spekuler atas, badge level arsitektur, checklist kapabilitas, dan tombol pill putih berbayang pendar.
  4. **Overhaul Halaman Industries**: Memperbarui [`industries/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/industries/page.tsx) dengan integrasi spanduk fotografi arsitektural nyata per sektor, overlay topologi teknis, kartu tantangan operasional vs lingkungan, dan tata ruang lapang berjarak proporsional.
  5. **Overhaul Halaman Capabilities**: Memperbarui [`capabilities/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/capabilities/page.tsx) dengan 8 kartu disiplin rekayasa mendalam berdesain terminal gelap, badge blueprint standar, daftar protokol, dan jaminan keselarasan regulasi lokal.
  6. **Overhaul Halaman Insights**: Memperbarui [`insights/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/insights/page.tsx) dan [`insights/[slug]/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/insights/[slug]/page.tsx) dengan kartu editorial kartu bernuansa mewah, metadata rujukan regulasi resmi, tata letak naratif teknis multi-seksi, serta format printable whitepaper resmi.
  7. **Overhaul Halaman About**: Memperbarui [`about/page.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/app/about/page.tsx) dengan seluruh header bab yang terpusat, kartu 4 prinsip fundamental, visi misi berlatar kaca gelap, 8 tahap metodologi berdisiplin, dan profil dewan rekayasa.
  8. **Harmonisasi Footer**: Memperbarui [`Footer.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/layout/Footer.tsx) ke palet gelap seragam `#06070A` dengan tipografi putih halus dan aksen cyan `#38BDF8`.
  9. **Sinkronisasi Kode Desktop**: Menyinkronkan seluruh 1.012 berkas ke direktori `/Users/mymac/Desktop/arkaprana-web` via `rsync`.

---

## ADR-012: Implementasi Dukungan Dwibahasa Penuh (ID/EN) dan Propagasi Animasi Lengkap ke Seluruh Halaman Website
- **Tanggal**: 2026-10-17
- **Status**: Accepted
- **Konteks**: User meminta:
  1. Opsi bahasa Indonesia dan bahasa Inggris secara keseluruhan di seluruh website.
  2. Menerapkan animasi dari homepage ke semua menu (solutions, capabilities, industries, insights, about, projects, contact, dll) tanpa ada satu halaman pun yang statis.
- **Keputusan**:
  1. **Arsitektur Sistem Dwibahasa Reaktif**:
     - Membuat [`LanguageContext.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/context/LanguageContext.tsx) dengan kamus komprehensif untuk bahasa Indonesia (`id`) dan bahasa Inggris (`en`), penyimpanan preferensi di `localStorage`, sinkronisasi atribut `html[lang]`, dan helper `t(key, fallback)`.
     - Mengembangkan komponen toggle pil elegan [`LanguageToggle.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/layout/LanguageToggle.tsx) bergaya Nalar (`ID | EN`) dengan indikator badge putih aktif dan animasi scale halus.
     - Mengintegrasikan `LanguageToggle` di bilah desktop [`Navbar.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/layout/Navbar.tsx) dan drawer menu navigasi mobile.
     - Menyinkronkan pemilih bahasa di konsol perintah produk [`NalarProductShowcaseSection.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/sections/NalarProductShowcaseSection.tsx) dengan state global `LanguageContext`.
  2. **Propagasi Animasi Homepage ke Seluruh Halaman**:
     - Mengintegrasikan mesin animasi [`NalarWaveOrbits.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarWaveOrbits.tsx) (kabut mist organik, gelombang sinus optik, orbit konsentris satelit, dan laser horizon bercahaya) langsung ke dalam hero subhalaman [`NalarPageHeroAtmosphere.tsx`](file:///Users/mymac/.gemini/antigravity-ide/scratch/arkaprana-web/src/components/decorative/NalarPageHeroAtmosphere.tsx).
     - Memisahkan arsitektur Client View pada setiap rute Next.js App Router (`SolutionsClientView.tsx`, `CapabilitiesClientView.tsx`, `IndustriesClientView.tsx`, `InsightsClientView.tsx`, `AboutClientView.tsx`, `ProjectsClient.tsx`, `ContactPage`) guna mempertahankan `metadata` SEO di server sekaligus menghadirkan reaktivitas dwibahasa dan animasi berbasis Intersection Observer (`ScrollReveal`).
     - Membungkus seluruh kartu solusi, kartu kapabilitas, kartu sektor industri, whitepaper wawasan, pilar dan metodologi perkenalan, metrik studi kasus, serta form konsultasi dengan `<ScrollReveal delayMs={...}>` untuk menghasilkan transisi muncul bertahap (*staggered reveal*), efek hover elevasi, dan garis batas pendar spekuler saat di-hover.
  3. **Verifikasi Kualitas**:
     - Pemeriksaan TypeScript murni (`tsc --noEmit`) berhasil tanpa satupun galat (0 errors).
     - Sinkronisasi instan ke direktori fisik Desktop `/Users/mymac/Desktop/arkaprana-web/` via `rsync`.






