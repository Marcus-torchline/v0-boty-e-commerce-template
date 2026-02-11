import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Confitone",
  description:
    "Confitone terms of service. Read the terms and conditions governing your use of our website and services.",
}

const sections = [
  {
    title: "OVERVIEW",
    content: `Welcome to CONFITONE! The terms "we", "us" and "our" refer to CONFITONE. TORCHLINE GROUP LLC OWNS CONFITONE & TRADE NAME - CONFITONE operates this store and website, including all related information, content, features, tools, products and services in order to provide you, the customer, with a curated shopping experience (the "Services"). CONFITONE is powered by Shopify, which enables us to provide the Services to you.\n\nThe below terms and conditions, together with any policies referenced herein (these "Terms of Service" or "Terms") describe your rights and responsibilities when you use the Services.\n\nPlease read these Terms of Service carefully, as they include important information about your legal rights and cover areas such as warranty disclaimers and limitations of liability.\n\nBy visiting, interacting with or using our Services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms of Service or Privacy Policy, you should not use or access our Services.`,
  },
  {
    title: "SECTION 1 - ACCESS AND ACCOUNT",
    content: `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, and you have given us your consent to allow any of your minor dependents to use the Services on devices you own, purchase or manage.\n\nTo use the Services, including accessing or browsing our online stores or purchasing any of the products or services we offer, you may be asked to provide certain information, such as your email address, billing, payment, and shipping information. You represent and warrant that all the information you provide in our stores is correct, current and complete and that you have all rights necessary to provide this information.\n\nYou are solely responsible for maintaining the security of your account credentials and for all of your account activity. You may not transfer, sell, assign, or license your account to any other person.`,
  },
  {
    title: "SECTION 2 - OUR PRODUCTS",
    content: `We have made every effort to provide an accurate representation of our products and services in our online stores. However, please note that colors or product appearance may differ from how they may appear on your screen due to the type of device you use to access the store and your device settings and configuration.\n\nWe do not warrant that the appearance or quality of any products or services purchased by you will meet your expectations or be the same as depicted or rendered in our online stores.\n\nAll descriptions of products are subject to change at any time without notice at our sole discretion. We reserve the right to discontinue any product at any time and may limit the quantities of any products that we offer to any person, geographic region or jurisdiction, on a case-by-case basis.`,
  },
  {
    title: "SECTION 3 - ORDERS",
    content: `When you place an order, you are making an offer to purchase. CONFITONE reserves the right to accept or decline your order for any reason at its discretion. Your order is not accepted until CONFITONE confirms acceptance. We must receive and process your payment before your order is accepted. Please review your order carefully before submitting, as CONFITONE may be unable to accommodate cancellation requests after an order is accepted. In the event that we do not accept, make a change to, or cancel an order, we will attempt to notify you by contacting the e-mail, billing address, and/or phone number provided at the time the order was made.\n\nYour purchases are subject to return or exchange solely in accordance with our Refund Policy.\n\nYou represent and warrant that your purchases are for your own personal or household use and not for commercial resale or export.`,
  },
  {
    title: "SECTION 4 - PRICES AND BILLING",
    content: `Prices, discounts and promotions are subject to change without notice. The price charged for a product or service will be the price in effect at the time the order is placed and will be set out in your order confirmation email. Unless otherwise expressly stated, posted prices do not include taxes, shipping, handling, customs or import charges.\n\nPrices posted in our online stores may be different from prices offered in physical stores or in online or other stores operated by third parties. We may offer, from time to time, promotions on the Services that may affect pricing and that are governed by terms and conditions separate from these Terms. If there is a conflict between the terms for a promotion and these Terms, the promotion terms will govern.\n\nYou agree to provide current, complete and accurate purchase, payment and account information for all purchases made at our stores. You agree to promptly update your account and other information, including your email address, credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.\n\nYou represent and warrant that (i) the credit card information you provide is true, correct, and complete, (ii) you are duly authorized to use such credit card for the purchase, (iii) charges incurred by you will be honored by your credit card company, and (iv) you will pay charges incurred by you at the posted prices, including shipping and handling charges and all applicable taxes, if any.`,
  },
  {
    title: "SECTION 5 - SHIPPING AND DELIVERY",
    content: `We are not liable for shipping and delivery delays. All delivery times are estimates only and are not guaranteed. We are not responsible for delays caused by shipping carriers, customs processing, or events outside our control. Once we transfer products to the carrier, title and risk of loss passes to you.`,
  },
  {
    title: "SECTION 6 - INTELLECTUAL PROPERTY",
    content: `Our Services, including but not limited to all trademarks, brands, text, displays, images, graphics, product reviews, video, and audio, and the design, selection, and arrangement thereof, are owned by CONFITONE, its affiliates or licensors and are protected by U.S. and foreign patent, copyright and other intellectual property laws.\n\nThese Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Services without our prior written consent. Except as expressly provided herein, nothing in these Terms grants or shall be construed as granting a license or other rights to you under any patent, trademark, copyright, or other intellectual property of CONFITONE, Shopify or any third party. Unauthorized use of the Services may be a violation of federal and state intellectual property laws. All rights not expressly granted herein are reserved by CONFITONE.\n\nCONFITONE's names, logos, product and service names, designs, and slogans are trademarks of CONFITONE or its affiliates or licensors. You must not use such trademarks without the prior written permission of CONFITONE. Shopify's name, logo, product and service names, designs and slogans are trademarks of Shopify. All other names, logos, product and service names, designs, and slogans on the Services are the trademarks of their respective owners.`,
  },
  {
    title: "SECTION 7 - OPTIONAL TOOLS",
    content: `You may be provided with access to customer tools offered by third parties as part of the Services, which we neither monitor nor have any control nor input.\n\nYou acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.\n\nAny use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).\n\nWe may also, in the future, offer new features through the Services (including the release of new tools and resources). Such new features shall also be deemed part of the Services and are subject to these Terms of Service.`,
  },
  {
    title: "SECTION 8 - THIRD-PARTY LINKS",
    content: `The Services may contain materials and hyperlinks to websites provided or operated by third parties (including any embedded third party functionality). We are not responsible for examining or evaluating the content or accuracy of any third-party materials or websites you choose to access. If you decide to leave the Services to access these materials or third party sites, you do so at your own risk.\n\nWe are not liable for any harm or damages related to your access of any third-party websites, or your purchase or use of any products, services, resources, or content on any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products and services should be directed to the third-party.`,
  },
  {
    title: "SECTION 9 - RELATIONSHIP WITH SHOPIFY",
    content: `CONFITONE is powered by Shopify, which enables us to provide the Services to you. However, any sales and purchases you make in our Store are made directly with CONFITONE. By using the Services, you acknowledge and agree that Shopify is not responsible for any aspect of any sales between you and CONFITONE, including any injury, damage, or loss resulting from purchased products and services. You hereby expressly release Shopify and its affiliates from all claims, damages, and liabilities arising from or related to your purchases and transactions with CONFITONE.`,
  },
  {
    title: "SECTION 10 - PRIVACY POLICY",
    content: `All personal information we collect through the Services is subject to our Privacy Policy, and certain personal information may be subject to Shopify's Privacy Policy. By using the Services, you acknowledge that you have read these privacy policies.\n\nBecause the Services are hosted by Shopify, Shopify collects and processes personal information about your access to and use of the Services in order to provide and improve the Services for you. Information you submit to the Services will be transmitted to and shared with Shopify as well as third parties that may be located in other countries than where you reside, in order to provide services to you. Review our privacy policy for more details on how we, Shopify, and our partners use your personal information.`,
  },
  {
    title: "SECTION 11 - FEEDBACK",
    content: `If you submit, upload, post, email, or otherwise transmit any ideas, suggestions, feedback, reviews, proposals, plans, or other content (collectively, "Feedback"), you grant us a perpetual, worldwide, sublicensable, royalty-free license to use, reproduce, modify, publish, distribute and display such Feedback in any medium for any purpose, including for commercial use.\n\nYou also represent and warrant that: (i) you own or have all necessary rights to all Feedback; (ii) you have disclosed any compensation or incentives received in connection with your submission of Feedback; and (iii) your Feedback will comply with these Terms.\n\nWe may, but have no obligation to, monitor, edit or remove Feedback that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.`,
  },
  {
    title: "SECTION 12 - ERRORS, INACCURACIES AND OMISSIONS",
    content: `Occasionally there may be information on or in the Services that contain typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information is inaccurate at any time without prior notice (including after you have submitted your order).`,
  },
  {
    title: "SECTION 13 - PROHIBITED USES",
    content: `You may access and use the Services for lawful purposes only. You may not access or use the Services, directly or indirectly: (a) for any unlawful or malicious purpose; (b) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (c) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (d) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or harm any of our employees or any other person; (e) to transmit false or misleading information; (f) to send, knowingly receive, upload, download, use, or re-use any material that does not comply with these Terms; (g) to transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation; (h) to impersonate or attempt to impersonate any other person or entity; or (i) to engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services.\n\nIn addition, you agree not to: (a) upload or transmit viruses or any other type of malicious code; (b) reproduce, duplicate, copy, sell, resell or exploit any portion of the Services; (c) collect or track the personal information of others; (d) spam, phish, pharm, pretext, spider, crawl, or scrape; or (e) interfere with or circumvent the security features of the Services.`,
  },
  {
    title: "SECTION 14 - TERMINATION",
    content: `We may terminate this agreement or your access to the Services (or any part thereof) in our sole discretion at any time without notice, and you will remain liable for all amounts due up to and including the date of termination.\n\nThe following sections will continue to apply following any termination: Intellectual Property, Feedback, Termination, Disclaimer of Warranties, Limitation of Liability, Indemnification, Severability, Waiver; Entire Agreement, Assignment, Governing Law, Privacy Policy, and any other provisions that by their nature should survive termination.`,
  },
  {
    title: "SECTION 15 - DISCLAIMER OF WARRANTIES",
    content: `The information presented on or through the Services is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.\n\nEXCEPT AS EXPRESSLY STATED BY CONFITONE, THE SERVICES AND ALL PRODUCTS OFFERED THROUGH THE SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' FOR YOUR USE, WITHOUT ANY REPRESENTATION, WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, DURABILITY, TITLE, AND NON-INFRINGEMENT.`,
  },
  {
    title: "SECTION 16 - LIMITATION OF LIABILITY",
    content: `TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO CASE SHALL CONFITONE, OUR PARTNERS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, SERVICE PROVIDERS OR LICENSORS BE LIABLE FOR ANY INJURY, LOSS, CLAIM, OR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING, WITHOUT LIMITATION, LOST PROFITS, LOST REVENUE, LOST SAVINGS, LOSS OF DATA, REPLACEMENT COSTS, OR ANY SIMILAR DAMAGES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, ARISING FROM YOUR USE OF ANY OF THE SERVICES OR ANY PRODUCTS PROCURED USING THE SERVICES.`,
  },
  {
    title: "SECTION 17 - INDEMNIFICATION",
    content: `You agree to indemnify, defend and hold harmless CONFITONE, Shopify, and our affiliates, partners, officers, directors, employees, agents, contractors, licensors, and service providers from any losses, damages, liabilities or claims, including reasonable attorneys' fees, payable to any third party due to or arising out of (1) your breach of these Terms of Service or the documents they incorporate by reference, (2) your violation of any law or the rights of a third party, or (3) your access to and use of the Services.`,
  },
  {
    title: "SECTION 18 - SEVERABILITY",
    content: `In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.`,
  },
  {
    title: "SECTION 19 - WAIVER; ENTIRE AGREEMENT",
    content: `The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.\n\nThese Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitutes the entire agreement and understanding between you and us and governs your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us.\n\nAny ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.`,
  },
  {
    title: "SECTION 20 - ASSIGNMENT",
    content: `You may not delegate, transfer or assign this Agreement or any of your rights or obligations under these Terms without our prior written consent, and any such attempt will be null and void. We may transfer, assign, or delegate these Terms and our rights and obligations without consent or notice to you.`,
  },
  {
    title: "SECTION 21 - GOVERNING LAW",
    content: `These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the State of Colorado, USA, without regard to conflict of law principles. You and CONFITONE consent to venue and personal jurisdiction in the federal and state courts located in Jefferson County and/or Boulder County, Colorado for any dispute or claim arising out of these Terms or the Services.`,
  },
  {
    title: "SECTION 22 - CHANGES TO TERMS OF SERVICE",
    content: `You can review the most current version of the Terms of Service at any time on this page.\n\nWe reserve the right, in our sole discretion, to update, change, or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to the Services following the posting of any changes to these Terms of Service constitutes acceptance of those changes.`,
  },
  {
    title: "SECTION 23 - CONTACT INFORMATION",
    content: `Questions about the Terms of Service should be sent to us at help@confitone.com.\n\nTorchline Group LLC DBA Confitone\nhelp@confitone.com / info@torchlinegroup.com\n505 S. Snowmass Circle, Superior, CO 80027\nEmployer Identification Number: 39-2354725\nEntity ID: 20251592685`,
  },
]

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Last updated: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              {section.content.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <hr className="border-border/50 my-10" />

        <p className="text-xs text-muted-foreground leading-relaxed">
          Disclaimer: Results may vary from person to person. Confitone arm
          sleeves are designed to enhance results when used during physical
          activity as part of a healthy lifestyle. This product is not intended
          to diagnose, treat, cure, or prevent any disease. The statements on
          this page have not been evaluated by the FDA. Always consult with a
          healthcare professional before starting any new fitness program,
          especially if you have any pre-existing conditions. We are committed
          to transparency and honesty in all our marketing. Testimonials reflect
          the experience of real customers, though individual results may vary.
        </p>
      </div>
    </main>
  )
}
