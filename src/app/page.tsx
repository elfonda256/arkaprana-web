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
      <BusinessProblemSection />

      {/* 03. [DARK] ECOSYSTEM: Interactive Architecture Explorer (Section 01 & 30) */}
      <TechnologyEcosystemSection />

      {/* 04. [LIGHT] SOLUTION DISCOVERY: "WHAT ARE YOU TRYING TO BUILD?" (Section 06) */}
      <SolutionDiscoverySection />

      {/* 05. [LIGHT] SOLUTIONS AS PRODUCTS: 01 to 07 Enterprise Solutions (Section 07 & 08) */}
      <SolutionsSection />

      {/* 06. [DARK] BUSINESS SOLUTION BUILDER: "BUILD YOUR TECHNOLOGY ENVIRONMENT" (Section 12) */}
      <EnvironmentBuilderSection />

      {/* 07. [LIGHT] BUSINESS VALUE: "Technology should create business value." 5 Themes (Section 15) */}
      <BusinessValueSection />

      {/* 08. [LIGHT] INDUSTRIES: Sector Specializations & Real-World Constraints (Section 10 & 11) */}
      <IndustriesSection />

      {/* 09. [DARK] PROJECT JOURNEY: "HOW WE WORK" 8-Step Timeline (Section 13) */}
      <EngineeringApproachSection />

      {/* 10. [DARK] ENGAGEMENT MODELS: "HOW WE CAN WORK TOGETHER" 5 Models (Section 14) */}
      <EngagementModelsSection />

      {/* 11. [DARK] FLAGSHIP AI: "Your data. Your infrastructure. Your intelligence." & AI Questionnaire (Section 16 & 17) */}
      <MeetAiSection />

      {/* 12. [LIGHT] INSIGHTS: Authority Building & Architecture Essays (Section 31 & 32) */}
      <InsightsSection />

      {/* 13. [DARK] LEAD CONVERSION: Enterprise Inquiry Form & Lead Qualification (Section 25 & 26) */}
      <FinalCtaSection />
    </main>
  );
}
