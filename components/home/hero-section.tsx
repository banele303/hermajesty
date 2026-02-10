"use client";

import Link from "next/link";
import { MoveRight, Star, Zap, Play, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { TypingWords } from "../typing-words";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#020202]">
      {/* Premium Background Architecture */}
      <div className="absolute inset-0 z-0">
          {/* Radial Glows */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-orange-500/10 blur-[180px] rounded-full opacity-40 pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/5 blur-[140px] rounded-full opacity-20 pointer-events-none" />
          
          {/* Animated Voice Aura / Pulse Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-40">
             <div className="absolute inset-0 border border-orange-500/10 rounded-full animate-[ping_4s_linear_infinite]" />
             <div className="absolute inset-0 border border-orange-500/5 rounded-full scale-125 animate-[ping_6s_linear_infinite_1s]" />
             <div className="absolute inset-0 border border-orange-500/5 rounded-full scale-150 animate-[ping_8s_linear_infinite_2s]" />
          </div>

          {/* Mesh Grid Backdrop */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          {/* Grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            
            {/* 1. STATUS BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
              </div>
              <span className="text-[11px] font-bold text-white tracking-[0.3em] uppercase">South Africa's Elite Digital Architects</span>
            </div>

            {/* 2. MAIN HEADLINE */}
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-medium tracking-tighter text-white mb-10 leading-[0.95] font-[Sentient] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              We Build Assets <br className="hidden lg:block"/>
              That <span className="relative inline-block italic">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x">Dominate</span>
                <span className="absolute -inset-x-4 -inset-y-2 bg-orange-500/10 blur-2xl rounded-full z-0"></span>
              </span> <br />
              <TypingWords
                words={[
                  "Mobile Apps",
                  "Custum Websites",
                  "AI Agents & Automations",
                  "High End Ecommerce Apps",
                ]}
                typingSpeedMs={70}
                deletingSpeedMs={45}
                holdMs={1500}
                className="block text-4xl sm:text-6xl lg:text-8xl mt-4 font-light text-slate-400"
              />
            </h1>

            {/* 3. SUBTEXT */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed animate-in fade-in slide-in-from-bot tom-8 duration-1000 delay-200">
              We build Premium Digital Assets. <span className="text-white font-medium"> <br/>Ai Agents & Automations</span> <br/>Ai Receptionists and custom websites
            </p>

            {/* 4. ACTIONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-28 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button size="lg" className="group h-20 px-12 text-xl rounded-full bg-orange-600 text-white hover:bg-white hover:text-black transition-all duration-500 font-bold shadow-[0_20px_60px_-15px_rgba(234,88,12,0.5)]">
                <Link href="/contact" className="flex items-center gap-3">
                  Start Execution 
                  <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-12 text-xl rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all duration-500 border-none group">
                <Link href="/portfolio" className="flex items-center gap-3">
                  Check Our Assets <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform text-orange-400" />
                </Link>
              </Button>
            </div>

            {/* 5. PREMIUM STATS CARDS */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in scale-95 duration-1000 delay-500">
              {[
                { val: "5.0", label: "Client Rating", desc: "Top rated across South Africa", icon: Star },
                { val: "100%", label: "System Uptime", desc: "For all our AI-Agents deployments", icon: Zap },
                { val: "R10M+", label: "Capital Tracked", desc: "Through our custom ecommerce setups", icon: Play }
              ].map((stat, i) => (
                <div key={i} className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-500 text-center flex flex-col items-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
                  <div className="mb-6 p-4 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-5xl font-bold text-white mb-4 font-[Sentient] tracking-tighter">{stat.val}</p>
                  <p className="text-orange-400 font-bold text-xs tracking-[0.2em] uppercase mb-4">{stat.label}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
                </div>
              ))}
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
  );
}
