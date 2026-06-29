import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsGallery } from "@/components/sections/HighlightsGallery";
import { BentoGallery } from "@/components/sections/BentoGallery";
import { AudioPerformance } from "@/components/sections/AudioPerformance";
import { ANCSection } from "@/components/sections/ANC";
import { WearabilitySection } from "@/components/sections/WearabilitySection";
import { BatterySection } from "@/components/sections/BatterySection";
import { MagicSection } from "@/components/sections/MagicSection";
import { WhyAppleSection } from "@/components/sections/WhyAppleSection";
import { ProductComparison } from "@/components/sections/ProductComparison";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <HighlightsGallery />
      <BentoGallery />
      <AudioPerformance />
      <ANCSection />
      <WearabilitySection />
      <BatterySection />
      <MagicSection />
      <WhyAppleSection />
      <ProductComparison />
      <FooterSection />
    </main>
  );
}
