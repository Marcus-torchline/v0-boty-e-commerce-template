"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Flame,
  Zap,
  Heart,
  Shield,
  Check,
  Sparkles,
  Wind,
  HandMetal,
  Activity,
} from "lucide-react"

/* ───────────────────── Data ───────────────────── */

const bestseller = {
  tagline: "Our Bestseller",
  title: "ThermoTone Arm Sleeves",
  description:
    "Graduated pressure meets thermal activation to shape and smooth your upper arms. The result is firmer skin, enhanced definition, and all-day comfort you can wear anywhere -- whether you are working out, doing chores, or relaxing at home.",
  image: "/images/confitone-arm-sleeves-lifestyle.jpg",
  features: [
    "Premium Confitone\u2122 breathable fabric with thermal heat",
    "Supports circulation through thermal action",
    "Precision graduated compression",
    "Visible results in as little as 30 days",
  ],
}

const differentiators = [
  {
    icon: Flame,
    title: "Graduated Compression",
    subtitle: "Supports Natural Shaping",
    description:
      "Our compression is engineered to apply the right amount of pressure in the right places, gently encouraging your body to do what it does best -- hold its shape.",
  },
  {
    icon: Activity,
    title: "Thermal Activation",
    subtitle: "Enhances Blood Circulation",
    description:
      "A subtle warming layer works with your body heat to promote healthy blood flow and support firmer, smoother skin over time.",
  },
  {
    icon: Heart,
    title: "All-Day Comfort",
    subtitle: "Designed for Real Life",
    description:
      "Lightweight, breathable, and moisture-wicking. You will forget you are wearing them -- but your body will not.",
  },
]

const productLine = [
  {
    icon: Zap,
    title: "ThermoTone Arm Sleeves",
    description:
      "Our original. Graduated compression and gentle thermal activation to shape, smooth, and define your upper arms.",
    image: "/images/confitone-arm-sleeves-lifestyle.jpg",
    badge: "Bestseller",
  },
  {
    icon: Wind,
    title: "ThermoTone Waistband",
    description:
      "Far more than a wrap. Targeted heat and compression support back alignment, improve posture, and help sculpt your waistline.",
    image: "/images/confitone-waistband.jpg",
    badge: "New",
  },
  {
    icon: HandMetal,
    title: "Compression Gloves",
    description:
      "Soothing compression that warms and circulates joints. Designed for women managing arthritis or everyday hand stiffness.",
    image: "/images/confitone-compression-gloves.jpg",
    badge: "New",
  },
]

const stats = [
  { number: "92%", label: "Achieved Smoother Arms" },
  { number: "87%", label: "Felt Enhanced Comfort" },
  { number: "94%", label: "Gained Confidence" },
  { number: "96%", label: "Rated 5 Stars" },
]

/* ───────────────────── Component ───────────────────── */

export function FeatureSection() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [diffVisible, setDiffVisible] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const diffRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createObserver = (
      setter: (v: boolean) => void,
      threshold = 0.1
    ) =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true)
        },
        { threshold }
      )

    const obs1 = createObserver(setHeroVisible)
    const obs2 = createObserver(setDiffVisible)
    const obs3 = createObserver(setLineVisible)
    const obs4 = createObserver(setStatsVisible)

    if (heroRef.current) obs1.observe(heroRef.current)
    if (diffRef.current) obs2.observe(diffRef.current)
    if (lineRef.current) obs3.observe(lineRef.current)
    if (statsRef.current) obs4.observe(statsRef.current)

    return () => {
      obs1.disconnect()
      obs2.disconnect()
      obs3.disconnect()
      obs4.disconnect()
    }
  }, [])

  return (
    <section id="the-difference" className="bg-background">
      {/* ── 1. Bestseller Spotlight ── */}
      <div className="py-24">
        <div
          ref={heroRef}
          className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Images -- stacked top/bottom */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 ease-out ${
              heroVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {/* Top image -- customer wearing sleeves */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden boty-shadow">
              <Image
                src="/images/confitone-customer-sleeves.png"
                alt="Confitone customer showing off her ThermoTone arm sleeves"
                fill
                className="object-cover"
              />
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 boty-shadow">
                <span className="text-xs font-bold tracking-wide text-primary uppercase">
                  {bestseller.tagline}
                </span>
              </div>
            </div>
            {/* Bottom image -- product shot */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden boty-shadow">
              <Image
                src="/images/confitone-arm-sleeves-product.png"
                alt="Confitone ThermoTone compression arm sleeves product pair"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div
            className={`transition-all duration-700 ease-out ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Feel the Confitone Difference
            </span>
            <h2 className="font-sans text-4xl md:text-5xl leading-[1.1] text-foreground font-bold mb-6 text-balance">
              {bestseller.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {bestseller.description}
            </p>

            {/* Feature checks -- Spanx/Lulu-style benefit list */}
            <div className="space-y-3 mb-10">
              {bestseller.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-accent boty-shadow font-medium"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. The Confitone Difference -- 3 Pillars ── */}
      <div className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={diffRef} className="text-center mb-16">
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                diffVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                diffVisible
                  ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                  : {}
              }
            >
              The Confitone Difference
            </span>
            <h2
              className={`font-sans text-3xl md:text-5xl leading-tight text-foreground font-bold text-balance max-w-2xl mx-auto ${
                diffVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                diffVisible
                  ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Gentle on You.{" "}
              <span className="text-primary">Serious About Results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className={`rounded-3xl bg-background p-8 md:p-10 boty-shadow transition-all duration-700 ease-out hover:scale-[1.02] boty-transition ${
                  diffVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-5">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">
                  {d.title}
                </h4>
                <p className="text-sm font-medium text-primary mb-3">
                  {d.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Rediscover Confidence -- Product Line ── */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={lineRef} className="text-center mb-16">
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                lineVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                lineVisible
                  ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                  : {}
              }
            >
              More Than Sleeves
            </span>
            <h2
              className={`font-sans text-3xl md:text-5xl leading-tight text-foreground font-bold text-balance max-w-3xl mx-auto mb-4 ${
                lineVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                lineVisible
                  ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Rediscover Confidence{" "}
              <span className="text-primary">Everywhere</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed ${
                lineVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                lineVisible
                  ? { animationDelay: "0.3s", animationFillMode: "forwards" }
                  : {}
              }
            >
              What started with arm sleeves has grown into a complete line of
              thermo-compression wellness products. Each one is built on the
              same principle: your body deserves gentle, effective support --
              not extreme measures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productLine.map((product, i) => (
              <div
                key={product.title}
                className={`group rounded-3xl overflow-hidden bg-card boty-shadow transition-all duration-700 ease-out hover:scale-[1.02] boty-transition ${
                  lineVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 boty-transition"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-bold tracking-wide text-primary uppercase">
                      {product.badge}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      {product.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <Link
                    href="/shop"
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary boty-transition hover:text-accent"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 boty-transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon teaser */}
          <div
            className={`mt-12 rounded-3xl p-8 md:p-12 bg-[#1A1A1A] text-center relative overflow-hidden transition-all duration-700 ease-out ${
              lineVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Background brand mark */}
            <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 opacity-[0.04]">
              <Image
                src="/images/logo-ct-white.png"
                alt=""
                width={200}
                height={200}
                className="w-28 md:w-40 h-auto"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
                Coming Soon
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 text-balance">
              The Confitone Wellness Collection Keeps Growing
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Sweat-enhancing gels, targeted massage tools, and new
              compression products are in development. Everything we make
              follows the same philosophy: effective, comfortable, and
              designed for how real women actually live.
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. Social Proof Stats Bar ── */}
      <div ref={statsRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3
              className={`font-sans text-2xl md:text-3xl leading-tight text-foreground font-bold text-balance ${
                statsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                statsVisible
                  ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Customers Who Love Their Results
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-3xl bg-background p-6 md:p-8 text-center boty-shadow transition-all duration-700 ease-out ${
                  statsVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {s.number}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. Closing CTA -- Warm, Not Pushy ── */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-sans text-3xl md:text-5xl leading-tight text-foreground font-bold text-balance mb-6">
            Your Body Changed.{" "}
            <span className="text-primary">Your Confidence Doesn't Have To.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            You have spent enough time wondering if anything will work.
            Confitone was made by a woman who asked the same question -- and
            found the answer. Slip them on. Live your life. Let the results
            speak for themselves.
          </p>
          <Link
            href="/shop"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-accent boty-shadow font-medium"
          >
            Find Your Fit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
          </Link>
        </div>
      </div>
    </section>
  )
}
