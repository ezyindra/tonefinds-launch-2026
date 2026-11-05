import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ToneFinds`,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

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
            <Link href="/articles" className="hover:text-brand transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-12 bg-palette-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-brand/10 border border-brand/30 rounded-full text-xs font-medium text-brand">
                  {article.category}
                </span>
                <span className="text-sm text-muted-text">
                  {article.author} • {article.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-muted-text">
                {article.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl overflow-hidden mb-12">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              <article
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-text prose-p:leading-relaxed
                  prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Back Link */}
              <div className="mt-12 pt-8 border-t border-border">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-palette-secondary">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-serif font-medium text-foreground">
                  Related Articles
                </h2>
                <Link
                  href="/articles"
                  className="flex items-center gap-2 text-brand hover:text-brand-light font-medium transition-colors"
                >
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/articles/${related.slug}`}
                    className="group"
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-brand transition-colors">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
