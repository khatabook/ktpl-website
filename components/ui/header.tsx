"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

function Header1() {
    const navigationItems = [
        {
            title: "Product",
            description: "Explore our payment solutions for your business.",
            items: [
                {
                    title: "Multi-Collect",
                    href: "/multi-collect",
                },
                {
                    title: "UPI Payment Gateway",
                    href: "/upi-payment-gateway",
                },
                {
                    title: "Recurring Payments",
                    href: "/recurring-payments",
                },
                {
                    title: "Instant Payouts",
                    href: "/instant-payouts",
                },
                {
                    title: "Escrow Accounts",
                    href: "/escrow-accounts",
                },
                {
                    title: "Ledgers",
                    href: "/ledgers",
                },
                {
                    title: "Settlr",
                    href: "/settlr",
                },
            ],
        },
        {
            title: "Banking",
            description: "Explore our banking solutions for your business.",
            items: [
                {
                    title: "KYC & Onboarding",
                    href: "/kyc-onboarding",
                },
                {
                    title: "Bytes",
                    href: "/bytes",
                },
                {
                    title: "Scanner",
                    href: "/scanner",
                },
                {
                    title: "UIStreams",
                    href: "/uistreams",
                },
                {
                    title: "Hyperstreams",
                    href: "/hyperstreams",
                },
            ],
        },
        {
            title: "Company",
            description: "Learn more about Khatabook Payments and our mission.",
            items: [
                {
                    title: "About",
                    href: "/about",
                },
                {
                    title: "Blog",
                    href: "/blog",
                },
                {
                    title: "Careers",
                    href: "/careers",
                },
                {
                    title: "Payment aggregator",
                    href: "/payment-aggregator",
                },
                {
                    title: "Compliance",
                    href: "/compliance",
                },
                {
                    title: "Why Khatabook Pay",
                    href: "/why-khatabook-pay",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row items-center justify-between px-6">
                <div className="flex justify-start">
                    <Link href="/" aria-label="home">
                        <Logo />
                    </Link>
                </div>
                <div className="flex justify-end items-center">
                    <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
                        <NavigationMenu className="flex justify-center items-center">
                            <NavigationMenuList className="flex justify-center gap-4 flex-row">
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        {item.items ? (
                                            <>
                                                <NavigationMenuLink>
                                                    <Button variant="ghost">{item.title}</Button>
                                                </NavigationMenuLink>
                                            </>
                                        ) : (
                                            <>
                                                <NavigationMenuTrigger className="font-medium text-sm">
                                                    {item.title}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent className="!w-[450px] p-4">
                                                    <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                        <div className="flex flex-col h-full justify-between">
                                                            <div className="flex flex-col">
                                                                <p className="text-base">{item.title}</p>
                                                                <p className="text-muted-foreground text-sm">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                            <Button size="sm" className="mt-10">
                                                                Book a call today
                                                            </Button>
                                                        </div>
                                                        <div className="flex flex-col text-sm h-full justify-end">
                                                            {(item.items as any[])?.map((subItem) => (
                                                                <NavigationMenuLink
                                                                    href={subItem.href}
                                                                    key={subItem.title}
                                                                    className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                                >
                                                                    <span>{subItem.title}</span>
                                                                    <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </NavigationMenuContent>
                                            </>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-lg">{item.title}</p>
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };