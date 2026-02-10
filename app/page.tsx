import { getMedusaProducts } from "@/lib/medusa-store"
import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { OurStory } from "@/components/boty/our-story"
import { RealResults } from "@/components/boty/real-results"
import { CTABanner } from "@/components/boty/cta-banner"
import { Newsletter } from "@/components/boty/newsletter"
import { Footer } from "@/components/boty/footer"

export default async function HomePage() {
  const products = await getMedusaProducts()

  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />

      {/* Branch 1: Our Products */}
      <div id="our-products">
        <FeatureSection />
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

      <CTABanner />
      <Newsletter />
      <Footer />
    </main>
  )
}
