import {
  ArrowRight,
  Check,
  Code,
  Globe,
  Shield,
  Smartphone,
  Zap,
  Rocket,
  Award,
  Database,
  Server,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SiteNavbar } from "@/components/site-navbar"
import { RotatingWords } from "@/components/rotating-words"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50 text-slate-800">
      <header className="relative flex flex-col overflow-hidden min-h-[85vh]">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-bg.jpg" alt="Abstract technology background" fill priority className="object-cover" />
          {/* Layered gradient & subtle noise */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30" />
          <div className="absolute inset-0 mix-blend-overlay opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>
        <SiteNavbar />
        <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-xs font-medium tracking-wide text-blue-200">5+ YEARS • SOUTH AFRICA • PREMIUM DELIVERY</span>
              </div>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
                High-Performance <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Digital Products</span>
                <br className="hidden md:block" /> Engineered For <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-fuchsia-500/30 blur-xl rounded-full" aria-hidden />
                  <span className="relative bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"><RotatingWords words={["Ecommerce","Dashboards","Mobile Apps","Security"]} /></span>
                </span>
              </h1>
              <p className="text-slate-200/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                We design, build & secure conversion-focused platforms with modern tech, rigorous performance tuning and proactive security hardening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button data-lead data-lead-source="hero_primary_cta" size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-5 shadow-2xl shadow-blue-600/30">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white text-lg px-8 py-5">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Trust / Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: <Code className="h-4 w-4 text-blue-300" />, label: 'Next.js 14' },
                { icon: <Shield className="h-4 w-4 text-emerald-300" />, label: 'Security Testing' },
                { icon: <Zap className="h-4 w-4 text-amber-300" />, label: 'Performance' },
                { icon: <Award className="h-4 w-4 text-fuchsia-300" />, label: 'Bug Bounty' },
                { icon: <Rocket className="h-4 w-4 text-purple-300" />, label: 'Scalability' },
              ].map(t => (
                <span key={t.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white/90 text-sm">
                  {t.icon}{t.label}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Avg. Satisfaction', value: '99%' },
                { label: 'Uptime Managed', value: '99.9%' },
                { label: 'Years Experience', value: '5+' },
              ].map(m => (
                <div key={m.label} className="relative overflow-hidden rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4">
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-fuchsia-500/10" />
                  <div className="text-2xl font-bold text-white mb-1 tracking-tight drop-shadow-sm">{m.value}</div>
                  <div className="text-[11px] uppercase tracking-wide font-medium text-white/70">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <div className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="h-2 w-2 rounded-full bg-white/70 animate-bounce" />
          </div>
          <span className="text-xs tracking-wider">Scroll</span>
        </div>
      </header>

      {/* Services Section */}
    <section id="services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
      <Badge className="mb-4 bg-purple-50 text-purple-700 border border-purple-200">Our Services</Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Digital Solutions</h2>
      <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to deployment, we deliver exceptional digital solutions that drive results and exceed
              expectations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
      <Card className="bg-white border border-slate-200 hover:border-blue-400/50 transition-all duration-300 group shadow-sm">
              <CardHeader>
        <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
        <CardTitle className="text-slate-900 text-lg sm:text-xl">Ecommerce Websites</CardTitle>
        <CardDescription className="text-slate-600 text-sm sm:text-base">
                  High-converting online stores built with Next.js, featuring advanced product management, secure
                  payments, inventory tracking, and lightning-fast performance that scales with your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
        <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Custom product catalogs</span>
                  </li>
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Payment gateway integration</span>
                  </li>
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

      <Card className="bg-white border border-slate-200 hover:border-purple-500/50 transition-all duration-300 group shadow-sm">
              <CardHeader>
        <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
        <CardTitle className="text-slate-900 text-lg sm:text-xl">Mobile Applications</CardTitle>
        <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Native and cross-platform mobile apps that provide seamless user experiences across iOS and Android
                  devices, with offline capabilities and push notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
        <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>iOS & Android development</span>
                  </li>
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Cross-platform compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>App store deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-green-500/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1 shadow-sm">
              <CardHeader>
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Security Testing</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Comprehensive vulnerability assessments and penetration testing to secure your digital assets against
                  potential threats, with detailed reports and remediation guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Vulnerability assessments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Security audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>Bug bounty expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <Card className="bg-white border border-slate-200 hover:border-orange-400/50 transition-all duration-300 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Database className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                  <div>
                    <CardTitle className="text-slate-900 text-lg sm:text-xl">Property Websites</CardTitle>
                    <CardDescription className="text-slate-600 text-sm sm:text-base">
                      Sophisticated real estate platforms with advanced search, virtual tours, and lead management
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-cyan-500/50 transition-all duration-300 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Server className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-600" />
                  <div>
                    <CardTitle className="text-slate-900 text-lg sm:text-xl">API Development</CardTitle>
                    <CardDescription className="text-slate-600 text-sm sm:text-base">
                      Robust REST and GraphQL APIs with comprehensive documentation and testing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
  <section className="py-16 lg:py-20 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
    <Badge className="mb-4 bg-green-50 text-green-700 border border-green-200">Our Work</Badge>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
    <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our latest projects showcasing cutting-edge ecommerce solutions and admin dashboards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Velfix Ecommerce Platform</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                A modern, high-performance ecommerce platform built with Next.js featuring advanced search
                functionality, category-based navigation, and seamless user experience. The platform handles thousands
                of products with lightning-fast performance and mobile-first design.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-slate-500 text-xs sm:text-sm">Uptime</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">2.1s</div>
                  <div className="text-slate-500 text-xs sm:text-sm">Load Time</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">Next.js</Badge>
                <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">TypeScript</Badge>
                <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs">Prisma</Badge>
                <Badge className="bg-orange-50 text-orange-700 border border-orange-200 text-xs">Tailwind CSS</Badge>
              </div>

              <Link href="/portfolio">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 w-full sm:w-auto">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-4 sm:p-6">
                <Image
                  src="/images/frontstore.png"
                  alt="Velfix Ecommerce Platform"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 text-center">Our Complete Technology Stack</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-blue-100">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h4 className="text-slate-900 font-medium mb-2">Frontend</h4>
                <div className="text-slate-600 text-sm space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">⚛️</span>
                    <span>Next.js 14</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">⚛️</span>
                    <span>React 18</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs text-blue-500">TS</span>
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🎨</span>
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-green-100">
                  <Server className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-slate-900 font-medium mb-2">Backend</h4>
                <div className="text-slate-600 text-sm space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🟢</span>
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🔷</span>
                    <span>Prisma ORM</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🐘</span>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🔴</span>
                    <span>Redis</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-purple-100">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-slate-900 font-medium mb-2">Security</h4>
                <div className="text-slate-600 text-sm space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🔐</span>
                    <span>NextAuth.js</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🎫</span>
                    <span>JWT Tokens</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🛡️</span>
                    <span>OWASP Standards</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🔍</span>
                    <span>Penetration Testing</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4 ring-1 ring-orange-100">
                  <Rocket className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-slate-900 font-medium mb-2">Deployment</h4>
                <div className="text-slate-600 text-sm space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">▲</span>
                    <span>Vercel</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">☁️</span>
                    <span>AWS</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🐳</span>
                    <span>Docker</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs">🔄</span>
                    <span>CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-green-50 text-green-700 border border-green-200">Pricing</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent, Fair Pricing</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Professional development services with clear, upfront pricing. No hidden fees, no monthly subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Small Website */}
            <Card className="bg-white border border-slate-200 relative hover:border-orange-400/60 transition-all duration-300 shadow-sm">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Winter Special</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-slate-900 text-lg sm:text-xl mb-2">Small Business</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Perfect for startups and small businesses
                </CardDescription>
                <div className="mt-4">
                  <div className="text-slate-400 line-through text-base sm:text-lg">R5,999</div>
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900">R4,999</div>
                  <div className="text-slate-500 text-xs sm:text-sm">One-time payment</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Up to 40 products/pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Fully responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Payment gateway integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Admin dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SSL certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>3 months support</span>
                  </li>
                </ul>
                <Button data-lead data-lead-source="pricing" data-lead-plan="small_business" data-lead-value="4999" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Large Website */}
            <Card className="bg-white border-blue-500 relative scale-105 hover:border-blue-400 transition-all duration-300 shadow-sm">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-slate-900 text-lg sm:text-xl mb-2">Growing Business</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  For established businesses ready to scale
                </CardDescription>
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900">R8,999</div>
                  <div className="text-slate-500 text-xs sm:text-sm">One-time payment</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>50+ products/pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Advanced features & integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Custom API development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Multi-user management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Security audit included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>6 months priority support</span>
                  </li>
                </ul>
                <Button data-lead data-lead-source="pricing" data-lead-plan="growing_business" data-lead-value="8999" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Complete Package */}
            <Card className="bg-white border border-slate-200 relative hover:border-purple-500/50 transition-all duration-300 shadow-sm">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Best Value</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-slate-900 text-lg sm:text-xl mb-2">Complete Solution</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Website + Mobile App package
                </CardDescription>
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900">R14,999</div>
                  <div className="text-slate-500 text-xs sm:text-sm">One-time payment</div>
                  <div className="text-green-600 text-xs sm:text-sm font-medium">Save R8,000+</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Full responsive website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>iOS & Android mobile app</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Synchronized data across platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>App store deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Comprehensive testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>12 months support</span>
                  </li>
                </ul>
                <Button data-lead data-lead-source="pricing" data-lead-plan="complete_solution" data-lead-value="14999" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  {/* Contact section removed. Use /contact page for tracking & analytics */}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HMS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold text-lg leading-tight">HMS HER MAJESTY</span>
                  <span className="text-blue-600 font-medium text-sm leading-tight">SOUTHFLOW</span>
                </div>
              </div>
              <p className="text-slate-600 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                Building premium digital experiences with Next.js and modern technologies. Based in South Africa,
                serving clients globally with expert development and security services.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                  <span className="text-slate-600">📧</span>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                  <span className="text-slate-600">💬</span>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                  <span className="text-slate-600">🔗</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <Link href="#services" className="hover:text-slate-900 transition-colors">
                    Ecommerce Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-900 transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-900 transition-colors">
                    Security Testing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-900 transition-colors">
                    Property Websites
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-900 transition-colors">
                    API Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <Link href="#about" className="hover:text-slate-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-slate-900 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-slate-900 transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-slate-900 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-slate-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-500 text-sm text-center md:text-left">
                © 2024 HMS HER MAJESTY SouthFlow. All rights reserved. Built with Next.js ⚡
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-500 text-sm">
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </Link>
                <div className="flex items-center gap-2">
                  <span>🇿🇦</span>
                  <span>Made in South Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
