import { getMedusaProducts } from "@/lib/medusa-store"
import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { Testimonials } from "@/components/boty/testimonials"
import { SimpleTech } from "@/components/boty/simple-tech"
import { CTABanner } from "@/components/boty/cta-banner"
import { ProductGrid } from "@/components/boty/product-grid"
import { OurStory } from "@/components/boty/our-story"
import { RealResults } from "@/components/boty/real-results"
import { ClosingCTA } from "@/components/boty/closing-cta"
import { Newsletter } from "@/components/boty/newsletter"
import { Footer } from "@/components/boty/footer"

export default async function HomePage() {
  const products = await getMedusaProducts()

  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />

      {/* Confitone Difference + Product Line + Stats */}
      <FeatureSection />

      {/* Trusted by Thousands (right after Customers Who Love Their Results) */}
      <Testimonials />

      {/* Simple Technology. Honest Results. */}
      <SimpleTech />

      {/* Ready to Reclaim Confidence (right after Simple Technology) */}
      <CTABanner />

      {/* Branch 1: Our Products / Shop */}
      <div id="our-products">
        <ProductGrid products={products} />
      </div>

      {/* Branch 2: Our Story */}
      <div id="our-story">
        <OurStory />
      </div>

      {/* Branch 3: Real Women, Real Results */}
      <div id="real-results">
        <RealResults />
      </div>

      {/* Your Body May Be Changing -- right before Newsletter */}
      <ClosingCTA />
      <Newsletter />
      <Footer />
    </main>
  )
}
