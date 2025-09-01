"use client"

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
  Sparkles,
  Layers,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"

// Simple intersection observer hook for scroll reveal
function useReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  const ref = (node: HTMLElement | null) => {
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && (setVisible(true), obs.disconnect())),
      { threshold }
    )
    obs.observe(node)
  }
  return { ref, visible }
}

// Reusable project card with overlay & gradients
interface ProjectCardProps {
  title: string
  description: string
  year?: string
  duration?: string
  categoryBadges?: string[]
  statusBadge?: string
  icon: React.ReactNode
  accent?: string // tailwind color accent e.g. 'blue', 'purple'
}

function ProjectCard({ title, description, year, duration, categoryBadges = [], statusBadge, icon, accent = 'blue' }: ProjectCardProps) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref as any}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} `}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50 via-transparent to-purple-50" />
      <div className="absolute -top-1 -left-1 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/10 blur-2xl pointer-events-none" />
      <div className="relative p-5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className={`h-14 w-14 rounded-xl grid place-content-center bg-gradient-to-br from-${accent}-500/10 to-${accent}-600/10 border border-${accent}-200/40 text-${accent}-600`}>{icon}</div>
          {statusBadge && <span className="text-[10px] uppercase tracking-wide font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">{statusBadge}</span>}
        </div>
        <h4 className="font-semibold text-slate-900 text-lg mb-2 tracking-tight leading-snug">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {categoryBadges.map(b => (
            <span key={b} className="text-[11px] font-medium rounded-full bg-white border border-slate-200 px-2.5 py-1 shadow-sm">{b}</span>
          ))}
        </div>
        {(year || duration) && (
          <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200 pt-3 mt-auto">
            {duration && <span>Duration: {duration}</span>}
            {year && <span>{year}</span>}
          </div>
        )}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-slate-900/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowRight className="h-4 w-4 text-slate-400" />
        </div>
      </div>
    </div>
  )
}

function RotatingWord() {
  const words = ["Ecommerce", "Dashboards", "Mobile Apps", "Security"]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-block min-w-[8ch]">
      <span className="absolute inset-0 animate-fade-in-up will-change-transform">
        {words[index]}
      </span>
      <style jsx>{`
        @keyframes fade-in-up {0%{opacity:0;transform:translateY(12px) scale(.98)}60%{opacity:1}100%{opacity:1;transform:translateY(0) scale(1)}}
        .animate-fade-in-up {animation: fade-in-up .7s cubic-bezier(.16,.68,.43,.99);}
      `}</style>
    </span>
  )
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm tracking-wide">HMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-lg leading-tight">HMS HER MAJESTY</span>
                <span className="text-blue-600 font-medium text-sm leading-tight">SOUTHFLOW</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </Link>
              <Link href="/#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-slate-900 font-semibold">
                Portfolio
              </Link>
              <Link href="/#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </Link>
            </div>

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modernized */}
      <section className="relative pt-20 pb-24 lg:pt-28 overflow-hidden">
        {/* Gradient / texture backdrop */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_30%,rgba(59,130,246,.18),transparent_60%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,.18),transparent_65%),linear-gradient(to_bottom_right,#fff,#f8fafc)]" />
        <div className="pointer-events-none absolute -top-40 -left-32 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-56 w-[55rem] h-[55rem] rounded-full bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 opacity-40 blur-3xl" />
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-40 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]; [background-size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-6">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm overflow-hidden">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </span>
              <span className="text-sm font-medium">Back Home</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm mb-5">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-700">Curated Client Work</span>
            </div>
            <h1 className="relative font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6">
              Crafting Elite <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Digital</span>
              <br className="hidden sm:block" />
              <span className="text-slate-900/90">Experiences in </span>
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent"><RotatingWord /></span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
              High-performance platforms, data-rich dashboards, secure systems & immersive applications engineered with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#work"><Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 group">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-slate-300 bg-white/70 backdrop-blur-sm hover:bg-white">Start a Project</Button></Link>
            </div>

            {/* Metric badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl" id="metrics">
              {[
                { label: 'Projects', value: '50+' },
                { label: 'Industries', value: '15+' },
                { label: 'Satisfaction', value: '99%' },
                { label: 'Years', value: '5+' },
              ].map((m) => (
                <div key={m.label} className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-slate-200 to-slate-100">
                  <div className="relative h-full w-full bg-white/90 backdrop-blur-xl rounded-[calc(theme(borderRadius.xl)-1px)] border border-slate-200/70 px-4 py-5 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 tracking-tight">{m.value}</span>
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">{m.label}</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/60" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-600 max-w-3xl">
              {[
                { label: 'Next.js 14', icon: <Code className="h-3.5 w-3.5 text-blue-500" /> },
                { label: 'TypeScript', icon: <Layers className="h-3.5 w-3.5 text-sky-500" /> },
                { label: 'Performance', icon: <Zap className="h-3.5 w-3.5 text-amber-500" /> },
                { label: 'Security', icon: <Shield className="h-3.5 w-3.5 text-emerald-500" /> },
                { label: 'Scalability', icon: <Rocket className="h-3.5 w-3.5 text-purple-500" /> },
              ].map(t => (
                <span key={t.label} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm hover:border-blue-400/50 transition-colors">
                  {t.icon}
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center" aria-hidden>
            <div className="h-10 w-6 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
              <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

    {/* Portfolio Content */}
  <section id="work" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ecommerce" className="w-full">
    <TabsList className="relative grid w-full grid-cols-2 sm:grid-cols-4 bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-fuchsia-100/40" />
      {['ecommerce','dashboards','mobile','security'].map(val => (
        <TabsTrigger key={val} value={val} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/10 data-[state=active]:to-purple-500/10 data-[state=active]:text-slate-900 text-slate-600 relative after:absolute after:inset-0 after:rounded-xl data-[state=active]:after:shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-all">
          <span className="capitalize tracking-wide font-medium text-sm">{val.replace('-',' ')}</span>
        </TabsTrigger>
      ))}
            </TabsList>

            {/* Ecommerce Projects */}
            <TabsContent value="ecommerce" className="mt-8">
              <div className="space-y-16">
                {/* Velfix Ecommerce Platform */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-blue-50 text-blue-700 border border-blue-200">Featured Project</Badge>
                      <Badge className="bg-green-50 text-green-700 border border-green-200">Live</Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Velfix Ecommerce Platform</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      A cutting-edge ecommerce platform built with Next.js 14, featuring advanced search functionality,
                      intelligent product categorization, and seamless user experience. The platform handles thousands
                      of products with lightning-fast performance and mobile-first design principles.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-2xl font-bold text-slate-900">99.9%</div>
                        <div className="text-slate-500 text-sm">Uptime</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-2xl font-bold text-slate-900">2.1s</div>
                        <div className="text-slate-500 text-sm">Load Time</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-2xl font-bold text-slate-900">1000+</div>
                        <div className="text-slate-500 text-sm">Products</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-2xl font-bold text-slate-900">95%</div>
                        <div className="text-slate-500 text-sm">Mobile Score</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-slate-900 font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-blue-600" />
                          Advanced search with filters and autocomplete
                        </li>
                        <li className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-green-600" />
                          Mobile-first responsive design
                        </li>
                        <li className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-amber-500" />
                          Server-side rendering for optimal performance
                        </li>
                        <li className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-purple-600" />
                          Secure payment processing
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="bg-blue-50 text-blue-700 border border-blue-200">Next.js 14</Badge>
                      <Badge className="bg-green-50 text-green-700 border border-green-200">TypeScript</Badge>
                      <Badge className="bg-purple-50 text-purple-700 border border-purple-200">Prisma</Badge>
                      <Badge className="bg-orange-50 text-orange-700 border border-orange-200">Tailwind CSS</Badge>
                      <Badge className="bg-red-50 text-red-700 border border-red-200">Stripe</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/10">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Site
                      </Button>
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                        <Code className="mr-2 h-4 w-4 text-purple-600" />
                        Case Study
                      </Button>
                    </div>
                  </div>

                  <div className="relative order-1 lg:order-2">
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-4 sm:p-6 ring-1 ring-slate-200/60">
                      <Image
                        src="/images/frontstore.png"
                        alt="Velfix Ecommerce Platform"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      Live
                    </div>
                  </div>
                </div>

                {/* Additional Ecommerce Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <ProjectCard
                    title="StyleHub Fashion Store"
                    description="Modern fashion ecommerce with AR try-on & social shopping integration."
                    duration="6 wks"
                    year="2024"
                    categoryBadges={["Fashion", "AR", "Social"]}
                    statusBadge="Completed"
                    icon={<Globe className="h-7 w-7" />}
                    accent="blue"
                  />
                  <ProjectCard
                    title="TechMart Electronics"
                    description="High-performance electronics store with advanced inventory & B2B features."
                    duration="8 wks"
                    year="2024"
                    categoryBadges={["Electronics", "Inventory", "B2B"]}
                    statusBadge="Completed"
                    icon={<Database className="h-7 w-7" />}
                    accent="green"
                  />
                  <ProjectCard
                    title="ArtisanCraft Marketplace"
                    description="Handmade goods marketplace with artist profiles & custom orders."
                    duration="10 wks"
                    year="2024"
                    categoryBadges={["Marketplace", "Artists", "Custom"]}
                    statusBadge="In Progress"
                    icon={<Palette className="h-7 w-7" />}
                    accent="purple"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Dashboard Projects */}
            <TabsContent value="dashboards" className="mt-8">
              <div className="space-y-16">
                {/* Advanced Analytics Dashboard */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-slate-100 to-white rounded-2xl p-4 sm:p-6 border border-slate-200">
                      <Image
                        src="/images/dashboard1.png"
                        alt="Advanced Analytics Dashboard"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      Live
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-blue-500/20 text-blue-300">Analytics</Badge>
                      <Badge className="bg-green-500/20 text-green-300">Real-time</Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Advanced Analytics Dashboard</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Comprehensive admin dashboard featuring real-time analytics, revenue tracking, and advanced
                      reporting capabilities. Built with modern UI components and interactive charts for superior data
                      visualization and business intelligence.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-slate-900 font-semibold mb-3">Dashboard Features:</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-center gap-3">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span>Real-time revenue tracking (R7,980,000+)</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span>User activity monitoring and analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Target className="h-4 w-4 text-purple-600" />
                          <span>Advanced transaction analytics with trends</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span>7-day transaction history visualization</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-2xl font-bold text-green-600">R7.98M</div>
                        <div className="text-slate-500 text-sm">Total Revenue</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-2xl font-bold text-blue-600">2</div>
                        <div className="text-slate-500 text-sm">Active Users</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">React</Badge>
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">Chart.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">Real-time Data</Badge>
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">WebSocket</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/10">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Dashboard
                      </Button>
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                        <Code className="mr-2 h-4 w-4 text-purple-600" />
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Product Management System</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Sophisticated product management interface with detailed analytics, category distribution, and
                      performance metrics. Features intuitive design for managing large product catalogs with advanced
                      filtering and search capabilities.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-slate-900 font-semibold mb-3">Management Features:</h4>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-center gap-3">
                          <Palette className="h-4 w-4 text-orange-500" />
                          <span>Visual category distribution with pie charts</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Search className="h-4 w-4 text-cyan-600" />
                          <span>Advanced product search and filtering</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Most viewed products tracking and analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Database className="h-4 w-4 text-green-600" />
                          <span>Inventory management and stock alerts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-xl font-bold text-blue-600">60%</div>
                        <div className="text-slate-500 text-xs">Men's Products</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-xl font-bold text-orange-500">20%</div>
                        <div className="text-slate-500 text-xs">Women's Products</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm">
                        <div className="text-xl font-bold text-green-600">20%</div>
                        <div className="text-slate-500 text-xs">Deals</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">Next.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">D3.js</Badge>
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">PostgreSQL</Badge>
                      <Badge className="bg-slate-100 text-slate-700 border border-slate-200">Prisma</Badge>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-r from-slate-100 to-white rounded-2xl p-4 sm:p-6 border border-slate-200">
                      <Image
                        src="/images/dashboard2.png"
                        alt="Product Management Dashboard"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      Active
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
                    <Card className="bg-white border border-slate-200 hover:border-blue-500/50 transition-all duration-300 shadow-sm">
                      <CardHeader className="text-center">
                        <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <CardTitle className="text-slate-900">iOS Applications</CardTitle>
                        <CardDescription className="text-slate-600">
                          Native iOS apps built with Swift and React Native for optimal performance
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-white border border-slate-200 hover:border-green-500/50 transition-all duration-300 shadow-sm">
                      <CardHeader className="text-center">
                        <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <CardTitle className="text-slate-900">Android Applications</CardTitle>
                        <CardDescription className="text-slate-600">
                          High-performance Android apps with modern Material Design principles
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-white border border-slate-200 hover:border-purple-500/50 transition-all duration-300 shadow-sm">
                      <CardHeader className="text-center">
                        <Code className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                        <CardTitle className="text-slate-900">Cross-Platform</CardTitle>
                        <CardDescription className="text-slate-600">
                          React Native and Flutter apps for maximum reach and efficiency
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile App Portfolio</h3>
                  <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Our mobile applications complement our web platforms, providing seamless experiences across all
                    devices. Each app is crafted with attention to performance, user experience, and platform-specific
                    design guidelines.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-slate-900 mb-2">15+</div>
                      <div className="text-slate-500">Mobile Apps Delivered</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-slate-900 mb-2">4.8★</div>
                      <div className="text-slate-500">Average App Store Rating</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
                      <div className="text-2xl font-bold text-slate-900 mb-2">100K+</div>
                      <div className="text-slate-500">Total Downloads</div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/10">
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
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Security & Penetration Testing</h3>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Our security expertise spans vulnerability assessments, penetration testing, and bug bounty
                    programs. We help businesses identify and fix security vulnerabilities before they become threats.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card className="bg-white border border-slate-200 hover:border-red-500/50 transition-all duration-300 shadow-sm">
                    <CardHeader>
            <Shield className="h-12 w-12 text-red-600 mb-4" />
            <CardTitle className="text-slate-900">Vulnerability Assessments</CardTitle>
            <CardDescription className="text-slate-600">
                        Comprehensive security audits identifying potential vulnerabilities in web applications and
                        infrastructure.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
            <div className="space-y-2 text-sm text-slate-600">
                        <div>• OWASP Top 10 Testing</div>
                        <div>• SQL Injection Detection</div>
                        <div>• XSS Vulnerability Scanning</div>
                        <div>• Authentication Bypass Testing</div>
                      </div>
                    </CardContent>
                  </Card>

          <Card className="bg-white border border-slate-200 hover:border-orange-500/50 transition-all duration-300 shadow-sm">
                    <CardHeader>
            <Target className="h-12 w-12 text-orange-500 mb-4" />
            <CardTitle className="text-slate-900">Penetration Testing</CardTitle>
            <CardDescription className="text-slate-600">
                        Ethical hacking services to test the security of your systems and applications in real-world
                        scenarios.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
            <div className="space-y-2 text-sm text-slate-600">
                        <div>• Network Penetration Testing</div>
                        <div>• Web Application Testing</div>
                        <div>• Social Engineering Tests</div>
                        <div>• Wireless Security Assessment</div>
                      </div>
                    </CardContent>
                  </Card>

          <Card className="bg-white border border-slate-200 hover:border-green-500/50 transition-all duration-300 shadow-sm">
                    <CardHeader>
            <Star className="h-12 w-12 text-green-600 mb-4" />
            <CardTitle className="text-slate-900">Bug Bounty Programs</CardTitle>
            <CardDescription className="text-slate-600">
                        Experienced bug bounty hunter with multiple successful discoveries and responsible disclosures.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
            <div className="space-y-2 text-sm text-slate-600">
                        <div>• HackerOne Platform</div>
                        <div>• Bugcrowd Participation</div>
                        <div>• Private Bug Bounty Programs</div>
                        <div>• Responsible Disclosure</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Security Statistics</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
              <span className="text-slate-600">Vulnerabilities Found</span>
              <span className="text-2xl font-bold text-red-600">150+</span>
                        </div>
                        <div className="flex justify-between items-center">
              <span className="text-slate-600">Security Audits Completed</span>
              <span className="text-2xl font-bold text-orange-500">25+</span>
                        </div>
                        <div className="flex justify-between items-center">
              <span className="text-slate-600">Bug Bounty Rewards</span>
              <span className="text-2xl font-bold text-green-600">$15K+</span>
                        </div>
                        <div className="flex justify-between items-center">
              <span className="text-slate-600">Years of Experience</span>
              <span className="text-2xl font-bold text-blue-600">5+</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-1 ring-red-200/40">
            <Shield className="h-16 w-16 text-red-600" />
                      </div>
            <h5 className="text-slate-900 font-medium mb-2">Certified Security Professional</h5>
            <p className="text-slate-600 text-sm">
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
      <section className="py-16 lg:py-20 bg-slate-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with our proven expertise and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 shadow-lg shadow-blue-500/10"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-white text-lg px-8 py-4"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-lg leading-tight">HMS HER MAJESTY</span>
                <span className="text-blue-600 font-medium text-sm leading-tight">SOUTHFLOW</span>
              </div>
            </Link>
            <div className="text-slate-500 text-sm text-center md:text-right">
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
