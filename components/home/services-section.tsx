"use client"

import Link from "next/link"
import { ArrowRight, Code2, Globe, Sparkles, Workflow } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to match your exact business requirements and workflows.",
      features: [
        "Enterprise Applications",
        "SaaS Platforms",
        "Mobile Apps (iOS & Android)",
        "Progressive Web Apps",
        "Ecommerce Systems",
      ],
      href: "/services/custom-software",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500"
    },
    {
      icon: Workflow,
      title: "Intelligent Automation",
      description: "Streamline operations and boost productivity with custom automation solutions that work 24/7.",
      features: ["Process Automation", "API Integrations", "Workflow Optimization", "Data Processing"],
      href: "/services/automation",
      gradient: "from-indigo-500 to-blue-500",
      iconBg: "bg-indigo-500"
    },
    {
      icon: Globe,
      title: "Premium Web Development",
      description: "Stunning, high-performance websites and web applications that convert visitors into customers.",
      features: ["Custom Ecommerce", "Corporate Websites", "Landing Pages", "Web Portals"],
      href: "/services/web-development",
      gradient: "from-cyan-500 to-blue-500",
      iconBg: "bg-cyan-500"
    },
    {
      icon: Sparkles,
      title: "AI Agents & Integrations",
      description: "Deploy AI copilots, chatbots, and intelligent workflows that plug into your existing stack and unlock new revenue.",
      features: [
        "Custom AI Assistants",
        "N8N / LangChain Pipelines",
        "CRM & ERP Automations",
        "Analytics & Reporting",
      ],
      href: "/services/ai-agents",
      gradient: "from-blue-500 to-indigo-500",
      iconBg: "bg-slate-900"
    }
  ]

  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 dark:bg-[#020205] py-10 lg:py-20 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#020205] to-[#020205]" />
      <div className="relative z-10 mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            <span className="text-slate-200">Automation That</span>
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500"> Delivers Results</span>
          </h2>
          <p className="mt-3 text-slate-400">You're not just buying software — <span className="text-sky-400">you're tapping into a proven blueprint.</span></p>
          <div className="mt-4 mx-auto w-44 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full" />
        </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-4 xl:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 px-8 pb-10 pt-16 shadow-[0_35px_120px_-40px_rgba(15,118,230,0.35)]"
            >
              <div className="absolute -top-12 right-1/2 h-32 w-32 translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-12 left-0 h-28 w-28 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="absolute -top-12 left-1/2 flex -translate-x-1/2 flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-500 opacity-70 blur-xl" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-xl shadow-blue-500/40 ring-4 ring-blue-500/20">
                      <service.icon className="h-8 w-8 text-sky-400" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-center text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-center text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 text-left">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 flex h-2.5 w-2.5 flex-shrink-0 items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-1 items-end justify-center">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors duration-150 hover:text-sky-300"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
