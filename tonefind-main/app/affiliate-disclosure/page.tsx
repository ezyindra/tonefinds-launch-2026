import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Affiliate disclosure for ToneFinds - Learn about our affiliate relationships and how they affect you.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-serif font-medium text-foreground mb-8">
                Affiliate Disclosure
              </h1>

              <div className="prose prose-lg prose-invert max-w-none
                prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-muted-text prose-p:leading-relaxed
                prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground">

                <p className="text-lg text-muted-text mb-8">
                  Last updated: November 2024
                </p>

                <h2>What This Means</h2>
                <p>
                  ToneFinds is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by
                  advertising and linking to Amazon.com.
                </p>

                <h2>How Affiliate Links Work</h2>
                <p>
                  When you click on certain links on our website and make a purchase, we may receive a
                  small commission at no additional cost to you. This helps support our website and
                  allows us to continue providing free content and product recommendations.
                </p>

                <h2>Our Commitment to You</h2>
                <p>
                  We only recommend products that we genuinely believe provide value to musicians. Our
                  recommendations are based on research, reputation, and usefulness—not commission rates.
                  We will never recommend a product solely because it offers a higher affiliate commission.
                </p>

                <h2>Transparency</h2>
                <p>
                  You will see affiliate links clearly indicated on our website. Product pages may display
                  "View on Amazon" or similar buttons for products with active affiliate relationships.
                  If a product shows "Details Coming Soon," it means we haven't established an affiliate
                  link for that item yet.
                </p>

                <h2>No Extra Cost to You</h2>
                <p>
                  Using our affiliate links does not increase the price you pay. You pay the same price
                  as you would by going directly to the merchant's website. The commission comes from
                  the merchant, not from you.
                </p>

                <h2>Other Affiliate Programs</h2>
                <p>
                  In addition to Amazon, we may participate in other affiliate programs with various
                  merchants. The same principles apply—we only recommend products we believe in, and
                  using our links doesn't cost you anything extra.
                </p>

                <h2>Questions?</h2>
                <p>
                  If you have any questions about our affiliate relationships or how we choose products
                  to recommend, please feel free to <a href="/contact">contact us</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
