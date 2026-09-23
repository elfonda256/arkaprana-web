import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import TechnologyEcosystemSection from "@/components/sections/TechnologyEcosystemSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import FindYourSolutionSection from "@/components/sections/FindYourSolutionSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import EngineeringApproachSection from "@/components/sections/EngineeringApproachSection";
import MeetAiSection from "@/components/sections/MeetAiSection";
import InsightsSection from "@/components/sections/InsightsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata = {
  title: "ARKAPRANA | Technology & Intelligent Solutions",
  description:
    "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi infrastructure, network, cloud, cybersecurity, managed IT, system integration, automation dan artificial intelligence.",
  keywords: [
    "IT Infrastructure Indonesia",
    "Network Infrastructure Indonesia",
    "System Integrator Indonesia",
    "Cybersecurity Indonesia",
    "Cloud Infrastructure Indonesia",
    "Managed IT Services Indonesia",
    "Artificial Intelligence Indonesia",
    "Private AI Indonesia",
    "Enterprise AI Indonesia",
    "Data Center Indonesia",
  ],
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 01. [DARK] HERO: BUILD. CONNECT. INTELLIGENCE. */}
      <HeroSection />

      {/* 02 & 03. [LIGHT] POSITIONING & PROBLEM: "Technology shouldn't be fragmented. ARKAPRANA connects them." */}
      <ValuePropositionSection />

      {/* 04. [DARK] ECOSYSTEM: Interactive Architecture Explorer (Center: ARKAPRANA) */}
      <TechnologyEcosystemSection />

      {/* 05. [LIGHT] SOLUTIONS: What ARKAPRANA can build (01 to 07 Product Storytelling) */}
      <SolutionsSection />

      {/* 06. [LIGHT] "FIND YOUR SOLUTION" INTERACTIVE TOOL: "Not sure where to start?" */}
      <FindYourSolutionSection />

      {/* 07. [LIGHT] INDUSTRIES: Where ARKAPRANA can help (9 Critical Environments) */}
      <IndustriesSection />

      {/* 08. [DARK] ENGINEERING: How ARKAPRANA works (7-Step Timeline DISCOVER -> OPTIMIZE) */}
      <EngineeringApproachSection />

      {/* 09. [DARK] AI: Where technology is going ("From Data to Intelligence" + "ARKAPRANA Knowledge" Demo) */}
      <MeetAiSection />

      {/* 10. [LIGHT] INSIGHTS: What ARKAPRANA thinks about (Editorial Technology Magazine) */}
      <InsightsSection />

      {/* 11. [DARK] CTA: Let's build what's next (Smart Lead-Gen Contact Desk) */}
      <FinalCtaSection />
    </main>
  );
}
