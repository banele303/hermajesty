"use client";

import Image from "next/image";
import {
  BrainCircuit,
  Cpu,
  Database,
  LayoutDashboard,
  Layers,
  Server,
} from "lucide-react";

const techCategories = [
  {
    title: "AI Frameworks",
    icon: BrainCircuit,
    logos: [
      { name: "LangChain", src: "/images/tech-stack/langchain.svg" },
      { name: "LlamaIndex", src: "/images/tech-stack/llamaindex.svg" },
      { name: "OpenCV", src: "/images/tech-stack/opencv.svg" },
      { name: "CV Zone", src: "/images/tech-stack/cvzone.svg" },
    ],
  },
  {
    title: "Hosting / Model Hub",
    icon: Server,
    logos: [
      { name: "GooseAI", src: "/images/tech-stack/gooseai.svg" },
      { name: "Together.ai", src: "/images/tech-stack/togetherai.svg" },
      { name: "HuggingFace", src: "/images/tech-stack/huggingface.svg" },
      { name: "Replicate", src: "/images/tech-stack/replicate.svg" },
    ],
  },
  {
    title: "Foundation Models",
    icon: Cpu,
    logos: [
      { name: "Anthropic", src: "/images/tech-stack/anthropic.svg" },
      { name: "OpenAI", src: "/images/tech-stack/openai.svg" },
      { name: "Mistral AI", src: "/images/tech-stack/mistral.svg" },
      { name: "Llama 2", src: "/images/tech-stack/llama2.svg" },
    ],
  },
  {
    title: "Frontend Tech",
    icon: LayoutDashboard,
    logos: [
      { name: "Streamlit", src: "/images/tech-stack/streamlit.svg" },
      { name: "Next.js", src: "/images/tech-stack/nextjs.svg" },
      { name: "Gradio", src: "/images/tech-stack/gradio.svg" },
      { name: "Chainlit", src: "/images/tech-stack/chainlit.svg" },
    ],
  },
  {
    title: "Vector Database",
    icon: Database,
    logos: [
      { name: "Pinecone", src: "/images/tech-stack/pinecone.svg" },
      { name: "Weaviate", src: "/images/tech-stack/weaviate.svg" },
      { name: "Quadrant", src: "/images/tech-stack/quadrant.svg" },
      { name: "ChromaDB", src: "/images/tech-stack/chromadb.svg" },
    ],
  },
  {
    title: "Frontend Hosting",
    icon: Layers,
    logos: [
      { name: "Vercel", src: "/images/tech-stack/vercel.svg" },
      { name: "Render", src: "/images/tech-stack/render.svg" },
      { name: "Heroku", src: "/images/tech-stack/heroku.svg" },
      { name: "Netlify", src: "/images/tech-stack/netlify.svg" },
    ],
  },
];

export function TechnologyStackSection() {
  return (
    <section className="bg-slate-100 dark:bg-[#020205] py-20 lg:py-28 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-800 px-5 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              ⚡
            </span>
            Automation Stack
          </div>
          <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Built on the tools that power modern AI products
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Every engagement taps into production-ready partners so you scale fast without vendor lock-in.
          </p>
        </div>

        <div className="space-y-5">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="grid gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 shadow-sm dark:shadow-none sm:p-6 lg:grid-cols-[220px_1fr]"
            >
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 px-4 py-4 sm:px-6 sm:py-6 lg:flex-col lg:items-start lg:justify-center">
                <div className="flex items-center gap-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 px-3 py-2 text-blue-600 dark:text-blue-400">
                  <category.icon className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {category.title}
                  </span>
                </div>
                <span className="hidden text-xs font-medium text-slate-400 dark:text-slate-500 lg:block">
                  Preferred partners
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {category.logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 px-4 py-3 transition hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white dark:bg-slate-700 shadow-sm p-1.5 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
