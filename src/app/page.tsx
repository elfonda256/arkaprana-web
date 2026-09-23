import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StatementSection from "@/components/sections/StatementSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import MeetAiSection from "@/components/sections/MeetAiSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import LifecycleSection from "@/components/sections/LifecycleSection";
import EngagementSection from "@/components/sections/EngagementSection";
import FutureVisionSection from "@/components/sections/FutureVisionSection";

export const metadata = {
  title: "ARKAPRANA | Technology & Intelligent Solutions",
  description:
    "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi IT Infrastructure, Network, Cloud, Cybersecurity, Managed IT, System Integration dan Artificial Intelligence berdaulat.",
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
    "Data Center Indonesia"
  ]
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 01. Hook & Monumental Brand Statement */}
      <HeroSection />

      {/* 02. The Arkaprana Thesis (Large Typographic Transition) */}
      <StatementSection />

      {/* 03. Solutions Presented as High-Value Products */}
      <SolutionsSection />

      {/* 04. Dedicated Apple/Vercel-Grade Launch Section for ARKAPRANA AI */}
      <MeetAiSection />

      {/* 05. The ARKAPRANA Stack: Full-Stack Vertical Interactive Inspector */}
      <ArchitectureSection />

      {/* 06. Built for Critical Environments (Strategic Industry Clusters) */}
      <IndustriesSection />

      {/* 07. Methodology & Governance (Phase Gates) */}
      <LifecycleSection />

      {/* 08. Engagement Architecture (How We Partner) */}
      <EngagementSection />

      {/* 09. Authoritative Closing Vision & CTAs */}
      <FutureVisionSection />
    </main>
  );
}
