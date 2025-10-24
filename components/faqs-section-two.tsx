"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQs() {
    const faqItems = [
        {
            id: "item-1",
            question: "Who can apply for early access?",
            answer: "Early access is open to Indian businesses, startups, and MSMEs looking to simplify digital collections and payouts using Khatabook Pay. Freelancers and individual sellers can also apply.",
        },
        {
            id: "item-2",
            question: "How long is the 0% transaction fee valid?",
            answer: "The 0% fee offer is available for a limited time during the early access period, subject to an introductory transaction volume cap. After that, standard rates apply as per your usage plan.",
        },
        {
            id: "item-3",
            question: "Which payment methods are supported?",
            answer: `You can accept and manage payments through multiple channels, including: 
• UPI (all major UPI apps) 
• Debit & Credit Cards (Visa, Mastercard, RuPay) 
• Net Banking (50+ banks) 
• Wallets & Payment Links 
• Recurring Billing and AutoPay`,
        },
        {
            id: "item-4",
            question: "Do I need an RBI or Payment Aggregator license to use Khatabook Pay?",
            answer: `No. You don’t need your own RBI or PA license. Khatabook Pay operates under fully 
compliant partnerships with RBI-regulated entities, ensuring your business meets all necessary 
payment and data security standards.`,
        },
        {
            id: "item-5",
            question: "Can I test integra:ons before going live?",
            answer: `Yes! You can integrate in our sandbox environment and simulate real-world payment flows 
before launching in production. Developer documentation and APIs are available for every 
module.`,
        },
        {
            id: "item-6",
            question: "What happens aMer the early access period ends?",
            answer: `Once the early access period concludes, your account will automatically switch to our standard 
pricing plan with no service interruption. You’ll also gain access to new features and advanced 
modules as they become available.`,
        },
        {
            id: "item-7",
            question: "How fast are seOlements?",
            answer: `Settlements are designed to be instant for UPI payments and typically T+1 or T+2 for cards and 
net banking, depending on bank processing cycles.`,
        },
        {
            id: "item-8",
            question: "Is my data and customer informa:on secure?",
            answer: `Yes. Khatabook Pay is PCI-DSS compliant, uses 3-D Secure authentication, tokenization, 
and real-time fraud detection to ensure your payments and data remain protected end-to-end.`,
        },
        {
            id: "item-9",
            question: "Can I set up recurring or automated payments?",
            answer: `Yes. With Recurring Payments, you can automate billing cycles for subscriptions, 
memberships, and SaaS plans without manual intervention.`,
        },
        {
            id: "item-10",
            question: "Does Khatabook Pay support escrow or multi-party settlements?",
            answer: `Yes. The Escrow and Settler modules enable secure fund holding, controlled releases, and 
automatic multi-account settlements — ideal for platforms, marketplaces, and service 
aggregators.`,
        },
    ];

    return (
        <section className="pt-8 pb-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-gray-900 dark:text-white text-4xl font-semibold">
                            FAQ
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-4 text-balance text-lg">
                            Common questions about early access
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base">
                            Can&apos;t find what you&apos;re looking for? Mail us at{" "}
                            <a
                                href="mailto:contact@khatapayments.com"
                                className="text-[#DC3444] font-medium hover:underline"
                            >
                                contact@khatapayments.com
                            </a>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion type="single" collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-gray-200 dark:border-gray-700"
                                >
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-gray-600 dark:text-gray-400">
                                            {item.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
