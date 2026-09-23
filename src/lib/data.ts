export interface SolutionItem {
  id: string;
  slug: string;
  shortSlug: string;
  badge: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  headlineQuote: string;
  iconName: string;
  capabilities: string[];
  problem: string;
  solutionStatement: string;
  architectureFocus: string;
  architectureDetails: {
    topology: string;
    protocols: string[];
    securityTier: string;
    redundancy: string;
  };
  useCases: {
    title: string;
    scenario: string;
    impact: string;
  }[];
  implementationSteps: {
    phase: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  deliverables: string[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "network",
    slug: "arkaprana-network",
    shortSlug: "network",
    badge: "01 CONNECT",
    name: "ARKAPRANA NETWORK",
    category: "Network & Connectivity",
    headlineQuote: "Connect everything.",
    tagline: "Enterprise connectivity designed for reliability, visibility and scale.",
    description: "Fondasi jaringan korporat generasi baru yang dirancang untuk transmisi data berkecepatan tinggi, stabilitas uptime maksimal, dan latensi ultra-rendah across enterprise sites.",
    iconName: "Network",
    capabilities: [
      "Enterprise Network Architecture",
      "Fiber Infrastructure & Backbone",
      "High-Density Enterprise Wi-Fi 7",
      "24/7 Network Monitoring & Telemetry",
      "Industrial Structured Cabling"
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
      { phase: "Phase 01", title: "Comprehensive Site Survey & Heatmap", description: "Audit spektrum frekuensi radio, jalur kabel eksisting, dan pemodelan redaman serat optik." },
      { phase: "Phase 02", title: "Architectural Blueprint & Sizing", description: "Perancangan topologi redundan, penetapan skema addressing IP, dan pemilihan vendor hardware." },
      { phase: "Phase 03", title: "Physical Deployment & Commissioning", description: "Penarikan kabel serat optik, instalasi rack, patching rapi berstandar TIA-942, dan uji OTDR." },
      { phase: "Phase 04", title: "Telemetry Integration & Handover", description: "Koneksi ke sistem monitoring sentral, stress-test throughput, dan pelatihan tim teknis internal." }
    ],
    faq: [
      {
        question: "Apakah ARKAPRANA dapat mengintegrasikan jaringan multi-vendor yang sudah ada?",
        answer: "Ya. Prinsip arsitektur kami vendor-agnostic. Kami mampu menyelaraskan perangkat Cisco, Aruba, Mikrotik, Juniper, maupun Huawei ke dalam satu kerangka manajemen dan telemetri yang terpadu."
      },
      {
        question: "Berapa lama jaminan garansi dan sertifikasi structured cabling yang diberikan?",
        answer: "Kami menyediakan uji sertifikasi Fluke Networks berstandar internasional dengan garansi performa jalur transmisi kabel hingga 15–25 tahun sesuai standar manufaktur kabel industri."
      },
      {
        question: "Bagaimana cara penanganan insiden darurat jika terjadi putus kabel optik?",
        answer: "Tim engineer kami memiliki protokol tanggap darurat dengan optical fusion splicer dan OTDR darurat untuk pelacakan titik putus kabel dan perbaikan dalam hitungan jam."
      }
    ],
    deliverables: ["Site Survey & Heatmap Report", "Enterprise Switching Matrix", "Redundant Uplinks SLA", "Telemetry Performance Dashboard"]
  },
  {
    id: "infra",
    slug: "arkaprana-infra",
    shortSlug: "infrastructure",
    badge: "02 BUILD",
    name: "ARKAPRANA INFRA",
    category: "IT Infrastructure & Data Center",
    headlineQuote: "Build the foundation.",
    tagline: "Mission-critical computing infrastructure engineered for continuous zero-downtime operation.",
    description: "Rekayasa infrastruktur komputasi dan ruang data center kelas industri yang siap menopang beban kerja intensif, pemrosesan data real-time, dan kontinuitas operasional tanpa henti.",
    iconName: "Server",
    capabilities: [
      "Tier-3+ Modular Data Center Design",
      "Enterprise High-Density Compute Clusters",
      "All-Flash SAN / NAS Storage Vaults",
      "Precision Cooling (CRAC/CRAH) & UPS Power",
      "Automated Disaster Recovery (DR) Sites"
    ],
    problem: "Server konvensional yang menua, sistem pendingin yang tidak efisien (PUE tinggi), ketiadaan pasokan daya redundan sejati, dan risiko kerusakan fisik yang mengancam integritas operasional bisnis.",
    solutionStatement: "ARKAPRANA merekayasa fasilitas komputasi berstandar Tier-3+, modular server cluster berkepadatan tinggi, penyimpanan flash berlatensi sub-milidetik, dan proteksi lingkungan komprehensif.",
    architectureFocus: "Bare-Metal Compute, Micro-Segmented Virtualization, 2N Power & Precision Thermal Management",
    architectureDetails: {
      topology: "Leaf-Spine Storage-Compute Fabric with RoCEv2 (RDMA over Converged Ethernet)",
      protocols: ["NVMe-oF", "iSCSI", "NFSv4.1", "FC-NVMe", "IPMI/Redfish Telemetry"],
      securityTier: "Biometric Man-Trap Access, Clean Agent Novec 1230 Fire Suppression, Hardware TPM 2.0",
      redundancy: "2N UPS Dual Feed, N+1 Precision Cooling, Concurrent Maintainability Architecture"
    },
    useCases: [
      {
        title: "Pembangunan Server Room Standar Tier-3 Perbankan",
        scenario: "Membangun fasilitas data center privat berkapasitas 20 rack dengan PUE < 1.35 dan sistem pendingin in-row presisi.",
        impact: "Eliminasi potensi downtime total, kepatuhan audit Bank Indonesia & OJK, serta perlindungan hardware dari lonjakan voltase."
      },
      {
        title: "Konsolidasi Server Fisik ke Hyperconverged Cluster",
        scenario: "Migrasi 40 server legacy individual ke dalam 4-node cluster enterprise dengan kompresi data dan deduplikasi aktif.",
        impact: "Efisiensi konsumsi daya listrik 60%, efisiensi ruang server 75%, dan kecepatan provisioning server baru dari 2 minggu menjadi 5 menit."
      },
      {
        title: "Disaster Recovery Center (DRC) Antar Kota",
        scenario: "Pembangunan site replikasi data asinkronus antar kota dengan RPO < 5 detik dan RTO < 15 menit.",
        impact: "Kelangsungan bisnis terjamin 100% saat terjadi bencana alam atau pemadaman total di site primer."
      }
    ],
    implementationSteps: [
      { phase: "Phase 01", title: "Thermal, Power & Structural Audit", description: "Perhitungan beban struktural lantai, kapasitas kVA PLN/Genset, dan pemetaan airflow dingin/panas." },
      { phase: "Phase 02", title: "Engineering Blueprinting & CAD Design", description: "Perancangan layout 3D data center, simulasi CFD pendinginan, dan skema kelistrikan dual-path." },
      { phase: "Phase 03", title: "Civil, MEP & Hardware Deployment", description: "Instalasi raised floor, UPS, fire suppression, rack enclosure, server blade, dan storage SAN." },
      { phase: "Phase 04", title: "Integrated Systems Testing (IST)", description: "Uji coba beban tiruan (load bank test), simulasi pemadaman listrik PLN, dan komisioning sertifikasi." }
    ],
    faq: [
      {
        question: "Apakah ARKAPRANA melayani pembangunan ruang server baru dari ruang kosong?",
        answer: "Ya. Kami mengerjakan turnkey data center mulai dari pekerjaan sipil partisi kedap api, sistem kelistrikan MEP, grounding presisi (< 1 ohm), pendingin in-row, hingga pemasangan rack dan server."
      },
      {
        question: "Bagaimana ARKAPRANA memastikan data lama aman selama proses migrasi infrastruktur?",
        answer: "Kami menggunakan strategi migrasi bertahap (phased shadow replication) dengan rollback plan yang teruji untuk memastikan data tidak pernah hilang dan downtime diminimalkan."
      },
      {
        question: "Apakah sistem pendingin yang dipasang hemat energi?",
        answer: "Ya. Kami menerapkan arsitektur Hot/Cold Aisle Containment dengan inverter variable-speed EC fans yang memangkas konsumsi daya pendinginan hingga 35% dibandingkan AC konvensional."
      }
    ],
    deliverables: ["Tier-3 Engineering Blueprint", "CFD Airflow Simulation", "Commissioning Acceptance Certificate", "Hardware Asset Lifecycle Ledger"]
  },
  {
    id: "cloud",
    slug: "arkaprana-cloud",
    shortSlug: "cloud",
    badge: "03 SCALE",
    name: "ARKAPRANA CLOUD",
    category: "Cloud & Virtualization",
    headlineQuote: "Run what matters.",
    tagline: "Sovereign on-premise cloud and agile hybrid architectures maintaining absolute data jurisdiction.",
    description: "Implementasi private cloud berdaulat dan hybrid cloud elastis yang memberikan kontrol penuh atas residensi data, efisiensi resource, dan skalabilitas dinamis.",
    iconName: "Cloud",
    capabilities: [
      "On-Premise Sovereign Private Cloud",
      "Hybrid Multi-Cloud Interconnect",
      "Enterprise Kubernetes (K8s) Platform",
      "Distributed High-IOPS Object Storage",
      "Automated Business Continuity & Failover"
    ],
    problem: "Ketergantungan berlebihan pada public cloud luar negeri menimbulkan pembengkakan biaya egress data tak terduga, kekhawatiran kepatuhan UU PDP (Data Protection), dan latensi aplikasi internal.",
    solutionStatement: "ARKAPRANA menggelar platform cloud privat di atas server Anda sendiri, menghadirkan kemudahan elastisitas layaknya cloud publik dengan kedaulatan data dan performa throughput lokal maksimal.",
    architectureFocus: "Cloud-Native Infrastructure, K8s Governance, Software-Defined Storage (Ceph/MinIO)",
    architectureDetails: {
      topology: "Multi-Zone Distributed Private Cloud Fabric with Anycast Load Balancing",
      protocols: ["Kubernetes CNI/CSI", "S3 API Compatible", "OpenFlow / OVS", "gRPC Mesh"],
      securityTier: "mTLS v1.3 Microservices Mesh, Cryptographic Secret Vaulting, RBAC Tenant Isolation",
      redundancy: "Automated Self-Healing Node Rebalancing, Cross-Zone Active-Active Storage Mirroring"
    },
    useCases: [
      {
        title: "Private Cloud Mandiri untuk Finansial & Core Banking",
        scenario: "Penggelaran kluster compute terisolasi dengan kontrol akses ketat dan penyimpanan berbasis S3 on-premise.",
        impact: "Residensi data 100% berada di wilayah hukum Indonesia, bebas biaya tak terduga egress traffic, dan lolos audit regulasi."
      },
      {
        title: "Platform Microservices Kubernetes untuk Developer",
        scenario: "Implementasi kluster Kubernetes berstandar enterprise dengan automated CI/CD pipeline dan observability real-time.",
        impact: "Siklus rilis aplikasi dipercepat dari bulanan menjadi harian, dengan failover pod otomatis dalam hitungan detik."
      },
      {
        title: "Hybrid Cloud Disaster Recovery",
        scenario: "Integrasi private cloud primer dengan public cloud terpercaya sebagai failover darurat saat lonjakan traffic musiman.",
        impact: "Kemampuan burst capacity elastis tanpa harus membeli hardware tambahan yang jarang terpakai."
      }
    ],
    implementationSteps: [
      { phase: "Phase 01", title: "Workload Profile & Compliance Analysis", description: "Audit konsumsi CPU, memori, I/O database, dan klasifikasi sensitivitas data sesuai regulasi." },
      { phase: "Phase 02", title: "Cloud Architecture & Storage Topology", description: "Perancangan kluster komputasi terdistribusi, software-defined storage, dan jaringan overlay." },
      { phase: "Phase 03", title: "Platform Deployment & Tenant Provisioning", description: "Instalasi base OS terenkripsi, orkestrasi Kubernetes/Proxmox, dan konfigurasi API gateway." },
      { phase: "Phase 04", title: "Workload Containerization & Cutover", description: "Migrasi aplikasi, pengujian performa beban puncak, dan setup automated snapshot backup." }
    ],
    faq: [
      {
        question: "Apa keuntungan utama Private Cloud on-premise dibandingkan langsung sewa AWS/GCP?",
        answer: "Keuntungan utamanya adalah kedaulatan data (Data Sovereignty) 100% di tangan Anda, zero egress fee, latensi jaringan lokal sub-milidetik, dan kepastian biaya operasional tanpa lonjakan tak terkontrol."
      },
      {
        question: "Apakah sistem cloud ini mendukung API yang kompatibel dengan standar industri?",
        answer: "Ya. Sistem penyimpanan kami mendukung penuh S3-API, dan platform komputasi kami berbasis Kubernetes standar CNCF, sehingga developer Anda tidak perlu menulis ulang kode aplikasi."
      },
      {
        question: "Bagaimana jika server fisik kami mengalami kerusakan salah satu komponen?",
        answer: "Arsitektur private cloud ARKAPRANA memiliki fitur self-healing. Jika satu node server padam, beban kerja aplikasi dan data otomatis dipindahkan ke node lain yang sehat tanpa interupsi layanan."
      }
    ],
    deliverables: ["Cloud Migration Blueprint", "Self-Service Orchestration Portal", "RTO/RPO Compliance Ledger", "Infrastructure GitOps Codebase"]
  },
  {
    id: "secure",
    slug: "arkaprana-secure",
    shortSlug: "security",
    badge: "04 DEFEND",
    name: "ARKAPRANA SECURE",
    category: "Cybersecurity & Digital Resilience",
    headlineQuote: "Protect the ecosystem.",
    tagline: "Defensive zero-trust architecture and automated security operations engineered to withstand targeted attacks.",
    description: "Pertahanan siber berlapis yang melindungi aset digital organisasi dari layer hardware hingga aplikasi melalui arsitektur zero-trust dan pemantauan ancaman proaktif.",
    iconName: "ShieldCheck",
    capabilities: [
      "Zero-Trust Network Access (ZTNA)",
      "Continuous 24/7 Threat Hunting & SOC",
      "Hardware Security Module (HSM) & KMS",
      "Network Micro-Segmentation & Firewall",
      "ISO 27001 & BSSN Compliance Readiness"
    ],
    problem: "Ancaman ransomware yang kian canggih, kebocoran data akibat kredensial yang terkompromi, lambatnya deteksi intrusi (rata-rata industri > 200 hari), serta risiko sanksi hukum UU PDP.",
    solutionStatement: "ARKAPRANA mengimplementasikan prinsip 'Never Trust, Always Verify' di setiap endpoint, jaringan, dan identitas, didukung pemantauan SOC 24/7 dan brankas enkripsi hardware terisolasi.",
    architectureFocus: "Zero-Trust Architecture, Continuous Identity Verification, HSM Key Protection, Automated Incident Triage",
    architectureDetails: {
      topology: "Defense-in-Depth Microsegmented Mesh with Centralized SIEM/SOAR Ingestion",
      protocols: ["TLS 1.3", "IPSec", "RADIUS/TACACS+", "SAML 2.0 / OIDC", "OpenTelemetry Security Events"],
      securityTier: "FIPS 140-2 Level 3 Hardware Security Module, EAL4+ Verified Perimeter Firewalls",
      redundancy: "Active-Active High Availability Security Gateways, Immutable Air-Gapped Log Vaults"
    },
    useCases: [
      {
        title: "Perlindungan Ransomware & Immutable Backup",
        scenario: "Penerapan penyimpanan cadangan write-once-read-many (WORM) yang tidak dapat dimodifikasi bahkan oleh admin dengan hak akses penuh.",
        impact: "Jaminan pemulihan sistem 100% tanpa membayar tebusan saat terjadi insiden ransomware."
      },
      {
        title: "Zero-Trust Network Access (ZTNA) Karyawan Remote",
        scenario: "Penggantian VPN tradisional dengan ZTNA yang memverifikasi kesehatan perangkat dan identitas pengguna setiap kali mengakses data sensitif.",
        impact: "Mencegah pergerakan lateral peretas (lateral movement) jika salah satu laptop karyawan terkena malware."
      },
      {
        title: "Kepatuhan Regulasi Keamanan Informasi UU PDP & ISO 27001",
        scenario: "Audit celah keamanan menyeluruh, penetration testing sistemik, dan penyusunan SOP tata kelola keamanan informasi.",
        impact: "Kelulusan sertifikasi ISO 27001 dan perlindungan hukum terhadap risiko denda kelalaian data pribadi."
      }
    ],
    implementationSteps: [
      { phase: "Phase 01", title: "Comprehensive Threat & Vulnerability Audit", description: "Penetration testing black-box/gray-box, audit konfigurasi firewall, dan pemetaan data sensitif." },
      { phase: "Phase 02", title: "Zero-Trust Architecture Blueprint", description: "Perancangan kebijakan segmentasi jaringan mikro, model hak akses minimum (least privilege), dan IAM." },
      { phase: "Phase 03", title: "Security Enforcement & Sensor Deployment", description: "Pemasangan Next-Gen Firewall, sensor EDR/XDR di seluruh server, dan isolasi segmen penting." },
      { phase: "Phase 04", title: "Continuous Telemetry & Incident Playbook", description: "Penyambungan log ke SIEM 24/7, simulasi table-top incident response, dan sertifikasi kepatuhan." }
    ],
    faq: [
      {
        question: "Apakah sistem keamanan ARKAPRANA memperlambat koneksi kerja karyawan?",
        answer: "Tidak. Solusi ZTNA dan firewall kami menggunakan akselerasi hardware berbasis ASIC dan edge routing cerdas, sehingga enkripsi berjalan pada kecepatan kawat (line-rate) tanpa jeda yang terasa."
      },
      {
        question: "Bagaimana ARKAPRANA membantu kami jika terjadi serangan siber saat ini juga?",
        answer: "Kami memiliki tim Incident Response darurat yang siap melakukan isolasi host terinfeksi, analisis forensik digital memori, dan pembersihan ancaman secara terstruktur."
      },
      {
        question: "Apakah ARKAPRANA menyediakan laporan audit yang diakui regulator?",
        answer: "Ya. Setiap hasil vulnerability assessment dan penetration testing kami disusun mengikuti metodologi OWASP dan standar pengujian ISO/IEC 27001 yang diakui oleh auditor independen dan BSSN."
      }
    ],
    deliverables: ["Vulnerability Assessment & Pen-Test Report", "Zero-Trust Architecture Blueprint", "Incident Response Protocol", "ISO 27001 Readiness Matrix"]
  },
  {
    id: "managed",
    slug: "arkaprana-managed",
    shortSlug: "managed-it",
    badge: "05 OPERATE",
    name: "ARKAPRANA MANAGED",
    category: "Managed IT & Operation Services",
    headlineQuote: "Keep technology moving.",
    tagline: "Round-the-clock proactive engineering monitoring, telemetry automation, and rapid incident response.",
    description: "Layanan pengelolaan ekosistem IT komprehensif dengan komitmen SLA ketat, monitoring berkelanjutan 24/7, serta perawatan preventif demi stabilitas sistem bisnis tanpa jeda.",
    iconName: "Cpu",
    capabilities: [
      "24/7 Dedicated Enterprise NOC & SOC",
      "99.99% Guaranteed SLA Uptime",
      "Proactive Telemetry Observability",
      "Rapid Spare Parts Replacement Logistics",
      "Continuous Capacity & Performance Tuning"
    ],
    problem: "Keterbatasan tim IT internal yang kewalahan menangani rutinitas troubleshooting harian, keterlambatan penanganan insiden hardware saat malam/akhir pekan, serta tingginya biaya turnover personil ahli.",
    solutionStatement: "ARKAPRANA bertindak sebagai kepanjangan tangan tim teknologi Anda dengan insinyur bersertifikasi yang mengawasi, memelihara, dan menyelesaikan masalah sistem Anda 24 jam sehari, 365 hari setahun.",
    architectureFocus: "ITIL 4 Aligned Operations, Centralized NOC Observability, Automated Remediation Runbooks",
    architectureDetails: {
      topology: "Distributed Telemetry Collector Network with Redundant Central NOC Dashboards",
      protocols: ["SNMPv3", "OpenTelemetry", "NetFlow / IPFIX", "Syslog-ng TLS", "REST API Webhooks"],
      securityTier: "Encrypted Out-of-Band (OOB) Management Access, Granular Session Auditing",
      redundancy: "Dual Active NOC Facilities, Automated Escalation Matrix with MTTR < 30 Minutes"
    },
    useCases: [
      {
        title: "Pemeliharaan 24/7 Jaringan & Server Multi-Site Korporasi",
        scenario: "Pengawasan proaktif ratusan perangkat jaringan dan server yang tersebar di berbagai cabang seluruh Indonesia.",
        impact: "92% anomali terdeteksi dan diatasi sebelum pengguna menyadari adanya gangguan, menekan angka tiket komplain drastis."
      },
      {
        title: "Preventive Maintenance Rutin Fasilitas Data Center",
        scenario: "Pengecekan fisik berkala pada kebersihan filter AC, kesehatan baterai UPS, jalur kabel, dan update firmware berkala.",
        impact: "Mencegah kebakaran akibat akumulasi debu, memperpanjang masa pakai hardware hingga 40%, dan menghindari blackout tak terduga."
      },
      {
        title: "Dedicated L2/L3 Engineering Standby On-Site",
        scenario: "Penempatan tim engineer ahli bersertifikasi di kantor klien untuk penanganan insiden prioritas tinggi secara instan.",
        impact: "Respons time penanganan masalah kritis di bawah 15 menit, didukung stok komponen cadangan (cold-spare) di lokasi."
      }
    ],
    implementationSteps: [
      { phase: "Phase 01", title: "Infrastructure Discovery & Asset Inventory", description: "Audit seluruh perangkat keras, lisensi software, topologi kabel, dan pemetaan dependensi sistem." },
      { phase: "Phase 02", title: "Monitoring Sensor Deployment & Thresholds", description: "Pemasangan agen telemetri, konfigurasi threshold peringatan, dan integrasi kanal notifikasi tim." },
      { phase: "Phase 03", title: "SLA Definition & Escalation Matrix Setup", description: "Penyusunan target response time, MTTR, prosedur darurat, dan alur eskalasi insiden berjenjang." },
      { phase: "Phase 04", title: "Full Operational Transition & Review", description: "Pelaksanaan operasional penuh 24/7, evaluasi bulanan bersama manajemen, dan optimasi kapasitas berkelanjutan." }
    ],
    faq: [
      {
        question: "Apakah layanan Managed IT ini menggantikan tim IT internal kami?",
        answer: "Tidak. Kami berkolaborasi dengan tim IT Anda. Kami menangani monitoring operasional level bawah, troubleshooting malam hari, dan perawatan rutin, sehingga tim IT internal Anda bisa fokus pada inovasi bisnis strategis."
      },
      {
        question: "Bagaimana sistem pelaporan dan transparansi kerja yang diberikan?",
        answer: "Anda mendapatkan akses langsung ke dashboard telemetri real-time serta laporan berkala bulanan yang mencakup statistik uptime, ringkasan insiden yang teratasi, dan rekomendasi kapasitas hardware."
      },
      {
        question: "Apakah ARKAPRANA menyediakan jaminan penggantian spare-part hardware yang rusak?",
        answer: "Ya. Paket Managed Service kami dapat mencakup Service Level Agreement penggantian suku cadang dalam hitungan 4 jam (4-hour on-site replacement) untuk komponen kritis server dan jaringan."
      }
    ],
    deliverables: ["Service Level Agreement (SLA) Contract", "24/7 NOC Live Access Portal", "Monthly Executive Health Report", "Hardware Lifecycle Replacement Plan"]
  },
  {
    id: "ai",
    slug: "arkaprana-ai",
    shortSlug: "ai",
    badge: "06 INTELLIGENCE",
    name: "ARKAPRANA AI",
    category: "Enterprise Intelligence & Cognitive AI",
    headlineQuote: "Turn knowledge into intelligence.",
    tagline: "Private sovereign AI models, document intelligence, and cognitive workflow automation deployed entirely on your servers.",
    description: "Model kecerdasan buatan berdaulat yang beroperasi langsung di dalam infrastruktur private Anda—menjaga kerahasiaan dokumen dan kedaulatan data secara mutlak.",
    iconName: "BrainCircuit",
    capabilities: [
      "Private On-Premise LLM & RAG Pipelines",
      "Enterprise Organizational Knowledge Base",
      "Document Intelligence & OCR Synthesis",
      "Autonomous Workflow Decision Agents",
      "Air-Gapped Sovereign Data Isolation"
    ],
    problem: "Karyawan menghabiskan ribuan jam mencari informasi di ribuan lembar dokumen SOP dan kontrak, sementara mengirimkan data rahasia korporasi ke API AI publik dilarang oleh regulasi kepatuhan hukum.",
    solutionStatement: "ARKAPRANA membangun ekosistem AI enterprise mandiri yang menghubungkan seluruh arsip dokumen, database, dan pengetahuan operasional Anda ke dalam model AI privat tanpa sebutir pun data keluar dari server Anda.",
    architectureFocus: "Sovereign Weights, High-Density Vector Embeddings, Hybrid Semantic Search, Local GPU Inference",
    architectureDetails: {
      topology: "On-Premise GPU Compute Cluster (NVIDIA / TensorRT-LLM) with Isolated Vector Fabric",
      protocols: ["OpenAI-Compatible Local API", "gRPC Stream", "Milvus / Chroma RPC", "vLLM High-Throughput Serving"],
      securityTier: "Air-Gapped Compute Isolation, Zero External Telemetry Leakage, Role-Based Document Access (RBAC)",
      redundancy: "Active-Active Model Sharding, High-Availability Vector DB Replication with Sub-15ms Latency"
    },
    useCases: [
      {
        title: "Asisten Pengetahuan Dokumen Regulasi & SOP Internal",
        scenario: "Sistem cerdas yang membaca puluhan ribu lembar dokumen teknik, SOP keselamatan, dan regulasi internal untuk menjawab pertanyaan teknis tim dalam 2 detik.",
        impact: "Peningkatan produktivitas staf hingga 300%, eliminasi kesalahan interpretasi prosedur lapangan, dan akurasi jawaban terverifikasi dengan sitasi kutipan bab asli."
      },
      {
        title: "Ekstraksi & Rekonsiliasi Otomatis Dokumen Pengapalan / Invoice",
        scenario: "Model Document Intelligence yang memindai ratusan faktur fisik, surat jalan maritim, dan manifest kargo secara otomatis menjadi format database.",
        impact: "Waktu input data terpangkas dari 3 hari menjadi 5 menit, dengan tingkat presisi pengenalan angka dan tabel di atas 99.4%."
      },
      {
        title: "Agen Pengambil Keputusan Alur Kerja Logistik & Manufaktur",
        scenario: "AI otonom yang memantau inventaris dan jadwal armada kapal, lalu secara mandiri menyusun draft instruksi pengalihan jalur saat cuaca buruk.",
        impact: "Efisiensi operasional armada meningkat, respons krisis lebih cepat tanpa menunggu birokrasi manual yang lambat."
      }
    ],
    implementationSteps: [
      { phase: "Phase 01", title: "Enterprise Knowledge Audit & Ingestion Mapping", description: "Inventarisasi sumber data dokumen (PDF, Word, Excel, SQL) dan pemilahan tingkat kerahasiaan." },
      { phase: "Phase 02", title: "Hardware Sizing & Private Model Selection", description: "Perhitungan kapasitas VRAM GPU lokal dan pemilihan open-weights foundation model paling efisien." },
      { phase: "Phase 03", title: "Vector Pipeline & RAG Optimization", description: "Penyusunan chunking strategi, embedding semantik, uji anti-halusinasi, dan role-based access." },
      { phase: "Phase 04", title: "Internal Pilot Launch & Staff Training", description: "Peluncuran bertahap ke divisi kunci, penyempurnaan prompt internal, dan pelatihan manajemen model mandiri." }
    ],
    faq: [
      {
        question: "Apakah sistem ARKAPRANA AI membutuhkan koneksi internet untuk bekerja?",
        answer: "Tidak. Model kami dapat berjalan secara total air-gapped (tanpa koneksi internet sama sekali). Seluruh kalkulasi matematika dan inferensi bahasa terjadi 100% pada chip GPU server lokal Anda."
      },
      {
        question: "Bagaimana cara mencegah AI memberikan informasi palsu (halusinasi)?",
        answer: "Kami menerapkan arsitektur Retrieval-Augmented Generation (RAG) tingkat lanjut dengan verifikasi sitasi sumber. AI hanya diizinkan merespons berdasarkan dokumen fakta yang terindeks, dan menyertakan link referensi bab/halaman aslinya."
      },
      {
        question: "Apakah staf divisi HR bisa melihat dokumen rahasia divisi Keuangan saat bertanya ke AI?",
        answer: "Tidak. Sistem kami memiliki fitur Role-Based Access Control (RBAC). AI secara otomatis memfilter jawaban dan hanya menampilkan informasi yang berhak diakses oleh level kredensial pengguna yang bertanya."
      }
    ],
    deliverables: ["Private RAG Architectural Blueprint", "Air-Gapped Deployment Package", "Model Citation Verification Matrix", "Enterprise Knowledge Base Portal"]
  },
  {
    id: "integration",
    slug: "arkaprana-integration",
    shortSlug: "integration",
    badge: "07 SYNTHESIS",
    name: "ARKAPRANA INTEGRATION",
    category: "System Integration & Procurement",
    headlineQuote: "Make systems work together.",
    tagline: "Turnkey enterprise technology delivery, cross-vendor hardware harmonisation, and certified systems integration.",
    description: "Pengadaan hardware bergaransi resmi, integrasi multi-vendor tanpa celah kompatibilitas, serta eksekusi proyek IT skala besar secara tepat waktu dan sesuai anggaran.",
    iconName: "Workflow",
    capabilities: [
      "Turnkey Enterprise Technology Blueprints",
      "Vendor-Agnostic Certified Hardware Procurement",
      "Cross-System API & Middleware Orchestration",
      "Certified Commissioning & Acceptance Testing",
      "Principal Executive Knowledge Transfer"
    ],
    problem: "Banyak proyek IT gagal atau molor akibat benturan antar vendor berbeda yang saling melempar tanggung jawab, komponen yang tidak kompatibel saat dirakit, serta lambatnya rantai pasok pengadaan perangkat.",
    solutionStatement: "ARKAPRANA bertindak sebagai Single Point of Accountability. Kami mengorkestrasi seluruh rantai pasok pengadaan, integrasi software dan hardware, hingga pengujian komisioning akhir hingga sistem siap pakai (turnkey).",
    architectureFocus: "Multi-Vendor Systems Engineering, Middleware API Orchestration, Turnkey Project Delivery",
    architectureDetails: {
      topology: "Unified Multi-System Integration Bus with Standardized Microservice Connectors",
      protocols: ["REST OpenAPI", "gRPC", "MQTT Industrial", "SOAP Legacy", "ISO 8583 Financial"],
      securityTier: "End-to-End Cryptographic Handshakes, Vendor Sandbox Isolation Testing",
      redundancy: "Dual Integration Gateways with Transaction Queue Guarantees (Zero Data Loss)"
    },
    useCases: [
      {
        title: "Integrasi Turnkey Sistem IT Gedung Baru / Kantor Cabang",
        scenario: "Pengadaan dan instalasi serentak data center, switching jaringan, IP CCTV, akses pintu biometrik, dan Wi-Fi dalam satu kontrak kerja terpadu.",
        impact: "Gedung siap beroperasi tepat waktu, tanpa kerumitan mengelola belasan vendor terpisah, dengan efisiensi anggaran pengadaan hingga 25%."
      },
      {
        title: "Penyatuan Sistem ERP Legacy dengan Platform Data Modern",
        scenario: "Membangun middleware penghubung antara database mainframe legacy dengan dashboard analitik modern dan sistem AI.",
        impact: "Perusahaan tidak perlu membuang sistem lama yang mahal, namun langsung mendapatkan manfaat visibilitas data real-time."
      },
      {
        title: "Pengadaan Perangkat Keras Server & Jaringan Skala Besar",
        scenario: "Pengadaan ratusan switch, router, dan server bergaransi resmi distributor Indonesia dengan jaminan keaslian dan SLA garansi resmi.",
        impact: "Kepatuhan penuh pada regulasi pengadaan BUMN/Korporasi, bebas dari risiko hardware tiruan/refurbished."
      }
    ],
    implementationSteps: [
      { phase: "Phase 01", title: "Vendor & Architectural Compatibility Audit", description: "Analisis kecocokan protokol komunikasi, spesifikasi port fisik, dan pemetaan lisensi antar perangkat." },
      { phase: "Phase 02", title: "Procurement & Logistics Scheduling", description: "Pengadaan barang resmi, pengurusan perizinan import bila diperlukan, dan inspeksi kualitas di gudang transit." },
      { phase: "Phase 03", title: "On-Site Installation & Interconnection", description: "Pemasangan rak fisik, konfigurasi firmware, integrasi API middleware, dan uji fungsional awal." },
      { phase: "Phase 04", title: "User Acceptance Testing (UAT) & Sign-Off", description: "Pengujian skenario ekstrem bersama user, dokumentasi as-built drawing, dan serah terima garansi resmi." }
    ],
    faq: [
      {
        question: "Apakah barang dan hardware yang disediakan ARKAPRANA bergaransi resmi?",
        answer: "100% bergaransi resmi distributor Indonesia (Principal Warranty). Kami tidak pernah menggunakan barang pasar gelap (black market) atau refurbished tanpa sertifikat resmi manufaktur."
      },
      {
        question: "Bagaimana jika ada dua merk berbeda yang sulit tersambung?",
        answer: "Insinyur kami memiliki keahlian mendalam pada protokol standar terbuka (open standards) dan mampu mengembangkan middleware adapter kustom untuk menjembatani komunikasi data antar perangkat yang berbeda generasi."
      },
      {
        question: "Apakah ARKAPRANA menyediakan as-built drawing dan dokumentasi lengkap di akhir proyek?",
        answer: "Ya. Setiap proyek integrasi kami akhiri dengan penyerahan bundel dokumentasi teknis lengkap meliputi diagram CAD topologi jaringan, peta penomoran kabel (cable tagging), dan SOP pengoperasian sistem."
      }
    ],
    deliverables: ["Turnkey Project Execution Blueprint", "Official Distributor Warranty Certificates", "As-Built System CAD Drawings", "Comprehensive UAT Acceptance Ledger"]
  }
];

// Helper to look up solutions by short slug or full slug
export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return SOLUTIONS.find(
    (s) => s.slug === slug || s.shortSlug === slug || s.id === slug
  );
}

// 8 Architecture Capability Blueprints for /capabilities (Section 18)
export interface CapabilityBlueprint {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  whatWeDo: string;
  typicalRequirements: string[];
  potentialSolution: string;
  engagementModel: string;
  ctaText: string;
  ctaHref: string;
  challenge: string;
  approach: string;
  architecture: string;
  potentialOutcome: string;
  keyProtocols: string[];
  deliverables: string[];
}

export const CAPABILITIES_DATA: CapabilityBlueprint[] = [
  {
    id: "cap-network",
    slug: "network-engineering",
    number: "01",
    title: "NETWORK ENGINEERING",
    category: "Enterprise Connectivity & Routing",
    whatWeDo: "Merancang, menggelar, dan mengoptimalkan infrastruktur jaringan korporat skala besar, backbone serat optik, interkoneksi SD-WAN multi-site, dan enterprise Wi-Fi densitas tinggi.",
    typicalRequirements: [
      "Interkoneksi kantor pusat, pabrik, gudang, dan cabang terdistribusi",
      "Kebutuhan throughput tinggi dengan latensi konsisten sub-25ms",
      "Eliminasi single-point-of-failure dengan dual uplink BGP redundan",
      "Cakupan Wi-Fi 7 densitas tinggi tanpa dead-zone untuk ribuan perangkat"
    ],
    potentialSolution: "ARKAPRANA NETWORK — Carrier-grade spine-leaf switching fabric, dual BGP routing, hardware-accelerated SD-WAN mesh, dan pemantauan telemetri waktu nyata 24/7.",
    engagementModel: "Project Delivery (Turnkey Rollout) atau Managed Network SLA",
    ctaText: "Discuss Network Engineering →",
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
    title: "INFRASTRUCTURE ENGINEERING",
    category: "Compute & Data Center Engineering",
    whatWeDo: "Membangun fasilitas ruang server dan data center Tier-3+, kluster server berkepadatan tinggi, penyimpanan flash NVMe latensi rendah, serta sistem daya dan pendinginan presisi.",
    typicalRequirements: [
      "Modernisasi ruang server atau pembangunan fasilitas data center baru",
      "Konsolidasi puluhan server fisik menjadi kluster virtualisasi terpadu",
      "Jaminan ketersediaan daya 2N+1 tanpa gangguan saat pemeliharaan",
      "Sistem pendingin presisi in-row dengan efisiensi energi PUE optimal"
    ],
    potentialSolution: "ARKAPRANA INFRA — Tier-3+ modular compute facilities, dual-feed UPS path, clean agent fire suppression, dan hyperconverged high-density compute nodes.",
    engagementModel: "Project Delivery (Facility Fit-Out) & Infrastructure Consulting",
    ctaText: "Discuss Infrastructure Engineering →",
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
    title: "CLOUD",
    category: "Sovereign Private Cloud & Kubernetes",
    whatWeDo: "Membangun arsitektur private cloud berdaulat dan hybrid cluster di atas infrastruktur server mandiri, memberikan kelincahan cloud dengan kedaulatan data 100% lokal.",
    typicalRequirements: [
      "Kepatuhan kedaulatan data (UU PDP / regulasi perbankan & pemerintah)",
      "Pencegahan lonjakan biaya egress dan biaya langganan cloud publik",
      "Orkestrasi kontainer Kubernetes skala besar dengan storage S3 lokal",
      "Mekanisme disaster recovery otomatis lintas zona terpisah"
    ],
    potentialSolution: "ARKAPRANA CLOUD — Sovereign private cloud platform dengan orkestrasi Kubernetes enterprise, Ceph software-defined storage, dan zero-data egress fees.",
    engagementModel: "Architecture Implementation & Hybrid Cloud Consulting",
    ctaText: "Discuss Cloud Architecture →",
    ctaHref: "/contact?solution=CLOUD",
    challenge: "Kebutuhan elastisitas komputasi modern sering kali berbenturan dengan lonjakan biaya bandwidth dan keharusan kepatuhan kedaulatan data di dalam negeri.",
    approach: "Membangun private cloud berdaulat berbasis teknologi open-source enterprise dan orkestrasi Kubernetes di atas infrastruktur server milik organisasi.",
    architecture: "Multi-node hypervisor cluster, software-defined storage (Ceph S3 compatible), automated container scheduling, and multi-zone disaster recovery failover.",
    potentialOutcome: "Kemudahan manajemen beban kerja layaknya cloud publik, eliminasi biaya tersembunyi, dan kepatuhan penuh terhadap yurisdiksi data lokal.",
    keyProtocols: ["Kubernetes CNI/CSI", "S3 API Compatible", "OpenFlow / OVS", "mTLS Microservices"],
    deliverables: ["Private Cloud Blueprint", "Kubernetes Management Portal", "S3 Storage Cluster Setup", "Disaster Recovery Automation Script"]
  },
  {
    id: "cap-security",
    slug: "cybersecurity",
    number: "04",
    title: "CYBERSECURITY",
    category: "Perimeter & Zero-Trust Defense",
    whatWeDo: "Menerapkan kerangka kerja pertahanan siber Zero-Trust berlapis, pengerasan firewall, proteksi brankas kriptografi hardware HSM, dan sistem cadangan data tak terhapus.",
    typicalRequirements: [
      "Perlindungan aset digital dari ancaman ransomware dan exfiltration",
      "Kepatuhan audit standar keamanan informasi ISO 27001 dan UU PDP",
      "Segmentasi mikro untuk mencegah pergerakan lateral penyerang",
      "Brankas cadangan data immutable yang tidak bisa dienkripsi peretas"
    ],
    potentialSolution: "ARKAPRANA SECURE — Zero-Trust Network Architecture (ZTNA), Next-Gen Firewall dengan deep packet inspection, hardware HSM vaults, dan immutable backup vaults.",
    engagementModel: "Security Implementation, Vulnerability Assessment & SOC SLA",
    ctaText: "Discuss Cybersecurity Defense →",
    ctaHref: "/contact?solution=CYBERSECURITY",
    challenge: "Serangan ransomware modern, ancaman insider, dan eksploitasi celah identitas memerlukan pertahanan proaktif melampaui firewall tradisional.",
    approach: "Menerapkan kerangka kerja Zero-Trust komprehensif: verifikasi berkelanjutan atas identitas, perangkat, dan lalu lintas data di setiap titik akses sistem.",
    architecture: "Next-Gen Firewall with deep packet inspection, micro-segmented VLANs, continuous identity verification (ZTNA), Hardware Security Module (HSM), and immutable backup vaults.",
    potentialOutcome: "Ketahanan siber berlapis yang membatasi pergerakan lateral penyerang, perlindungan data pribadi sesuai UU PDP, dan kesiapan audit sertifikasi ISO 27001.",
    keyProtocols: ["TLS 1.3", "IPSec IKEv2", "SAML 2.0 / OIDC", "FIPS 140-2 Level 3", "OpenTelemetry Security"],
    deliverables: ["Threat & Vulnerability Assessment", "Zero-Trust Architecture Matrix", "Immutable Backup Setup", "Incident Response Playbook"]
  },
  {
    id: "cap-integration",
    slug: "system-integration",
    number: "05",
    title: "SYSTEM INTEGRATION",
    category: "Multi-Vendor Systems Harmonisation",
    whatWeDo: "Mengharmonisasikan pengadaan perangkat bergaransi resmi, integrasi antar-vendor yang beragam, standarisasi protokol, dan komisioning sistem tanpa celah incompatibilitas.",
    typicalRequirements: [
      "Penggabungan sistem heterogen (Cisco, Aruba, Mikrotik, Fortinet, Dell, HP)",
      "Kebutuhan single point of accountability untuk proyek IT skala besar",
      "Interoperabilitas antar sistem kontrol industri (SCADA/PLC) dan aplikasi ERP",
      "Pengujian UAT berstandar internasional dan dokumentasi gambar as-built lengkap"
    ],
    potentialSolution: "ARKAPRANA INTEGRATION — Turnkey multi-vendor engineering, integration middleware bus, certified acceptance testing, dan garansi resmi distributor.",
    engagementModel: "Turnkey System Integration Contract & Project Delivery",
    ctaText: "Discuss System Integration →",
    ctaHref: "/contact?solution=SYSTEM%20INTEGRATION",
    challenge: "Kompleksitas penggabungan berbagai perangkat dari beragam produsen sering memicu ketidakcocokan protokol, keterlambatan implementasi, dan kegagalan fungsi.",
    approach: "Bertindak sebagai Single Point of Accountability untuk pengadaan perangkat bergaransi resmi, harmonisasi sistem multi-vendor, dan uji komisioning menyeluruh.",
    architecture: "Unified Integration Bus with standardized API adapters, hardware sandbox testing environment, and end-to-end cryptographic handshakes.",
    potentialOutcome: "Penyelesaian proyek teknologi tepat waktu, interoperabilitas sistem tanpa hambatan, serta dokumentasi as-built drawing yang rapi dan terstandar.",
    keyProtocols: ["REST OpenAPI", "gRPC", "MQTT Industrial", "SOAP Legacy", "ISO 8583"],
    deliverables: ["Turnkey Procurement Schedule", "Official Distributor Warranty Ledger", "As-Built System CAD Drawings", "User Acceptance Test (UAT) Sign-Off"]
  },
  {
    id: "cap-managed",
    slug: "managed-it",
    number: "06",
    title: "MANAGED IT",
    category: "24/7 Operations & NOC Telemetry",
    whatWeDo: "Mengambil alih beban pemantauan operasional, mitigasi insiden jaringan, pemeliharaan preventif perangkat keras, dan pelaporan kesehatan sistem berbasis SLA terjamin.",
    typicalRequirements: [
      "Pengawasan operasional 24/7 tanpa perlu merekrut tim shift malam internal",
      "Jaminan Service Level Agreement (SLA) waktu aktif (uptime) hingga 99.99%",
      "Eskalasi darurat cepat dengan Mean Time to Resolution (MTTR) rendah",
      "Audit berkala atas kesehatan perangkat keras, lisensi, dan patch firmware"
    ],
    potentialSolution: "ARKAPRANA MANAGED — 24/7 Enterprise Network & Security Operations Center (NOC/SOC), automated telemetry alerting, dan dedicated Tier-3 engineers.",
    engagementModel: "Ongoing Managed Services SLA Contract (Annual / Multi-Year)",
    ctaText: "Discuss Managed IT Operations →",
    ctaHref: "/contact?solution=MANAGED%20IT",
    challenge: "Tingginya beban kerja operasional harian membebani tim IT internal dan meningkatkan risiko kelalaian deteksi anomali perangkat keras.",
    approach: "Menyediakan layanan Network & Security Operations Center (NOC/SOC) 24/7 dengan pemantauan telemetri waktu nyata dan alur eskalasi insiden berstandar ITIL.",
    architecture: "Distributed telemetry collectors, centralized multi-tenant monitoring platform, automated alert triage, and encrypted out-of-band management access.",
    potentialOutcome: "Stabilitas operasional berkelanjutan dengan SLA uptime 99.99%, penurunan MTTR (Mean Time to Resolution), dan efisiensi alokasi sumber daya manusia internal.",
    keyProtocols: ["SNMPv3", "NetFlow / IPFIX", "OpenTelemetry", "Syslog-ng TLS", "REST Webhooks"],
    deliverables: ["24/7 NOC Service Agreement", "Telemetry Portal Credentials", "Monthly Health Audit Report", "Hardware Replacement Logistics Plan"]
  },
  {
    id: "cap-ai",
    slug: "ai-automation",
    number: "07",
    title: "AI & AUTOMATION",
    category: "Private AI, RAG & Workflow Robotics",
    whatWeDo: "Merancang dan menggelar sistem kecerdasan buatan privat on-premise, model RAG berbasis dokumen korporat rahasia, serta otomatisasi alur kerja tanpa risiko kebocoran data.",
    typicalRequirements: [
      "Pencarian semantik cerdas atas ribuan dokumen SOP, kontrak, dan data teknis",
      "Otomasi ekstraksi data dari file PDF/laporan kerja lapangan tanpa manual input",
      "Kepastian 100% data rahasia tidak pernah dikirim ke server AI publik luar negeri",
      "Otomatisasi alur kerja antar-sistem berbasis kejadian (event-driven)"
    ],
    potentialSolution: "ARKAPRANA AI — Air-gapped on-premise LLM cluster, enterprise vector database RAG, citation verification engine, dan automated workflow bots.",
    engagementModel: "AI Architecture Assessment, PoC Implementation & Turnkey Rollout",
    ctaText: "Discuss AI & Automation →",
    ctaHref: "/contact?solution=AI%20%26%20AUTOMATION",
    challenge: "Kekhawatiran kebocoran data rahasia ke cloud AI publik dan lambatnya alur kerja manual menghambat adopsi otomasi cerdas di perusahaan.",
    approach: "Menggelar kluster komputasi AI mandiri di server privat dengan model open-weights berdaulat, arsitektur RAG anti-halusinasi, dan isolasi jaringan total.",
    architecture: "Air-gapped GPU compute nodes, high-density vector database (Milvus/Chroma), vLLM high-throughput local inference, and fine-grained Role-Based Document Access (RBAC).",
    potentialOutcome: "Kemampuan pencarian semantik dan otomasi pengetahuan organisasi secara instan dengan jaminan 0% kebocoran data ke luar jaringan internal perusahaan.",
    keyProtocols: ["Local OpenAI API Compatible", "gRPC Stream", "TensorRT-LLM", "Vector Embeddings RPC"],
    deliverables: ["Private RAG Blueprint", "Isolated Vector Catalog", "Citation Verification Engine", "Enterprise Knowledge Base Interface"]
  },
  {
    id: "cap-consulting",
    slug: "technology-consulting",
    number: "08",
    title: "TECHNOLOGY CONSULTING",
    category: "Architecture & Transformation Planning",
    whatWeDo: "Memberikan bimbingan strategis arsitektur tingkat prinsipal, audit kepatuhan regulasi data, perencanaan kapasitas masa depan, dan penyusunan peta jalan transformasi digital.",
    typicalRequirements: [
      "Perencanaan arsitektur teknologi jangka panjang sebelum investasi modal besar",
      "Audit kepatuhan arsitektur terhadap regulasi kedaulatan data dan UU PDP",
      "Evaluasi teknis independen terhadap proposal vendor pihak ketiga",
      "Penyusunan blueprint modernisasi infrastruktur yang aman dan terukur"
    ],
    potentialSolution: "ARKAPRANA CONSULTING — Strategic architecture blueprinting, technical feasibility study, vendor-neutral evaluation, dan regulatory compliance mapping.",
    engagementModel: "Retainer Advisory, Architectural Audit, atau Strategic Project Scope",
    ctaText: "Discuss Technology Consulting →",
    ctaHref: "/contact?solution=TECHNOLOGY%20CONSULTING",
    challenge: "Banyak inisiatif teknologi gagal atau membengkak karena perencanaan arsitektur yang tidak matang, salah perhitungan kapasitas, atau benturan regulasi.",
    approach: "Menganalisis kebutuhan bisnis secara mendalam, memetakan risiko teknis dan regulasi, serta menyusun cetak biru arsitektur terukur sebelum eksekusi pengadaan.",
    architecture: "Vendor-agnostic architecture framework, compliance matrices (UU PDP, ISO 27001), total cost of ownership (TCO) models, and lifecycle evolution roadmaps.",
    potentialOutcome: "Kepastian investasi teknologi yang tepat sasaran, efisiensi anggaran pengadaan hingga 30%, dan mitigasi risiko kegagalan integrasi di kemudian hari.",
    keyProtocols: ["TOGAF Framework", "ISO/IEC 27001", "NIST Cybersecurity Framework", "BSI Baseline"],
    deliverables: ["Comprehensive Architecture Blueprint", "Regulatory Compliance Audit Matrix", "TCO & Capacity Projection Model", "Vendor Evaluation Matrix"]
  }
];

// V5 Project Journey (Section 13: HOW WE WORK 01 to 08)
export interface ProjectJourneyStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverable: string;
  iconName: string;
}

export const PROJECT_JOURNEY_STEPS: ProjectJourneyStep[] = [
  {
    step: "01",
    name: "DISCOVER",
    tagline: "Understand the business and technical requirements.",
    description: "Memahami model bisnis, sasaran operasional, batasan regulasi kedaulatan data, serta ekspektasi performa jangka panjang organisasi Anda.",
    deliverable: "Executive Discovery & Scope Document",
    iconName: "Search"
  },
  {
    step: "02",
    name: "ASSESS",
    tagline: "Analyze the existing environment.",
    description: "Audit menyeluruh terhadap infrastruktur fisik, topologi jaringan, beban komputasi server, postur keamanan siber, dan jalur transmisi eksisting.",
    deliverable: "Infrastructure Assessment & Gap Analysis Report",
    iconName: "BarChart3"
  },
  {
    step: "03",
    name: "DESIGN",
    tagline: "Develop architecture and solution design.",
    description: "Menyusun arsitektur sistem komprehensif, skema redundansi multi-tier, spesifikasi perangkat keras, dan simulasi kapasitas daya/pendinginan.",
    deliverable: "Engineering Blueprint & Sizing Matrix",
    iconName: "PenTool"
  },
  {
    step: "04",
    name: "BUILD",
    tagline: "Implement the technology environment.",
    description: "Penggelaran fisik, terminasi serat optik berstandar TIA-942, instalasi rack server, sistem daya UPS terisolasi, dan konfigurasi perangkat keras.",
    deliverable: "Physical Implementation & Fluke Networks Certification",
    iconName: "Hammer"
  },
  {
    step: "05",
    name: "INTEGRATE",
    tagline: "Connect systems and workflows.",
    description: "Mengharmonisasikan perangkat lintas vendor, mengorkestrasi API middleware, konfigurasi perutean dinamis BGP/SD-WAN, dan penyelarasan data flow.",
    deliverable: "Multi-Vendor Integration Acceptance Sign-Off",
    iconName: "Workflow"
  },
  {
    step: "06",
    name: "SECURE",
    tagline: "Protect the environment.",
    description: "Penerapan kebijakan Zero-Trust, segmentasi mikro jaringan, pengerasan firewall, proteksi brankas kriptografi hardware, dan backup tak terhapus.",
    deliverable: "Zero-Trust Enforcement & Penetration Test Ledger",
    iconName: "ShieldCheck"
  },
  {
    step: "07",
    name: "MANAGE",
    tagline: "Provide ongoing support.",
    description: "Pemantauan telemetri proaktif 24/7 oleh Network & Security Operations Center (NOC/SOC) dengan jaminan SLA ketersediaan 99.99%.",
    deliverable: "Live NOC Telemetry Access & Monthly SLA Reports",
    iconName: "Cpu"
  },
  {
    step: "08",
    name: "EVOLVE",
    tagline: "Improve the environment as requirements change.",
    description: "Evaluasi berkala, perencanaan kapasitas masa depan, penerapan model AI privat baru, dan adaptasi berkelanjutan seiring pertumbuhan skala organisasi.",
    deliverable: "Quarterly Technology Evolution Roadmap",
    iconName: "TrendingUp"
  }
];

// V5 Project Engagement Models (Section 14: HOW WE CAN WORK TOGETHER)
export interface EngagementModel {
  modelNumber: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  deliverables: string[];
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    modelNumber: "MODEL 01",
    name: "PROJECT DELIVERY",
    tagline: "For specific technology projects.",
    description: "Pengadaan, perancangan, dan implementasi menyeluruh untuk proyek infrastruktur, jaringan, atau data center dengan ruang lingkup dan timeline terdefinisi jelas.",
    bestFor: "Pembangunan fasilitas baru, ekspansi cabang, upgrade infrastruktur server, atau renovasi data center.",
    deliverables: ["Turnkey Project Execution", "Certified Engineering Testing", "Full As-Built Documentation", "Commissioning Handover"]
  },
  {
    modelNumber: "MODEL 02",
    name: "SYSTEM INTEGRATION",
    tagline: "For multi-system environments.",
    description: "Harmonisasi perangkat keras dan sistem perangkat lunak dari berbagai vendor ke dalam satu arsitektur terpadu tanpa hambatan komunikasi.",
    bestFor: "Organisasi dengan warisan sistem beragam (heterogeneous) yang memerlukan single point of accountability.",
    deliverables: ["Unified Architecture Design", "Protocol & API Harmonisation", "Sandbox Compatibility Testing", "Interoperability Assurance"]
  },
  {
    modelNumber: "MODEL 03",
    name: "MANAGED IT",
    tagline: "For ongoing technology operations.",
    description: "Dukungan operasional proaktif 24/7/365, pemantauan telemetri, mitigasi insiden berstandar SLA tinggi, dan pemeliharaan preventif berkelanjutan.",
    bestFor: "Perusahaan yang ingin tim IT internalnya fokus pada inovasi bisnis inti tanpa terbebani rutinitas troubleshooting.",
    deliverables: ["Dedicated 24/7 NOC Monitoring", "99.99% Uptime SLA Guarantee", "Preventive Firmware Updates", "Incident Response < 15 Min"]
  },
  {
    modelNumber: "MODEL 04",
    name: "TECHNOLOGY CONSULTING",
    tagline: "For architecture and transformation planning.",
    description: "Pendampingan strategis dari Principal Architect untuk audit kepatuhan kedaulatan data (UU PDP), kajian kelayakan investasi teknologi, dan cetak biru transformasi.",
    bestFor: "Direksi, C-Level, dan pengambil keputusan yang merencanakan modernisasi infrastruktur jangka menengah-panjang.",
    deliverables: ["Strategic Architecture Blueprint", "Regulatory Compliance Audit", "TCO & Capacity Planning", "Technology Vendor Evaluation"]
  },
  {
    modelNumber: "MODEL 05",
    name: "AI & AUTOMATION",
    tagline: "For intelligent workflows and organizational knowledge.",
    description: "Perancangan dan penggelaran sistem kecerdasan buatan privat on-premise, model RAG berbasis dokumen korporat rahasia, serta otomasi alur kerja tanpa risiko kebocoran data.",
    bestFor: "Organisasi dengan basis pengetahuan besar, kebutuhan pencarian semantik dokumen, atau otomasi tugas repetitif.",
    deliverables: ["Private On-Premise LLM Setup", "Enterprise RAG Architecture", "Document Intelligence Pipeline", "Workflow Robotics Integration"]
  }
];

// V5 Business Value Themes (Section 15: 5 Themes)
export const BUSINESS_VALUE_THEMES = [
  {
    id: "reliability",
    theme: "RELIABILITY",
    headline: "Technology that supports continuous operations.",
    description: "Infrastruktur komputasi dan jaringan dirancang tanpa celah single-point-of-failure. Redundansi daya 2N+1 dan failover sub-detik menjaga layanan organisasi tetap aktif tanpa henti.",
    metricTag: "Zero Planned Downtime"
  },
  {
    id: "security",
    theme: "SECURITY",
    headline: "Technology environments designed with security in mind.",
    description: "Keamanan bukan tambahan di akhir, melainkan fondasi awal di setiap lapisan arsitektur. Kerangka kerja Zero-Trust, enkripsi HSM, dan backup tak terhapus melindungi kedaulatan data Anda.",
    metricTag: "Defense-in-Depth"
  },
  {
    id: "visibility",
    theme: "VISIBILITY",
    headline: "Better visibility across systems and operations.",
    description: "Telemetri real-time komprehensif atas lalu lintas jaringan, kesehatan server, dan integritas data. Manajemen mendapatkan data akurat untuk pengambilan keputusan cepat dan tepat.",
    metricTag: "Real-Time Telemetry"
  },
  {
    id: "efficiency",
    theme: "EFFICIENCY",
    headline: "Reduce repetitive and fragmented processes.",
    description: "Menghubungkan sistem yang terisolasi dan mengotomasi alur kerja manual. Staf ahli tidak lagi terbebani rutinitas troubleshooting dan dapat fokus pada pertumbuhan bisnis.",
    metricTag: "Automated Workflows"
  },
  {
    id: "scalability",
    theme: "SCALABILITY",
    headline: "Build technology that can evolve.",
    description: "Arsitektur modular yang adaptif memungkinkan penambahan cabang, beban komputasi server, atau integrasi AI cerdas kapan pun dibutuhkan tanpa perlu merombak ulang dari nol.",
    metricTag: "Modular Expansion"
  }
];

// V5 Business Solution Builder Modules (Section 12: BUILD YOUR TECHNOLOGY ENVIRONMENT)
export interface EnvModule {
  id: string;
  name: string;
  category: string;
  role: string;
  spec: string;
  benefit: string;
  badge: string;
}

export const ENVIRONMENT_BUILDER_MODULES: EnvModule[] = [
  {
    id: "network",
    name: "NETWORK",
    category: "Connectivity",
    role: "High-Speed Backbone & SD-WAN Mesh",
    spec: "Carrier-Neutral 100G Fiber, Multi-site SD-WAN, Wi-Fi 7",
    benefit: "Menjamin interkoneksi bebas hambatan dengan failover otomatis sub-50ms.",
    badge: "01"
  },
  {
    id: "server",
    name: "SERVER",
    category: "Compute",
    role: "High-Density Enterprise Compute",
    spec: "Dual-Socket Multi-Core Cluster, Hardware Virtualization",
    benefit: "Kapasitas komputasi tangguh untuk beban kerja misi kritis 24/7.",
    badge: "02"
  },
  {
    id: "storage",
    name: "STORAGE",
    category: "Data Storage",
    role: "Sub-Millisecond Flash Storage Matrix",
    spec: "All-Flash NVMe SAN/NAS, Software-Defined Storage",
    benefit: "Throughput I/O maksimal untuk database transaksi dan lakehouse data.",
    badge: "03"
  },
  {
    id: "cloud",
    name: "CLOUD",
    category: "Private Cloud",
    role: "Sovereign On-Premise Cloud Infrastructure",
    spec: "Enterprise Kubernetes, S3 Object Cluster, Multi-Tenant",
    benefit: "Elastisitas cloud publik dengan kedaulatan data 100% di tangan Anda.",
    badge: "04"
  },
  {
    id: "security",
    name: "SECURITY",
    category: "Defense",
    role: "Zero-Trust Perimeter & Microsegmentation",
    spec: "Next-Gen Firewall, HSM Vault, ZTNA Identity Controller",
    benefit: "Mengisolasi pergerakan lateral ancaman siber dan mematuhi UU PDP.",
    badge: "05"
  },
  {
    id: "backup",
    name: "BACKUP",
    category: "Resilience",
    role: "Immutable Air-Gapped Disaster Recovery",
    spec: "WORM Storage, Automated Offsite Replication, Instant RPO/RTO",
    benefit: "Perlindungan mutlak terhadap ransomware dengan pemulihan kilat.",
    badge: "06"
  },
  {
    id: "monitoring",
    name: "MONITORING",
    category: "Observability",
    role: "24/7 NOC Telemetry & Observability",
    spec: "Full-Stack Metrics Collector, Syslog-ng, Instant Escalation",
    benefit: "Visibilitas menyeluruh dan pencegahan anomali sebelum berdampak ke bisnis.",
    badge: "07"
  },
  {
    id: "ai",
    name: "AI",
    category: "Intelligence",
    role: "Private Sovereign LLM & Enterprise RAG",
    spec: "Air-Gapped GPU Cluster, Local Vector Store, Citation Engine",
    benefit: "Pencarian dan inferensi cerdas internal tanpa risiko kebocoran data.",
    badge: "08"
  },
  {
    id: "automation",
    name: "AUTOMATION",
    category: "Workflow",
    role: "Event-Driven Autonomous Workflows",
    spec: "API Orchestration Bus, Industrial IoT Gateway, Task Queues",
    benefit: "Menghapus pekerjaan manual berulang dan mempercepat siklus operasional.",
    badge: "09"
  }
];

// V5 Solution Discovery (Section 06: WHAT ARE YOU TRYING TO BUILD?)
export interface SolutionDiscoveryOption {
  id: string;
  label: string;
  visitorNeed: string;
  matchedSolution: string;
  solutionSlug: string;
  headline: string;
  summary: string;
  capabilities: string[];
  ctaText: string;
  ctaHref: string;
}

export const SOLUTION_DISCOVERY_OPTIONS: SolutionDiscoveryOption[] = [
  {
    id: "network",
    label: "Enterprise Network",
    visitorNeed: "I need a new enterprise network.",
    matchedSolution: "ARKAPRANA NETWORK",
    solutionSlug: "network",
    headline: "Enterprise connectivity designed for reliability, visibility and scale.",
    summary: "Menghubungkan fasilitas, kantor pusat, dan cabang terdistribusi dengan jaringan serat optik berkecepatan tinggi, SD-WAN dinamis, dan pemantauan telemetri waktu nyata.",
    capabilities: [
      "Network Architecture",
      "Structured Cabling",
      "Fiber Optic",
      "Enterprise Wi-Fi",
      "Routing & Switching",
      "Network Monitoring"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20NETWORK&intent=network"
  },
  {
    id: "infra",
    label: "Server & Infrastructure",
    visitorNeed: "I need reliable computing infrastructure for my organization.",
    matchedSolution: "ARKAPRANA INFRA",
    solutionSlug: "infrastructure",
    headline: "Mission-critical compute and resilient data center foundations.",
    summary: "Membangun ruang server dan fasilitas komputasi berstandar tinggi dengan redundansi daya, pendinginan presisi, dan server cluster berkepadatan tinggi.",
    capabilities: [
      "Server Clusters",
      "High-Performance Storage",
      "Virtualization",
      "Immutable Backup",
      "Data Center Fit-Out",
      "High Availability Architecture"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20INFRA&intent=infra"
  },
  {
    id: "cloud",
    label: "Sovereign Cloud",
    visitorNeed: "I need an agile cloud environment with sovereign data control.",
    matchedSolution: "ARKAPRANA CLOUD",
    solutionSlug: "cloud",
    headline: "Sovereign on-premise cloud and resilient hybrid clusters.",
    summary: "Menghadirkan fleksibilitas orkestrasi cloud publik di atas infrastruktur server mandiri Anda, tanpa biaya tersembunyi dan 100% kepatuhan data lokal.",
    capabilities: [
      "Private Cloud Orchestration",
      "Enterprise Kubernetes",
      "Software-Defined Storage (S3)",
      "Hybrid Multi-Zone Sync",
      "Automated DR Failover",
      "Zero Egress Cost Architecture"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20CLOUD&intent=cloud"
  },
  {
    id: "security",
    label: "Cybersecurity & Zero-Trust",
    visitorNeed: "I need to secure our operations against cyber threats and leaks.",
    matchedSolution: "ARKAPRANA SECURE",
    solutionSlug: "security",
    headline: "Defense-in-depth security engineered from the architectural core.",
    summary: "Menerapkan prinsip Zero-Trust menyeluruh: verifikasi berkelanjutan atas identitas, perangkat, microsegmentation jaringan, dan brankas hardware HSM.",
    capabilities: [
      "Zero-Trust Architecture",
      "Next-Gen Firewall (NGFW)",
      "Microsegmentation",
      "Hardware Security Module (HSM)",
      "Ransomware-Proof Backup",
      "24/7 Security Governance"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20SECURE&intent=security"
  },
  {
    id: "managed",
    label: "Managed IT Operations",
    visitorNeed: "I need 24/7 operational monitoring and dedicated engineering support.",
    matchedSolution: "ARKAPRANA MANAGED",
    solutionSlug: "managed-it",
    headline: "Proactive operations, NOC telemetry and SLA-backed engineering.",
    summary: "Mengalihkan beban pemantauan harian dan penanganan insiden infrastruktur ke tim insinyur bersertifikasi dengan jaminan SLA ketersediaan 99.99%.",
    capabilities: [
      "24/7 Dedicated NOC",
      "Real-Time Telemetry",
      "Incident Mitigation SLA",
      "Preventive Maintenance",
      "Patch & Firmware Management",
      "Executive Health Audits"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20MANAGED&intent=managed"
  },
  {
    id: "ai",
    label: "Private AI System",
    visitorNeed: "I need private AI intelligence built on our organization's knowledge.",
    matchedSolution: "ARKAPRANA AI",
    solutionSlug: "ai",
    headline: "Your data. Your infrastructure. Your intelligence.",
    summary: "Menggelar sistem AI privat on-premise dengan model bahasa berdaulat dan arsitektur RAG yang mengindeks seluruh dokumen korporat secara aman tanpa risiko kebocoran.",
    capabilities: [
      "Private On-Premise LLM",
      "Enterprise RAG Architecture",
      "Document Intelligence",
      "Organizational Knowledge Assistant",
      "Role-Based Access Guardrails",
      "Air-Gapped Privacy Guarantee"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20AI&intent=ai"
  },
  {
    id: "automation",
    label: "Automated Workflows",
    visitorNeed: "I need to eliminate manual processes and connect systems automatically.",
    matchedSolution: "ARKAPRANA AUTOMATION",
    solutionSlug: "ai",
    headline: "Intelligent workflow robotics and event-driven automation.",
    summary: "Mengintegrasikan pipeline otomatisasi antar perangkat, sensor telemetri, dan database enterprise untuk mempercepat siklus kerja tanpa kesalahan manual.",
    capabilities: [
      "Event-Driven Workflows",
      "API Orchestration Bus",
      "Industrial IoT Automation",
      "Automated Document Processing",
      "Anomaly Trigger Routing",
      "Operational Runbooks"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20AUTOMATION&intent=automation"
  },
  {
    id: "integration",
    label: "System Integration",
    visitorNeed: "I need multiple complex systems harmonized under one engineering partner.",
    matchedSolution: "ARKAPRANA INTEGRATION",
    solutionSlug: "integration",
    headline: "Turnkey multi-vendor engineering and single-point accountability.",
    summary: "Mengharmonisasikan pengadaan perangkat bergaransi resmi, integrasi jaringan, komputasi, dan software menjadi satu kesatuan operasional yang teruji.",
    capabilities: [
      "Single Point Accountability",
      "Turnkey Hardware Procurement",
      "Multi-Vendor Protocol Sync",
      "Certified Commissioning & UAT",
      "As-Built Engineering Drawings",
      "Official Distributor Warranties"
    ],
    ctaText: "Discuss This Project",
    ctaHref: "/contact?solution=ARKAPRANA%20INTEGRATION&intent=integration"
  }
];

// V5 Business Problem Section (Section 05)
export const DISCONNECT_PROBLEMS = [
  { id: "fragmented", title: "Fragmented infrastructure", desc: "Perangkat keras terpisah antar departemen tanpa standar sentral." },
  { id: "disconnected", title: "Disconnected systems", desc: "Aplikasi dan database tidak saling bertukar data secara mulus." },
  { id: "visibility", title: "Limited visibility", desc: "Manajemen buta terhadap performa dan status kesehatan jaringan real-time." },
  { id: "security", title: "Security gaps", desc: "Celah keamanan terbuka di antara pertemuan sistem multi-vendor." },
  { id: "manual", title: "Manual processes", desc: "Staf menghabiskan waktu berharga untuk input dan verifikasi data manual." },
  { id: "complexity", title: "Growing IT complexity", desc: "Biaya perawatan membengkak seiring bertambahnya tumpukan lisensi." },
  { id: "unstructured", title: "Unstructured organizational knowledge", desc: "Dokumen SOP, kontrak, dan pengetahuan teknis tercecer tanpa pencarian cerdas." }
];

// V5 AI Opportunity Assessment (Section 17)
export const AI_OPPORTUNITY_AREAS = [
  { id: "documents", label: "DOCUMENTS", detail: "Contract analysis, technical PDF parsing & automated extraction" },
  { id: "knowledge", label: "KNOWLEDGE", detail: "Centralized internal Q&A, organizational SOPs & policy retrieval" },
  { id: "customer_service", label: "CUSTOMER SERVICE", detail: "24/7 intelligent tier-1 assistant & verified knowledge agent" },
  { id: "operations", label: "OPERATIONS", detail: "Incident report synthesis, asset tracking & shift summaries" },
  { id: "reporting", label: "REPORTING", detail: "Autonomous executive summaries & periodic performance digest" },
  { id: "analysis", label: "ANALYSIS", detail: "Unstructured telemetry correlation & data anomaly discovery" },
  { id: "automation", label: "AUTOMATION", detail: "Cross-system document handoffs & validation workflows" },
  { id: "internal_search", label: "INTERNAL SEARCH", detail: "Sub-second semantic search across private enterprise repositories" }
];

// V5 Technology Ecosystem Categories (Section 30)
export const TECHNOLOGY_PARTNER_CATEGORIES = [
  { category: "NETWORKING", focus: "Spine-Leaf Fabric, SD-WAN, Industrial Switches & Wi-Fi 7", tier: "Carrier-Grade Architecture" },
  { category: "SERVER & STORAGE", focus: "High-Density Rack Servers, NVMe SAN/NAS & HCI", tier: "Mission-Critical Compute" },
  { category: "CLOUD", focus: "Kubernetes Orchestration, S3 Storage & Sovereign Private Cloud", tier: "Cloud-Native Infrastructure" },
  { category: "CYBERSECURITY", focus: "Next-Gen Firewall, HSM Vaults, ZTNA & SIEM/SOC", tier: "Zero-Trust Perimeter" },
  { category: "AI", focus: "GPU Compute Clusters, Vector Databases & Local Inference RAG", tier: "Private Intelligence" },
  { category: "SOFTWARE", focus: "Integration Middleware, API Gateways & Workflow Engines", tier: "Enterprise Interoperability" },
  { category: "INFRASTRUCTURE", focus: "Precision Cooling, 2N+1 UPS, Clean Agent Fire & Data Centers", tier: "Tier-3+ Facilities" }
];

// V5 Corporate Documents System (Section 28 & 29)
export const CORPORATE_DOCUMENTS = [
  { id: "company-profile", title: "Company Profile", filename: "arkaprana-company-profile.pdf", size: "3.2 MB", available: true },
  { id: "capability-statement", title: "Capability Statement", filename: "arkaprana-capability-statement.pdf", size: "2.8 MB", available: false },
  { id: "network-capability", title: "Network Capability", filename: "arkaprana-network-capability.pdf", size: "2.1 MB", available: false },
  { id: "infra-capability", title: "Infrastructure Capability", filename: "arkaprana-infrastructure-capability.pdf", size: "2.4 MB", available: false },
  { id: "cybersecurity-capability", title: "Cybersecurity Capability", filename: "arkaprana-cybersecurity-capability.pdf", size: "2.0 MB", available: false },
  { id: "ai-capability", title: "AI Capability", filename: "arkaprana-ai-capability.pdf", size: "2.6 MB", available: false },
  { id: "managed-it-capability", title: "Managed IT Capability", filename: "arkaprana-managed-it-capability.pdf", size: "1.9 MB", available: false },
  { id: "maritime-capability", title: "Maritime Capability", filename: "arkaprana-maritime-capability.pdf", size: "2.3 MB", available: false },
  { id: "corporate-presentation", title: "Corporate Presentation", filename: "arkaprana-corporate-presentation.pdf", size: "4.5 MB", available: false }
];

export const INDUSTRIES = [
  {
    name: "Konstruksi & Proyek Fisik",
    slug: "construction",
    headlineQuote: "Connectivity where projects happen.",
    challenge: "Lingkungan proyek fisik dinamis tanpa infrastruktur permanen, mobilitas tinggi, dan risiko debu serta cuaca ekstrem.",
    environment: "Site office sementara, area galian/struktur baja, crane, dan perimeter proyek yang luas.",
    solutions: ["Temporary Long-Range Microwave & Wireless Mesh", "Ruggedized Field Wi-Fi & Industrial Switching", "Solar-Powered CCTV Surveillance & Sensor Telemetry"],
    useCases: [
      { title: "Sinkronisasi Model BIM Lapangan", detail: "Transmisi file CAD/BIM berukuran gigabyte dari site office langsung ke server kantor pusat tanpa jeda." },
      { title: "Pengawasan Keselamatan Kerja (HSE)", detail: "Kamera pengawas berbasis IP dengan transmisi wireless untuk monitoring alat berat dan kepatuhan APD." },
      { title: "Konektivitas Kontainer Proyek", detail: "Penyediaan link internet satelit & microwave redundan siap pakai dalam 48 jam sejak proyek dimulai." }
    ]
  },
  {
    name: "Manufaktur & Pabrik Industri",
    slug: "manufacturing",
    headlineQuote: "Infrastructure for continuous operations.",
    challenge: "Interferensi elektromagnetik tinggi dari mesin berat, keharusan uptime lini produksi 24/7, dan pemisahan ketat antara jaringan operasional (OT) dan kantor (IT).",
    environment: "Lantai produksi bersuhu tinggi, ruang server pabrik, gudang bahan baku, dan sistem konveyor otomatis.",
    solutions: ["Air-Gapped OT/IT Network Segmentation", "Armored Single-Mode Fiber Optic Backbone", "Edge IoT Gateway untuk Predictive Maintenance"],
    useCases: [
      { title: "Telemetri Mesin Produksi Real-Time", detail: "Pengambilan data sensor getaran dan suhu mesin untuk pencegahan kerusakan sebelum lini produksi macet." },
      { title: "Segmentasi Jaringan SCADA & PLC", detail: "Isolasi pengontrol logika terprogram dari jaringan internet publik demi mencegah serangan malware industri." },
      { title: "Coverage Wi-Fi Industri Antar Hall Pabrik", detail: "Penyebaran access point bersertifikasi IP67 yang tahan oli, debu, dan suhu tinggi." }
    ]
  },
  {
    name: "Pelabuhan & Maritim",
    slug: "maritime",
    headlineQuote: "Technology across distributed environments.",
    challenge: "Korosi garam laut, area geografis perairan yang luas, pergerakan kapal yang dinamis, dan keterbatasan bandwidth telekomunikasi darat.",
    environment: "Dermaga kontainer, crane pelabuhan, armada kapal tunda, dan kantor syahbandar/operator terminal.",
    solutions: ["Offshore LEO/VSAT Satellite Interconnect", "Harbor-Wide Wireless Mesh & Ruggedized Access Points", "Vessel Fleet Real-Time Telemetry & Tracking"],
    useCases: [
      { title: "Konektivitas Derek Kontainer (STS Crane)", detail: "Komunikasi data wireless latensi rendah antara operator crane dengan Terminal Operating System (TOS)." },
      { title: "Sinkronisasi Logistik Armada Kapal", detail: "Pembaruan otomatis data manifest muatan saat kapal mendekati dermaga melalui link wireless jarak jauh." },
      { title: "CCTV Pengawasan Alur Pelayaran", detail: "Sistem kamera maritim berjangkauan panjang dengan transmisi radio terenkripsi untuk keamanan alur pelabuhan." }
    ]
  },
  {
    name: "Logistik & Pergudangan",
    slug: "logistics",
    headlineQuote: "Visibility across operations.",
    challenge: "Blokade sinyal Wi-Fi akibat rak baja tinggi dan tumpukan barang padat, mobilitas tinggi armada forklift, dan kebutuhan pelacakan barcode real-time.",
    environment: "Gudang berpendingin (cold storage), pusat sortir otomatis, dermaga muat (loading dock), dan armada truk.",
    solutions: ["High-Density Directional Antenna Wi-Fi", "Automated RFID & Handheld Scanner Mesh", "Real-Time WMS/ERP Sub-Second Synchronization"],
    useCases: [
      { title: "Seamless Roaming Handheld Scanner", detail: "Pencegahan putus koneksi pemindai barcode saat petugas bergerak cepat di antara lorong rak setinggi 12 meter." },
      { title: "Monitoring Suhu Gudang Cold Storage", detail: "Sensor nirkabel IoT yang memantau suhu minus 25°C dan mengirimkan peringatan instan jika terjadi kenaikan suhu." },
      { title: "Manajemen Gerbang Masuk Truk Otomatis", detail: "Integrasi kamera pembaca plat nomor (ANPR) dengan sistem gerbang logistik untuk mempercepat antrean muat." }
    ]
  },
  {
    name: "Properti & Kawasan Komersial",
    slug: "property",
    headlineQuote: "Intelligent foundations for modern spaces.",
    challenge: "Kepadatan pengguna yang tinggi, kebutuhan integrasi sistem gedung (BMS, CCTV, akses kontrol), dan estetika instalasi kabel tersembunyi.",
    environment: "Gedung perkantoran Grade A, mall komersial, apartemen modern, dan kawasan mixed-use terpadu.",
    solutions: ["Structured Fiber-to-the-Room (FTTR) Cabling", "High-Density Wi-Fi 7 with Captive Portal", "Integrated Building Management System (BMS) Network"],
    useCases: [
      { title: "Backbone Serat Optik Gedung 40 Lantai", detail: "Pemasangan riser fiber tunggal berkecepatan 40Gbps yang melayani seluruh penyewa kantor secara independen." },
      { title: "Sistem Parkir & Akses Terintegrasi", detail: "Jaringan tertutup berlatensi nol untuk pembacaan kartu RFID dan pembayaran non-tunai di seluruh gerbang parkir." },
      { title: "Jaringan CCTV Terpadu Ribuan Titik", detail: "Arsitektur switching PoE cerdas yang menjamin rekaman video 4K tersimpan tanpa frame drop ke ruang kontrol." }
    ]
  },
  {
    name: "Perhotelan & Hospitality",
    slug: "hospitality",
    headlineQuote: "Seamless guest experience and operational continuity.",
    challenge: "Ekspektasi tamu atas internet cepat tanpa kendala, kepadatan perangkat mobile di area ballroom, dan perlindungan privasi data tamu.",
    environment: "Kamar hotel, lobi utama, convention hall, restoran, dan area operasional housekeeping/front desk.",
    solutions: ["In-Room In-Wall Access Points", "Ballroom High-Density Roaming Wi-Fi", "Dedicated VLAN Isolation for Property Management System (PMS)"],
    useCases: [
      { title: "Wi-Fi Privat per Kamar Hotel", detail: "Tamu mendapatkan jaringan terisolasi sendiri sehingga perangkat casting (Chromecast) tidak terlihat oleh kamar sebelah." },
      { title: "Jaringan Event & Konferensi Internasional", detail: "Penyediaan koneksi bandwidth terdedikasi simetris hingga 1Gbps untuk ribuan peserta seminar internasional." },
      { title: "Sistem Komunikasi Operasional Staf", detail: "Jaringan suara nirkabel (VoWiFi) yang memungkinkan staf berkomunikasi jernih di seluruh lantai gedung." }
    ]
  },
  {
    name: "Korporasi & Enterprise",
    slug: "enterprise",
    headlineQuote: "Systems designed to scale.",
    challenge: "Struktur organisasi kompleks, kepatuhan audit keamanan ketat, volume transmisi data internal besar, dan kebutuhan adopsi AI terarah.",
    environment: "Headquarters multi-lantai, kantor perwakilan daerah, server room privat, dan ruang rapat eksekutif.",
    solutions: ["SD-WAN Inter-Branch Encrypted Mesh", "Zero-Trust Identity Access & SSO", "Sovereign Private Cloud & Knowledge Base AI"],
    useCases: [
      { title: "Unified Multi-Branch SD-WAN", detail: "Penggabungan 50 kantor cabang ke dalam satu topologi jaringan aman dengan prioritas otomatis untuk aplikasi ERP." },
      { title: "Penerapan Single Sign-On & Zero-Trust", detail: "Karyawan mengakses aplikasi internal hanya setelah verifikasi multi-faktor dan pemeriksaan status kepatuhan laptop." },
      { title: "Knowledge Assistant Divisi Hukum & Keuangan", detail: "Model AI privat yang mengindeks seluruh kontrak internal untuk penelusuran klausul hukum dalam hitungan detik." }
    ]
  },
  {
    name: "Pemerintahan & Institusi Publik",
    slug: "government",
    headlineQuote: "Secure digital foundations.",
    challenge: "Regulasi kedaulatan data nasional yang ketat, pencegahan kebocoran data rahasia negara, dan ketersediaan layanan publik 24/7.",
    environment: "Pusat komputasi instansi, kantor kementerian/lembaga daerah, command center, dan portal layanan masyarakat.",
    solutions: ["Sovereign On-Premise Data Center Tier-3", "Air-Gapped Private Cloud & Cryptographic Vault", "ISO 27001 & BSSN Security Compliance Framework"],
    useCases: [
      { title: "Pusat Data Mandiri Pemerintah Daerah", detail: "Pembangunan data center regional berstandar kedaulatan data untuk menyatukan seluruh aplikasi dinas dalam satu atap." },
      { title: "Command Center Pemantauan Kota Terpadu", detail: "Jaringan serat optik tertutup yang menghubungkan ratusan sensor lalu lintas dan CCTV ke layar ruang komando." },
      { title: "Enkripsi Komunikasi Data Antar Lembaga", detail: "Implementasi terowongan IPSec terenkripsi dengan hardware security module (HSM) yang lolos verifikasi keamanan sandi." }
    ]
  },
  {
    name: "Badan Usaha Milik Negara (BUMN)",
    slug: "bumn",
    headlineQuote: "Mission-critical scale and national impact.",
    challenge: "Skala operasional masif di seluruh nusantara, tata kelola pengadaan yang diaudit ketat, dan kewajiban ketahanan infrastruktur strategis nasional.",
    environment: "Kantor pusat korporasi BUMN, instalasi aset vital nasional, anak perusahaan, dan sentra operasional lapangan.",
    solutions: ["Carrier-Neutral Nationwide SD-WAN", "Enterprise Infrastructure Procurement & Integration", "On-Premise Private AI Knowledge Management"],
    useCases: [
      { title: "Konsolidasi Infrastruktur TI Holding BUMN", detail: "Penyelarasan standar perangkat keras dan arsitektur cloud privat di seluruh anak usaha dalam satu holding." },
      { title: "Disaster Recovery Center (DRC) Skala Nasional", detail: "Pembangunan fasilitas replikasi data antar pulau dengan jaminan pemulihan instan saat terjadi krisis darurat." },
      { title: "Otomasi Dokumen Pengadaan & Kontrak", detail: "AI enterprise lokal yang memverifikasi kepatuhan ribuan berkas vendor terhadap regulasi pengadaan BUMN secara otomatis." }
    ]
  }
];

export const INSIGHTS = [
  {
    id: "why-private-ai-becoming-enterprise-infrastructure-decision",
    slug: "why-private-ai-becoming-enterprise-infrastructure-decision",
    title: "Why Private AI Is Becoming an Enterprise Infrastructure Decision",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "March 2026",
    readTime: "8 min read",
    snippet: "Mengapa mengandalkan API model bahasa publik pihak ketiga membawa risiko kepatuhan hukum dan kerahasiaan data, serta bagaimana korporasi modern kini memindahkan beban kerja inferensi AI langsung ke data center privat mereka sendiri.",
    content: "Di era kecerdasan buatan saat ini, banyak organisasi tergiur dengan kemudahan API model bahasa publik. Namun, bagi sektor perbankan, manufaktur, institusi pemerintah, dan korporasi besar, mengekspos data internal ke server pihak ketiga adalah risiko eksistensial. Membangun Private AI on-premise bukan lagi sekadar eksperimen software, melainkan keputusan infrastruktur fundamental yang memerlukan kesiapan daya komputasi GPU, arsitektur RAG, dan isolasi jaringan yang kokoh..."
  },
  {
    id: "building-infrastructure-ready-for-ai",
    slug: "building-infrastructure-ready-for-ai",
    title: "Building Infrastructure Ready for AI",
    category: "PHYSICAL ARCHITECTURE",
    date: "March 2026",
    readTime: "6 min read",
    snippet: "Persyaratan daya densitas tinggi, pendinginan presisi in-row, dan interkoneksi serat optik 400G yang dibutuhkan untuk menyokong kluster komputasi AI modern.",
    content: "Kluster pelatihan dan inferensi AI memerlukan kerapatan daya listrik hingga 30–50 kW per rack, jauh melampaui rata-rata data center konvensional (5–8 kW). Tanpa sistem pendingin in-row yang presisi dan arsitektur jaringan RoCEv2 berkecepatan 400G, server komputasi AI akan mengalami thermal throttling dan packet drop yang merusak performa model..."
  },
  {
    id: "cybersecurity-starts-with-architecture",
    slug: "cybersecurity-starts-with-architecture",
    title: "Cybersecurity Starts with Architecture",
    category: "ZERO-TRUST DEFENSE",
    date: "February 2026",
    readTime: "7 min read",
    snippet: "Mengapa firewall konvensional tidak lagi memadai dan bagaimana segmentasi mikro serta continuous identity verification melindungi data korporasi dari pergerakan lateral peretas.",
    content: "Kesalahan umum banyak organisasi adalah menganggap keamanan siber semata-mata produk software tambahan. Padahal, celah pada layer fisik, ketiadaan segmentasi VLAN, dan hak akses yang terlalu longgar dapat meruntuhkan firewall termahal sekalipun. Pendekatan arsitektur Zero-Trust memastikan bahwa setiap permintaan akses diverifikasi secara terus menerus..."
  },
  {
    id: "from-it-infrastructure-to-intelligent-infrastructure",
    slug: "from-it-infrastructure-to-intelligent-infrastructure",
    title: "From IT Infrastructure to Intelligent Infrastructure",
    category: "SYSTEM EVOLUTION",
    date: "February 2026",
    readTime: "5 min read",
    snippet: "Pergeseran paradigma dari sekadar memelihara server pasif menuju orkestrasi sistem komputasi adaptif yang mampu belajar, memprediksi anomali, dan memulihkan diri secara otonom.",
    content: "Infrastruktur modern bukan lagi tentang tumpukan server pasif yang menunggu rusak sebelum diperbaiki. Dengan mengintegrasikan sensor telemetri cerdas dan otomasi pemeliharaan, server dapat memberikan peringatan sebelum kegagalan memori terjadi dan secara otomatis memindahkan beban kerja tanpa mengganggu pengguna akhir..."
  },
  {
    id: "on-premise-ai-when-does-it-make-sense",
    slug: "on-premise-ai-when-does-it-make-sense",
    title: "On-Premise AI: When Does It Make Sense?",
    category: "EXECUTIVE PERSPECTIVE",
    date: "January 2026",
    readTime: "9 min read",
    snippet: "Analisis pragmatis komparasi biaya jangka panjang (TCO), kedaulatan regulasi UU PDP, dan latensi inferensi untuk pimpinan teknologi dalam menentukan strategi AI mandiri.",
    content: "Ketika organisasi mulai menggunakan kecerdasan buatan pada jutaan token per hari untuk memproses faktur, dokumen pengapalan, atau dokumen hukum, biaya langganan API cloud melonjak drastis. Berinvestasi pada server inferensi lokal sering kali mencapai titik impas (ROI) dalam waktu 9–14 bulan, sembari memberikan kedaulatan data mutlak yang siap diaudit regulator..."
  },
  {
    id: "why-network-architecture-matters-for-ai-adoption",
    slug: "why-network-architecture-matters-for-ai-adoption",
    title: "Why Network Architecture Matters for AI Adoption",
    category: "NETWORKING & AI",
    date: "January 2026",
    readTime: "6 min read",
    snippet: "Mengapa latensi dan kehilangan paket data (packet loss) pada jaringan lokal dapat melumpuhkan performa inferensi AI, dan bagaimana topologi non-blocking mengatasinya.",
    content: "Banyak perusahaan berinvestasi pada GPU canggih namun kecewa ketika respons AI tetap lambat. Masalahnya kerap kali berada pada jaringan lokal: switch konvensional dengan buffer kecil mengalami bufferbloat saat bertukar vektor embedding berukuran besar. Artikel ini membedah arsitektur jaringan non-blocking yang dirancang khusus untuk beban kerja AI..."
  }
];

export const COMPANY_PROFILE = {
  legalName: "PT ARKAPRANA TEKNOLOGI NUSANTARA",
  brandName: "ARKAPRANA",
  descriptor: "Technology & Intelligent Solutions",
  tagline: "BUILD. CONNECT. INTELLIGENCE.",
  taglineAlt: "Engineering the Digital Future. Membangun Fondasi Digital, Menghadirkan Kecerdasan.",
  positioning: "ARKAPRANA adalah perusahaan teknologi yang membantu organisasi membangun infrastruktur digital, mengintegrasikan sistem, mengamankan operasional, mengelola lingkungan IT, dan mengembangkan intelligent solutions.",
  brandPhilosophy: "BUILD THE FOUNDATION. CONNECT THE SYSTEMS. ENABLE THE INTELLIGENCE.",
  summary: "ARKAPRANA adalah perusahaan teknologi yang membantu organisasi membangun infrastruktur digital, mengintegrasikan sistem, mengamankan operasional, mengelola lingkungan IT, dan mengembangkan intelligent solutions.",
  vision: "Menjadi perusahaan teknologi Indonesia yang menghadirkan infrastruktur digital, layanan IT, keamanan siber, cloud, integrasi sistem, dan kecerdasan buatan yang terintegrasi, aman, dan adaptif bagi organisasi di Indonesia dan pasar global.",
  missions: [
    "Membangun infrastruktur digital yang andal dan scalable.",
    "Menghadirkan layanan teknologi yang responsif dan berkelanjutan.",
    "Meningkatkan keamanan dan ketahanan digital organisasi.",
    "Mengintegrasikan cloud, automation, dan modern IT infrastructure.",
    "Mengembangkan solusi AI yang praktis untuk kebutuhan enterprise.",
    "Membangun talenta teknologi Indonesia.",
    "Menjadi technology partner jangka panjang bagi organisasi."
  ],
  strategicJourney: [
    "INFRASTRUCTURE",
    "NETWORK",
    "CLOUD",
    "SECURITY",
    "DATA",
    "AI"
  ],
  ecosystem: [
    "NETWORK",
    "INFRASTRUCTURE",
    "CLOUD",
    "CYBERSECURITY",
    "MANAGED IT",
    "SYSTEM INTEGRATION",
    "DATA",
    "ARTIFICIAL INTELLIGENCE",
    "AUTOMATION"
  ],
  contact: {
    email: "elfano2156@gmail.com",
    phone: "0816-997-963",
    whatsapp: "0816-997-963",
    whatsappUrl: "https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berdiskusi%20tentang%20proyek%20teknologi",
    address: "Indonesia",
    country: "Indonesia"
  }
};




// Legacy compatibility exports
export const APPROACH_STEPS = [
  {
    step: "01",
    title: "CONNECT",
    category: "Network & Connectivity",
    desc: "Membangun jalur komunikasi data berkecepatan tinggi, kabel fiber optik, dan interkoneksi handal antar cabang dan data center."
  },
  {
    step: "02",
    title: "BUILD",
    category: "Infrastructure & Data Center",
    desc: "Mendirikan fondasi komputasi fisik, server enterprise, storage berkinerja tinggi, dan fasilitas data center tangguh."
  },
  {
    step: "03",
    title: "MANAGE",
    category: "Cloud & Managed IT",
    desc: "Mengoperasikan private cloud berdaulat serta pemeliharaan proaktif berbasis SLA untuk menjaga operasional 24/7."
  },
  {
    step: "04",
    title: "SECURE",
    category: "Cybersecurity & Resilience",
    desc: "Melindungi perimeter dan titik akhir data melalui arsitektur zero-trust, firewall next-gen, dan cadangan data tak terhapus."
  },
  {
    step: "05",
    title: "INTELLIGENCE",
    category: "AI & Automation",
    desc: "Mengaktifkan kecerdasan buatan privat dan otomasi cerdas yang langsung memproses data organisasi secara aman."
  }
];



export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "ENGINEERING FIRST",
    summary: "Pendekatan berbasis rekayasa teknis mendalam.",
    description: "Solusi dirancang dengan analisis arsitektural dan engineering ketat, bukan sekadar memindahkan kotak perangkat keras atau penjualan lisensi komersial."
  },
  {
    number: "02",
    title: "INTEGRATED TECHNOLOGY",
    summary: "Satu ekosistem holistik tanpa fragmentasi.",
    description: "Jaringan, komputasi, cloud, keamanan, data, hingga kecerdasan buatan menyatu dalam satu orkestrasi arsitektur yang harmonis dan sinkron."
  },
  {
    number: "03",
    title: "SCALABLE ARCHITECTURE",
    summary: "Dirancang tumbuh bersama ekspansi bisnis.",
    description: "Infrastruktur dibangun secara modular agar organisasi dapat meningkatkan kapasitas komputasi dan bandwidth kapan pun dibutuhkan tanpa downtime."
  },
  {
    number: "04",
    title: "SECURE BY DESIGN",
    summary: "Keamanan bawaan sejak garis pertama cetak biru.",
    description: "Prinsip Zero-Trust, enkripsi end-to-end, dan pemisahan segmen jaringan diintegrasikan langsung pada fondasi arsitektur fisik maupun virtual."
  },
  {
    number: "05",
    title: "BUSINESS-DRIVEN IMPACT",
    summary: "Dampak nyata pada efisiensi dan stabilitas.",
    description: "Setiap investasi teknologi diukur dari kontribusinya terhadap percepatan siklus operasional, pengurangan resiko sistemik, dan efisiensi biaya organisasi."
  },
  {
    number: "06",
    title: "LONG-TERM PARTNER",
    summary: "Komitmen kemitraan berkelanjutan.",
    description: "ARKAPRANA berposisi sebagai mitra strategis jangka panjang yang mengawal fase perencanaan, deployment, hingga managed services berkelanjutan."
  }
];



export const PROJECT_LIFECYCLE = [
  {
    step: "01",
    phase: "DISCOVER",
    desc: "Eksplorasi mendalam kebutuhan bisnis, audit topologi jaringan saat ini, evaluasi resiko, dan penentuan target performa organisasi."
  },
  {
    step: "02",
    phase: "DESIGN",
    desc: "Penyusunan cetak biru arsitektur teknis lengkap: skema pengkabelan, kapasitas komputasi, matriks firewall, dan integrasi AI."
  },
  {
    step: "03",
    phase: "BUILD",
    desc: "Pengadaan hardware resmi, instalasi fisik rak server, penarikan kabel fiber optik, dan konfigurasi sistem operasi inti."
  },
  {
    step: "04",
    phase: "INTEGRATE",
    desc: "Penyambungan antar platform aplikasi, migrasi data, setup pipeline data, dan integrasi model AI ke dalam alur kerja."
  },
  {
    step: "05",
    phase: "SECURE",
    desc: "Penetrasi pengujian (pentest), penerapan kebijakan zero-trust, aktivasi proteksi anti-ransomware, dan uji coba pemulihan bencana (DRP)."
  },
  {
    step: "06",
    phase: "MANAGE",
    desc: "Monitoring sistem aktif 24/7, pemeliharaan berkala terjadwal, pelaporan kinerja bulanan, dan asistensi teknis berbasis SLA."
  }
];



export const BUSINESS_ENGAGEMENT_MODELS = [
  {
    id: "project",
    name: "PROJECT-BASED",
    tagline: "Turnkey Implementation & Engineering",
    description: "Pelaksanaan proyek teknologi terdefinisi dari fase desain, pengadaan komponen, instalasi fisik, hingga serah terima sistem komisioning.",
    deliverables: [
      "Enterprise Network Deployment",
      "Data Center Construction / Fit-out",
      "Private Cloud Migration",
      "Private AI & RAG Engine Setup",
      "System Integration & Commissioning"
    ]
  },
  {
    id: "managed",
    name: "MANAGED SERVICES",
    tagline: "Continuous SLA & Operation Assurance",
    description: "Pengelolaan dan pemeliharaan berkesinambungan untuk memastikan seluruh aset teknologi beroperasi prima tanpa membebani tim internal klien.",
    deliverables: [
      "24/7 Network & Server Monitoring (NOC)",
      "Tier 1-3 Enterprise IT Support",
      "Preventive Hardware & OS Maintenance",
      "Security Patching & Firmware Updates",
      "Disaster Recovery & Backup Drills"
    ]
  },
  {
    id: "intelligent",
    name: "INTELLIGENT SOLUTIONS",
    tagline: "Advanced AI, Automation & Analytics",
    description: "Kemitraan transformasi cerdas untuk mengekstrak nilai nyata dari data korporat melalui asisten pengetahuan dan otomasi proses.",
    deliverables: [
      "Sovereign On-Premise LLM Deployment",
      "Enterprise Vector Knowledge Base",
      "Automated Document Processing (IDP)",
      "Intelligent Decision Analytics",
      "Continuous Model Fine-tuning & Guardrails"
    ]
  }
];



export const CAPABILITIES_SHOWCASE = [
  {
    id: "cap-1",
    title: "High-Density Campus Network Deployment",
    category: "Enterprise Network Infrastructure",
    scope: "Multi-building fiber backbone, redundant core switches, 10Gbps uplinks, Wi-Fi 7 deployment.",
    highlights: ["Redundant core ring topology", "Zero dead-zones in dense operational zones", "Isolated guest & corporate VLANs"]
  },
  {
    id: "cap-2",
    title: "Private Cloud & Hyperconverged Infrastructure",
    category: "Cloud & Virtualization",
    scope: "Cluster komputasi multi-node dengan software-defined storage untuk konsolidasi 120+ virtual machine.",
    highlights: ["Zero single-point-of-failure compute", "Live VM migration without user interruption", "4x compression ratio on all-flash NVMe"]
  },
  {
    id: "cap-3",
    title: "Air-Gapped Sovereign AI Knowledge Assistant",
    category: "Artificial Intelligence & RAG",
    scope: "Sistem kecerdasan buatan on-premise yang memproses ratusan ribu dokumen SOP, kontrak, dan spesifikasi teknis.",
    highlights: ["100% data remains on-premises", "Sub-second semantic document retrieval", "Strict RBAC security per department"]
  },
  {
    id: "cap-4",
    title: "Zero-Trust Perimeter & SOC Telemetry",
    category: "Cybersecurity Deployment",
    scope: "Penerapan firewall lapis ganda, enkripsi transport, dan sistem backup tak terhapus (immutable backup).",
    highlights: ["Real-time threat detection", "Immutable snapshots immune to ransomware", "Automated compliance audit readiness"]
  },
  {
    id: "cap-5",
    title: "Modular Server Room & Data Center Fit-Out",
    category: "Data Center Infrastructure",
    scope: "Desain dan implementasi ruang server standar Tier II dengan pendinginan presisi (precision cooling) & UPS.",
    highlights: ["N+1 redundant power path", "Environmental telemetry (temperature, humidity, fire)", "Clean structured cable organization"]
  },
  {
    id: "cap-6",
    title: "Enterprise Multi-Site SD-WAN Interconnect",
    category: "Managed Network Services",
    scope: "Integrasi jaringan kantor pusat dengan puluhan titik cabang distribusi lintas pulau secara terpusat.",
    highlights: ["Automated traffic prioritization", "Dynamic failover across cellular/fiber links", "Centralized NOC visibility dashboard"]
  }
];

