"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Globe, 
  Video, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  MoveRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ScheduleMeetingClient() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-orange-600/5 blur-[120px] rounded-full opacity-50" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-24">
        
        {/* Navigation / Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-widest uppercase">Return to HQ</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Content & Context */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-6">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[10px] font-bold text-orange-400 tracking-[0.2em] uppercase">Strategy Session</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95] mb-8 font-[Sentient]">
                Schedule Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x italic">Execution.</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light">
                Secure a direct consultation with our lead architects. We'll diagnose your current systems and map out your path to <span className="text-white font-medium">digital dominance.</span>
              </p>

              <div className="space-y-8">
                {[
                  { title: "Choose a Slot", desc: "Select a time that works for your schedule.", icon: Calendar },
                  { title: "Share Your Vision", desc: "Tell us about your goals and current blockers.", icon: Globe },
                  { title: "Strategy Call", desc: "A 30-minute deep dive into your project roadmap.", icon: Video }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-orange-500/30 group-hover:bg-orange-500/5 transition-all duration-500">
                      <item.icon className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/10 backdrop-blur-sm">
                <p className="text-orange-400 font-bold text-xs tracking-widest uppercase mb-4">What to expect:</p>
                <ul className="space-y-3">
                  {["System Audit", "ROI Projections", "Tech Stack Proposal", "Timeline Mapping"].map((point) => (
                    <li key={point} className="flex items-center gap-3 text-slate-300">
                       <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                       <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: The Booking Interface */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[3rem] bg-white/[0.02] border border-white/10 p-2 md:p-4 shadow-2xl backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
              
              {/* Fake Browser Toolbar */}
              <div className="h-12 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono tracking-tighter">secure-booking.sqwizflow.ai</div>
                <div className="w-10" />
              </div>

              {/* CALENDLY EMBED PLACEHOLDER */}
              <div className="aspect-[4/5] md:aspect-auto md:h-[700px] w-full bg-[#0a0a0a] relative flex items-center justify-center p-8">
                <div className="text-center max-w-sm">
                   <div className="w-20 h-20 rounded-full bg-orange-600/10 flex items-center justify-center mx-auto mb-8 border border-orange-500/20">
                      <Clock className="w-10 h-10 text-orange-500 animate-pulse" />
                   </div>
                   <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Connect Your Calendar</h2>
                   <p className="text-slate-500 mb-10 leading-relaxed font-light">
                      We're ready to architect your next breakthrough. Choose a time on the official SqwizFlow scheduler to begin.
                   </p>
                   <Button size="lg" className="rounded-full bg-orange-600 text-white hover:bg-orange-500 h-16 px-10 text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                      Open Scheduler <MoveRight className="ml-2 w-4 h-4" />
                   </Button>
                   <p className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                      Available: Mon — Fri | 09:00 — 18:00 SAST
                   </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center text-slate-600 text-xs font-bold tracking-[0.2em] uppercase"
            >
              Need a faster response? <Link href="https://wa.me/27631995124" className="text-orange-500 hover:underline">Chat via WhatsApp</Link>
            </motion.p>
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
    </div>
  );
}
