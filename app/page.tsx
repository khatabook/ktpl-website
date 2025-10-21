import HeroSection from '@/components/hero-section'
import { FeaturesSectionWithHoverEffects } from '@/components/blocks/feature-section-with-hover-effects'
import OneApiSection from '@/components/one-api-section'
import PerformanceSection from '@/components/performance-section'
import { SecuritySection } from '@/components/security-section'
import FAQs from '@/components/faqs-section-two'
import FooterSection from '@/components/footer-two'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSectionWithHoverEffects />
      <OneApiSection />
      <PerformanceSection />
      <SecuritySection />
      <FAQs />
      <FooterSection />
    </div>
  );
}
