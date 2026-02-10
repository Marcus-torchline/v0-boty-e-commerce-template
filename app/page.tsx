import { getMedusaProducts } from "@/lib/medusa-store"
import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { Testimonials } from "@/components/boty/testimonials"
import { CTABanner } from "@/components/boty/cta-banner"
import { Newsletter } from "@/components/boty/newsletter"
import { OurStory } from "@/components/boty/our-story"
import { RealResults } from "@/components/boty/real-results"
import { Footer } from "@/components/boty/footer"

export default async function HomePage() {
  const products = await getMedusaProducts()

  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <ProductGrid products={products} />
      <FeatureSection />
      <OurStory />
      <RealResults />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </main>
  )
}


