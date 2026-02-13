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
  Wind,
  HandMetal,
  Activity,
  ChevronDown,
  Droplets,
  Timer,
} from "lucide-react"

/* ───────────────────── Data ───────────────────── */

const differencePoints = [
  {
    icon: Flame,
    title: "Graduated Compression",
    summary: "Supports natural shaping with precision-placed pressure.",
    detail:
      "Our compression is engineered to apply the right amount of pressure in the right places, gently encouraging your body to hold its shape. Unlike generic shapewear, every Confitone product uses medical-grade graduated compression that is firmer at the extremities and lighter as it moves inward -- promoting healthy circulation while you wear it.",
  },
  {
    icon: Activity,
    title: "Thermal Activation",
    summary: "Enhances blood circulation with gentle, sustained warmth.",
    detail:
      "A subtle warming layer works with your natural body heat to promote healthy blood flow and support firmer, smoother skin over time. This is the same thermal principle used in sports recovery -- adapted for everyday wear so you get benefits while doing chores, working out, or simply relaxing at home.",
  },
  {
    icon: Heart,
    title: "All-Day Comfort",
    summary: "Lightweight, breathable, and designed for real life.",
    detail:
      "Premium Confitone\u2122 fabric is moisture-wicking, breathable, and soft against your skin. Unlike compression garments that feel restrictive after an hour, ours are built to wear from morning to night. Most customers tell us they forget they have them on -- but their body does not.",
  },
  {
    icon: Droplets,
    title: "Sweat-Resistant Material",
    summary: "Built to resist moisture and maintain support through any activity.",
    detail:
      "Our proprietary fabric blend resists sweat and moisture without losing its compression properties. Whether you are at the gym or running errands on a hot day, Confitone products maintain their shape, support, and effectiveness throughout your entire wear.",
  },
  {
    icon: Shield,
    title: "Premium Build Quality",
    summary: "Reinforced stitching and medical-grade materials that last.",
    detail:
      "Every Confitone product features double-stitched seams, adjustable velcro closures for a personalized fit, and medical-grade neoprene that holds up wash after wash. We designed these to be part of your daily routine -- not something you replace every few weeks.",
  },
  {
    icon: Timer,
    title: "Visible Results in 30 Days",
    summary: "96% of customers report noticeable improvement within a month.",
    detail:
      "When worn consistently for 4-6 hours daily, the combination of graduated compression and thermal activation produces visible results in as little as 30 days. Smoother skin, improved definition, and a confidence boost that our 23,000+ customers can not stop talking about.",
  },
]

const productLine = [
  {
    icon: Zap,
    title: "ThermoTone Arm Sleeves",
    description:
      "Our original. Graduated compression and gentle thermal activation to shape, smooth, and define your upper arms.",
    image: "/images/confitone-arm-sleeves-product.png",
    badge: "Bestseller",
  },
  {
    icon: Wind,
    title: "ThermoTone Waistband",
    description:
      "Far more than a wrap. Targeted heat and compression support back alignment, improve posture, and help sculpt your waistline.",
    image: "/images/confitone-waistband-product.png",
    badge: "New",
  },
  {
    icon: HandMetal,
    title: "Compression Gloves",
    description:
      "Soothing compression that warms and circulates joints. Designed for women managing arthritis or everyday hand stiffness.",
    image: "/images/confitone-gloves-product.png",
    badge: "New",
  },
]

const stats = [
    { number: "88%", label: "Achieved Smoother Arms" },
    { number: "91%", label: "Felt Enhanced Comfort" },
  { number: "94%", label: "Gained Confidence" },
  { number: "96%", label: "Rated 5 Stars" },
]

/* ───────────────── Expandable Bullet ───────────────── */

function DifferenceBullet({
  point,
  index,
  visible,
}: {
  point: (typeof differencePoints)[number]
  index: number
  visible: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl border border-border bg-background boty-shadow transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index + 1) * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 md:p-6 text-left boty-transition hover:bg-muted/30 rounded-2xl"
        aria-expanded={open}
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <point.icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-foreground">
            {point.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
            {point.summary}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 boty-transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden boty-transition ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-5 md:px-6 md:pb-6 pl-[4.5rem]">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {point.detail}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────── Component ───────────────────── */

export function FeatureSection() {
  const [diffVisible, setDiffVisible] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
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

    const obs1 = createObserver(setDiffVisible)
    const obs2 = createObserver(setLineVisible)
    const obs3 = createObserver(setStatsVisible)

    if (diffRef.current) obs1.observe(diffRef.current)
    if (lineRef.current) obs2.observe(lineRef.current)
    if (statsRef.current) obs3.observe(statsRef.current)

    return () => {
      obs1.disconnect()
      obs2.disconnect()
      obs3.disconnect()
    }
  }, [])

  return (
    <section className="bg-background">
      {/* ── 1. The Confitone Difference -- Expandable Bullets ── */}
      <div className="py-16 bg-card">
        <div ref={diffRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
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
              What Makes Us Different
            </span>
            <h2
              className={`font-sans text-3xl md:text-5xl leading-tight text-foreground font-bold text-balance max-w-2xl mx-auto mb-4 ${
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
              The Confitone{" "}
              <span className="text-primary">Difference</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed ${
                diffVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                diffVisible
                  ? { animationDelay: "0.3s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Gentle on you. Serious about results. Tap any point below to learn
              more about the science and care behind every product we make.
            </p>
          </div>

          {/* Two-column: bullets 60%, images 40% */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-start">
            {/* Expandable bullets */}
            <div className="flex flex-col gap-3">
              {differencePoints.map((point, i) => (
                <DifferenceBullet
                  key={point.title}
                  point={point}
                  index={i}
                  visible={diffVisible}
                />
              ))}
            </div>

            {/* Product images */}
            <div
              className={`hidden lg:flex flex-col gap-4 sticky top-24 transition-all duration-700 ease-out ${
                diffVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="rounded-2xl overflow-hidden boty-shadow">
                <Image
                  src="/images/testimonial-linda-before-after.png"
                  alt="Linda, 61 -- before and after results with Confitone arm sleeves"
                  width={500}
                  height={500}
                  loading="lazy"
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-2xl overflow-hidden boty-shadow">
                <Image
                  src="/images/arm-fat-reduction-support.jpg"
                  alt="Confitone arm fat reduction support -- thermal activation and improved circulation"
                  width={500}
                  height={250}
                  loading="lazy"
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Rediscover Confidence -- Product Line ── */}
      <div className="py-16">
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 boty-transition"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-bold tracking-wide text-primary uppercase">
                      {product.badge}
                    </span>
                  </div>
                </div>
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


        </div>
      </div>

      {/* ── 3. Social Proof Stats Bar ── */}
      <div ref={statsRef} className="py-12 bg-card">
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

    </section>
  )
}
