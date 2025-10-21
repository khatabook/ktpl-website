import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-[family-name:var(--font-playfair-display)] font-normal md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Payment Gateway with 0% fees
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                    Accept payments seamlessly with UPI, cards, net banking, and more.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <Button
                                        key={1}
                                        asChild
                                        size="lg"
                                        className="bg-[#DC3444] hover:bg-[#b91c1c] text-white px-6 py-6 rounded-full text-base font-medium shrink-0 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/60">
                                        <Link href="#waitlist-form" className="flex items-center gap-2">
                                            <span className="text-nowrap">Get Started</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative rounded-2xl"
                                        src="/sample-dashboard.png"
                                        alt="Khatabook Payments Dashboard"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>

                {/* Products Navigation */}
                <section className="bg-background pb-16">
                    <div className="mx-auto max-w-7xl px-6">
                        {/* First Row */}
                        <div className="flex flex-wrap items-center justify-center gap-x-3 lg:gap-x-6 gap-y-6 text-center">
                            <Link href="/multi-collect" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Multi-Collect
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/upi-payment-gateway" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                UPI Gateway
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/recurring-payments" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Recurring Payments
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/instant-payouts" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Instant Payouts
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/escrow-accounts" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Escrow
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/ledgers" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Ledgers
                            </Link>
                        </div>

                        {/* Second Row */}
                        <div className="flex flex-wrap items-center justify-center gap-x-3 lg:gap-x-6 gap-y-6 mt-6 text-center">
                            <Link href="/settlr" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Settlr
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/scanner" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Scanner
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/uistreams" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                UIStreams
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/kyc-onboarding" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                KYC & Onboarding
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/bytes" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Bytes
                            </Link>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <Link href="/payment-solutions" className="text-lg lg:text-xl xl:text-2xl font-[family-name:var(--font-playfair-display)] hover:text-red-600 transition-colors whitespace-nowrap">
                                Payment Solutions
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
