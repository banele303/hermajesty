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
  Menu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">HER MAJESTY</span>
                <span className="text-blue-400 font-medium text-sm leading-tight">SOUTHFLOW</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="#nextjs" className="text-slate-300 hover:text-white transition-colors">
                Next.js
              </Link>
              <Link href="#process" className="text-slate-300 hover:text-white transition-colors">
                Process
              </Link>
              <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Digital technology background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80 z-10"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 z-10"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <Badge className="mb-6 bg-slate-800/80 backdrop-blur-sm text-slate-300 border-slate-700/50 text-sm sm:text-base">
              🇿🇦 Based in South Africa • 5+ Years Experience
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Build High-End
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block sm:inline">
                {" "}
                Digital Experiences
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg">
              We specialize in crafting premium ecommerce shops, property websites, and mobile applications using
              Next.js and modern technologies. Plus, we secure your digital assets with expert vulnerability testing and
              bug bounty expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 w-full sm:w-auto shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-500/50 bg-slate-800/30 backdrop-blur-sm text-slate-200 hover:bg-slate-700/50 text-lg px-8 py-4 w-full sm:w-auto shadow-xl"
              >
                View Our Work
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-300 mb-16 px-4">
              <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-sm sm:text-base">Next.js Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                <span className="text-sm sm:text-base">Security Testing</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="text-sm sm:text-base">High Performance</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                <span className="text-sm sm:text-base">Bug Bounty Expert</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-slate-300 text-sm sm:text-base">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-slate-300 text-sm sm:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-slate-300 text-sm sm:text-base">Support Available</div>
              </div>
              <div className="text-center p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-slate-300 text-sm sm:text-base">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">About Alex & SouthFlow</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Crafting Digital Excellence from South Africa
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                Hi, I'm Alex, a passionate software engineer based in South Africa with over 5 years of experience
                building high-end digital solutions. I specialize in Next.js development and have extensive knowledge in
                bug bounty hunting, making me uniquely positioned to build secure, performant applications.
              </p>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                At HMS HER MAJESTY SouthFlow, we don't just build websites – we craft digital experiences that drive
                business growth. Our expertise spans from complex ecommerce platforms to sophisticated property websites
                and mobile applications, all built with cutting-edge technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Full-Stack Development</div>
                    <div className="text-slate-400 text-sm">Next.js, TypeScript, Prisma</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Security Expert</div>
                    <div className="text-slate-400 text-sm">Bug Bounty, Penetration Testing</div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full sm:w-auto">
                Learn More About Our Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Our Technology Stack</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
                          <span className="text-blue-400 text-xs">⚛️</span>
                        </div>
                        <span className="text-slate-300">Next.js & React</span>
                      </div>
                      <span className="text-slate-400">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600/20 rounded flex items-center justify-center">
                          <span className="text-blue-500 text-xs">TS</span>
                        </div>
                        <span className="text-slate-300">TypeScript</span>
                      </div>
                      <span className="text-slate-400">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center">
                          <Database className="h-3 w-3 text-purple-400" />
                        </div>
                        <span className="text-slate-300">Database (Prisma/SQL)</span>
                      </div>
                      <span className="text-slate-400">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                          <Shield className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="text-slate-300">Security Testing</span>
                      </div>
                      <span className="text-slate-400">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center">
                          <Smartphone className="h-3 w-3 text-orange-400" />
                        </div>
                        <span className="text-slate-300">Mobile Development</span>
                      </div>
                      <span className="text-slate-400">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Our Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Premium Digital Solutions</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              From concept to deployment, we deliver exceptional digital solutions that drive results and exceed
              expectations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader>
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white text-lg sm:text-xl">Ecommerce Websites</CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  High-converting online stores built with Next.js, featuring advanced product management, secure
                  payments, inventory tracking, and lightning-fast performance that scales with your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Custom product catalogs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Payment gateway integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <CardHeader>
                <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white text-lg sm:text-xl">Mobile Applications</CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  Native and cross-platform mobile apps that provide seamless user experiences across iOS and Android
                  devices, with offline capabilities and push notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>iOS & Android development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Cross-platform compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>App store deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-white text-lg sm:text-xl">Security Testing</CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  Comprehensive vulnerability assessments and penetration testing to secure your digital assets against
                  potential threats, with detailed reports and remediation guidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Vulnerability assessments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Security audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                    <span>Bug bounty expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Database className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
                  <div>
                    <CardTitle className="text-white text-lg sm:text-xl">Property Websites</CardTitle>
                    <CardDescription className="text-slate-300 text-sm sm:text-base">
                      Sophisticated real estate platforms with advanced search, virtual tours, and lead management
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Server className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
                  <div>
                    <CardTitle className="text-white text-lg sm:text-xl">API Development</CardTitle>
                    <CardDescription className="text-slate-300 text-sm sm:text-base">
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
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Our Work</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our latest projects showcasing cutting-edge ecommerce solutions and admin dashboards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Velfix Ecommerce Platform</h3>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                A modern, high-performance ecommerce platform built with Next.js featuring advanced search
                functionality, category-based navigation, and seamless user experience. The platform handles thousands
                of products with lightning-fast performance and mobile-first design.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">99.9%</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Uptime</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">2.1s</div>
                  <div className="text-slate-400 text-xs sm:text-sm">Load Time</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 text-xs">Next.js</Badge>
                <Badge className="bg-green-500/20 text-green-300 text-xs">TypeScript</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 text-xs">Prisma</Badge>
                <Badge className="bg-orange-500/20 text-orange-300 text-xs">Tailwind CSS</Badge>
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
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">Our Complete Technology Stack</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h4 className="text-white font-medium mb-2">Frontend</h4>
                <div className="text-slate-400 text-sm space-y-1">
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
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-white font-medium mb-2">Backend</h4>
                <div className="text-slate-400 text-sm space-y-1">
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
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-white font-medium mb-2">Security</h4>
                <div className="text-slate-400 text-sm space-y-1">
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
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-white font-medium mb-2">Deployment</h4>
                <div className="text-slate-400 text-sm space-y-1">
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
      <section id="pricing" className="py-16 lg:py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Pricing</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Transparent, Fair Pricing</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Professional development services with clear, upfront pricing. No hidden fees, no monthly subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Small Website */}
            <Card className="bg-slate-800 border-slate-700 relative hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Winter Special</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg sm:text-xl mb-2">Small Business</CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  Perfect for startups and small businesses
                </CardDescription>
                <div className="mt-4">
                  <div className="text-slate-400 line-through text-base sm:text-lg">R5,999</div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">R4,999</div>
                  <div className="text-slate-400 text-xs sm:text-sm">One-time payment</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Up to 40 products/pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Fully responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Payment gateway integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Admin dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>SSL certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>3 months support</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Large Website */}
            <Card className="bg-slate-800 border-blue-500 relative scale-105 hover:border-blue-400 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg sm:text-xl mb-2">Growing Business</CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  For established businesses ready to scale
                </CardDescription>
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-bold text-white">R8,999</div>
                  <div className="text-slate-400 text-xs sm:text-sm">One-time payment</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
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
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Complete Package */}
            <Card className="bg-slate-800 border-slate-700 relative hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Best Value</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-lg sm:text-xl mb-2">Complete Solution</CardTitle>
                <CardDescription className="text-slate-300 text-sm sm:text-base">
                  Website + Mobile App package
                </CardDescription>
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-bold text-white">R14,999</div>
                  <div className="text-slate-400 text-xs sm:text-sm">One-time payment</div>
                  <div className="text-green-400 text-xs sm:text-sm font-medium">Save R8,000+</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
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
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Get In Touch</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life with cutting-edge technology and expert craftsmanship
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-slate-300">alex@southflow.co.za</div>
                    <div className="text-slate-400 text-sm">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <div className="text-slate-300">+27 63 199 5124</div>
                    <div className="text-slate-400 text-sm">Available 9 AM - 6 PM SAST</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xl">🌍</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-slate-300">South Africa</div>
                    <div className="text-slate-400 text-sm">Serving clients globally</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Start Your Project Today</CardTitle>
                <CardDescription className="text-slate-300">
                  Tell us about your project and we'll get back to you within 2 hours with a detailed proposal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-6">
                      📧 Email Us
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-500 text-green-400 hover:bg-green-500/10 text-lg py-6"
                    >
                      💬 WhatsApp
                    </Button>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg py-6">
                    🚀 Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="text-center space-y-2">
                    <div className="text-slate-400 text-sm">✅ Free consultation • ✅ No commitment required</div>
                    <div className="text-slate-400 text-sm">
                      ✅ Detailed project proposal • ✅ Timeline & cost estimate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HMS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-tight">HMS HER MAJESTY</span>
                  <span className="text-blue-400 font-medium text-sm leading-tight">SOUTHFLOW</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                Building premium digital experiences with Next.js and modern technologies. Based in South Africa,
                serving clients globally with expert development and security services.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-slate-400">📧</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-slate-400">💬</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-slate-400">🔗</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Ecommerce Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Security Testing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Property Websites
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    API Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm text-center md:text-left">
                © 2024 HMS HER MAJESTY SouthFlow. All rights reserved. Built with Next.js ⚡
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-400 text-sm">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
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
