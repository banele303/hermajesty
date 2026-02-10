import { Hero} from "@/components/home/hero-section"
import { LogosMarquee } from "@/components/home/logos-marquee"
import { ServicesSection } from "@/components/home/services-section"
import { AiReceptionistSection } from "@/components/home/ai-receptionist-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TechnologyStackSection } from "@/components/home/technology-stack-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FooterSection } from "@/components/home/footer-section"
import LevaClient from "@/components/LevaClient";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-orange-500/30 overflow-x-hidden">
      <Hero />
      <LogosMarquee />
      <ServicesSection />
      <AiReceptionistSection />
      <PortfolioSection />
      <TechnologyStackSection />
      <PricingSection />
      <LevaClient />
      <FooterSection />
    </div>
  )
}
