import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/ProductGrid'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ToneFinds`,
      description: product.description,
      images: [product.image],
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const productCategory = categories.find((category) => (category.productCategory || category.name) === product.category)
  const categoryHref = productCategory ? `/categories/${productCategory.slug}` : '/products'

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-text">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link
              href={categoryHref}
              className="hover:text-brand transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full text-sm font-medium text-brand">
                  {product.category}
                </div>
                <div className="rounded-2xl overflow-hidden bg-palette-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  {product.price && (
                    <span className="text-3xl font-bold text-brand">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                  {product.merchant && (
                    <span className="text-muted-text">
                      Available on {product.merchant}
                    </span>
                  )}
                </div>

                <p className="text-lg text-muted-text mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-palette-secondary border border-border rounded-full text-xs text-muted-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {product.affiliateUrl ? (
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-xl font-medium transition-colors"
                    >
                      View on {product.merchant || 'Amazon'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-palette-secondary text-muted-text rounded-xl font-medium cursor-not-allowed"
                    >
                      Details Coming Soon
                    </button>
                  )}
                  <Link
                    href="/products"
                    className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-muted-text hover:text-brand hover:border-brand rounded-xl font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Products
                  </Link>
                </div>

                {/* Affiliate Disclosure */}
                {product.affiliateUrl && (
                  <p className="mt-6 text-xs text-muted-text">
                    Some links on ToneFinds may be affiliate links. We may earn a commission from qualifying purchases at no additional cost to you.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-palette-secondary">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-serif font-medium text-foreground">
                  Related Products
                </h2>
                <Link
                  href={categoryHref}
                  className="flex items-center gap-2 text-brand hover:text-brand-light font-medium transition-colors"
                >
                  View All {product.category}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
