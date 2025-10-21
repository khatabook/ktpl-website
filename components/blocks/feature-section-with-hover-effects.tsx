import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconShield,
  IconScale,
  IconFlag,
  IconClock,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "0% Fee, Limited Time",
      description:
        "Process payments at 0% fees during early access (introductory cap applies).",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Priority Onboarding",
      description:
        "Skip the queue and get hands-on help to go live fast.",
      icon: <IconClock />,
    },
    {
      title: "Built for India",
      description: "UPI, cards, net banking, and link-based checkouts—one gateway.",
      icon: <IconFlag />,
    },
    {
      title: "Reliable by Design",
      description: "Smart retries, webhooks, and real-time dashboard insights.",
      icon: <IconCloud />,
    },
    {
      title: "Serious Security",
      description: "PCI-DSS, tokenization, 3-D Secure, fraud controls.",
      icon: <IconShield />,
    },
    {
      title: "Scale Confidently",
      description: "Analytics, refunds, reconciliations, and dispute tools.",
      icon: <IconScale />,
    },
  ];
  return (
    <div className="py-30 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white mb-4 font-[family-name:var(--font-playfair-display)]">
            Why Join Now
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative items-center text-center"
      )}
    >
      <div className="mb-4 px-10 text-white dark:text-white">
        {icon}
      </div>
      <div className="text-lg font-medium mb-2 px-10">
        <span className="transition duration-200 inline-block text-white font-[family-name:var(--font-playfair-display)]">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs px-10">
        {description}
      </p>
    </div>
  );
};
