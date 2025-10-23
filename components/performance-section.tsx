import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function PerformanceSection() {
  return (
    <section className="bg-black dark:bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair-display)] font-normal mb-6 text-white">
              Built for Indian businesses
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Lightning-fast payments with UPI, cards, and wallets. Instant settlements, real-time insights. Built for speed.
            </p>

            {/* Testimonial */}
            <div className="border-l-4 border-[#DC3444] pl-6 py-2">
              <p className="text-lg text-gray-300 italic mb-4">
                &ldquo;Finally, a payment gateway that doesn&apos;t eat into our margins. Setup took 10 minutes, been smooth ever since.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">Rajesh Mehta</p>
                <p className="text-sm text-gray-400">Founder, Urban Retail Solutions</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src="/builtforbusiness.png"
                alt="Built for Indian businesses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
