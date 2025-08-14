import HeroSection from '@/components/hero-section'
import { FeaturesSectionWithHoverEffects } from '@/components/blocks/feature-section-with-hover-effects'
import LogoCloud from '@/components/logo-cloud'
import { MerchantCards } from '@/components/merchant-cards'
import FAQs from '@/components/faqs-section-two'
import FooterSection from '@/components/footer-two'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LogoCloud />
      <FeaturesSectionWithHoverEffects />
      <MerchantCards />
      <FAQs />
      <FooterSection />
    </div>
  );
}
