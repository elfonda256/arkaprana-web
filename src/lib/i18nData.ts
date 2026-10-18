import { SolutionItem, CapabilityBlueprint, ProjectCaseStudy, InsightItem } from "./data";
import { Language } from "@/context/LanguageContext";

// ============================================================================
// 1. LOCALIZED SOLUTIONS
// ============================================================================
export const LOCALIZED_SOLUTIONS: Record<Language, SolutionItem[]> = {
  id: [
    {
      id: "network",
      slug: "arkaprana-network",
      shortSlug: "network",
      badge: "01 CONNECT",
      name: "ARKAPRANA NETWORK",
      category: "Jaringan & Konektivitas",
      headlineQuote: "Hubungkan segalanya.",
      tagline: "Konektivitas enterprise yang dirancang untuk keandalan, visibilitas, dan skalabilitas.",
      description: "Fondasi jaringan korporat generasi baru yang dirancang untuk transmisi data berkecepatan tinggi, stabilitas uptime maksimal, dan latensi ultra-rendah di seluruh cabang enterprise.",
      iconName: "Network",
      capabilities: [
        "Arsitektur Jaringan Enterprise Spine-Leaf",
        "Infrastruktur & Tulang Punggung Serat Optik",
        "Wi-Fi 7 Densitas Tinggi Tanpa Dead-Zone",
        "Pemantauan Telemetri 24/7 Proaktif",
        "Pengkabelan Terstruktur Standar TIA-942"
      ],
      problem: "Banyak korporasi menghadapi jaringan terfragmentasi, downtime tak terprediksi akibat routing statis, bottleneck throughput pada interkoneksi cabang, serta minimnya visibilitas telemetri waktu nyata.",
      solutionStatement: "ARKAPRANA merancang dan membangun arsitektur jaringan end-to-end dengan tulang punggung serat optik, perangkat switching carrier-grade, SD-WAN dinamis, dan pemantauan telemetri proaktif 24/7.",
      architectureFocus: "L1-L4 Enterprise Networking, Multi-site SD-WAN Mesh, Carrier-Neutral Optical Transit",
      architectureDetails: {
        topology: "Hierarchical Core-Distribution-Access with Dual Spine-Leaf Mesh",
        protocols: ["BGP4", "MPLS", "OSPFv3", "802.1Q VLAN", "IPSec IKEv2", "VXLAN"],
        securityTier: "802.1X Port Security, Dynamic Network Segmentation, Hardware MACsec",
        redundancy: "Dual Homed Uplinks, VRRP Failover (< 50ms), Ring Topology Failover"
      },
      useCases: [
        {
          title: "Interkoneksi Kantor Pusat & Pabrik Tersebar",
          scenario: "Menghubungkan kantor pusat di Jakarta dengan fasilitas produksi dan gudang di luar pulau melalui SD-WAN terenkripsi.",
          impact: "Latensi inter-site stabil di bawah 25ms, eliminasi single point of failure, dan penghematan biaya bandwidth hingga 40%."
        },
        {
          title: "High-Density Wi-Fi Kawasan Komersial & Kampus",
          scenario: "Penyebaran ratusan access point Wi-Fi 7 dengan seamless roaming untuk ribuan perangkat bersamaan tanpa drop koneksi.",
          impact: "Uptime 99.98%, tidak ada blind spot sinyal, dan alokasi bandwidth dinamis berdasarkan prioritas aplikasi bisnis."
        },
        {
          title: "Infrastruktur Fiber Optic Bawah Tanah Industri",
          scenario: "Pemasangan kabel serat optik single-mode armored di area pelabuhan dan pabrik dengan proteksi interferensi elektromagnetik.",
          impact: "Throughput transmisi mencapai 100Gbps, ketahanan fisik terhadap korosi air laut dan getaran mesin berat."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Survei Lokasi & Analisis Heatmap", description: "Audit spektrum frekuensi radio, jalur kabel eksisting, dan pemodelan redaman serat optik." },
        { phase: "Fase 02", title: "Cetak Biru Arsitektur & Sizing", description: "Perancangan topologi redundan, penetapan skema addressing IP, dan pemilihan vendor hardware." },
        { phase: "Fase 03", title: "Pemasangan Fisik & Komisioning", description: "Penarikan kabel serat optik, instalasi rack, patching rapi berstandar TIA-942, dan uji sertifikasi OTDR." },
        { phase: "Fase 04", title: "Integrasi Telemetri & Serah Terima", description: "Koneksi ke sistem monitoring sentral, stress-test throughput, dan pelatihan tim teknis internal." }
      ],
      faq: [
        {
          question: "Apakah ARKAPRANA dapat mengintegrasikan jaringan multi-vendor yang sudah ada?",
          answer: "Ya. Prinsip arsitektur kami vendor-agnostic. Kami mampu menyelaraskan perangkat Cisco, Aruba, Mikrotik, Juniper, maupun Huawei ke dalam satu kerangka manajemen dan telemetri yang terpadu."
        },
        {
          question: "Berapa lama jaminan garansi dan sertifikasi structured cabling yang diberikan?",
          answer: "Kami menyediakan uji sertifikasi Fluke Networks berstandar internasional dengan garansi performa jalur transmisi kabel hingga 15–25 tahun sesuai standar manufaktur kabel industri."
        }
      ],
      deliverables: ["Site Survey Heatmap", "Switching Matrix Specification", "Failover SLA Verification", "Live Telemetry Dashboard Setup"]
    },
    {
      id: "infrastructure",
      slug: "arkaprana-infrastructure",
      shortSlug: "infrastructure",
      badge: "02 COMPUTE",
      name: "ARKAPRANA INFRA",
      category: "Komputasi & Data Center",
      headlineQuote: "Fondasi komputasi misi kritis.",
      tagline: "Infrastruktur komputasi tangguh dan pusat data berstandar Tier-3+.",
      description: "Fasilitas ruang server dan modular data center berstandar Tier-3+ dengan redundansi daya 2N+1 dan pendinginan presisi untuk menjamin kelangsungan komputasi tanpa henti.",
      iconName: "Server",
      capabilities: [
        "Desain & Fit-Out Data Center Tier-3+",
        "Kluster Server Densitas Tinggi (HCI)",
        "Sistem Daya 2N+1 & Pendinginan Presisi In-Row",
        "Penyimpanan Flash NVMe Berlatensi Rendah",
        "Sistem Pemadam Api Bersih Novec 1230"
      ],
      problem: "Ruang server konvensional sering mengalami overheating, ketidakseimbangan daya, keterbatasan ruang rack, dan ketiadaan jalur daya redundan yang mengancam integritas hardware.",
      solutionStatement: "ARKAPRANA merancang fasilitas komputasi berstandar Tier-3+ dengan arsitektur daya 2N, pendinginan presisi tertutup (containment), dan server cluster berkepadatan tinggi yang siap beroperasi 24/7.",
      architectureFocus: "Tier-3+ Data Center Facilities, High-Density HCI Compute, Precision Cooling, Dual-Bus Power",
      architectureDetails: {
        topology: "Dual-Bus A+B Power Path, In-Row Chilled Water/DX, Hot-Aisle Containment",
        protocols: ["IPMI 2.0 / Redfish", "BACnet", "Modbus-TCP", "SNMPv3", "NVMe-oF"],
        securityTier: "Biometric Man-Trap, CCTV Perimeter 4K, Anti-Tamper Rack Enclosures",
        redundancy: "2N+1 UPS Flywheel/Lithium, Dual Diesel Genset with 48h Fuel Autonomy"
      },
      useCases: [
        {
          title: "Konsolidasi Pusat Komputasi Perbankan",
          scenario: "Memindahkan puluhan rak server legacy ke modul data center Tier-3 terstandarisasi dengan PUE 1.31.",
          impact: "Efisiensi konsumsi daya hingga 35%, eliminasi risiko pemadaman listrik, dan kepatuhan penuh regulasi OJK."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Audit Termal & Analisis Beban Daya", description: "Pengukuran PUE, simulasi aliran udara CFD, dan kalkulasi kapasitas cadangan UPS/genset." },
        { phase: "Fase 02", title: "Pembangunan Fasilitas & Pemipaan", description: "Pemasangan raised floor, sistem pendingin presisi in-row, dan partisi tahan api." },
        { phase: "Fase 03", title: "Instalasi Rack & Integrasi Busway", description: "Penataan kabel data berdensitas tinggi, pemasangan PDU cerdas, dan terminasi kabel tembaga/optik." },
        { phase: "Fase 04", title: "Uji Beban Terintegrasi (IST)", description: "Simulasi pemadaman daya total pada beban penuh untuk memvalidasi failover tanpa flicker." }
      ],
      faq: [
        {
          question: "Apakah fasilitas yang dibangun memenuhi standar Tier-3 Uptime Institute?",
          answer: "Ya, seluruh rancang bangun arsitektur kelistrikan, mekanikal, dan sipil kami mematuhi spesifikasi Concurrently Maintainable sesuai pedoman Uptime Institute dan ANSI/TIA-942."
        }
      ],
      deliverables: ["Tier-3 Architectural Blueprints", "CFD Thermal Simulation Matrix", "Integrated System Test (IST) Certificate", "BMS Dashboard Integration"]
    },
    {
      id: "cloud",
      slug: "arkaprana-cloud",
      shortSlug: "cloud",
      badge: "03 SOVEREIGN",
      name: "ARKAPRANA CLOUD",
      category: "Cloud Privat Berdaulat",
      headlineQuote: "Data Anda. Kendali Anda.",
      tagline: "Cloud privat berdaulat on-premise dengan kedaulatan data 100% lokal.",
      description: "Platform cloud privat berdaulat berbasis Kubernetes dan Ceph storage mandiri, menghadirkan kelincahan cloud modern dengan kedaulatan data 100% lokal tanpa biaya egress.",
      iconName: "Cloud",
      capabilities: [
        "Orkestrasi Kubernetes Enterprise On-Premise",
        "Software-Defined Storage Ceph (S3 Compatible)",
        "Zero-Egress Cost Network Architecture",
        "Pusat Pemulihan Bencana Otomatis Multi-Zona",
        "Kepatuhan Kedaulatan Data UU PDP 2024"
      ],
      problem: "Ketergantungan pada public cloud global menimbulkan risiko regulasi kedaulatan data nasional, lonjakan biaya transfer data (egress), dan hilangnya kendali penuh atas lokasi fisik aset sensitif.",
      solutionStatement: "ARKAPRANA membangun platform cloud privat berdaulat di atas perangkat keras organisasi sendiri dengan otomatisasi kontainer dan proteksi data tanpa batas geografi asing.",
      architectureFocus: "Bare-Metal Kubernetes, Software-Defined Storage (Ceph NVMe), Isolated Tenant Namespaces",
      architectureDetails: {
        topology: "Multi-Zone Kubernetes Control Plane with Ceph Distributed Object/Block Storage",
        protocols: ["CSI / CNI (Calico eBPF)", "BGP EVPN Peering", "S3 API", "gRPC Mesh"],
        securityTier: "Air-Gapped Telemetry, Encrypted at Rest (LUKS AES-256), Hardware Token RBAC",
        redundancy: "Multi-Master Quorum (3+ Nodes), Automated Pod Rescheduling, Zero-Downtime Rolling Update"
      },
      useCases: [
        {
          title: "Penyimpanan Rekam Medis & Keuangan Terisolasi",
          scenario: "Menyediakan repositori S3 on-premise berkapasitas petabyte untuk mematuhi regulasi UU PDP tanpa data dikirim ke luar negeri.",
          impact: "Biaya langganan bulanan turun hingga 60%, audit kedaulatan data lolos 100%, dan latensi akses data sub-milidetik."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Kajian Kebutuhan Beban Kerja & Kepatuhan", description: "Pemetaan data sensitif, analisis profil I/O aplikasi, dan skema pemisahan tenant." },
        { phase: "Fase 02", title: "Penggelaran Kluster Bare-Metal", description: "Instalasi hypervisor aman, konfigurasi jaringan overlay eBPF berkecepatan tinggi, dan bootstrap kluster." },
        { phase: "Fase 03", title: "Migrasi Kontainer & Database", description: "Pemindahan beban kerja dengan teknik zero-downtime dan sinkronisasi replikasi penyimpanan." },
        { phase: "Fase 04", title: "Konfigurasi Backup Tak Terhapus (WORM)", description: "Penyetelan kebijakan immutable snapshot dan uji pemulihan bencana lintas site." }
      ],
      faq: [
        {
          question: "Apakah sistem ini kompatibel dengan aplikasi berbasis API AWS S3?",
          answer: "Ya, penyimpanan Ceph yang kami gelarkan mendukung 100% spesifikasi API S3 standar industri, sehingga aplikasi Anda dapat langsung terhubung tanpa perlu refactoring kode."
        }
      ],
      deliverables: ["Private Cloud Architecture Blueprint", "Kubernetes Cluster Runbook", "Data Sovereignty Compliance Matrix", "Automated DR Playbook"]
    },
    {
      id: "security",
      slug: "arkaprana-secure",
      shortSlug: "security",
      badge: "04 DEFENSE",
      name: "ARKAPRANA SECURE",
      category: "Keamanan Siber Zero-Trust",
      headlineQuote: "Pertahanan tanpa celah kompromi.",
      tagline: "Arsitektur keamanan siber Zero-Trust dengan perlindungan kriptografi brankas HSM.",
      description: "Arsitektur pertahanan siber Zero-Trust berlapis dengan brankas kriptografi hardware HSM, mikrosegmentasi jaringan, dan kepatuhan penuh terhadap regulasi privasi data.",
      iconName: "ShieldCheck",
      capabilities: [
        "Arsitektur Akses Zero-Trust (ZTNA)",
        "Next-Generation Firewall & Mikrosegmentasi",
        "Hardware Security Module (HSM FIPS 140-3)",
        "Pusat Operasi Keamanan 24/7 (SOC) & SIEM",
        "Backup Tak Terhapus Anti-Ransomware (WORM)"
      ],
      problem: "Model keamanan perimeter konvensional runtuh saat peretas berhasil menembus VPN, memungkinkan pergerakan lateral bebas ke database vital dan penyanderaan data melalui ransomware.",
      solutionStatement: "ARKAPRANA mengimplementasikan prinsip Zero-Trust: verifikasi identitas berkelanjutan, mikrosegmentasi beban kerja, dan perlindungan kunci master di brankas silikon anti-tamper HSM.",
      architectureFocus: "Zero-Trust Network Access, Identity-Based Microsegmentation, Hardware Root of Trust",
      architectureDetails: {
        topology: "Dual-Tier Perimeter and Internal Firewalls with ZTNA Gateway and Dedicated HSM Enclave",
        protocols: ["TLS 1.3 Strict", "IPSec IKEv2 Suite-B", "802.1AE MACsec", "SAML 2.0 / OIDC", "PKCS#11"],
        securityTier: "FIPS 140-3 Level 3 Hardware Security Module, Micro-segmented VLANs, Zero-Trust RBAC",
        redundancy: "Active-Active Firewall Clustering, Dual Hardware HSM Replication, Air-gapped Immutable Backup"
      },
      useCases: [
        {
          title: "Isolasi Transaksi Core Banking & Switching",
          scenario: "Menghubungkan aplikasi mobile banking ke core database melalui terowongan terenkripsi mutual-TLS dengan verifikasi HSM fisik.",
          impact: "Eliminasi mutlak kebocoran kunci enkripsi, pemenuhan standar POJK 11/2022, dan perlindungan total terhadap serangan Man-in-the-Middle."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Asesmen Kerentanan & Threat Modeling", description: "Uji penetrasi internal/eksternal dan pemetaan jalur akses data pribadi (PII) korporat." },
        { phase: "Fase 02", title: "Penerapan Mikrosegmentasi & ZTNA", description: "Penyusunan aturan firewall berbasis identitas dan isolasi beban kerja database dari jaringan publik." },
        { phase: "Fase 03", title: "Inisialisasi HSM & Tata Kelola Kunci", description: "Pembangkitan pasangan kunci di dalam modul silikon anti-tamper dan pembagian kunci M-of-N." },
        { phase: "Fase 04", title: "Penggelaran SIEM & Integrasi SOC 24/7", description: "Pengumpulan log terpusat yang aman dari manipulasi dan simulasi respon insiden." }
      ],
      faq: [
        {
          question: "Apakah sistem keamanan ini memenuhi ketentuan UU Perlindungan Data Pribadi (UU PDP)?",
          answer: "Ya, seluruh mekanisme enkripsi, pencatatan audit log tak terhapus, dan isolasi hak akses dirancang eksplisit agar organisasi Anda mematuhi kewajiban UU PDP No. 27/2022."
        }
      ],
      deliverables: ["Zero-Trust Architecture Document", "HSM Key Ceremony Protocol", "Penetration Testing Ledger", "SOC Incident Escalation Runbook"]
    },
    {
      id: "managed-it",
      slug: "arkaprana-managed",
      shortSlug: "managed-it",
      badge: "05 ASSURE",
      name: "ARKAPRANA MANAGED",
      category: "Operasional IT Terkelola",
      headlineQuote: "Keandalan tanpa jeda.",
      tagline: "Operasional IT proaktif 24/7 dan pemantauan telemetri dengan jaminan SLA ketersediaan.",
      description: "Operasional dan pemantauan telemetri proaktif 24/7 oleh Network & Security Operations Center (NOC/SOC) bersertifikasi dengan jaminan SLA ketersediaan 99.99%.",
      iconName: "Cpu",
      capabilities: [
        "Network Operations Center (NOC) 24/7/365",
        "Jaminan SLA Ketersediaan Sistem 99.99%",
        "Pemeliharaan Preventif Hardware & Firmware",
        "Respon Cepat Mitigasi Insiden Sub-15 Menit",
        "Laporan Kinerja & Audit Kapasitas Eksekutif"
      ],
      problem: "Tim IT internal sering kali kewalahan oleh tugas troubleshooting rutin, kekurangan personel bersertifikasi untuk jaga malam 24/7, dan lambat merespons degradasi performa sebelum menjadi insiden besar.",
      solutionStatement: "ARKAPRANA mengambil alih pengawasan operasional harian dengan insinyur ahli dan telemetri otomatis, membebaskan tim internal Anda untuk fokus pada pertumbuhan bisnis inti.",
      architectureFocus: "24/7 Proactive Telemetry, Multi-Channel Alerting, SLA-Backed L1-L3 Support Engineering",
      architectureDetails: {
        topology: "Geographically Redundant NOC Centers with Out-of-Band Telemetry Access",
        protocols: ["SNMPv3", "gNMI / OpenConfig Streaming", "Syslog-ng Encrypted", "WMI / WinRM"],
        securityTier: "Dedicated Bastion Jump-Host, Multi-Factor Authentication, Session Recording",
        redundancy: "Dual Tier-3 NOC Facilities, Redundant Internet Transit, Automated Escalation Engine"
      },
      useCases: [
        {
          title: "Pengawasan Jaringan Ratusan Gerai Ritel",
          scenario: "Memantau kestabilan router dan koneksi internet di 140 cabang toko secara real-time dengan eskalasi proaktif sebelum toko beroperasi.",
          impact: "Downtime transaksi POS berkurang 92%, resolusi masalah rata-rata di bawah 15 menit, dan efisiensi biaya staf IT cabang."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Discovery Aset & Instalasi Sensor Telemetri", description: "Penyusunan inventaris perangkat keras, pemetaan topologi, dan pemasangan probe monitoring aman." },
        { phase: "Fase 02", title: "Penetapan Matriks Ambang Batas & SLA", description: "Penetapan parameter degradasi latency, jitter, utilisasi CPU, dan alur eskalasi insiden darurat." },
        { phase: "Fase 03", title: "Transisi Operasional Paralel", description: "Uji coba monitoring bersama tim klien dan penyelarasan portal tiket dukungan." },
        { phase: "Fase 04", title: "Operasional Penuh 24/7 & Review Rutin", description: "Pengawasan non-stop 24 jam dengan rapat evaluasi berkala dan optimasi performa." }
      ],
      faq: [
        {
          question: "Bagaimana cara kerja eskalasi jika terjadi insiden darurat di luar jam kerja?",
          answer: "Tim NOC kami memantau 24/7/365. Jika metrik melewati ambang kritis, insinyur L2/L3 langsung bertindak dalam waktu kurang dari 15 menit dan menghubungi penanggung jawab klien melalui hotline terenkripsi."
        }
      ],
      deliverables: ["NOC Telemetry Portal Access", "Custom Incident Escalation Matrix", "Monthly Executive SLA Report", "Quarterly Capacity Planning Audit"]
    },
    {
      id: "ai",
      slug: "arkaprana-ai",
      shortSlug: "ai",
      badge: "06 INTELLIGENCE",
      name: "ARKAPRANA AI",
      category: "Kecerdasan Buatan Privat",
      headlineQuote: "Kecerdasan internal berdaulat.",
      tagline: "Sistem AI privat on-premise dengan model bahasa berdaulat dan arsitektur RAG.",
      description: "Sistem kecerdasan buatan privat on-premise dengan model bahasa berdaulat dan arsitektur RAG yang mengindeks seluruh dokumen korporat secara aman tanpa risiko kebocoran data.",
      iconName: "BrainCircuit",
      capabilities: [
        "Penggelaran Private LLM On-Premise Air-Gapped",
        "Arsitektur Enterprise RAG Berbasis Sitasi Dokumen",
        "Otomasi Alur Kerja Kognitif & Agen Otonom",
        "Penghapusan Risiko Halusinasi Melalui Verifikasi Audit",
        "Isolasi Hak Akses Data Berbasis Peran (RBAC)"
      ],
      problem: "Karyawan membutuhkan asisten cerdas untuk menelaah ribuan dokumen SOP, kontrak, dan data rahasia, namun menggunakan layanan AI publik membahayakan kerahasiaan kekayaan intelektual perusahaan.",
      solutionStatement: "ARKAPRANA menginstal sistem AI mandiri di dalam server on-premise Anda: data tidak pernah keluar, model memberikan jawaban dengan sitasi dokumen asli, dan hak akses dikunci rapat.",
      architectureFocus: "Local GPU Inference, Vector Embeddings Pipeline, Hallucination-Guarded Retrieval",
      architectureDetails: {
        topology: "Air-Gapped GPU Compute Cluster with Local Milvus Vector Store and vLLM Serving Engine",
        protocols: ["REST / gRPC Local API", "CUDA 12+ / TensorRT-LLM", "HuggingFace SafeTensors"],
        securityTier: "100% Air-Gapped Deployment, No Internet Gateway, Document-Level Access Tokens",
        redundancy: "Dual GPU Server Clustering, Automated Failover Inference Queue, Local Model Weights Mirrored"
      },
      useCases: [
        {
          title: "Asisten Pengetahuan Kebijakan & Regulasi Hukum",
          scenario: "Mengindeks ratusan ribu halaman peraturan internal, kontrak legal, dan dokumen teknis ke dalam asisten AI privat.",
          impact: "Waktu penelusuran klausul turun dari 2 hari menjadi 3 detik, dengan akurasi jawaban 100% didukung sitasi nomor pasal asli."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Katalogisasi Data & Pembersihan Dokumen", description: "Audit format dokumen internal (PDF, DOCX, scan OCR) dan perancangan skema chunking semantik." },
        { phase: "Fase 02", title: "Setup Kluster GPU & Pipeline Embedding", description: "Instalasi server akselerator GPU, deployment vector database lokal, dan indexing data terenkripsi." },
        { phase: "Fase 03", title: "Konfigurasi Guardrails & Filter Halusinasi", description: "Penyetelan sistem RAG agar menolak menjawab jika tidak ditemukan bukti eksplisit dalam dokumen resmi." },
        { phase: "Fase 04", title: "Integrasi UI Korporat & Pelatihan Pengguna", description: "Peluncuran antarmuka web obrolan privat yang terintegrasi dengan single sign-on (SSO) perusahaan." }
      ],
      faq: [
        {
          question: "Apakah data perusahaan saya akan digunakan untuk melatih model pihak ketiga?",
          answer: "Sama sekali tidak. Sistem beroperasi 100% terisolasi (air-gapped) di fasilitas server lokal Anda. Tidak ada data, prompt, maupun log yang pernah dikirim ke internet."
        }
      ],
      deliverables: ["Private AI Architecture Specification", "Document Ingestion Pipeline", "RAG Accuracy & Grounding Benchmark", "User Prompt Engineering Guide"]
    },
    {
      id: "integration",
      slug: "arkaprana-integration",
      shortSlug: "integration",
      badge: "07 ORCHESTRATE",
      name: "ARKAPRANA INTEGRATION",
      category: "Integrasi Sistem Turnkey",
      headlineQuote: "Satu arsitektur terpadu.",
      tagline: "Harmonisasi rekayasa multi-vendor dan pertanggungjawaban teknis satu atap.",
      description: "Rekayasa integrasi sistem turnkey dan harmonisasi perangkat multi-vendor ke dalam satu ekosistem operasional terpadu dengan satu titik pertanggungjawaban resmi.",
      iconName: "Workflow",
      capabilities: [
        "Pengadaan Hardware & Perangkat Lunak Resmi Bergaransi",
        "Harmonisasi Protokol & Interoperabilitas Multi-Vendor",
        "Manajemen Proyek Rekayasa Turnkey End-to-End",
        "Pengujian Komisioning & User Acceptance Test (UAT) Resmi",
        "Dokumentasi Gambar Teknik As-Built Lengkap"
      ],
      problem: "Proyek teknologi sering mengalami keterlambatan, biaya membengkak, dan saling lempar tanggung jawab antar-vendor karena ketiadaan mitra utama yang mampu menguasai seluruh lapisan dari fisik hingga aplikasi.",
      solutionStatement: "ARKAPRANA bertindak sebagai mitra rekayasa tunggal yang bertanggung jawab penuh atas keberhasilan implementasi seluruh domain teknologi organisasi Anda.",
      architectureFocus: "Heterogeneous Hardware Interoperability, End-to-End Turnkey Delivery, Verified Commissioning",
      architectureDetails: {
        topology: "Integrated Multi-Tier Architecture Spanning L1 Physical to L7 Application Workflows",
        protocols: ["All Enterprise Standard Protocols (Ethernet, Fiber Channel, REST, gRPC, Modbus)"],
        securityTier: "Unified Security Baseline across all Procured and Integrated Hardware Subsystems",
        redundancy: "End-to-End Redundant Architecture Validation with Single Point of Accountability"
      },
      useCases: [
        {
          title: "Pembangunan Infrastruktur TI Gedung Kantor Baru",
          scenario: "Menangani seluruh pengadaan rack, server, pendingin, genset, jaringan optik, hingga sistem keamanan gedung dalam satu kontrak.",
          impact: "Proyek selesai tepat waktu tanpa friksi antar-subkontraktor, dengan dokumentasi as-built lengkap dan garansi resmi prinsipal."
        }
      ],
      implementationSteps: [
        { phase: "Fase 01", title: "Penyusunan Rencana Induk & Spesifikasi Teknis", description: "Penyelarasan kebutuhan bisnis ke dalam bill of quantities (BoQ) presisi dan jadwal implementasi." },
        { phase: "Fase 02", title: "Pengadaan Resmi dari Distributor Tunggal", description: "Penyediaan hardware bergaransi resmi prinsipal dengan sertifikat keaslian dan nomor seri terdaftar." },
        { phase: "Fase 03", title: "Instalasi Fisik & Konfigurasi Sistem", description: "Pemasangan rapi di lapangan oleh insinyur bersertifikasi sesuai standar manufaktur global." },
        { phase: "Fase 04", title: "UAT, Sertifikasi & Serah Terima Resmi", description: "Pengujian fungsional menyeluruh bersama tim klien dan penyerahan buku panduan operasional." }
      ],
      faq: [
        {
          question: "Apakah perangkat yang disediakan memiliki garansi resmi prinsipal di Indonesia?",
          answer: "Ya, kami bermitra resmi dengan distributor tunggal terdaftar di Indonesia. Seluruh perangkat dilengkapi garansi resmi suku cadang dan dukungan teknis prinsipal."
        }
      ],
      deliverables: ["Turnkey Project Execution Blueprint", "Official Distributor Warranty Certificates", "As-Built System CAD Drawings", "Comprehensive UAT Acceptance Ledger"]
    }
  ],
  en: [
    {
      id: "network",
      slug: "arkaprana-network",
      shortSlug: "network",
      badge: "01 CONNECT",
      name: "ARKAPRANA NETWORK",
      category: "Network & Connectivity",
      headlineQuote: "Connect everything.",
      tagline: "Enterprise connectivity engineered for reliability, visibility, and scale.",
      description: "Next-generation enterprise network foundations engineered for high-throughput transmission, maximum uptime stability, and sub-millisecond latency across distributed sites.",
      iconName: "Network",
      capabilities: [
        "Spine-Leaf Enterprise Network Architecture",
        "Fiber Optic Infrastructure & Optical Backbone",
        "High-Density Wi-Fi 7 with Zero Dead-Zones",
        "24/7 Proactive Real-Time Telemetry",
        "TIA-942 Rated Structured Cabling"
      ],
      problem: "Enterprises frequently struggle with fragmented networks, unpredictable downtime caused by static routing, throughput bottlenecks on branch interconnects, and a lack of real-time telemetry visibility.",
      solutionStatement: "ARKAPRANA designs and deploys end-to-end network architectures powered by optical fiber backbones, carrier-grade switching hardware, dynamic SD-WAN fabrics, and 24/7 proactive telemetry monitoring.",
      architectureFocus: "L1-L4 Enterprise Networking, Multi-site SD-WAN Mesh, Carrier-Neutral Optical Transit",
      architectureDetails: {
        topology: "Hierarchical Core-Distribution-Access with Dual Spine-Leaf Mesh",
        protocols: ["BGP4", "MPLS", "OSPFv3", "802.1Q VLAN", "IPSec IKEv2", "VXLAN"],
        securityTier: "802.1X Port Security, Dynamic Network Segmentation, Hardware MACsec",
        redundancy: "Dual Homed Uplinks, VRRP Failover (< 50ms), Ring Topology Failover"
      },
      useCases: [
        {
          title: "Interconnecting Distributed HQ, Plants & Warehouses",
          scenario: "Connecting corporate headquarters with remote industrial facilities and logistics hubs via encrypted SD-WAN mesh.",
          impact: "Inter-site latency stabilized under 25ms, single-points-of-failure eliminated, and bandwidth costs reduced by up to 40%."
        },
        {
          title: "High-Density Commercial & Campus Wi-Fi",
          scenario: "Deploying hundreds of Wi-Fi 7 access points with seamless client roaming for thousands of concurrent devices without drops.",
          impact: "99.98% uptime, zero signal dead spots, and automated dynamic bandwidth allocation prioritized by business critical applications."
        },
        {
          title: "Armored Industrial Underground Fiber Backbone",
          scenario: "Installing single-mode armored optical fiber runs across maritime ports and factory grounds with electromagnetic interference shielding.",
          impact: "100Gbps transmission throughput with full physical resistance against saltwater corrosion and heavy machinery vibrations."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Comprehensive Site Survey & Heatmap", description: "Radio frequency spectrum audits, existing cable path inspections, and optical attenuation modeling." },
        { phase: "Phase 02", title: "Architectural Blueprint & Sizing", description: "Redundant topology design, IP addressing scheme planning, and vendor-neutral hardware selection." },
        { phase: "Phase 03", title: "Physical Deployment & Commissioning", description: "Optical fiber pulling, server rack installation, TIA-942 compliant patching, and Fluke OTDR testing." },
        { phase: "Phase 04", title: "Telemetry Integration & Handover", description: "Integration into central NOC telemetry, throughput stress testing, and internal engineering team training." }
      ],
      faq: [
        {
          question: "Can ARKAPRANA integrate with our existing multi-vendor network?",
          answer: "Yes. Our architecture discipline is strictly vendor-agnostic. We seamlessly align Cisco, Aruba, MikroTik, Juniper, and Huawei equipment into a single unified telemetry and management framework."
        },
        {
          question: "What certification and warranty are provided for structured cabling?",
          answer: "We deliver international-standard Fluke Networks test certification reports backed by manufacturer cable transmission warranties ranging from 15 to 25 years."
        }
      ],
      deliverables: ["Site Survey Heatmap", "Switching Matrix Specification", "Failover SLA Verification", "Live Telemetry Dashboard Setup"]
    },
    {
      id: "infrastructure",
      slug: "arkaprana-infrastructure",
      shortSlug: "infrastructure",
      badge: "02 COMPUTE",
      name: "ARKAPRANA INFRA",
      category: "Compute & Data Center Engineering",
      headlineQuote: "Mission-critical compute foundations.",
      tagline: "Resilient compute infrastructure and Tier-3+ precision data centers.",
      description: "Tier-3+ modular data center facilities with 2N+1 power redundancy, in-row precision cooling, and high-density compute nodes engineered for non-stop operations.",
      iconName: "Server",
      capabilities: [
        "Tier-3+ Data Center Design & Turnkey Fit-Out",
        "High-Density Hyperconverged Compute Clusters",
        "2N+1 Redundant Power & In-Row Precision Cooling",
        "Sub-Millisecond Flash NVMe SAN/NAS Storage",
        "Novec 1230 Clean Agent Fire Suppression"
      ],
      problem: "Traditional server rooms suffer from hotspots, unmanaged power distribution, rack space constraints, and lack of concurrently maintainable power paths, endangering mission-critical servers.",
      solutionStatement: "ARKAPRANA engineers Tier-3+ compute environments with 2N electrical distribution, cold/hot aisle containment, precision cooling, and hyperconverged infrastructure ready for 24/7 reliability.",
      architectureFocus: "Tier-3+ Data Center Facilities, High-Density HCI Compute, Precision Cooling, Dual-Bus Power",
      architectureDetails: {
        topology: "Dual-Bus A+B Power Path, In-Row Chilled Water/DX, Hot-Aisle Containment",
        protocols: ["IPMI 2.0 / Redfish", "BACnet", "Modbus-TCP", "SNMPv3", "NVMe-oF"],
        securityTier: "Biometric Man-Trap, CCTV Perimeter 4K, Anti-Tamper Rack Enclosures",
        redundancy: "2N+1 UPS Flywheel/Lithium, Dual Diesel Genset with 48h Fuel Autonomy"
      },
      useCases: [
        {
          title: "Banking Compute Center Modernization",
          scenario: "Consolidating legacy distributed server rooms into a modern Tier-3 modular facility with a 1.31 PUE rating.",
          impact: "35% energy efficiency improvement, zero electrical outage vulnerability, and full OJK regulatory compliance."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Thermal Audit & Power Capacity Analysis", description: "PUE benchmarking, CFD airflow simulations, and redundant UPS/generator capacity calculations." },
        { phase: "Phase 02", title: "Facility Fit-Out & Mechanical Piping", description: "Raised floor installation, in-row precision cooling setups, and fire-rated thermal barriers." },
        { phase: "Phase 03", title: "High-Density Rack & Busway Deployment", description: "High-density cable management, intelligent PDU mounting, and certified copper/fiber terminations." },
        { phase: "Phase 04", title: "Integrated System Test (IST)", description: "Simulating full power outage failovers at 100% compute load to verify uninterrupted concurrent maintainability." }
      ],
      faq: [
        {
          question: "Do the facilities meet Uptime Institute Tier-3 specifications?",
          answer: "Yes, our electrical, mechanical, and physical designs adhere to Concurrently Maintainable standards aligned with Uptime Institute Tier III and ANSI/TIA-942 Rated 3 standards."
        }
      ],
      deliverables: ["Tier-3 Architectural Blueprints", "CFD Thermal Simulation Matrix", "Integrated System Test (IST) Certificate", "BMS Dashboard Integration"]
    },
    {
      id: "cloud",
      slug: "arkaprana-cloud",
      shortSlug: "cloud",
      badge: "03 SOVEREIGN",
      name: "ARKAPRANA CLOUD",
      category: "Sovereign Private Cloud",
      headlineQuote: "Your data. Your infrastructure. Your control.",
      tagline: "Sovereign on-premise private cloud with 100% domestic data sovereignty.",
      description: "Sovereign private cloud platform built on enterprise Kubernetes and Ceph distributed storage, delivering modern cloud agility with 100% domestic data residency and zero egress fees.",
      iconName: "Cloud",
      capabilities: [
        "On-Premise Enterprise Kubernetes Orchestration",
        "Ceph Software-Defined Storage (S3 Compatible)",
        "Zero-Egress Cost Architecture",
        "Automated Multi-Zone Disaster Recovery",
        "Indonesian PDP Law & PP 71/2019 Compliance"
      ],
      problem: "Over-reliance on public hyperscalers triggers unpredictable egress fees, regulatory compliance risks for confidential data, and loss of control over physical storage jurisdictions.",
      solutionStatement: "ARKAPRANA engineers sovereign private clouds hosted on client-owned servers, providing containerized scalability, object storage APIs, and complete data isolation.",
      architectureFocus: "Bare-Metal Kubernetes, Software-Defined Storage (Ceph NVMe), Isolated Tenant Namespaces",
      architectureDetails: {
        topology: "Multi-Zone Kubernetes Control Plane with Ceph Distributed Object/Block Storage",
        protocols: ["CSI / CNI (Calico eBPF)", "BGP EVPN Peering", "S3 API", "gRPC Mesh"],
        securityTier: "Air-Gapped Telemetry, Encrypted at Rest (LUKS AES-256), Hardware Token RBAC",
        redundancy: "Multi-Master Quorum (3+ Nodes), Automated Pod Rescheduling, Zero-Downtime Rolling Update"
      },
      useCases: [
        {
          title: "Healthcare & Financial Data Isolation",
          scenario: "Providing petabyte-scale on-premise S3 storage to satisfy Indonesian PDP Law mandates without international data transfer.",
          impact: "60% recurring cloud cost reduction, 100% regulatory audit compliance, and sub-millisecond local data retrieval."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Workload Assessment & Compliance Blueprint", description: "Sensitive data mapping, storage I/O profile profiling, and multi-tenant isolation planning." },
        { phase: "Phase 02", title: "Bare-Metal Cluster Provisioning", description: "Hardened hypervisor deployment, high-speed eBPF overlay networking, and cluster bootstrapping." },
        { phase: "Phase 03", title: "Container & Database Migration", description: "Zero-downtime workload cutover with live data replication and consistency verification." },
        { phase: "Phase 04", title: "Immutable Backup (WORM) Policy Configuration", description: "Configuring air-gapped snapshots and conducting cross-site disaster recovery drills." }
      ],
      faq: [
        {
          question: "Is this private cloud fully compatible with standard AWS S3 APIs?",
          answer: "Yes, our deployed Ceph distributed storage provides 100% S3-compatible APIs, allowing your applications to connect seamlessly without any code refactoring."
        }
      ],
      deliverables: ["Private Cloud Architecture Blueprint", "Kubernetes Cluster Runbook", "Data Sovereignty Compliance Matrix", "Automated DR Playbook"]
    },
    {
      id: "security",
      slug: "arkaprana-secure",
      shortSlug: "security",
      badge: "04 DEFENSE",
      name: "ARKAPRANA SECURE",
      category: "Zero-Trust Cybersecurity",
      headlineQuote: "Defense without compromise.",
      tagline: "Zero-Trust defense-in-depth with hardware-sealed FIPS 140-3 HSM vaults.",
      description: "Defense-in-depth Zero-Trust cybersecurity architecture featuring hardware HSM cryptographic enclaves, network microsegmentation, and rigorous compliance with regulatory mandates.",
      iconName: "ShieldCheck",
      capabilities: [
        "Zero-Trust Network Access (ZTNA) Architecture",
        "Next-Generation Firewalling & Microsegmentation",
        "FIPS 140-3 Level 3 Hardware Security Modules (HSM)",
        "24/7 Managed Security Operations (SOC) & SIEM",
        "Immutable Air-Gapped Anti-Ransomware Backups"
      ],
      problem: "Traditional perimeter security collapses once an intruder breaches VPN credentials, granting unrestricted lateral movement to core databases and risking catastrophic ransomware extortion.",
      solutionStatement: "ARKAPRANA enforces strict Zero-Trust principles: continuous identity verification, dynamic workload microsegmentation, and cryptographic master key containment inside anti-tamper silicon.",
      architectureFocus: "Zero-Trust Network Access, Identity-Based Microsegmentation, Hardware Root of Trust",
      architectureDetails: {
        topology: "Dual-Tier Perimeter and Internal Firewalls with ZTNA Gateway and Dedicated HSM Enclave",
        protocols: ["TLS 1.3 Strict", "IPSec IKEv2 Suite-B", "802.1AE MACsec", "SAML 2.0 / OIDC", "PKCS#11"],
        securityTier: "FIPS 140-3 Level 3 Hardware Security Module, Micro-segmented VLANs, Zero-Trust RBAC",
        redundancy: "Active-Active Firewall Clustering, Dual Hardware HSM Replication, Air-gapped Immutable Backup"
      },
      useCases: [
        {
          title: "Core Banking & Transaction Gateway Isolation",
          scenario: "Connecting mobile banking gateways to core databases via mutual-TLS micro-tunnels with physical HSM key verification.",
          impact: "Zero cryptographic key extraction vulnerability, 100% compliance with POJK 11/2022, and immunity against Man-in-the-Middle exploits."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Threat Modeling & Vulnerability Assessment", description: "Internal/external penetration testing and corporate PII data flow mapping." },
        { phase: "Phase 02", title: "Microsegmentation & ZTNA Rollout", description: "Identity-based firewall policies and isolation of database workloads from general office subnets." },
        { phase: "Phase 03", title: "HSM Key Ceremony & Vault Initialization", description: "Generating master encryption keys inside anti-tamper silicon with M-of-N split governance." },
        { phase: "Phase 04", title: "SIEM Deployment & 24/7 SOC Onboarding", description: "Tamper-proof centralized log aggregation and automated incident response runbook testing." }
      ],
      faq: [
        {
          question: "Does this security architecture comply with the Indonesian PDP Law?",
          answer: "Yes, all encryption standards, immutable audit trails, and strict access controls are designed explicitly to fulfill all obligations under Indonesian PDP Law No. 27/2022."
        }
      ],
      deliverables: ["Zero-Trust Architecture Document", "HSM Key Ceremony Protocol", "Penetration Testing Ledger", "SOC Incident Escalation Runbook"]
    },
    {
      id: "managed-it",
      slug: "arkaprana-managed",
      shortSlug: "managed-it",
      badge: "05 ASSURE",
      name: "ARKAPRANA MANAGED",
      category: "Managed IT Operations",
      headlineQuote: "Uninterrupted operational resilience.",
      tagline: "Proactive 24/7 IT operations and telemetry backed by guaranteed availability SLAs.",
      description: "Proactive 24/7 operational and telemetry monitoring by certified NOC/SOC engineering teams backed by a 99.99% availability SLA guarantee.",
      iconName: "Cpu",
      capabilities: [
        "Dedicated 24/7/365 Network Operations Center (NOC)",
        "Guaranteed 99.99% Enterprise Uptime SLA",
        "Preventive Hardware & Firmware Maintenance",
        "Sub-15 Minute Rapid Incident Mitigation Response",
        "Executive Capacity & Infrastructure Health Audits"
      ],
      problem: "Internal IT teams are often overwhelmed by routine troubleshooting, lack certified 24/7 night-shift engineers, and discover performance degradation only after outages occur.",
      solutionStatement: "ARKAPRANA manages round-the-clock operations with certified engineers and automated telemetry, freeing your internal teams to focus on strategic core innovation.",
      architectureFocus: "24/7 Proactive Telemetry, Multi-Channel Alerting, SLA-Backed L1-L3 Support Engineering",
      architectureDetails: {
        topology: "Geographically Redundant NOC Centers with Out-of-Band Telemetry Access",
        protocols: ["SNMPv3", "gNMI / OpenConfig Streaming", "Syslog-ng Encrypted", "WMI / WinRM"],
        securityTier: "Dedicated Bastion Jump-Host, Multi-Factor Authentication, Session Recording",
        redundancy: "Dual Tier-3 NOC Facilities, Redundant Internet Transit, Automated Escalation Engine"
      },
      useCases: [
        {
          title: "Multi-Site Retail Chain Infrastructure Oversight",
          scenario: "Monitoring network routers and POS terminals across 140 branches in real-time with proactive mitigation before morning store openings.",
          impact: "POS transaction downtime reduced by 92%, average incident resolution under 15 minutes, and lower operational overhead."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Asset Discovery & Telemetry Probe Setup", description: "Hardware inventory verification, topology mapping, and secure monitoring probe deployment." },
        { phase: "Phase 02", title: "Threshold & SLA Escalation Matrix Design", description: "Configuring latency/jitter thresholds, CPU load triggers, and emergency escalation paths." },
        { phase: "Phase 03", title: "Parallel Operational Shadowing", description: "Collaborative incident monitoring drills with client teams to calibrate support ticketing." },
        { phase: "Phase 04", title: "Full 24/7 Handover & Continuous Reviews", description: "Non-stop monitoring with scheduled executive health audits and capacity optimization sessions." }
      ],
      faq: [
        {
          question: "How does incident escalation work during off-hours or holidays?",
          answer: "Our NOC operates 24/7/365. When anomalous thresholds are detected, L2/L3 engineers intervene in under 15 minutes and alert designated client contacts via encrypted hotlines."
        }
      ],
      deliverables: ["NOC Telemetry Portal Access", "Custom Incident Escalation Matrix", "Monthly Executive SLA Report", "Quarterly Capacity Planning Audit"]
    },
    {
      id: "ai",
      slug: "arkaprana-ai",
      shortSlug: "ai",
      badge: "06 INTELLIGENCE",
      name: "ARKAPRANA AI",
      category: "Private Sovereign AI",
      headlineQuote: "Sovereign internal intelligence.",
      tagline: "Private on-premise AI systems with sovereign models and grounded RAG.",
      description: "Private on-premise artificial intelligence systems with sovereign LLMs and enterprise RAG architecture that indexes corporate repositories securely without data leakage.",
      iconName: "BrainCircuit",
      capabilities: [
        "Air-Gapped On-Premise Sovereign LLM Deployment",
        "Citation-Grounded Enterprise RAG Architecture",
        "Cognitive Workflow Robotics & Autonomous Agents",
        "Hallucination Elimination via Verified Grounding",
        "Departmental Role-Based Access Control (RBAC)"
      ],
      problem: "Knowledge workers need intelligent assistance to parse complex contracts, technical manuals, and sensitive archives, but using public cloud AI exposes proprietary data to leak risks.",
      solutionStatement: "ARKAPRANA deploys self-contained AI systems directly on your on-premise hardware: data never leaves, answers cite source paragraphs, and access controls remain inviolable.",
      architectureFocus: "Local GPU Inference, Vector Embeddings Pipeline, Hallucination-Guarded Retrieval",
      architectureDetails: {
        topology: "Air-Gapped GPU Compute Cluster with Local Milvus Vector Store and vLLM Serving Engine",
        protocols: ["REST / gRPC Local API", "CUDA 12+ / TensorRT-LLM", "HuggingFace SafeTensors"],
        securityTier: "100% Air-Gapped Deployment, No Internet Gateway, Document-Level Access Tokens",
        redundancy: "Dual GPU Server Clustering, Automated Failover Inference Queue, Local Model Weights Mirrored"
      },
      useCases: [
        {
          title: "Corporate Legal & Compliance Knowledge Assistant",
          scenario: "Indexing hundreds of thousands of internal policies, concession agreements, and technical standards into a private assistant.",
          impact: "Contract clause review time collapsed from 2 days to 3 seconds, with 100% factual accuracy anchored by source article citations."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Data Cataloging & Document Cleaning", description: "Auditing internal document formats (PDFs, scans, spreadsheets) and designing semantic chunking." },
        { phase: "Phase 02", title: "GPU Cluster Setup & Vector Pipeline", description: "Deploying GPU compute accelerators, local vector databases, and encrypted embedding ingestion." },
        { phase: "Phase 03", title: "Guardrails & Anti-Hallucination Tuning", description: "Configuring retrieval thresholds to strictly decline responses when factual citations cannot be grounded." },
        { phase: "Phase 04", title: "Enterprise UI Rollout & Staff Training", description: "Launching private conversational web interfaces integrated with corporate Single Sign-On (SSO)." }
      ],
      faq: [
        {
          question: "Will our company data ever be used to train external or public models?",
          answer: "Never. The entire AI runtime operates strictly on-premise in an air-gapped configuration. No prompts, documents, or logs are ever transmitted over the public internet."
        }
      ],
      deliverables: ["Private AI Architecture Specification", "Document Ingestion Pipeline", "RAG Accuracy & Grounding Benchmark", "User Prompt Engineering Guide"]
    },
    {
      id: "integration",
      slug: "arkaprana-integration",
      shortSlug: "integration",
      badge: "07 ORCHESTRATE",
      name: "ARKAPRANA INTEGRATION",
      category: "Turnkey System Integration",
      headlineQuote: "One unified architecture.",
      tagline: "Turnkey multi-vendor engineering and single-point technical accountability.",
      description: "Turnkey system integration engineering and multi-vendor hardware harmonization into one unified operational ecosystem backed by single-point engineering accountability.",
      iconName: "Workflow",
      capabilities: [
        "Official Authorized Hardware & Software Procurement",
        "Multi-Vendor Protocol Synchronization & Interoperability",
        "End-to-End Turnkey Engineering Project Management",
        "Certified Commissioning & User Acceptance Testing (UAT)",
        "Comprehensive As-Built Technical CAD Documentation"
      ],
      problem: "Complex IT rollouts suffer from finger-pointing, unexpected cost overruns, and prolonged delays when multiple fragmented vendors handle physical and digital layers separately.",
      solutionStatement: "ARKAPRANA acts as your primary engineering contractor, taking full technical and financial accountability for designing, procuring, and commissioning your entire infrastructure.",
      architectureFocus: "Heterogeneous Hardware Interoperability, End-to-End Turnkey Delivery, Verified Commissioning",
      architectureDetails: {
        topology: "Integrated Multi-Tier Architecture Spanning L1 Physical to L7 Application Workflows",
        protocols: ["All Enterprise Standard Protocols (Ethernet, Fiber Channel, REST, gRPC, Modbus)"],
        securityTier: "Unified Security Baseline across all Procured and Integrated Hardware Subsystems",
        redundancy: "End-to-End Redundant Architecture Validation with Single Point of Accountability"
      },
      useCases: [
        {
          title: "New Corporate Headquarters IT Infrastructure",
          scenario: "Procuring and deploying data center racks, generators, optical risers, switching fabrics, and physical security under one contract.",
          impact: "Project completed on schedule with zero inter-vendor friction, certified as-built engineering drawings, and direct distributor warranties."
        }
      ],
      implementationSteps: [
        { phase: "Phase 01", title: "Master Planning & Technical Specification", description: "Translating business goals into precise Bills of Quantities (BoQ) and synchronized milestone timelines." },
        { phase: "Phase 02", title: "Authorized Channel Procurement", description: "Procuring hardware exclusively through authorized domestic distributors with registered serial numbers." },
        { phase: "Phase 03", title: "Physical Installation & System Configuration", description: "Structured field deployment by certified system engineers adhering to global manufacturer standards." },
        { phase: "Phase 04", title: "UAT, Certification & Official Handover", description: "Rigorous joint acceptance testing with client teams, accompanied by comprehensive operating manuals." }
      ],
      faq: [
        {
          question: "Does the supplied equipment carry official manufacturer warranties?",
          answer: "Yes, we procure strictly through authorized distributor channels in Indonesia. Every component includes valid manufacturer warranties, serial verification, and SLA spare-part guarantees."
        }
      ],
      deliverables: ["Turnkey Project Execution Blueprint", "Official Distributor Warranty Certificates", "As-Built System CAD Drawings", "Comprehensive UAT Acceptance Ledger"]
    }
  ]
};

export function getLocalizedSolutions(lang: Language): SolutionItem[] {
  return LOCALIZED_SOLUTIONS[lang] || LOCALIZED_SOLUTIONS.id;
}

export function getLocalizedSolutionBySlug(slug: string, lang: Language): SolutionItem | undefined {
  const list = getLocalizedSolutions(lang);
  return list.find((s) => s.slug === slug || s.shortSlug === slug || s.id === slug);
}

// ============================================================================
// 2. LOCALIZED CAPABILITIES
// ============================================================================
export const LOCALIZED_CAPABILITIES: Record<Language, CapabilityBlueprint[]> = {
  id: [
    {
      id: "cap-network",
      slug: "network-engineering",
      number: "01",
      title: "REKAYASA JARINGAN",
      category: "Konektivitas & Perutean Enterprise",
      whatWeDo: "Merancang, menggelar, dan mengoptimalkan infrastruktur jaringan korporat skala besar, backbone serat optik, interkoneksi SD-WAN multi-site, dan enterprise Wi-Fi densitas tinggi.",
      typicalRequirements: [
        "Interkoneksi kantor pusat, pabrik, gudang, dan cabang terdistribusi",
        "Kebutuhan throughput tinggi dengan latensi konsisten sub-25ms",
        "Eliminasi single-point-of-failure dengan dual uplink BGP redundan",
        "Cakupan Wi-Fi 7 densitas tinggi tanpa dead-zone untuk ribuan perangkat"
      ],
      potentialSolution: "ARKAPRANA NETWORK — Carrier-grade spine-leaf switching fabric, dual BGP routing, hardware-accelerated SD-WAN mesh, dan pemantauan telemetri waktu nyata 24/7.",
      engagementModel: "Project Delivery (Turnkey Rollout) atau Managed Network SLA",
      ctaText: "Konsultasikan Rekayasa Jaringan →",
      ctaHref: "/contact?solution=NETWORK%20ENGINEERING",
      challenge: "Organisasi dengan operasional terdistribusi kerap menghadapi fragmentasi jaringan, downtime tak terprediksi akibat routing statis, bottleneck throughput pada interkoneksi cabang, serta minimnya visibilitas telemetri waktu nyata.",
      approach: "Membangun arsitektur jaringan berbasis hierarki Spine-Leaf dengan tulang punggung serat optik, perangkat switching carrier-grade, SD-WAN dinamis, dan pemantauan telemetri proaktif 24/7.",
      architecture: "Spine-leaf switching fabric, dual carrier-neutral BGP uplinks, sub-millisecond core routing, hardware-accelerated IPSec tunnels, and automated QoS packet prioritization.",
      potentialOutcome: "Konektivitas enterprise dengan ketersediaan tinggi (high-availability), eliminasi single-point-of-failure, serta visibilitas komprehensif atas seluruh lalu lintas data organisasi.",
      keyProtocols: ["BGP4", "MPLS", "OSPFv3", "VXLAN", "IEEE 802.1X"],
      deliverables: ["Site Survey Heatmap", "Switching Matrix Specification", "Failover SLA Verification", "Live Telemetry Dashboard Setup"]
    },
    {
      id: "cap-datacenter",
      slug: "infrastructure-engineering",
      number: "02",
      title: "REKAYASA INFRASTRUKTUR",
      category: "Komputasi & Rekayasa Data Center",
      whatWeDo: "Membangun fasilitas ruang server dan data center Tier-3+, kluster server berkepadatan tinggi, penyimpanan flash NVMe latensi rendah, serta sistem daya dan pendinginan presisi.",
      typicalRequirements: [
        "Modernisasi ruang server atau pembangunan fasilitas data center baru",
        "Konsolidasi puluhan server fisik menjadi kluster virtualisasi terpadu",
        "Jaminan ketersediaan daya 2N+1 tanpa gangguan saat pemeliharaan",
        "Sistem pendingin presisi in-row dengan efisiensi energi PUE optimal"
      ],
      potentialSolution: "ARKAPRANA INFRA — Tier-3+ modular compute facilities, dual-feed UPS path, clean agent fire suppression, dan hyperconverged high-density compute nodes.",
      engagementModel: "Project Delivery (Facility Fit-Out) & Infrastructure Consulting",
      ctaText: "Konsultasikan Rekayasa Infrastruktur →",
      ctaHref: "/contact?solution=INFRASTRUCTURE%20ENGINEERING",
      challenge: "Kebutuhan komputasi yang terus bertambah memerlukan ruang server berstandar tinggi dengan kendali suhu presisi, keandalan daya tanpa henti, dan keamanan fisik berlapis.",
      approach: "Merancang fasilitas komputasi berstandar Tier-3+, modular server cluster berkepadatan tinggi, penyimpanan flash berlatensi sub-milidetik, dan proteksi lingkungan komprehensif.",
      architecture: "Dual 2N+1 UPS power paths, Hot/Cold Aisle containment, In-row precision CRAC cooling, clean agent Novec 1230 fire suppression, and biometric interlocking security.",
      potentialOutcome: "Fondasi komputasi fisik yang tahan banting, efisiensi konsumsi daya (PUE optimal), dan jaminan pemeliharaan tanpa mematikan sistem (concurrent maintainability).",
      keyProtocols: ["IPMI 2.0 / Redfish", "BACnet Environmental", "SNMPv3", "NVMe-oF", "RoCEv2"],
      deliverables: ["Tier-3 Architectural Blueprint", "CFD Thermal Simulation", "Power Distribution Schedule", "Integrated System Test (IST) Certificate"]
    },
    {
      id: "cap-cloud",
      slug: "cloud",
      number: "03",
      title: "CLOUD BERDAULAT",
      category: "Cloud Privat Berdaulat & Kubernetes",
      whatWeDo: "Membangun arsitektur private cloud berdaulat dan hybrid cluster di atas infrastruktur server mandiri, memberikan kelincahan cloud dengan kedaulatan data 100% lokal.",
      typicalRequirements: [
        "Kepatuhan kedaulatan data (UU PDP / regulasi perbankan & pemerintah)",
        "Pencegahan lonjakan biaya egress dan biaya langganan cloud publik",
        "Orkestrasi kontainer Kubernetes skala besar dengan storage S3 lokal",
        "Mekanisme disaster recovery otomatis lintas zona terpisah"
      ],
      potentialSolution: "ARKAPRANA CLOUD — Sovereign private cloud platform dengan orkestrasi Kubernetes enterprise, Ceph software-defined storage, dan zero-data egress fees.",
      engagementModel: "Architecture Implementation & Hybrid Cloud Consulting",
      ctaText: "Konsultasikan Arsitektur Cloud →",
      ctaHref: "/contact?solution=CLOUD",
      challenge: "Kebutuhan elastisitas komputasi modern sering kali berbenturan dengan lonjakan biaya bandwidth dan keharusan kepatuhan kedaulatan data di dalam negeri.",
      approach: "Membangun private cloud berdaulat berbasis teknologi open-source enterprise dan orkestrasi Kubernetes di atas infrastruktur server milik organisasi.",
      architecture: "Multi-node hypervisor cluster, software-defined storage (Ceph S3 compatible), automated container scheduling, and multi-zone disaster recovery failover.",
      potentialOutcome: "Lingkungan komputasi cloud-native mandiri dengan latensi rendah, kontrol tata kelola data absolut, dan efisiensi biaya kepemilikan (TCO) jangka panjang.",
      keyProtocols: ["eBPF Networking", "Ceph S3 API", "OpenStack API", "BGP EVPN", "gRPC Mesh"],
      deliverables: ["Private Cloud Architecture Specification", "Kubernetes Multi-Tenant Runbook", "Ceph Cluster Health Baseline", "Disaster Recovery Automation Script"]
    },
    {
      id: "cap-security",
      slug: "cybersecurity",
      number: "04",
      title: "PERTAHANAN SIBER",
      category: "Keamanan Zero-Trust & HSM",
      whatWeDo: "Membangun pertahanan siber Zero-Trust berlapis: dari segmentasi mikro jaringan dan firewall generasi baru hingga pengamanan kunci kriptografi dengan hardware HSM FIPS 140-3.",
      typicalRequirements: [
        "Audit kepatuhan regulasi siber (POJK 11/2022, UU PDP No. 27/2022, ISO 27001)",
        "Pencegahan penyebaran lateral ransomware di jaringan internal",
        "Pengamanan kunci enkripsi master di silikon anti-tamper bersertifikasi",
        "Pemantauan ancaman dan investigasi insiden siber waktu nyata 24/7"
      ],
      potentialSolution: "ARKAPRANA SECURE — Arsitektur Zero-Trust Network Access (ZTNA), brankas hardware HSM terisolasi, SIEM/SOC terkelola, dan immutable air-gapped backup.",
      engagementModel: "Security Implementation & Managed SOC Operations",
      ctaText: "Konsultasikan Keamanan Siber →",
      ctaHref: "/contact?solution=CYBERSECURITY",
      challenge: "Serangan siber modern semakin canggih dan mampu menembus perimeter tradisional. Sekali peretas masuk, data sensitif dapat diekfiltrasi atau dienkripsi untuk pemerasan.",
      approach: "Menerapkan prinsip 'Never Trust, Always Verify' di setiap titik kontak, mengisolasi beban kerja dengan mikrosegmentasi, dan menyimpan kunci dekripsi di hardware HSM.",
      architecture: "Microsegmented VLANs with identity-aware next-gen firewalls, dedicated FIPS 140-3 HSM enclaves, multi-factor authentication for all administrative access, and real-time SIEM log correlation.",
      potentialOutcome: "Postur keamanan siber yang kokoh, kepatuhan penuh terhadap regulasi nasional, eliminasi risiko lateral movement, dan kesiapan pemulihan instan saat insiden terjadi.",
      keyProtocols: ["TLS 1.3 Strict", "IPSec IKEv2", "IEEE 802.1AE MACsec", "SAML 2.0 / OIDC", "PKCS#11"],
      deliverables: ["Zero-Trust Architecture Document", "Threat Modeling & Pen-test Report", "HSM Key Management Protocol", "Incident Response Playbook"]
    },
    {
      id: "cap-managed",
      slug: "managed-it",
      number: "05",
      title: "OPERASIONAL TERKELOLA",
      category: "Dukungan & Operasional IT Proaktif",
      whatWeDo: "Menyediakan layanan pengelolaan, pemeliharaan preventif, dan pemantauan telemetri infrastruktur 24/7/365 dengan jaminan SLA ketersediaan 99.99%.",
      typicalRequirements: [
        "Kebutuhan tim teknis bersertifikasi untuk pemantauan malam hari 24/7",
        "Penanganan cepat insiden kritis sebelum berdampak pada operasional bisnis",
        "Manajemen pembaruan firmware dan penambalan kerentanan keamanan berkala",
        "Pelaporan berkala kapasitas komputasi dan performa jaringan untuk eksekutif"
      ],
      potentialSolution: "ARKAPRANA MANAGED — Layanan terkelola komprehensif didukung Network & Security Operations Center (NOC/SOC) terdedikasi dengan eskalasi insiden sub-15 menit.",
      engagementModel: "Managed Services SLA (Bulanan/Tahunan)",
      ctaText: "Konsultasikan Operasional IT →",
      ctaHref: "/contact?solution=MANAGED%20IT",
      challenge: "Mengelola infrastruktur yang terus berkembang membutuhkan tim spesialis yang siaga setiap saat. Keterbatasan personel internal sering kali menyebabkan insiden terlambat terdeteksi.",
      approach: "Menghubungkan seluruh perangkat ke sistem pemantauan telemetri sentral kami yang diawasi oleh teknisi bersertifikasi dengan prosedur eskalasi terstandarisasi.",
      architecture: "Dual geographically separated NOC/SOC centers, out-of-band telemetry collectors, automated alert correlation engine, and secure encrypted ticketing portal.",
      potentialOutcome: "Operasional teknologi yang stabil, penurunan waktu henti (MTTR) hingga 90%, kepatuhan SLA yang terukur, dan ketenangan pikiran bagi manajemen korporat.",
      keyProtocols: ["SNMPv3", "Streaming Telemetry (gNMI)", "Syslog-ng Encrypted", "WMI / WinRM"],
      deliverables: ["24/7 Live Telemetry Portal Access", "Incident Escalation Matrix", "Monthly SLA & Health Performance Report", "Quarterly Technology Evolution Roadmap"]
    },
    {
      id: "cap-ai",
      slug: "private-ai",
      number: "06",
      title: "AI ENTERPRISE MANDIRI",
      category: "Kecerdasan Buatan Privat & RAG",
      whatWeDo: "Membangun sistem kecerdasan buatan privat on-premise: model bahasa berdaulat, arsitektur pencarian semantik (RAG) berbasis dokumen korporat, dan otomasi alur kerja tanpa kebocoran data.",
      typicalRequirements: [
        "Pencarian cerdas dan ekstraksi informasi dari ribuan dokumen internal",
        "Larangan keras mengirimkan data rahasia perusahaan ke API AI publik",
        "Jawaban AI yang dapat diverifikasi dengan sitasi nomor halaman dokumen asli",
        "Pembatasan akses informasi berdasarkan peran pengguna (RBAC) yang ketat"
      ],
      potentialSolution: "ARKAPRANA AI — Kluster komputasi GPU on-premise terisolasi, model LLM berdaulat, vector database lokal terenkripsi, dan antarmuka percakapan korporat.",
      engagementModel: "Project Implementation & Continuous Model Support",
      ctaText: "Konsultasikan Private AI →",
      ctaHref: "/contact?solution=PRIVATE%20AI",
      challenge: "Organisasi memiliki aset pengetahuan berharga dalam bentuk dokumen dan data transaksi, namun staf kesulitan menemukan informasi dengan cepat dan enggan menggunakan AI publik karena resiko kerahasiaan.",
      approach: "Menggelar kluster komputasi AI air-gapped di dalam ruang server klien, mengindeks seluruh dokumen ke dalam basis data vektor lokal, dan menerapkan filter anti-halusinasi.",
      architecture: "Local GPU accelerator cluster (NVIDIA H100/A100), distributed Milvus vector database, vLLM inference engine, document parsing pipeline, and enterprise RBAC gateway.",
      potentialOutcome: "Peningkatan produktivitas staf hingga berkali-kali lipat, pencarian informasi dalam hitungan detik, eliminasi risiko kebocoran data, dan jawaban yang 100% dapat dipertanggungjawabkan.",
      keyProtocols: ["REST / gRPC Local API", "CUDA 12+ / TensorRT-LLM", "HuggingFace SafeTensors", "Local OAuth2"],
      deliverables: ["Private AI System Architecture Blueprint", "Document Ingestion & Chunking Pipeline", "RAG Grounding & Accuracy Benchmark Report", "End-User Operational Prompt Guide"]
    },
    {
      id: "cap-consulting",
      slug: "technology-consulting",
      number: "07",
      title: "KONSULTASI TEKNOLOGI",
      category: "Perencanaan Arsitektur & Kepatuhan",
      whatWeDo: "Memberikan pendampingan strategis dari Principal Architect untuk audit kepatuhan kedaulatan data, audit kesiapan infrastruktur, dan penyusunan peta jalan modernisasi teknologi.",
      typicalRequirements: [
        "Audit keselarasan infrastruktur dengan regulasi UU PDP dan POJK",
        "Penyusunan blueprint arsitektur sebelum pelaksanaan tender pengadaan besar",
        "Evaluasi kelayakan teknis dan analisis total cost of ownership (TCO)",
        "Perencanaan kapasitas infrastruktur komputasi dan jaringan jangka panjang"
      ],
      potentialSolution: "ARKAPRANA ADVISORY — Kajian arsitektural independen, pemodelan resiko, dan rekomendasi spesifikasi teknis berbasis standar rekayasa global.",
      engagementModel: "Strategic Advisory Retainer atau Milestone-Based Consulting",
      ctaText: "Konsultasikan Kebutuhan Arsitektur →",
      ctaHref: "/contact?solution=TECHNOLOGY%20CONSULTING",
      challenge: "Pengambilan keputusan investasi teknologi bernilai miliaran rupiah kerap dilakukan tanpa audit teknis mendalam, berujung pada pembelian perangkat yang tidak kompatibel atau tidak mematuhi regulasi.",
      approach: "Menugaskan tim Principal Architect independen untuk menganalisis kondisi riil, memetakan celah kepatuhan, dan merancang cetak biru teknologi yang tepat sasaran.",
      architecture: "Comprehensive architectural framework spanning regulatory mapping, enterprise topology modeling, vendor qualification matrix, and phased modernization roadmap.",
      potentialOutcome: "Efisiensi alokasi anggaran investasi TI, kepastian kepatuhan terhadap hukum yang berlaku, mitigasi risiko kegagalan implementasi, dan kejelasan arah transformasi digital.",
      keyProtocols: ["TOGAF Enterprise Framework", "NIST CSF 2.0", "ISO/IEC 27001 Audit Scope", "TIA-942 Standards"],
      deliverables: ["Enterprise Technology Maturity Assessment", "Regulatory Compliance Gap Analysis Report", "Target-State Architecture Blueprint", "Vendor Sizing & RFP Technical Specification"]
    },
    {
      id: "cap-integration",
      slug: "system-integration",
      number: "08",
      title: "INTEGRASI SISTEM",
      category: "Rekayasa Turnkey & Pengadaan Resmi",
      whatWeDo: "Mengharmonisasikan pengadaan hardware bergaransi resmi, instalasi fisik berstandar industri, integrasi protokol multi-vendor, dan uji komisioning menyeluruh di bawah satu pertanggungjawaban.",
      typicalRequirements: [
        "Pelaksanaan proyek infrastruktur kompleks dengan banyak komponen vendor",
        "Kebutuhan satu mitra utama yang bertanggung jawab atas seluruh siklus proyek",
        "Kepastian garansi resmi distributor dan sertifikasi pengujian standar",
        "Dokumentasi gambar teknik as-built dan transfer pengetahuan komprehensif"
      ],
      potentialSolution: "ARKAPRANA INTEGRATION — Layanan turnkey end-to-end: dari pengadaan komponen bersertifikat resmi, terminasi fisik di lapangan, integrasi protokol, hingga serah terima resmi.",
      engagementModel: "Turnkey Project Delivery (Fixed Price & Clear Milestone)",
      ctaText: "Konsultasikan Integrasi Sistem →",
      ctaHref: "/contact?solution=SYSTEM%20INTEGRATION",
      challenge: "Proyek infrastruktur sering terhambat oleh konflik antar-subkontraktor, ketidaksesuaian spesifikasi perangkat keras, dan ketiadaan dokumentasi as-built yang akurat.",
      approach: "Menerapkan manajemen proyek rekayasa terdisiplin dengan insinyur bersertifikasi, jadwal pengiriman terkoordinasi, dan pengujian komisioning berlapis.",
      architecture: "Multi-vendor interoperability fabric, standardized structured cabling topology, centralized out-of-band management network, and comprehensive hardware warranty ledger.",
      potentialOutcome: "Proyek selesai tepat waktu sesuai spesifikasi teknis, jaminan garansi resmi prinsipal, tidak ada celah saling lempar tanggung jawab, dan dokumentasi lengkap untuk pemeliharaan mandiri.",
      keyProtocols: ["All IEEE Physical Standards", "ANSI/TIA-568 & 942", "ISO/IEC 11801", "BIM Integration"],
      deliverables: ["Turnkey Project Execution Schedule", "Official Distributor Warranty Certificates", "As-Built CAD Architectural Drawings", "Comprehensive UAT Acceptance Ledger"]
    }
  ],
  en: [
    {
      id: "cap-network",
      slug: "network-engineering",
      number: "01",
      title: "NETWORK ENGINEERING",
      category: "Enterprise Connectivity & Routing",
      whatWeDo: "Architecting, deploying, and optimizing large-scale enterprise network infrastructures, optical fiber backbones, multi-site SD-WAN fabrics, and high-density enterprise Wi-Fi.",
      typicalRequirements: [
        "Interconnecting distributed headquarters, manufacturing plants, and branches",
        "High-throughput demands with sub-25ms deterministic latency profiles",
        "Eliminating single points of failure with redundant dual BGP carrier-neutral uplinks",
        "High-density Wi-Fi 7 coverage without dead spots for thousands of concurrent devices"
      ],
      potentialSolution: "ARKAPRANA NETWORK — Carrier-grade spine-leaf switching fabric, dual BGP routing, hardware-accelerated SD-WAN mesh, and 24/7 real-time telemetry monitoring.",
      engagementModel: "Turnkey Project Delivery or Managed Network Operations SLA",
      ctaText: "Discuss Network Engineering →",
      ctaHref: "/contact?solution=NETWORK%20ENGINEERING",
      challenge: "Organizations with distributed facilities struggle with network fragmentation, unpredicted downtime from static routing, inter-branch bandwidth bottlenecks, and lack of real-time telemetry.",
      approach: "Engineering Spine-Leaf hierarchical network topologies backed by optical backbones, carrier-grade switching, dynamic SD-WAN, and proactive 24/7 telemetry monitoring.",
      architecture: "Spine-leaf switching fabric, dual carrier-neutral BGP uplinks, sub-millisecond core routing, hardware-accelerated IPSec tunnels, and automated QoS packet prioritization.",
      potentialOutcome: "High-availability enterprise connectivity, elimination of single-points-of-failure, and end-to-end visibility across all corporate data flows.",
      keyProtocols: ["BGP4", "MPLS", "OSPFv3", "VXLAN", "IEEE 802.1X"],
      deliverables: ["Site Survey Heatmap", "Switching Matrix Specification", "Failover SLA Verification", "Live Telemetry Dashboard Setup"]
    },
    {
      id: "cap-datacenter",
      slug: "infrastructure-engineering",
      number: "02",
      title: "INFRASTRUCTURE ENGINEERING",
      category: "Compute & Data Center Engineering",
      whatWeDo: "Building Tier-3+ precision server rooms and modular data centers, high-density hyperconverged server clusters, low-latency NVMe flash matrices, and 2N+1 precision power/cooling.",
      typicalRequirements: [
        "Modernizing legacy server rooms or constructing new turnkey data center facilities",
        "Consolidating distributed physical hardware into unified hyperconverged clusters",
        "Guaranteed 2N+1 electrical concurrent maintainability without scheduled downtime",
        "In-row precision cooling containment with optimized PUE energy efficiency"
      ],
      potentialSolution: "ARKAPRANA INFRA — Tier-3+ modular compute facilities, dual-feed UPS paths, clean agent fire suppression, and hyperconverged high-density compute nodes.",
      engagementModel: "Project Delivery (Facility Fit-Out) & Infrastructure Consulting",
      ctaText: "Discuss Infrastructure Engineering →",
      ctaHref: "/contact?solution=INFRASTRUCTURE%20ENGINEERING",
      challenge: "Expanding compute workloads demand certified facilities with precise thermal management, continuous power reliability, and multi-layered physical security.",
      approach: "Engineering Tier-3+ compute environments with 2N electrical distribution, cold/hot aisle containment, sub-millisecond flash storage, and comprehensive environmental protection.",
      architecture: "Dual 2N+1 UPS power paths, Hot/Cold Aisle containment, In-row precision CRAC cooling, clean agent Novec 1230 fire suppression, and biometric interlocking security.",
      potentialOutcome: "Resilient physical compute foundations, superior power efficiency (PUE 1.31), and guaranteed concurrent maintainability without taking systems offline.",
      keyProtocols: ["IPMI 2.0 / Redfish", "BACnet Environmental", "SNMPv3", "NVMe-oF", "RoCEv2"],
      deliverables: ["Tier-3 Architectural Blueprint", "CFD Thermal Simulation", "Power Distribution Schedule", "Integrated System Test (IST) Certificate"]
    },
    {
      id: "cap-cloud",
      slug: "cloud",
      number: "03",
      title: "SOVEREIGN PRIVATE CLOUD",
      category: "Sovereign Private Cloud & Kubernetes",
      whatWeDo: "Building sovereign private clouds and hybrid clusters on client-owned bare metal, delivering public cloud flexibility with 100% domestic data sovereignty.",
      typicalRequirements: [
        "Data sovereignty regulatory compliance (PDP Law, banking guidelines, government mandates)",
        "Eliminating excessive cloud egress charges and unpredictable subscription spikes",
        "Large-scale enterprise Kubernetes orchestration with local high-performance S3 storage",
        "Automated multi-zone disaster recovery failover mechanisms"
      ],
      potentialSolution: "ARKAPRANA CLOUD — Sovereign private cloud platform featuring enterprise Kubernetes orchestration, Ceph software-defined storage, and zero egress fees.",
      engagementModel: "Architecture Implementation & Hybrid Cloud Consulting",
      ctaText: "Discuss Cloud Architecture →",
      ctaHref: "/contact?solution=CLOUD",
      challenge: "Enterprises seeking agile cloud operations face escalating bandwidth egress expenses and stringent regulatory mandates requiring domestic data residency.",
      approach: "Deploying enterprise-grade open-source private cloud frameworks and Kubernetes orchestration directly on client-owned bare-metal compute infrastructure.",
      architecture: "Multi-node hypervisor cluster, software-defined storage (Ceph S3 compatible), automated container scheduling, and multi-zone disaster recovery failover.",
      potentialOutcome: "Sovereign cloud-native operational agility, ultra-low latency, total data governance, and long-term total cost of ownership (TCO) predictability.",
      keyProtocols: ["eBPF Networking", "Ceph S3 API", "OpenStack API", "BGP EVPN", "gRPC Mesh"],
      deliverables: ["Private Cloud Architecture Specification", "Kubernetes Multi-Tenant Runbook", "Ceph Cluster Health Baseline", "Disaster Recovery Automation Script"]
    },
    {
      id: "cap-security",
      slug: "cybersecurity",
      number: "04",
      title: "CYBERSECURITY DEFENSE",
      category: "Zero-Trust Security & HSM Enclaves",
      whatWeDo: "Constructing multi-layered Zero-Trust cyber defenses: from microsegmentation and next-gen firewalls to master key isolation using FIPS 140-3 hardware security modules.",
      typicalRequirements: [
        "Audit compliance for cybersecurity standards (POJK 11/2022, PDP Law 2024, ISO 27001)",
        "Halting lateral movement of ransomware and malware across internal office subnets",
        "Hardware-sealed master key containment inside certified anti-tamper cryptoprocessors",
        "24/7 real-time security threat telemetry, anomaly correlation, and incident forensics"
      ],
      potentialSolution: "ARKAPRANA SECURE — Zero-Trust Network Access (ZTNA), dedicated hardware HSM enclaves, managed 24/7 SOC/SIEM, and immutable air-gapped backups.",
      engagementModel: "Security Implementation & Managed SOC Operations",
      ctaText: "Discuss Cybersecurity Defense →",
      ctaHref: "/contact?solution=CYBERSECURITY",
      challenge: "Modern cyber threats readily penetrate legacy VPN perimeters. Once inside, attackers move laterally to exfiltrate critical databases or deploy encryptor payloads.",
      approach: "Enforcing strict 'Never Trust, Always Verify' controls at every access point, microsegmenting workloads, and sealing cryptographic root keys inside hardware HSMs.",
      architecture: "Microsegmented VLANs with identity-aware next-gen firewalls, dedicated FIPS 140-3 HSM enclaves, multi-factor authentication for all administrative access, and real-time SIEM log correlation.",
      potentialOutcome: "Hardened cybersecurity posture, certified regulatory compliance, complete mitigation of lateral intrusion, and rapid disaster recovery readiness.",
      keyProtocols: ["TLS 1.3 Strict", "IPSec IKEv2", "IEEE 802.1AE MACsec", "SAML 2.0 / OIDC", "PKCS#11"],
      deliverables: ["Zero-Trust Architecture Document", "Threat Modeling & Pen-test Report", "HSM Key Management Protocol", "Incident Response Playbook"]
    },
    {
      id: "cap-managed",
      slug: "managed-it",
      number: "05",
      title: "MANAGED OPERATIONS",
      category: "Proactive IT Operations & Telemetry",
      whatWeDo: "Delivering proactive 24/7/365 operational management, preventive firmware maintenance, and continuous infrastructure telemetry with 99.99% availability SLAs.",
      typicalRequirements: [
        "Certified engineering personnel required for round-the-clock 24/7 watch shifts",
        "Rapid mitigation of critical operational incidents before affecting business transactions",
        "Structured preventive firmware patching and security vulnerability remediation",
        "Regular executive telemetry reporting on compute capacity and network health"
      ],
      potentialSolution: "ARKAPRANA MANAGED — Comprehensive managed services backed by dedicated NOC/SOC engineering facilities offering sub-15 minute incident escalation.",
      engagementModel: "Managed Services SLA (Monthly or Annual Retainer)",
      ctaText: "Discuss Managed Operations →",
      ctaHref: "/contact?solution=MANAGED%20IT",
      challenge: "Managing expanding infrastructure demands round-the-clock specialists. Internal personnel constraints often leave early indicators of degradation unnoticed.",
      approach: "Interconnecting all enterprise assets into our centralized telemetry operations center staffed by certified engineers following strict escalation protocols.",
      architecture: "Dual geographically separated NOC/SOC centers, out-of-band telemetry collectors, automated alert correlation engine, and secure encrypted ticketing portal.",
      potentialOutcome: "Unwavering operational stability, 90% reduction in mean time to recovery (MTTR), SLA compliance, and peace of mind for executive leadership.",
      keyProtocols: ["SNMPv3", "Streaming Telemetry (gNMI)", "Syslog-ng Encrypted", "WMI / WinRM"],
      deliverables: ["24/7 Live Telemetry Portal Access", "Incident Escalation Matrix", "Monthly SLA & Health Performance Report", "Quarterly Technology Evolution Roadmap"]
    },
    {
      id: "cap-ai",
      slug: "private-ai",
      number: "06",
      title: "SOVEREIGN ENTERPRISE AI",
      category: "Private AI & Enterprise RAG",
      whatWeDo: "Deploying self-contained on-premise private AI systems: sovereign language models, citation-grounded enterprise RAG on corporate archives, and zero-leakage workflows.",
      typicalRequirements: [
        "Intelligent semantic search and rapid synthesis across thousands of internal documents",
        "Strict prohibition of transmitting confidential corporate information to public AI clouds",
        "Grounded, hallucination-free answers backed by verifiable source document citations",
        "Fine-grained role-based access control (RBAC) reflecting corporate departmental clearance"
      ],
      potentialSolution: "ARKAPRANA AI — Isolated on-premise GPU clusters, sovereign LLM inference engines, encrypted local vector databases, and private corporate web chat interfaces.",
      engagementModel: "Project Implementation & Continuous Model Support",
      ctaText: "Discuss Private AI →",
      ctaHref: "/contact?solution=PRIVATE%20AI",
      challenge: "Organizations hold immense value in document archives and ERP logs, yet staff waste hours searching manually and cannot safely utilize public generative AI.",
      approach: "Deploying air-gapped GPU compute clusters in client-owned facilities, indexing corporate repositories into local vector stores, and enforcing citation verification.",
      architecture: "Local GPU accelerator cluster (NVIDIA H100/A100), distributed Milvus vector database, vLLM inference engine, document parsing pipeline, and enterprise RBAC gateway.",
      potentialOutcome: "Exponential gains in workforce productivity, sub-second knowledge retrieval, zero data leakage risks, and 100% auditable, citation-grounded outputs.",
      keyProtocols: ["REST / gRPC Local API", "CUDA 12+ / TensorRT-LLM", "HuggingFace SafeTensors", "Local OAuth2"],
      deliverables: ["Private AI System Architecture Blueprint", "Document Ingestion & Chunking Pipeline", "RAG Grounding & Accuracy Benchmark Report", "End-User Operational Prompt Guide"]
    },
    {
      id: "cap-consulting",
      slug: "technology-consulting",
      number: "07",
      title: "TECHNOLOGY CONSULTING",
      category: "Architecture Planning & Governance",
      whatWeDo: "Providing high-level strategic advisory by Principal Architects for data sovereignty compliance, infrastructure readiness audits, and technology modernization roadmaps.",
      typicalRequirements: [
        "Auditing infrastructure alignment with Indonesian PDP Law and OJK 11/2022 standards",
        "Formulating comprehensive architecture blueprints prior to major capital procurement",
        "Technical feasibility analysis, sizing calculations, and total cost of ownership (TCO) modeling",
        "Long-term compute capacity planning and optical transit expansion design"
      ],
      potentialSolution: "ARKAPRANA ADVISORY — Independent architectural assessments, risk modeling, and technical specifications engineered to global industry standards.",
      engagementModel: "Strategic Advisory Retainer or Milestone-Based Consulting",
      ctaText: "Discuss Architecture Consulting →",
      ctaHref: "/contact?solution=TECHNOLOGY%20CONSULTING",
      challenge: "Multi-million dollar infrastructure investments are frequently committed without rigorous engineering audits, leading to vendor lock-in or regulatory penalties.",
      approach: "Deploying seasoned Principal Architects to assess current topology, identify compliance deficiencies, and construct vendor-neutral blueprints.",
      architecture: "Comprehensive architectural framework spanning regulatory mapping, enterprise topology modeling, vendor qualification matrix, and phased modernization roadmap.",
      potentialOutcome: "Optimized capital expenditure, certified regulatory alignment, mitigation of project rollout risks, and clear digital transformation milestones.",
      keyProtocols: ["TOGAF Enterprise Framework", "NIST CSF 2.0", "ISO/IEC 27001 Audit Scope", "TIA-942 Standards"],
      deliverables: ["Enterprise Technology Maturity Assessment", "Regulatory Compliance Gap Analysis Report", "Target-State Architecture Blueprint", "Vendor Sizing & RFP Technical Specification"]
    },
    {
      id: "cap-integration",
      slug: "system-integration",
      number: "08",
      title: "SYSTEM INTEGRATION",
      category: "Turnkey Engineering & Procurement",
      whatWeDo: "Harmonizing authorized hardware procurement, certified field installations, multi-vendor protocol interoperation, and comprehensive commissioning under single accountability.",
      typicalRequirements: [
        "Executing complex infrastructure builds involving heterogeneous multi-vendor hardware",
        "Requiring a single principal engineering contractor accountable for end-to-end delivery",
        "Ensuring genuine manufacturer warranties, registered serials, and certified UAT testing",
        "Securing complete as-built CAD engineering drawings and structured technical handover"
      ],
      potentialSolution: "ARKAPRANA INTEGRATION — End-to-end turnkey engineering: from authorized hardware sourcing and physical site deployment to protocol bridging and commissioning.",
      engagementModel: "Turnkey Project Delivery (Fixed Price & Definite Milestones)",
      ctaText: "Discuss System Integration →",
      ctaHref: "/contact?solution=SYSTEM%20INTEGRATION",
      challenge: "Infrastructure rollouts face severe delays and finger-pointing when separate contractors independently handle physical fit-out, optical cabling, and compute stacks.",
      approach: "Executing projects under a unified engineering discipline with certified engineers, synchronized supply chain logistics, and rigorous multi-stage acceptance testing.",
      architecture: "Multi-vendor interoperability fabric, standardized structured cabling topology, centralized out-of-band management network, and comprehensive hardware warranty ledger.",
      potentialOutcome: "Timely project completion to exact technical specifications, genuine distributor warranties, zero vendor finger-pointing, and complete operational autonomy.",
      keyProtocols: ["All IEEE Physical Standards", "ANSI/TIA-568 & 942", "ISO/IEC 11801", "BIM Integration"],
      deliverables: ["Turnkey Project Execution Schedule", "Official Distributor Warranty Certificates", "As-Built CAD Architectural Drawings", "Comprehensive UAT Acceptance Ledger"]
    }
  ]
};

export function getLocalizedCapabilities(lang: Language): CapabilityBlueprint[] {
  return LOCALIZED_CAPABILITIES[lang] || LOCALIZED_CAPABILITIES.id;
}

// ============================================================================
// 3. LOCALIZED INDUSTRIES
// ============================================================================
export interface IndustryItem {
  name: string;
  slug: string;
  headlineQuote: string;
  challenge: string;
  environment: string;
  solutions: string[];
  useCases: {
    title: string;
    detail: string;
  }[];
}

export const LOCALIZED_INDUSTRIES: Record<Language, IndustryItem[]> = {
  id: [
    {
      name: "Konstruksi & Proyek Fisik",
      slug: "construction",
      headlineQuote: "Konektivitas di setiap titik proyek fisik.",
      challenge: "Lingkungan proyek fisik dinamis tanpa infrastruktur permanen, mobilitas tinggi, serta paparan debu tebal dan cuaca ekstrem.",
      environment: "Site office sementara, area galian dan struktur baja, tower crane, dan perimeter proyek yang membentang luas.",
      solutions: [
        "Transmisi Wireless Jarak Jauh & Microwave Ring",
        "Wi-Fi Lapangan Tangguh & Industrial Switching IP67",
        "CCTV Tenaga Surya & Sensor Telemetri Lapangan"
      ],
      useCases: [
        { title: "Sinkronisasi Model BIM Lapangan", detail: "Transmisi file CAD dan BIM berukuran gigabyte dari site office langsung ke server kantor pusat tanpa jeda atau kompresi rusak." },
        { title: "Pengawasan Keselamatan Kerja (HSE)", detail: "Kamera pengawas berbasis IP dengan transmisi wireless mandiri untuk pemantauan alat berat dan kepatuhan APD 24 jam." },
        { title: "Konektivitas Kontainer Proyek Siap Pakai", detail: "Penyediaan link internet satelit LEO dan microwave redundan yang siap beroperasi dalam 48 jam sejak inisiasi proyek." }
      ]
    },
    {
      name: "Manufaktur & Pabrik Industri",
      slug: "manufacturing",
      headlineQuote: "Infrastruktur untuk operasional pabrik tanpa henti.",
      challenge: "Interferensi elektromagnetik tinggi dari mesin berat, keharusan uptime lini produksi 24/7, dan pemisahan ketat antara jaringan operasional (OT) dan kantor (IT).",
      environment: "Lantai produksi bersuhu tinggi, ruang server pabrik, gudang bahan baku, dan sistem konveyor otomatis.",
      solutions: [
        "Segmentasi Jaringan OT/IT Terisolasi (Air-Gapped)",
        "Backbone Serat Optik Armored Single-Mode",
        "Edge IoT Gateway untuk Pemeliharaan Prediktif"
      ],
      useCases: [
        { title: "Telemetri Mesin Produksi Real-Time", detail: "Pengambilan data sensor getaran dan suhu motor industri untuk pencegahan kerusakan sebelum lini produksi macet." },
        { title: "Segmentasi Jaringan SCADA & PLC", detail: "Isolasi pengontrol logika terprogram dari jaringan internet publik demi mencegah serangan malware industri." },
        { title: "Coverage Wi-Fi Industri Antar Hall Pabrik", detail: "Penyebaran access point bersertifikasi IP67 yang tahan oli mesin, debu partikulat, dan suhu tinggi." }
      ]
    },
    {
      name: "Pelabuhan & Maritim",
      slug: "maritime",
      headlineQuote: "Teknologi di seluruh perairan dan lingkungan terdistribusi.",
      challenge: "Korosi garam laut, area geografis perairan yang luas, pergerakan kapal yang dinamis, dan keterbatasan bandwidth telekomunikasi darat.",
      environment: "Dermaga kontainer, crane pelabuhan, armada kapal tunda, dan kantor syahbandar/operator terminal.",
      solutions: [
        "Interkoneksi Satelit LEO/VSAT Lepas Pantai",
        "Wireless Mesh Seluas Pelabuhan & Access Point Tangguh",
        "Telemetri & Pelacakan Armada Kapal Real-Time"
      ],
      useCases: [
        { title: "Konektivitas Derek Kontainer (STS Crane)", detail: "Komunikasi data wireless latensi rendah antara operator crane dengan Terminal Operating System (TOS)." },
        { title: "Sinkronisasi Logistik Armada Kapal", detail: "Pembaruan otomatis data manifest muatan saat kapal mendekati dermaga melalui link radio jarak jauh." },
        { title: "CCTV Pengawasan Alur Pelayaran", detail: "Sistem kamera maritim berjangkauan panjang dengan transmisi radio terenkripsi untuk keamanan alur pelabuhan." }
      ]
    },
    {
      name: "Logistik & Pergudangan",
      slug: "logistics",
      headlineQuote: "Visibilitas komprehensif di seluruh rantai pasok.",
      challenge: "Blokade sinyal Wi-Fi akibat rak baja tinggi dan tumpukan barang padat, mobilitas tinggi armada forklift, dan kebutuhan pelacakan barcode real-time.",
      environment: "Gudang berpendingin (cold storage), pusat sortir otomatis, dermaga muat (loading dock), dan armada truk.",
      solutions: [
        "Wi-Fi Antena Terarah Densitas Tinggi",
        "Mesh Pemindai Portabel & Otomasi RFID",
        "Sinkronisasi Sub-Detik Sistem WMS/ERP"
      ],
      useCases: [
        { title: "Seamless Roaming Handheld Scanner", detail: "Pencegahan putus koneksi pemindai barcode saat petugas bergerak cepat di antara lorong rak setinggi 12 meter." },
        { title: "Monitoring Suhu Gudang Cold Storage", detail: "Sensor nirkabel IoT yang memantau suhu minus 25°C dan mengirimkan peringatan instan jika terjadi kenaikan suhu." },
        { title: "Manajemen Gerbang Masuk Truk Otomatis", detail: "Integrasi kamera pembaca plat nomor (ANPR) dengan sistem gerbang logistik untuk mempercepat antrean muat." }
      ]
    },
    {
      name: "Properti & Kawasan Komersial",
      slug: "property",
      headlineQuote: "Fondasi cerdas untuk gedung bertingkat dan ruang modern.",
      challenge: "Kepadatan pengguna yang sangat tinggi, integrasi sistem gedung (BMS, CCTV, akses kontrol), dan estetika instalasi kabel tersembunyi.",
      environment: "Gedung perkantoran Grade A, mall komersial, apartemen modern, dan kawasan mixed-use terpadu.",
      solutions: [
        "Pengkabelan Terstruktur Fiber-to-the-Room (FTTR)",
        "Wi-Fi 7 Densitas Tinggi dengan Captive Portal",
        "Jaringan Sistem Manajemen Gedung (BMS) Terpadu"
      ],
      useCases: [
        { title: "Backbone Serat Optik Gedung 40 Lantai", detail: "Pemasangan riser fiber tunggal berkecepatan 40Gbps yang melayani seluruh penyewa kantor secara independen." },
        { title: "Sistem Parkir & Akses Terintegrasi", detail: "Jaringan tertutup berlatensi nol untuk pembacaan kartu RFID dan pembayaran non-tunai di seluruh gerbang parkir." },
        { title: "Jaringan CCTV Terpadu Ribuan Titik", detail: "Arsitektur switching PoE cerdas yang menjamin rekaman video 4K tersimpan tanpa frame drop ke ruang kontrol." }
      ]
    },
    {
      name: "Perhotelan & Hospitality",
      slug: "hospitality",
      headlineQuote: "Pengalaman tamu tanpa jeda dan kontinuitas operasional.",
      challenge: "Ekspektasi tamu atas internet cepat tanpa kendala, kepadatan perangkat mobile di area ballroom, dan perlindungan privasi data tamu.",
      environment: "Kamar hotel, lobi utama, convention hall, restoran, dan area operasional front office/housekeeping.",
      solutions: [
        "Access Point In-Wall per Kamar Hotel",
        "Wi-Fi Roaming Densitas Tinggi Area Ballroom",
        "Isolasi VLAN Terdedikasi untuk Sistem PMS"
      ],
      useCases: [
        { title: "Wi-Fi Privat per Kamar Hotel", detail: "Tamu mendapatkan jaringan terisolasi sendiri sehingga perangkat casting (Chromecast) tidak terlihat oleh kamar sebelah." },
        { title: "Jaringan Event & Konferensi Internasional", detail: "Penyediaan koneksi bandwidth terdedikasi simetris hingga 1Gbps untuk ribuan peserta seminar internasional." },
        { title: "Sistem Komunikasi Operasional Staf", detail: "Jaringan suara nirkabel (VoWiFi) yang memungkinkan staf berkomunikasi jernih di seluruh lantai gedung." }
      ]
    },
    {
      name: "Korporasi & Enterprise",
      slug: "enterprise",
      headlineQuote: "Sistem yang dirancang untuk skala bisnis bertumbuh.",
      challenge: "Struktur organisasi kompleks, kepatuhan audit keamanan ketat, volume transmisi data internal besar, dan kebutuhan adopsi AI terarah.",
      environment: "Headquarters multi-lantai, kantor perwakilan daerah, server room privat, dan ruang rapat eksekutif.",
      solutions: [
        "Mesh SD-WAN Terenkripsi Antar-Cabang",
        "Akses Identitas Zero-Trust & Single Sign-On (SSO)",
        "Cloud Privat Berdaulat & Basis Pengetahuan AI"
      ],
      useCases: [
        { title: "Unified Multi-Branch SD-WAN", detail: "Penggabungan 50 kantor cabang ke dalam satu topologi jaringan aman dengan prioritas otomatis untuk aplikasi ERP." },
        { title: "Penerapan Single Sign-On & Zero-Trust", detail: "Karyawan mengakses aplikasi internal hanya setelah verifikasi multi-faktor dan pemeriksaan status kepatuhan laptop." },
        { title: "Knowledge Assistant Divisi Hukum & Keuangan", detail: "Model AI privat yang mengindeks seluruh kontrak internal untuk penelusuran klausul hukum dalam hitungan detik." }
      ]
    },
    {
      name: "Pemerintahan & Institusi Publik",
      slug: "government",
      headlineQuote: "Fondasi digital yang aman dan berdaulat bagi publik.",
      challenge: "Regulasi kedaulatan data nasional yang ketat, pencegahan kebocoran data rahasia negara, dan ketersediaan layanan publik 24/7.",
      environment: "Pusat komputasi instansi, kantor kementerian/lembaga daerah, command center, dan portal layanan masyarakat.",
      solutions: [
        "Pusat Data On-Premise Mandiri Tier-3",
        "Cloud Privat Air-Gapped & Brankas Kriptografi",
        "Kerangka Kepatuhan Keamanan ISO 27001 & BSSN"
      ],
      useCases: [
        { title: "Pusat Data Mandiri Pemerintah Daerah", detail: "Pembangunan data center regional berstandar kedaulatan data untuk menyatukan seluruh aplikasi dinas dalam satu atap." },
        { title: "Command Center Pemantauan Kota Terpadu", detail: "Jaringan serat optik tertutup yang menghubungkan ratusan sensor lalu lintas dan CCTV ke layar ruang komando." },
        { title: "Enkripsi Komunikasi Data Antar Lembaga", detail: "Implementasi terowongan IPSec terenkripsi dengan hardware security module (HSM) yang lolos verifikasi keamanan sandi." }
      ]
    },
    {
      name: "Badan Usaha Milik Negara (BUMN)",
      slug: "bumn",
      headlineQuote: "Skala misi kritis dengan dampak strategis nasional.",
      challenge: "Skala operasional masif di seluruh nusantara, tata kelola pengadaan yang diaudit ketat, dan kewajiban ketahanan infrastruktur strategis nasional.",
      environment: "Kantor pusat korporasi BUMN, instalasi aset vital nasional, anak perusahaan, dan sentra operasional lapangan.",
      solutions: [
        "SD-WAN Nasional Netral-Operator",
        "Pengadaan & Integrasi Infrastruktur Enterprise",
        "Manajemen Pengetahuan AI Privat On-Premise"
      ],
      useCases: [
        { title: "Konsolidasi Infrastruktur TI Holding BUMN", detail: "Penyelarasan standar perangkat keras dan arsitektur cloud privat di seluruh anak usaha dalam satu holding." },
        { title: "Disaster Recovery Center (DRC) Skala Nasional", detail: "Pembangunan fasilitas replikasi data antar pulau dengan jaminan pemulihan instan saat terjadi krisis darurat." },
        { title: "Otomasi Dokumen Pengadaan & Kontrak", detail: "AI enterprise lokal yang memverifikasi kepatuhan ribuan berkas vendor terhadap regulasi pengadaan BUMN secara otomatis." }
      ]
    }
  ],
  en: [
    {
      name: "Construction & Physical Projects",
      slug: "construction",
      headlineQuote: "Connectivity where projects happen.",
      challenge: "Dynamic physical project environments lacking permanent utilities, high crew mobility, heavy dust exposure, and extreme weather risks.",
      environment: "Temporary site offices, excavation pits, structural steel framing, tower cranes, and expansive project perimeters.",
      solutions: [
        "Long-Range Wireless & Microwave Ring Transit",
        "Ruggedized Field Wi-Fi & IP67 Industrial Switching",
        "Solar-Powered CCTV Surveillance & Sensor Telemetry"
      ],
      useCases: [
        { title: "Field BIM Model Synchronization", detail: "Lossless transmission of multi-gigabyte CAD and BIM files directly from site office containers to headquarters without lag." },
        { title: "HSE Worksite Safety Surveillance", detail: "IP-based solar surveillance cameras transmitting over self-healing wireless links to audit heavy machinery operation and PPE compliance 24/7." },
        { title: "Rapid Turnkey Project Office Connectivity", detail: "Deploying fully redundant LEO satellite and microwave uplinks operational within 48 hours of site mobilization." }
      ]
    },
    {
      name: "Manufacturing & Industrial Plants",
      slug: "manufacturing",
      headlineQuote: "Infrastructure for continuous operations.",
      challenge: "Extreme electromagnetic interference from heavy motors, mandatory 24/7 assembly line uptime, and strict air-gap separation between OT and IT.",
      environment: "High-temperature plant floors, factory server enclosures, raw materials warehousing, and automated conveyor lines.",
      solutions: [
        "Air-Gapped OT/IT Network Segmentation",
        "Armored Single-Mode Fiber Optic Backbone",
        "Edge IoT Gateways for Predictive Maintenance"
      ],
      useCases: [
        { title: "Real-Time Assembly Telemetry", detail: "Streaming vibration and thermal telemetry from robotic spindles to prevent machine failure before assembly lines trip." },
        { title: "SCADA & PLC Network Microsegmentation", detail: "Total isolation of programmable logic controllers from public subnets, mitigating industrial ransomware threats." },
        { title: "Multi-Hall Industrial Wi-Fi Coverage", detail: "Deploying IP67-rated access points impervious to industrial oil mists, particulate dust, and ambient factory heat." }
      ]
    },
    {
      name: "Maritime & Ports",
      slug: "maritime",
      headlineQuote: "Technology across distributed environments.",
      challenge: "Aggressive saltwater corrosion, expansive open-water expanses, dynamic vessel transit, and limited terrestrial telecom backhaul.",
      environment: "Container quays, ship-to-shore (STS) cranes, tugboat flotillas, and harbor master terminals.",
      solutions: [
        "Offshore LEO/VSAT Satellite Interconnect",
        "Harbor-Wide Wireless Mesh & Rugged Access Points",
        "Real-Time Vessel Fleet Telemetry & Tracking"
      ],
      useCases: [
        { title: "STS Container Crane Connectivity", detail: "Ultra-low-latency wireless data links between crane operator cabs and Terminal Operating Systems (TOS)." },
        { title: "Fleet Logistics & Manifest Synchronization", detail: "Automated cargo manifest transmission as container vessels approach outer harbor waters via long-range directional radio." },
        { title: "Navigational Channel Surveillance", detail: "Long-range thermal and optical maritime cameras streaming encrypted telemetry for port maritime security." }
      ]
    },
    {
      name: "Logistics & Warehousing",
      slug: "logistics",
      headlineQuote: "Visibility across operations.",
      challenge: "Severe Wi-Fi signal attenuation caused by dense steel racking and stacked cargo, rapid forklift movement, and instant barcode syncing.",
      environment: "Sub-zero cold storage, automated sorting hubs, loading docks, and distributed transport fleets.",
      solutions: [
        "Directional High-Density Narrow-Beam Wi-Fi",
        "Handheld Scanner Mesh & Automated RFID Portals",
        "Sub-Second WMS & ERP Synchronization"
      ],
      useCases: [
        { title: "Seamless Handheld Scanner Roaming", detail: "Zero packet drop for warehouse operators picking inventory at rapid speeds through 12-meter-high steel shelving aisles." },
        { title: "Sub-Zero Cold Storage Telemetry", detail: "Wireless IoT sensors operating at minus 25°C, providing instant alerts upon thermal deviation to protect perishable inventory." },
        { title: "Automated Logistics Gate Check-In", detail: "Integrating license plate recognition (ANPR) cameras with dock management systems to collapse truck turnaround intervals." }
      ]
    },
    {
      name: "Property & Commercial Spaces",
      slug: "property",
      headlineQuote: "Intelligent foundations for modern spaces.",
      challenge: "High client device density, heterogeneous Building Management Systems (BMS, CCTV, Access Control), and concealed architectural cabling mandates.",
      environment: "Grade-A office towers, commercial retail malls, luxury residential complexes, and mixed-use urban developments.",
      solutions: [
        "Structured Fiber-to-the-Room (FTTR) Cabling",
        "High-Density Wi-Fi 7 with Tiered Captive Portals",
        "Integrated Building Management System (BMS) Network"
      ],
      useCases: [
        { title: "40-Story Optical Vertical Riser Backbone", detail: "Deploying 40Gbps single-mode riser backbones that provide isolated high-speed transit to corporate tenants." },
        { title: "Zero-Latency Integrated Parking Access", detail: "Isolated low-latency subnets connecting RFID scanners and contactless payment barriers across multi-level parkades." },
        { title: "Unified Multi-Thousand CCTV Camera Matrix", detail: "Smart PoE switching architectures guaranteeing 4K surveillance video recording without dropped frames." }
      ]
    },
    {
      name: "Hospitality & Resorts",
      slug: "hospitality",
      headlineQuote: "Seamless guest experience and operational continuity.",
      challenge: "Uncompromising guest demands for flawless high-speed Wi-Fi, extreme device density during ballroom events, and guest data privacy mandates.",
      environment: "Guest rooms, grand lobbies, convention halls, fine dining venues, and back-of-house operational areas.",
      solutions: [
        "In-Room In-Wall Access Points with Guest VLANs",
        "Ballroom High-Density Roaming Wi-Fi Fabrics",
        "Dedicated Isolated VLANs for Property Management (PMS)"
      ],
      useCases: [
        { title: "Private Per-Room Isolated Wi-Fi", detail: "Providing guests with private local networks so wireless casting devices (Chromecast) remain strictly invisible to adjacent rooms." },
        { title: "High-Capacity International Conference Fabrics", detail: "Provisioning symmetrical 1Gbps dedicated transit for thousands of concurrent international conference delegates without throttling." },
        { title: "Back-of-House VoWiFi Communication", detail: "Carrier-grade voice-over-Wi-Fi infrastructure ensuring uninterrupted crystal-clear staff radio and phone coordination." }
      ]
    },
    {
      name: "Corporations & Enterprise",
      slug: "enterprise",
      headlineQuote: "Systems designed to scale.",
      challenge: "Complex multi-tiered organizations, strict cybersecurity audits, high internal data volume, and disciplined private AI adoption.",
      environment: "Corporate headquarters, regional branch offices, private data center suites, and executive command centers.",
      solutions: [
        "Encrypted Multi-Branch SD-WAN Mesh",
        "Zero-Trust Identity Access & Single Sign-On (SSO)",
        "Sovereign Private Cloud & Enterprise Knowledge AI"
      ],
      useCases: [
        { title: "Unified Multi-Branch SD-WAN", detail: "Harmonizing 50 distributed branch offices into a secure, encrypted mesh with automated traffic prioritization for SAP and ERP." },
        { title: "Zero-Trust Single Sign-On Deployment", detail: "Enforcing continuous multi-factor verification and device health posture assessments before granting access to core financial data." },
        { title: "Legal & Financial Sovereign Knowledge Assistant", detail: "Private on-premise AI indexing proprietary contracts and corporate policies, delivering accurate clause retrieval within seconds." }
      ]
    },
    {
      name: "Government & Public Institutions",
      slug: "government",
      headlineQuote: "Secure digital foundations for public service.",
      challenge: "Strict statutory domestic data sovereignty mandates, state secret protection, and uninterrupted 24/7 public service availability.",
      environment: "Agency compute facilities, ministerial offices, provincial smart city command centers, and public service portals.",
      solutions: [
        "Sovereign On-Premise Tier-3 Data Center Facilities",
        "Air-Gapped Private Cloud & Cryptographic HSM Vaults",
        "ISO 27001 & National BSSN Cyber Resilience Compliance"
      ],
      useCases: [
        { title: "Regional Sovereign Data Center Modernization", detail: "Engineering standardized sovereign data center facilities to consolidate fragmented regional agency services under one roof." },
        { title: "Municipal Smart City Command Center", detail: "Closed fiber-optic rings aggregating hundreds of traffic sensors, emergency lines, and CCTV feeds into interactive command consoles." },
        { title: "Inter-Agency Encrypted Data Exchange", detail: "Deploying hardware security module (HSM) authenticated IPSec tunnels certified for protected government data transit." }
      ]
    },
    {
      name: "State-Owned Enterprises (BUMN)",
      slug: "bumn",
      headlineQuote: "Mission-critical scale and national strategic impact.",
      challenge: "Nationwide operational scale across thousands of islands, stringent public procurement audit governance, and critical national infrastructure mandates.",
      environment: "Holding headquarters, vital national infrastructure sites, operating subsidiaries, and remote field camps.",
      solutions: [
        "Carrier-Neutral Nationwide SD-WAN Transit",
        "Enterprise Infrastructure Procurement & System Integration",
        "Air-Gapped On-Premise AI Knowledge Management"
      ],
      useCases: [
        { title: "Holding-Wide IT Infrastructure Consolidation", detail: "Harmonizing heterogeneous hardware and private cloud architectures across dozens of operating subsidiaries." },
        { title: "Cross-Island Disaster Recovery Center (DRC)", detail: "Building automated data replication links between distinct island hubs to guarantee instantaneous failover during emergencies." },
        { title: "Automated Procurement & Compliance AI", detail: "Air-gapped enterprise AI verifying thousands of vendor tenders against statutory state procurement regulations in real-time." }
      ]
    }
  ]
};

export function getLocalizedIndustries(lang: Language): IndustryItem[] {
  return LOCALIZED_INDUSTRIES[lang] || LOCALIZED_INDUSTRIES.id;
}

export function getLocalizedIndustryBySlug(slug: string, lang: Language): IndustryItem | undefined {
  const list = getLocalizedIndustries(lang);
  return list.find((i) => i.slug === slug);
}

// ============================================================================
// 4. LOCALIZED CASE STUDIES (PROJECTS)
// ============================================================================
export const LOCALIZED_PROJECTS: Record<Language, ProjectCaseStudy[]> = {
  id: [
    {
      id: "cs-banking",
      slug: "modernisasi-core-network-tier3-bank-nasional",
      code: "ARCH-FIN-01",
      title: "Modernisasi Core Network & Data Center Tier-3 Perbankan Swasta Nasional",
      sector: "banking",
      sectorLabel: "Perbankan & Finansial",
      clientType: "Bank Devisa Nasional (54 Cabang Operasional)",
      location: "Jakarta (Cyber 1 DC) - Cimanggis (Technovillage DRC)",
      scope: "Spine-leaf switching fabric 100G, DWDM metro optical ring redundan, zero-loss BGP EVPN peering, dan compliance audit POJK 11/2022.",
      challenge: "Terjadi latensi transaksi inter-DC hingga 18.4ms dan insiden failover manual yang memakan waktu (MTTR 4.8 jam) saat salah satu link uplink putus, memicu temuan defisiensi pada audit kepatuhan OJK.",
      architectureSolution: "Penggelaran arsitektur Spine-Leaf carrier-grade dengan interkoneksi cincin DWDM 100Gbps dual-homed yang menghubungkan Data Center Utama dan Disaster Recovery Center, didukung BGP EVPN/VXLAN auto-failover sub-300ms.",
      topologyLayers: [
        { layer: "L1 Physical Backbone", tech: "96-Core Armored Single-Mode Fiber", details: "Dual-path physical routing underground TIA-942 Rated 3 tanpa sharing jalur galian." },
        { layer: "L2-L3 Fabric", tech: "Arista Spine-Leaf 100G with RoCEv2", details: "Arsitektur non-blocking switching dengan throughput agregat 12.8 Tbps dan sub-microsecond ASIC latency." },
        { layer: "L4-L7 Security & Crypto", tech: "Dual Active-Active NGFW + Thales Luna HSM", details: "Hardware-level root of trust untuk pemrosesan PIN/transaksi switching ISO 8583." },
        { layer: "Operations & Telemetry", tech: "Out-of-Band 24/7 Managed NOC", details: "SNMPv3 telemetry stream dengan deteksi anomali paket dan rotasi rute otomatis." }
      ],
      metricsBeforeAfter: [
        { metric: "MTTR Gangguan Jaringan", before: "4.8 Jam (Manual)", after: "12 Menit (Automated)", improvement: "-95.8% MTTR" },
        { metric: "Latensi Transaksi Inter-DC", before: "18.4 ms", after: "1.8 ms", improvement: "10x Lebih Cepat" },
        { metric: "Ketersediaan (SLA Uptime)", before: "99.82%", after: "99.995%", improvement: "Zero Unplanned Outage" },
        { metric: "Audit Regulasi OJK", before: "Ada Defisiensi RTO/RPO", after: "100% Lolos POJK 11/2022", improvement: "Certified Compliant" }
      ],
      regulatoryCompliance: ["POJK No. 11/POJK.03/2022", "UU PDP No. 27/2022", "ISO/IEC 27001:2022", "ANSI/TIA-942 Rated 3"],
      hardwareStandards: ["Arista 7280R3 100G Spine-Leaf", "Fortinet FortiGate 3000F Active-Active", "Thales Luna PCIe HSM", "Corning SMF-28 Ultra Optic"],
      verifiedOutcome: "Eliminasi total single-point-of-failure inter-DC, penyelesaian transaksi switching sub-detik, dan kesiapan operasional perbankan berstandar Tier-3 nasional."
    },
    {
      id: "cs-energy",
      slug: "sovereign-ai-rag-bumn-energi",
      code: "ARCH-ENG-02",
      title: "Air-Gapped Sovereign AI & Enterprise RAG Deployment BUMN Energi",
      sector: "energy",
      sectorLabel: "Energi & Sumber Daya Alam",
      clientType: "Konsorsium Eksplorasi Minyak & Gas Nasional",
      location: "Jakarta Selatan (Fasilitas Server On-Premise Terisolasi)",
      scope: "Kluster komputasi AI on-premise dual 8x H100 GPU, enterprise vector database Milvus, RAG anti-halusinasi dengan 100% isolasi data tanpa internet egress.",
      challenge: "Ratusan ribu laporan seismik, log sumur bor, kontrak konsesi, dan standar keselamatan terfragmentasi di puluhan server. Penggunaan API cloud publik dilarang keras karena menyangkut kedaulatan data rahasia negara.",
      architectureSolution: "Pembangunan infrastruktur AI privat berstandar air-gapped dengan server GPU cair densitas tinggi, inference engine vLLM lokal, basis data vektor terenkripsi, dan Role-Based Access Control (RBAC) tingkat departemen.",
      topologyLayers: [
        { layer: "AI Compute Nodes", tech: "2x 8x NVIDIA H100 SXM5 80GB", details: "Throughput komputasi tinggi dengan NVLink 900GB/s inter-GPU bandwidth." },
        { layer: "High-Speed Interconnect", tech: "NVIDIA Quantum-2 InfiniBand 400G", details: "Zero-packet-loss fabric untuk komunikasi tensor terdistribusi berlatensi sub-microsecond." },
        { layer: "Vector Storage SAN", tech: "240TB NVMe-oF High-IOPS Fabric", details: "Penyimpanan vektor terenkripsi AES-256 dengan throughput 40GB/s." },
        { layer: "Cognitive Inference Bus", tech: "Air-Gapped vLLM + Milvus RAG", details: "Model Llama-3 & DeepSeek yang difine-tune lokal dengan sitasi dokumen terverifikasi." }
      ],
      metricsBeforeAfter: [
        { metric: "Waktu Temu Dokumen Teknis", before: "2.5 Hari Kerja", after: "1.4 Detik", improvement: "Instant Semantic Search" },
        { metric: "Risiko Egress Data Rahasia", before: "Tinggi (Cloud Publik)", after: "0% (Air-Gapped)", improvement: "100% Data Sovereignty" },
        { metric: "Akurasi Ekstraksi Parameter", before: "61% (Pencarian Manual)", after: "98.4% (Dengan Sitasi)", improvement: "+37.4% Akurasi" },
        { metric: "Kepatuhan UU PDP & Rahasia Negara", before: "Rentan Sanksi Hukum", after: "100% Terisolasi di Yurisdiksi RI", improvement: "Zero Legal Exposure" }
      ],
      regulatoryCompliance: ["UU No. 27 Tahun 2022 (PDP)", "PP No. 71/2019 (PSTE)", "ISO 27701 (Privacy)", "NIST SP 800-53 Security"],
      hardwareStandards: ["Dell PowerEdge XE9680 (8x H100 SXM5)", "NVIDIA Quantum-2 QM9700 Switches", "Pure Storage FlashBlade//S", "In-Row Precision Chilled Water Cooling"],
      verifiedOutcome: "Organisasi dapat memanfaatkan kecerdasan buatan tingkat tinggi secara mandiri tanpa sedikit pun data geologis rahasia bocor ke server luar negeri."
    },
    {
      id: "cs-healthcare",
      slug: "zero-trust-sd-wan-multi-branch-rumah-sakit",
      code: "ARCH-HLT-03",
      title: "Zero-Trust Multi-Branch SD-WAN Jaringan Rumah Sakit & Laboratorium",
      sector: "healthcare",
      sectorLabel: "Kesehatan Terdistribusi",
      clientType: "Jaringan Layanan Kesehatan Terpadu (142 Klinik & RS Swasta)",
      location: "Nasional (Sumatera, Jawa, Kalimantan, Sulawesi)",
      scope: "SD-WAN fabric terpusat, dual-uplink multi-homing dengan failover otomatis satelit LEO, segmentasi mikro Zero-Trust ZTNA, dan integrasi HL7 FHIR SATUSEHAT.",
      challenge: "Cabang klinik di daerah sering terputus dari Rekam Medis Elektronik (RME) akibat koneksi ISP lokal tidak stabil. Pengiriman data pasien tidak terenkripsi rawan pelanggaran UU PDP dan standar Kemenkes.",
      architectureSolution: "Penerapan Secure SD-WAN fabric dengan hardware dynamic link steering, tunnel IPSec berakselerasi perangkat keras, segmentasi VLAN ketat per departemen klinis, dan gateway enkripsi terstandar HL7.",
      topologyLayers: [
        { layer: "Branch Edge Appliance", tech: "Dual-WAN SD-WAN Hardware", details: "Fiber Optic utama + Starlink / LTE backup dengan dynamic QoS auto-steering." },
        { layer: "Encrypted Overlay Mesh", tech: "IPSec IKEv2 with AES-256 GCM", details: "Terowongan terenkripsi end-to-end langsung antar-cabang tanpa hairpinning terpusat." },
        { layer: "Microsegmentation Core", tech: "Zero-Trust Network Access (ZTNA)", details: "Pemisahan ketat traffic peralatan diagnostik (MRI/CT), RME medis, dan Wi-Fi pasien." },
        { layer: "Regulatory Gateway", tech: "Encrypted HL7 FHIR API Gateway", details: "Sinkronisasi aman ke portal SATUSEHAT Kementerian Kesehatan RI." }
      ],
      metricsBeforeAfter: [
        { metric: "Downtime Koneksi RME Cabang", before: "14 Jam/Bulan", after: "< 3 Menit/Bulan", improvement: "99.98% High Availability" },
        { metric: "Waktu Failover Koneksi Putus", before: "45 Menit (Manual Replug)", after: "650 Milidetik (Otomatis)", improvement: "Sub-Second Steering" },
        { metric: "Latensi Integrasi SATUSEHAT", before: "Fluktuatif > 400 ms", after: "Stabil < 38 ms", improvement: "Zero Timeout Error" },
        { metric: "Kepatuhan Kerahasiaan Medis", before: "Rentan Akses Tak Terotorisasi", after: "100% Terenkripsi & Audit-Log", improvement: "UU PDP & Permenkes Ready" }
      ],
      regulatoryCompliance: ["UU No. 17 Tahun 2023 (Kesehatan)", "Permenkes No. 24/2022 (RME)", "UU PDP No. 27/2022", "HIPAA Security Architecture"],
      hardwareStandards: ["Fortinet FortiGate 200F Secure SD-WAN", "Cisco Catalyst 9300 Edge Switches", "Dual SIM LTE/5G Cellular Modems", "APC Smart-UPS On-Line 3kVA"],
      verifiedOutcome: "Kelancaran operasional rekam medis elektronik di 142 cabang tanpa kendala sambungan, dengan privasi rekam data pasien yang terlindungi penuh."
    },
    {
      id: "cs-manufacturing",
      slug: "modular-micro-datacenter-manufaktur-otomotif",
      code: "ARCH-MFG-04",
      title: "High-Density Modular Micro Data Center & Edge Telemetry Manufaktur Otomotif",
      sector: "manufacturing",
      sectorLabel: "Energi & Manufaktur",
      clientType: "Pabrik Perakitan Komponen Otomotif Multinasional (Cikarang)",
      location: "Kawasan Industri GIIC Cikarang, Jawa Barat",
      scope: "4 unit Modular Micro Data Center IP55, pendingin presisi in-row inverter, UPS N+1 baterai LiFePO4, supresi clean agent FK-5-1-12, dan integrasi telemetri SCADA.",
      challenge: "Debu partikel pabrik dan suhu ekstrem sering menyebabkan thermal throttling pada server kontrol lini produksi, memicu downtime perakitan robotik dan kerugian finansial per menit.",
      architectureSolution: "Penggelaran pod Smart Micro Data Center terisolasi dengan penutup lorong dingin tertutup rapat (sealed cold aisle), kendali iklim inverter presisi tinggi, dan proteksi daya tahan lonjakan harmonik.",
      topologyLayers: [
        { layer: "Physical Containment", tech: "IP55 Enclosed Cold-Aisle Pod", details: "Penyegelan hermetik anti-debu industri dengan pemantauan tekanan diferensial." },
        { layer: "Precision Climate Control", tech: "In-Row Inverter CRAC (PUE 1.23)", details: "Modulasi kompresor variabel dinamis dengan efisiensi energi 33% lebih hemat." },
        { layer: "Industrial Power Quality", tech: "Modular Online UPS + LiFePO4 Battery", details: "Daya bebas harmonik N+1 dengan jaminan runtime 45 menit saat pemadaman trafo." },
        { layer: "Environmental Telemetry", tech: "Modbus TCP & BACnet SCADA Gateway", details: "Sensor suhu 8 titik per rack, deteksi kebocoran cairan, dan supresi gas otomatis." }
      ],
      metricsBeforeAfter: [
        { metric: "Insiden Overheat Server", before: "3 - 5 Kasus/Bulan", after: "0 Insiden (Suhu Stabil 21°C)", improvement: "100% Thermal Stability" },
        { metric: "Power Usage Effectiveness (PUE)", before: "1.84 (Boros Energi)", after: "1.23 (Optimal)", improvement: "Hemat Biaya Daya 33%" },
        { metric: "Uptime Jalur Robotik PLC", before: "99.1% (Sering Reset Daya)", after: "99.99% Kontinu", improvement: "Zero Manufacturing Stop" },
        { metric: "Waktu Tanggap Kebakaran", before: "Manual Smoke Alarm", after: "Sub-10 Detik Deteksi Gas", improvement: "Clean Agent Suppression" }
      ],
      regulatoryCompliance: ["ANSI/TIA-942-B Rated 3 Specifications", "NFPA 2001 Clean Agent Fire Standard", "IEC 61000 Industrial Power Quality", "ISO 14001 Environmental"],
      hardwareStandards: ["Vertiv SmartRow High-Density Enclosure", "Liebert In-Row Inverter Cooling", "CATL Long-Life LiFePO4 Battery Pack", "FK-5-1-12 Fire Suppression System"],
      verifiedOutcome: "Infrastruktur komputasi edge pabrik beroperasi tanpa gangguan di tengah lingkungan industri berat, menjamin kelangsungan jalur ekspor otomotif."
    },
    {
      id: "cs-finance",
      slug: "migrasi-sovereign-private-cloud-keuangan",
      code: "ARCH-FIN-05",
      title: "Multi-Cloud to Sovereign On-Premise Private Cloud Lembaga Keuangan",
      sector: "banking",
      sectorLabel: "Perbankan & Finansial",
      clientType: "Perusahaan Pembiayaan & Multi-Finance Terkemuka (AUM Rp 8.4T)",
      location: "Data Center Duren Tiga - Data Center TB Simatupang, Jakarta",
      scope: "Migrasi 380 workload kontainer dari cloud publik global ke kluster sovereign private cloud berbasis Ceph all-flash storage dan Kubernetes on-premises terdistribusi.",
      challenge: "Biaya langganan cloud publik global membengkak drastis akibat kurs valuta asing dan biaya data egress tak terduga, sementara OJK mensyaratkan lokasi data core transaksi berada di dalam negeri.",
      architectureSolution: "Perancangan private cloud berdaulat mandiri dengan kluster hyperconverged AMD EPYC, software-defined storage Ceph NVMe-oF terdistribusi triple-replication, dan automated container orchestration.",
      topologyLayers: [
        { layer: "High-Core Compute Fabric", tech: "18x AMD EPYC 9654 Compute Nodes", details: "Total 2,304 core komputasi fisik dengan memori DDR5 18TB teregistrasi." },
        { layer: "Software-Defined Storage", tech: "Ceph NVMe-oF Distributed SAN", details: "Kapasitas 600TB usable all-flash dengan triple data redundancy di zona Jakarta." },
        { layer: "Container Networking", tech: "Production Kubernetes with Cilium eBPF", details: "Routing jaringan kontainer latensi sub-milidetik dengan firewall mikro eBPF." },
        { layer: "Disaster Recovery Sync", tech: "Asynchronous Block-Level Replication", details: "Replikasi blok data kontinu antar DC Duren Tiga dan TB Simatupang (RPO < 15 detik)." }
      ],
      metricsBeforeAfter: [
        { metric: "Beban OPEX Cloud Bulanan", before: "Rp 480 Juta/Bulan", after: "Rp 155 Juta/Bulan", improvement: "Penghematan 67.7% TCO" },
        { metric: "Biaya Data Egress Keluar", before: "Tak Terkendali (USD Billing)", after: "Rp 0 (Zero Egress Fee)", improvement: "Bebas Biaya Transfer" },
        { metric: "Latensi Transaksi Konsumen", before: "72 ms (Server Singapura)", after: "9.4 ms (Server Jakarta)", improvement: "7.6x Lebih Responsif" },
        { metric: "Kepatuhan Regulasi OJK", before: "Teguran Audit Kedaulatan", after: "100% Data di Wilayah NKRI", improvement: "Lolos POJK 11 & PADK 1/2026" }
      ],
      regulatoryCompliance: ["POJK No. 11/POJK.03/2022", "PADK OJK No. 1/2026", "UU PDP No. 27/2022", "SNI ISO/IEC 27001:2022"],
      hardwareStandards: ["Supermicro Dual-Socket AMD EPYC 9654", "Kioxia Enterprise NVMe U.3 SSDs", "NVIDIA Mellanox ConnectX-6 Dx 100G", "Arista 100GbE Leaf Switches"],
      verifiedOutcome: "Efisiensi pengeluaran teknologi miliaran rupiah per tahun dengan peningkatan performa aplikasi nasabah dan kepatuhan mutlak terhadap regulasi perbankan Indonesia."
    },
    {
      id: "cs-public",
      slug: "backbone-dwdm-surveillance-smart-city",
      code: "ARCH-PUB-06",
      title: "Optical DWDM Backbone & Surveillance Analytics Mesh Smart City Metropolitan",
      sector: "public",
      sectorLabel: "Infrastruktur Publik & Kota Cerdas",
      clientType: "Badan Pengelola Smart City & Transportasi Kota Metropolitan",
      location: "Wilayah Aglomerasi Metropolitan Jawa Barat",
      scope: "Pembangunan cincin optik DWDM 400Gbps 148 km, 32 node stasiun agregasi, dan gateway komputasi edge AI untuk analitik lalu lintas dan keselamatan publik real-time.",
      challenge: "Ribuan stream video CCTV lalu lintas resolusi tinggi mengalami penurunan kualitas dan delay hingga 8.4 detik saat ditransmisikan lewat bandwidth sewa, menghambat respons cepat penanganan kecelakaan.",
      architectureSolution: "Penyusunan jaringan tulang punggung serat optik mandiri dengan teknologi Dense Wavelength Division Multiplexing (DWDM) multi-terabit, menghubungkan node persimpangan jalan ke command center kota.",
      topologyLayers: [
        { layer: "Optical Transport Mesh", tech: "40-Channel DWDM Metro Ring (148 km)", details: "Kapasitas throughput agregat 400Gbps dengan redundansi proteksi optik sub-50ms." },
        { layer: "Edge Compute Appliances", tech: "Ruggedized AI Video Gateways", details: "Deteksi pelat nomor (ANPR) dan kepadatan kendaraan langsung di persimpangan jalan." },
        { layer: "Central Command Fabric", tech: "Carrier-Grade Core Routing Cluster", details: "Distribusi multicast ribuan aliran video 4K tanpa penurunan frame rate." },
        { layer: "Resilience & Security", tech: "Encrypted Optical Fiber Transport", details: "Proteksi fisik sensor getaran kabel optik dan enkripsi payload Layer-1." }
      ],
      metricsBeforeAfter: [
        { metric: "Kapasitas Bandwidth Backbone", before: "10 Gbps (Sewa Terbatas)", after: "400 Gbps (DWDM Mandiri)", improvement: "Kapasitas Naik 40x" },
        { metric: "Delay Deteksi Insiden Jalan", before: "8.4 Detik", after: "280 Milidetik", improvement: "Respons Nyaris Instan" },
        { metric: "Biaya Sewa Bandwidth Publik", before: "Rp 1.8 Miliar/Tahun", after: "Rp 0 (Infrastruktur Milik Sendiri)", improvement: "Aset Mandiri Daerah" },
        { metric: "Packet Loss Video 4K", before: "4.8% (Gambar Patah-Patah)", after: "0.00% (Lossless Optics)", improvement: "Perfect Stream Quality" }
      ],
      regulatoryCompliance: ["Perpres No. 95/2018 (SPBE)", "UU ITE & UU PDP 2024", "Standar Teknis Spektrum & Telekomunikasi Kominfo", "ITU-T G.694.1 DWDM"],
      hardwareStandards: ["Ciena / Huawei 400G Metro DWDM Muxponder", "NVIDIA Jetson Industrial Edge AI", "Cisco NCS 5500 Carrier-Grade Routers", "Furukawa 144-Core Underground Armored Fiber"],
      verifiedOutcome: "Infrastruktur transportasi kota metropolitan cerdas dengan transmisi video lossless tanpa biaya sewa bandwidth pihak ketiga yang berulang."
    }
  ],
  en: [
    {
      id: "cs-banking",
      slug: "modernisasi-core-network-tier3-bank-nasional",
      code: "ARCH-FIN-01",
      title: "Core Network & Tier-3 Data Center Modernization for National Private Bank",
      sector: "banking",
      sectorLabel: "Banking & Financial Services",
      clientType: "National Foreign Exchange Bank (54 Operational Branches)",
      location: "Jakarta (Cyber 1 DC) - Cimanggis (Technovillage DRC)",
      scope: "100G Spine-Leaf switching fabric, redundant DWDM metro optical ring, zero-loss BGP EVPN peering, and POJK 11/2022 regulatory compliance.",
      challenge: "Inter-DC transaction latency spiked to 18.4ms alongside prolonged manual failovers (MTTR 4.8 hours) during upstream carrier cuts, triggering audit deficiencies under OJK compliance guidelines.",
      architectureSolution: "Engineering a carrier-grade Spine-Leaf fabric connected via dual-homed 100Gbps DWDM ring transit between Primary DC and DRC, driven by automated BGP EVPN/VXLAN failover under 300ms.",
      topologyLayers: [
        { layer: "L1 Physical Backbone", tech: "96-Core Armored Single-Mode Fiber", details: "Dual-path underground physical routing compliant with TIA-942 Rated 3 standards with zero shared trenches." },
        { layer: "L2-L3 Fabric", tech: "Arista Spine-Leaf 100G with RoCEv2", details: "Non-blocking switching architecture delivering 12.8 Tbps aggregate throughput with sub-microsecond ASIC latency." },
        { layer: "L4-L7 Security & Crypto", tech: "Dual Active-Active NGFW + Thales Luna HSM", details: "Hardware-level root of trust for cryptographic ISO 8583 payment transactions and PIN block processing." },
        { layer: "Operations & Telemetry", tech: "Out-of-Band 24/7 Managed NOC", details: "Continuous streaming SNMPv3 telemetry with automated route rotation and anomaly detection." }
      ],
      metricsBeforeAfter: [
        { metric: "Network Incident MTTR", before: "4.8 Hours (Manual)", after: "12 Minutes (Automated)", improvement: "-95.8% MTTR" },
        { metric: "Inter-DC Transaction Latency", before: "18.4 ms", after: "1.8 ms", improvement: "10x Faster Response" },
        { metric: "Availability (SLA Uptime)", before: "99.82%", after: "99.995%", improvement: "Zero Unplanned Outages" },
        { metric: "OJK Regulatory Audit", before: "Deficient RTO/RPO Findings", after: "100% Pass POJK 11/2022", improvement: "Certified Compliant" }
      ],
      regulatoryCompliance: ["POJK No. 11/POJK.03/2022", "Indonesian PDP Law No. 27/2022", "ISO/IEC 27001:2022", "ANSI/TIA-942 Rated 3"],
      hardwareStandards: ["Arista 7280R3 100G Spine-Leaf", "Fortinet FortiGate 3000F Active-Active", "Thales Luna PCIe HSM", "Corning SMF-28 Ultra Optic"],
      verifiedOutcome: "Complete elimination of inter-DC single points of failure, sub-second payment switching clearance, and certified national Tier-3 banking resilience."
    },
    {
      id: "cs-energy",
      slug: "sovereign-ai-rag-bumn-energi",
      code: "ARCH-ENG-02",
      title: "Air-Gapped Sovereign AI & Enterprise RAG Deployment for National Energy SOE",
      sector: "energy",
      sectorLabel: "Energy & Natural Resources",
      clientType: "National Oil & Gas Exploration Consortium",
      location: "South Jakarta (Isolated On-Premise High-Security Facility)",
      scope: "On-premise AI compute cluster with dual 8x H100 GPUs, enterprise Milvus vector store, anti-hallucination RAG with 100% data isolation and zero egress.",
      challenge: "Hundreds of thousands of seismic surveys, drilling logs, concession deeds, and safety regulations were scattered across dozens of silos. Public cloud AI APIs were strictly banned to safeguard state secrets.",
      architectureSolution: "Architecting an air-gapped private AI compute facility featuring high-density liquid-cooled GPU nodes, local vLLM inference engine, encrypted vector database, and departmental Role-Based Access Control.",
      topologyLayers: [
        { layer: "AI Compute Nodes", tech: "2x 8x NVIDIA H100 SXM5 80GB", details: "Massive parallel throughput with NVLink 900GB/s inter-GPU interconnect bandwidth." },
        { layer: "High-Speed Interconnect", tech: "NVIDIA Quantum-2 InfiniBand 400G", details: "Zero-packet-loss fabric engineered for distributed tensor synchronization with sub-microsecond latency." },
        { layer: "Vector Storage SAN", tech: "240TB NVMe-oF High-IOPS Fabric", details: "Hardware-encrypted AES-256 vector archive delivering sustained 40GB/s read throughput." },
        { layer: "Cognitive Inference Bus", tech: "Air-Gapped vLLM + Milvus RAG", details: "Locally fine-tuned Llama-3 & DeepSeek models with mandatory verifiable document citation grounding." }
      ],
      metricsBeforeAfter: [
        { metric: "Technical Document Retrieval", before: "2.5 Business Days", after: "1.4 Seconds", improvement: "Instant Semantic Search" },
        { metric: "Confidential Data Egress Risk", before: "High (Public Clouds)", after: "0% (Air-Gapped)", improvement: "100% Data Sovereignty" },
        { metric: "Parameter Extraction Accuracy", before: "61% (Manual Searches)", after: "98.4% (With Citations)", improvement: "+37.4% Accuracy" },
        { metric: "PDP Law & State Secrets Compliance", before: "Severe Legal Exposure", after: "100% Retained in Domestic Jurisdiction", improvement: "Zero Legal Exposure" }
      ],
      regulatoryCompliance: ["Indonesian PDP Law No. 27/2022", "PP No. 71/2019 (PSTE)", "ISO 27701 (Privacy)", "NIST SP 800-53 Security"],
      hardwareStandards: ["Dell PowerEdge XE9680 (8x H100 SXM5)", "NVIDIA Quantum-2 QM9700 Switches", "Pure Storage FlashBlade//S", "In-Row Precision Chilled Water Cooling"],
      verifiedOutcome: "The enterprise leverages cutting-edge generative AI capabilities entirely autonomously, without a single byte of classified geological intelligence leaving national soil."
    },
    {
      id: "cs-healthcare",
      slug: "zero-trust-sd-wan-multi-branch-rumah-sakit",
      code: "ARCH-HLT-03",
      title: "Zero-Trust Multi-Branch SD-WAN for Distributed Hospital & Lab Network",
      sector: "healthcare",
      sectorLabel: "Distributed Healthcare",
      clientType: "Integrated Healthcare Network (142 Private Clinics & Hospitals)",
      location: "Nationwide (Sumatra, Java, Kalimantan, Sulawesi)",
      scope: "Centralized SD-WAN fabric, dual-uplink multi-homing with automated LEO satellite failover, Zero-Trust ZTNA microsegmentation, and HL7 FHIR SATUSEHAT integration.",
      challenge: "Regional clinic branches suffered frequent disconnects from Electronic Medical Records (EMR) due to erratic local ISP links. Unencrypted patient transit risked severe regulatory penalties under the PDP Law.",
      architectureSolution: "Deploying a Secure SD-WAN fabric with hardware-driven dynamic link steering, hardware-accelerated IPSec tunnels, departmental clinical VLAN separation, and standardized HL7 cryptographic gateways.",
      topologyLayers: [
        { layer: "Branch Edge Appliance", tech: "Dual-WAN SD-WAN Hardware", details: "Primary terrestrial optical fiber backed by Starlink LEO / LTE cellular with dynamic QoS auto-steering." },
        { layer: "Encrypted Overlay Mesh", tech: "IPSec IKEv2 with AES-256 GCM", details: "Direct branch-to-branch encrypted tunnels eliminating latency penalties of centralized hub hairpinning." },
        { layer: "Microsegmentation Core", tech: "Zero-Trust Network Access (ZTNA)", details: "Strict isolation separating diagnostic modalities (MRI/CT), clinical EMRs, and guest Wi-Fi." },
        { layer: "Regulatory Gateway", tech: "Encrypted HL7 FHIR API Gateway", details: "Secure cryptographic synchronization connecting directly to the Ministry of Health SATUSEHAT exchange." }
      ],
      metricsBeforeAfter: [
        { metric: "Branch EMR Outage Time", before: "14 Hours/Month", after: "< 3 Minutes/Month", improvement: "99.98% High Availability" },
        { metric: "Carrier Link Failover Time", before: "45 Minutes (Manual Cable Replug)", after: "650 Milliseconds (Automated)", improvement: "Sub-Second Steering" },
        { metric: "SATUSEHAT Sync Latency", before: "Erratic > 400 ms", after: "Consistent < 38 ms", improvement: "Zero Timeout Errors" },
        { metric: "Patient Data Privacy Posture", before: "Vulnerable to Local Sniffing", after: "100% Encrypted & Audited", improvement: "PDP & Permenkes Certified" }
      ],
      regulatoryCompliance: ["Health Law No. 17/2023", "Permenkes No. 24/2022 (EMR)", "Indonesian PDP Law No. 27/2022", "HIPAA Security Architecture"],
      hardwareStandards: ["Fortinet FortiGate 200F Secure SD-WAN", "Cisco Catalyst 9300 Edge Switches", "Dual SIM LTE/5G Cellular Modems", "APC Smart-UPS On-Line 3kVA"],
      verifiedOutcome: "Uninterrupted electronic medical records access across 142 nationwide branches with absolute patient data confidentiality and regulatory compliance."
    },
    {
      id: "cs-manufacturing",
      slug: "modular-micro-datacenter-manufaktur-otomotif",
      code: "ARCH-MFG-04",
      title: "Modular High-Density Micro Data Center & Edge Telemetry for Automotive OEM",
      sector: "manufacturing",
      sectorLabel: "Energy & Manufacturing",
      clientType: "Multinational Automotive Component Assembly Facility",
      location: "GIIC Industrial Estate, Cikarang, West Java",
      scope: "4x IP55 Modular Micro Data Centers, inverter in-row precision cooling, N+1 LiFePO4 battery UPS, FK-5-1-12 clean agent fire suppression, and SCADA telemetry.",
      challenge: "Severe particulate dust and ambient plant temperatures triggered recurring thermal throttling on robotic PLC servers, halting manufacturing lines and incurring thousands of dollars in hourly losses.",
      architectureSolution: "Deploying self-contained IP55 Smart Micro Data Center pods with hermetically sealed cold aisles, high-precision inverter climate control, and harmonic surge protection.",
      topologyLayers: [
        { layer: "Physical Containment", tech: "IP55 Enclosed Cold-Aisle Pod", details: "Industrial-grade dust-tight enclosure featuring active differential pressure monitoring." },
        { layer: "Precision Climate Control", tech: "In-Row Inverter CRAC (PUE 1.23)", details: "Dynamic variable-speed inverter compressor delivering 33% electricity savings over perimeter units." },
        { layer: "Industrial Power Quality", tech: "Modular Online UPS + LiFePO4 Battery", details: "Harmonic-free N+1 power with 45 minutes of autonomous battery runtime during utility sags." },
        { layer: "Environmental Telemetry", tech: "Modbus TCP & BACnet SCADA Gateway", details: "8-point per-rack temperature telemetry, fluid leak detection, and automated chemical gas fire release." }
      ],
      metricsBeforeAfter: [
        { metric: "Server Overheating Incidents", before: "3 - 5 Incidents/Month", after: "0 Incidents (Constant 21°C)", improvement: "100% Thermal Stability" },
        { metric: "Power Usage Effectiveness (PUE)", before: "1.84 (High Overhead)", after: "1.23 (Highly Optimized)", improvement: "33% Power Cost Savings" },
        { metric: "Robotic Assembly PLC Uptime", before: "99.1% (Frequent Reboots)", after: "99.99% Continuous", improvement: "Zero Production Line Stops" },
        { metric: "Fire Alarm Response Interval", before: "Manual Smoke Alarm", after: "Sub-10 Second Chemical Release", improvement: "Clean Agent Suppression" }
      ],
      regulatoryCompliance: ["ANSI/TIA-942-B Rated 3 Specifications", "NFPA 2001 Clean Agent Fire Standard", "IEC 61000 Industrial Power Quality", "ISO 14001 Environmental"],
      hardwareStandards: ["Vertiv SmartRow High-Density Enclosure", "Liebert In-Row Inverter Cooling", "CATL Long-Life LiFePO4 Battery Pack", "FK-5-1-12 Fire Suppression System"],
      verifiedOutcome: "Mission-critical manufacturing edge servers operate continuously within a harsh industrial environment, safeguarding international automotive export schedules."
    },
    {
      id: "cs-finance",
      slug: "migrasi-sovereign-private-cloud-keuangan",
      code: "ARCH-FIN-05",
      title: "Public Cloud to Sovereign On-Premise Private Cloud for Financial Institution",
      sector: "banking",
      sectorLabel: "Banking & Financial Services",
      clientType: "Leading Consumer Finance Corporation (AUM Rp 8.4T)",
      location: "Duren Tiga DC - TB Simatupang DC, Jakarta",
      scope: "Migrating 380 containerized workloads from public hyperscalers to a sovereign on-premise private cloud powered by Ceph all-flash storage and distributed bare-metal Kubernetes.",
      challenge: "Escalating hyperscaler bills caused by forex swings and punitive data egress fees, compounded by strict OJK mandates requiring core consumer financial data to reside within Indonesia.",
      architectureSolution: "Engineering an on-premise sovereign private cloud utilizing AMD EPYC hyperconverged nodes, triple-replicated Ceph NVMe-oF distributed storage, and automated multi-tenant container orchestration.",
      topologyLayers: [
        { layer: "High-Core Compute Fabric", tech: "18x AMD EPYC 9654 Compute Nodes", details: "2,304 physical bare-metal cores with 18TB registered ECC DDR5 memory." },
        { layer: "Software-Defined Storage", tech: "Ceph NVMe-oF Distributed SAN", details: "600TB usable all-flash capacity with synchronous triple replication across the Jakarta zone." },
        { layer: "Container Networking", tech: "Production Kubernetes with Cilium eBPF", details: "Sub-millisecond container network routing with kernel-level eBPF micro-firewall policies." },
        { layer: "Disaster Recovery Sync", tech: "Asynchronous Block-Level Replication", details: "Continuous storage block replication between primary DC and secondary DRC with RPO under 15 seconds." }
      ],
      metricsBeforeAfter: [
        { metric: "Monthly Cloud OPEX Spend", before: "Rp 480 Million/Month", after: "Rp 155 Million/Month", improvement: "67.7% TCO Savings" },
        { metric: "Data Egress & Transfer Fees", before: "Unpredictable (USD Billing)", after: "Rp 0 (Zero Egress Fee)", improvement: "100% Free Data Transit" },
        { metric: "Consumer App Latency", before: "72 ms (Singapore Hyperscaler)", after: "9.4 ms (Local Jakarta DC)", improvement: "7.6x More Responsive" },
        { metric: "OJK Regulatory Audit Status", before: "Sovereignty Audit Warning", after: "100% Domestic Jurisdiction", improvement: "POJK 11 & PADK 1/2026 Ready" }
      ],
      regulatoryCompliance: ["POJK No. 11/POJK.03/2022", "PADK OJK No. 1/2026", "Indonesian PDP Law No. 27/2022", "SNI ISO/IEC 27001:2022"],
      hardwareStandards: ["Supermicro Dual-Socket AMD EPYC 9654", "Kioxia Enterprise NVMe U.3 SSDs", "NVIDIA Mellanox ConnectX-6 Dx 100G", "Arista 100GbE Leaf Switches"],
      verifiedOutcome: "Annual technology savings exceeding billions of Rupiah coupled with vastly superior customer app performance and certified domestic banking regulatory compliance."
    },
    {
      id: "cs-public",
      slug: "backbone-dwdm-surveillance-smart-city",
      code: "ARCH-PUB-06",
      title: "DWDM Optical Backbone & Surveillance Analytics Mesh for Metropolitan Smart City",
      sector: "public",
      sectorLabel: "Public Infrastructure & Smart Cities",
      clientType: "Metropolitan Smart City & Transit Management Agency",
      location: "Metropolitan Agglomeration Area, West Java",
      scope: "Engineering a 148 km 400Gbps DWDM optical ring, 32 aggregation station nodes, and edge AI video gateways for real-time traffic and public safety analytics.",
      challenge: "Thousands of high-definition municipal traffic video feeds suffered frame drops and latency delays of up to 8.4 seconds over leased bandwidth, crippling emergency response times.",
      architectureSolution: "Deploying a self-owned multi-terabit Dense Wavelength Division Multiplexing (DWDM) optical backbone linking major municipal intersections directly to the city command center.",
      topologyLayers: [
        { layer: "Optical Transport Mesh", tech: "40-Channel DWDM Metro Ring (148 km)", details: "400Gbps aggregate throughput capacity with sub-50ms optical protection switching." },
        { layer: "Edge Compute Appliances", tech: "Ruggedized AI Video Gateways", details: "Automatic number plate recognition (ANPR) and vehicle queue detection performed right at the intersection." },
        { layer: "Central Command Fabric", tech: "Carrier-Grade Core Routing Cluster", details: "Multicast distribution of thousands of simultaneous 4K streams with zero frame rate degradation." },
        { layer: "Resilience & Security", tech: "Encrypted Optical Fiber Transport", details: "Physical acoustic vibration intrusion sensing along cable conduits and Layer-1 payload encryption." }
      ],
      metricsBeforeAfter: [
        { metric: "Backbone Bandwidth Capacity", before: "10 Gbps (Leased & Throttled)", after: "400 Gbps (Dedicated DWDM)", improvement: "40x Capacity Expansion" },
        { metric: "Traffic Incident Detection Latency", before: "8.4 Seconds", after: "280 Milliseconds", improvement: "Instantaneous Response" },
        { metric: "Annual Leased Bandwidth OPEX", before: "Rp 1.8 Billion/Year", after: "Rp 0 (Self-Owned Asset)", improvement: "Permanent Municipal Asset" },
        { metric: "4K Video Stream Packet Loss", before: "4.8% (Frequent Video Artifacts)", after: "0.00% (Lossless Optics)", improvement: "Flawless Broadcast Quality" }
      ],
      regulatoryCompliance: ["Presidential Decree No. 95/2018 (SPBE)", "Indonesian ITE & PDP Law 2024", "Komdigi Telecommunications Spectrum Standards", "ITU-T G.694.1 DWDM"],
      hardwareStandards: ["Ciena / Huawei 400G Metro DWDM Muxponder", "NVIDIA Jetson Industrial Edge AI", "Cisco NCS 5500 Carrier-Grade Routers", "Furukawa 144-Core Underground Armored Fiber"],
      verifiedOutcome: "Metropolitan smart city transportation infrastructure operating with lossless high-definition video telemetry and zero ongoing recurring third-party bandwidth costs."
    }
  ]
};

export function getLocalizedProjects(lang: Language): ProjectCaseStudy[] {
  return LOCALIZED_PROJECTS[lang] || LOCALIZED_PROJECTS.id;
}

// ============================================================================
// 5. LOCALIZED INSIGHTS
// ============================================================================
export const LOCALIZED_INSIGHTS: Record<Language, InsightItem[]> = {
  id: [
    {
      id: "why-private-ai-becoming-enterprise-infrastructure-decision",
      slug: "why-private-ai-becoming-enterprise-infrastructure-decision",
      title: "Mengapa Private AI Kini Menjadi Keputusan Infrastruktur Enterprise",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "Maret 2026",
      snippet: "Mengapa mengandalkan API model bahasa publik pihak ketiga membawa risiko kepatuhan hukum dan kerahasiaan data, serta bagaimana korporasi modern kini memindahkan beban kerja inferensi AI langsung ke data center privat mereka sendiri.",
      content: "Di era kecerdasan buatan saat ini, banyak organisasi tergiur dengan kemudahan API model bahasa publik. Namun, bagi sektor perbankan, manufaktur, institusi pemerintah, dan korporasi besar, mengekspos data internal ke server pihak ketiga adalah risiko eksistensial. Membangun Private AI on-premise bukan lagi sekadar eksperimen software, melainkan keputusan infrastruktur fundamental yang memerlukan kesiapan daya komputasi GPU, arsitektur RAG, dan isolasi jaringan yang kokoh.",
      sections: [
        {
          title: "1. Jebakan Ketergantungan API Publik & Celah Kepatuhan Regulasi",
          paragraphs: [
            "Di awal gelombang kecerdasan buatan generatif, adopsi teknologi ini kerap dipersepsikan sesederhana memanggil endpoint REST API penyedia cloud publik asing. Namun, bagi korporasi di Indonesia, implementasi semacam ini segera berbenturan dengan kenyataan regulasi nasional yang ketat, terutama berlakunya penuh Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) serta aturan sektoral perbankan dari Otoritas Jasa Keuangan (OJK SEOJK No. 29/2022) dan Bank Indonesia.",
            "Ketika dokumen kontrak, riwayat transaksi keuangan nasabah, rekam medis klinis, atau formula proses manufaktur dikirimkan ke server model pihak ketiga, organisasi secara hukum telah kehilangan yurisdiksi dan jejak audit (audit trail) atas data tersebut. Sekalipun penyedia menjanjikan kebijakan 'zero retention', lalu lintas data yang melintasi kabel bawah laut internasional tetap rentan terhadap penyadapan dan perubahan kebijakan sepihak.",
            "Oleh karena itu, dewan direksi dan komite risiko kini melihat AI bukan lagi sebagai aplikasi periferal dari tim riset, melainkan sebagai aset data inti yang harus tunduk pada kontrol kedaulatan digital (digital sovereignty) yang absolut."
          ],
          takeaway: "Setiap paket data yang meninggalkan batas perimeter internal organisasi membawa liabilitas hukum dan risiko sanksi hingga 2% dari pendapatan tahunan menurut amanat UU PDP."
        },
        {
          title: "2. Anatomi Tumpukan Arsitektur Private AI On-Premise",
          paragraphs: [
            "Membangun Private AI mandiri bukanlah sekadar memasang server tunggal lalu menjalankan model open-source. Dibutuhkan sebuah arsitektur berlapis yang dirancang untuk stabilitas, latensi rendah, dan tata kelola keamanan ketat.",
            "Lapisan paling dasar adalah infrastruktur komputasi berdensitas tinggi: server GPU enterprise (seperti kluster NVIDIA HGX H100 atau L40S) yang ditopang oleh arsitektur daya redundan dan pendinginan presisi. Di atasnya, sistem operasi terisolasi menjalankan runtime inferensi teroptimasi seperti vLLM atau TensorRT-LLM, yang mampu memaksimalkan pemanfaatan memori GPU melalui teknik PagedAttention dan continuous batching.",
            "Pada lapisan data, sistem Retrieval-Augmented Generation (RAG) privat memanfaatkan vector database lokal (seperti Qdrant atau Milvus) yang berjalan di dalam jaringan lokal. Dokumen internal korporasi dipecah menjadi vektor embedding secara lokal, sehingga proses temu kembali informasi (semantic retrieval) berlangsung dalam hitungan milidetik tanpa satu byte pun data keluar ke internet publik."
          ],
          takeaway: "Integritas Private AI ditentukan oleh isolasi zero-egress: seluruh proses tokenisasi, embedding, pencarian vektor, dan inferensi berlangsung 100% di dalam jaringan lokal organisasi."
        },
        {
          title: "3. Komparasi Ekonomi: TCO Sewa API Cloud vs Investasi Server Mandiri",
          paragraphs: [
            "Banyak tim keuangan mengira bahwa sewa API cloud publik selalu lebih hemat daripada belanja modal (CAPEX) pengadaan server. Asumsi ini hanya benar ketika volume penggunaan masih dalam taraf pengujian sporadis (di bawah 100.000 token per hari).",
            "Namun, saat sistem AI mulai diintegrasikan ke alur kerja operasional inti—misalnya memverifikasi kelayakan ribuan dokumen pengadaan harian, mengotomasi audit kepatuhan transaksi, atau melayani customer query jutaan pelanggan—biaya API berbasis token melonjak secara tak terprediksi setiap bulannya. Ditambah lagi dengan biaya tersembunyi berupa data egress fee dari penyedia cloud.",
            "Dalam horizon waktu 3 tahun, analisis Total Cost of Ownership (TCO) menunjukkan bahwa investasi pada kluster server inferensi on-premise mampu menghemat biaya operasional antara 40% hingga 65% dibandingkan sewa API cloud publik. Biaya pembelian hardware dapat diamortisasi sebagai aset modal, sementara biaya operasional bulanan menjadi sangat stabil dan terukur."
          ],
          takeaway: "Pada volume penggunaan tingkat enterprise, titik impas (ROI) infrastruktur GPU on-premise umumnya tercapai dalam 9 hingga 14 bulan operasional."
        },
        {
          title: "4. Panduan Transisi & Rekomendasi Eksekusi",
          paragraphs: [
            "Untuk memulai transisi menuju kedaulatan AI, organisasi disarankan menerapkan pendekatan modular berfase. Fase pertama adalah inventarisasi dan klasifikasi data: pisahkan data publik dari data berklasifikasi rahasia (confidential) dan data pribadi (PII).",
            "Fase kedua adalah implementasi Proof-of-Concept (PoC) terisolasi menggunakan 2 hingga 4 kartu GPU enterprise untuk menangani use case spesifik bernilai tinggi, seperti otomasi analitik dokumen hukum atau ringkasan telemetri operasional. Pantau parameter teknis seperti latency Time-To-First-Token (TTFT) dan throughput token per detik di bawah beban nyata.",
            "Setelah arsitektur teruji, fase ketiga adalah integrasi menyeluruh dengan sistem identitas korporat (IAM/LDAP) dan penerapan segmentasi jaringan zero-trust sebelum akses diperluas ke ribuan karyawan."
          ],
          takeaway: "Kunci keberhasilan adopsi AI enterprise terletak pada kedisiplinan rekayasa fondasi: pastikan daya, jaringan, dan keamanan lokal siap sebelum memperbesar skala model."
        }
      ],
      sources: [
        {
          title: "Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)",
          institution: "Pemerintah Republik Indonesia & Dewan Perwakilan Rakyat RI",
          type: "Regulasi & Undang-Undang",
          referenceNumber: "Lembaran Negara RI Tahun 2022 No. 196 / TLN No. 6820",
          url: "https://peraturan.go.id/id/uu-no-27-tahun-2022",
          year: "2022"
        },
        {
          title: "Surat Edaran OJK tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum",
          institution: "Otoritas Jasa Keuangan (OJK)",
          type: "Pedoman Otoritas Sektoral",
          referenceNumber: "SEOJK No. 29/SEOJK.03/2022 & POJK 11/2022",
          url: "https://ojk.go.id",
          year: "2022"
        },
        {
          title: "Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM Project)",
          institution: "UC Berkeley SkyLab & LMSYS Org",
          type: "Riset Teknis & Whitepaper",
          referenceNumber: "arXiv:2309.06180 (ACM SOSP 2023 Proceedings)",
          url: "https://arxiv.org/abs/2309.06180",
          year: "2023"
        },
        {
          title: "ISO/IEC 27701:2019 Security Techniques — Privacy Information Management System",
          institution: "International Organization for Standardization (ISO)",
          type: "Standar Internasional",
          referenceNumber: "ISO/IEC 27701:2019",
          url: "https://www.iso.org/standard/71670.html",
          year: "2019"
        }
      ]
    },
    {
      id: "building-infrastructure-ready-for-ai",
      slug: "building-infrastructure-ready-for-ai",
      title: "Membangun Infrastruktur yang Siap untuk Komputasi AI",
      category: "PHYSICAL ARCHITECTURE",
      date: "Maret 2026",
      snippet: "Persyaratan daya densitas tinggi, pendinginan presisi in-row, dan interkoneksi serat optik 400G yang dibutuhkan untuk menyokong kluster komputasi AI modern.",
      content: "Kluster pelatihan dan inferensi AI memerlukan kerapatan daya listrik hingga 30–50 kW per rack, jauh melampaui rata-rata data center konvensional (5–8 kW). Tanpa sistem pendingin in-row yang presisi dan arsitektur jaringan RoCEv2 berkecepatan 400G, server komputasi AI akan mengalami thermal throttling dan packet drop yang merusak performa model.",
      sections: [
        {
          title: "1. Tantangan Densitas Daya Ekstrem: Dari 5 kW Menuju 50 kW per Rack",
          paragraphs: [
            "Ruang server dan data center enterprise di Indonesia selama puluhan tahun dirancang dengan standar beban listrik rata-rata 4 hingga 8 kW per rack server standar. Arsitektur ini sangat memadai untuk menjalankan server aplikasi web, database relasional, dan storage array konvensional.",
            "Namun, kehadiran server komputasi AI modern mengubah kalkulasi fisik ini secara drastis. Satu chassis server berkemampuan 8 GPU berarsitektur modern membutuhkan daya listrik antara 6 kW hingga 10.2 kW. Ketika dua atau tiga unit server GPU semacam ini dipasang dalam satu rack beserta switch jaringan berkecepatan tinggi, kebutuhan daya per rack dapat melonjak menjadi 30 kW hingga lebih dari 50 kW.",
            "Kenaikan kerapatan daya hingga sepuluh kali lipat ini menuntut perancangan ulang sistem distribusi kelistrikan: mulai dari trafo gardu, sistem UPS terisolasi dengan redundansi 2N, hingga Power Distribution Unit (PDU) tiga fasa berkapasitas 63 Ampere dengan pemantauan arus real-time pada setiap outlet individu."
          ],
          takeaway: "Infrastruktur kelistrikan untuk AI memerlukan transisi ke busway berkapasitas tinggi dan PDU cerdas untuk mencegah ketidakseimbangan fasa dan pemadaman kaskade."
        },
        {
          title: "2. Manajemen Termal & Urgensi Pendinginan Presisi In-Row",
          paragraphs: [
            "Hukum termodinamika menyatakan bahwa setiap kilowatt energi listrik yang dikonsumsi oleh chip semikonduktor akan dikonversi menjadi energi panas dalam jumlah yang sama persis. Rack server berdensitas 40 kW menghasilkan panas yang setara dengan puluhan kompor industri yang menyala simultan di ruang tertutup.",
            "Sistem pendinginan ruangan konvensional (perimeter Computer Room Air Conditioner / CRAC) yang meniupkan udara dingin dari bawah lantai panggung (raised floor) terbukti gagal mengatasi titik panas (hotspots) pada beban di atas 15 kW per rack. Udara dingin mengalami pencampuran prematur dengan udara panas sebelum mencapai kipas server.",
            "Solusi teknis yang wajib diterapkan adalah arsitektur pendinginan jarak dekat (close-coupled cooling), seperti unit In-Row Cooling berbasis chilled water atau Direct Expansion (DX) yang diletakkan tepat di antara rack server, dikombinasikan dengan sistem penahanan koridor panas atau dingin (Aisle Containment). Dengan cara ini, udara dingin langsung disalurkan ke inlet server dan udara panas langsung ditangkap tanpa bercampur, menjaga suhu chip di bawah batas thermal throttling."
          ],
          takeaway: "Penahanan koridor (containment) dan pendinginan InRow bukan lagi opsi tambahan, melainkan prasyarat mutlak untuk menjaga clock GPU tetap pada performa puncak."
        },
        {
          title: "3. Jaringan Fabric Kecepatan Tinggi & Protokol RoCEv2",
          paragraphs: [
            "Beban kerja komputasi AI—terutama proses inferensi model berparameter besar dan fine-tuning—memerlukan transfer bobot model (tensor) antar-node secara terus-menerus. Jika interkoneksi jaringan memiliki latensi tinggi atau jitter, GPU bertenaga tinggi akan terhenti dan menganggur (GPU idle/starvation) menunggu data tiba.",
            "Jaringan Gigabit Ethernet standar (1G/10G) sama sekali tidak mampu menangani beban ini. Dibutuhkan kain jaringan (fabric) berkecepatan minimal 100G hingga 400G per port switch, dengan kabel serat optik multi-mode OM4 atau single-mode OS2 berstandar MPO/MTP berpresisi tinggi.",
            "Selain bandwidth fisik, protokol transfer data harus menggunakan Remote Direct Memory Access over Converged Ethernet (RoCEv2). RoCEv2 memungkinkan GPU membaca dan menulis langsung ke memori GPU node lain tanpa melibatkan CPU host atau kernel stack sistem operasi, memangkas latensi transfer ke hitungan sub-mikrodetik."
          ],
          takeaway: "Implementasi Priority Flow Control (PFC) dan Explicit Congestion Notification (ECN) pada switch jaringan adalah kunci untuk menciptakan jaringan Ethernet tanpa kehilangan paket (lossless fabric)."
        },
        {
          title: "4. Arsitektur Storage All-Flash Bertingkat (Tiered NVMe)",
          paragraphs: [
            "Pipeline data AI memerlukan arsitektur penyimpanan data bertingkat. Pada tier paling panas (hot tier), dibutuhkan array All-Flash NVMe over Fabrics (NVMe-oF) yang mampu memberikan throughput baca sekuensial hingga puluhan gigabyte per detik dengan IOPS jutaan untuk menyuplai dataset ke RAM GPU.",
            "Sementara itu, untuk tier kedua (warm/cold tier), sistem object storage lokal berkapasitas petabyte dengan protokol kompatibel S3 digunakan untuk menyimpan arsip data latih historis, checkpoint model, dan log telemetri jangka panjang.",
            "Pemisahan tier ini menjamin bahwa investasi NVMe berkecepatan tinggi dimanfaatkan optimal hanya untuk data yang sedang aktif diproses, menghasilkan efisiensi biaya penyimpanan tanpa mengorbankan kecepatan inferensi."
          ],
          takeaway: "Kombinasi NVMe-oF untuk data aktif dan S3-compatible lokal untuk dataset besar menghadirkan performa maksimal dengan efisiensi biaya penyimpanan yang rasional."
        }
      ],
      sources: [
        {
          title: "Telecommunications Infrastructure Standard for Data Centers",
          institution: "Telecommunications Industry Association (TIA)",
          type: "Standar Internasional",
          referenceNumber: "ANSI/TIA-942-B / TIA-942-C High-Density AI Addendum",
          url: "https://tiaonline.org",
          year: "2024"
        },
        {
          title: "IEEE Std 802.3ck-2022: Physical Layer Specifications for 100 Gb/s, 200 Gb/s, and 400 Gb/s Operation",
          institution: "IEEE Computer Society / Standards Association",
          type: "Standar Internasional",
          referenceNumber: "IEEE Std 802.3ck-2022",
          url: "https://standards.ieee.org",
          year: "2022"
        },
        {
          title: "Thermal Guidelines for Data Processing Environments (5th Edition)",
          institution: "ASHRAE Technical Committee TC 9.9 Mission Critical Facilities",
          type: "Riset Teknis & Whitepaper",
          referenceNumber: "ASHRAE TC 9.9 Liquid & Air Cooling Guidance",
          url: "https://www.ashrae.org",
          year: "2023"
        },
        {
          title: "Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (PSTE)",
          institution: "Kementerian Komunikasi dan Informatika RI (Komdigi)",
          type: "Regulasi & Undang-Undang",
          referenceNumber: "PP No. 71 Tahun 2019 (Pasal 20 & 21)",
          url: "https://peraturan.go.id/id/pp-no-71-tahun-2019",
          year: "2019"
        }
      ]
    },
    {
      id: "cybersecurity-starts-with-architecture",
      slug: "cybersecurity-starts-with-architecture",
      title: "Keamanan Siber Dimulai dari Arsitektur, Bukan Sekadar Software",
      category: "ZERO-TRUST DEFENSE",
      date: "Februari 2026",
      snippet: "Mengapa firewall konvensional tidak lagi memadai dan bagaimana segmentasi mikro serta continuous identity verification melindungi data korporasi dari pergerakan lateral peretas.",
      content: "Kesalahan umum banyak organisasi adalah menganggap keamanan siber semata-mata produk software tambahan. Padahal, celah pada layer fisik, ketiadaan segmentasi VLAN, dan hak akses yang terlalu longgar dapat meruntuhkan firewall termahal sekalipun. Pendekatan arsitektur Zero-Trust memastikan bahwa setiap permintaan akses diverifikasi secara terus menerus.",
      sections: [
        {
          title: "1. Keruntuhan Paradigma Keamanan Perimeter 'Kastil & Parit'",
          paragraphs: [
            "Selama bertahun-tahun, keamanan siber enterprise bertumpu pada premis 'Castle and Moat': perimeter luar dijaga oleh firewall tebal, dan siapapun yang berhasil berada di dalam batas fisik jaringan (melalui kabel LAN kantor atau sambungan VPN) dianggap tepercaya secara otomatis.",
            "Laporan insiden siber global dan nasional membuktikan bahwa model ini sudah usang. Lebih dari 80% kebocoran data besar terjadi bukan karena penyerang menjebol firewall perimeter secara frontal, melainkan karena kredensial karyawan dicuri melalui rekayasa sosial (phishing), perangkat laptop remote yang terinfeksi malware, atau celah pada software pihak ketiga di jaringan vendor rekanan.",
            "Begitu penyerang berhasil masuk ke satu endpoint komputer staf biasa, ketiadaan segmentasi internal memungkinkan mereka melakukan pergerakan menyamping (lateral movement)—memindai subnet, mencuri token sesi admin, dan akhirnya menguasai server Active Directory serta database inti tanpa terdeteksi."
          ],
          takeaway: "Asumsikan bahwa perimeter jaringan Anda telah ditembus. Keamanan sejati diukur dari seberapa cepat dan ketat sebuah sistem mampu mengisolasi ancaman di titik awal infeksi."
        },
        {
          title: "2. Penerapan Prinsip Zero-Trust Network Architecture (ZTNA)",
          paragraphs: [
            "Filosofi arsitektur Zero-Trust dirumuskan dalam satu kalimat tegas: Never trust, always verify. Keberadaan fisik perangkat di dalam gedung kantor tidak lagi memberi hak akses istimewa apapun.",
            "Setiap koneksi ke aplikasi, database, atau segmen komputasi harus melalui proses autentikasi mutual yang ketat: verifikasi identitas pengguna (MFA berbasis FIDO2), verifikasi kesehatan perangkat (posture check OS dan status antivirus), serta otorisasi hak akses minimum (Principle of Least Privilege).",
            "Koneksi jaringan dibentuk secara dinamis per sesi menggunakan terowongan terenkripsi mikro yang hanya membuka port spesifik untuk layanan yang dituju, meniadakan akses terbuka ke seluruh subnet seperti pada VPN konvensional."
          ],
          takeaway: "Dengan ZTNA, seluruh infrastruktur internal menjadi 'gelap' (dark network) bagi pihak yang tidak berhak—port tidak merespons ping atau port scanning tanpa tiket otorisasi kriptografis valid."
        },
        {
          title: "3. Segmentasi Mikro Berbasis Software & Isolasi Hardware",
          paragraphs: [
            "Segmentasi jaringan tradisional berbasis VLAN dan subnet IP statis terlalu kaku untuk arsitektur modern yang dinamis. Ketika beban kerja kontainer berpindah alamat IP, aturan firewall tradisional menjadi usang dan sulit dipelihara.",
            "ARKAPRANA menerapkan segmentasi mikro (microsegmentation) berbasis identitas beban kerja (workload identity) dan label kriptografis. Aturan keamanan melekat pada objek beban kerja itu sendiri, bukan pada antarmuka jaringan atau port switch fisik.",
            "Bahkan jika dua server virtual berada pada host fisik yang sama, kebijakan mikrosegmentasi dapat melarang keduanya berkomunikasi satu sama lain kecuali komunikasi tersebut telah didefinisikan secara eksplisit dalam kebijakan otorisasi sistem."
          ],
          takeaway: "Segmentasi mikro menghentikan lateral movement penyerang seketika, mengurung dampak insiden siber hanya pada satu node tanpa merembet ke sistem vital lain."
        },
        {
          title: "4. Manajemen Kunci Kriptografi Menggunakan HSM FIPS 140-3",
          paragraphs: [
            "Enkripsi data—baik saat transit di kabel optik (data-in-transit) maupun saat tersimpan di disk (data-at-rest)—hanya sekuat keamanan tempat penyimpanan kunci dekripsinya. Banyak organisasi melakukan enkripsi database tetapi menyimpan sertifikat privat dan kunci enkripsi di file teks biasa pada direktori server yang sama.",
            "Untuk memenuhi standar perbankan dan regulasi kerahasiaan negara, kunci enkripsi master harus disimpan dan diproses di dalam perangkat Hardware Security Module (HSM) bersertifikasi FIPS 140-3 Level 3.",
            "Modul HSM fisik dilengkapi sensor anti-tamper fisik: jika casing dibuka secara paksa atau terkena anomali tegangan dan suhu ekstrim, chip akan menghapus kunci secara otomatis dalam hitungan mikrodetik (zeroization), memastikan kunci privat tidak pernah dapat diekstraksi ke luar oleh pihak manapun."
          ],
          takeaway: "Penggunaan HSM fisik mengubah keamanan enkripsi dari perlindungan berbasis software yang rentan menjadi perlindungan berbasis hukum fisika dan silikon anti-tamper."
        }
      ],
      sources: [
        {
          title: "Zero Trust Architecture (Special Publication 800-207)",
          institution: "National Institute of Standards and Technology (NIST)",
          type: "Standar Internasional",
          referenceNumber: "NIST SP 800-207 Guidelines",
          url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
          year: "2020"
        },
        {
          title: "Peraturan BSSN No. 4 Tahun 2021 tentang Pedoman Manajemen Keamanan Informasi SPBE dan Standar Teknis CSIRT",
          institution: "Badan Siber dan Sandi Negara (BSSN)",
          type: "Regulasi & Undang-Undang",
          referenceNumber: "Peraturan BSSN No. 4/2021",
          url: "https://jdih.bssn.go.id",
          year: "2021"
        },
        {
          title: "Security Requirements for Cryptographic Modules (FIPS PUB 140-3)",
          institution: "National Institute of Standards and Technology (NIST)",
          type: "Standar Internasional",
          referenceNumber: "FIPS PUB 140-3 Level 3 Cryptographic Standard",
          url: "https://csrc.nist.gov/publications/detail/fips/140-3/final",
          year: "2021"
        },
        {
          title: "POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum",
          institution: "Otoritas Jasa Keuangan (OJK)",
          type: "Pedoman Otoritas Sektoral",
          referenceNumber: "POJK No. 11/POJK.03/2022 (Bab Ketahanan Siber)",
          url: "https://www.ojk.go.id",
          year: "2022"
        }
      ]
    },
    {
      id: "from-it-infrastructure-to-intelligent-infrastructure",
      slug: "from-it-infrastructure-to-intelligent-infrastructure",
      title: "Dari Infrastruktur TI Menuju Infrastruktur Cerdas Otonom",
      category: "SYSTEM EVOLUTION",
      date: "Februari 2026",
      snippet: "Pergeseran paradigma dari sekadar memelihara server pasif menuju orkestrasi sistem komputasi adaptif yang mampu belajar, memprediksi anomali, dan memulihkan diri secara otonom.",
      content: "Infrastruktur modern bukan lagi tentang tumpukan server pasif yang menunggu rusak sebelum diperbaiki. Dengan mengintegrasikan sensor telemetri cerdas dan otomasi pemeliharaan, server dapat memberikan peringatan sebelum kegagalan memori terjadi dan secara otomatis memindahkan beban kerja tanpa mengganggu pengguna akhir.",
      sections: [
        {
          title: "1. Akhir dari Era Pemeliharaan Reaktif (Break-Fix)",
          paragraphs: [
            "Selama puluhan tahun, divisi operasional IT enterprise dikelola dengan pola reaktif: sistem dibiarkan berjalan hingga terjadi alarm kegagalan, barulah tim teknisi bergerak melakukan investigasi dan penggantian suku cadang.",
            "Di era transaksi real-time 24/7 saat ini, downtime tidak terencana bukan sekadar ketidaknyamanan teknis, melainkan kerugian bisnis langsung yang dapat mencapai ratusan juta hingga miliaran rupiah per jam. Selain itu, reputasi merek dan kepatuhan terhadap Service Level Agreement (SLA) mitra bisnis dapat runtuh dalam sekejap.",
            "Infrastruktur modern kini berevolusi menjadi sistem cerdas yang mampu mengantisipasi kegagalan sebelum terjadi (predictive maintenance) melalui pemanfaatan data telemetri komprehensif dari setiap komponen fisik."
          ],
          takeaway: "Pergeseran dari reaktif ke prediktif mengubah posisi tim IT: dari 'pemadam kebakaran insiden' menjadi enabler kontinuitas bisnis strategis."
        },
        {
          title: "2. Telemetri Sensorik Mendalam: Menguping Kesehatan Hardware",
          paragraphs: [
            "Setiap komponen enterprise—mulai dari modul memori RAM ECC, solid-state drive (SSD), kipas pendingin, hingga modul transceiver serat optik (SFP+/QSFP)—terus-menerus memancarkan sinyal degradasi fisik sebelum benar-benar mati.",
            "Sebagai contoh, peningkatan laju koreksi bit error pada modul memori (Correctable ECC Errors) merupakan indikator presisi bahwa sel silikon tersebut akan mengalami Uncorrectable Error dalam rentang waktu 7 hingga 21 hari ke depan. Demikian pula, penurunan daya pancar laser optik (optical transmit power) menandakan kotoran atau penurunan performa diode laser.",
            "Dengan mengalirkan data sensorik Baseboard Management Controller (BMC/IPMI) dan streaming telemetry switch jaringan ke dalam mesin analisis anomali lokal, sistem dapat mendeteksi pola keausan hardware berminggu-minggu sebelum kegagalan katastropik terjadi."
          ],
          takeaway: "Telemetri perangkat keras tingkat rendah menyimpan sinyal peringatan dini yang memungkinkan penggantian komponen terjadwal tanpa menimbulkan pemadaman sistem."
        },
        {
          title: "3. Orkestrasi Self-Healing & Migrasi Beban Kerja Otonom",
          paragraphs: [
            "Deteksi dini hanyalah setengah dari solusi; respons otomasi adalah penyempurnanya. Pada arsitektur intelligent infrastructure, terdeteksinya anomali hardware secara otomatis memicu playbook orkestrasi tanpa perlu menunggu intervensi manual teknisi di tengah malam.",
            "Sistem kluster secara otonom menandai node yang terdegradasi ke status 'cordon' (tidak menerima tugas baru), kemudian menginisiasi proses migrasi langsung (live migration) untuk seluruh mesin virtual atau pod kontainer ke node sehat lain di dalam kluster.",
            "Seluruh proses pengalihan beban kerja ini berlangsung di bawah 30 detik tanpa pemutusan koneksi TCP aktif pengguna akhir. Setelah beban kerja berpindah aman, sistem mengirimkan tiket otomatis ke tim teknisi untuk penggantian modul fisik pada jendela pemeliharaan resmi."
          ],
          takeaway: "Self-healing architecture menekan Mean Time to Recovery (MTTR) dari hitungan jam investigasi manual menjadi hitungan detik otomatisasi orkestrasi."
        }
      ],
      sources: [
        {
          title: "Autonomous Systems for Data Center Infrastructure Management",
          institution: "IEEE Communications Society",
          type: "Riset Teknis & Whitepaper",
          referenceNumber: "IEEE Communications Surveys & Tutorials Vol. 25",
          url: "https://ieeexplore.ieee.org",
          year: "2023"
        },
        {
          title: "OpenConfig Streaming Telemetry Protocol Specifications",
          institution: "OpenConfig Working Group",
          type: "Standar Internasional",
          referenceNumber: "OpenConfig gNMI / gNOI Standard",
          url: "https://openconfig.net",
          year: "2024"
        }
      ]
    }
  ],
  en: [
    {
      id: "why-private-ai-becoming-enterprise-infrastructure-decision",
      slug: "why-private-ai-becoming-enterprise-infrastructure-decision",
      title: "Why Private AI Is Becoming an Enterprise Infrastructure Decision",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "March 2026",
      snippet: "Why relying on third-party public AI APIs triggers regulatory compliance vulnerabilities and data leaks, and why modern enterprises are migrating AI inference directly into private sovereign data centers.",
      content: "In the generative artificial intelligence era, many organizations are seduced by the sheer ease of calling public cloud APIs. But for banking, heavy manufacturing, state agencies, and enterprise conglomerates, exposing internal IP and customer records to third-party servers represents an existential threat. Building private on-premise AI is no longer a trivial software experiment—it is a fundamental infrastructure decision demanding dedicated GPU power, RAG retrieval pipelines, and uncompromising network air-gapping.",
      sections: [
        {
          title: "1. The Public API Dependency Trap & Regulatory Compliance Pitfalls",
          paragraphs: [
            "In the early wave of generative AI, adoption was often perceived as simple as querying external hyperscaler REST API endpoints. However, for Indonesian corporations, this architecture immediately collides with strict statutory mandates, notably the full enforcement of the Indonesian Personal Data Protection Law (UU PDP No. 27/2022) and banking sector directives from the Financial Services Authority (OJK SEOJK 29/2022) and Bank Indonesia.",
            "When master contracts, customer financial histories, electronic clinical medical records, or proprietary manufacturing recipes are dispatched to external AI servers, organizations legally forfeit sovereign jurisdiction and granular audit trails over that data. Even if vendors claim 'zero retention' terms, cross-border submarine cable traffic remains inherently vulnerable to interception and unilateral terms-of-service revisions.",
            "Consequently, executive boards and corporate risk committees now treat AI not as a peripheral research novelty, but as a core data asset subject to absolute digital sovereignty controls."
          ],
          takeaway: "Every data packet that exits an enterprise's internal security perimeter carries severe legal liabilities, including statutory penalties of up to 2% of annual corporate revenue under the PDP Law."
        },
        {
          title: "2. The Anatomy of an On-Premise Private AI Architecture Stack",
          paragraphs: [
            "Deploying sovereign private AI involves far more than simply standing up a lone workstation and running open-source model weights. It requires a resilient multi-layered architecture engineered for high availability, sub-millisecond inference, and rigorous governance.",
            "The physical foundation consists of high-density compute infrastructure: enterprise GPU platforms (such as NVIDIA HGX H100 or L40S clusters) backed by 2N redundant electrical topologies and close-coupled in-row precision cooling. Directly above sits an isolated OS hosting optimized inference runtimes like vLLM or TensorRT-LLM, maximizing GPU memory throughput via PagedAttention and dynamic continuous batching.",
            "At the data tier, a private Retrieval-Augmented Generation (RAG) pipeline connects to high-performance local vector databases (such as Qdrant or Milvus) residing inside the LAN. Corporate repositories are tokenized and embedded locally, delivering semantic information retrieval in milliseconds without a single byte escaping to the public internet."
          ],
          takeaway: "Private AI integrity is governed by zero-egress isolation: tokenization, embedding generation, vector indexing, and model inference occur 100% within the organization's private enclave."
        },
        {
          title: "3. Economic Evaluation: Cloud API Subscription TCO vs. Dedicated On-Premise Compute",
          paragraphs: [
            "Financial planning teams frequently assume that renting public cloud APIs is inherently more cost-effective than capital expenditure (CAPEX) for server procurement. That premise holds true only during sporadic prototype testing (under 100,000 tokens daily).",
            "However, once AI capabilities are embedded into core operational workflows—such as verifying thousands of procurement tenders daily, running automated regulatory compliance audits, or serving millions of consumer queries—token-based API billing escalates unpredictably every month, compounded by hidden cloud egress transit penalties.",
            "Over a 3-year horizon, rigorous Total Cost of Ownership (TCO) modeling proves that investing in on-premise GPU inference clusters delivers 40% to 65% operational savings compared to public cloud API leases. Hardware purchases can be depreciated as capital assets, while monthly operating overhead remains predictable and deterministic."
          ],
          takeaway: "At enterprise utilization volumes, capital return on investment (ROI) for on-premise GPU infrastructure is typically achieved within 9 to 14 months of deployment."
        },
        {
          title: "4. Architectural Transition Roadmap & Execution Guidance",
          paragraphs: [
            "To launch a disciplined transition toward AI sovereignty, enterprises should implement a phased modular strategy. Phase one focuses on corporate data cataloging and classification: separating public data from confidential IP and Personally Identifiable Information (PII).",
            "Phase two involves deploying an isolated Proof-of-Concept (PoC) pod powered by 2 to 4 enterprise GPUs targeting a high-value operational use case, such as automated contract clause extraction or telemetry anomaly summarization. Engineers monitor Time-To-First-Token (TTFT) latency and token throughput under realistic concurrent loads.",
            "Once architectural benchmarks are satisfied, phase three integrates the platform with corporate identity management (IAM/LDAP) and enforces strict Zero-Trust microsegmentation before rolling out access to the broader workforce."
          ],
          takeaway: "Enterprise AI success hinges on disciplined engineering fundamentals: ensure power, local networking, and identity security are hardened before scaling model workloads."
        }
      ],
      sources: [
        {
          title: "Law of the Republic of Indonesia No. 27 of 2022 on Personal Data Protection (UU PDP)",
          institution: "Government of the Republic of Indonesia & DPR RI",
          type: "Regulasi & Undang-Undang",
          referenceNumber: "State Gazette of RI 2022 No. 196 / TLN No. 6820",
          url: "https://peraturan.go.id/id/uu-no-27-tahun-2022",
          year: "2022"
        },
        {
          title: "OJK Circular on Information Technology Implementation by Commercial Banks",
          institution: "Financial Services Authority of Indonesia (OJK)",
          type: "Pedoman Otoritas Sektoral",
          referenceNumber: "SEOJK No. 29/SEOJK.03/2022 & POJK 11/2022",
          url: "https://ojk.go.id",
          year: "2022"
        },
        {
          title: "Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM Project)",
          institution: "UC Berkeley SkyLab & LMSYS Org",
          type: "Riset Teknis & Whitepaper",
          referenceNumber: "arXiv:2309.06180 (ACM SOSP 2023 Proceedings)",
          url: "https://arxiv.org/abs/2309.06180",
          year: "2023"
        },
        {
          title: "ISO/IEC 27701:2019 Security Techniques — Privacy Information Management System",
          institution: "International Organization for Standardization (ISO)",
          type: "Standar Internasional",
          referenceNumber: "ISO/IEC 27701:2019",
          url: "https://www.iso.org/standard/71670.html",
          year: "2019"
        }
      ]
    },
    {
      id: "building-infrastructure-ready-for-ai",
      slug: "building-infrastructure-ready-for-ai",
      title: "Building Infrastructure Ready for AI",
      category: "PHYSICAL ARCHITECTURE",
      date: "March 2026",
      snippet: "High-density electrical distribution, close-coupled in-row precision cooling, and 400G optical fabric architectures required to sustain modern AI compute clusters.",
      content: "Modern AI training and inference clusters demand power densities reaching 30 to 50 kW per server rack, dramatically exceeding traditional enterprise data center baselines (5 to 8 kW). Without close-coupled in-row cooling and lossless 400G RoCEv2 network fabrics, AI compute clusters experience thermal throttling and dropped packets that degrade model throughput.",
      sections: [
        {
          title: "1. The Extreme Power Density Challenge: From 5 kW to 50 kW per Rack",
          paragraphs: [
            "For decades, enterprise server facilities in Indonesia were engineered around an average power load of 4 to 8 kW per standard equipment rack. This physical architecture was completely sufficient for running web application servers, relational databases, and enterprise storage arrays.",
            "However, modern AI compute hardware radically transforms this physical equation. A single 8-GPU chassis draws between 6 kW and 10.2 kW of electrical power. Stacking two or three such GPU nodes within a single rack alongside high-speed leaf switches drives power density to 30 kW or upwards of 50 kW per rack.",
            "This tenfold density surge necessitates re-architecting electrical distribution: from substation transformers and 2N redundant UPS modules to 63-ampere three-phase Power Distribution Units (PDUs) with real-time outlet-level current telemetry."
          ],
          takeaway: "AI electrical infrastructure mandates a transition to high-capacity overhead busways and intelligent PDUs to prevent phase imbalances and catastrophic cascade outages."
        },
        {
          title: "2. Thermal Dynamics & Close-Coupled In-Row Precision Cooling",
          paragraphs: [
            "Thermodynamics dictates that every single kilowatt of electricity consumed by semiconductor processors is converted directly into an identical amount of heat. A 40 kW server rack produces heat equivalent to dozens of industrial stoves operating simultaneously within an enclosed room.",
            "Conventional perimeter air conditioning units (CRACs) blowing cold air beneath raised access floors fail completely when managing heat loads above 15 kW per rack. Air experiences premature thermal mixing with hot exhaust before ever reaching server intake fans, creating localized hotspots.",
            "The mandatory engineering solution is close-coupled cooling—such as chilled-water or Direct Expansion (DX) In-Row cooling units deployed directly between server racks, combined with sealed Hot or Cold Aisle Containment. This architecture channels cold air directly into server intakes and captures hot exhaust without mixing, locking chip junction temperatures safely below thermal throttling limits."
          ],
          takeaway: "Aisle containment and close-coupled in-row cooling are no longer optional accessories—they are absolute prerequisites for sustaining peak GPU clock speeds."
        },
        {
          title: "3. Lossless High-Speed Switching Fabrics & the RoCEv2 Protocol",
          paragraphs: [
            "AI workloads—especially large-scale model inference and continuous fine-tuning—demand relentless, high-bandwidth tensor weight transfers across distributed nodes. If the interconnect fabric exhibits high latency or packet jitter, high-performance GPUs stall in an idle starvation state.",
            "Standard Gigabit Ethernet (1G/10G) is entirely unequipped for this workload. Data center fabrics require a minimum of 100G to 400G per switch port, utilizing high-precision OM4 multimode or OS2 single-mode optical fiber with MPO/MTP terminations.",
            "Beyond raw physical bandwidth, data transmission protocols must implement Remote Direct Memory Access over Converged Ethernet (RoCEv2). RoCEv2 empowers GPUs to read and write directly to peer GPU memory without burdening host CPUs or operating system kernel stacks, collapsing transit latencies to sub-microsecond figures."
          ],
          takeaway: "Enforcing Priority Flow Control (PFC) and Explicit Congestion Notification (ECN) on switching hardware is essential for forging a truly lossless Ethernet fabric."
        },
        {
          title: "4. Tiered All-Flash NVMe Storage Architecture",
          paragraphs: [
            "AI data pipelines mandate a multi-tiered storage architecture. At the hot tier, arrays of All-Flash NVMe over Fabrics (NVMe-oF) deliver sequential read throughput in the tens of gigabytes per second with millions of IOPS to continuously feed GPU memory buffers.",
            "Concurrently, at the warm and cold tiers, on-premise petabyte-scale S3-compatible object storage repositories store historic training corpora, model checkpoints, and long-term telemetry archives.",
            "This hierarchical segregation ensures that premium high-speed NVMe storage investments are utilized strictly for active data processing, providing superior capacity economics without sacrificing inference agility."
          ],
          takeaway: "Pairing NVMe-oF for active inference with on-premise S3 object stores balances blazing-fast performance with rational infrastructure cost economics."
        }
      ],
      sources: [
        {
          title: "Telecommunications Infrastructure Standard for Data Centers",
          institution: "Telecommunications Industry Association (TIA)",
          type: "Standar Internasional",
          referenceNumber: "ANSI/TIA-942-B / TIA-942-C High-Density AI Addendum",
          url: "https://tiaonline.org",
          year: "2024"
        },
        {
          title: "IEEE Std 802.3ck-2022: Physical Layer Specifications for 100 Gb/s, 200 Gb/s, and 400 Gb/s Operation",
          institution: "IEEE Computer Society / Standards Association",
          type: "Standar Internasional",
          referenceNumber: "IEEE Std 802.3ck-2022",
          url: "https://standards.ieee.org",
          year: "2022"
        },
        {
          title: "Thermal Guidelines for Data Processing Environments (5th Edition)",
          institution: "ASHRAE Technical Committee TC 9.9 Mission Critical Facilities",
          type: "Riset Teknis & Whitepaper",
          referenceNumber: "ASHRAE TC 9.9 Liquid & Air Cooling Guidance",
          url: "https://www.ashrae.org",
          year: "2023"
        },
        {
          title: "Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik (PSTE)",
          institution: "Kementerian Komunikasi dan Informatika RI (Komdigi)",
          type: "Regulasi & Undang-Undang",
          referenceNumber: "PP No. 71 Tahun 2019 (Pasal 20 & 21)",
          url: "https://peraturan.go.id/id/pp-no-71-tahun-2019",
          year: "2019"
        }
      ]
    },
    {
      id: "cybersecurity-starts-with-architecture",
      slug: "cybersecurity-starts-with-architecture",
      title: "Cybersecurity Starts with Architecture, Not Merely Software",
      category: "ZERO-TRUST DEFENSE",
      date: "February 2026",
      snippet: "Why perimeter firewalls are no longer sufficient and how microsegmentation, cryptographic HSMs, and continuous identity verification protect enterprise data from lateral movement.",
      content: "A dangerous misconception across modern organizations is treating cybersecurity merely as an add-on software license. In reality, physical-layer vulnerabilities, flat unsegmented VLANs, and excessive permissions will dismantle even the most expensive firewall. A Zero-Trust architectural doctrine guarantees that every access request is continuously verified and strictly isolated.",
      sections: [
        {
          title: "1. The Collapse of the 'Castle-and-Moat' Perimeter Security Model",
          paragraphs: [
            "For decades, enterprise security relied upon the traditional 'Castle and Moat' premise: the outer boundary was fortified by a perimeter firewall, and anyone located physically inside the network (via office LAN or VPN credentials) was automatically deemed trustworthy.",
            "Modern threat intelligence confirms this paradigm is dangerously obsolete. Over 80% of major enterprise breaches occur not because hackers breached perimeter firewalls directly, but because employee credentials were compromised via phishing, remote malware-infected laptops, or vulnerable third-party vendor connections.",
            "Once an attacker gains a foothold on a standard employee workstation, the absence of internal segmentation facilitates effortless lateral movement—scanning subnets, harvesting session tokens, and ultimately seizing Active Directory controllers and primary databases undetected."
          ],
          takeaway: "Always assume your network perimeter has already been breached. True resilience is measured by how swiftly a system isolates threats at the point of origin."
        },
        {
          title: "2. Implementing Zero-Trust Network Architecture (ZTNA) Principles",
          paragraphs: [
            "Zero-Trust architecture is founded upon an unwavering rule: Never trust, always verify. Physical device presence within corporate headquarters confers zero implicit privileges.",
            "Every access request targeting an internal application, database, or compute node must undergo strict mutual authentication: user identity verification (FIDO2 passwordless MFA), device posture checks (OS patch state and EDR health), and least-privilege role authorization.",
            "Connections are established dynamically per session through micro-encrypted tunnels that expose only the exact requested service, terminating the unrestricted subnet exposure characteristic of legacy VPNs."
          ],
          takeaway: "Under ZTNA, internal assets become dark networks to unauthorized entities—ports do not respond to ping probes or port scanning without valid cryptographic tickets."
        },
        {
          title: "3. Identity-Driven Microsegmentation & Workload Isolation",
          paragraphs: [
            "Traditional network segmentation based on static VLANs and IP subnets is too brittle for dynamic enterprise environments. As container workloads shift IP addresses, static firewall rules become obsolete and difficult to maintain.",
            "ARKAPRANA enforces microsegmentation anchored directly to cryptographic workload identities and metadata tags. Security policies bind to the workload entity itself, independent of physical switch ports or hypervisor interfaces.",
            "Even if two virtual machines reside on the exact same physical host, microsegmentation policies can strictly prohibit inter-communication unless explicitly permitted by affirmative security policy."
          ],
          takeaway: "Microsegmentation halts lateral intruder traversal immediately, confining incident impact strictly to the compromised node without contaminating vital systems."
        },
        {
          title: "4. Cryptographic Master Key Management with FIPS 140-3 HSMs",
          paragraphs: [
            "Enterprise encryption—whether protecting data-in-transit across optical fiber or data-at-rest on NVMe SANs—is only as impregnable as the storage security of its decryption keys. Too many enterprises encrypt databases yet store private keys in plain-text configuration files on the very same server.",
            "To satisfy stringent banking mandates and national secrecy standards, master encryption keys must reside and execute within dedicated Hardware Security Modules (HSMs) certified to FIPS 140-3 Level 3.",
            "Physical HSM units incorporate active anti-tamper sensors: if an enclosure is breached or exposed to thermal or voltage anomalies, the module triggers zeroization within microseconds, irreversibly destroying keys to prevent extraction."
          ],
          takeaway: "Physical HSMs elevate cryptographic security from vulnerable software protections to immutable laws of physics and anti-tamper silicon."
        }
      ],
      sources: [
        {
          title: "Zero Trust Architecture (Special Publication 800-207)",
          institution: "National Institute of Standards and Technology (NIST)",
          type: "Standar Internasional",
          referenceNumber: "NIST SP 800-207 Guidelines",
          url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
          year: "2020"
        },
        {
          title: "Peraturan BSSN No. 4 Tahun 2021 tentang Pedoman Manajemen Keamanan Informasi SPBE dan Standar Teknis CSIRT",
          institution: "Badan Siber dan Sandi Negara (BSSN)",
          type: "Regulasi & Undang-Undang",
          referenceNumber: "Peraturan BSSN No. 4/2021",
          url: "https://jdih.bssn.go.id",
          year: "2021"
        },
        {
          title: "Security Requirements for Cryptographic Modules (FIPS PUB 140-3)",
          institution: "National Institute of Standards and Technology (NIST)",
          type: "Standar Internasional",
          referenceNumber: "FIPS PUB 140-3 Level 3 Cryptographic Standard",
          url: "https://csrc.nist.gov/publications/detail/fips/140-3/final",
          year: "2021"
        },
        {
          title: "POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum",
          institution: "Otoritas Jasa Keuangan (OJK)",
          type: "Pedoman Otoritas Sektoral",
          referenceNumber: "POJK No. 11/POJK.03/2022 (Bab Ketahanan Siber)",
          url: "https://www.ojk.go.id",
          year: "2022"
        }
      ]
    },
    {
      id: "from-it-infrastructure-to-intelligent-infrastructure",
      slug: "from-it-infrastructure-to-intelligent-infrastructure",
      title: "From IT Infrastructure to Autonomous Intelligent Infrastructure",
      category: "SYSTEM EVOLUTION",
      date: "February 2026",
      snippet: "The paradigm shift from maintaining passive server hardware toward orchestrating adaptive compute systems that learn, forecast anomalies, and heal autonomously.",
      content: "Modern infrastructure is no longer about maintaining passive server clusters that wait to break before being repaired. By integrating continuous telemetry sensors with automated orchestration, infrastructure anticipates component degradation and migrates workloads autonomously without disrupting end-user transactions.",
      sections: [
        {
          title: "1. The Demise of the Reactive Break-Fix Maintenance Era",
          paragraphs: [
            "For decades, enterprise IT operations operated purely on reactive models: hardware ran until critical alarms fired, prompting engineering teams to scramble for triage and physical component replacements.",
            "In today's 24/7 transaction environment, unplanned downtime is not merely a technical nuisance—it incurs direct financial losses reaching hundreds of millions of Rupiah per hour, alongside brand erosion and severe SLA penalties.",
            "Modern infrastructure has evolved into an intelligent system that predicts component failures weeks in advance through telemetry ingestion across every physical layer."
          ],
          takeaway: "Transitioning from reactive to predictive operations elevates IT teams from incident firefighters into strategic business continuity enablers."
        },
        {
          title: "2. Deep Telemetry Sensing: Auditing Hardware Vital Signs",
          paragraphs: [
            "Every enterprise component—from ECC RAM sticks and NVMe SSDs to cooling fans and optical transceivers—emits clear physical degradation signals long before catastrophic failure occurs.",
            "For example, an acceleration in Correctable ECC Memory Errors accurately signals that a silicon bank will experience an uncorrectable crash within 7 to 21 days. Similarly, optical transmit power degradation flags debris or diode wear.",
            "By funneling Baseboard Management Controller (BMC/IPMI) metrics and streaming switch telemetry into local anomaly engines, systems identify physical wear weeks prior to service disruption."
          ],
          takeaway: "Low-level hardware telemetry provides early-warning signatures, enabling scheduled, non-disruptive component replacements during planned maintenance windows."
        },
        {
          title: "3. Self-Healing Orchestration & Autonomous Live Migration",
          paragraphs: [
            "Early anomaly detection is only half the battle; automated remediation completes the loop. In an intelligent infrastructure topology, telemetry thresholds trigger automated playbooks without awaiting manual human intervention.",
            "The cluster automatically marks the degrading node as 'cordoned', preventing new allocations, and initiates live migration of all virtual machines and container pods to healthy nodes across the fabric.",
            "This entire failover cycle executes in under 30 seconds with zero TCP session disconnections for end users. Once evacuated, the system dispatches automated tickets to engineers for physical swap-out."
          ],
          takeaway: "Self-healing architectures compress Mean Time to Recovery (MTTR) from hours of manual investigation down to seconds of automated orchestration."
        }
      ],
      sources: [
        {
          title: "Autonomous Systems for Data Center Infrastructure Management",
          institution: "IEEE Communications Society",
          type: "Riset Teknis & Whitepaper",
          referenceNumber: "IEEE Communications Surveys & Tutorials Vol. 25",
          url: "https://ieeexplore.ieee.org",
          year: "2023"
        },
        {
          title: "OpenConfig Streaming Telemetry Protocol Specifications",
          institution: "OpenConfig Working Group",
          type: "Standar Internasional",
          referenceNumber: "OpenConfig gNMI / gNOI Standard",
          url: "https://openconfig.net",
          year: "2024"
        }
      ]
    }
  ]
};

export function getLocalizedInsights(lang: Language): InsightItem[] {
  return LOCALIZED_INSIGHTS[lang] || LOCALIZED_INSIGHTS.id;
}

export function getLocalizedInsightBySlug(slug: string, lang: Language): InsightItem | undefined {
  const list = getLocalizedInsights(lang);
  return list.find((ins) => ins.slug === slug || ins.id === slug);
}

// ============================================================================
// 6. LOCALIZED ABOUT & PROFILE DATA
// ============================================================================
export interface AboutBelief {
  title: string;
  desc: string;
}

export interface AboutData {
  vision: string;
  missions: string[];
  beliefs: AboutBelief[];
  pillars: { name: string; desc: string }[];
  methodology: { step: string; name: string; desc: string }[];
  leadership: { name: string; role: string; focus: string; credentials: string }[];
}

export const LOCALIZED_ABOUT: Record<Language, AboutData> = {
  id: {
    vision: "Menjadi mitra rekayasa arsitektur teknologi paling tepercaya di Indonesia yang menghadirkan fondasi infrastruktur berdaya tahan tinggi dan solusi kecerdasan otonom berdaulat bagi enterprise nasional.",
    missions: [
      "Merancang dan membangun infrastruktur komputasi fisik Tier-3+ yang mandiri dan berstandar internasional.",
      "Menghubungkan seluruh jaringan korporat terdistribusi melalui arsitektur transmisi serat optik dan SD-WAN berlatensi ultra-rendah.",
      "Melindungi aset data strategis nasional dengan pertahanan siber Zero-Trust dan brankas kriptografi hardware HSM.",
      "Mengembangkan sistem kecerdasan buatan privat on-premise yang aman, bebas halusinasi, dan patuh pada UU PDP."
    ],
    beliefs: [
      {
        title: "Disiplin Rekayasa Mendalam (Engineering First)",
        desc: "Kami percaya bahwa arsitektur teknologi harus dirancang dengan disiplin rekayasa mendalam, bukan sekadar memindahkan kotak perangkat keras atau penjualan lisensi komersial."
      },
      {
        title: "Tanpa Kompromi pada Kedaulatan Data",
        desc: "Data korporat dan kedaulatan informasi organisasi adalah aset paling berharga. Sistem kami dirancang mematuhi regulasi lokal (UU PDP) dengan isolasi penuh di wilayah Indonesia."
      },
      {
        title: "Ekosistem Terpadu Mengatasi Fragmentasi",
        desc: "Teknologi menjadi rumit saat terpisah. Kami menghubungkan setiap simpul dari kabel serat optik bawah tanah hingga model bahasa kecerdasan buatan dalam satu orkestrasi."
      },
      {
        title: "Kemitraan Jangka Panjang Berbasis SLA Nyata",
        desc: "Kami tidak sekadar menyerahkan proyek lalu pergi. Kami mendampingi operasional 24/7 dengan komitmen SLA ketersediaan 99.99% dan pertanggungjawaban satu atap."
      },
      {
        title: "Standar Industri Global, Keahlian Lokal",
        desc: "Seluruh arsitek dan insinyur kami menguasai standar global (TIA-942, ISO 27001, TOGAF) dengan pemahaman mendalam atas kondisi geografis dan regulasi Indonesia."
      },
      {
        title: "Kecerdasan Buatan yang Bertanggung Jawab & Terverifikasi",
        desc: "AI enterprise harus dapat diverifikasi ke sumber aslinya. Kami menolak halusinasi dengan memastikan setiap inferensi AI didukung sitasi dokumen resmi korporat."
      }
    ],
    pillars: [
      { name: "REKAYASA JARINGAN", desc: "Konektivitas enterprise, backbone serat optik berkecepatan tinggi, Wi-Fi 7 tanpa dead-zone, dan SD-WAN multi-site." },
      { name: "KOMPUTASI & DATA CENTER", desc: "Fasilitas modular data center Tier-3+, kluster server densitas tinggi, pendinginan presisi in-row, dan daya redundan 2N+1." },
      { name: "CLOUD PRIVAT BERDAULAT", desc: "Platform cloud on-premise berbasis Kubernetes dan Ceph storage mandiri dengan kedaulatan data 100% lokal tanpa biaya egress." },
      { name: "KEAMANAN SIBER ZERO-TRUST", desc: "Pertahanan siber berlapis: mikrosegmentasi jaringan, firewall generasi baru, dan brankas kriptografi hardware HSM FIPS 140-3." },
      { name: "OPERASIONAL TI TERKELOLA", desc: "Pemantauan telemetri proaktif 24/7/365 oleh Network & Security Operations Center (NOC/SOC) dengan jaminan SLA ketersediaan 99.99%." },
      { name: "AI & OTOMASI ENTERPRISE", desc: "Model bahasa privat on-premise, arsitektur RAG berbasis sitasi dokumen internal korporat, dan agen alur kerja kognitif otonom." },
      { name: "INTEGRASI SISTEM TURNKEY", desc: "Pengadaan hardware resmi bergaransi distributor, harmonisasi multi-vendor, dan pertanggungjawaban teknis satu atap." }
    ],
    methodology: [
      { step: "01", name: "Audit & Analisis Kebutuhan", desc: "Kajian komprehensif atas infrastruktur eksisting, titik friksi operasional, dan kepatuhan regulasi." },
      { step: "02", name: "Cetak Biru Arsitektur", desc: "Perancangan topologi teknis terperinci, pemilihan komponen vendor-agnostik, dan simulasi kapasitas." },
      { step: "03", name: "Pengadaan Hardware Resmi", desc: "Penyediaan perangkat keras bergaransi resmi dari distributor tunggal terdaftar di Indonesia." },
      { step: "04", name: "Instalasi Fisik & Cabling", desc: "Penarikan kabel serat optik berstandar TIA-942, instalasi rack, pemipaan pendingin, dan integrasi kelistrikan." },
      { step: "05", name: "Konfigurasi & Pengerasan Sistem", desc: "Penyetelan sistem operasi, mikrosegmentasi firewall, inisialisasi modul HSM, dan clustering server." },
      { step: "06", name: "Uji Beban & UAT Resmi", desc: "Simulasi pemadaman daya total (IST), pengujian throughput, dan validasi fungsional bersama tim klien." },
      { step: "07", name: "Dokumentasi & Transfer Pengetahuan", desc: "Penyerahan gambar teknik as-built CAD, buku panduan operasional (runbook), dan pelatihan teknis staf." },
      { step: "08", name: "Operasional 24/7 & Telemetri Berkelanjutan", desc: "Koneksi ke sistem monitoring sentral NOC/SOC dengan evaluasi berkala dan optimasi performa." }
    ],
    leadership: [
      { name: "Principal Systems Architect", role: "Dewan Arsitektur & Infrastruktur", focus: "Perancangan fasilitas data center Tier-3+, topologi redundansi 2N, dan sistem daya presisi.", credentials: "TIA-942 Design Consultant, Uptime Institute ATD" },
      { name: "Lead Network & Optical Engineer", role: "Dewan Konektivitas & Jaringan", focus: "Arsitektur jaringan spine-leaf 100G/400G, DWDM metro optical mesh, dan SD-WAN carrier-grade.", credentials: "CCIE Enterprise, Optical Transport Specialist" },
      { name: "Chief Cybersecurity & Compliance Officer", role: "Dewan Pertahanan Siber & Regulasi", focus: "Arsitektur Zero-Trust, tata kelola kunci kriptografi HSM FIPS 140-3, dan kepatuhan UU PDP & POJK.", credentials: "CISSP, CISA, FIPS Security Assessor" },
      { name: "Director of AI Systems & Sovereign Cloud", role: "Dewan Kecerdasan Buatan & Cloud", focus: "Deployment private LLM air-gapped, optimasi vLLM GPU inference, dan kluster storage Ceph.", credentials: "Kubernetes CKA/CKS, Distributed AI Specialist" }
    ]
  },
  en: {
    vision: "To be Indonesia's premier technology architecture and system integration partner, delivering resilient infrastructure foundations and sovereign autonomous intelligence for leading national enterprises.",
    missions: [
      "Architect and commission Tier-3+ sovereign compute and modular data center facilities built to international standards.",
      "Interconnect distributed enterprise sites via optical fiber backbones and ultra-low-latency SD-WAN mesh topologies.",
      "Safeguard critical corporate data assets with multi-layered Zero-Trust cyber defense and hardware HSM cryptoprocessors.",
      "Develop private on-premise artificial intelligence systems that are grounded, citation-backed, and 100% compliant with data sovereignty laws."
    ],
    beliefs: [
      {
        title: "Engineering First Discipline",
        desc: "We believe technology architecture must be crafted with rigorous engineering discipline, not mere hardware reselling or commercial license packaging."
      },
      {
        title: "Zero Compromise on Data Sovereignty",
        desc: "Corporate data and informational sovereignty are inviolable assets. Our systems strictly comply with Indonesian regulatory mandates (UU PDP) via complete in-country isolation."
      },
      {
        title: "Integrated Ecosystem Over Fragmentation",
        desc: "Technology breaks down when siloed. We interconnect every node—from subterranean fiber-optic conduits to private generative AI models—under unified orchestration."
      },
      {
        title: "Long-Term Partnerships Grounded in Real SLAs",
        desc: "We do not simply deliver hardware and leave. We manage 24/7 operations backed by a guaranteed 99.99% availability SLA and single-point engineering accountability."
      },
      {
        title: "Global Engineering Standards, Local Mastery",
        desc: "Every system architect on our team commands global engineering standards (TIA-942, ISO 27001, TOGAF) combined with deep familiarity with Indonesian geographical realities."
      },
      {
        title: "Responsible & Verifiable Artificial Intelligence",
        desc: "Enterprise AI must be grounded in factual truth. We eradicate hallucination by ensuring every model inference is verifiable through source document citations."
      }
    ],
    pillars: [
      { name: "NETWORK ENGINEERING", desc: "Enterprise connectivity, high-throughput optical fiber backbones, dead-zone-free Wi-Fi 7, and multi-site SD-WAN fabrics." },
      { name: "COMPUTE & DATA CENTER", desc: "Tier-3+ modular data centers, high-density server clusters, in-row precision climate control, and 2N+1 redundant power." },
      { name: "SOVEREIGN PRIVATE CLOUD", desc: "On-premise enterprise Kubernetes and Ceph distributed storage delivering 100% domestic data residency with zero egress fees." },
      { name: "ZERO-TRUST CYBERSECURITY", desc: "Defense-in-depth security: identity-based microsegmentation, next-gen firewalls, and FIPS 140-3 hardware security modules (HSM)." },
      { name: "MANAGED IT OPERATIONS", desc: "Proactive 24/7/365 infrastructure telemetry monitoring by certified NOC/SOC engineers backed by guaranteed 99.99% SLAs." },
      { name: "PRIVATE AI & AUTOMATION", desc: "On-premise sovereign LLMs, citation-grounded enterprise RAG on corporate archives, and autonomous cognitive workflow agents." },
      { name: "TURNKEY SYSTEM INTEGRATION", desc: "Authorized manufacturer hardware procurement, multi-vendor protocol harmonization, and single-point technical delivery." }
    ],
    methodology: [
      { step: "01", name: "Audit & Requirements Discovery", desc: "Comprehensive evaluation of existing infrastructure, operational bottlenecks, and regulatory compliance mandates." },
      { step: "02", name: "Architectural Blueprint Design", desc: "Formulating detailed technical topologies, vendor-neutral sizing calculations, and capacity growth models." },
      { step: "03", name: "Authorized Hardware Procurement", desc: "Sourcing equipment strictly through authorized domestic distributors with registered serials and manufacturer warranties." },
      { step: "04", name: "Physical Installation & Cabling", desc: "Structured cabling adhering to TIA-942, high-density rack fit-out, cooling piping, and redundant power distribution." },
      { step: "05", name: "System Hardening & Configuration", desc: "Hardening operating systems, configuring microsegmentation rules, initializing HSM vaults, and cluster bootstrapping." },
      { step: "06", name: "Integrated Load Testing & UAT", desc: "Simulating total power loss failovers (IST), throughput stress testing, and joint client acceptance verification." },
      { step: "07", name: "As-Built Documentation & Handover", desc: "Delivering certified CAD as-built drawings, operational runbooks, and comprehensive administrative engineering training." },
      { step: "08", name: "24/7 Live Telemetry & Continuous Review", desc: "Seamless onboarding into centralized NOC/SOC telemetry with quarterly capacity audits and performance reviews." }
    ],
    leadership: [
      { name: "Principal Systems Architect", role: "Architecture & Infrastructure Council", focus: "Engineering Tier-3+ modular facilities, 2N electrical distribution, and precision cooling.", credentials: "TIA-942 Design Consultant, Uptime Institute ATD" },
      { name: "Lead Network & Optical Engineer", role: "Connectivity & Transport Council", focus: "100G/400G spine-leaf switching, metro DWDM optical networks, and carrier-grade SD-WAN.", credentials: "CCIE Enterprise, Optical Transport Specialist" },
      { name: "Chief Cybersecurity & Compliance Officer", role: "Defense & Governance Council", focus: "Zero-Trust architecture, FIPS 140-3 HSM key governance, and Indonesian PDP Law compliance.", credentials: "CISSP, CISA, FIPS Security Assessor" },
      { name: "Director of AI Systems & Sovereign Cloud", role: "AI & Sovereign Cloud Council", focus: "Air-gapped private LLM deployments, vLLM GPU inference pipelines, and distributed Ceph clusters.", credentials: "Kubernetes CKA/CKS, Distributed AI Specialist" }
    ]
  }
};

export function getLocalizedAboutData(lang: Language): AboutData {
  return LOCALIZED_ABOUT[lang] || LOCALIZED_ABOUT.id;
}

// ============================================================================
// 7. HOMEPAGE INTERACTIVE SECTION DATA HELPERS
// ============================================================================
export const LOCALIZED_SHOWCASE_FEATURES: Record<Language, {
  tab1: { title: string; subtitle: string; consolePrompt: string; consoleResponse: string; telemetryTitle: string };
  tab2: { title: string; subtitle: string; consolePrompt: string; consoleResponse: string; telemetryTitle: string };
  tab3: { title: string; subtitle: string; consolePrompt: string; consoleResponse: string; telemetryTitle: string };
}> = {
  id: {
    tab1: {
      title: "Orkestrasi Komputasi & Jaringan Terpadu",
      subtitle: "Menghubungkan core router, switch spine-leaf, dan modular data center ke dalam satu platform kontrol otonom.",
      consolePrompt: "arkaprana orchestrate --mesh-all --verify-sla",
      consoleResponse: "Status: 100% Terhubung. Topologi redundan aktif. Seluruh simpul sinkron dalam 1.2ms.",
      telemetryTitle: "Metrik Telemetri Inti Arsitektur"
    },
    tab2: {
      title: "Telemetri Infrastruktur Real-Time",
      subtitle: "Streaming telemetri sensorik tingkat rendah yang mengawasi arus listrik, suhu rack, dan integritas laser serat optik.",
      consolePrompt: "arkaprana telemetry stream --granularity=sub-second",
      consoleResponse: "BGP Spine-Leaf: 12.8 Tbps. PUE: 1.23. Optical Attenuation: -0.12dB. Status Normal.",
      telemetryTitle: "Kesehatan Fisik & Jaringan Langsung"
    },
    tab3: {
      title: "Agen AI Berdaulat & Mitigasi Otomatis",
      subtitle: "Mengonversi peringatan telemetri menjadi aksi mitigasi instan tanpa intervensi manual atau kebocoran data.",
      consolePrompt: "arkaprana agent execute --scenario=link-failover-autonomic",
      consoleResponse: "Anomali terdeteksi di Uplink-02. Rute dialihkan ke DWDM Ring-B dalam 280ms. MTTR: 0 detik.",
      telemetryTitle: "Eksekusi Otonom Berdaulat"
    }
  },
  en: {
    tab1: {
      title: "Unified Compute & Network Orchestration",
      subtitle: "Connecting core routers, spine-leaf switches, and modular data centers into a single sovereign command console.",
      consolePrompt: "arkaprana orchestrate --mesh-all --verify-sla",
      consoleResponse: "Status: 100% Synchronized. Redundant topology active. All nodes aligned within 1.2ms.",
      telemetryTitle: "Core Architectural Telemetry"
    },
    tab2: {
      title: "Real-Time Infrastructure Telemetry",
      subtitle: "Low-level streaming telemetry monitoring electrical loads, rack temperatures, and optical fiber laser integrity.",
      consolePrompt: "arkaprana telemetry stream --granularity=sub-second",
      consoleResponse: "BGP Spine-Leaf: 12.8 Tbps. PUE: 1.23. Optical Attenuation: -0.12dB. All metrics normal.",
      telemetryTitle: "Live Physical & Network Health"
    },
    tab3: {
      title: "Sovereign AI Agents & Autonomous Mitigation",
      subtitle: "Transforming raw telemetry alerts into instant mitigation actions with zero human intervention and zero data leakage.",
      consolePrompt: "arkaprana agent execute --scenario=link-failover-autonomic",
      consoleResponse: "Anomaly detected on Uplink-02. Traffic rerouted to DWDM Ring-B in 280ms. MTTR: 0 seconds.",
      telemetryTitle: "Autonomous Sovereign Execution"
    }
  }
};

export const LOCALIZED_USECASES: Record<Language, {
  badge: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
  pipeline: { step: string; title: string; desc: string }[];
}[]> = {
  id: [
    {
      badge: "01 · LOGISTIK & RITEL DISTRIBUSI",
      title: "High-Density Distributed Retail Network",
      description: "Menghubungkan 140 gerai ritel modern ke sistem ERP pusat melalui arsitektur SD-WAN terenkripsi dengan mitigasi proaktif sebelum toko beroperasi di pagi hari.",
      metric: "99.98%",
      metricLabel: "Uptime Transaksi POS",
      image: "/images/usecase-datacenter.jpg",
      pipeline: [
        { step: "Langkah 1", title: "Deteksi Sinyal Edge", desc: "Sensor memantau fluktuasi latensi koneksi internet lokal di seluruh 140 gerai." },
        { step: "Langkah 2", title: "Pengalihan Rute Otomatis", desc: "Trafik otomatis dialihkan ke link backup LTE/satelit jika fiber optik mengalami degradasi." },
        { step: "Langkah 3", title: "Mitigasi Tanpa Gangguan", desc: "Transaksi kasir tetap berjalan lancar tanpa ada pelanggan yang terhambat di kasir." }
      ]
    },
    {
      badge: "02 · INFRASTRUKTUR MARITIM & TRANSMISI",
      title: "Subsea Fiber & Border Gateway Mesh",
      description: "Pembangunan tulang punggung serat optik bawah laut dan gateway stasiun kabel laut untuk interkoneksi antar-pulau dengan transmisi multi-terabit.",
      metric: "< 25ms",
      metricLabel: "Latensi Antar-Pulau",
      image: "/images/usecase-telecom.jpg",
      pipeline: [
        { step: "Langkah 1", title: "Transmisi DWDM Optik", desc: "Pengiriman data berkapasitas 100Gbps per wavelength dengan proteksi amplifikasi optik." },
        { step: "Langkah 2", title: "Redundansi Kabel Bawah Laut", desc: "Jalur kabel laut ganda yang memitigasi risiko putus akibat jangkar kapal atau gempa dasar laut." },
        { step: "Langkah 3", title: "Sinkronisasi Data Real-Time", desc: "Arus data korporat mengalir mulus antar-pulau tanpa jeda throughput." }
      ]
    },
    {
      badge: "03 · PERBANKAN & KRIPTOGRAFI TINGKAT TINGGI",
      title: "Mission-Critical Core Banking HSM Vault",
      description: "Pengamanan transaksi perbankan dengan modul kriptografi hardware HSM terisolasi (FIPS 140-3) dan jaringan zero-trust yang kebal terhadap manipulasi.",
      metric: "100%",
      metricLabel: "Kepatuhan POJK & Anti-Tamper",
      image: "/images/usecase-datacenter.jpg",
      pipeline: [
        { step: "Langkah 1", title: "Enkripsi di Tingkat Silikon", desc: "Pembangkitan dan penyimpanan kunci enkripsi master di dalam brankas chip fisik anti-tamper." },
        { step: "Langkah 2", title: "Mikrosegmentasi Transaksi", desc: "Isolasi ketat jalur komunikasi mobile banking dari jaringan publik dengan mutual-TLS." },
        { step: "Langkah 3", title: "Jejak Audit Tak Terhapus", desc: "Pencatatan setiap akses transaksi ke log kriptografis yang tidak dapat diubah." }
      ]
    }
  ],
  en: [
    {
      badge: "01 · LOGISTICS & DISTRIBUTED RETAIL",
      title: "High-Density Distributed Retail Network",
      description: "Connecting 140 modern retail branches to corporate ERP cores via an encrypted SD-WAN fabric with proactive overnight telemetry mitigations.",
      metric: "99.98%",
      metricLabel: "POS Transaction Uptime",
      image: "/images/usecase-datacenter.jpg",
      pipeline: [
        { step: "Step 1", title: "Edge Signal Telemetry", desc: "Continuous sensor monitoring of local ISP latency fluctuations across all 140 stores." },
        { step: "Step 2", title: "Automated Path Steering", desc: "Dynamic failover reroutes traffic over backup LTE/satellite links upon fiber degradation." },
        { step: "Step 3", title: "Zero Checkout Friction", desc: "Point-of-sale transactions proceed smoothly without a single register interruption." }
      ]
    },
    {
      badge: "02 · MARITIME INFRASTRUCTURE & TRANSIT",
      title: "Subsea Fiber & Border Gateway Mesh",
      description: "Deploying multi-terabit armored subsea fiber backbones and cable landing station gateways for inter-island sovereign connectivity.",
      metric: "< 25ms",
      metricLabel: "Inter-Island Latency",
      image: "/images/usecase-telecom.jpg",
      pipeline: [
        { step: "Step 1", title: "DWDM Optical Transmission", desc: "100Gbps per wavelength transmission supported by redundant optical amplification." },
        { step: "Step 2", title: "Subsea Cable Redundancy", desc: "Dual subsea routings mitigating risks of seismic disruptions or vessel anchor cuts." },
        { step: "Step 3", title: "Real-Time Inter-Island Sync", desc: "Seamless corporate data flows across nationwide distributed industrial operations." }
      ]
    },
    {
      badge: "03 · HIGH-ASSURANCE BANKING & CRYPTOGRAPHY",
      title: "Mission-Critical Core Banking HSM Vault",
      description: "Safeguarding core banking transactions with air-gapped FIPS 140-3 Hardware Security Modules and tamper-proof Zero-Trust networking.",
      metric: "100%",
      metricLabel: "POJK Compliance & Tamper Proofing",
      image: "/images/usecase-datacenter.jpg",
      pipeline: [
        { step: "Step 1", title: "Silicon-Level Encryption", desc: "Master cryptographic keys generated and stored inside certified anti-tamper silicon." },
        { step: "Step 2", title: "Transaction Microsegmentation", desc: "Strict mutual-TLS tunnels isolating core banking database pipelines from public subnets." },
        { step: "Step 3", title: "Immutable Audit Trails", desc: "Permanent cryptographic logging ensuring zero tampering or retroactive manipulation." }
      ]
    }
  ]
};

export const LOCALIZED_AUDIT_PILLARS: Record<Language, {
  tag: string;
  question: string;
  answer: string;
}[]> = {
  id: [
    {
      tag: "PERTAHANAN ZERO-TRUST",
      question: "Apakah arsitektur Arkaprana memenuhi mandat UU PDP dan POJK 11/2022?",
      answer: "Ya. Setiap lapisan arsitektur kami—dari brankas hardware HSM FIPS 140-3, mikrosegmentasi jaringan, hingga audit trail terenkripsi—dirancang eksplisit untuk memenuhi regulasi kerahasiaan data nasional tanpa celah kompromi."
    },
    {
      tag: "KEDAULATAN DATA LOKAL",
      question: "Bagaimana kedaulatan data dijamin pada penerapan AI privat?",
      answer: "Sistem AI kami beroperasi 100% on-premise (air-gapped) di fasilitas server klien. Dokumen dan prompt tidak pernah dikirim ke internet, dan seluruh inferensi didukung sitasi paragraf dokumen resmi perusahaan."
    },
    {
      tag: "STANDAR TIER-3+ FISIK",
      question: "Apakah desain data center memenuhi standar Tier-3 Concurrently Maintainable?",
      answer: "Ya, seluruh cetak biru kelistrikan 2N+1, pendinginan presisi in-row tertutup, dan pemadam api bersih Novec 1230 dirancang sesuai spesifikasi Uptime Institute dan TIA-942 Rated 3 tanpa waktu henti saat pemeliharaan."
    },
    {
      tag: "JAMINAN SLA 99.99%",
      question: "Bagaimana bentuk jaminan SLA dan penanganan insiden darurat 24/7?",
      answer: "Dukungan operasional non-stop 24/7/365 oleh insinyur bersertifikasi NOC/SOC dengan eskalasi insiden di bawah 15 menit dan jaminan SLA ketersediaan 99.99% yang diikat dalam kontrak resmi."
    }
  ],
  en: [
    {
      tag: "ZERO-TRUST DEFENSE",
      question: "Does Arkaprana's architecture comply with Indonesian PDP Law and OJK 11/2022 mandates?",
      answer: "Yes. Every layer of our architecture—from FIPS 140-3 Hardware Security Modules and network microsegmentation to encrypted immutable audit trails—is strictly engineered to fulfill statutory regulatory mandates without compromise."
    },
    {
      tag: "DOMESTIC DATA SOVEREIGNTY",
      question: "How is data sovereignty guaranteed in private enterprise AI deployments?",
      answer: "Our AI systems operate 100% on-premise in an air-gapped configuration within client-owned hardware. Proprietary documents and prompts never traverse the public internet, and every inference is backed by verifiable document citations."
    },
    {
      tag: "PHYSICAL TIER-3+ STANDARDS",
      question: "Does the modular data center engineering fulfill Tier-3 Concurrently Maintainable criteria?",
      answer: "Yes, all 2N+1 electrical paths, close-coupled in-row precision cooling, and clean-agent Novec 1230 fire suppression adhere strictly to Uptime Institute Tier III and TIA-942 Rated 3 specifications with zero maintenance downtime."
    },
    {
      tag: "GUARANTEED 99.99% SLA",
      question: "What SLA guarantees and 24/7 emergency incident escalation protocols are provided?",
      answer: "Round-the-clock 24/7/365 operational management by certified NOC/SOC engineers with guaranteed sub-15 minute incident escalation and contractually backed 99.99% availability SLAs."
    }
  ]
};

export const LOCALIZED_FAQS: Record<Language, {
  question: string;
  answer: string;
}[]> = {
  id: [
    {
      question: "Apa keunggulan utama arsitektur terpadu ARKAPRANA dibanding vendor konvensional?",
      answer: "Vendor konvensional biasanya hanya menjual perangkat keras atau lisensi terpisah, meninggalkan Anda dengan masalah fragmentasi multi-vendor. ARKAPRANA bertindak sebagai mitra rekayasa arsitektur satu atap: kami merancang, menggelar, mengamankan, dan mengelola seluruh lapisan—dari kabel fisik serat optik, pendingin Tier-3, cloud privat, hingga kecerdasan buatan otonom dengan satu titik pertanggungjawaban resmi."
    },
    {
      question: "Bagaimana ARKAPRANA memastikan kepatuhan terhadap UU Perlindungan Data Pribadi (UU PDP)?",
      answer: "Seluruh arsitektur kami dirancang dengan prinsip kedaulatan data 100% lokal. Kami menggelar private cloud dan sistem AI di fasilitas server milik organisasi Anda sendiri di dalam wilayah Indonesia (tanpa transfer data lintas batas), dilengkapi enkripsi hardware HSM, kontrol akses ketat, dan pencatatan log audit tak terhapus."
    },
    {
      question: "Apakah sistem kami yang sudah ada dari multi-vendor dapat diintegrasikan?",
      answer: "Tentu saja. Rekayasa kami bersifat vendor-agnostic. Kami mampu menyelaraskan perangkat jaringan Cisco, Arista, Aruba, server Dell/HPE, storage Ceph/Pure, dan firewall Fortinet ke dalam satu kain orkestrasi dan telemetri sentral yang harmonis."
    },
    {
      question: "Bagaimana cara kerja jaminan SLA ketersediaan 99.99% pada layanan terkelola?",
      answer: "Tim Network & Security Operations Center (NOC/SOC) kami memantau telemetri infrastruktur Anda selama 24 jam sehari, 7 hari seminggu, 365 hari setahun. Peringatan dini dianalisis otomatis dan ditangani oleh insinyur tingkat L2/L3 dalam kurun waktu kurang dari 15 menit, mencegah potensi masalah sebelum berkembang menjadi pemadaman sistem."
    },
    {
      question: "Apakah ARKAPRANA menyediakan perangkat keras resmi dengan garansi prinsipal?",
      answer: "Ya. Kami hanya bermitra dengan distributor tunggal resmi di Indonesia. Seluruh perangkat keras yang kami sediakan memiliki nomor seri terdaftar, sertifikasi uji keaslian, dan garansi resmi suku cadang langsung dari prinsipal global."
    },
    {
      question: "Bagaimana langkah awal untuk memulai inisiasi proyek bersama ARKAPRANA?",
      answer: "Anda dapat menghubungi tim Principal Engineer kami melalui formulir kontak atau WhatsApp resmi. Kami akan menjadwalkan sesi konsultasi teknis awal (NDA terjamin) untuk menelaah arsitektur eksisting dan menyusun rekomendasi blueprint serta estimasi kapasitas secara objektif."
    }
  ],
  en: [
    {
      question: "What is ARKAPRANA's core differentiator over conventional technology vendors?",
      answer: "Conventional vendors merely resell hardware boxes or software licenses, leaving enterprises with fragmented multi-vendor silos. ARKAPRANA serves as your principal engineering partner: we design, commission, secure, and manage the entire stack—from subterranean optical fiber and Tier-3 precision cooling to sovereign private clouds and autonomous AI—under single-point accountability."
    },
    {
      question: "How does ARKAPRANA ensure compliance with the Indonesian Personal Data Protection (PDP) Law?",
      answer: "Every architecture is engineered under domestic data sovereignty principles. We deploy private clouds and AI systems strictly on client-owned servers in Indonesia with zero cross-border egress, reinforced by hardware HSM key vaults, granular microsegmentation, and tamper-proof audit trails."
    },
    {
      question: "Can our existing heterogeneous multi-vendor hardware be integrated?",
      answer: "Absolutely. Our architecture discipline is strictly vendor-neutral. We harmonize existing switching equipment from Cisco, Arista, and Aruba, server infrastructure from Dell/HPE, and firewall perimeters into a unified telemetry and management fabric."
    },
    {
      question: "How does the contractually backed 99.99% availability SLA operate in practice?",
      answer: "Our certified NOC/SOC engineering team monitors live infrastructure telemetry 24/7/365. Anomalous thresholds trigger immediate intervention by L2/L3 engineers within 15 minutes, neutralizing performance degradation before it impacts production uptime."
    },
    {
      question: "Does supplied equipment carry genuine authorized manufacturer warranties?",
      answer: "Yes. We source strictly through authorized national distributor channels in Indonesia. Every component includes registered serial numbers, manufacturer authenticity certificates, and direct hardware replacement SLA warranties."
    },
    {
      question: "What is the recommended initial engagement step with ARKAPRANA?",
      answer: "You can reach our Principal Engineering Council directly via our contact form or dedicated WhatsApp desk. We schedule an initial technical consultation under strict NDA to review your existing topology and formulate a customized architectural roadmap."
    }
  ]
};
