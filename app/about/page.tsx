import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about ToneFinds and our mission to help musicians discover quality gear.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-palette-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                About ToneFinds
              </h1>
              <p className="text-lg text-muted-text">
                A space for discovering useful music accessories, thoughtful gear,
                and little additions that make playing, creating, and enjoying music even better.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/categories/about-us.jpeg"
                  alt="Guitar accessories"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-medium text-foreground mb-6">
                  Why ToneFinds Exists
                </h2>
                <div className="space-y-4 text-muted-text leading-relaxed">
                  <p>
                    ToneFinds was born from a simple frustration: finding the right music
                    accessories shouldn't require hours of research or endless tabs of
                    comparison charts.
                  </p>
                  <p>
                    We believe that the right gear—whether it's a well-designed capo, a
                    comfortable strap, or quality strings—can transform your playing
                    experience. Small details matter. They affect your sound, your comfort,
                    and ultimately, your enjoyment of music.
                  </p>
                  <p>
                    Our mission is to curate and present music accessories in a way that's
                    honest, helpful, and respectful of your time. We're not here to sell you
                    everything—just the things that genuinely make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-16 bg-palette-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-medium text-foreground mb-6">
                What We Cover
              </h2>
              <p className="text-lg text-muted-text">
                We focus on accessories across multiple categories, always with an eye toward
                quality and usefulness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Guitar Accessories',
                  description:
                    'Capos, picks, strings, straps, tuners, stands, and everything that makes your guitar sing.',
                },
                {
                  title: 'Ukulele Gear',
                  description:
                    'From beginner-friendly accessories to professional upgrades for your ukulele.',
                },
                {
                  title: 'Keyboard & Piano',
                  description:
                    'Stands, pedals, cases, and accessories for digital and acoustic keyboardists.',
                },
                {
                  title: 'Home Studio',
                  description:
                    'Audio interfaces, microphones, headphones, and recording essentials.',
                },
                {
                  title: 'Musician Gifts',
                  description:
                    'Thoughtful presents for the musicians in your life, from practical to meaningful.',
                },
                {
                  title: 'Educational Content',
                  description:
                    'Guides, tips, and insights to help you make informed decisions about your gear.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-background p-8 rounded-2xl">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-medium text-foreground mb-6 text-center">
                Our Commitment
              </h2>
              <div className="space-y-6 text-muted-text leading-relaxed">
                <p>
                  <strong className="text-foreground">Honesty first.</strong> We don't claim
                  to have tested every product on the market. What we do offer is thoughtful
                  curation based on research, reputation, and real usefulness to musicians.
                </p>
                <p>
                  <strong className="text-foreground">No hype.</strong> You won't find
                  exaggerated claims or marketing speak here. We present products clearly and
                  let you decide what works for your needs.
                </p>
                <p>
                  <strong className="text-foreground">Transparent relationships.</strong> Some
                  links on ToneFinds may be affiliate links. This means we may earn a
                  commission if you make a purchase through our links, at no additional cost
                  to you. This helps support our work, but our recommendations are based on
                  merit, not commission rates.
                </p>
                <p>
                  <strong className="text-foreground">Your journey matters.</strong> Whether
                  you're a complete beginner or a seasoned professional, we're here to help
                  you find gear that genuinely serves your musical journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-medium text-white mb-6">
              Ready to Find Your Gear?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Browse our curated collection of music accessories and discover something
              worth playing for.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white text-brand hover:bg-gray-100 rounded-xl font-medium transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
