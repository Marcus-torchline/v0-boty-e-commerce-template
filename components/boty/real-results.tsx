"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Droplets, ThermometerSun, Sparkles } from "lucide-react"

/* ─── Testimonial Data ─── */
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "New York",
    rating: 5,
    text: "Love these! So comfortable! I wear them while doing chores and barely notice them. Finally something that works with my busy schedule.",
    product: "Arm Toning Sleeves",
  },
  {
    id: 2,
    name: "Linda T.",
    location: "Los Angeles",
    rating: 5,
    text: "If your arms changed almost overnight like mine did, you are not alone. These sleeves gave me back my confidence to wear sleeveless tops again.",
    product: "Premium Sleeves",
  },
  {
    id: 3,
    name: "Patricia H.",
    location: "Chicago",
    rating: 5,
    text: "At 58, I thought my arms were a lost cause. After wearing these daily for a month, I can see and feel the difference. No harsh workouts needed!",
    product: "Arm Toning Sleeves",
  },
  {
    id: 4,
    name: "Maria K.",
    location: "Miami",
    rating: 5,
    text: "I was skeptical at first, but the thermal technology really works. My arms feel firmer and I love that I can wear them while watching TV.",
    product: "Thermal Sleeves",
  },
  {
    id: 5,
    name: "Diane R.",
    location: "Seattle",
    rating: 5,
    text: "Finally a product that respects women over 40. No shaming, just real support. The fit is comfortable and the results speak for themselves.",
    product: "Plus Size Sleeves",
  },
  {
    id: 6,
    name: "Barbara W.",
    location: "Boston",
    rating: 5,
    text: "The 30-day guarantee gave me confidence to try. I did not need to return them! Wearing them while walking has become part of my daily routine.",
    product: "Starter Bundle",
  },
  {
    id: 7,
    name: "Carol J.",
    location: "Austin",
    rating: 5,
    text: "My daughter got me these as a gift. Best gift ever! Easy to put on, comfortable all day, and I am seeing real results at 62.",
    product: "Complete System",
  },
  {
    id: 8,
    name: "Nancy L.",
    location: "Portland",
    rating: 5,
    text: "I appreciate that Confitone focuses on gentle, non-invasive solutions. No surgery, no extreme workouts. Just comfortable support that works.",
    product: "Arm Toning Sleeves",
  },
  {
    id: 9,
    name: "Janet P.",
    location: "Denver",
    rating: 5,
    text: "The guide book that came with my bundle was so helpful. Real exercises for real women. The sleeves plus the exercises are a winning combo.",
    product: "Starter Bundle",
  },
]

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

/* ─── Testimonial Card ─── */
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0]
}) => (
  <div
    className="rounded-3xl p-6 bg-white mb-4 flex-shrink-0"
    style={{
      boxShadow:
        "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
    }}
  >
    <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-xl font-serif tracking-wide">
      &ldquo;{testimonial.text}&rdquo;
    </p>
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-foreground text-sm font-bold">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {testimonial.location}
        </p>
      </div>
      <span className="text-xs tracking-wide text-primary/70 bg-primary/5 px-2 py-1 rounded-full whitespace-nowrap">
        {testimonial.product}
      </span>
    </div>
  </div>
)

/* ─── Main Component ─── */
export function RealResults() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [missionVisible, setMissionVisible] = useState(false)
  const [resultsVisible, setResultsVisible] = useState(false)
  const [pillarsVisible, setPillarsVisible] = useState(false)
  const [testimonialsVisible, setTestimonialsVisible] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

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
    const obs4 = createObserver(setPillarsVisible)
    const obs5 = createObserver(setTestimonialsVisible, 0.1)

    if (headerRef.current) obs1.observe(headerRef.current)
    if (missionRef.current) obs2.observe(missionRef.current)
    if (resultsRef.current) obs3.observe(resultsRef.current)
    if (pillarsRef.current) obs4.observe(pillarsRef.current)
    if (testimonialsRef.current) obs5.observe(testimonialsRef.current)

    return () => {
      obs1.disconnect()
      obs2.disconnect()
      obs3.disconnect()
      obs4.disconnect()
      obs5.disconnect()
    }
  }, [])

  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

  return (
    <section id="real-results" className="bg-background">
      {/* ──────────── Part 1: Section Header ──────────── */}
      <div ref={headerRef} className="pt-24 pb-16 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Image
            src="/images/logo-confitone-white.png"
            alt="Confitone"
            width={140}
            height={35}
            className={`h-7 w-auto mx-auto mb-8 transition-all duration-700 ease-out ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          />
          <h2
            className={`font-sans text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white font-bold text-balance mb-6 ${
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
            className={`text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10 ${
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
            {/* Women's Health Press Quote */}
            <div className="rounded-3xl overflow-hidden bg-white boty-shadow p-6 flex items-center justify-center">
              <Image
                src="/images/womens-health-quote.jpg"
                alt="Women's Health Magazine: ThermoTone Technology is all you need to get rid of flabby arms"
                width={400}
                height={200}
                className="w-full max-w-xs h-auto object-contain"
              />
            </div>
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

            {/* Week 4 full body */}
            <div
              className={`rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
                resultsVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <Image
                src="/images/result-week4-fullbody.png"
                alt="Week 4 full body results - confident woman showing toned arms"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ──────────── Part 4: How It Works Pillars ──────────── */}
      <div ref={pillarsRef} className="pb-20 md:pb-24">
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
        </div>
      </div>

      {/* ──────────── Part 5: Scrolling Testimonials ──────────── */}
      <div ref={testimonialsRef} className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                testimonialsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                testimonialsVisible
                  ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                  : {}
              }
            >
              What Our Community Says
            </span>
            <h3
              className={`font-sans text-3xl md:text-5xl leading-tight text-foreground font-bold text-balance ${
                testimonialsVisible
                  ? "animate-blur-in opacity-0"
                  : "opacity-0"
              }`}
              style={
                testimonialsVisible
                  ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Trusted by Thousands
            </h3>
          </div>

          {/* Scrolling Cards */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            {/* Mobile */}
            <div className="md:hidden h-[600px]">
              <div className="relative overflow-hidden h-full">
                <div className="animate-scroll-down hover:animate-scroll-down-slow">
                  {[...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                      <TestimonialCard
                        key={`mobile-${testimonial.id}-${index}`}
                        testimonial={testimonial}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
              <div className="relative overflow-hidden">
                <div className="animate-scroll-down hover:animate-scroll-down-slow">
                  {[...column1, ...column1].map((testimonial, index) => (
                    <TestimonialCard
                      key={`col1-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="animate-scroll-up hover:animate-scroll-up-slow">
                  {[...column2, ...column2].map((testimonial, index) => (
                    <TestimonialCard
                      key={`col2-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="animate-scroll-down hover:animate-scroll-down-slow">
                  {[...column3, ...column3].map((testimonial, index) => (
                    <TestimonialCard
                      key={`col3-${testimonial.id}-${index}`}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
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

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }
        .animate-scroll-down-slow {
          animation: scroll-down 60s linear infinite;
        }
        .animate-scroll-up-slow {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
