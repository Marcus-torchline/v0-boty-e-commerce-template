import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ClosingCTA() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-sans text-3xl md:text-5xl leading-tight text-foreground font-bold text-balance mb-6">
          Your Body May Be Changing.{" "}
          <span className="text-primary">
            Your Confidence Doesn{"'"}t Have To.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Slip them on. Live your life. Let the results speak for themselves.
        </p>
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-accent boty-shadow font-medium"
        >
          Find Your Fit
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
        </Link>
      </div>
    </section>
  )
}
