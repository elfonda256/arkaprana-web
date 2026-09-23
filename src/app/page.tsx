import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AiFutureSection from "@/components/sections/AiFutureSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import LifecycleSection from "@/components/sections/LifecycleSection";
import EngagementSection from "@/components/sections/EngagementSection";
import FutureVisionSection from "@/components/sections/FutureVisionSection";

export const metadata = {
  title: "ARKAPRANA | Technology & Intelligent Solutions",
  description:
    "ARKAPRANA adalah perusahaan teknologi Indonesia yang menghadirkan solusi IT Infrastructure, Network, Cloud, Cybersecurity, Managed IT, System Integration dan Artificial Intelligence.",
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
    "AI Automation Indonesia",
    "Data Center Indonesia"
  ]
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhoWeAreSection />
      <SolutionsSection />
      <ApproachSection />
      <WhyUsSection />
      <AiFutureSection />
      <ArchitectureSection />
      <IndustriesSection />
      <LifecycleSection />
      <EngagementSection />
      <FutureVisionSection />
    </main>
  );
}
