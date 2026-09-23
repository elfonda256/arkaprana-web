export interface SolutionItem {
  id: string;
  slug: string;
  badge: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  architectureFocus: string;
  deliverables: string[];
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "network",
    slug: "arkaprana-network",
    badge: "01 CONNECT",
    name: "ARKAPRANA NETWORK",
    category: "Network & Connectivity",
    tagline: "High-Availability Infrastructure & Seamless Interconnection",
    description: "Fondasi jaringan korporat generasi baru yang dirancang untuk transmisi data berkecepatan tinggi, stabilitas uptime maksimal, dan latensi ultra-rendah across enterprise sites.",
    iconName: "Network",
    capabilities: [
      "LAN / WAN Architecture",
      "Fiber Optic Backbones",
      "Structured Cabling Standards",
      "Enterprise Wi-Fi 7 & High-Density AP",
      "Mission-Critical Network Infrastructure",
      "24/7 Telemetry & Network Monitoring"
    ],
    architectureFocus: "L1-L4 Networking, Multi-site SD-WAN, Core/Distribution/Access topologies",
    deliverables: ["Site Survey & Heatmap", "Enterprise Switching Matrix", "Redundant Uplinks", "SLA Performance Dashboard"]
  },
  {
    id: "infra",
    slug: "arkaprana-infra",
    badge: "02 BUILD",
    name: "ARKAPRANA INFRA",
    category: "IT Infrastructure & Data Center",
    tagline: "Scalable Compute, Resilient Storage, & Tiered Facilities",
    description: "Rekayasa infrastruktur komputasi dan ruang data center kelas industri yang siap menopang beban kerja intensif, pemrosesan data real-time, dan kontinuitas operasional tanpa henti.",
    iconName: "Server",
    capabilities: [
      "Enterprise High-Density Servers",
      "SAN / NAS / NVMe Flash Storage",
      "Enterprise Virtualization (KVM / VMware / Proxmox)",
      "Tier II/III Data Center Construction",
      "Automated Backup Infrastructure",
      "Mission-Critical Hardware Lifecycle"
    ],
    architectureFocus: "Bare-metal Compute Clusters, Micro-segmentation, Thermal & Power Redundancy",
    deliverables: ["Data Center Blueprint", "Disaster Recovery Site Setup", "Compute Sizing Benchmark", "Hardware Maintenance Matrix"]
  },
  {
    id: "cloud",
    slug: "arkaprana-cloud",
    badge: "03 SCALE",
    name: "ARKAPRANA CLOUD",
    category: "Cloud & Virtualization",
    tagline: "Sovereign Private Cloud & Agile Hybrid Architectures",
    description: "Implementasi private cloud berdaulat dan hybrid cloud elastis yang memberikan kontrol penuh atas residensi data, efisiensi resource, dan skalabilitas dinamis.",
    iconName: "Cloud",
    capabilities: [
      "On-Premise Sovereign Private Cloud",
      "Hybrid Cloud Interconnect",
      "High-Performance Virtual Machines",
      "Seamless Cloud Migration & Refactoring",
      "Unified Infrastructure Management",
      "Automated Business Continuity"
    ],
    architectureFocus: "OpenStack / Cloud-Native Orchestration, Distributed Object Storage, Multi-Cloud Gateways",
    deliverables: ["Cloud Migration Roadmap", "Self-Service Orchestration Portal", "RTO/RPO Compliance Blueprint", "Cost Optimization Audit"]
  },
  {
    id: "secure",
    slug: "arkaprana-secure",
    badge: "04 DEFEND",
    name: "ARKAPRANA SECURE",
    category: "Cybersecurity & Digital Resilience",
    tagline: "Zero-Trust Architecture & Threat Mitigation",
    description: "Pertahanan siber berlapis yang melindungi aset digital organisasi dari layer hardware hingga aplikasi melalui arsitektur zero-trust dan pemantauan ancaman proaktif.",
    iconName: "ShieldCheck",
    capabilities: [
      "Next-Gen Network Security & Micro-Firewall",
      "EDR / XDR Endpoint Hardening",
      "Next-Generation Firewall (NGFW)",
      "Zero-Trust Identity & Access Control (IAM)",
      "Continuous Security Telemetry Monitoring",
      "Air-Gapped Immutable Backup & Recovery"
    ],
    architectureFocus: "Zero Trust Network Access (ZTNA), Perimeter Defense, SOC Automation, Cryptographic Vaults",
    deliverables: ["Vulnerability Assessment Report", "Zero-Trust Deployment Framework", "Incident Response Protocol", "Compliance Readiness (ISO 27001/NIST)"]
  },
  {
    id: "managed",
    slug: "arkaprana-managed",
    badge: "05 OPERATE",
    name: "ARKAPRANA MANAGED",
    category: "Managed IT & Operation Services",
    tagline: "Guaranteed SLA, Preventive Care & NOC Support",
    description: "Layanan pengelolaan ekosistem IT komprehensif dengan komitmen SLA ketat, monitoring berkelanjutan 24/7, serta perawatan preventif demi stabilitas sistem bisnis tanpa jeda.",
    iconName: "Cpu",
    capabilities: [
      "24/7/365 Dedicated IT Support Tier 1-3",
      "Proactive Infrastructure Monitoring",
      "Real-time Server & Telemetry Monitoring",
      "End-to-End Network Health Monitoring",
      "Scheduled Preventive Maintenance",
      "Strict SLA-based Service Management"
    ],
    architectureFocus: "ITIL 4 Aligned Operations, Centralized NOC Observability, Automated Alert Remediation",
    deliverables: ["Guaranteed SLA Agreement", "Monthly Executive Health Report", "Rapid On-Site Support Protocol", "Lifecycle Asset Ledger"]
  },
  {
    id: "ai",
    slug: "arkaprana-ai",
    badge: "06 INTELLIGENCE",
    name: "ARKAPRANA AI",
    category: "Artificial Intelligence & Automation",
    tagline: "Private Enterprise AI & Sovereign Cognitive Systems",
    description: "Platform kecerdasan buatan terintegrasi yang beroperasi di dalam perimeter keamanan Anda. Mengubah data internal menjadi kecerdasan operasional, asisten cerdas, dan otomatisasi alur kerja.",
    iconName: "BrainCircuit",
    capabilities: [
      "Air-Gapped Sovereign Private AI",
      "Enterprise Internal AI Assistant",
      "Semantic Knowledge Base & Search",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Intelligent Document Processing (IDP)",
      "Autonomous Workflow Automation",
      "Predictive & Operational AI Analytics"
    ],
    architectureFocus: "Local LLM Inference Clusters, Vector Embeddings Pipeline, Strict Context Guards, Data Privacy By-Design",
    deliverables: ["On-Premise AI Model Engine", "Enterprise Knowledge Vector Store", "Document Extraction Pipeline", "Employee AI Workflow Interface"]
  },
  {
    id: "integration",
    slug: "arkaprana-integration",
    badge: "07 UNIFY",
    name: "ARKAPRANA INTEGRATION",
    category: "Technology Integration & Advisory",
    tagline: "End-to-End Engineering, Procurement, & Turnkey Delivery",
    description: "Integrasi menyeluruh seluruh komponen teknologi—dari pengadaan perangkat keras standar industri, perancangan arsitektur, hingga implementasi operasional terpadu.",
    iconName: "Workflow",
    capabilities: [
      "Comprehensive System Integration",
      "Strategic Technology Consulting",
      "Enterprise Infrastructure Blueprinting",
      "Hardware & Software Enterprise Procurement",
      "Turnkey Deployment & Commissioning",
      "Full Post-Deployment Handover & Training"
    ],
    architectureFocus: "Turnkey Enterprise IT Project Management, Vendor-Agnostic Engineering, End-to-End Systems Interop",
    deliverables: ["Comprehensive Solution Blueprint", "Procurement Bill of Materials", "Deployment Gantt & Commissioning Log", "Admin & Operator Knowledge Transfer"]
  }
];

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

export const INDUSTRIES = [
  {
    name: "Manufacturing",
    icon: "Factory",
    headline: "Industrial Edge, Automation & Real-Time Telemetry",
    solutions: "Industrial connectivity, infrastructure monitoring, cybersecurity, automation.",
    description: "Mendukung pabrik cerdas dengan jaringan deterministik, sensor telemetri latensi rendah, proteksi jaringan operasional (OT/ICS), dan otomasi inventori."
  },
  {
    name: "Shipping & Maritime",
    icon: "Ship",
    headline: "Fleet Connectivity, Cargo Intelligence & Remote Infrastructure",
    solutions: "Private AI, operational intelligence, document automation, network infrastructure.",
    description: "Solusi jaringan tahan cuaca maritim, pemrosesan dokumen logistik otomatis berbasis AI, serta pemantauan armada kapal terintegrasi satelit dan darat."
  },
  {
    name: "Construction",
    icon: "HardHat",
    headline: "Project Site Connectivity & Central Engineering Data",
    solutions: "Project connectivity, site network, server, collaboration infrastructure.",
    description: "Infrastruktur jaringan modular cepat gelar di lokasi proyek konstruksi, sinkronisasi model BIM berkecepatan tinggi, dan sistem backup lapangan."
  },
  {
    name: "Government",
    icon: "Landmark",
    headline: "Sovereign Digital Foundation & Secure Public Service Systems",
    solutions: "Secure infrastructure, private cloud, data management, AI knowledge systems.",
    description: "Private cloud berdaulat dalam negeri, enkripsi data publik sesuai regulasi nasional, dan asisten pengetahuan internal untuk arsip peraturan perundang-undangan."
  },
  {
    name: "BUMN & Enterprise",
    icon: "Building2",
    headline: "Large-Scale IT Modernization & High-Resilience Systems",
    solutions: "Data center infrastructure, multi-site network, disaster recovery, private AI.",
    description: "Pembaruan infrastruktur berskala nasional dengan standar high availability 99.99%, pemulihan bencana multi-lokasi, dan integrasi big data terpadu."
  },
  {
    name: "Logistics & Supply Chain",
    icon: "Truck",
    headline: "End-to-End Tracking Infrastructure & Warehouse Network",
    solutions: "Warehouse Wi-Fi 7, IoT network, predictive analytics, SLA monitoring.",
    description: "Konektivitas stabil di area pergudangan berdensitas tinggi, pelacakan rute cerdas, dan dashboard ketersediaan armada berbasis data analitik."
  },
  {
    name: "Property & Smart Real Estate",
    icon: "Building",
    headline: "Building Management Network & Integrated Fiber Infrastructure",
    solutions: "FTTH backbone, intelligent surveillance network, BMS integration.",
    description: "Pemasangan tulang punggung serat optik gedung perkantoran, jaringan keamanan terpusat, dan integrasi sistem otomasi pendingin serta daya."
  },
  {
    name: "Hospitality",
    icon: "Hotel",
    headline: "Seamless Guest Connectivity & High-Capacity Hospitality Network",
    solutions: "High-density guest Wi-Fi, POS secure network, PBX integration.",
    description: "Infrastruktur jaringan tanpa jeda untuk resor dan hotel bintang lima dengan segmentasi aman antara data tamu dan operasional internal."
  },
  {
    name: "Engineering Companies",
    icon: "Wrench",
    headline: "Compute Power for Simulation, CAD & Technical Workloads",
    solutions: "High-performance compute clusters, NAS storage, secure collaboration.",
    description: "Server berkemampuan komputasi tinggi untuk render 3D, simulasi fluida & struktur, serta penyimpanan berkapasitas besar dengan throughput gigabit."
  },
  {
    name: "Financial & Business Services",
    icon: "BadgeDollarSign",
    headline: "Zero-Latency Financial Security & Immutable Audit Logs",
    solutions: "Zero-trust network access, audit-ready data storage, compliance security.",
    description: "Enkripsi berlapis untuk transaksi finansial, kepatuhan OJK/BI, audit trail permanen, serta sistem backup anti-ransomware."
  },
  {
    name: "Education & Campus",
    icon: "GraduationCap",
    headline: "Campus-Wide Digital Ecosystem & High-Bandwidth Wi-Fi",
    solutions: "Campus network core, digital library server, e-learning cloud.",
    description: "Jaringan terdistribusi untuk ribuan mahasiswa simultan, laboratorium komputasi virtual, serta manajemen identitas terpadu."
  },
  {
    name: "Healthcare",
    icon: "HeartPulse",
    headline: "PACS Medical Imaging Storage & Critical Hospital Network",
    solutions: "PACS storage infrastructure, uninterrupted clinical network, HIPAA/GDPR guard.",
    description: "Arsip gambar medis berkapasitas terabyte dengan latensi kilat di ruang operasi, dan pemisahan ketat rekam medis pasien."
  }
];

export const ARCHITECTURE_LAYERS = [
  { level: "08", name: "USER / ORGANIZATION", detail: "Multi-branch employees, leadership dashboards, clients, and authenticated stakeholders.", icon: "Users" },
  { level: "07", name: "APPLICATIONS", detail: "ERP, CRM, Core Business Systems, Collaboration Tools, and Web Platforms.", icon: "LayoutGrid" },
  { level: "06", name: "AI & AUTOMATION", detail: "Private LLM inference engines, RAG context processors, autonomous workflow pipelines.", icon: "BrainCircuit" },
  { level: "05", name: "DATA & KNOWLEDGE", detail: "Semantic vector databases, structured relational DBs, un-structured document repositories.", icon: "Database" },
  { level: "04", name: "CLOUD / VIRTUALIZATION", detail: "Sovereign on-premise private clouds, hybrid interconnects, VM hypervisors, and container clusters.", icon: "CloudCog" },
  { level: "03", name: "CYBERSECURITY LAYER", detail: "Zero-trust policy engine, next-gen firewalls, endpoint XDR, and immutable backup safeguards.", icon: "Shield" },
  { level: "02", name: "NETWORK & CONNECTIVITY", detail: "Core fiber optic backbones, SD-WAN multi-site routing, high-density enterprise switching.", icon: "Share2" },
  { level: "01", name: "PHYSICAL INFRASTRUCTURE", detail: "Tier-grade data centers, server racks, precision cooling, clean power distribution, cabling plant.", icon: "Boxes" }
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

export const INSIGHTS = [
  {
    id: "why-private-ai-matters",
    title: "Why Private AI Matters for Enterprise Data",
    category: "Artificial Intelligence",
    date: "March 2026",
    readTime: "6 min read",
    snippet: "Mengapa mengunggah dokumen sensitif dan data intelektual perusahaan ke model cloud publik membawa resiko kepatuhan dan bagaimana Private AI on-premise menjadi solusi berdaulat.",
    content: "Di era kecerdasan buatan saat ini, banyak organisasi tergiur dengan efisiensi LLM publik. Namun, bagi sektor perbankan, manufaktur militer, institusi pemerintah, dan korporasi besar, kebocoran data rahasia ke server luar negeri adalah resiko eksistensial. Arsitektur Private AI ARKAPRANA memproses seluruh model dan embedding secara lokal di dalam perimeter server perusahaan Anda..."
  },
  {
    id: "building-secure-enterprise-network",
    title: "Building a Secure Enterprise Network: From Cable to Cloud",
    category: "Networking & Security",
    date: "March 2026",
    readTime: "7 min read",
    snippet: "Keamanan jaringan bukan hanya soal membeli firewall mahal. Arsitektur keamanan sejati harus dibangun mulai dari layer fisik, segmentasi VLAN, hingga kontrol identitas terpadu.",
    content: "Kesalahan umum banyak organisasi adalah menganggap keamanan siber semata-mata software. Padahal, celah fisik pada patch panel, ketiadaan segmentasi pada layer 2, dan akses Wi-Fi yang tidak terisolasi dapat meruntuhkan firewall termahal sekalipun. Kami membedah pendekatan engineering berlapis..."
  },
  {
    id: "it-infra-to-intelligent-infra",
    title: "From IT Infrastructure to Intelligent Infrastructure",
    category: "Digital Transformation",
    date: "February 2026",
    readTime: "5 min read",
    snippet: "Bagaimana pergeseran dari sekadar server statis menjadi infrastruktur adaptif yang mampu memantau dirinya sendiri, memprediksi kegagalan hardware, dan mengoptimalkan beban kerja.",
    content: "Infrastruktur modern bukan lagi tentang tumpukan server pasif. Dengan mengintegrasikan telemetri cerdas dan otomasi pemeliharaan, server dapat memberikan peringatan sebelum kegagalan memori terjadi, secara otomatis memindahkan beban kerja tanpa mengganggu pengguna akhir..."
  },
  {
    id: "on-premise-ai-vs-cloud-ai",
    title: "On-Premise AI vs Cloud AI: The Enterprise Decision Matrix",
    category: "Artificial Intelligence",
    date: "February 2026",
    readTime: "8 min read",
    snippet: "Analisis komparatif biaya jangka panjang (TCO), residensi data, latensi inferensi, dan fleksibilitas model antara deployment on-premise vs API publik.",
    content: "Ketika organisasi mulai menggunakan kecerdasan buatan pada jutaan token per hari untuk memproses faktur, dokumen pengapalan, atau dokumen hukum, biaya API cloud melonjak drastis. Berinvestasi pada server inferensi lokal sering kali mencapai titik impas (ROI) dalam waktu kurang dari 12 bulan..."
  },
  {
    id: "cybersecurity-infrastructure-layer",
    title: "Why Cybersecurity Must Start at the Infrastructure Layer",
    category: "Cybersecurity",
    date: "January 2026",
    readTime: "6 min read",
    snippet: "Mengapa software antivirus di ujung tidak lagi memadai dan mengapa arsitektur zero-trust pada layer komputasi fisik menjadi benteng terkuat melawan ancaman modern.",
    content: "Serangan ransomware modern kini menargetkan firmware, bootloader, dan sistem cadangan. Tanpa penyimpanan berfitur immutable backup dan isolasi hardware yang ketat, enkripsi penyerang dapat melumpuhkan seluruh organisasi dalam hitungan menit..."
  },
  {
    id: "preparing-organization-ai-adoption",
    title: "Preparing Your Organization for Enterprise AI Adoption",
    category: "Digital Transformation",
    date: "January 2026",
    readTime: "7 min read",
    snippet: "Langkah-langkah strategis dalam merapikan data silo, standarisasi dokumen korporat, dan penguatan bandwidth sebelum mengimplementasikan agen AI cerdas.",
    content: "Kecerdasan buatan hanya sebaik data yang menjadi makanannya. Sebelum meluncurkan RAG atau asisten internal, organisasi harus membangun pipeline data yang bersih, hak akses yang terstruktur, dan jaringan transmisi internal yang kokoh..."
  }
];

export const COMPANY_PROFILE = {
  legalName: "PT ARKAPRANA TEKNOLOGI NUSANTARA",
  brandName: "ARKAPRANA",
  descriptor: "Technology & Intelligent Solutions",
  tagline: "BUILD. CONNECT. INTELLIGENCE.",
  taglineAlt: "Engineering the Digital Future. Membangun Fondasi Digital, Menghadirkan Kecerdasan.",
  positioning: "Technology company yang membangun dan mengintegrasikan fondasi digital hingga intelligent solutions.",
  summary: "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi terintegrasi mulai dari infrastruktur IT, jaringan, cloud, cybersecurity, managed services hingga artificial intelligence.",
  vision: "Menjadi perusahaan teknologi Indonesia yang menghadirkan infrastruktur digital, layanan IT, keamanan siber, cloud, dan kecerdasan buatan yang terintegrasi, aman, dan adaptif bagi organisasi di Indonesia dan pasar global.",
  missions: [
    "Membangun infrastruktur digital yang reliable dan scalable.",
    "Memberikan layanan teknologi yang responsif dan berkelanjutan.",
    "Meningkatkan keamanan dan ketahanan digital organisasi.",
    "Mengintegrasikan cloud, automation dan modern infrastructure.",
    "Mengembangkan solusi AI yang praktis dan relevan bagi dunia bisnis.",
    "Membangun talenta teknologi Indonesia.",
    "Menjadi technology partner jangka panjang bagi organisasi."
  ],
  contact: {
    email: "elfano2156@gmail.com",
    phone: "0816-997-963",
    whatsapp: "0816-997-963",
    whatsappUrl: "https://wa.me/62816997963?text=Halo%20ARKAPRANA,%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20teknologi",
    address: "Noble House Lantai 28, Mega Kuningan, Jakarta Selatan 12950",
    country: "Indonesia"
  }
};
