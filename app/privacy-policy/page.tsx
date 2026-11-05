import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ToneFinds - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-serif font-medium text-foreground mb-8">
                Privacy Policy
              </h1>

              <div className="prose prose-lg prose-invert max-w-none
                prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-muted-text prose-p:leading-relaxed
                prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-ul:text-muted-text">

                <p className="text-lg text-muted-text mb-8">
                  Last updated: November 2024
                </p>

                <h2>Introduction</h2>
                <p>
                  ToneFinds ("we," "our," or "us") respects your privacy and is committed to protecting
                  your personal information. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website.
                </p>

                <h2>Information We Collect</h2>
                <p>We may collect information about you in a variety of ways:</p>
                <ul>
                  <li>
                    <strong>Personal Data:</strong> When you subscribe to our newsletter or contact us,
                    we may collect personally identifiable information such as your name and email address.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We may automatically collect certain information about
                    your device and usage patterns, including your IP address, browser type, pages visited,
                    and time spent on pages.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use cookies and similar tracking technologies to track
                    activity on our website and store certain information.
                  </li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect for various purposes:</p>
                <ul>
                  <li>To provide and maintain our website</li>
                  <li>To send you newsletters and marketing communications (with your consent)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze usage patterns and improve our website</li>
                  <li>To detect and prevent fraud or technical issues</li>
                </ul>

                <h2>Third-Party Services</h2>
                <p>
                  Our website may contain links to third-party websites, including Amazon.com and other
                  merchants. We are not responsible for the privacy practices of these external sites.
                  When you click on affiliate links, those third parties may collect information
                  according to their own privacy policies.
                </p>

                <h2>Affiliate Links</h2>
                <p>
                  ToneFinds participates in affiliate marketing programs. When you click on affiliate
                  links and make purchases, we may earn commissions. This does not affect the price
                  you pay, and we only recommend products we believe provide value to our readers.
                </p>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect
                  your personal information. However, no method of transmission over the Internet
                  or electronic storage is 100% secure.
                </p>

                <h2>Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>

                <h2>Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly
                  collect personal information from children under 13.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through our
                  <a href="/contact">contact page</a>.
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
