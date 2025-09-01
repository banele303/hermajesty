import Link from "next/link"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-slate-300 mb-8">Last updated: September 1, 2025</p>

          <div className="prose prose-slate prose-invert max-w-none">
            <div className="space-y-8 text-slate-300">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  Majestic Dev ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information and project requirements</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information for:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about projects and services</li>
                  <li>Processing payments and managing accounts</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience. This includes:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used for advertising and remarketing</li>
                  <li><strong>Facebook Pixel:</strong> Tracks conversions and builds audiences for ads</li>
                </ul>
                <p className="mt-4">
                  You can control cookie preferences through your browser settings, but some features may not work properly if you disable cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Facebook Pixel and Social Media</h2>
                <p>
                  We use Facebook Pixel (ID: 560763730299963) to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Track website conversions from Facebook ads</li>
                  <li>Build custom audiences for advertising</li>
                  <li>Optimize ad delivery to relevant users</li>
                  <li>Measure the effectiveness of our advertising</li>
                </ul>
                <p className="mt-4">
                  For more information about Facebook's data practices, please visit Facebook's Data Policy at 
                  <a href="https://www.facebook.com/privacy/explanation" className="text-blue-400 hover:text-blue-300 ml-1">
                    facebook.com/privacy/explanation
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Information Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li><strong>Service Providers:</strong> Third parties who assist with our operations</li>
                  <li><strong>Payment Processors:</strong> For secure transaction processing</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights and Choices</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent for processing</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-none mt-2 space-y-2">
                  <li><strong>Email:</strong> alex@southflow.co.za</li>
                  <li><strong>WhatsApp:</strong> +27 63 199 5124</li>
                  <li><strong>Address:</strong> South Africa</li>
                </ul>
                <p className="mt-4">
                  For data protection inquiries, please include "Privacy Policy" in your subject line.
                </p>
              </section>

            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/terms" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
              >
                View Terms of Service
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
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy-policy" className="text-white">Privacy</Link>
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
