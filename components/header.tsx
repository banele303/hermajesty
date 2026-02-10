"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPng from "@/public/images/logos/sqwiziflow.png";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-500 py-1.5 ${
        scrolled 
          ? "bg-[#020202]/85 backdrop-blur-2xl border-b border-white/5 shadow-xl" 
          : "bg-transparent"
      }`}
    >
      <header className="container mx-auto px-4 md:px-8 flex items-center justify-between h-14">
        
        {/* LOGO - Consistent Large Size */}
        <Link href="/" className="relative z-50 group flex items-center">
          <Image
            src={logoPng}
            alt="SqwizFlow Ai"
            width={260}
            height={60}
            className="w-[210px] md:w-[240px] h-auto object-contain transition-all duration-500 group-hover:scale-105"
            priority
          />  
          <div className="absolute -inset-4 bg-orange-500/0 group-hover:bg-orange-500/5 blur-2xl rounded-full transition-all duration-500 -z-10" />
        </Link>
        
        {/* DESKTOP NAV - Consistent Premium Typography */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 px-8 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
          {[
            { name: "About", href: "/#about" },
            { name: "Portfolio", href: "/#portfolio" },
            { name: "AI Services", href: "/ai-services" },
            { name: "Insights", href: "/#insights" },
            { name: "Contact", href: "/#contact" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-semibold text-slate-400 hover:text-white transition-all duration-300 relative group tracking-[0.1em] uppercase font-sans"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-orange-500 to-amber-300 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA & MOBILE MENU - Consistent Button Scale */}
        <div className="flex items-center gap-6">
          <Link href="/schedule-a-meeting" className="hidden sm:block">
            <Button 
               className="group relative overflow-hidden rounded-full bg-orange-600 text-white hover:bg-orange-500 transition-all duration-500 border-none h-10 px-7 font-bold text-sm tracking-tight shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
            >
               <span className="relative z-10 flex items-center gap-2">
                 Schedule Session <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-100 transition-opacity duration-500" />
            </Button>
          </Link>
          
          <div className="lg:hidden">
            <MobileMenu className="text-white" />
          </div>
        </div>

      </header>
    </div>
  );
};
