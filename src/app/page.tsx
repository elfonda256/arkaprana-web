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
      {/* 01. [DARK] HERO: BUILD. CONNECT. INTELLIGENCE. (Image 4 Stack Card Removed as Requested) */}
      <HeroSection />

      {/* 02. [DARK] NALARX-STYLE INTERACTIVE HARDWARE SHOWCASE & COMMAND CENTER */}
      <ScrollReveal delayMs={50}>
        <NalarProductShowcaseSection />
      </ScrollReveal>

      {/* 03. [LIGHT] NALARX-STYLE FLOATING APPS CLOUD (IMAGE 3: "Your company runs on dozens of apps...") */}
      <ScrollReveal delayMs={50}>
        <NalarFloatingAppsSection />
      </ScrollReveal>

      {/* 04. [DARK] NALARX-STYLE ENTERPRISE USE CASES WITH CINEMATIC PHOTOGRAPHY & PIPELINE ARCHITECTURE */}
      <ScrollReveal delayMs={50}>
        <NalarUsecasesSection />
      </ScrollReveal>

      {/* 05. [DARK] ECOSYSTEM: Flowing Architecture Laser Highway & Accordion Explorer */}
      <ScrollReveal delayMs={50}>
        <TechnologyEcosystemSection />
      </ScrollReveal>

      {/* 06. [DARK] SOLUTIONS AS PRODUCTS: 01 to 07 Enterprise Solutions with Technical Glyphs */}
      <ScrollReveal delayMs={50}>
        <SolutionsSection />
      </ScrollReveal>

      {/* 07. [DARK] NALARX-STYLE INDUSTRY PHOTOGRAPHIC CAROUSEL (IMAGE 5: 8 Industries, 0 Double Images) */}
      <ScrollReveal delayMs={50}>
        <NalarIndustryCarouselSection />
      </ScrollReveal>

      {/* 08. [LIGHT] NALARX-STYLE "BUILT FOR THE ENTERPRISE" WARM CREAM AUDIT (IMAGE 2: Auto-Revealing Answers) */}
      <ScrollReveal delayMs={50}>
        <NalarEnterpriseAuditSection />
      </ScrollReveal>

      {/* 09. [DARK] NALARX-STYLE "WHY THIS MATTERS IN 2030" STRIPED BAR CHART & METRIC GRID */}
      <ScrollReveal delayMs={50}>
        <NalarImpactChartSection />
      </ScrollReveal>

      {/* 10. [DARK] MULTI-VENDOR FRICTION DIAGNOSTIC */}
      <ScrollReveal delayMs={50}>
        <BusinessProblemSection />
      </ScrollReveal>

      {/* 11. [DARK] FREQUENTLY ASKED QUESTIONS MINIMALIST DARK ACCORDION */}
      <ScrollReveal delayMs={50}>
        <NalarFaqSection />
      </ScrollReveal>

      {/* 12. [DARK] NALARX-STYLE ORBITAL INTEGRATION CTA: "Stop running your business by feel. Start running it with intelligence" */}
      <ScrollReveal delayMs={50}>
        <NalarOrbitalCtaSection />
      </ScrollReveal>
    </main>
  );
}
