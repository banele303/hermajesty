import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50/40 dark:bg-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-50 text-green-700 border border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Our Portfolio</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects We've Built for Clients</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover our successful projects across ecommerce, mobile apps, and web development. Each project showcases our commitment to quality and innovation.
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
  )
}
