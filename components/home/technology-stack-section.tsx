import {
  Monitor,
  Server,
  Shield,
  Lock,
  Rocket,
  Package,
  GitBranch,
  Palette,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Cloud as CloudIcon,
  HardDrive as StorageIcon,
  Terminal as TerminalIcon,
  BarChart3 as AnalyticsIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function TechnologyStackSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50 shadow-sm text-sm sm:text-base px-4 py-2 dark:bg-gradient-to-r dark:from-blue-950 dark:to-purple-950 dark:text-blue-300 dark:border-blue-800">
            🚀 Cutting-Edge Technology Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Built with the World's Most
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent block">
              Advanced Technologies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We leverage the latest and greatest technologies to deliver unparalleled performance,
            security, and user experiences that set new industry standards.
          </p>
        </div>

        {/* Main Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {/* Frontend Excellence */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/50 hover:border-blue-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Frontend Excellence</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed">
                Lightning-fast, responsive interfaces built with modern frameworks and cutting-edge design systems.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100/50 hover:border-blue-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Next.js 14</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Full-Stack React Framework</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100/50 hover:border-cyan-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">React 18</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Component Architecture</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-100/50 hover:border-purple-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">TS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">TypeScript</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Type-Safe Development</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100/50 hover:border-teal-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Tailwind CSS</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Utility-First Styling</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Powerhouse */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/50 hover:border-green-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Server className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Backend Powerhouse</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed">
                Scalable, secure server-side architecture with modern databases and real-time capabilities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100/50 hover:border-green-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Node.js</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Runtime Environment</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100/50 hover:border-purple-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Prisma ORM</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Type-Safe Database Access</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100/50 hover:border-blue-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">PG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">PostgreSQL</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Advanced Relational Database</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100/50 hover:border-red-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">R</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Redis</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">High-Performance Caching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security & DevOps */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/50 hover:border-purple-300/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Security & DevOps</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-8 leading-relaxed">
                Enterprise-grade security and deployment infrastructure ensuring reliability and protection.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100/50 hover:border-purple-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">NextAuth.js</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Authentication & Authorization</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100/50 hover:border-orange-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Vercel</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Global CDN Deployment</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-100/50 hover:border-yellow-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Docker</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Container Orchestration</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100/50 hover:border-indigo-300/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GitBranch className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">CI/CD</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Automated Pipelines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 lg:mb-20">
          {[
            { icon: MobileIcon, name: "React Native", color: "from-green-500 to-emerald-600", bg: "from-green-50 to-emerald-50", border: "border-green-100/50 hover:border-green-300/50" },
            { icon: WebIcon, name: "GraphQL", color: "from-pink-500 to-rose-600", bg: "from-pink-50 to-rose-50", border: "border-pink-100/50 hover:border-pink-300/50" },
            { icon: AnalyticsIcon, name: "Analytics", color: "from-blue-500 to-cyan-600", bg: "from-blue-50 to-cyan-50", border: "border-blue-100/50 hover:border-blue-300/50" },
            { icon: CloudIcon, name: "AWS", color: "from-orange-500 to-red-600", bg: "from-orange-50 to-red-50", border: "border-orange-100/50 hover:border-orange-300/50" },
            { icon: StorageIcon, name: "MongoDB", color: "from-green-500 to-lime-600", bg: "from-green-50 to-lime-50", border: "border-green-100/50 hover:border-green-300/50" },
            { icon: TerminalIcon, name: "Testing", color: "from-purple-500 to-indigo-600", bg: "from-purple-50 to-indigo-50", border: "border-purple-100/50 hover:border-purple-300/50" },
          ].map((tech) => (
            <div key={tech.name} className="group">
              <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border ${tech.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">{tech.name}</div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-slate-900/20 rounded-3xl" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Performance That Matters</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Our technology stack delivers exceptional performance metrics that exceed industry standards.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                  99.9%
                </div>
                <div className="text-slate-300 text-sm sm:text-base">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                  &lt;100ms
                </div>
                <div className="text-slate-300 text-sm sm:text-base">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  99.99%
                </div>
                <div className="text-slate-300 text-sm sm:text-base">Security Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">
                  24/7
                </div>
                <div className="text-slate-300 text-sm sm:text-base">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
