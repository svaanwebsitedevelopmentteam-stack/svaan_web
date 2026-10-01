import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { WorkShowcase } from "@/components/WorkShowcase";
import { ClientExperiences } from "@/components/ClientExperiences";
import { ProcessSection } from "@/components/ProcessSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { TechStack } from "@/components/TechStack";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <Marquee />
      <CapabilitiesGrid />
      <WorkShowcase />
      <ProcessSection />
      <StatsSection />
      <AboutSection />
      <TechStack />
      {/* <BlogSection /> */}
      <ClientExperiences />

      <CTASection />
    </main>
  );
}
