"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
        >
          {/* Tooltip Label */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden md:block whitespace-nowrap bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80"
          >
            SqwizFlow Support Hub
          </motion.div>

          <Link 
            href="https://wa.me/27631995124" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block"
          >
            {/* Animated Rings/Pulses */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-slow opacity-40 scale-125" />
            
            {/* Main Icon Button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.5)] group-hover:bg-[#20bd5a] group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 overflow-hidden">
               {/* Shine Effect */}
               <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 -skew-y-12" />
               
               <svg 
                 viewBox="0 0 24 24" 
                 className="w-8 h-8 md:w-9 md:h-9 drop-shadow-md z-10"
                 fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.598 6.02L0 24l6.135-1.61a11.75 11.75 0 005.91 1.583h.005c6.635 0 12.05-5.414 12.05-12.05a11.767 11.767 0 00-3.489-8.522z" />
               </svg>
            </div>

            {/* Status Badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 border-2 border-[#020202] rounded-full">
               <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-50" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
