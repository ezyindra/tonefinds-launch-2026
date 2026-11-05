'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { articles } from '@/data/articles'

export default function EditorialSection() {
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
            Good Gear. Better Music.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-text"
          >
            Expert insights and guides to help you find the perfect accessories for your musical journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-2 text-brand hover:text-brand-light text-sm font-medium mt-auto"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border text-muted-text hover:text-brand hover:border-brand rounded-lg transition-all"
            >
              Read More Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
