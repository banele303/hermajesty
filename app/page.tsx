import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TechnologyStackSection } from "@/components/home/technology-stack-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FooterSection } from "@/components/home/footer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-200">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TechnologyStackSection />
      <PricingSection />
      <FooterSection />
    </div>
  )
}
