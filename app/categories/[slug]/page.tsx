import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/ProductGrid'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find(
    (c) => c.slug === params.slug || c.name.toLowerCase() === params.slug.replace(/-/g, ' ')
  )

  if (!category) {
    return { title: 'Category Not Found' }
  }

  return {
    title: category.name,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find(
    (c) => c.slug === params.slug || c.name.toLowerCase() === params.slug.replace(/-/g, ' ')
  )

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === (category.productCategory || category.name).toLowerCase()
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-palette-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-text mb-4">
                  <Link href="/" className="hover:text-brand transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/products" className="hover:text-brand transition-colors">
                    Products
                  </Link>
                  <span>/</span>
                  <span className="text-foreground">{category.name}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                  {category.name}
                </h1>
                <p className="text-lg text-muted-text mb-8">
                  {category.description}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-text hover:text-brand hover:border-brand rounded-lg transition-colors"
                >
                  View All Categories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {categoryProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                  No products in this category yet
                </h3>
                <p className="text-muted-text mb-6">
                  Check back soon for new additions to our {category.name} collection.
                </p>
                <Link
                  href="/products"
                  className="px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <p className="text-muted-text">
                    Showing {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <ProductGrid products={categoryProducts} />
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
