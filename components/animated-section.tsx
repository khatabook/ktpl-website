'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AnimatedSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <TextEffect
            as="h2"
            className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
            preset="fade-in-blur"
            per="word"
            speedReveal={0.8}
          >
            Transform Your Business with Seamless Payments
          </TextEffect>
          
          <TextEffect
            as="p"
            className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300"
            preset="fade-in-blur"
            per="word"
            delay={0.5}
            speedReveal={0.6}
          >
            Join thousands of merchants who trust Khatabook Payments for secure, fast, and reliable transactions across India.
          </TextEffect>

          <AnimatedGroup
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                    staggerChildren: 0.1,
                  },
                },
              },
            }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#DC3444] hover:bg-[#B82A37] border-[#DC3444] text-white font-semibold px-8 py-3 text-lg">
              <Link href="#">
                <span>Join the Waitlist</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 font-semibold px-8 py-3 text-lg">
              <Link href="#">
                <span>Learn More</span>
              </Link>
            </Button>
          </AnimatedGroup>

          <TextEffect
            as="p"
            className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            preset="fade"
            delay={1.5}
          >
            0% fees during early access
          </TextEffect>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#DC3444]/10 to-[#B82A37]/10 rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-green-500/10 to-teal-500/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  )
}
