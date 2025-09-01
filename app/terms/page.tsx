import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="text-xl font-bold text-white">Majestic Dev</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/mobile-app" className="text-slate-300 hover:text-white transition-colors">
                Mobile App
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-slate-300 mb-8">Last updated: September 1, 2025</p>

          <div className="prose prose-slate prose-invert max-w-none">
            <div className="space-y-8 text-slate-300">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the services provided by Majestic Dev ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p>
                  Majestic Dev provides web development, mobile application development, UI/UX design, and related digital services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
                <p>You agree to:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Provide accurate and complete information when using our services</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not use our services to transmit harmful or malicious content</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p>
                  All content, trademarks, logos, and intellectual property on our website and in our services remain the property of Majestic Dev or our licensors. Upon full payment for custom development work, clients receive ownership rights to their specific project deliverables, excluding our proprietary tools, frameworks, and methodologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <p>
                  Payment terms are specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>A deposit is required before work begins</li>
                  <li>Final payment is due upon project completion</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are handled according to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Project Delivery and Revisions</h2>
                <p>
                  We strive to deliver projects within agreed timelines. Project scope changes may affect delivery dates and costs. A reasonable number of revisions are included in our services, with additional revisions subject to extra charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p>
                  Majestic Dev shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Warranty Disclaimer</h2>
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                <p>
                  Either party may terminate a service agreement with appropriate notice as specified in individual contracts. Upon termination, you must cease all use of our services and return any confidential information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none mt-2 space-y-2">
                  <li>Email: alex@southflow.co.za</li>
                  <li>WhatsApp: +27 63 199 5124</li>
                  <li>Address: South Africa</li>
                </ul>
              </section>

            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/privacy-policy" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
              >
                View Privacy Policy
              </Link>
              <Link 
                href="/contact" 
                className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-6 py-3 rounded-lg transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="text-xl font-bold text-white">Majestic Dev</span>
            </div>
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <Link href="/terms" className="text-white">Terms</Link>
              <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 Majestic Dev. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
