"use client";

import Link from "next/link";
import { GL } from "../gl";
import { Button } from "../ui/button";
import { HeroFlowCard } from "./hero-flow-card";
import { Star } from "lucide-react";
import { TypingWords } from "../typing-words";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background gl */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <GL hovering={false} />
      </div>
      <div className="relative z-10 container mx-auto pt-20 md:pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headline & CTAs */}
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              South Africa's Premier Digital Agency
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-left">
              <span className="text-white block mb-2">Architecting </span>
              <TypingWords
                words={[
                  "Digital Experiences",
                  "AI Agents",
                  "Mobile Applications",
                  "High-End Websites",
                  "Automation Systems",
                ]}
                typingSpeedMs={70}
                deletingSpeedMs={45}
                holdMs={900}
                className="min-w-[16ch] text-primary animate-typing-color bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
              />
            </h1>
            <style jsx>{`
              @keyframes typing-color-fade {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
              }
              .animate-typing-color { animation: typing-color-fade 2.2s ease-in-out infinite; }
            `}</style>
           
            <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-xl text-left leading-relaxed">
              We fuse cutting-edge design with powerful AI to build digital assets that don't just exist—they dominate. 
              From Johannesburg to the world, we deliver high-performance software for visionary businesses.
            </p>

            {/* Rating row */}
            <div className="mt-6 flex items-center gap-3 text-slate-300">
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm">5.0 on Google • Trusted by SA businesses</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white/10 px-6 py-6" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>

            {/* Capability badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Custom Software",
                "Web Development",
                "Mobile App Development",
                "AI & Automation",
                "Integrations",
              ].map((label) => (
                <span key={label} className="px-3 py-1 rounded-full text-xs border border-blue-500/30 bg-blue-500/10 text-blue-300">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Flow Card */}
          <div className="relative">
            <HeroFlowCard />
          </div>
        </div>
      </div>
    </section>
  );
}
