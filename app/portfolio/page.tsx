import {
  ArrowRight,
  ArrowLeft,
  Code,
  Globe,
  Shield,
  Smartphone,
  Zap,
  Users,
  TrendingUp,
  Star,
  ExternalLink,
  Clock,
  Target,
  Database,
  Palette,
  Search,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">HMS HER MAJESTY</span>
                <span className="text-blue-400 font-medium text-sm leading-tight">SOUTHFLOW</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-white font-medium">
                Portfolio
              </Link>
              <Link href="/#pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <Link href="/#contact">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Badge className="mb-6 bg-slate-800 text-slate-300 border-slate-700">🚀 Our Latest Work</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Portfolio
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block sm:inline">
                {" "}
                Showcase
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of premium digital solutions, from high-performance ecommerce
              platforms to sophisticated admin dashboards and mobile applications.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400 text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-slate-400 text-sm sm:text-base">Industries Served</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-slate-400 text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-slate-400 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ecommerce" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
              <TabsTrigger value="ecommerce" className="data-[state=active]:bg-slate-700">
                Ecommerce
              </TabsTrigger>
              <TabsTrigger value="dashboards" className="data-[state=active]:bg-slate-700">
                Dashboards
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-slate-700">
                Mobile Apps
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-slate-700">
                Security
              </TabsTrigger>
            </TabsList>

            {/* Ecommerce Projects */}
            <TabsContent value="ecommerce" className="mt-8">
              <div className="space-y-16">
                {/* Velfix Ecommerce Platform */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-blue-500/20 text-blue-300">Featured Project</Badge>
                      <Badge className="bg-green-500/20 text-green-300">Live</Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Velfix Ecommerce Platform</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      A cutting-edge ecommerce platform built with Next.js 14, featuring advanced search functionality,
                      intelligent product categorization, and seamless user experience. The platform handles thousands
                      of products with lightning-fast performance and mobile-first design principles.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div className="text-slate-400 text-sm">Uptime</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">2.1s</div>
                        <div className="text-slate-400 text-sm">Load Time</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">1000+</div>
                        <div className="text-slate-400 text-sm">Products</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white">95%</div>
                        <div className="text-slate-400 text-sm">Mobile Score</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-blue-400" />
                          Advanced search with filters and autocomplete
                        </li>
                        <li className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-green-400" />
                          Mobile-first responsive design
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-400" />
                          Server-side rendering for optimal performance
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-purple-400" />
                          Secure payment processing
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="bg-blue-500/20 text-blue-300">Next.js 14</Badge>
                      <Badge className="bg-green-500/20 text-green-300">TypeScript</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300">Prisma</Badge>
                      <Badge className="bg-orange-500/20 text-orange-300">Tailwind CSS</Badge>
                      <Badge className="bg-red-500/20 text-red-300">Stripe</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Site
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                        <Code className="mr-2 h-4 w-4" />
                        Case Study
                      </Button>
                    </div>
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
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Live Project
                    </div>
                  </div>
                </div>

                {/* Additional Ecommerce Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                        <Globe className="h-16 w-16 text-slate-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-orange-500/20 text-orange-300">Fashion</Badge>
                        <Badge className="bg-green-500/20 text-green-300">Completed</Badge>
                      </div>
                      <CardTitle className="text-white">StyleHub Fashion Store</CardTitle>
                      <CardDescription className="text-slate-300">
                        Modern fashion ecommerce with AR try-on features and social shopping integration.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-400 mb-4">
                        <span>Duration: 6 weeks</span>
                        <span>2024</span>
                      </div>
                      <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                        <Database className="h-16 w-16 text-slate-400 group-hover:text-green-400 transition-colors" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-500/20 text-blue-300">Electronics</Badge>
                        <Badge className="bg-green-500/20 text-green-300">Completed</Badge>
                      </div>
                      <CardTitle className="text-white">TechMart Electronics</CardTitle>
                      <CardDescription className="text-slate-300">
                        High-performance electronics store with advanced inventory management and B2B features.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-400 mb-4">
                        <span>Duration: 8 weeks</span>
                        <span>2024</span>
                      </div>
                      <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                        <Palette className="h-16 w-16 text-slate-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-500/20 text-purple-300">Art & Crafts</Badge>
                        <Badge className="bg-yellow-500/20 text-yellow-300">In Progress</Badge>
                      </div>
                      <CardTitle className="text-white">ArtisanCraft Marketplace</CardTitle>
                      <CardDescription className="text-slate-300">
                        Handmade goods marketplace with artist profiles and custom order management.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-400 mb-4">
                        <span>Duration: 10 weeks</span>
                        <span>2024</span>
                      </div>
                      <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Dashboard Projects */}
            <TabsContent value="dashboards" className="mt-8">
              <div className="space-y-16">
                {/* Advanced Analytics Dashboard */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl p-4 sm:p-6">
                      <Image
                        src="/images/dashboard1.png"
                        alt="Advanced Analytics Dashboard"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Live Dashboard
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-blue-500/20 text-blue-300">Analytics</Badge>
                      <Badge className="bg-green-500/20 text-green-300">Real-time</Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Advanced Analytics Dashboard</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Comprehensive admin dashboard featuring real-time analytics, revenue tracking, and advanced
                      reporting capabilities. Built with modern UI components and interactive charts for superior data
                      visualization and business intelligence.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Dashboard Features:</h4>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex items-center gap-3">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span>Real-time revenue tracking (R7,980,000+)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span>User activity monitoring and analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Target className="h-4 w-4 text-purple-400" />
                          <span>Advanced transaction analytics with trends</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-orange-400" />
                          <span>7-day transaction history visualization</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">R7.98M</div>
                        <div className="text-slate-400 text-sm">Total Revenue</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">2</div>
                        <div className="text-slate-400 text-sm">Active Users</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="bg-slate-700 text-slate-300">React</Badge>
                      <Badge className="bg-slate-700 text-slate-300">Chart.js</Badge>
                      <Badge className="bg-slate-700 text-slate-300">Real-time Data</Badge>
                      <Badge className="bg-slate-700 text-slate-300">WebSocket</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Dashboard
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                        <Code className="mr-2 h-4 w-4" />
                        Technical Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Management Dashboard */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-purple-500/20 text-purple-300">Management</Badge>
                      <Badge className="bg-green-500/20 text-green-300">Production</Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Product Management System</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Sophisticated product management interface with detailed analytics, category distribution, and
                      performance metrics. Features intuitive design for managing large product catalogs with advanced
                      filtering and search capabilities.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Management Features:</h4>
                      <ul className="space-y-3 text-slate-300">
                        <li className="flex items-center gap-3">
                          <Palette className="h-4 w-4 text-orange-400" />
                          <span>Visual category distribution with pie charts</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Search className="h-4 w-4 text-cyan-400" />
                          <span>Advanced product search and filtering</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>Most viewed products tracking and analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Database className="h-4 w-4 text-green-400" />
                          <span>Inventory management and stock alerts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-blue-400">60%</div>
                        <div className="text-slate-400 text-xs">Men's Products</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-orange-400">20%</div>
                        <div className="text-slate-400 text-xs">Women's Products</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-green-400">20%</div>
                        <div className="text-slate-400 text-xs">Deals</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="bg-slate-700 text-slate-300">Next.js</Badge>
                      <Badge className="bg-slate-700 text-slate-300">D3.js</Badge>
                      <Badge className="bg-slate-700 text-slate-300">PostgreSQL</Badge>
                      <Badge className="bg-slate-700 text-slate-300">Prisma</Badge>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl p-4 sm:p-6">
                      <Image
                        src="/images/dashboard2.png"
                        alt="Product Management Dashboard"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Active System
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Mobile Apps */}
            <TabsContent value="mobile" className="mt-8">
              <div className="text-center py-16">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                      <CardHeader className="text-center">
                        <Smartphone className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <CardTitle className="text-white">iOS Applications</CardTitle>
                        <CardDescription className="text-slate-300">
                          Native iOS apps built with Swift and React Native for optimal performance
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300">
                      <CardHeader className="text-center">
                        <Smartphone className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <CardTitle className="text-white">Android Applications</CardTitle>
                        <CardDescription className="text-slate-300">
                          High-performance Android apps with modern Material Design principles
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                      <CardHeader className="text-center">
                        <Code className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                        <CardTitle className="text-white">Cross-Platform</CardTitle>
                        <CardDescription className="text-slate-300">
                          React Native and Flutter apps for maximum reach and efficiency
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Mobile App Portfolio</h3>
                  <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Our mobile applications complement our web platforms, providing seamless experiences across all
                    devices. Each app is crafted with attention to performance, user experience, and platform-specific
                    design guidelines.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                      <div className="text-2xl font-bold text-white mb-2">15+</div>
                      <div className="text-slate-400">Mobile Apps Delivered</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                      <div className="text-2xl font-bold text-white mb-2">4.8★</div>
                      <div className="text-slate-400">Average App Store Rating</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                      <div className="text-2xl font-bold text-white mb-2">100K+</div>
                      <div className="text-slate-400">Total Downloads</div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                    Request Mobile Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Security Projects */}
            <TabsContent value="security" className="mt-8">
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Security & Penetration Testing</h3>
                  <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Our security expertise spans vulnerability assessments, penetration testing, and bug bounty
                    programs. We help businesses identify and fix security vulnerabilities before they become threats.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <Card className="bg-slate-800 border-slate-700 hover:border-red-500/50 transition-all duration-300">
                    <CardHeader>
                      <Shield className="h-12 w-12 text-red-400 mb-4" />
                      <CardTitle className="text-white">Vulnerability Assessments</CardTitle>
                      <CardDescription className="text-slate-300">
                        Comprehensive security audits identifying potential vulnerabilities in web applications and
                        infrastructure.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div>• OWASP Top 10 Testing</div>
                        <div>• SQL Injection Detection</div>
                        <div>• XSS Vulnerability Scanning</div>
                        <div>• Authentication Bypass Testing</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                    <CardHeader>
                      <Target className="h-12 w-12 text-orange-400 mb-4" />
                      <CardTitle className="text-white">Penetration Testing</CardTitle>
                      <CardDescription className="text-slate-300">
                        Ethical hacking services to test the security of your systems and applications in real-world
                        scenarios.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div>• Network Penetration Testing</div>
                        <div>• Web Application Testing</div>
                        <div>• Social Engineering Tests</div>
                        <div>• Wireless Security Assessment</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300">
                    <CardHeader>
                      <Star className="h-12 w-12 text-green-400 mb-4" />
                      <CardTitle className="text-white">Bug Bounty Programs</CardTitle>
                      <CardDescription className="text-slate-300">
                        Experienced bug bounty hunter with multiple successful discoveries and responsible disclosures.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div>• HackerOne Platform</div>
                        <div>• Bugcrowd Participation</div>
                        <div>• Private Bug Bounty Programs</div>
                        <div>• Responsible Disclosure</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Security Statistics</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Vulnerabilities Found</span>
                          <span className="text-2xl font-bold text-red-400">150+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Security Audits Completed</span>
                          <span className="text-2xl font-bold text-orange-400">25+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Bug Bounty Rewards</span>
                          <span className="text-2xl font-bold text-green-400">$15K+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300">Years of Experience</span>
                          <span className="text-2xl font-bold text-blue-400">5+</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-16 w-16 text-red-400" />
                      </div>
                      <h5 className="text-white font-medium mb-2">Certified Security Professional</h5>
                      <p className="text-slate-400 text-sm">
                        Specialized in web application security and ethical hacking methodologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with our proven expertise and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">HMS HER MAJESTY</span>
                <span className="text-blue-400 font-medium text-sm leading-tight">SOUTHFLOW</span>
              </div>
            </Link>
            <div className="text-slate-400 text-sm text-center md:text-right">
              © 2024 HMS HER MAJESTY SouthFlow. All rights reserved.
              <br />
              <span className="text-xs">Built with Next.js ⚡ Made in South Africa 🇿🇦</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
