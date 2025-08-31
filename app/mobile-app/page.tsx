import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Smartphone, Shield, Zap, Users, Play, CheckCircle, TrendingUp, Globe, Heart } from "lucide-react"

export default function MobileAppLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-3 border border-white/20">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Majestic Dev
          </div>
          <Button variant="outline" className="md:inline-flex hidden border-white/30 text-white hover:bg-white/10">
            Contact Support
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in-up">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 animate-pulse">
            🚀 Revolutionary Mobile Experience
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Experience Magic
            </span>
            <br />
            <span className="text-white">In Your Pocket</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionary mobile app with AI-powered features, lightning-fast performance, 
            and a design that will blow your mind. Join the future today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download for iOS
              <Play className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download for Android
              <Play className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Interactive Phone Mockup */}
        <div className="relative mx-auto max-w-sm mb-16 animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 scale-110"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-3 shadow-2xl border border-white/20">
            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="h-6 bg-black flex items-center justify-center">
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </div>
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <Smartphone className="w-16 h-16 text-white/80 mb-4 mx-auto animate-bounce" />
                  <div className="text-white/60 text-sm">Majestic App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Why Everyone's Talking About Us
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin-slow">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Lightning Speed</CardTitle>
              <CardDescription className="text-gray-300">
                AI-optimized performance that's 10x faster than competitors. Experience instant everything.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Fort Knox Security</CardTitle>
              <CardDescription className="text-gray-300">
                Military-grade encryption with biometric locks. Your data is safer than government secrets.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Global Magic</CardTitle>
              <CardDescription className="text-gray-300">
                Connect with millions worldwide. Offline mode works even on Mars (coming soon).
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg py-16 my-16 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5M+</div>
              <div className="text-gray-300 flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Downloads
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">4.9</div>
              <div className="text-gray-300 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Rating
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">100K+</div>
              <div className="text-gray-300 flex items-center justify-center gap-1">
                <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                Reviews
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">99.99%</div>
              <div className="text-gray-300 flex items-center justify-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Uptime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cool Testimonials */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          What Our Users Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-twinkle" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "This app literally changed my life! The AI features are mind-blowing. I can't imagine living without it!"
              </p>
              <div className="text-sm font-semibold text-purple-400">Sarah 'TechQueen' Johnson</div>
              <div className="text-xs text-gray-400">CEO, Innovation Labs</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-twinkle" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "I've tried everything out there. This is THE app that finally got it right. Pure magic!"
              </p>
              <div className="text-sm font-semibold text-blue-400">Michael 'CodeNinja' Chen</div>
              <div className="text-xs text-gray-400">Senior Developer, Google</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-lg border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-twinkle" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The future is here! This app makes me feel like I'm living in 2030. Absolutely revolutionary!"
              </p>
              <div className="text-sm font-semibold text-green-400">Emma 'DigitalGuru' Davis</div>
              <div className="text-xs text-gray-400">Tech Influencer, 2M followers</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Epic CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20 my-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-pulse">Ready to Join the Revolution?</h2>
          <p className="text-2xl mb-8 opacity-90">
            Don't just download an app. Download the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button size="lg" className="bg-black/30 backdrop-blur-lg border border-white/20 text-white hover:bg-black/50 transform hover:scale-110 transition-all duration-300 shadow-2xl flex items-center gap-2 text-lg px-8 py-4">
              <Download className="w-6 h-6" />
              iOS - Experience Magic
              <Play className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" className="bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300 shadow-2xl flex items-center gap-2 text-lg px-8 py-4">
              <Download className="w-6 h-6" />
              Android - Join the Future
              <Play className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-lg opacity-75 animate-fade-in">
            🔥 Limited time: First 1000 downloads get premium features FREE for life!
          </p>
        </div>
      </section>

      {/* Futuristic Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-lg border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Majestic Dev
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Crafting the future of mobile experiences with cutting-edge technology and boundless imagination.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Innovation</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">AI Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Premium Plans</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Security Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Universe</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Heroes</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">System Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-green-400">Connect</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://wa.me/27631995124" className="hover:text-green-400 transition-colors flex items-center gap-2">
                  💬 WhatsApp Magic
                </a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">🐦 Twitter Verse</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">💼 LinkedIn Pro</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Majestic Dev. Crafted with ❤️ and a touch of magic.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
