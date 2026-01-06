"use client"

import { Hammer, Rocket, Layout, Brain } from "lucide-react"
import { motion } from "framer-motion"

export function HeroFlowCard() {
  const items = [
    { icon: Brain, title: "Plan", caption: "Workshops, scope, and roadmaps.", delay: 0 },
    { icon: Layout, title: "Design", caption: "UX flows, UI systems, prototypes.", delay: 0.15 },
    { icon: Hammer, title: "Build", caption: "Web, mobile, and backend APIs.", delay: 0.3 },
    { icon: Rocket, title: "Launch", caption: "Deploy, analytics, and iteration.", delay: 0.45 },
  ]

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="rounded-3xl bg-slate-900/40 border border-slate-700/60 shadow-2xl p-6 sm:p-8 backdrop-blur">
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, title, caption, delay }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay }}
              className="rounded-2xl bg-slate-800/50 border border-slate-700 p-4 sm:p-5 hover:border-blue-500/50 hover:bg-slate-800/70 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-slate-300 mt-1">{caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-2xl" />
    </div>
  )
}
