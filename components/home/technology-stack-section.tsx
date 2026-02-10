"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const techCategories = [
  {
    title: "AI Frameworks",
    iconSrc: "/images/tech-stack/langchain.svg",
    description: "Orchestration & Logic",
    logos: [
      { name: "LangChain", src: "/images/tech-stack/langchain.svg" },
      { name: "LlamaIndex", src: "/images/tech-stack/llamaindex.svg" },
      { name: "OpenCV", src: "/images/tech-stack/opencv.svg" },
      { name: "CV Zone", src: "/images/tech-stack/cvzone.svg" },
    ],
    className: "lg:col-span-2",
  },
  {
    title: "Foundation Models",
    iconSrc: "/images/tech-stack/openai.svg",
    description: "Intelligence Layer",
    logos: [
      { name: "Anthropic", src: "/images/tech-stack/anthropic.svg" },
      { name: "OpenAI", src: "/images/tech-stack/openai.svg" },
      { name: "Mistral AI", src: "/images/tech-stack/mistral.svg" },
      { name: "Llama 2", src: "/images/tech-stack/llama2.svg" },
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Vector Databases",
    iconSrc: "/images/tech-stack/pinecone.svg",
    description: "Cognitive Memory",
    logos: [
      { name: "Pinecone", src: "/images/tech-stack/pinecone.svg" },
      { name: "Weaviate", src: "/images/tech-stack/weaviate.svg" },
      { name: "Quadrant", src: "/images/tech-stack/quadrant.svg" },
      { name: "ChromaDB", src: "/images/tech-stack/chromadb.svg" },
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Inference Hub",
    iconSrc: "/images/tech-stack/huggingface.svg",
    description: "Neural Compute",
    logos: [
      { name: "GooseAI", src: "/images/tech-stack/gooseai.svg" },
      { name: "Together.ai", src: "/images/tech-stack/togetherai.svg" },
      { name: "HuggingFace", src: "/images/tech-stack/huggingface.svg" },
      { name: "Replicate", src: "/images/tech-stack/replicate.svg" },
    ],
    className: "lg:col-span-2",
  },
  {
    title: "Engineering",
    iconSrc: "/images/tech-stack/nextjs.svg",
    description: "Frontend Architectures",
    logos: [
      { name: "Streamlit", src: "/images/tech-stack/streamlit.svg" },
      { name: "Next.js", src: "/images/tech-stack/nextjs.svg" },
      { name: "Gradio", src: "/images/tech-stack/gradio.svg" },
      { name: "Chainlit", src: "/images/tech-stack/chainlit.svg" },
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Deployment",
    iconSrc: "/images/tech-stack/vercel.svg",
    description: "Scale & Reliability",
    logos: [
      { name: "Vercel", src: "/images/tech-stack/vercel.svg" },
      { name: "Render", src: "/images/tech-stack/render.svg" },
      { name: "Heroku", src: "/images/tech-stack/heroku.svg" },
      { name: "Netlify", src: "/images/tech-stack/netlify.svg" },
    ],
    className: "lg:col-span-2",
  },
];

export function TechnologyStackSection() {
  return (
    <section className="relative bg-[#020202] py-24 lg:py-40 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none opacity-50" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-8">
               <span className="text-[10px] font-bold text-orange-400 tracking-[0.3em] uppercase italic">Engineering DNA</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-8 font-[Sentient]">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x">Technology Stack</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              We architect our solutions using the world's most robust frameworks, ensuring every line of code is production-ready and built for massive scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-8 sm:p-10 hover:border-orange-500/20 transition-all duration-700 shadow-2xl",
                category.className
              )}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2 font-[Sentient] group-hover:text-orange-400 transition-colors duration-500">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-bold tracking-widest uppercase">
                      {category.description}
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Image 
                      src={category.iconSrc} 
                      alt={category.title} 
                      width={48} 
                      height={48} 
                      className="object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-auto">
                  {category.logos.map((logo) => (
                    <div 
                      key={logo.name}
                      className="flex flex-col items-center gap-3 group/logo"
                    >
                      <div className="h-16 w-full rounded-[1.25rem] bg-white/[0.03] border border-white/5 flex items-center justify-center p-4 transition-all duration-500 group-hover/logo:bg-white/10 group-hover/logo:shadow-2xl group-hover/logo:scale-105 group-hover/logo:border-orange-500/20">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={32}
                          height={32}
                          className="object-contain w-full h-full grayscale group-hover/logo:grayscale-0 transition-all duration-500 opacity-40 group-hover/logo:opacity-100"
                        />
                      </div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover/logo:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/logo:translate-y-0 text-center">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
