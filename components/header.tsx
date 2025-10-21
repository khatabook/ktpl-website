'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Wallet, CreditCard, RefreshCw, Zap, Lock, BarChart3, Coins, Fingerprint, TrendingUp, Database, Settings, ScanLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const paymentsDropdown = [
    {
        name: 'Multi-Collect',
        description: 'Accept payments through dedicated virtual accounts for easy reconciliation',
        href: '/multi-collect',
        icon: Wallet
    },
    {
        name: 'UPI Payment Gateway',
        description: 'Accept UPI, cards, net banking & wallet payments on your platform',
        href: '/upi-payment-gateway',
        icon: CreditCard
    },
    {
        name: 'Recurring Payments',
        description: 'Automate subscription billing and collect recurring payments',
        href: '/recurring-payments',
        icon: RefreshCw
    },
    {
        name: 'Instant Payouts',
        description: 'Send instant payments to any bank account or UPI ID 24/7',
        href: '/instant-payouts',
        icon: Zap
    },
    {
        name: 'Escrow Accounts',
        description: 'Hold and release funds securely between multiple parties',
        href: '/escrow-accounts',
        icon: Lock
    },
    {
        name: 'Ledgers',
        description: 'Track and manage all transactions in one unified ledger',
        href: '/ledgers',
        icon: BarChart3
    },
    {
        name: 'Settlr',
        description: 'Automatically split and distribute settlements to multiple accounts',
        href: '/settlr',
        icon: Coins
    },
]

const bankingDropdown = [
    {
        name: 'KYC & Onboarding',
        description: 'Verify customer identity and complete KYC compliance automatically',
        href: '/kyc-onboarding',
        icon: Fingerprint
    },
    {
        name: 'Hyperstreams',
        description: 'Lightning-fast identity verification in real-time',
        href: '/hyperstreams',
        icon: Zap
    },
    {
        name: 'Bytes',
        description: 'Access and analyze customer financial data securely',
        href: '/bytes',
        icon: Database
    },
    {
        name: 'UIStreams',
        description: 'Embed fully-customizable KYC verification flows in your app',
        href: '/uistreams',
        icon: Settings
    },
    {
        name: 'Scanner',
        description: 'Detect fraud, verify customers, and ensure compliance instantly',
        href: '/scanner',
        icon: ScanLine
    },
]

const menuItems = [
    { name: 'Payments', href: '#link', hasDropdown: true, dropdown: 'payments' },
    { name: 'Banking', href: '#link', hasDropdown: true, dropdown: 'banking' },
    { name: 'Company', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null)
            }
        }

        if (openDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [openDropdown])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image
                                    src="/khatapg-logo.png"
                                    alt="Khatabook Payments"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto"
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block" ref={dropdownRef}>
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="relative"
                                    >
                                        {item.hasDropdown ? (
                                            <div className="relative">
                                                <button
                                                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                                    className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="w-4 h-4" />
                                                </button>
                                                {openDropdown === item.name && (
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 z-50">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {(item.dropdown === 'payments' ? paymentsDropdown : bankingDropdown).map((dropdownItem, idx) => {
                                                                const IconComponent = dropdownItem.icon
                                                                return (
                                                                    <Link
                                                                        key={idx}
                                                                        href={dropdownItem.href}
                                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                                                                        <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[#DC3444] transition-colors flex-shrink-0 mt-0.5" />
                                                                        <div>
                                                                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#DC3444] transition-colors">
                                                                                {dropdownItem.name}
                                                                            </h4>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                                                {dropdownItem.description}
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-[#DC3444] hover:bg-[#b91c1c] text-white px-6 rounded-full font-medium">
                                    <Link href="#waitlist-form">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
