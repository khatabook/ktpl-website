'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Who is eligible for early access?',
            answer: "We're onboarding Indian businesses across D2C, SaaS, marketplaces, and services. Selection is based on readiness and use-case fit.",
        },
        {
            id: 'item-2',
            question: 'How long is the 0% fee valid?',
            answer: 'For the first 3 months or ₹5,00,000 processed, whichever occurs first. Exact limits will be confirmed in your invite.',
        },
        {
            id: 'item-3',
            question: 'Which payment methods are included?',
            answer: 'UPI, cards, and net banking. Eligibility of each method under the 0% offer depends on your risk profile and T&Cs.',
        },
        {
            id: 'item-4',
            question: 'Do I need an RBI/PA license?',
            answer: 'No. Khatabook manages banking partnerships and compliance.',
        },
        {
            id: 'item-5',
            question: 'Can I test before going live?',
            answer: "Yes. You'll receive sandbox keys, sample payloads, and webhook tools.",
        },
        {
            id: 'item-6',
            question: 'What happens after early access?',
            answer: 'You can switch to a standard plan. We\'ll share pricing well before your promo ends.',
        },
    ]

    return (
        <section className="pt-8 pb-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-gray-900 dark:text-white text-4xl font-semibold">FAQ</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-4 text-balance text-lg">Common questions about early access</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base">
                            Can't find what you're looking for? Mail us at{' '}
                            <a
                                href="mailto:contact@khatapayments.com"
                                className="text-[#DC3444] font-medium hover:underline">
                                contact@khatapayments.com
                            </a>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-gray-200 dark:border-gray-700">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-gray-600 dark:text-gray-400">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
