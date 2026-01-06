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
    <section className="relative py-8 sm:py-10">
      <div className="container">
        <p className="mb-6 text-center text-sm uppercase tracking-widest text-foreground/60">Tools we build with</p>
        <div className="relative overflow-hidden">
          {/* gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          {/* marquee track (duplicated for seamless loop) */}
          <div className="flex gap-10 animate-marquee will-change-transform">
            {logos.map((logo, i) => (
              <div key={i} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <Image src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto sm:h-10" />
              </div>
            ))}
            {logos.map((logo, i) => (
              <div key={"dup-" + i} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <Image src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto sm:h-10" />
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
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
