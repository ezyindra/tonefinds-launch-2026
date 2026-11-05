'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }

    if (!email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    // Simulate API call
    setStatus('success')
    setMessage('Thanks for subscribing! Stay tuned for our next update.')
    setEmail('')

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 3000)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand">
        <div className="absolute inset-0 bg-gradient-to-b from-brand to-brand-dark" />
        <img
          src="/images/hero/hero.jpg"
          alt="Music accessories background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 to-brand/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Bell className="w-12 h-12 mx-auto text-white/80 mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
              Stay in Tune.
            </h2>
            <p className="text-lg text-white/80">
              Get thoughtful gear discoveries, useful tips and fresh finds
              delivered to your inbox.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setStatus('idle')
                }}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-xl text-brand placeholder:text-brand/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-white text-brand hover:bg-gray-100 rounded-xl font-medium transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </motion.form>

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-white/80 text-sm"
            >
              {message}
            </motion.p>
          )}

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg"
            >
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white font-medium">{message}</span>
            </motion.div>
          )}

          <p className="mt-6 text-sm text-white/60">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
