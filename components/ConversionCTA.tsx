import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ConversionCTAProps {
  headline?: string
  description?: string
  buttonText?: string
  href?: string
  variant?: "default" | "banner"
}

export function ConversionCTA({
  headline = "Upgrade Your Workout Today",
  description = "Join 23,000+ women who reclaimed their sleeveless confidence with Confitone's targeted compression technology.",
  buttonText = "Shop Confitone Now",
  href = "/shop",
  variant = "default",
}: ConversionCTAProps) {
  if (variant === "banner") {
    return (
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl p-10 md:p-14 bg-primary text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/10 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                {headline}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                {description}
              </p>
              <Link
                href={href}
                className="group inline-flex items-center justify-center gap-3 bg-background text-foreground px-8 py-4 rounded-full text-sm tracking-wide font-semibold confitone-transition hover:bg-background/90 confitone-shadow"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 confitone-transition" />
              </Link>
              <p className="text-primary-foreground/60 text-sm mt-4">
                Free shipping &middot; 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          {headline}
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm tracking-wide font-semibold confitone-transition hover:bg-accent confitone-shadow"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 confitone-transition" />
        </Link>
        <p className="text-muted-foreground text-sm mt-4">
          Free shipping &middot; 30-day money-back guarantee
        </p>
      </div>
    </section>
  )
}
