import Link from "next/link"
import Image from "next/image"
import logoPng from "@/public/images/logos/sqwiziflow.png"
import { Send, MessageCircle, Linkedin, Instagram } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 py-10 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-600/10 blur-[60px]" />
         <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-amber-600/10 blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          
          {/* Brand Block - Ultra Compact */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <Link href="/" className="inline-block mb-4 group">
               <Image 
                 src={logoPng} 
                 alt="SqwizFlow Ai" 
                 width={140} 
                 height={35} 
                 className="w-[130px] h-auto object-contain transition-all duration-500 group-hover:scale-105" 
               />
            </Link>
            <p className="text-slate-500 text-xs font-light leading-relaxed text-center md:text-left">
              Architecting ultra-premium digital ecosystems. Based in <span className="text-white/60 font-medium">South Africa</span>.
            </p>
          </div>

          {/* Combined Links & Socials - One Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="flex gap-8">
               <Link href="/portfolio" className="text-slate-500 hover:text-white transition-all duration-300 text-[11px] font-bold uppercase tracking-widest">
                 Portfolio
               </Link>
               <Link href="/ai-services" className="text-slate-500 hover:text-white transition-all duration-300 text-[11px] font-bold uppercase tracking-widest">
                 AI Agents
               </Link>
               <Link href="/contact" className="text-slate-500 hover:text-white transition-all duration-300 text-[11px] font-bold uppercase tracking-widest">
                 Contact
               </Link>
            </div>

            <div className="flex gap-3">
              {[
                { icon: Send, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-500"
                >
                   <social.icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom - Ultra tight */}
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-[9px] font-bold tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} SqwizFlow Ai Engineering.
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-slate-600 hover:text-white text-[9px] font-bold tracking-widest uppercase transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-slate-600 hover:text-white text-[9px] font-bold tracking-widest uppercase transition-colors">
                Terms
              </Link>
              <div className="flex items-center gap-2 text-slate-600 text-[9px] font-bold tracking-widest uppercase">
                <span>🇿🇦</span>
                South Africa
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
