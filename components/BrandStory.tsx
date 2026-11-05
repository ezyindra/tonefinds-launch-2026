'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BrandStory() {
  return (
    <section className="py-24 bg-palette-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand/10 rounded-3xl -z-10" />
            <img
              src="/images/brand/brand-story.jpg"
              alt="Musician at home studio"
              className="w-full rounded-2xl shadow-2xl shadow-brand/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-8">
              Made for People Who Love Music.
            </h2>
            <div className="space-y-6 text-lg text-muted-text leading-relaxed">
              <p>
                ToneFinds is a space for discovering useful music accessories,
                thoughtful gear and little additions that make playing, creating
                and enjoying music even better.
              </p>
              <p>
                We believe that the right accessories can transform your playing
                experience. Whether you're a beginner finding your footing or a
                seasoned musician refining your setup, we're here to help you
                discover gear that truly matters.
              </p>
              <p>
                Our mission is simple: to curate the best music accessories from
                around the world, helping musicians find exactly what they need
                without the overwhelm of endless options.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg text-sm font-medium transition-colors"
              >
                Learn More About Us
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 border border-border text-muted-text hover:text-brand hover:border-brand rounded-lg text-sm font-medium transition-colors"
              >
                Shop Our Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
