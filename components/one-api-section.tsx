import { ArrowRight, UserPlus, Code2, Rocket } from 'lucide-react'

export default function OneApiSection() {
  const steps = [
    {
      title: "Get Started",
      description: "Create an account with seamless verification and select your modules",
      icon: UserPlus
    },
    {
      title: "Integrate In Sandbox",
      description: "Explore our documentation and integrate with your sandbox for all selected modules",
      icon: Code2
    },
    {
      title: "Go Live!",
      description: "Launch in production whenever you're ready from your dashboard",
      icon: Rocket
    }
  ]

  return (
    <section className="bg-white dark:bg-background py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair-display)] font-normal mb-6 text-black dark:text-white">
            One API. Zero fuss.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Plug in to power high-performance payments everywhere you do business. Get the solutions you want now; add the capabilities you need later.
          </p>
        </div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Horizontal dotted line - connects from first circle to third circle */}
          <div className="hidden md:block absolute top-8 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-0.5 border-t-2 border-dotted border-gray-300 dark:border-gray-700" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Step number indicator */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#DC3444] dark:bg-[#DC3444] flex items-center justify-center z-10 relative">
                      <span className="text-lg font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center max-w-xs mx-auto">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4 font-[family-name:var(--font-playfair-display)]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
