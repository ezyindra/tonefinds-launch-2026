'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categoryFilters = [
  { value: 'all', label: 'All Categories' },
  { value: 'Guitar Accessories', label: 'Guitar Accessories' },
  { value: 'Ukulele', label: 'Ukulele' },
  { value: 'Keyboard', label: 'Keyboard & Piano' },
  { value: 'Studio Gear', label: 'Studio Gear' },
  { value: 'Musician Gifts', label: 'Musician Gifts' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.price || 0) - (b.price || 0))
        break
      case 'price-high':
        result.sort((a, b) => (b.price || 0) - (a.price || 0))
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-16 bg-palette-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
              Discover Your Perfect Gear
            </h1>
            <p className="text-lg text-muted-text mb-8">
              Browse our curated collection of premium music accessories
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-text focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-6 border-b border-border bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-4 h-4 text-muted-text" />
              <span className="text-sm text-muted-text mr-2">Filter:</span>
              {categoryFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedCategory(filter.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === filter.value
                      ? 'bg-brand text-white'
                      : 'bg-palette-secondary text-muted-text hover:text-brand'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-text">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 bg-palette-secondary border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-brand cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-palette-secondary flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-text" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                No products found
              </h3>
              <p className="text-muted-text mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-text">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link href={`/products/${product.slug}`}>
                      <div className="relative rounded-2xl overflow-hidden mb-4 bg-palette-secondary">
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-brand">
                          {product.category}
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="px-1">
                        <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-brand transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-text line-clamp-2 mb-3">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          {product.price ? (
                            <span className="text-lg font-medium text-brand">
                              ${product.price.toFixed(2)}
                            </span>
                          ) : (
                            <span className="text-sm text-muted-text">Details Coming Soon</span>
                          )}
                          <span className="text-brand group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
