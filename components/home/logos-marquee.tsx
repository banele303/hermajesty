"use client";

import Image from "next/image";

const logos = [
  { src: "/images/logos/facebook.svg", alt: "Facebook" },
  { src: "/images/logos/n8n.svg", alt: "n8n" },
  { src: "/images/logos/react.svg", alt: "React" },
  { src: "/images/logos/langchain.svg", alt: "LangChain" },
  { src: "/images/logos/langgraph.svg", alt: "LangGraph" },
  { src: "/images/logos/github.svg", alt: "GitHub" },
  { src: "/images/logos/slack.svg", alt: "Slack" },
  { src: "/images/logos/zapier.svg", alt: "Zapier" },
];

export function LogosMarquee() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#020202] border-y border-white/5">
      <div className="container">
        <p className="mb-10 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 font-sans">Engineering Excellence with the World's Leading Stack</p>
        <div className="relative overflow-hidden group">
          {/* gradient fades - using the specific background color */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#020202] via-[#020202]/80 to-transparent z-10" />

          {/* marquee track (duplicated for seamless loop) */}
          <div className="flex gap-16 sm:gap-24 animate-marquee will-change-transform">
            {logos.map((logo, i) => (
              <div key={i} className="shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <Image src={logo.src} alt={logo.alt} width={130} height={45} className="h-7 w-auto sm:h-9" />
              </div>
            ))}
            {logos.map((logo, i) => (
              <div key={"dup-" + i} className="shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <Image src={logo.src} alt={logo.alt} width={130} height={45} className="h-7 w-auto sm:h-9" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
