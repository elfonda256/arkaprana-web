import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import NalarProductShowcaseSection from "@/components/sections/NalarProductShowcaseSection";
import NalarFloatingAppsSection from "@/components/sections/NalarFloatingAppsSection";
import NalarUsecasesSection from "@/components/sections/NalarUsecasesSection";
import TechnologyEcosystemSection from "@/components/sections/TechnologyEcosystemSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import NalarIndustryCarouselSection from "@/components/sections/NalarIndustryCarouselSection";
import NalarEnterpriseAuditSection from "@/components/sections/NalarEnterpriseAuditSection";
import NalarImpactChartSection from "@/components/sections/NalarImpactChartSection";
import BusinessProblemSection from "@/components/sections/BusinessProblemSection";
import NalarFaqSection from "@/components/sections/NalarFaqSection";
import NalarOrbitalCtaSection from "@/components/sections/NalarOrbitalCtaSection";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata = {
  title: "ARKAPRANA | Technology & Intelligent Solutions",
  description:
    "ARKAPRANA adalah perusahaan teknologi Indonesia yang membantu organisasi membangun infrastruktur digital, mengintegrasikan sistem, mengamankan operasional, mengelola lingkungan IT, dan mengembangkan intelligent solutions.",
  keywords: [
    "IT infrastructure Indonesia",
    "network infrastructure Indonesia",
    "system integrator Indonesia",
    "cybersecurity solutions Indonesia",
    "managed IT services Indonesia",
    "enterprise AI Indonesia",
    "private AI Indonesia",
    "AI automation Indonesia",
    "data center Indonesia"
  ],
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 01. HERO: BUILD. CONNECT. INTELLIGENCE. */}
      <HeroSection />

      <div className="beam-divider" />

      {/* 02. NALARX-STYLE INTERACTIVE HARDWARE SHOWCASE & COMMAND CENTER */}
      <ScrollReveal delayMs={50}>
        <NalarProductShowcaseSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 03. NALARX-STYLE FLOATING APPS CLOUD */}
      <ScrollReveal delayMs={50}>
        <NalarFloatingAppsSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 04. NALARX-STYLE ENTERPRISE USE CASES WITH CINEMATIC PHOTOGRAPHY */}
      <ScrollReveal delayMs={50}>
        <NalarUsecasesSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 05. ECOSYSTEM: Flowing Architecture Laser Highway & Accordion Explorer */}
      <ScrollReveal delayMs={50}>
        <TechnologyEcosystemSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 06. SOLUTIONS AS PRODUCTS: 01 to 07 Enterprise Solutions with Technical Glyphs */}
      <ScrollReveal delayMs={50}>
        <SolutionsSection />
      </ScrollReveal>

      {/* BEAM SEPARATOR AS REQUESTED BY USER (MAUDY-CORPORATE STYLE LIGHT SWEEP) */}
      <div className="beam-divider" />

      {/* 07. NALARX-STYLE INDUSTRY PHOTOGRAPHIC CAROUSEL */}
      <ScrollReveal delayMs={50}>
        <NalarIndustryCarouselSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 08. NALARX-STYLE "BUILT FOR THE ENTERPRISE" AUDIT */}
      <ScrollReveal delayMs={50}>
        <NalarEnterpriseAuditSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 09. NALARX-STYLE "WHY THIS MATTERS IN 2030" STRIPED BAR CHART & METRIC GRID */}
      <ScrollReveal delayMs={50}>
        <NalarImpactChartSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 10. MULTI-VENDOR FRICTION DIAGNOSTIC */}
      <ScrollReveal delayMs={50}>
        <BusinessProblemSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 11. FREQUENTLY ASKED QUESTIONS MINIMALIST ACCORDION */}
      <ScrollReveal delayMs={50}>
        <NalarFaqSection />
      </ScrollReveal>

      <div className="beam-divider" />

      {/* 12. NALARX-STYLE ORBITAL INTEGRATION CTA */}
      <ScrollReveal delayMs={50}>
        <NalarOrbitalCtaSection />
      </ScrollReveal>
    </main>
  );
}
