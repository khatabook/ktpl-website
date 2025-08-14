'use client'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const menuItems = []

export default function HeroSection() {
    const [menuState, setMenuState] = useState(false)
    return (
        <>
            <header>
                <nav
                    className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            {/* Logo */}
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            {/* Right Side - Desktop CTA and Mobile Menu */}
                            <div className="flex items-center gap-4">
                                {/* Desktop Join Waitlist Button */}
                                <Button
                                    asChild
                                    size="sm"
                                    className="hidden lg:flex bg-[#DC3444] hover:bg-[#B82A37] border-[#DC3444]">
                                    <Link href="#waitlist-form">
                                        <span className="btn-label">Join Waitlist</span>
                                    </Link>
                                </Button>

                                {/* Mobile Hamburger Menu */}
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    {menuState ? (
                                        <X className="m-auto size-6" />
                                    ) : (
                                        <Menu className="m-auto size-6" />
                                    )}
                                </button>
                            </div>

                            {/* Mobile Menu - Only visible on mobile when menuState is true */}
                            {menuState && (
                                <div className="lg:hidden bg-background mb-6 w-full flex-wrap items-start justify-start space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 dark:shadow-none">
                                    <div className="w-full space-y-6">
                                        {/* Join Waitlist CTA */}
                                        <div className="border-b border-gray-200 pb-4">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="w-full bg-[#DC3444] hover:bg-[#B82A37] border-[#DC3444]">
                                                <Link href="#waitlist-form">
                                                    <span className="btn-label">Join Waitlist</span>
                                                </Link>
                                            </Button>
                                        </div>
                                        
                                        {/* Footer Content */}
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Product</h4>
                                                <ul className="space-y-2">
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Features</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Documentation</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">API Reference</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Pricing</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Support</Link></li>
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4>
                                                <ul className="space-y-2">
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">About</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Careers</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Blog</Link></li>
                                                    <li><Link href="mailto:contact@khatapayments.com" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Contact</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Help Center</Link></li>
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Legal</h4>
                                                <ul className="space-y-2">
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Terms & Conditions</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Privacy Policy</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Grievance Policy</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">How to Pay</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">E-Waste Policy</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Trust & Safety</Link></li>
                                                    <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#DC3444] block">Global Anti-Corruption Policy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div
                    aria-hidden
                    className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-white dark:bg-transparent">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Payment Gateway with 0% fees</h1>
                            <p className="mx-auto my-8 max-w-2xl text-xl">One API for UPI, cards, net banking, wallets - secure, fast, built for India.</p>

                            <Button
                                asChild
                                size="lg"
                                className="bg-[#DC3444] hover:bg-[#B82A37] border-[#DC3444]">
                                <Link href="#waitlist-form">
                                    <span className="btn-label">Join Waitlist</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl">
                        <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                            <div className="[transform:rotateX(20deg);]">
                                <div className="lg:h-176 relative skew-x-[.36rad]">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                                    />
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                                    />

                                    <div
                                        aria-hidden
                                        className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                                    />
                                    <div
                                        aria-hidden
                                        className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                                    />
                                    <div
                                        aria-hidden
                                        className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                    />
                                    <div
                                        aria-hidden
                                        className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                    />

                                    <Image
                                        className="rounded-lg z-1 relative border shadow-xl w-full max-w-6xl mx-auto"
                                        src="/dummy-dashboard.png"
                                        alt="Khatabook Payments Dashboard"
                                        width={1200}
                                        height={800}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
