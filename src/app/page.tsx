import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import BusinessProblemSection from "@/components/sections/BusinessProblemSection";
import TechnologyEcosystemSection from "@/components/sections/TechnologyEcosystemSection";
import SolutionDiscoverySection from "@/components/sections/SolutionDiscoverySection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import EnvironmentBuilderSection from "@/components/sections/EnvironmentBuilderSection";
import BusinessValueSection from "@/components/sections/BusinessValueSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import EngineeringApproachSection from "@/components/sections/EngineeringApproachSection";
import EngagementModelsSection from "@/components/sections/EngagementModelsSection";
import MeetAiSection from "@/components/sections/MeetAiSection";
import InsightsSection from "@/components/sections/InsightsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FinalSignatureSection from "@/components/sections/FinalSignatureSection";
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
      {/* 01. [DARK] HERO: BUILD. CONNECT. INTELLIGENCE. (Section 04) */}
      <HeroSection />

      {/* 02. [LIGHT] BUSINESS PROBLEM: "Technology becomes complicated when everything is disconnected." (Section 05) */}
      <ScrollReveal delayMs={50}>
        <BusinessProblemSection />
      </ScrollReveal>

      {/* 03. [DARK] ECOSYSTEM: Interactive Architecture Explorer (Section 01 & 30) */}
      <ScrollReveal delayMs={50}>
        <TechnologyEcosystemSection />
      </ScrollReveal>

      {/* 04. [LIGHT] SOLUTION DISCOVERY: "WHAT ARE YOU TRYING TO BUILD?" (Section 06) */}
      <ScrollReveal delayMs={50}>
        <SolutionDiscoverySection />
      </ScrollReveal>

      {/* 05. [LIGHT] SOLUTIONS AS PRODUCTS: 01 to 07 Enterprise Solutions (Section 07 & 08) */}
      <ScrollReveal delayMs={50}>
        <SolutionsSection />
      </ScrollReveal>

      {/* 06. [DARK] BUSINESS SOLUTION BUILDER: "BUILD YOUR TECHNOLOGY ENVIRONMENT" (Section 12) */}
      <ScrollReveal delayMs={50}>
        <EnvironmentBuilderSection />
      </ScrollReveal>

      {/* 07. [LIGHT] BUSINESS VALUE: "Technology should create business value." 5 Themes (Section 15) */}
      <ScrollReveal delayMs={50}>
        <BusinessValueSection />
      </ScrollReveal>

      {/* 08. [LIGHT] INDUSTRIES: Sector Specializations & Real-World Constraints (Section 10 & 11) */}
      <ScrollReveal delayMs={50}>
        <IndustriesSection />
      </ScrollReveal>

      {/* 09. [DARK] PROJECT JOURNEY: "HOW WE WORK" 8-Step Timeline (Section 13) */}
      <ScrollReveal delayMs={50}>
        <EngineeringApproachSection />
      </ScrollReveal>

      {/* 10. [DARK] ENGAGEMENT MODELS: "HOW WE CAN WORK TOGETHER" 5 Models (Section 14) */}
      <ScrollReveal delayMs={50}>
        <EngagementModelsSection />
      </ScrollReveal>

      {/* 11. [DARK] FLAGSHIP AI: "Your data. Your infrastructure. Your intelligence." & AI Questionnaire (Section 16 & 17) */}
      <ScrollReveal delayMs={50}>
        <MeetAiSection />
      </ScrollReveal>

      {/* 12. [LIGHT] INSIGHTS: Authority Building & Architecture Essays (Section 31 & 32) */}
      <ScrollReveal delayMs={50}>
        <InsightsSection />
      </ScrollReveal>

      {/* 13. [DARK] LEAD CONVERSION: Enterprise Inquiry Form & Lead Qualification (Section 25 & 26) */}
      <ScrollReveal delayMs={50}>
        <FinalCtaSection />
      </ScrollReveal>

      {/* 14. [DARK] FINAL SIGNATURE ANIMATION: BUILD THE FOUNDATION. CONNECT THE SYSTEMS. ENABLE THE INTELLIGENCE. (Section 25) */}
      <FinalSignatureSection />
    </main>
  );
}
