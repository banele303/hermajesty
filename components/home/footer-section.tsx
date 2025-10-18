import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HMS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 dark:text-white font-bold text-lg leading-tight">Majestic</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm leading-tight">SOUTHFLOW</span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Building premium digital experiences with Next.js and modern technologies. Based in South Africa,
              serving clients globally with expert development and security services.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-slate-600 dark:text-slate-300">📧</span>
              </div>
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-slate-600 dark:text-slate-300">💬</span>
              </div>
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-slate-600 dark:text-slate-300">🔗</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  Ecommerce Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  Security Testing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  Property Websites
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-900 transition-colors">
                  API Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
              <li>
                <Link href="#about" className="hover:text-slate-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-slate-900 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-slate-900 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
              © 2024 Majestic SouthFlow. All rights reserved. Built with Next.js ⚡
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-500 dark:text-slate-400 text-sm">
              <Link href="#" className="hover:text-slate-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <span>🇿🇦</span>
                <span>Made in South Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
