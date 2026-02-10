"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
} from "framer-motion";
import { ArrowUpRight, MoveRight, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Joumasecars",
    category: "Ecommerce Platform",
    description: "Multi-vendor ecommerce platform for car parts and dealerships.",
    image: "/images/portifolio/portfolio-project.png",
    tags: ["Next.js", "Stripe", "Marketplace"],
    link: "https://joumasecars.africa",
    className: "lg:col-span-2",
  },
  {
    id: 2,
    title: "Student 24",
    category: "Student Housing",
    description: "Multi-property platform exclusively for student accommodation listings.",
    image: "/images/portifolio/student-24.png",
    tags: ["React", "Maps API", "Marketplace"],
    link: "https://www.student24.co/",
    className: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Advance Auto",
    category: "Car Dealership",
    description: "Premium car dealership website for browsing and purchasing vehicles.",
    image: "/images/portifolio/advanced-portfolio.png",
    tags: ["Next.js", "Automotive", "SEO"],
    link: "https://www.advanceauto.co.za",
    className: "lg:col-span-1",
  },
  {
    id: 4,
    title: "Sentinal Analytics",
    category: "SaaS Dashboard",
    description: "Enterprise-grade business intelligence and reporting hub.",
    image: "/images/dashboard1.png",
    tags: ["Big Data", "D3.js", "PostgreSQL"],
    link: "#",
    className: "lg:col-span-2",
  },
  {
    id: 5,
    title: "SecureScan",
    category: "Cybersecurity",
    description: "Automated vulnerability assessment and penetration testing tool.",
    image: "/images/frontstore.png",
    tags: ["Python", "Security", "Automation"],
    link: "#",
    className: "lg:col-span-1",
  },
  {
    id: 6,
    title: "MON Bridal",
    category: "Ecommerce & Events",
    description: "Exclusive ecommerce platform for jewellery and event decorations.",
    image: "/images/portifolio/mon-portfolio.png",
    tags: ["Ecommerce", "Next.js", "Design"],
    link: "https://mon-bridal-events.vercel.app/",
    className: "lg:col-span-1",
  },
];

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-40 bg-[#020202] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Matching Updated Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-6 transition-all">
                <span className="text-[10px] font-bold text-orange-400 tracking-[0.2em] uppercase">Built for Scale</span>
             </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-white font-[Sentient]"
            >
              Digital <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x italic">Excellence.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right max-w-sm"
          >
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-light">
              Where engineering meets art. We create <span className="text-white font-medium">unfair advantages</span> through world-class design and elite code.
            </p>
            <Button variant="outline" className="rounded-full border-white/10 text-slate-300 hover:text-white hover:bg-white/5 backdrop-blur-md px-10 h-16 text-sm font-bold tracking-tight transition-all duration-500 border-none bg-white/5 group" asChild>
               <Link href="/portfolio">
                View All Assets <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </Button>
          </motion.div>
        </div>

        {/* Immersive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <PortfolioCard key={project.id} project={project} index={idx} />
          ))}
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
  );
}

function PortfolioCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "group relative flex flex-col h-full bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-all duration-700 rounded-[2rem] overflow-hidden shadow-2xl",
         project.className
      )}
    >
      {/* 1. IMAGE CONTAINER - Fixed rounding and edge clipping */}
      <div className="p-4 md:p-6 pb-0">
        <div className="relative aspect-[16/9] bg-[#0a0a0a] rounded-t-xl rounded-b-sm overflow-hidden border border-white/5 shadow-inner">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain object-top transition-transform duration-1000 ease-in-out group-hover:scale-105 rounded-t-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={index < 6}
            quality={100}
          />
          
          {/* Subtle Browser-like Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-white/10 backdrop-blur-md flex items-center px-3 gap-1.5 z-20 border-b border-white/5">
             <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#020202]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px] z-10 flex items-center justify-center p-6">
             <Link href={project.link} className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center text-white transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_30px_rgba(234,88,12,0.5)]">
                <ExternalLinkIcon className="w-6 h-6" />
             </Link>
          </div>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="flex flex-col flex-1 p-8 pt-8">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-bold text-[10px] tracking-[0.2em] uppercase">{project.category}</span>
           </div>
           <div className="flex gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
              ))}
           </div>
        </div>

        <h3 className="text-3xl font-medium text-white mb-4 font-[Sentient] group-hover:text-orange-400 transition-colors duration-500">
           {project.title}
        </h3>
        
        <p className="text-slate-400 text-lg line-clamp-2 font-light leading-relaxed mb-8">
           {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
           <Link href={project.link} className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-orange-400 transition-all duration-300">
              Launch Site <ArrowUpRight className="w-4 h-4" />
           </Link>
           <div className="flex items-center gap-2 text-slate-600">
              <Globe className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-tighter">Live Deployment</span>
           </div>
        </div>
      </div>

      <Link href={project.link} className="absolute inset-0 z-30 focus:outline-none md:hidden">
        <span className="sr-only">View project {project.title}</span>
      </Link>
    </motion.div>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
