import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ConversionCTA } from "@/components/ConversionCTA"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Fitness Tips & Targeted Toning Guide",
  description:
    "Expert guides on arm toning, compression wear science, and body confidence for women over 40. Practical tips to help you look and feel your best.",
  openGraph: {
    title: "Fitness Tips & Targeted Toning Guide | Confitone",
    description:
      "Expert guides on arm toning, compression wear science, and body confidence for women over 40.",
    type: "website",
  },
}

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-2xl overflow-hidden bg-background confitone-shadow confitone-transition hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover confitone-transition group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="text-xs font-medium tracking-wide bg-primary text-primary-foreground px-3 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{post.readTime}</span>
          </div>

          <h2 className="font-sans text-lg font-bold text-foreground mb-3 leading-snug text-pretty group-hover:text-primary confitone-transition">
            {post.title}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {post.hookDescription}
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 confitone-transition">
            Read More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Confitone Blog
          </span>
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Fitness Tips & Targeted{" "}
            <span className="text-primary">Toning Guide</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert advice on arm toning, compression science, and building
            lasting body confidence. Real tips for real women, designed to help
            you feel your best at any age.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <ConversionCTA
        variant="banner"
        headline="Ready to Feel Confident Again?"
        description="Thousands of women over 40 have discovered the gentle way to firmer, more toned arms. Your transformation starts today."
        buttonText="Shop Confitone Now"
        href="/shop"
      />

      <Footer />
    </main>
  )
}
