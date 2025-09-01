'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MessageCircle, MapPin, Clock, Phone, Send } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { trackFb } from "@/lib/pixel"

declare global {
  interface Window {
    fbq: any;
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Map budget selection to approximate numeric value (ZAR) for ad optimization
  const budgetToValue: Record<string, number> = {
    'under-5k': 2500,
    '5k-15k': 10000,
    '15k-50k': 30000,
    '50k-100k': 75000,
    '100k-plus': 100000,
  }

  useEffect(() => {
    // Page level content view event (optional but helps optimization)
    trackFb('ViewContent', {
      content_name: 'Contact Page',
      content_category: 'Lead',
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track contact form submission with Meta Pixel
  const value = budgetToValue[formData.budget] || 0
  trackFb('Contact', {
    contact_method: 'form',
    budget_range: formData.budget || 'unspecified',
    service: formData.service || 'unspecified',
  })
  trackFb('Lead', {
    value,
    currency: 'ZAR',
    content_name: 'Contact Form Submission',
    content_category: 'Lead',
    submission_method: 'form',
    budget_range: formData.budget || 'unspecified',
    service: formData.service || 'unspecified',
  })
    
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within 2 hours.')
  }

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
  trackFb('Contact', { contact_method: 'whatsapp' })
  trackFb('Lead', {
    value: 0,
    currency: 'ZAR',
    content_name: 'WhatsApp Click',
    content_category: 'Lead',
    submission_method: 'whatsapp',
  })
    window.open('https://wa.me/27631995124', '_blank')
  }

  const handleEmailClick = () => {
    // Track email click
  trackFb('Contact', { contact_method: 'email' })
  trackFb('Lead', {
    value: 0,
    currency: 'ZAR',
    content_name: 'Email Click',
    content_category: 'Lead',
    submission_method: 'email',
  })
    window.location.href = 'mailto:alex@southflow.co.za'
  }

  const handleScheduleClick = () => {
    // Track consultation booking
  trackFb('Schedule')
  trackFb('Lead', {
    value: 0,
    currency: 'ZAR',
    content_name: 'Schedule Call Attempt',
    content_category: 'Lead',
    submission_method: 'schedule',
  })
    // Add your scheduling logic here
    alert('Scheduling feature coming soon! For now, please contact us directly.')
  }

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
              <Link href="/contact" className="text-white font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Start Your Project (Now First Section) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your Project
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with a detailed proposal
            </p>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+27 XX XXX XXXX"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="e-commerce">E-commerce Solutions</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under R5,000</option>
                    <option value="5k-15k">R5,000 - R15,000</option>
                    <option value="15k-50k">R15,000 - R50,000</option>
                    <option value="50k-100k">R50,000 - R100,000</option>
                    <option value="100k-plus">R100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-6 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>

                  <div className="text-center">
                    <div className="text-slate-400 text-sm mb-4">Or get in touch directly:</div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button
                        type="button"
                        onClick={handleScheduleClick}
                        variant="outline"
                        className="border-orange-500 text-orange-400 hover:bg-orange-500/10 flex items-center gap-2"
                      >
                        <Clock className="w-4 h-4" />
                        Schedule Call
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card 
              className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-white">WhatsApp</CardTitle>
                <CardDescription className="text-slate-300">
                  Get instant response via WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-green-400 font-medium mb-2">+27 63 199 5124</div>
                <div className="text-slate-400 text-sm">Available 9 AM - 6 PM SAST</div>
              </CardContent>
            </Card>

            <Card 
              className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={handleEmailClick}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
                <CardDescription className="text-slate-300">
                  Send us a detailed message
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-blue-400 font-medium mb-2">alex@southflow.co.za</div>
                <div className="text-slate-400 text-sm">Response within 2 hours</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-white">Location</CardTitle>
                <CardDescription className="text-slate-300">
                  Based in South Africa
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-purple-400 font-medium mb-2">South Africa</div>
                <div className="text-slate-400 text-sm">Serving clients globally</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">How quickly can you start my project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  We typically can start new projects within 1-2 weeks, depending on our current workload and project complexity. 
                  Rush projects can often be accommodated with priority scheduling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Do you offer ongoing support and maintenance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Yes! We provide comprehensive support packages including updates, security monitoring, 
                  performance optimization, and technical support to keep your project running smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">What is your development process?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Our process includes: Discovery & Planning → Design & Prototyping → Development & Testing → 
                  Launch & Deployment → Ongoing Support. We keep you involved throughout every step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
            <p className="text-slate-400 mb-6">
              Crafting exceptional digital experiences with cutting-edge technology
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/mobile-app" className="text-slate-400 hover:text-white transition-colors">Mobile App</Link>
              <Link href="/contact" className="text-white">Contact</Link>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-slate-400 text-sm">
              © 2025 Majestic Dev. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
