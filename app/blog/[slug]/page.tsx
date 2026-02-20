import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft, Check, Star, Clock, ChevronRight } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ConversionCTA } from "@/components/ConversionCTA"
import { blogPosts, getBlogPost } from "@/data/blog-posts"
import { StickyMobileCTA } from "./sticky-cta"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="pt-32 pb-0 bg-card">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground confitone-transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-foreground confitone-transition">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero / Header */}
      <section className="pt-8 pb-12 bg-card">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium tracking-wide bg-primary text-primary-foreground px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs">{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-sans text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8 text-balance">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden confitone-shadow">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Hook Paragraph */}
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-serif mb-12">
            {post.hookParagraph}
          </p>

          {/* Educational Sections */}
          {post.educationalSections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
                {section.heading}
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          {/* Problem Agitation */}
          <div className="my-14 py-10 px-8 md:px-10 bg-card rounded-2xl border border-border/50">
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
              {post.problemAgitation.heading}
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {post.problemAgitation.content}
            </p>
          </div>

          {/* Product Transition */}
          <p className="text-xl text-primary font-medium leading-relaxed my-10">
            {post.productTransition}
          </p>

          {/* Product Highlight */}
          <div className="my-14 rounded-2xl overflow-hidden bg-card border border-border/50">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-2/5 relative min-h-[300px] bg-secondary">
                <Image
                  src={post.productHighlight.image}
                  alt={post.productHighlight.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="md:w-3/5 p-8 md:p-10">
                <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {post.productHighlight.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.productHighlight.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {post.productHighlight.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm tracking-wide font-semibold confitone-transition hover:bg-accent confitone-shadow"
                >
                  Shop Confitone Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 confitone-transition" />
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="my-14">
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              What Real Women Are Saying
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 bg-card border border-border/50"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between gap-2">
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
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Strong CTA Section */}
      <ConversionCTA
        variant="banner"
        headline="Upgrade Your Workout Today"
        description="Join 23,000+ women who reclaimed their sleeveless confidence. Your transformation starts with a single step."
        buttonText="Shop Confitone Now"
        href="/shop"
      />

      {/* Related Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Keep Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="rounded-2xl overflow-hidden bg-background confitone-shadow confitone-transition hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover confitone-transition group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-sans text-base font-bold text-foreground leading-snug group-hover:text-primary confitone-transition text-pretty">
                        {relatedPost.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-3 group-hover:gap-3 confitone-transition">
                        Read More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground confitone-transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </main>
  )
}
