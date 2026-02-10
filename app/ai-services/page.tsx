
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  MoveRight, Phone, MessageCircle, CalendarCheck, Utensils, 
  ArrowUpRight, Zap, ChefHat, BellRing, TabletSmartphone, 
  TrendingUp, Users, Clock, Check, Mic, Globe, Smartphone, 
  BarChart3, Settings, HelpCircle, ChevronDown, Play, Star
} from "lucide-react";
import { TypingWords } from "@/components/typing-words";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "AI Restaurant Receptionist | Never Miss a Booking | SqwizFlow Ai",
  description: "South Africa's premier AI Receptionist for restaurants. Answer 94% of calls, capture leads 24/7, and automate bookings with SqwizFlow Ai.",
  keywords: ["AI Receptionist", "Restaurant AI", "Auto Booking", "South Africa AI", "Voice Agent"],
};

export default function AiServicesPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION: WORLD CLASS CENTERED */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
         {/* Premium Background Architecture */}
         <div className="absolute inset-0 z-0">
             {/* Radial Glows */}
             <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-orange-500/15 blur-[160px] rounded-full opacity-50 pointer-events-none" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[140px] rounded-full opacity-30 pointer-events-none" />
             
             {/* Animated Voice Aura / Pulse Rings */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
                <div className="absolute inset-0 border border-orange-500/10 rounded-full animate-[ping_4s_linear_infinite]" />
                <div className="absolute inset-0 border border-orange-500/5 rounded-full scale-125 animate-[ping_6s_linear_infinite_1s]" />
                <div className="absolute inset-0 border border-orange-500/5 rounded-full scale-150 animate-[ping_8s_linear_infinite_2s]" />
             </div>

             {/* Mesh Grid Backdrop */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
         </div>

         <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
               
               {/* 1. STATUS BADGE */}
               <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="relative flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                  </div>
                  <span className="text-sm font-bold text-white tracking-[0.2em] uppercase">AI Voice Intelligence 2.0</span>
               </div>

               {/* 2. MAIN HEADLINE */}
               <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-10 leading-[1.02] font-[Sentient] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                  Never Miss Another <br className="hidden lg:block"/>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x">R6000 Lead</span>
                    <span className="absolute -inset-x-2 -inset-y-1 bg-orange-500/10 blur-xl rounded-full z-0"></span>
                  </span>
                  <br className="hidden lg:block"/> Because You Were Busy.
               </h1>

               {/* 3. SUBTEXT */}
               <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  Your competitors answer calls while you're stuck in meetings. 
                  <span className="text-white block mt-4 font-light">Our AI Receptionist acts as your 24/7 dedicated intake specialist.</span>
               </p>

               {/* 4. ACTIONS */}
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  <Button size="lg" className="group h-18 px-12 text-xl rounded-full bg-orange-500 text-white hover:bg-white hover:text-black transition-all duration-500 font-bold shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)]">
                     <Link href="#contact" className="flex items-center gap-3">
                        Heal Your Lead Flow 
                        <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                     </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-18 px-10 text-xl rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all">
                     <Link href="#demo" className="flex items-center gap-3">
                        <Play className="w-6 h-6 fill-orange-500 text-orange-500" /> Watch Live Session
                     </Link>
                  </Button>
               </div>

               {/* 5. PREMIUM STATS CARDS */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in scale-95 duration-1000 delay-500">
                  {[
                    { val: "94%", label: "Lead Response Rate", desc: "vs 43% Industry Average" },
                    { val: "23", label: "New Weekly Leads", desc: "Captured per business avg" },
                    { val: "87%", label: "Missed Call Recovery", desc: "After-hours & peak reduction" }
                  ].map((stat, i) => (
                    <div key={i} className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.06] hover:border-orange-500/20 transition-all duration-500 text-center">
                       <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                       <p className="text-5xl font-bold text-white mb-4 font-[Sentient] group-hover:scale-110 transition-transform duration-500">{stat.val}</p>
                       <p className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-2">{stat.label}</p>
                       <p className="text-slate-500 text-sm font-medium">{stat.desc}</p>
                    </div>
                  ))}
               </div>

            </div>
         </div>
      </section>

      {/* 2. HOW IT WORKS (Timeline) */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
         
         <div className="container mx-auto px-4">
            {/* Centered Header */}
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <h2 className="text-5xl md:text-6xl font-medium text-white mb-8 font-[Sentient] tracking-tight">
                  How <span className="text-orange-500">AI Receptionist</span> Works
               </h2>
               <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Transform every interaction into an opportunity. We've built a seamless process that integrates directly into your business.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
               {/* Left: Steps with vertical line */}
               <div className="relative pl-8 md:pl-12 border-l border-white/10 space-y-20 py-4">
                  {/* Step 1 */}
                  <div className="relative">
                     <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.5)]" />
                     <h3 className="text-2xl font-bold text-white mb-4 font-[Sentient]">01. Set Up & Customize</h3>
                     <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                        We tailor the AI to your business, your services, FAQs, hours, and calendar—ensuring it speaks your brand's language perfectly.
                     </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                     <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-white/20 ring-4 ring-white/5" />
                     <h3 className="text-2xl font-bold text-white mb-4 font-[Sentient]">02. Instant Call Handling</h3>
                     <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                        Our AI agent answers every call instantly, books appointments, answers questions, and filters spam so you can focus on the work.
                     </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                     <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-white/20 ring-4 ring-white/5" />
                     <h3 className="text-2xl font-bold text-white mb-4 font-[Sentient]">03. Real-Time Alerts & Control</h3>
                     <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                        Get instant notifications via SMS or Dashboard. You maintain full control with the ability to update the AI's knowledge anytime.
                     </p>
                  </div>
               </div>

               {/* Right: Premium Phone Visual */}
               <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full opacity-30 -z-10 animate-pulse" />
                  
                  <div className="relative border-gray-800 bg-gray-900 border-[12px] rounded-[3rem] h-[650px] w-full max-w-[320px] mx-auto shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                     <div className="w-[140px] h-[25px] bg-gray-800 top-0 rounded-b-[1.5rem] left-1/2 -translate-x-1/2 absolute z-10" />
                     <div className="rounded-[2.5rem] overflow-hidden w-full h-full relative bg-black">
                        <Image 
                           src="/images/hero.png" 
                           alt="AI Phone Interface" 
                           fill 
                           className="object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                        
                        {/* Internal Phone UI */}
                        <div className="absolute inset-x-0 bottom-12 px-6">
                           <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                              <div className="flex items-center gap-4 mb-4">
                                 <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                 </div>
                                 <div className="flex-1">
                                    <p className="text-white font-bold text-sm">AI Receptionist</p>
                                    <p className="text-orange-400 text-[10px] uppercase tracking-widest font-bold">Active Call</p>
                                 </div>
                              </div>
                              <div className="space-y-2">
                                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-500 w-2/3 animate-progress-glow" />
                                 </div>
                                 <p className="text-[10px] text-slate-400 italic">"I've booked your service for Friday at 2 PM..."</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Floating Elements around phone */}
                  <div className="absolute -top-10 -right-4 md:-right-10 bg-[#0A0A0A]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl z-20 animate-bounce-slow">
                     <CalendarCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="absolute top-1/2 -left-4 md:-left-12 bg-[#0A0A0A]/80 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl z-20 animate-float">
                     <div className="text-orange-500 font-bold text-sm mb-1">94% Accuracy</div>
                     <div className="text-white/40 text-[10px]">Natural Voice Engine</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. WHY CHOOSE AI SECTION */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 font-[Sentient] tracking-tight">
                  Why Choose an <span className="text-orange-500">AI Voice Agent?</span>
               </h2>
               <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Discover Why Our AI Voice Agent Is the Best for Your Business. Automate, scale, and save with the world's most advanced voice intelligence.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Capture Real Leads */}
               <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                     <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-[Sentient]">Capture Real Leads</h3>
                  <p className="text-slate-400 leading-relaxed">Collect customer info while blocking spam and robocalls, ensuring every lead is high-quality.</p>
               </div>

               {/* 24/7 Multichannel Support */}
               <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                     <TabletSmartphone className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-[Sentient]">24/7 Support</h3>
                  <p className="text-slate-400 leading-relaxed">AI Agent always available via Phone, SMS, and Chat, day or night, across all your channels.</p>
               </div>

               {/* Answer Instantly */}
               <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                     <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-[Sentient]">Answer Instantly</h3>
                  <p className="text-slate-400 leading-relaxed">Provide fast, helpful answers to common customer questions without making them wait on hold.</p>
               </div>

               {/* Personalized Replies */}
               <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                     <MessageCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-[Sentient]">Personalized Replies</h3>
                  <p className="text-slate-400 leading-relaxed">AI Voice agent responds based on the caller's history with your business for a human-like feel.</p>
               </div>
            </div>
         </div>

         {/* Animated background element */}
         <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* 4. KEY FEATURES (World-Class Bento Grid) */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <div className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Core Capabilities</div>
             <h2 className="text-5xl md:text-6xl font-medium text-white mb-8 font-[Sentient] tracking-tight">
                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Growth</span>
             </h2>
             <p className="text-xl text-slate-400 font-light leading-relaxed">
                Our AI Receptionist isn't just a bot—it's a sophisticated voice intelligence system designed to automate your entire front-desk operation.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
            
            {/* Feature 1: Pick Your Number (Large vertical) */}
            <div className="group md:col-span-4 md:row-span-2 relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                     <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 font-[Sentient]">Pick Your Number</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-auto">
                     Use your existing number or get a dedicated local one. Seamlessly route overflow calls to your AI agent instantly.
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-orange-400 font-bold group-hover:translate-x-2 transition-transform">
                     <span>Learn more</span>
                     <MoveRight className="w-5 h-5" />
                  </div>
               </div>
            </div>

            {/* Feature 2: Choose Your AI Voice (Wide Top) */}
            <div className="group md:col-span-8 relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-700">
               <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row h-full gap-8">
                  <div className="flex-1">
                     <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                        <Mic className="w-7 h-7" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-4 font-[Sentient]">Custom Voice Persona</h3>
                     <p className="text-slate-400 text-lg max-w-md">
                        Select from hyper-natural voices. Tune the tone and speed to reflect your brand's unique personality.
                     </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                     {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                        <div key={i} className="w-1.5 bg-orange-500/40 rounded-full animate-pulse" 
                             style={{ height: Math.random() * 60 + 20 + 'px', animationDelay: i * 0.1 + 's'}} />
                     ))}
                  </div>
               </div>
            </div>

            {/* Feature 3: Add Business Info (Square middle) */}
            <div className="group md:col-span-4 relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-700">
               <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <Globe className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4 font-[Sentient]">Knowledge Engine</h3>
               <p className="text-slate-400 text-lg">Your AI learns your website and FAQs to answer business questions with 100% accuracy.</p>
            </div>

            {/* Feature 4: Smart Call Analytics (Square middle) */}
            <div className="group md:col-span-4 relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-10 overflow-hidden hover:border-orange-500/30 transition-all duration-700">
               <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 outline outline-purple-500/20">
                    <BarChart3 className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4 font-[Sentient]">Visual Intelligence</h3>
               <p className="text-slate-400 text-lg">Get deep insights into call volume, lead quality, and customer intent patterns.</p>
            </div>

            {/* Feature 5: AI Boss Mode (Wide Bottom) */}
            <div className="group md:col-span-12 md:row-span-1 relative rounded-[2.5rem] bg-gradient-to-r from-[#111] to-[#0A0A0A] border border-white/5 p-12 overflow-hidden hover:border-orange-500/30 transition-all duration-700 flex flex-col md:flex-row items-center justify-between">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
               <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-6">Owner Exclusive</div>
                  <h3 className="text-4xl font-bold text-white mb-6 font-[Sentient]">AI Boss Mode</h3>
                  <p className="text-slate-400 text-xl leading-relaxed">
                     Call your own AI Agent at any time for a verbal summary of your day's bookings. Instantly change its personality or specific rules with just your voice.
                  </p>
               </div>
               <div className="relative z-10 mt-8 md:mt-0">
                  <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-transform cursor-pointer">
                     <Phone className="w-10 h-10 text-white" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. USE CASE: RESTAURANT */}
      <section className="py-24 bg-white/[0.02]">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="text-orange-500 font-mono text-sm mb-6 tracking-widest uppercase">Industries Served</div>
               <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 font-[Sentient]">Restaurant & <br/>High Volume Franchise</h2>
               <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
                  Restaurants receive dozens of calls every day from potential customers and vendors. However, many calls go unanswered after hours, and staff often waste time repeating the same information.
               </p>
               <p className="text-xl text-slate-300 leading-relaxed font-light">
                  A conversational AI agent solves this by handling calls efficiently and consistently.
               </p>
            </div>
            
            <div className="relative h-[320px] w-full rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
               <Image 
                  src="/images/rest-hero.png" 
                  alt="Restaurant Storefront" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </div>
         </div>
      </section>

      {/* 6. USE CASE: AUTO SERVICES */}
      <section className="py-24 bg-black">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[320px] w-full rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
               <Image 
                  src="/images/auto-services.jpg" 
                  alt="Auto Repair Shop" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </div>

            <div className="order-1 md:order-2">
               <div className="text-orange-500 font-mono text-sm mb-6 tracking-widest uppercase">Industries Served</div>
               <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 font-[Sentient]">Auto Services</h2>
               <div className="space-y-6">
                  <p className="text-xl text-slate-300 leading-relaxed font-light">
                     Auto repair shops, dealerships, and service centers often miss calls during busy repair hours or off times. Customers call to check availability, request quotes, or book service appointments.
                  </p>
                  <p className="text-xl text-slate-300 leading-relaxed font-light">
                     An AI Receptionist can handle these calls 24/7, answer common service questions, collect vehicle info, and schedule appointments, keeping your bays full and your customers happy.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-16 text-center font-[Sentient]">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                 { q: "What is an AI Receptionist?", a: "It's an intelligent voice agent that answers your phone 24/7, speaks naturally, and can perform tasks like booking tables and answering questions just like a human." },
                 { q: "Why use an AI Receptionist?", a: "To stop missing calls and revenue. It ensures every customer gets attended to instantly, saving you labor costs and increasing bookings." },
                 { q: "Can I use my existing phone number?", a: "Yes. You can simply forward your missed or busy calls to the AI, or we can provide you with a dedicated number." },
                 { q: "How customizable is the AI Receptionist?", a: "Extremely. You control the voice, tone, greeting, menu knowledge, and exact rules for booking tables." },
                 { q: "How does SqwizFlow Ai provide support?", a: "Our support team is based in South Africa. We offer 24/7 technical support and a dedicated account manager for enterprise franchises." },
                 { q: "How much does implementation cost?", a: "We offer flexible packages starting from R999/pm. Book a demo to get a custom quote for your restaurant size." }
               ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 px-4">
                  <AccordionTrigger className="text-xl font-medium text-white hover:text-orange-400 transition-colors py-6 text-left">
                     {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-lg font-light">
                     {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
         </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 relative overflow-hidden text-center bg-orange-600">
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight font-[Sentient]">Ready to Automate?</h2>
          <p className="text-2xl text-orange-100 mb-12">Join 100+ South African businesses scaling with AI.</p>
           <Button size="lg" className="h-20 px-12 text-2xl rounded-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold shadow-2xl hover:scale-105 transition-transform">
            Book AI Demo
          </Button>
        </div>
      </section>

    </div>
  );
}
