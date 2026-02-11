import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Master Policy - Confitone",
  description:
    "Confitone master policy. Our guarantee, refund, replacement, and messaging policies.",
}

export default function MasterPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground boty-transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/images/logo-ct-green.png"
              alt="Confitone"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Last updated: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Confitone Customer Excellence: Master Policy (2026)
            </h2>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">
              1. The &ldquo;Perfect Fit&rdquo; &amp; Replacement Policy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Instead of traditional returns, we prioritize speed and customer
              convenience.
            </p>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-foreground">Size Exchanges:</strong> If
                the product does not fit, the customer keeps the original (to
                gift or donate) and we send a new size 100% free. (Limited to
                one exchange per product type per customer).
              </li>
              <li>
                <strong className="text-foreground">Damaged/Defective:</strong>{" "}
                Customer must provide a photo/video of the defect. Once
                verified, a replacement is sent immediately. No return of the
                damaged item is required.
              </li>
              <li>
                <strong className="text-foreground">Lost Packages:</strong>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li>
                    <em>In-Transit:</em> If no tracking movement for 15+
                    business days, we reship for free.
                  </li>
                  <li>
                    <em>Delivered:</em> If marked &ldquo;Delivered&rdquo; but
                    missing, we encourage checking with neighbors; Confitone is
                    not liable for &ldquo;porch piracy&rdquo; but may offer a
                    discount for a replacement at our discretion.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">
              2. The 30-Day Transformation Guarantee
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We sell tools for progress, not &ldquo;magic pills.&rdquo;
            </p>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-foreground">The Trial:</strong>{" "}
                Customers are encouraged to use the product for 60 days to see
                the full thermogenic and compression benefits.
              </li>
              <li>
                <strong className="text-foreground">Transparency:</strong> We
                explicitly state that results vary based on individual activity,
                diet, and habits.
              </li>
              <li>
                <strong className="text-foreground">Refund Request:</strong> If
                a customer is unsatisfied after 60 days of consistent use, they
                are eligible for a full refund or a personalized fitness
                consultation.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">
              3. Standard Refund SLA
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Clear timelines to reduce customer anxiety.
            </p>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-foreground">Approval:</strong> Once a
                refund is authorized, it is processed within 24 hours.
              </li>
              <li>
                <strong className="text-foreground">Bank Timeline:</strong>{" "}
                Funds will appear in the customer{"'"}s original payment method
                within 3-10 business days.
              </li>
              <li>
                <strong className="text-foreground">Exclusions:</strong>{" "}
                Original shipping fees are non-refundable.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">
              4. Legal Disclaimers
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Protecting the brand from liability.
            </p>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-foreground">Medical:</strong> Products
                are not medical devices. Users with circulatory issues should
                consult a doctor.
              </li>
              <li>
                <strong className="text-foreground">Results:</strong>{" "}
                Testimonials are individual experiences and do not guarantee
                identical outcomes for all users.
              </li>
            </ul>
          </section>

          <hr className="border-border/50 my-10" />

          {/* SMS / WhatsApp Policy */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              SMS/WhatsApp Messaging Policy
            </h2>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Mobile Messaging Terms and Conditions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By subscribing to Confitone mobile alerts, you agree to receive
              recurring automated marketing messages and shopping cart reminders
              at the phone number provided at the time of opt-in.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  Explicit Consent
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  You must provide clear consent to receive these messages. This
                  is done via our website signup forms or by texting a specific
                  keyword to our designated number.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Opt-Out</h4>
                <p className="text-muted-foreground leading-relaxed">
                  You can cancel the SMS/WhatsApp service at any time. Just text
                  &ldquo;STOP&rdquo; to the short code or reply to our message.
                  After you send the message &ldquo;STOP&rdquo; to us, we will
                  send you a reply to confirm that you have been unsubscribed.
                  After this, you will no longer receive messages from us.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Help</h4>
                <p className="text-muted-foreground leading-relaxed">
                  If you are experiencing issues with the messaging program you
                  can reply with the keyword &ldquo;HELP&rdquo; for more
                  assistance.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Frequency</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Message frequency varies based on your interactions with our
                  site.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Costs</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As always, message and data rates may apply for any messages
                  sent to you from us and to us from you. If you have any
                  questions about your text plan or data plan, it is best to
                  contact your wireless provider.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Privacy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We value your privacy. We will not share, sell, or lease your
                  phone number or opt-in data with third parties or affiliates
                  for marketing/promotional purposes.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-border/50 my-10" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <div className="mt-4 text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">Confitone</p>
              <p>Torchline Group LLC DBA Confitone</p>
              <p>505 S. Snowmass Circle</p>
              <p>Superior, CO 80027, USA</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:help@confitone.com"
                  className="text-primary hover:underline"
                >
                  help@confitone.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
