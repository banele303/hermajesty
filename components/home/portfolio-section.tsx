"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Velfix Ecommerce",
    category: "Ecommerce Platform",
    description: "High-performance headless commerce with AI-driven recommendations.",
    image: "/images/frontstore.png", // Ensure this path exists or use a placeholder
    tags: ["Next.js", "Stripe", "AI Engine"],
    size: "large", // spans 2 cols
  },
  {
    id: 2,
    title: "PropTech Elite",
    category: "Real Estate",
    description: "Luxury property portal with virtual tours and lead automation.",
    image: "/images/hero-bg.jpg",
    tags: ["React", "Virtual VR", "CRM"],
    size: "medium", // spans 1 col
  },
  {
    id: 3,
    title: "FitPulse AI",
    category: "Mobile App",
    description: "Computer vision powered workout tracking application.",
    image: "/images/dashboard2.png",
    tags: ["React Native", "Vision API", "HealthKit"],
    size: "medium",
  },
  {
    id: 4,
    title: "Sentinal Analytics",
    category: "SaaS Dashboard",
    description: "Enterprise-grade business intelligence and reporting hub.",
    image: "/images/dashboard1.png",
    tags: ["Big Data", "D3.js", "PostgreSQL"],
    size: "large",
  },
  {
    id: 5,
    title: "SecureScan",
    category: "Cybersecurity",
    description: "Automated vulnerability assessment and penetration testing tool.",
    image: "/images/frontstore.png", // Reuse or placeholder
    tags: ["Python", "Security", "Automation"],
    size: "medium",
  },
  {
    id: 6,
    title: "GrowthFlow",
    category: "Marketing",
    description: "AI marketing agent that auto-optimizes ad spend.",
    image: "/images/dashboard2.png",
    tags: ["AI Agents", "Ads API", "Automation"],
    size: "medium",
  },
];

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative py-24 lg:py-32 bg-[#020205] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1 text-sm tracking-wider uppercase">
                Selected Works
              </Badge>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9]">
                Digital <br /> Do<span className="text-blue-600">min</span>ance.
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right max-w-sm"
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              A curation of our finest digital products. Where engineering meets art to create unfair advantages for our clients.
            </p>
            <Button variant="link" className="text-white p-0 h-auto hover:text-blue-400 group text-lg">
              View All Projects <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <PortfolioCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isLarge = project.size === "large";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 ${
        isLarge ? "md:col-span-2 aspect-[16/10] md:aspect-[21/10]" : "aspect-[4/5] md:aspect-[3/4]"
      }`}
    >
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
         <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
      </div>

      {/* Floating Action Button (Hidden until hover) */}
      <div className="absolute top-6 right-6 z-20 translate-y-[-20px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 hover:border-blue-600">
          <ExternalLink className="h-5 w-5" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 flex flex-col justify-end h-full">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
           <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm md:text-base max-w-lg line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
        </div>
      </div>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
    </motion.div>
  );
}
