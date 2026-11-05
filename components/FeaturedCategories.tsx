'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Guitar Accessories',
    description: 'Essential gear for your six-string companion.',
    image: '/images/categories/category-guitar.jpg',
    href: '/categories/guitar-accessories',
  },
  {
    name: 'Ukulele Essentials',
    description: 'Small instrument, big sound.',
    image: '/images/categories/category-ukulele.jpg',
    href: '/categories/ukulele',
  },
  {
    name: 'Keyboard & Piano',
    description: 'Tools for the modern keyboardist.',
    image: '/images/categories/category-keyboard.jpg',
    href: '/categories/keyboard',
  },
  {
    name: 'Home Studio Gear',
    description: 'Create your best sound at home.',
    image: '/images/categories/category-studio.jpg',
    href: '/categories/studio',
  },
  {
    name: 'Musician Gifts',
    description: 'Thoughtful presents for the musician in your life.',
    image: '/images/categories/category-gifts.jpg',
    href: '/categories/gift-ideas',
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6"
          >
            Find Your Kind of Gear
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-text"
          >
            Small details. Better playing experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="block"
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-serif font-medium text-foreground mb-2 group-hover:text-brand transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-text mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-brand text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
