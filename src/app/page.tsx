import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StatementSection from "@/components/sections/StatementSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
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
      {/* 01. [DARK] Monumental Brand Hero: BUILD. CONNECT. INTELLIGENCE. */}
      <HeroSection />

      {/* 02. [LIGHT] Arkaprana Thesis Transition: "Technology shouldn't be fragmented." */}
      <StatementSection />

      {/* 03. [LIGHT] Productized Architecture & Solutions as Products */}
      <SolutionsSection />

      {/* 04. [DARK] ARKAPRANA Technology Stack: 6-Tier Interactive Inspector */}
      <ArchitectureSection />

      {/* 05. [LIGHT] Editorial Industry Storytelling: Technology for Critical Environments */}
      <IndustriesSection />

      {/* 06. [DARK] ARKAPRANA AI Launch & Enterprise Knowledge Assistant Mock */}
      <MeetAiSection />

      {/* 07. [LIGHT] Editorial Technology Magazine: ARKAPRANA Insights */}
      <InsightsSection />

      {/* 08. [DARK] Final Storytelling CTA & Interactive Contact Desk */}
      <FinalCtaSection />
    </main>
  );
}
