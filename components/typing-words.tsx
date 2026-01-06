"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface TypingWordsProps {
  words: string[];
  typingSpeedMs?: number; // per character
  deletingSpeedMs?: number; // per character
  holdMs?: number; // how long to hold full word before deleting
  loop?: boolean;
  className?: string;
  caretClassName?: string;
}

export function TypingWords({
  words,
  typingSpeedMs = 70,
  deletingSpeedMs = 45,
  holdMs = 900,
  loop = true,
  className = "",
  caretClassName = "",
}: TypingWordsProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const timer = useRef<number | null>(null);
  const word = useMemo(() => words[index] ?? "", [words, index]);

  useEffect(() => {
    const clear = () => {
      if (timer.current) {
        window.clearTimeout(timer.current);
        timer.current = null;
      }
    };

    if (phase === "typing") {
      if (display.length < word.length) {
        timer.current = window.setTimeout(() => {
          setDisplay(word.slice(0, display.length + 1));
        }, typingSpeedMs);
      } else {
        timer.current = window.setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      timer.current = window.setTimeout(() => setPhase("deleting"), holdMs);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timer.current = window.setTimeout(() => {
          setDisplay(word.slice(0, display.length - 1));
        }, deletingSpeedMs);
      } else {
        const next = index + 1;
        if (next < words.length) {
          setIndex(next);
          setPhase("typing");
        } else if (loop) {
          setIndex(0);
          setPhase("typing");
        }
      }
    }

    return clear;
  }, [display, phase, word, typingSpeedMs, deletingSpeedMs, holdMs, loop, index, words.length]);

  // Restart typing when word changes
  useEffect(() => {
    setDisplay("");
    setPhase("typing");
  }, [word]);

  return (
    <span className={"inline-flex items-baseline whitespace-pre " + className} aria-live="polite">
      <span>{display}</span>
      <span className={"ml-0.5 inline-block w-[1px] bg-current animate-typing-caret " + caretClassName} aria-hidden="true" />
      <style jsx>{`
        @keyframes typing-caret { 0%, 45% { opacity: 1 } 46%, 100% { opacity: 0 } }
        .animate-typing-caret { animation: typing-caret 1s step-end infinite; }
      `}</style>
    </span>
  );
}
