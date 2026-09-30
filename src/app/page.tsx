import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Testimonial } from "@/components/Testimonial";
import { ProcessSection } from "@/components/ProcessSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="w-full overflow-x-clip">
      <HeroSection />
      <Marquee />
      <WorkShowcase />
      {/* <Testimonial /> */}
      <ProcessSection />
      <StatsSection />
      <AboutSection />
      <CapabilitiesGrid />
      <BlogSection />
      <CTASection />
    </main>
  );
}
