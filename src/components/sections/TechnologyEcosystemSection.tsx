"use client";

import React, { useState } from "react";
import FlowingArchitectureVisual from "@/components/decorative/FlowingArchitectureVisual";
import EnterpriseAccordionDrawer, {
  AccordionItemData,
} from "@/components/shared/EnterpriseAccordionDrawer";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ARCH_DRAWER_ITEMS_MAP: Record<"id" | "en", AccordionItemData[]> = {
  id: [
    {
      id: "dc",
      title: "Modular DC & Tier-3+ Precision Compute",
      subtitle: "PUE < 1.35 · In-Row precision cooling · 2N redundant dual-bus power",
      badge: "L01_FOUNDATION",
      category: "PHYSICAL FOUNDATION // COMPUTE, POWER & COOLING",
      summary:
        "Desain ruang server modular, pendinginan presisi InRow/CRAC, dan sistem distribusi daya ber-redundansi 2N untuk keandalan operasional tanpa downtime.",
      specs: [
        { label: "PUE Efficiency", value: "1.31 In-Row" },
        { label: "Power Redundancy", value: "2N Dual Bus" },
        { label: "Rack Density", value: "Up to 35kW/Rack" },
        { label: "Cooling Architecture", value: "In-Row Precision Chilled" },
      ],
      vendors: ["Schneider Electric", "Vertiv", "ABB", "Cummins Power"],
      compliance: ["TIA-942 Rated 3", "Uptime Institute Tier III", "ISO 22237"],
      benchmarks: [
        { label: "Thermal Delta-T", value: "11.2°C Stable" },
        { label: "UPS Transfer Time", value: "0ms Seamless" },
        { label: "Generator Autonomy", value: "48 Jam Fuel Active" },
      ],
    },
    {
      id: "optical",
      title: "Carrier-Neutral DWDM Optical Transport",
      subtitle: "Throughput Nx100G · Dual-homing BGP4 · Sub-18ms autonomous failover",
      badge: "L02_TRANSIT",
      category: "CONNECTIVITY HIGHWAY // BACKBONE & TRANSIT",
      summary:
        "Jaringan transmisi serat optik pita lebar multi-lambda dengan interkoneksi carrier-neutral dan proteksi failover otomatis sub-milidetik.",
      specs: [
        { label: "Bandwidth Capacity", value: "Nx100 Gbps" },
        { label: "Failover Reroute", value: "< 18ms Automatic" },
        { label: "Latency Profile", value: "< 3.2ms JKT-SBY" },
        { label: "Topology", value: "Ring Mesh + SD-WAN" },
      ],
      vendors: ["Cisco Systems", "Juniper Networks", "Ciena Optical", "Nokia Deepfield"],
      compliance: ["ITU-T G.694.1 DWDM Grid", "IEEE 802.3ba", "Carrier-Neutral SLA 99.98%"],
      benchmarks: [
        { label: "Optical Jitter", value: "< 0.42ms Average" },
        { label: "Packet Delivery", value: "99.999% SLA" },
        { label: "BGP Convergence", value: "< 1.2s Global" },
      ],
    },
    {
      id: "cloud",
      title: "Airgapped Sovereign Private Cloud",
      subtitle: "Zero external telemetry · Local Ceph NVMe-oF · OpenStack / VMware",
      badge: "L03_SOVEREIGN",
      category: "VIRTUAL FABRIC // PRIVATE COMPUTE & STORAGE",
      summary:
        "Infrastruktur virtualisasi dan storage privat on-premise dengan kedaulatan data penuh tanpa kebocoran telemetri ke cloud publik.",
      specs: [
        { label: "Storage Latency", value: "< 0.4ms NVMe-oF" },
        { label: "Hypervisor Stack", value: "VMware vSphere / OpenStack" },
        { label: "Container Engine", value: "Enterprise Kubernetes K8s" },
        { label: "Data Egress", value: "0% External Cloud Leak" },
      ],
      vendors: ["VMware by Broadcom", "Red Hat OpenShift", "Canonical Ubuntu", "Ceph Enterprise"],
      compliance: ["PP 71 / 2019 (Data Residency RI)", "ISO/IEC 27017", "PCI-DSS 4.0 Scope"],
      benchmarks: [
        { label: "IOPS Performance", value: "1.85M Random 4K" },
        { label: "Snapshot Recovery", value: "< 15s Instant RPO" },
        { label: "Compute Density", value: "128 Cores / 2U Node" },
      ],
    },
    {
      id: "security",
      title: "Zero-Trust Perimeter & FIPS 140-3 HSM",
      subtitle: "Hardware encryption enclaves · Strict RBAC · 24/7 SIEM monitoring",
      badge: "L04_DEFENSE",
      category: "CYBER DEFENSE // CRYPTOGRAPHY & IDENTITY",
      summary:
        "Perlindungan data end-to-end dengan modul keamanan perangkat keras (HSM), isolasi mikrosegmentasi jaringan, dan verifikasi identitas berkelanjutan.",
      specs: [
        { label: "Cryptographic Seal", value: "FIPS 140-3 Level 3" },
        { label: "Segmentation Policy", value: "Micro-segmented Zero-Trust" },
        { label: "SOC Response SLA", value: "< 15 Menit Triage" },
        { label: "Regulatory Standard", value: "UU PDP & OJK Compliance" },
      ],
      vendors: ["Thales Luna HSM", "Fortinet", "Palo Alto Networks", "CrowdStrike"],
      compliance: ["ISO/IEC 27001:2022", "SOC 2 Type II Certified", "UU No. 27/2022 (PDP)"],
      benchmarks: [
        { label: "Key Generation Rate", value: "10,000 RSA-4K/sec" },
        { label: "Lateral Surface", value: "0% Unverified Access" },
        { label: "Threat Containment", value: "Sub-second Automatic" },
      ],
    },
    {
      id: "ai",
      title: "On-Premise Cognitive AI & Enterprise RAG",
      subtitle: "Localized inference · Vector database Qdrant · Zero data exfiltration",
      badge: "L05_INTELLIGENCE",
      category: "COGNITIVE CORE // PRIVATE LLM & AGENTIC WORKFLOWS",
      summary:
        "Model kecerdasan buatan lokal terisolasi yang mengindeks dokumen korporasi dan telemetri jaringan tanpa pernah mengekspos data ke API publik.",
      specs: [
        { label: "Vector Search", value: "< 24ms p99 Latency" },
        { label: "Model Serving", value: "vLLM / TensorRT-LLM" },
        { label: "Context Window", value: "128k Local Context" },
        { label: "Data Leakage", value: "Strictly 0% Outbound" },
      ],
      vendors: ["NVIDIA Enterprise", "Qdrant Vector DB", "HuggingFace Local", "LangChain/LlamaIndex"],
      compliance: ["Enterprise RBAC Governance", "EU AI Act Aligned", "Audit Trail Immutability"],
      benchmarks: [
        { label: "Tokens / Second", value: "142 tok/s Local" },
        { label: "RAG Accuracy", value: "98.4% Domain Precision" },
        { label: "Model Footprint", value: "Airgapped Cluster" },
      ],
    },
  ],
  en: [
    {
      id: "dc",
      title: "Modular DC & Tier-3+ Precision Compute",
      subtitle: "PUE < 1.35 · In-Row precision cooling · 2N redundant dual-bus power",
      badge: "L01_FOUNDATION",
      category: "PHYSICAL FOUNDATION // COMPUTE, POWER & COOLING",
      summary:
        "Modular server room engineering, In-Row precision cooling, and 2N dual-bus power distribution architectures ensuring operational continuity with zero maintenance downtime.",
      specs: [
        { label: "PUE Efficiency", value: "1.31 In-Row" },
        { label: "Power Redundancy", value: "2N Dual Bus" },
        { label: "Rack Density", value: "Up to 35kW/Rack" },
        { label: "Cooling Architecture", value: "In-Row Precision Chilled" },
      ],
      vendors: ["Schneider Electric", "Vertiv", "ABB", "Cummins Power"],
      compliance: ["TIA-942 Rated 3", "Uptime Institute Tier III", "ISO 22237"],
      benchmarks: [
        { label: "Thermal Delta-T", value: "11.2°C Stable" },
        { label: "UPS Transfer Time", value: "0ms Seamless" },
        { label: "Generator Autonomy", value: "48h Fuel Autonomy" },
      ],
    },
    {
      id: "optical",
      title: "Carrier-Neutral DWDM Optical Transport",
      subtitle: "Throughput Nx100G · Dual-homing BGP4 · Sub-18ms autonomous failover",
      badge: "L02_TRANSIT",
      category: "CONNECTIVITY HIGHWAY // BACKBONE & TRANSIT",
      summary:
        "Multi-lambda broadband optical transport backbones with carrier-neutral interconnects and automated sub-millisecond failover protection.",
      specs: [
        { label: "Bandwidth Capacity", value: "Nx100 Gbps" },
        { label: "Failover Reroute", value: "< 18ms Automatic" },
        { label: "Latency Profile", value: "< 3.2ms JKT-SBY" },
        { label: "Topology", value: "Ring Mesh + SD-WAN" },
      ],
      vendors: ["Cisco Systems", "Juniper Networks", "Ciena Optical", "Nokia Deepfield"],
      compliance: ["ITU-T G.694.1 DWDM Grid", "IEEE 802.3ba", "Carrier-Neutral SLA 99.98%"],
      benchmarks: [
        { label: "Optical Jitter", value: "< 0.42ms Average" },
        { label: "Packet Delivery", value: "99.999% SLA" },
        { label: "BGP Convergence", value: "< 1.2s Global" },
      ],
    },
    {
      id: "cloud",
      title: "Airgapped Sovereign Private Cloud",
      subtitle: "Zero external telemetry · Local Ceph NVMe-oF · OpenStack / VMware",
      badge: "L03_SOVEREIGN",
      category: "VIRTUAL FABRIC // PRIVATE COMPUTE & STORAGE",
      summary:
        "On-premise enterprise virtualization and software-defined storage with complete data sovereignty and zero telemetry exfiltration to public clouds.",
      specs: [
        { label: "Storage Latency", value: "< 0.4ms NVMe-oF" },
        { label: "Hypervisor Stack", value: "VMware vSphere / OpenStack" },
        { label: "Container Engine", value: "Enterprise Kubernetes K8s" },
        { label: "Data Egress", value: "0% External Cloud Leak" },
      ],
      vendors: ["VMware by Broadcom", "Red Hat OpenShift", "Canonical Ubuntu", "Ceph Enterprise"],
      compliance: ["PP 71 / 2019 (Data Residency RI)", "ISO/IEC 27017", "PCI-DSS 4.0 Scope"],
      benchmarks: [
        { label: "IOPS Performance", value: "1.85M Random 4K" },
        { label: "Snapshot Recovery", value: "< 15s Instant RPO" },
        { label: "Compute Density", value: "128 Cores / 2U Node" },
      ],
    },
    {
      id: "security",
      title: "Zero-Trust Perimeter & FIPS 140-3 HSM",
      subtitle: "Hardware encryption enclaves · Strict RBAC · 24/7 SIEM monitoring",
      badge: "L04_DEFENSE",
      category: "CYBER DEFENSE // CRYPTOGRAPHY & IDENTITY",
      summary:
        "End-to-end data security with Hardware Security Modules (HSM), network microsegmentation isolation, and continuous identity verification.",
      specs: [
        { label: "Cryptographic Seal", value: "FIPS 140-3 Level 3" },
        { label: "Segmentation Policy", value: "Micro-segmented Zero-Trust" },
        { label: "SOC Response SLA", value: "< 15 Min Triage" },
        { label: "Regulatory Standard", value: "PDP Law & OJK Compliance" },
      ],
      vendors: ["Thales Luna HSM", "Fortinet", "Palo Alto Networks", "CrowdStrike"],
      compliance: ["ISO/IEC 27001:2022", "SOC 2 Type II Certified", "UU No. 27/2022 (PDP)"],
      benchmarks: [
        { label: "Key Generation Rate", value: "10,000 RSA-4K/sec" },
        { label: "Lateral Surface", value: "0% Unverified Access" },
        { label: "Threat Containment", value: "Sub-second Automatic" },
      ],
    },
    {
      id: "ai",
      title: "On-Premise Cognitive AI & Enterprise RAG",
      subtitle: "Localized inference · Vector database Qdrant · Zero data exfiltration",
      badge: "L05_INTELLIGENCE",
      category: "COGNITIVE CORE // PRIVATE LLM & AGENTIC WORKFLOWS",
      summary:
        "Isolated on-premise AI models that index corporate documentation and network telemetry without ever exposing proprietary data to third-party public APIs.",
      specs: [
        { label: "Vector Search", value: "< 24ms p99 Latency" },
        { label: "Model Serving", value: "vLLM / TensorRT-LLM" },
        { label: "Context Window", value: "128k Local Context" },
        { label: "Data Leakage", value: "Strictly 0% Outbound" },
      ],
      vendors: ["NVIDIA Enterprise", "Qdrant Vector DB", "HuggingFace Local", "LangChain/LlamaIndex"],
      compliance: ["Enterprise RBAC Governance", "EU AI Act Aligned", "Audit Trail Immutability"],
      benchmarks: [
        { label: "Tokens / Second", value: "142 tok/s Local" },
        { label: "RAG Accuracy", value: "98.4% Domain Precision" },
        { label: "Model Footprint", value: "Airgapped Cluster" },
      ],
    },
  ]
};

export default function TechnologyEcosystemSection() {
  const [selectedStationId, setSelectedStationId] = useState<string>("dc");
  const { t, language } = useLanguage();
  const drawerItems = ARCH_DRAWER_ITEMS_MAP[language] || ARCH_DRAWER_ITEMS_MAP.id;

  return (
    <section id="technology" className="relative py-24 md:py-36 bg-[#08090D] text-white overflow-hidden border-b border-white/10">
      
      {/* Background Ambient Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="tracking-widest uppercase">
              {t("ecosystem_badge", "03 · ARCHITECTURE · INTEGRATED ECOSYSTEM")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.18] font-display">
            {t("ecosystem_title", "Teknologi Harus Bekerja Sebagai Satu Sistem.")}
          </h2>

          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            {t(
              "ecosystem_desc",
              "Dari ruang server fisik Tier-3 dan jaringan transmisi optik DWDM, hingga cloud privat berdaulat dan otomasi AI otonom — Arkaprana mengintegrasikan seluruh domain rekayasa Anda tanpa fragmentasi."
            )}
          </p>
        </div>

        {/* Nalarx-style Flowing Architecture Laser Highway */}
        <div className="mb-14">
          <FlowingArchitectureVisual
            selectedStationId={selectedStationId}
            onSelectStation={(id) => setSelectedStationId(id)}
          />
        </div>

        {/* Clean, Centered Architectural Domain Drawers (Image 4 Stack Card Removed as Requested) */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 px-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white/60">
              {t("ecosystem_drawers_title", "Architectural Domain Drawers")}
            </span>
            <span className="text-[11px] font-mono text-[#38BDF8] flex items-center gap-1.5">
              <Sparkles className="size-3" />
              <span>{t("ecosystem_drawers_hint", "Klik untuk membuka spesifikasi teknis")}</span>
            </span>
          </div>

          <EnterpriseAccordionDrawer
            items={drawerItems}
            defaultOpenId={selectedStationId}
            onSelect={(id) => setSelectedStationId(id)}
          />
        </div>

      </div>
    </section>
  );
}
