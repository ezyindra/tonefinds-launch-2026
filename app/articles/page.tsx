import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Expert insights and guides to help you find the perfect accessories for your musical journey.',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-palette-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                Good Gear. Better Music.
              </h1>
              <p className="text-lg text-muted-text">
                Expert insights and guides to help you find the perfect accessories for your musical journey.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col h-full"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-brand">
                      {article.category}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-xs font-medium text-brand mb-3">
                      {article.author} • {article.date}
                    </span>
                    <h3 className="text-xl font-serif font-medium text-foreground mb-3 group-hover:text-brand transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-text mb-6 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand hover:text-brand-light text-sm font-medium mt-auto">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
