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
  TrendingUp,
  Search,
  Monitor,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Key,
  Eye,
  Settings,
  GitBranch,
  Package,
  Terminal,
  Wifi,
  HardDrive,
  BarChart3,
  Palette,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Shield as SecurityIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  Layers as LayersIcon,
  Cpu as CpuIcon,
  Settings as SettingsIcon,
  GitBranch as GitIcon,
  Package as PackageIcon,
  Terminal as TerminalIcon,
  Wifi as WifiIcon,
  HardDrive as StorageIcon,
  BarChart3 as AnalyticsIcon,
  Palette as DesignIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SiteNavbar } from "@/components/site-navbar"
// (Removed RotatingWords import after hero revert)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-200">
      <header className="relative min-h-[70vh] flex flex-col overflow-hidden bg-white dark:bg-slate-900">
        {/* Decorative soft gradient blobs (original hero) */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-70 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-amber-100 via-teal-50 to-blue-100 opacity-60 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <SiteNavbar />
        {/* Hero content (original) */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-5xl">
            <Badge className="mb-6 bg-blue-50 text-blue-700 border border-blue-200 shadow-sm text-sm sm:text-base dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">🇿🇦 Based in South Africa • 5+ Years Experience</Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Build High-End
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent block sm:inline"> Digital Experiences</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              We craft premium ecommerce shops, property websites, and mobile applications using Next.js and modern technologies — while securing your assets with expert vulnerability testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button data-lead data-lead-source="hero_primary_cta" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 w-full sm:w-auto shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 bg-white/70 backdrop-blur-sm text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:bg-slate-700 text-lg px-8 py-4 w-full sm:w-auto shadow-sm">
                View Our Work
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-600 dark:text-slate-400 mb-8">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm dark:bg-slate-800 dark:border-slate-700"><Code className="h-4 w-4 text-blue-500" /><span className="text-sm sm:text-base">Next.js Expert</span></div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm dark:bg-slate-800 dark:border-slate-700"><Shield className="h-4 w-4 text-emerald-500" /><span className="text-sm sm:text-base">Security Testing</span></div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm dark:bg-slate-800 dark:border-slate-700"><Zap className="h-4 w-4 text-amber-500" /><span className="text-sm sm:text-base">High Performance</span></div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm dark:bg-slate-800 dark:border-slate-700"><Award className="h-4 w-4 text-purple-500" /><span className="text-sm sm:text-base">Bug Bounty Expert</span></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700"><div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">50+</div><div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Projects</div></div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700"><div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">99%</div><div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Satisfaction</div></div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700"><div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">24/7</div><div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Support</div></div>
              <div className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm dark:bg-slate-800 dark:border-slate-700"><div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">5+</div><div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">Years</div></div>
            </div>
          </div>
        </div>
        {/* Additional subtle accents */}
        <div className="pointer-events-none absolute top-24 left-10 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }} />
        <div className="pointer-events-none absolute bottom-10 right-10 w-40 h-40 bg-purple-200/40 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '3s' }} />
      </header>

      {/* Services Section */}
    <section id="services" className="py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
      <Badge className="mb-4 bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Our Services</Badge>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Premium Digital Solutions</h2>
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From concept to deployment, we deliver exceptional digital solutions that drive results and exceed
              expectations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
      <Card className="bg-white border border-slate-200 hover:border-blue-400/50 transition-all duration-300 group shadow-sm overflow-hidden dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-500/50">
              <CardHeader>
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <Image src="/images/frontstore.png" alt="Ecommerce storefront preview" width={640} height={360} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent" />
                  <Globe className="absolute top-3 left-3 h-8 w-8 text-white drop-shadow-md" />
                </div>
        <CardTitle className="text-slate-900 dark:text-white text-lg sm:text-xl">Ecommerce Websites</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
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

      <Card className="bg-white border border-slate-200 hover:border-purple-500/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <CardHeader>
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <Image src="/images/dashboard2.png" alt="Mobile application dashboard preview" width={640} height={360} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/25 via-transparent to-transparent" />
                  <Smartphone className="absolute top-3 left-3 h-8 w-8 text-white drop-shadow-md" />
                </div>
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

            <Card className="bg-white border border-slate-200 hover:border-green-500/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1 shadow-sm overflow-hidden">
              <CardHeader>
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <Image src="/images/dashboard1.png" alt="Security testing analytics preview" width={640} height={360} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/25 via-transparent to-transparent" />
                  <Shield className="absolute top-3 left-3 h-8 w-8 text-white drop-shadow-md" />
                </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="bg-white border border-slate-200 hover:border-orange-400/50 transition-all duration-300 shadow-sm overflow-hidden">
              <CardHeader>
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <Image src="/images/hero-bg.jpg" alt="Property website hero mockup" width={640} height={360} className="h-36 w-full object-cover brightness-95 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-transparent" />
                  <Database className="absolute top-3 left-3 h-7 w-7 text-white drop-shadow" />
                </div>
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Property Websites</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Sophisticated real estate platforms with advanced search, virtual tours, and lead management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-cyan-500/50 transition-all duration-300 shadow-sm overflow-hidden">
              <CardHeader>
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <Image src="/images/dashboard2.png" alt="API development architecture diagram" width={640} height={360} className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/25 via-transparent to-transparent" />
                  <Server className="absolute top-3 left-3 h-7 w-7 text-white drop-shadow" />
                </div>
                <CardTitle className="text-slate-900 text-lg sm:text-xl">API Development</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Robust REST and GraphQL APIs with comprehensive documentation and testing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-green-500/50 transition-all duration-300 shadow-sm overflow-hidden">
              <CardHeader>
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <Image src="/images/frontstore.png" alt="Digital marketing campaign dashboard" width={640} height={360} className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-600/25 via-transparent to-transparent" />
                  <TrendingUp className="absolute top-3 left-3 h-7 w-7 text-white drop-shadow" />
                </div>
                <CardTitle className="text-slate-900 text-lg sm:text-xl">Digital Marketing</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Comprehensive digital marketing strategies including social media, content marketing, and campaign management to boost your online presence
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-yellow-500/50 transition-all duration-300 shadow-sm overflow-hidden">
              <CardHeader>
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <Image src="/images/dashboard1.png" alt="SEO analytics and optimization tools" width={640} height={360} className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/25 via-transparent to-transparent" />
                  <Search className="absolute top-3 left-3 h-7 w-7 text-white drop-shadow" />
                </div>
                <CardTitle className="text-slate-900 text-lg sm:text-xl">SEO Optimization</CardTitle>
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  Advanced SEO services including keyword research, on-page optimization, technical SEO, and performance monitoring to improve search rankings
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
  <section className="py-16 lg:py-20 bg-slate-50/40 dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
    <Badge className="mb-4 bg-green-50 text-green-700 border border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Our Portfolio</Badge>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects We've Built for Clients</h2>
    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover our successful projects across ecommerce, mobile apps, and software systems. Each project showcases our commitment to quality and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Velfix Ecommerce Platform */}
            <Card className="bg-white border border-slate-200 hover:border-blue-400/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src="/images/frontstore.png" alt="Velfix Ecommerce Platform" width={640} height={360} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-500 text-white text-xs">Ecommerce</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Velfix Ecommerce Platform</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  A high-performance ecommerce platform with advanced search, category navigation, and seamless user experience handling thousands of products.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">Next.js</Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">TypeScript</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs">Prisma</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>99.9% Uptime</span>
                  <span>2.1s Load Time</span>
                </div>
              </CardContent>
            </Card>

            {/* Property Management System */}
            <Card className="bg-white border border-slate-200 hover:border-purple-500/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src="/images/hero-bg.jpg" alt="Property Management System" width={640} height={360} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-purple-500 text-white text-xs">Real Estate</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Luxury Property Portal</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Sophisticated real estate platform with virtual tours, advanced search filters, and integrated lead management for premium properties.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">Next.js</Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">React</Badge>
                  <Badge className="bg-orange-50 text-orange-700 border border-orange-200 text-xs">Tailwind</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>500+ Properties</span>
                  <span>50% Lead Increase</span>
                </div>
              </CardContent>
            </Card>

            {/* Mobile App Dashboard */}
            <Card className="bg-white border border-slate-200 hover:border-green-500/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src="/images/dashboard2.png" alt="Mobile App Dashboard" width={640} height={360} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-500 text-white text-xs">Mobile App</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fitness Tracking App</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Cross-platform mobile application with workout tracking, progress analytics, and social features for fitness enthusiasts.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">React Native</Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">Node.js</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs">MongoDB</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>10k+ Downloads</span>
                  <span>4.8★ Rating</span>
                </div>
              </CardContent>
            </Card>

            {/* Admin Dashboard */}
            <Card className="bg-white border border-slate-200 hover:border-orange-500/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src="/images/dashboard1.png" alt="Admin Dashboard" width={640} height={360} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-orange-500 text-white text-xs">Dashboard</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Business Analytics Platform</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Comprehensive admin dashboard with real-time analytics, data visualization, and automated reporting for data-driven decisions.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">Next.js</Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">Chart.js</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs">PostgreSQL</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>1M+ Data Points</span>
                  <span>Real-time Updates</span>
                </div>
              </CardContent>
            </Card>

            {/* Security Testing Platform */}
            <Card className="bg-white border border-slate-200 hover:border-red-500/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src="/images/frontstore.png" alt="Security Testing Platform" width={640} height={360} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-red-500 text-white text-xs">Security</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Vulnerability Assessment Tool</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Automated security testing platform with comprehensive vulnerability scanning, penetration testing, and detailed reporting.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">Python</Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">Django</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs">OWASP</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>1000+ Scans</span>
                  <span>Zero False Positives</span>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Campaign Platform */}
            <Card className="bg-white border border-slate-200 hover:border-teal-500/50 transition-all duration-300 group shadow-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src="/images/dashboard2.png" alt="Marketing Campaign Platform" width={640} height={360} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-teal-500 text-white text-xs">Marketing</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Marketing Hub</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Integrated marketing platform with campaign management, social media automation, and performance analytics for comprehensive digital strategies.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs">React</Badge>
                  <Badge className="bg-green-50 text-green-700 border border-green-200 text-xs">Node.js</Badge>
                  <Badge className="bg-purple-50 text-purple-700 border border-purple-200 text-xs">MongoDB</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>300% ROI Increase</span>
                  <span>50k+ Impressions</span>
                </div>
              </CardContent>
            </Card>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50 shadow-sm text-sm sm:text-base px-4 py-2">
              🚀 Cutting-Edge Technology Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Built with the World's Most
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent block">
                Advanced Technologies
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We leverage the latest and greatest technologies to deliver unparalleled performance,
              security, and user experiences that set new industry standards.
            </p>
          </div>

          {/* Main Technology Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">

            {/* Frontend Excellence */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/50 hover:border-blue-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Frontend Excellence</h3>
                <p className="text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed">
                  Lightning-fast, responsive interfaces built with modern frameworks and cutting-edge design systems.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100/50 hover:border-blue-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Next.js 14</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Full-Stack React Framework</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100/50 hover:border-cyan-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">React 18</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Component Architecture</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-100/50 hover:border-purple-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">TS</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">TypeScript</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Type-Safe Development</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100/50 hover:border-teal-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Tailwind CSS</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Utility-First Styling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Powerhouse */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/50 hover:border-green-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Server className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Backend Powerhouse</h3>
                <p className="text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed">
                  Scalable, secure server-side architecture with modern databases and real-time capabilities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100/50 hover:border-green-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Node.js</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Runtime Environment</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100/50 hover:border-purple-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Prisma ORM</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Type-Safe Database Access</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100/50 hover:border-blue-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">PG</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">PostgreSQL</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Advanced Relational Database</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100/50 hover:border-red-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">R</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Redis</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">High-Performance Caching</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & DevOps */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/50 hover:border-purple-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Security & DevOps</h3>
                <p className="text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed">
                  Enterprise-grade security and deployment infrastructure ensuring reliability and protection.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100/50 hover:border-purple-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">NextAuth.js</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Authentication & Authorization</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100/50 hover:border-orange-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Vercel</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Global CDN Deployment</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-100/50 hover:border-yellow-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Docker</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Container Orchestration</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100/50 hover:border-indigo-300/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GitBranch className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">CI/CD</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Automated Pipelines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: MobileIcon, name: "React Native", color: "from-green-500 to-emerald-600", bg: "from-green-50 to-emerald-50", border: "border-green-100/50 hover:border-green-300/50" },
              { icon: WebIcon, name: "GraphQL", color: "from-pink-500 to-rose-600", bg: "from-pink-50 to-rose-50", border: "border-pink-100/50 hover:border-pink-300/50" },
              { icon: AnalyticsIcon, name: "Analytics", color: "from-blue-500 to-cyan-600", bg: "from-blue-50 to-cyan-50", border: "border-blue-100/50 hover:border-blue-300/50" },
              { icon: CloudIcon, name: "AWS", color: "from-orange-500 to-red-600", bg: "from-orange-50 to-red-50", border: "border-orange-100/50 hover:border-orange-300/50" },
              { icon: StorageIcon, name: "MongoDB", color: "from-green-500 to-lime-600", bg: "from-green-50 to-lime-50", border: "border-green-100/50 hover:border-green-300/50" },
              { icon: TerminalIcon, name: "Testing", color: "from-purple-500 to-indigo-600", bg: "from-purple-50 to-indigo-50", border: "border-purple-100/50 hover:border-purple-300/50" },
            ].map((tech, index) => (
              <div key={tech.name} className="group">
                <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border ${tech.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{tech.name}</div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                </div>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-slate-900/20 rounded-3xl" />
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Performance That Matters</h3>
                  <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    Our technology stack delivers exceptional performance metrics that exceed industry standards.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                      99.9%
                    </div>
                    <div className="text-slate-300 text-sm sm:text-base">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                      &lt;100ms
                    </div>
                    <div className="text-slate-300 text-sm sm:text-base">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                      99.99%
                    </div>
                    <div className="text-slate-300 text-sm sm:text-base">Security Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">
                      24/7
                    </div>
                    <div className="text-slate-300 text-sm sm:text-base">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation & Software Systems Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 via-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border border-cyan-200/50 shadow-sm text-sm sm:text-base px-4 py-2 dark:from-cyan-950 dark:to-blue-950 dark:text-cyan-300 dark:border-cyan-800">
              🤖 Intelligent Automation & Software Systems
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                Cutting-Edge Automation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              From custom workflow automation to enterprise software systems, we build intelligent solutions that streamline operations, reduce costs, and scale with your business needs.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Workflow Automation */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Workflow Automation</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Automate repetitive tasks and complex business processes with intelligent workflows that adapt to your needs.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Custom workflow design & implementation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Integration with existing tools & APIs</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Real-time monitoring & analytics dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Scalable cloud-based architecture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Software Systems */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enterprise Software Systems</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Build robust, scalable software systems tailored to your business requirements and industry standards.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Custom ERP & CRM solutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Microservices architecture design</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-violet-500 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Cloud-native development & deployment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">Legacy system modernization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Use Cases */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Data Processing</CardTitle>
                <CardDescription className="text-sm dark:text-slate-300">
                  Automated data collection, transformation, and analysis pipelines
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Task Automation</CardTitle>
                <CardDescription className="text-sm dark:text-slate-300">
                  Eliminate manual tasks with intelligent automation bots
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Cloud Integration</CardTitle>
                <CardDescription className="text-sm dark:text-slate-300">
                  Seamless integration with cloud services and platforms
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Analytics & Insights</CardTitle>
                <CardDescription className="text-sm dark:text-slate-300">
                  Real-time business intelligence and predictive analytics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.15),transparent_50%)]" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Our Automation Solutions?</h3>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                  Transform your operations with intelligent automation that delivers measurable results
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                    70%
                  </div>
                  <div className="text-slate-300 text-sm sm:text-base">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                    10x
                  </div>
                  <div className="text-slate-300 text-sm sm:text-base">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    99.9%
                  </div>
                  <div className="text-slate-300 text-sm sm:text-base">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">
                    24/7
                  </div>
                  <div className="text-slate-300 text-sm sm:text-base">Operation Time</div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button data-lead data-lead-source="automation_cta" size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-10 py-6 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                  Get Started with Automation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Contact section removed. Use /contact page for tracking & analytics */}

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HMS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-lg leading-tight">Majestic</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm leading-tight">SOUTHFLOW</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                Building premium digital experiences with Next.js and modern technologies. Based in South Africa,
                serving clients globally with expert development and security services.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-slate-600 dark:text-slate-300">📧</span>
                </div>
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-slate-600 dark:text-slate-300">💬</span>
                </div>
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-slate-600 dark:text-slate-300">🔗</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 dark:text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
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
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-900 transition-colors">
                    SEO Optimization
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
              <h4 className="text-slate-900 dark:text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
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
                  <Link href="/contact" className="hover:text-slate-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
                © 2024 Majestic SouthFlow. All rights reserved. Built with Next.js ⚡
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-500 dark:text-slate-400 text-sm">
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
