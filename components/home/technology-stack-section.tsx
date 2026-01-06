"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const techCategories = [
  {
    title: "AI Frameworks",
    iconSrc: "/images/tech-stack/langchain.svg", // Representative "Real" Icon
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
    title: "Vector Database",
    iconSrc: "/images/tech-stack/pinecone.svg",
    description: "Long-term Memory",
    logos: [
      { name: "Pinecone", src: "/images/tech-stack/pinecone.svg" },
      { name: "Weaviate", src: "/images/tech-stack/weaviate.svg" },
      { name: "Quadrant", src: "/images/tech-stack/quadrant.svg" },
      { name: "ChromaDB", src: "/images/tech-stack/chromadb.svg" },
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Hosting / Model Hub",
    iconSrc: "/images/tech-stack/huggingface.svg",
    description: "Inference & Compute",
    logos: [
      { name: "GooseAI", src: "/images/tech-stack/gooseai.svg" },
      { name: "Together.ai", src: "/images/tech-stack/togetherai.svg" },
      { name: "HuggingFace", src: "/images/tech-stack/huggingface.svg" },
      { name: "Replicate", src: "/images/tech-stack/replicate.svg" },
    ],
    className: "lg:col-span-2",
  },
  {
    title: "Frontend Tech",
    iconSrc: "/images/tech-stack/nextjs.svg",
    description: "User Interface",
    logos: [
      { name: "Streamlit", src: "/images/tech-stack/streamlit.svg" },
      { name: "Next.js", src: "/images/tech-stack/nextjs.svg" },
      { name: "Gradio", src: "/images/tech-stack/gradio.svg" },
      { name: "Chainlit", src: "/images/tech-stack/chainlit.svg" },
    ],
    className: "lg:col-span-1",
  },
  {
    title: "Frontend Hosting",
    iconSrc: "/images/tech-stack/vercel.svg",
    description: "Deployment",
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
    <section className="relative bg-slate-50 dark:bg-[#050a1f] py-24 lg:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/50 dark:bg-blue-900/20 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Modern Tech Stack
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Industry Leaders</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We leverage the most robust and scalable technologies to ensure your product is future-proof and production-ready from day one.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 hover:shadow-xl transition-all duration-300",
                category.className
              )}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {category.description}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-2.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={category.iconSrc} 
                      alt={category.title} 
                      width={40} 
                      height={40} 
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto">
                  {category.logos.map((logo) => (
                    <div 
                      key={logo.name}
                      className="flex flex-col items-center gap-2 group/logo"
                    >
                      <div className="h-14 w-full rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center p-3 transition-all duration-300 group-hover/logo:bg-white dark:group-hover/logo:bg-slate-700 group-hover/logo:shadow-md group-hover/logo:scale-105">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={32}
                          height={32}
                          className="object-contain w-full h-full grayscale group-hover/logo:grayscale-0 transition-all duration-300 opacity-70 group-hover/logo:opacity-100"
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider opacity-0 group-hover/logo:opacity-100 transition-opacity">
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
    </section>
  );
}
