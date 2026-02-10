"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Rocket, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    tagline: "Perfect for MVPs",
    icon: Zap,
    price: "4,999",
    originalPrice: "5,999",
    currency: "R",
    badge: "🔥 Limited Offer",
    gradient: "from-orange-500/20 to-amber-600/20",
    borderGradient: "from-orange-500 via-amber-500 to-orange-400",
    features: [
      "Up to 40 products/pages",
      "Fully responsive design",
      "SEO optimization",
      "Payment gateway integration",
      "Admin dashboard",
      "SSL certificate",
      "3 months support",
    ],
    cta: "Start Building",
  },
  {
    name: "Professional",
    tagline: "For scaling businesses",
    icon: Rocket,
    price: "8,999",
    currency: "R",
    badge: "⚡ Most Popular",
    gradient: "from-orange-600/20 to-orange-400/20",
    borderGradient: "from-orange-600 via-orange-500 to-orange-300",
    popular: true,
    features: [
      "50+ products/pages",
      "Advanced AI integrations",
      "Custom API development",
      "Advanced analytics dashboard",
      "Multi-user management",
      "Security audit included",
      "6 months priority support",
    ],
    cta: "Go Professional",
  },
  {
    name: "Enterprise",
    tagline: "Complete domination",
    icon: Sparkles,
    price: "14,999",
    currency: "R",
    badge: "💎 Best Value",
    gradient: "from-amber-500/20 to-orange-600/20",
    borderGradient: "from-amber-600 via-orange-500 to-amber-400",
    savings: "Save R8,000+",
    features: [
      "Full responsive ecosystem",
      "iOS & Android mobile app",
      "Synchronized AI data layers",
      "Push notification systems",
      "App store deployment",
      "Comprehensive QA testing",
      "12 months elite support",
    ],
    cta: "Build Empire",
  },
];

export function PricingSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#020202] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-500/5 blur-[180px] rounded-full opacity-40" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-8">
             <span className="text-[10px] font-bold text-orange-400 tracking-[0.3em] uppercase italic">Investment Structure</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-8 font-[Sentient]">
            Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-[length:200%_auto] animate-gradient-x">Faster.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            One-time investment. No subscriptions. Own your elite digital assets forever.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            🇿🇦 South Africa's Trusted Engineering Partner • 🔒 Secure Protocol • ⚡ High-Yield Delivery
          </p>
        </motion.div>
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

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`relative group ${plan.popular ? "md:scale-105" : ""}`}
    >
      {/* Background Glow */}
      <div 
        className={`absolute -inset-[1px] bg-gradient-to-r ${plan.borderGradient} opacity-30 rounded-[3rem] blur-sm transition-opacity duration-700 group-hover:opacity-100`}
      />

      {/* Card Body */}
      <div className="relative h-full rounded-[3rem] bg-[#050505] border border-white/5 overflow-hidden flex flex-col p-10 py-12">
        {/* Badge */}
        {plan.badge && (
          <div className="absolute top-6 right-8">
            <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-white/5 border border-white/10 backdrop-blur-xl group-hover:bg-orange-600 transition-all duration-500`}>
              {plan.badge}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mb-12">
           <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white font-[Sentient]">{plan.name}</h3>
                <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">{plan.tagline}</p>
              </div>
           </div>

           {/* Price */}
           <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-bold text-orange-500">{plan.currency}</span>
              <span className="text-6xl font-medium text-white tracking-tighter font-[Sentient]">{plan.price}</span>
           </div>
           <p className="text-slate-500 text-sm font-medium italic">Fixed one-time investment</p>
           {plan.savings && (
              <p className="text-orange-400 text-sm font-bold mt-2 tracking-wide">{plan.savings}</p>
           )}
        </div>

        {/* Features List */}
        <ul className="space-y-5 mb-12 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4">
               <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500/40 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
               <span className="text-slate-400 text-sm leading-relaxed font-light">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          className={`w-full h-16 rounded-2xl ${plan.popular ? 'bg-orange-600 text-white hover:bg-white hover:text-black shadow-[0_0_30px_rgba(234,88,12,0.3)]' : 'bg-white/5 text-white hover:bg-orange-600'} transition-all duration-500 font-bold text-lg group-hover:scale-[1.02] border-none`}
        >
          {plan.cta} <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
