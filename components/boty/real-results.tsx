"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

/* ─── Main Component ─── */
export function RealResults() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [missionVisible, setMissionVisible] = useState(false)
  const [resultsVisible, setResultsVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

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

    const obs1 = createObserver(setHeaderVisible, 0.2)
    const obs2 = createObserver(setMissionVisible)
    const obs3 = createObserver(setResultsVisible)

    if (headerRef.current) obs1.observe(headerRef.current)
    if (missionRef.current) obs2.observe(missionRef.current)
    if (resultsRef.current) obs3.observe(resultsRef.current)

    return () => {
      obs1.disconnect()
      obs2.disconnect()
      obs3.disconnect()
    }
  }, [])

  return (
    <section className="bg-background">
      {/* ──────────── Part 1: Section Header ──────────── */}
      <div ref={headerRef} className="pt-10 pb-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Image
            src="/images/logo-confitone-white.png"
            alt="Confitone"
            width={560}
            height={140}
            className={`h-20 md:h-24 w-auto mx-auto mb-5 transition-all duration-700 ease-out ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          />
          <h2
            className={`font-sans text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-white font-bold text-balance mb-3 ${
              headerVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            Real Women.{" "}
            <span className="text-primary">Real Results.</span>
          </h2>
          <p
            className={`text-sm md:text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-6 ${
              headerVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            23,000+ customers. Thousands of five-star reviews. One mission:
            help women feel confident in their bodies at every age.
          </p>

          {/* Stats row */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-16 ${
              headerVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            {[
              { value: "23,000+", label: "Happy Customers" },
              { value: "4.8", label: "Average Rating", hasStar: true },
              { value: "96%", label: "See Results by Day 30" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  {stat.hasStar && (
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  )}
                </div>
                <span className="text-xs text-white/50 uppercase tracking-wider mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────── Part 2: Mission + Press ──────────── */}
      <div className="py-20 md:py-24">
        <div
          ref={missionRef}
          className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text */}
          <div
            className={`transition-all duration-700 ease-out ${
              missionVisible
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
          </div>

          {/* Press Quote + Customer Collage */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              missionVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {/* Customer collage */}
            <div className="rounded-3xl overflow-hidden boty-shadow">
              <Image
                src="/images/customers-collage-4.png"
                alt="Four real Confitone customers wearing their arm sleeves at home"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ──────────── Part 3: Results Gallery ──────────── */}
      <div ref={resultsRef} className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                resultsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                resultsVisible
                  ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                  : {}
              }
            >
              See the Difference
            </span>
            <h3
              className={`font-sans text-3xl md:text-4xl leading-tight text-foreground font-bold text-balance ${
                resultsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                resultsVisible
                  ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Results You Can Actually See
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Before / After close-up */}
            <div
              className={`rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
                resultsVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <Image
                src="/images/result-before-after.png"
                alt="Before and after comparison showing firmer arm skin after using Confitone"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Week 4 arm close-up */}
            <div
              className={`rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
                resultsVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Image
                src="/images/result-week4-arms-closeup.png"
                alt="Week 4 results - side by side arm comparison showing visible improvement"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Before / After body transformation */}
            <div
              className={`rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
                resultsVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <Image
                src="/images/result-before-after-body.jpg"
                alt="Customer before and after body transformation with Confitone"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
