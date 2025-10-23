'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  IconCurrencyDollar, 
  IconClock, 
  IconFlag, 
  IconCloud, 
  IconShield, 
  IconScale 
} from "@tabler/icons-react"

export function GlowingFeatures() {
  const features = [
    {
      title: "0% Fee, Limited Time",
      description: "Process payments at 0% fees during early access (introductory cap applies).",
      icon: <IconCurrencyDollar className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Priority Onboarding",
      description: "Skip the queue and get hands-on help to go live fast.",
      icon: <IconClock className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Built for India",
      description: "UPI, cards, net banking, and link-based checkouts—one gateway.",
      icon: <IconFlag className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Reliable by Design",
      description: "Smart retries, webhooks, and real-time dashboard insights.",
      icon: <IconCloud className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Serious Security",
      description: "PCI-DSS, tokenization, 3-D Secure, fraud controls.",
      icon: <IconShield className="h-8 w-8" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Scale Confidently",
      description: "Analytics, refunds, reconciliations, and dispute tools.",
      icon: <IconScale className="h-8 w-8" />,
      gradient: "from-teal-500 to-green-500"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Join Now
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get exclusive early access benefits and transform your business with India&apos;s most trusted payment gateway.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="group relative">
              {/* Glowing background effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
              
              <Card className="relative bg-white dark:bg-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <CardHeader className="pb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#DC3444] transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
