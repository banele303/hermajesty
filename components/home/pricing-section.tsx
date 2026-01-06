"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Starter",
    tagline: "Perfect for MVPs",
    icon: Zap,
    price: "4,999",
    originalPrice: "5,999",
    currency: "R",
    badge: "🔥 Limited Offer",
    badgeColor: "from-orange-500 to-red-600",
    gradient: "from-orange-500/20 to-red-600/20",
    borderGradient: "from-orange-500 via-red-500 to-pink-600",
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
    badgeColor: "from-blue-500 to-indigo-600",
    gradient: "from-blue-500/20 to-indigo-600/20",
    borderGradient: "from-blue-500 via-indigo-500 to-purple-600",
    popular: true,
    features: [
      "50+ products/pages",
      "Advanced features & integrations",
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
    badgeColor: "from-purple-500 to-pink-600",
    gradient: "from-purple-500/20 to-pink-600/20",
    borderGradient: "from-purple-500 via-pink-500 to-rose-600",
    savings: "Save R8,000+",
    features: [
      "Full responsive website",
      "iOS & Android mobile app",
      "Synchronized data across platforms",
      "Push notifications",
      "App store deployment",
      "Comprehensive testing",
      "12 months support",
    ],
    cta: "Build Empire",
  },
];

export function PricingSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#020205] via-slate-950 to-[#020205] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <Badge variant="outline" className="mb-6 border-blue-500/50 text-blue-400 px-4 py-1 text-sm tracking-wider uppercase">
            Pricing
          </Badge>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] mb-6">
            Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">Faster.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            One-time investment. No subscriptions. Own your digital assets forever.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm">
            🇿🇦 Trusted by South African businesses • 🔒 Secure payments • ⚡ Fast delivery
          </p>
        </motion.div>
      </div>
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
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative group ${plan.popular ? "md:scale-105 md:-mt-4" : ""}`}
    >
      {/* Holographic Border Effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r ${plan.borderGradient} opacity-75 rounded-3xl blur transition-opacity duration-300 group-hover:opacity-100`}
        style={{ backgroundSize: "200% 200%", animation: "gradient 3s ease infinite" }} 
      />

      {/* Card */}
      <div className="relative h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/10 overflow-hidden">
        {/* Badge */}
        {plan.badge && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${plan.badgeColor} shadow-lg`}>
              {plan.badge}
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className={`absolute top-0 left-0 w-full h-48 bg-gradient-to-br ${plan.gradient} opacity-50`} />

        {/* Content */}
        <div className="relative p-8 pt-12">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} border border-white/10 shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Plan Name */}
          <h3 className="text-2xl font-bold text-white mb-2 text-center">{plan.name}</h3>
          <p className="text-slate-400 text-sm mb-6 text-center">{plan.tagline}</p>

          {/* Price */}
          <div className="mb-8 text-center">
            {plan.originalPrice && (
              <div className="text-slate-600 line-through text-lg mb-1">
                {plan.currency}{plan.originalPrice}
              </div>
            )}
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-white">{plan.currency}</span>
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                {plan.price}
              </span>
            </div>
            <div className="text-slate-500 text-sm mt-2">One-time payment</div>
            {plan.savings && (
              <div className="text-green-400 text-sm font-semibold mt-1">{plan.savings}</div>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            className={`w-full bg-gradient-to-r ${plan.badgeColor} hover:shadow-lg hover:shadow-blue-500/20 text-white border-none font-bold py-6 text-base transition-all duration-300 group-hover:scale-105`}
          >
            {plan.cta}
          </Button>
        </div>
      </div>

      {/* Animated Gradient Border */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}
