"use client"

import Link from "next/link"
import { ArrowUpRight, Code2, Globe, Sparkles, Workflow, Cpu, Zap, MoveRight } from "lucide-react"
import { Button } from "../ui/button"

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#020202] py-24 lg:py-40 overflow-hidden text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-linear-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-[-20%] w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold text-orange-400 tracking-[0.3em] uppercase">Scale Your Vision</span>
             </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-white font-[Sentient] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Elite Engineering. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x">
                Digital Dominance.
              </span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              We don't just build websites—we engineer high-yield digital assets. Scaling your business with <span className="text-white font-medium">precision AI</span> and world-class architectures.
            </p>
          </div>
          <div className="hidden md:block animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button variant="outline" className="rounded-full border-white/10 text-slate-300 hover:text-white hover:bg-white/5 backdrop-blur-md px-10 h-16 text-sm font-bold tracking-tight transition-all duration-500 group border-none bg-white/5" asChild>
                <Link href="/contact">
                  View All Capabilities <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
          
          {/* Card 1: Custom Software (Large Vertical) */}
          <div className="group relative md:row-span-2 rounded-[3.5rem] bg-white/[0.02] border border-white/5 overflow-hidden p-10 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-700 shadow-2xl">
             <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="absolute inset-0 bg-gradient-to-b from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-10 text-orange-500 border border-orange-500/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-medium text-white mb-6 font-[Sentient]">Custom Systems</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Tailored high-performance solutions. From enterprise platforms to custom SaaS architectures, we build code that scales with your ambition.
                </p>
                <ul className="mt-10 space-y-4">
                  {["Enterprise Ecosystems", "Custom SaaS Architectures", "High-Performance APIs", "Proprietary Algorithms"].map(item => (
                    <li key={item} className="flex items-center gap-4 text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.4)]" /> {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="relative z-10 pt-10">
               <Link href="/contact" className="inline-flex items-center text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-orange-400 transition-all duration-300">
                 Consult on Engineering <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Link>
             </div>
          </div>

          {/* Card 2: AI Agents (Wide Horizontal) */}
          <div className="group relative md:col-span-2 rounded-[3.5rem] bg-white/[0.02] border border-white/5 overflow-hidden p-12 flex flex-col md:flex-row items-center gap-12 hover:border-orange-500/20 transition-all duration-700 shadow-2xl">
             <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="flex-1 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-10 text-orange-500 border border-orange-500/20 group-hover:scale-110 transition-all duration-500">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-5xl font-medium text-white mb-6 font-[Sentient]">AI Orchestration</h3>
                <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg">
                  Deploy autonomous agents and intelligent workflows that execute tasks, manage intake, and capture revenue 24/7 without human intervention.
                </p>
                <Link href="/ai-services" className="inline-flex items-center text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-orange-400 transition-all duration-300">
                  Deploy Agents <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
             </div>
             
             <div className="w-full md:w-2/5 aspect-square rounded-[3rem] bg-[#050505] border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700 group-hover:shadow-[0_0_50px_rgba(249,115,22,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-50" />
                <div className="relative">
                   <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-ping opacity-20" />
                   <div className="absolute inset-0 border border-orange-500/10 rounded-full scale-150 animate-pulse opacity-10" />
                   <Cpu className="w-24 h-24 text-white/5 group-hover:text-orange-500/30 transition-all duration-1000" />
                </div>
             </div>
          </div>

          {/* Card 3: Intelligent Automation */}
          <div className="group relative rounded-[3.5rem] bg-white/[0.02] border border-white/5 overflow-hidden p-10 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-700">
             <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 text-orange-400 border border-orange-500/20 group-hover:rotate-6 transition-all duration-500">
                  <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-medium text-white mb-4 font-[Sentient]">Process Flow</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Seamless complex workflows using advanced tech stacks. Python, n8n, and custom API layers for total operational efficiency.
                </p>
             </div>
             <div className="relative z-10 pt-8 border-t border-white/5">
                <Link href="/contact" className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase text-slate-400 group-hover:text-orange-400 transition-all duration-300">
                  Integrate Now <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
             </div>
          </div>

          {/* Card 4: Premium Web Dev */}
          <div className="group relative rounded-[3.5rem] bg-white/[0.02] border border-white/5 overflow-hidden p-10 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-700">
             <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 text-orange-400 border border-orange-500/20 group-hover:-rotate-6 transition-all duration-500">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-medium text-white mb-4 font-[Sentient]">Digital Portals</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Next.js ecosystems that convert. Precision SEO, performance first architectures, and world-class visual storytelling.
                </p>
             </div>
             <div className="relative z-10 pt-8 border-t border-white/5">
                <Link href="/portfolio" className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase text-slate-400 group-hover:text-orange-400 transition-all duration-300">
                  View Assets <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
             </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
