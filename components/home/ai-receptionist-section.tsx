"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Sparkles, 
  ArrowUpRight, 
  Mic2, 
  CalendarCheck2, 
  Users2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiReceptionistSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#020202] overflow-hidden">
      {/* Ambience Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Impactful Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-8">
               <Sparkles className="w-4 h-4 text-orange-400" />
               <span className="text-[10px] font-bold text-orange-400 tracking-[0.2em] uppercase">Engineered Intelligence</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95] text-white mb-8 font-[Sentient]">
              Your 24/7 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x italic">AI Voice Agent.</span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light max-w-xl">
              Stop losing high-value leads to missed calls. Our AI Receptionists answer every call instantly, handle complex bookings, and answer FAQs with <span className="text-white font-medium">94% accuracy.</span>
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-12">
               {[
                 { title: "Infinite Intake", desc: "Handle 100+ calls simultaneously with zero latency.", icon: Phone },
                 { title: "Smart Scheduling", desc: "Native integration with your existing CRM and calendars.", icon: CalendarCheck2 },
                 { title: "Natural Synthesis", desc: "Indistinguishable from human voice with perfect branch logic.", icon: Mic2 }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-orange-500/30 group-hover:bg-orange-600/10 transition-all duration-300">
                       <item.icon className="w-5 h-5 text-slate-400 group-hover:text-orange-400" />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                       <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <Button className="h-14 px-8 rounded-full bg-orange-600 text-white hover:bg-orange-500 transition-all font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(234,88,12,0.3)]" asChild>
                  <Link href="/ai-services">Deploy Receptionist <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
               </Button>
               <Button variant="outline" className="h-14 px-8 rounded-full border-white/5 bg-white/5 text-white hover:bg-white/10 transition-all font-bold text-sm tracking-widest uppercase" asChild>
                  <Link href="/contact">Book Architecture Call</Link>
               </Button>
            </div>
          </motion.div>

          {/* Right Side: High-End Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Visual Backdrop */}
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-xl mx-auto rounded-[3.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
               <div className="absolute inset-0 bg-orange-500/5 blur-[100px] animate-pulse" />
               
               {/* Main UI Container */}
               <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] shadow-2xl border border-white/5">
                  <Image 
                    src="/images/hero.png" 
                    alt="AI Receptionist Interface" 
                    fill 
                    className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                  
                  {/* Floating Micro-UI Component inside the image area */}
                  <div className="absolute bottom-10 inset-x-8">
                     <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                              <Phone className="w-5 h-5 text-white" />
                           </div>
                           <div>
                              <p className="text-white font-bold text-xs uppercase tracking-widest">Incoming Call Filtered</p>
                              <p className="text-slate-400 text-[10px]">Handled by SqwizFlow Ai Agent</p>
                           </div>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-500 w-3/4 animate-progress-glow" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* External Floating Badges */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl hidden md:block"
               >
                  <Users2 className="w-6 h-6 text-green-400" />
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute top-1/2 -left-10 bg-white/10 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10 shadow-2xl hidden md:block"
               >
                  <div className="text-orange-400 font-bold text-2xl font-[Sentient]">94%</div>
                  <div className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-1">Lead Capture Rate</div>
               </motion.div>
            </div>
            
            {/* Visual Aura */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-orange-500/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />
          </motion.div>

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
        @keyframes progress-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; box-shadow: 0 0 10px rgba(249,115,22,0.5); }
        }
        .animate-progress-glow {
          animation: progress-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
