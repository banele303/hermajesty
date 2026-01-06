import { Hero} from "@/components/home/hero-section"
import { LogosMarquee } from "@/components/home/logos-marquee"
import { ServicesSection } from "@/components/home/services-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TechnologyStackSection } from "@/components/home/technology-stack-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FooterSection } from "@/components/home/footer-section"
import LevaClient from "@/components/LevaClient";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-black dark:via-slate-950 dark:to-[#050a1f] text-slate-800 dark:text-slate-200">
      <Hero />
      <LogosMarquee />
      <ServicesSection />
      <PortfolioSection />
      <TechnologyStackSection />
      <PricingSection />
  <LevaClient />
      <FooterSection />
    </div>
  )
}
