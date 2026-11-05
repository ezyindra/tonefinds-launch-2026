'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Product } from '@/data/products'

interface Props {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group"
        >
          <Link href={`/products/${product.slug}`}>
            <div className="relative rounded-2xl overflow-hidden mb-4 bg-card-background">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-brand">
                {product.category}
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-1">
              <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-brand transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                {product.price ? (
                  <span className="text-lg font-medium text-brand">
                    ${product.price.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-sm text-muted-text">Details Coming Soon</span>
                )}
                <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
