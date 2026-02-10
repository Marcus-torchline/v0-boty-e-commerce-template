"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart, Users, Award, Sparkles } from "lucide-react"

const milestones = [
  {
    icon: Heart,
    stat: "12,000+",
    label: "Customers in the First 2 Months",
  },
  {
    icon: Award,
    stat: "96%",
    label: "Reported Real, Visible Results",
  },
  {
    icon: Users,
    stat: "30-45",
    label: "Days to See a Difference",
  },
  {
    icon: Sparkles,
    stat: "#1",
    label: "In Sauna & ThermoTone Apparel",
  },
]

export function OurStory() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [storyVisible, setStoryVisible] = useState(false)
  const [milestonesVisible, setMilestonesVisible] = useState(false)
  const [visionVisible, setVisionVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const milestonesRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createObserver = (
      setter: (val: boolean) => void,
      threshold = 0.1
    ) =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true)
        },
        { threshold }
      )

    const heroObs = createObserver(setHeroVisible)
    const storyObs = createObserver(setStoryVisible)
    const milestonesObs = createObserver(setMilestonesVisible)
    const visionObs = createObserver(setVisionVisible)

    if (heroRef.current) heroObs.observe(heroRef.current)
    if (storyRef.current) storyObs.observe(storyRef.current)
    if (milestonesRef.current) milestonesObs.observe(milestonesRef.current)
    if (visionRef.current) visionObs.observe(visionRef.current)

    return () => {
      heroObs.disconnect()
      storyObs.disconnect()
      milestonesObs.disconnect()
      visionObs.disconnect()
    }
  }, [])

  return (
    <section id="our-story" className="bg-background">
      {/* ── Hero Banner ── */}
      <div
        ref={heroRef}
        className="relative py-32 md:py-40 bg-gradient-to-br from-[#E8F5EE] via-[#5BB98C]/20 to-[#3DA870]/30 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#5BB98C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#3DA870]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Image
            src="/images/logo-confitone-green.png"
            alt="Confitone"
            width={140}
            height={35}
            className={`h-7 w-auto mx-auto mb-8 ${
              heroVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              heroVisible
                ? { animationDelay: "0.1s", animationFillMode: "forwards" }
                : {}
            }
          />
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
              heroVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              heroVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            Our Story
          </span>
          <h2
            className={`font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground font-bold text-balance mb-6 ${
              heroVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              heroVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Born From a Personal{" "}
            <span className="text-primary">Struggle.</span>{" "}
            Built Into an Industry Leader.
          </h2>
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto ${
              heroVisible
                ? "animate-blur-in opacity-0"
                : "opacity-0"
            }`}
            style={
              heroVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            The story of Confitone is the story of one woman who refused to
            accept "there's nothing you can do" as an answer.
          </p>
        </div>
      </div>

      {/* ── The Origin Story ── */}
      <div className="py-24">
        <div
          ref={storyRef}
          className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Founder Image */}
          <div
            className={`relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow transition-all duration-700 ease-out ${
              storyVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="/images/karen-taylor-founder.png"
              alt="Karen Taylor, founder of Confitone"
              fill
              className="object-cover"
            />
            {/* Name card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
              <p className="text-foreground font-bold text-lg">Karen Taylor</p>
              <p className="text-sm text-primary font-medium">
                Founder of Confitone
              </p>
            </div>
          </div>

          {/* Narrative */}
          <div
            className={`transition-all duration-700 ease-out ${
              storyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              The Beginning
            </span>
            <h3 className="font-sans text-3xl md:text-4xl leading-tight text-foreground font-bold mb-6 text-balance">
              It Started With a Personal Struggle
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                After a routine surgery, Karen Taylor noticed something that
                caught her off guard: her arms had changed almost overnight.
                The firmness she had taken for granted was gone, replaced by
                a sagging looseness that no amount of exercise seemed to fix.
                She tried everything&mdash;creams, targeted workouts,
                expensive spa treatments&mdash;but nothing moved the needle.
              </p>
              <p>
                Doctors offered one solution: cosmetic surgery, priced in the
                thousands. For Karen, that was never the answer. She believed
                there had to be a gentler path&mdash;one that worked{" "}
                <em>with</em> the body instead of cutting into it.
              </p>
              <p>
                So she started digging. She studied thermo-technology
                research, talked to textile engineers, and spent months
                prototyping materials in her kitchen. The question driving
                her was simple:{" "}
                <span className="text-foreground font-medium">
                  &ldquo;What if the right combination of compression and
                  gentle heat could do what surgery promises&mdash;without a
                  single incision?&rdquo;
                </span>
              </p>
              <p>
                After countless failed prototypes and late nights, the
                original Confitone material was born&mdash;a proprietary
                thermo-compression textile designed to support natural
                circulation, promote gentle warmth, and encourage visible
                toning over time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Milestones / Stats ── */}
      <div ref={milestonesRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={m.label}
                className={`rounded-3xl bg-background p-6 md:p-8 text-center boty-shadow transition-all duration-700 ease-out ${
                  milestonesVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {m.stat}
                </p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Remarkable Success + Vision ── */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Success Story */}
          <div className="max-w-3xl mx-auto mb-24">
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block text-center">
              Remarkable Early Success
            </span>
            <h3 className="font-sans text-3xl md:text-4xl leading-tight text-foreground font-bold mb-8 text-center text-balance">
              The Results Spoke for Themselves
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Karen never planned to start a company. She made the first
                Confitone sleeves for herself. But when friends noticed the
                change in her arms&mdash;and then tried the sleeves
                themselves&mdash;word spread fast. A small batch turned into a
                waitlist. The waitlist turned into a phenomenon.
              </p>
              <p>
                Within the first two months of making the product available,
                over{" "}
                <span className="text-foreground font-medium">
                  12,000 customers
                </span>{" "}
                placed orders. Of those, an extraordinary{" "}
                <span className="text-foreground font-medium">
                  11,500 reported visible results within 30 to 45 days
                </span>
                . No advertising blitz could manufacture those numbers. It
                was real people telling other real people that something
                finally worked.
              </p>
              <p>
                That grassroots momentum is what transformed Confitone from a
                kitchen-table experiment into the{" "}
                <span className="text-foreground font-medium">
                  largest name in the Sauna and ThermoTone apparel industry
                </span>
                . Not through hype or hollow promises, but through a product
                that delivered what it said it would.
              </p>
            </div>
          </div>

          {/* Continuing the Vision */}
          <div
            ref={visionRef}
            className={`rounded-3xl p-10 md:p-16 relative overflow-hidden transition-all duration-700 ease-out bg-gradient-to-br from-[#5BB98C] to-[#3DA870] ${
              visionVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {/* Background brand mark */}
            <div className="absolute top-8 right-8 md:right-12 opacity-10">
              <Image
                src="/images/logo-ct-white.png"
                alt=""
                width={200}
                height={200}
                className="w-32 md:w-48 h-auto"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <Image
                src="/images/logo-confitone-white.png"
                alt="Confitone"
                width={120}
                height={30}
                className="h-6 w-auto mb-6"
              />
              <span className="text-sm tracking-[0.3em] uppercase text-white/70 mb-4 block">
                Where We Are Today
              </span>
              <h3 className="text-3xl md:text-4xl text-white font-bold mb-6 text-balance">
                Karen's Vision Lives in Everything We Do
              </h3>
              <div className="space-y-5 text-white/85 leading-relaxed">
                <p>
                  Karen remains closely involved in the brand she built,
                  ensuring that every decision stays true to the principle
                  that started it all: women deserve a gentle, effective,
                  non-invasive path to feeling confident in their own skin.
                </p>
                <p>
                  Under new management, Confitone has undergone a complete
                  evolution. We have enhanced the proprietary Confitone
                  material, invested in world-class customer service, and
                  implemented state-of-the-art tracking so you always know
                  exactly where your order is.
                </p>
                <p>
                  But some things will never change. Every product is still
                  crafted with precision using our trademark thermo-compression
                  textile. Every customer interaction still carries the warmth
                  and care that Karen brought to the very first pair of
                  sleeves she made in her kitchen. And our commitment to
                  quality and real results has never been stronger.
                </p>
              </div>
              <p className="mt-8 text-white font-bold text-lg">
                This is Confitone.{" "}
                <span className="text-white/80 font-normal">
                  Real science. Real care. Real results.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
