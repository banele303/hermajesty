"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "AI Services", href: "/ai-services" },
    { name: "Insights", href: "/#insights" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "group p-3 text-white transition-all hover:bg-white/5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md relative z-50",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed z-[60] inset-0 bg-[#020202]/95 backdrop-blur-2xl animate-in fade-in duration-500"
        />

        <Dialog.Content
          className="fixed inset-0 z-[70] flex flex-col justify-center animate-in slide-in-from-bottom-10 duration-700"
        >
          <div className="absolute top-8 right-6">
             <Dialog.Close asChild>
                <button className="p-4 text-white hover:text-orange-500 transition-colors">
                   <X size={32} />
                </button>
             </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col items-center space-y-10 container mx-auto px-4">
            {menuItems.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-4xl md:text-5xl font-medium text-white/40 transition-all duration-500 hover:text-white font-[Sentient] tracking-tight hover:translate-x-4 flex items-center gap-4 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
                <MoveRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 w-8 h-8 text-orange-500" />
              </Link>
            ))}

            <div className="pt-12">
              <Link
                href="/schedule-a-meeting"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-4 bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-orange-500 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(234,88,12,0.3)]"
              >
                Schedule Session <MoveRight size={24} />
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
