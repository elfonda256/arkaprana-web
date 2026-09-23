"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface EditorialIndustry {
  number: string;
  name: string;
  headlineQuote: string;
  narrative: string;
  specs: string[];
}

const EDITORIAL_SECTORS: EditorialIndustry[] = [
  {
    number: "01",
    name: "CONSTRUCTION",
    headlineQuote: "Connectivity where projects happen.",
    narrative: "Infrastruktur jaringan lapangan yang tangguh di lingkungan proyek fisik dinamis. Menghubungkan site office, sistem CCTV pengawasan, sensor keselamatan kerja, dan sinkronisasi BIM langsung ke kantor pusat.",
    specs: ["Temporary Long-Range Microwave", "Ruggedized Field Wi-Fi", "Surveillance Telemetry"]
  },
  {
    number: "02",
    name: "MANUFACTURING",
    headlineQuote: "Infrastructure for continuous operations.",
    narrative: "Arsitektur jaringan industri yang memisahkan traffic IT dan OT dengan keamanan tingkat tinggi. Menyediakan compute latensi rendah di lantai pabrik untuk otomasi lini produksi tanpa risiko jeda.",
    specs: ["Air-Gapped OT/IT Segmentation", "Edge IoT Gateway", "Predictive Sensor Pipelines"]
  },
  {
    number: "03",
    name: "MARITIME",
    headlineQuote: "Technology across distributed environments.",
    narrative: "Konektivitas terpadu di pelabuhan, galangan kapal, dan armada lepas pantai. Menyatukan satelit LEO berlatensi rendah dengan jaringan lokal dermaga untuk transmisi data logistik laut berdaulat.",
    specs: ["Offshore VSAT/LEO Satellite", "Harbor-Wide Wireless Mesh", "Vessel Fleet Telemetry"]
  },
  {
    number: "04",
    name: "LOGISTICS",
    headlineQuote: "Visibility across operations.",
    narrative: "Transparansi alur barang secara real-time di seluruh pergudangan dan hub distribusi. Wi-Fi berdaya jelajah tinggi di antara rak baja dan integrasi langsung ke sistem manajemen rantai pasok.",
    specs: ["High-Density Warehouse Wi-Fi", "Automated RFID/Barcode Mesh", "Real-Time WMS/ERP Sync"]
  },
  {
    number: "05",
    name: "ENTERPRISE",
    headlineQuote: "Systems designed to scale.",
    narrative: "Tulang punggung digital terpadu untuk kantor korporasi multi-lantai dan cabang yang tersebar di nusantara. Dirancang dengan SD-WAN cerdas, kolaborasi aman, dan kesiapan integrasi AI internal.",
    specs: ["Multi-Branch SD-WAN Mesh", "Zero-Trust Identity Fabric", "Enterprise Collaboration Mesh"]
  },
  {
    number: "06",
    name: "GOVERNMENT",
    headlineQuote: "Secure digital foundations.",
    narrative: "Fondasi komputasi dan jaringan kedaulatan data berstandar keamanan nasional. Memastikan kepatuhan regulasi, perlindungan data sensitif publik, dan keberlanjutan layanan publik 24/7.",
    specs: ["Sovereign Private Cloud Vault", "Hardware Security Module (HSM)", "BSSN & ISO 27001 Aligned"]
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-28 md:py-36 bg-[#F8FAFC] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            <span>Mission-Critical Deployments</span>
          </div>

          {/* Headline (Section 14 verbatim) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.08] font-sans">
            Technology for Critical Environments.
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl font-normal">
            Setiap sektor memiliki karakteristik operasional yang khas. ARKAPRANA merekayasa arsitektur teknologi yang disesuaikan secara presisi dengan tuntutan nyata di lapangan.
          </p>
        </div>

        {/* Editorial Layout (Clean 2-Column / 3-Row Grid with Large Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {EDITORIAL_SECTORS.map((sector) => (
            <div
              key={sector.name}
              className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-9 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-100">
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-700">
                    {sector.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                    Sector Specification
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 uppercase font-sans mb-2">
                  {sector.name}
                </h3>

                <div className="text-base sm:text-lg font-serif italic text-neutral-700 mb-4 font-normal">
                  &ldquo;{sector.headlineQuote}&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {sector.narrative}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Architecture Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {sector.specs.map((sp) => (
                    <span
                      key={sp}
                      className="px-2.5 py-1 rounded bg-neutral-50 border border-neutral-200 text-[10.5px] font-mono text-neutral-700"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip to explore all industries */}
        <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs sm:text-sm text-neutral-600">
            Mengelola operasional khusus lainnya di 12 sektor industri Indonesia?
          </span>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-cyan-700 transition-colors"
          >
            <span>Lihat Seluruh 12 Sektor Industri</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
