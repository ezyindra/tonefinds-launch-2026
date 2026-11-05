import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for using the ToneFinds website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-serif font-medium text-foreground mb-8">
                Terms and Conditions
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

                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing and using ToneFinds, you accept and agree to be bound by these Terms
                  and Conditions. If you do not agree to these terms, please do not use our website.
                </p>

                <h2>Use of Website</h2>
                <p>
                  You agree to use this website only for lawful purposes and in a way that does not
                  infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of
                  the website.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  The content on this website, including text, graphics, logos, images, and software,
                  is the property of ToneFinds or its content suppliers and is protected by copyright
                  laws. You may not reproduce, modify, or distribute any content without explicit
                  permission.
                </p>

                <h2>Product Information</h2>
                <p>
                  We strive to provide accurate product information, but we cannot guarantee that all
                  descriptions, images, or prices are error-free. Product availability and pricing
                  are subject to change without notice. For the most current information, please check
                  the merchant's website directly.
                </p>

                <h2>Affiliate Links</h2>
                <p>
                  This website contains affiliate links. When you make a purchase through these links,
                  we may earn a commission at no additional cost to you. Please see our
                  <a href="/affiliate-disclosure">Affiliate Disclosure</a> for more information.
                </p>

                <h2>Disclaimer of Warranties</h2>
                <p>
                  This website is provided "as is" without any warranties, expressed or implied. We do
                  not warrant that the website will be uninterrupted, error-free, or free of viruses
                  or other harmful components.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  ToneFinds shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising from your use of this website or any products purchased
                  through links on this website.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our website contains links to third-party websites. We are not responsible for the
                  content, accuracy, or opinions expressed on these websites. Visiting these links
                  is at your own risk.
                </p>

                <h2>Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will
                  be effective immediately upon posting. Your continued use of the website constitutes
                  acceptance of the modified terms.
                </p>

                <h2>Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by and construed in accordance with applicable
                  laws. Any disputes arising from these terms shall be resolved in the appropriate courts.
                </p>

                <h2>Contact</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please
                  <a href="/contact">contact us</a>.
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
