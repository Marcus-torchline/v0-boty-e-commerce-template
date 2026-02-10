"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplets, ThermometerSun, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Droplets,
    title: "Gentle Compression",
    description:
      "Applies light, even pressure that supports healthy blood flow and helps reduce fluid retention naturally.",
  },
  {
    icon: ThermometerSun,
    title: "Thermal Activation",
    description:
      "A subtle warming layer works with your body heat to smooth and firm areas where skin tends to lose definition with age.",
  },
  {
    icon: Sparkles,
    title: "Visible Results",
    description:
      "Most women notice a difference in 30 to 45 days of consistent daily wear, no extreme routines required.",
  },
]

export function RealResults() {
  const [sloganVisible, setSloganVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [pillarsVisible, setPillarsVisible] = useState(false)
  const sloganRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createObserver = (
      setter: (val: boolean) => void,
      threshold = 0.15
    ) =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true)
        },
        { threshold }
      )

    const sloganObs = createObserver(setSloganVisible)
    const contentObs = createObserver(setContentVisible)
    const pillarsObs = createObserver(setPillarsVisible)

    if (sloganRef.current) sloganObs.observe(sloganRef.current)
    if (contentRef.current) contentObs.observe(contentRef.current)
    if (pillarsRef.current) pillarsObs.observe(pillarsRef.current)

    return () => {
      sloganObs.disconnect()
      contentObs.disconnect()
      pillarsObs.disconnect()
    }
  }, [])

  return (
    <section id="real-results" className="bg-background">
      {/* Slogan Banner */}
      <div
        ref={sloganRef}
        className="relative py-24 md:py-32 bg-[#1A1A1A] overflow-hidden"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-6 block ${
              sloganVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              sloganVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            Our Mission
          </span>
          <h2
            className={`font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white font-bold text-balance mb-6 ${
              sloganVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              sloganVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Real Women.{" "}
            <span className="text-primary">Real Results.</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto ${
              sloganVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              sloganVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            Over 23,000 women have trusted Confitone to help them feel like
            themselves again. Here is why.
          </p>
        </div>
      </div>

      {/* Mission Statement + Image */}
      <div className="py-24">
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text */}
          <div
            className={`transition-all duration-700 ease-out ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-sans text-3xl md:text-4xl leading-tight text-foreground font-bold mb-6 text-balance">
              You Shouldn't Have to Choose Between Comfort and Confidence
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Your body changes. That is not a flaw -- it is a reality that
                every woman over 40 understands. Arms that once felt firm
                start to soften. Skin that held its shape begins to loosen.
                And somewhere along the way, sleeveless tops move to the
                back of the closet.
              </p>
              <p>
                We believe you should never have to spend thousands on
                invasive procedures just to feel comfortable in your own
                skin. And you should never have to sacrifice comfort for
                results.{" "}
                <span className="text-foreground font-medium">
                  That is the promise at the heart of Confitone.
                </span>
              </p>
              <p>
                Our ThermoTone shaping technology is designed to work{" "}
                <em>with</em> your body, not against it. It is something you
                can slip on in the morning and wear on your own terms --
                while you cook breakfast, walk the dog, or sit through a
                movie. No gym visits. No recovery time. No pain. Just gentle,
                consistent support that lets your body do what it already
                knows how to do.
              </p>
            </div>

            {/* Proof callout */}
            <div className="mt-8 rounded-2xl bg-card p-6 boty-shadow">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-foreground">
                  23,000+
                </span>
                <span className="text-sm text-primary font-medium uppercase tracking-wide">
                  Women and counting
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From first-time buyers to loyal customers who gift it to
                their friends, our community grows by word of mouth because
                the results speak louder than any ad.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
              contentVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <Image
              src="/images/real-women-real-results.jpg"
              alt="Confident women of different ages smiling together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* How It Works Pillars */}
      <div ref={pillarsRef} className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                pillarsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                pillarsVisible
                  ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                  : {}
              }
            >
              The Science Behind It
            </span>
            <h3
              className={`font-sans text-3xl md:text-4xl leading-tight text-foreground font-bold text-balance ${
                pillarsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                pillarsVisible
                  ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Simple Technology. Honest Results.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-3xl bg-card p-8 md:p-10 boty-shadow transition-all duration-700 ease-out ${
                  pillarsVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
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

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-accent boty-shadow font-medium"
            >
              See What Confitone Can Do for You
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
