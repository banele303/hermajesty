"use client"
import { useEffect, useState } from "react"

interface RotatingWordsProps {
  words: string[]
  intervalMs?: number
  className?: string
}

export function RotatingWords({ words, intervalMs = 2200, className = "" }: RotatingWordsProps) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % words.length), intervalMs)
    return () => clearInterval(id)
  }, [words, intervalMs])
  return (
    <span className={"relative inline-block min-w-[10ch] " + className} aria-live="polite">
      <span key={index} className="block animate-hero-rotate will-change-transform">
        {words[index]}
      </span>
      <style jsx>{`
        @keyframes hero-rotate {0%{opacity:0;transform:translateY(14px) scale(.97)}55%{opacity:1}100%{opacity:1;transform:translateY(0) scale(1)}}
        .animate-hero-rotate {animation: hero-rotate .75s cubic-bezier(.16,.68,.43,.99);}
      `}</style>
    </span>
  )
}
