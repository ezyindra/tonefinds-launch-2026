'use client'

import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'

export default function FeaturedFinds() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-24 bg-palette-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4"
            >
              Worth a Closer Look
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-text"
            >
              Curated selections for musicians who appreciate quality.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-light transition-colors font-medium"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-brand">
                  {product.category}
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link
                    href={`/products/${product.slug}`}
                    className="w-full py-3 bg-brand hover:bg-brand-dark text-white rounded-lg text-center font-medium transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-serif font-medium text-foreground mb-2 group-hover:text-brand transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-text line-clamp-2 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  {product.price && (
                    <span className="text-lg font-medium text-foreground">
                      ${product.price}
                    </span>
                  )}
                  {product.price === undefined && (
                    <span className="text-sm text-muted-text">Details Coming Soon</span>
                  )}
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-brand hover:text-brand-light text-sm font-medium flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
