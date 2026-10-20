"use client";

import React, { useState, useEffect } from "react";
import NalarSpirograph from "@/components/decorative/NalarSpirograph";
import { ShieldCheck, Lock, Server, Users, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface AuditPillar {
  id: string;
  title: string;
  description: string;
  badgeTitle: string;
  badgeSub: string;
  badgeTag: string;
  icon: React.ElementType;
  metric: string;
}

const AUDIT_PILLARS_MAP: Record<"id" | "en", AuditPillar[]> = {
  id: [
    {
      id: "deployment",
      title: "Penyebaran fleksibel",
      description: "Beroperasi di cloud privat Anda atau sepenuhnya on-premise air-gapped. Data telemetri dan log jaringan Anda tidak pernah meninggalkan lingkungan Anda.",
      badgeTitle: "ON-PREM & CLOUD",
      badgeSub: "Topologi Airgapped",
      badgeTag: "Nol Egress Eksternal",
      icon: Server,
      metric: "100% Hardware Mandiri",
    },
    {
      id: "permission",
      title: "Berbasis izin & hak akses",
      description: "Agen mewarisi peran dan kebijakan akses LDAP/RBAC yang telah ada di organisasi Anda. Setiap jawaban dan aksi dibatasi ketat sesuai hak operator.",
      badgeTitle: "IAM BERBASIS PERAN",
      badgeSub: "Akses Zero-Trust",
      badgeTag: "Isolasi Lingkup Ketat",
      icon: Users,
      metric: "Active Directory / SAML",
    },
    {
      id: "protection",
      title: "Perlindungan data terisolasi",
      description: "Data Anda tidak pernah digunakan melatih model publik. Terenkripsi dalam transit (TLS 1.3 / MACsec) dan at rest dengan brankas HSM terisolasi perangkat keras.",
      badgeTitle: "HSM FIPS 140-3",
      badgeSub: "Segel Perangkat Keras",
      badgeTag: "0% Kebocoran Training",
      icon: Lock,
      metric: "Enkripsi Quantum-Safe",
    },
    {
      id: "compliance",
      title: "Kepatuhan & standar regulasi",
      description: "Memenuhi sertifikasi SOC 2, ISO 27001, dan kepatuhan kedaulatan data Indonesia (UU PDP & POJK) dengan kendali akses kriptografis yang Anda tentukan.",
      badgeTitle: "SOC 2 & PP 71/2019",
      badgeSub: "Residensi data di Indonesia",
      badgeTag: "Standar Audit Enterprise",
      icon: ShieldCheck,
      metric: "Patuh OJK & UU PDP",
    },
  ],
  en: [
    {
      id: "deployment",
      title: "Flexible deployment",
      description: "Runs in your private cloud or fully on-premise air-gapped. Your telemetry and network records never leave your environment.",
      badgeTitle: "ON-PREM & CLOUD",
      badgeSub: "Airgapped Topology",
      badgeTag: "Zero External Egress",
      icon: Server,
      metric: "100% In-House Hardware",
    },
    {
      id: "permission",
      title: "Permission-aware",
      description: "Agents inherit the roles and LDAP/RBAC access policies your organization already has. Every answer stays strictly inside what that operator may see.",
      badgeTitle: "ROLE-BASED IAM",
      badgeSub: "Zero-Trust Access",
      badgeTag: "Strict Scope Isolation",
      icon: Users,
      metric: "Active Directory / SAML",
    },
    {
      id: "protection",
      title: "Data protection",
      description: "Your data never trains public models. Encrypted in transit (TLS 1.3 / MACsec) and at rest with hardware-isolated HSM enclaves.",
      badgeTitle: "FIPS 140-3 HSM",
      badgeSub: "Hardware Sealed",
      badgeTag: "0% Training Leakage",
      icon: Lock,
      metric: "Quantum-Safe Encryption",
    },
    {
      id: "compliance",
      title: "Compliance & standards",
      description: "SOC 2, ISO 27001, and dedicated Indonesian data residency compliance on enterprise plans, with cryptographic access controls you define.",
      badgeTitle: "SOC 2 & PP 71/2019",
      badgeSub: "Data residency in Indonesia",
      badgeTag: "Enterprise Audit Bar",
      icon: ShieldCheck,
      metric: "OJK & UU PDP Compliant",
    },
  ]
};

export default function NalarEnterpriseAuditSection() {
  const [activePillarId, setActivePillarId] = useState<string>("deployment");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const { t, language } = useLanguage();
  const auditPillars = AUDIT_PILLARS_MAP[language] || AUDIT_PILLARS_MAP.id;

  // Automatic cycling every 4.2 seconds (no click required)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActivePillarId((current) => {
        const idx = auditPillars.findIndex((p) => p.id === current);
        const nextIdx = (idx + 1) % auditPillars.length;
        return auditPillars[nextIdx].id;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, auditPillars]);

  return (
    <section 
      className="relative py-24 md:py-36 bg-[#F5F3ED] text-[#141518] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: CENTERED AS REQUESTED */}
        <div className="max-w-3xl mx-auto text-center mb-16 pb-10 border-b border-[#E0DCD2] space-y-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5D0C2] bg-[#EAE6DC] text-[11px] font-mono text-[#52525B]">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-widest uppercase">
              {t("audit_badge", "08 · GOVERNANCE & AUDIT")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-light text-[#111215] tracking-tight leading-[1.15] font-display">
            {t("audit_title", "Built for the enterprise.")}
          </h2>
          <p className="text-xl sm:text-2xl font-light text-[#71717A] tracking-tight leading-snug font-display max-w-2xl mx-auto">
            {t("audit_subtitle", "From deployment to compliance, every layer meets your audit bar.")}
          </p>

          <div className="inline-flex items-center gap-2 pt-1 text-xs font-mono text-[#8E8B82]">
            <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{t("audit_live", "Otomatis memverifikasi arsitektur keamanan live")}</span>
          </div>
        </div>

        {/* 4 Interactive Rows with Automatic Answer Reveal (Replica of Image 2) */}
        <div className="space-y-0 divide-y divide-[#E2DED4]">
          {auditPillars.map((pillar) => {
            const isActive = activePillarId === pillar.id;
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-[#EAE7DF] rounded-2xl p-6 sm:p-8 shadow-sm my-3 border border-[#DBD7CC]"
                    : "py-6 px-4 hover:bg-[#EFECE5] rounded-xl"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Row Title & Active Indicator (Span 3) */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-2.5">
                      <h3 className={`text-base sm:text-lg font-display tracking-tight flex items-center gap-2 transition-colors ${
                        isActive ? "text-[#090A0C] font-semibold" : "text-[#4B5563]"
                      }`}>
                        <span className={`transition-transform duration-300 ${isActive ? "text-[#090A0C] font-bold" : "text-transparent"}`}>—</span>
                        <span>{pillar.title}</span>
                      </h3>
                    </div>
                    {isActive && (
                      <div className="mt-2.5 w-24 h-0.5 bg-[#111215]/20 rounded-full overflow-hidden">
                        <div className="h-full bg-[#111215] animate-[shimmer_4.2s_linear_infinite]" />
                      </div>
                    )}
                  </div>

                  {/* Center Column: Dark Metallic Preview Card (Auto-Displayed on Active, Span 4) */}
                  <div className="lg:col-span-4 flex justify-center">
                    {isActive ? (
                      <div className="w-full max-w-[320px] rounded-2xl bg-[#0D0F16] border border-white/10 p-5 shadow-2xl text-white space-y-3.5 transform transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-[#38BDF8]">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
                              <span>{pillar.badgeTitle}</span>
                              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            </div>
                            <div className="text-[10px] text-white/50 font-mono mt-0.5">
                              {pillar.badgeSub}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#38BDF8] flex items-center gap-1 font-medium">
                            <CheckCircle2 className="size-3" />
                            <span>{language === "en" ? "Verified Architecture" : "Arsitektur Terverifikasi"}</span>
                          </span>
                          <span className="text-white/40">{pillar.badgeTag}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#8E8B82]">
                        <span className="size-1.5 rounded-full bg-[#8E8B82]/50" />
                        <span>{pillar.metric}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Detailed Answer / Description (Span 5) */}
                  <div className="lg:col-span-5">
                    <p className={`text-xs sm:text-sm leading-relaxed font-light transition-colors ${
                      isActive ? "text-[#1F2937] font-normal" : "text-[#4B5563]"
                    }`}>
                      {pillar.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
