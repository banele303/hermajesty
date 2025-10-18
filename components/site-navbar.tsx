"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems: { href: string; label: string; hash?: boolean }[] = [
  { href: "/#about", label: "About", hash: true },
  { href: "/#services", label: "Services", hash: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#pricing", label: "Pricing", hash: true },
  { href: "/#process", label: "Process", hash: true },
  { href: "/contact", label: "Contact" },
]

export function SiteNavbar({ cta = true }: { cta?: boolean }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm tracking-wide">HMS</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-slate-900 font-bold text-lg leading-tight">Majestic</span>
              <span className="text-blue-600 font-medium text-xs leading-tight">SOUTHFLOW</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => {
              const active = pathname === item.href || (item.hash && pathname === "/" && typeof window !== 'undefined' && window.location.hash === item.href.replace('/',''))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={"text-sm font-medium transition-colors " + (active ? "text-slate-900" : "text-slate-600 hover:text-slate-900")}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {cta && (
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />
              <Button asChild size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-sm">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          )}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Mobile Panel */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            {cta && (
              <Button asChild className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600">
                <Link href="/contact">Get Started</Link>
              </Button>
            )}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
