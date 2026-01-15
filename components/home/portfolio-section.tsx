"use client";

import { useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionTemplate, 
  useMotionValue,
  useSpring
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    size: "large", // spans 2 cols
  },
  {
    id: 2,
    title: "Student 24",
    category: "Student Housing",
    description: "Multi-property platform exclusively for student accommodation listings.",
    image: "/images/portifolio/student-24.png",
    tags: ["React", "Maps API", "Marketplace"],
    link: "https://www.student24.co/",
    size: "medium", // spans 1 col
  },
  {
    id: 3,
    title: "Advance Auto",
    category: "Car Dealership",
    description: "Premium car dealership website for browsing and purchasing vehicles.",
    image: "/images/portifolio/advanced-portfolio.png",
    tags: ["Next.js", "Automotive", "SEO"],
    link: "https://www.advanceauto.co.za",
    size: "medium",
  },
  {
    id: 4,
    title: "Sentinal Analytics",
    category: "SaaS Dashboard",
    description: "Enterprise-grade business intelligence and reporting hub.",
    image: "/images/dashboard1.png",
    tags: ["Big Data", "D3.js", "PostgreSQL"],
    link: "#",
    size: "large",
  },
  {
    id: 5,
    title: "SecureScan",
    category: "Cybersecurity",
    description: "Automated vulnerability assessment and penetration testing tool.",
    image: "/images/frontstore.png", // Reuse or placeholder
    tags: ["Python", "Security", "Automation"],
    link: "#",
    size: "medium",
  },
  {
    id: 6,
    title: "MON Bridal",
    category: "Ecommerce & Events",
    description: "Exclusive ecommerce platform for jewellery and event decorations.",
    image: "/images/portifolio/mon-portfolio.png",
    tags: ["Ecommerce", "Next.js", "Design"],
    link: "https://mon-bridal-events.vercel.app/",
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
      {/* Background Decor - Deeper and more complex gradient mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-225 h-225 bg-linear-to-br from-blue-600/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-225 h-225 bg-linear-to-tr from-indigo-600/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - Improved layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -left-12 top-2 hidden xl:block"
            >
              <div className="w-px h-32 bg-linear-to-b from-blue-500 to-transparent opacity-50" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                 <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase bg-blue-500/5 backdrop-blur-md rounded-full">
                  Selected Works
                </Badge>
                <div className="h-px bg-linear-to-r from-blue-500/50 to-transparent w-32 hidden sm:block" />
              </div>
             
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-6">
                Digital <br className="hidden md:block" /> 
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-500 z-10 relative">Excellence.</span>
                  {/* Subtle glow behind text */}
                  <span className="absolute inset-0 bg-blue-500/20 blur-2xl z-0" />
                </span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:text-right max-w-sm"
          >
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 font-light">
              A curation of our finest digital products. Where engineering meets art to create <span className="text-white font-medium">unfair advantages</span> for our clients.
            </p>
            <Button variant="outline" className="group h-14 px-8 border-white/10 bg-white/5 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 rounded-full text-base">
              View All Projects 
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  
  // Spotlight & Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    
    // Tilt effect (simplified)
    // You could map these values to rotateX/Y if you wanted full 3D tilt
    // but a spotlight is often cleaner for grid layouts.
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative rounded-[2.5rem] bg-slate-900/40 border border-white/5 p-3 sm:p-4",
        isLarge ? "md:col-span-2 aspect-16/10 md:aspect-2/1" : "aspect-4/5 md:aspect-3/4"
      )}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] transition duration-300 opacity-0 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Border Highlight that follows mouse */}
       <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 z-30"
         style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.4),
              transparent 60%
            )
          `,
           maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
           maskComposite: "exclude", 
           WebkitMaskComposite: "xor",
           padding: "1px",
        }}
      />

      <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a0a0a]">
          <motion.div 
            className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#020205] via-[#020205]/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60 z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#020205]/90 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Layer */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col justify-end h-full pointer-events-none">
          {/* Hover Lift Content */}
          <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider bg-white/5 text-white/90 backdrop-blur-sm border border-white/10 uppercase">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-end justify-between gap-4">
              <div className="w-full">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight tracking-tight drop-shadow-lg whitespace-nowrap">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base max-w-lg line-clamp-2 font-medium">
                    {project.description}
                  </p>
              </div>
              
              {/* Action Button */}
              <div className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-500 scale-50 opacity-0 -rotate-45 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-0">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clickable Overlay */}
      <Link 
        href={project.link} 
        target={project.link?.startsWith("http") ? "_blank" : undefined}
        className="absolute inset-0 z-40 focus:outline-none"
      >
        <span className="sr-only">View project {project.title}</span>
      </Link>
    </motion.div>
  );
}
