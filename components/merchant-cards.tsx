'use client'
import { Button } from '@/components/ui/button'
import { SecuritySection } from '@/components/security-section'

export function MerchantCards() {
  const cards = [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "D2C & eCommerce",
      category: "Online Retail",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            UPI Intent, cards, and checkout links for Shopify/Woo.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Seamless Shopify & WooCommerce integration</li>
            <li>• UPI Intent for instant payments</li>
            <li>• Multiple payment methods support</li>
            <li>• One-click checkout links</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "SaaS & Subscriptions",
      category: "Recurring Revenue",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recurring billing, invoice links, webhooks.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Automated recurring billing</li>
            <li>• Instant invoice generation</li>
            <li>• Real-time webhook notifications</li>
            <li>• Subscription management tools</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "Marketplaces & Platforms",
      category: "Multi-Vendor",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Refunds, reconciliations, and payout workflows (split payouts in beta).
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Automated refund processing</li>
            <li>• Easy reconciliation tools</li>
            <li>• Split payout workflows</li>
            <li>• Multi-vendor support</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "Services & Appointments",
      category: "Booking & Payments",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Pay-to-book with links, QR, and WhatsApp flows.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Instant booking payments</li>
            <li>• QR code generation</li>
            <li>• WhatsApp payment links</li>
            <li>• Appointment scheduling integration</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "Retail & POS",
      category: "Point of Sale",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dynamic UPI QR, fast settlements, easy day-end recon.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Dynamic QR code generation</li>
            <li>• Instant settlements</li>
            <li>• Daily reconciliation reports</li>
            <li>• POS integration ready</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "Education & Non-profits",
      category: "Institutional",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fee and donation collection with instant receipts.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Fee collection automation</li>
            <li>• Donation tracking</li>
            <li>• Instant receipt generation</li>
            <li>• Compliance reporting</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "Freelancers & Creators",
      category: "Individual",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Shareable payment pages and repeat-customer links.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Custom payment pages</li>
            <li>• Repeat customer links</li>
            <li>• Social media integration</li>
            <li>• Portfolio showcase</li>
          </ul>
        </div>
      )
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      title: "B2B & Invoices",
      category: "Business",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Email/SMS payment links, reminders, and ledger-friendly exports.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Automated invoice generation</li>
            <li>• Payment reminders</li>
            <li>• Ledger export formats</li>
            <li>• B2B payment workflows</li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <div className="py-30 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Made for India&apos;s merchants
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            If you accept money in India, this is for you.
          </p>
          

        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left">
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 mr-8">
                <div className="relative z-10 flex h-62 w-62 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-88 md:w-88 dark:bg-neutral-900">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                  <div className="relative z-40 p-6">
                    <p className="text-left font-sans text-sm font-medium text-white md:text-base mb-2">
                      {card.category}
                    </p>
                    <p className="text-left font-sans text-lg font-semibold text-white md:text-xl leading-tight">
                      {card.title}
                    </p>
                  </div>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="absolute inset-0 z-10 object-cover h-full w-full"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate cards for seamless loop */}
            {cards.map((card, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 mr-8">
                <div className="relative z-10 flex h-62 w-62 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-88 md:w-88 dark:bg-neutral-900">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                  <div className="relative z-40 p-6">
                    <p className="text-left font-sans text-sm font-medium text-white md:text-base mb-2">
                      {card.category}
                    </p>
                    <p className="text-left font-sans text-lg font-semibold text-white md:text-xl leading-tight">
                      {card.title}
                    </p>
                  </div>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="absolute inset-0 z-10 object-cover h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Security Section */}
        <SecuritySection />
        
        {/* Custom CTA Section */}
        <div id="waitlist-form" className="w-full pt-30 pb-20">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat rounded-2xl p-8 lg:p-16 gap-12 items-start" style={{ backgroundImage: 'url(/form-img.jpg)' }}>
              {/* Left side - Text content */}
              <div className="flex-1 text-left">
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-[#DC3444]">
                    Early Access
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter font-bold text-gray-900 dark:text-white">
                    Pay 0% during early access
                  </h3>
                  <p className="text-lg leading-relaxed tracking-tight text-black dark:text-white">
                    Early adopters get 0% fees on eligible transactions for the first 3 months or ₹10,00,000 in processing, whichever comes first. After that, choose a plan that fits your scale.
                  </p>
                  <p className="text-sm text-black dark:text-white">
                    Applies to eligible payment methods and risk profiles. Taxes may apply. Full T&Cs shared upon selection.
                  </p>
                  <p className="text-base font-medium text-black dark:text-white flex items-center gap-2 mt-15 flex-wrap">
                    <span className="flex items-center gap-2">
                      Backed by <img src="/kb-logo.png" alt="Khatabook" className="h-5 w-auto" /> ecosystem
                    </span>
                    <span>| RBI Regulated</span>
                  </p>
                </div>
              </div>
              
              {/* Right side - Form */}
              <div className="flex-1 w-full lg:w-auto max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Join the waitlist
                  </h4>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#DC3444] focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#DC3444] focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#DC3444] focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full gap-4 bg-[#DC3444] hover:bg-[#B82A37] border-[#DC3444]"
                      size="lg">
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
