"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Who is eligible for early access?",
    answer: "We're onboarding Indian businesses across D2C, SaaS, marketplaces, and services. Selection is based on readiness and use-case fit."
  },
  {
    question: "How long is the 0% fee valid?",
    answer: "For the first 3 months or ₹5,00,000 processed, whichever occurs first. Exact limits will be confirmed in your invite."
  },
  {
    question: "Which payment methods are included?",
    answer: "UPI, cards, and net banking. Eligibility of each method under the 0% offer depends on your risk profile and T&Cs."
  },
  {
    question: "Do I need an RBI/PA license?",
    answer: "No. Khatabook manages banking partnerships and compliance."
  },
  {
    question: "Can I test before going live?",
    answer: "Yes. You'll receive sandbox keys, sample payloads, and webhook tools."
  },
  {
    question: "What happens after early access?",
    answer: "You can switch to a standard plan. We'll share pricing well before your promo ends."
  }
];

export function FaqSection() {
  return (
    <section className="py-30 w-full">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-xl",
        "transition-all duration-200 ease-in-out",
        "border border-gray-200 dark:border-gray-700",
        isOpen
          ? "bg-white dark:bg-gray-800 shadow-lg"
          : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 h-auto justify-between hover:bg-transparent"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-gray-700 dark:text-gray-300",
            isOpen && "text-gray-900 dark:text-white"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-[#DC3444]" : "text-gray-400"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-6 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";
