"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "New York",
    rating: 5,
    text: "Love these! So comfortable! I wear them while doing chores and barely notice them. Finally something that works with my busy schedule.",
    product: "Arm Toning Sleeves"
  },
  {
    id: 2,
    name: "Linda T.",
    location: "Los Angeles",
    rating: 5,
    text: "If your arms changed almost overnight like mine did, you are not alone. These sleeves gave me back my confidence to wear sleeveless tops again.",
    product: "Premium Sleeves"
  },
  {
    id: 3,
    name: "Patricia H.",
    location: "Chicago",
    rating: 5,
    text: "At 58, I thought my arms were a lost cause. After wearing these daily for a month, I can see and feel the difference. No harsh workouts needed!",
    product: "Arm Toning Sleeves"
  },
  {
    id: 4,
    name: "Maria K.",
    location: "Miami",
    rating: 5,
    text: "I was skeptical at first, but the thermal technology really works. My arms feel firmer and I love that I can wear them while watching TV.",
    product: "Thermal Sleeves"
  },
  {
    id: 5,
    name: "Diane R.",
    location: "Seattle",
    rating: 5,
    text: "Finally a product that respects women over 40. No shaming, just real support. The fit is comfortable and the results speak for themselves.",
    product: "Plus Size Sleeves"
  },
  {
    id: 6,
    name: "Barbara W.",
    location: "Boston",
    rating: 5,
    text: "The 30-day guarantee gave me confidence to try. I did not need to return them! Wearing them while walking has become part of my daily routine.",
    product: "Starter Bundle"
  },
  {
    id: 7,
    name: "Carol J.",
    location: "Austin",
    rating: 5,
    text: "My daughter got me these as a gift. Best gift ever! Easy to put on, comfortable all day, and I am seeing real results at 62.",
    product: "Complete System"
  },
  {
    id: 8,
    name: "Nancy L.",
    location: "Portland",
    rating: 5,
    text: "I appreciate that Confitone focuses on gentle, non-invasive solutions. No surgery, no extreme workouts. Just comfortable support that works.",
    product: "Arm Toning Sleeves"
  },
  {
    id: 9,
    name: "Janet P.",
    location: "Denver",
    rating: 5,
    text: "The guide book that came with my bundle was so helpful. Real exercises for real women. The sleeves plus the exercises are a winning combo.",
    product: "Starter Bundle"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="rounded-3xl p-6 bg-white mb-4 flex-shrink-0"
    style={{
      boxShadow: "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
    }}
  >
    {/* Stars */}
    

    {/* Quote */}
    <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-xl font-serif tracking-wide">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-foreground text-sm font-bold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
      </div>
      <span className="text-xs tracking-wide text-primary/70 bg-primary/5 px-2 py-1 rounded-full whitespace-nowrap">
        {testimonial.product}
      </span>
    </div>
  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  
  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background overflow-hidden pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            Real Women, Real Results
          </span>
          <h2 className={`font-sans text-4xl leading-tight text-foreground text-balance md:text-6xl font-bold ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            Trusted by Thousands
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          
          {/* Mobile - Single Column */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop - Three Columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            {/* Column 1 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolling Up */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolling Down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
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
