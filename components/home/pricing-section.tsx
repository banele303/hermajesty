import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-50 text-green-700 border border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
            Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Transparent, Fair Pricing
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Professional development services with clear, upfront pricing. No hidden fees, no monthly subscriptions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Small Business */}
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative hover:border-orange-400/60 dark:hover:border-orange-500/60 transition-all duration-300 shadow-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-orange-500 text-white">Winter Special</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-slate-900 dark:text-white text-lg sm:text-xl mb-2">Small Business</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                Perfect for startups and small businesses
              </CardDescription>
              <div className="mt-4">
                <div className="text-slate-400 dark:text-slate-500 line-through text-base sm:text-lg">R5,999</div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">R4,999</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">One-time payment</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Up to 40 products/pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Fully responsive design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Admin dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>SSL certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>3 months support</span>
                </li>
              </ul>
              <Button data-lead data-lead-source="pricing" data-lead-plan="small_business" data-lead-value="4999" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Growing Business */}
          <Card className="bg-white dark:bg-slate-800 border-blue-500 relative scale-105 hover:border-blue-400 transition-all duration-300 shadow-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white">Most Popular</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-slate-900 dark:text-white text-lg sm:text-xl mb-2">Growing Business</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                For established businesses ready to scale
              </CardDescription>
              <div className="mt-4">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">R8,999</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">One-time payment</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>50+ products/pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Advanced features & integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Custom API development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Multi-user management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Security audit included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>6 months priority support</span>
                </li>
              </ul>
              <Button data-lead data-lead-source="pricing" data-lead-plan="growing_business" data-lead-value="8999" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Complete Solution */}
          <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 shadow-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-purple-500 text-white">Best Value</Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-slate-900 dark:text-white text-lg sm:text-xl mb-2">Complete Solution</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                Website + Mobile App package
              </CardDescription>
              <div className="mt-4">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">R14,999</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">One-time payment</div>
                <div className="text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium">Save R8,000+</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Full responsive website</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>iOS & Android mobile app</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Synchronized data across platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Push notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>App store deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Comprehensive testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>12 months support</span>
                </li>
              </ul>
              <Button data-lead data-lead-source="pricing" data-lead-plan="complete_solution" data-lead-value="14999" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}
