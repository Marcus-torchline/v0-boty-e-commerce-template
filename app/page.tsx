import dynamic from "next/dynamic"
import { getMedusaProducts } from "@/lib/medusa-store"
import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"

// Dynamically import below-fold components to reduce initial JS bundle
// This is critical for Facebook in-app browser which has limited memory/CPU
const FeatureSection = dynamic(
  () => import("@/components/boty/feature-section").then(mod => ({ default: mod.FeatureSection })),
  { ssr: true }
)
const Testimonials = dynamic(
  () => import("@/components/boty/testimonials").then(mod => ({ default: mod.Testimonials })),
  { ssr: true }
)
const SimpleTech = dynamic(
  () => import("@/components/boty/simple-tech").then(mod => ({ default: mod.SimpleTech })),
  { ssr: true }
)
const CTABanner = dynamic(
  () => import("@/components/boty/cta-banner").then(mod => ({ default: mod.CTABanner })),
  { ssr: true }
)
const ProductGrid = dynamic(
  () => import("@/components/boty/product-grid").then(mod => ({ default: mod.ProductGrid })),
  { ssr: true }
)
const OurStory = dynamic(
  () => import("@/components/boty/our-story").then(mod => ({ default: mod.OurStory })),
  { ssr: true }
)
const RealResults = dynamic(
  () => import("@/components/boty/real-results").then(mod => ({ default: mod.RealResults })),
  { ssr: true }
)
const ClosingCTA = dynamic(
  () => import("@/components/boty/closing-cta").then(mod => ({ default: mod.ClosingCTA })),
  { ssr: true }
)
const Newsletter = dynamic(
  () => import("@/components/boty/newsletter").then(mod => ({ default: mod.Newsletter })),
  { ssr: true }
)
const Footer = dynamic(
  () => import("@/components/boty/footer").then(mod => ({ default: mod.Footer })),
  { ssr: true }
)

export default async function HomePage() {
  const products = await getMedusaProducts()

  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />

      {/* Below-fold sections use content-visibility: auto for faster initial paint */}
      <div className="cv-auto">
        <FeatureSection />
      </div>

      <div className="cv-auto">
        <Testimonials />
      </div>

      <div className="cv-auto">
        <SimpleTech />
      </div>

      <div className="cv-auto">
        <CTABanner />
      </div>

      <div id="our-products" className="cv-auto">
        <ProductGrid products={products} />
      </div>

      <div id="our-story" className="cv-auto">
        <OurStory />
      </div>

      <div id="real-results" className="cv-auto">
        <RealResults />
      </div>

      <div className="cv-auto">
        <ClosingCTA />
      </div>
      <div className="cv-auto">
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
