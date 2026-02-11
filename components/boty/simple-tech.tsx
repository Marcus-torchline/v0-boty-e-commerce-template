"use client"

import { Droplets, Flame, Timer } from "lucide-react"

const pillars = [
  {
    icon: Droplets,
    title: "Gentle Compression",
    description:
      "Applies light, even pressure that supports healthy blood flow and helps reduce fluid retention naturally.",
  },
  {
    icon: Flame,
    title: "Thermal Activation",
    description:
      "A subtle warming layer works with your body heat to smooth and firm areas where skin tends to lose definition with age.",
  },
  {
    icon: Timer,
    title: "Visible Results",
    description:
      "Most women notice a difference in 30 to 45 days of consistent daily wear, no extreme routines required.",
  },
]

export function SimpleTech() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            The Science Behind It
          </span>
          <h3 className="font-sans text-3xl md:text-4xl leading-tight text-foreground font-bold text-balance">
            Simple Technology. Honest Results.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl bg-background p-8 md:p-10 boty-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-5">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                {pillar.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
