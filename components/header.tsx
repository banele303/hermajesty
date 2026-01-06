"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPng from "@/public/majestic_devv.png";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 pt-0 md:pt-1 top-0 left-0 w-full transition-colors duration-200 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <header className="flex items-center justify-between container py-0.5 md:py-1">
        <Link href="/">
          <Image
            src={logoPng}
            alt="Majestic Dev"
            width={132}
            height={36}
            quality={100}
            placeholder={logoPng.blurDataURL ? "blur" : undefined}
            className="w-[100px] md:w-[132px] h-auto rounded-lg"
            priority
          />  
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-7">
          {(["About", "Portfolio", "Insights", "Contact"]).map((item) => (
            <Link
              className={`uppercase inline-block font-mono text-sm md:text-[0.95rem] leading-none duration-150 transition-colors ease-out ${
                scrolled ? "text-gray-200 hover:text-white" : "text-foreground/60 hover:text-foreground/100"
              }`}
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link className={`uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-sm md:text-[0.95rem] leading-none ${scrolled ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"}`} href="/#sign-in">
          Free Consultation Call
        </Link>
        <MobileMenu />
      </header>
    </div>
  );
};
