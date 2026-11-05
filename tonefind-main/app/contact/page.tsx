'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<string[]>([])

  const validateForm = () => {
    const newErrors: string[] = []

    if (!formData.name.trim()) {
      newErrors.push('Name is required')
    }

    if (!formData.email.trim()) {
      newErrors.push('Email is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push('Please enter a valid email address')
    }

    if (!formData.subject.trim()) {
      newErrors.push('Subject is required')
    }

    if (!formData.message.trim()) {
      newErrors.push('Message is required')
    } else if (formData.message.trim().length < 10) {
      newErrors.push('Message must be at least 10 characters')
    }

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      return
    }

    // Simulate form submission
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => {
      setStatus('idle')
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-palette-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-brand" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-text">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-brand" />
                  </div>
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-muted-text mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-lg font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.length > 0 && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-red-400 mb-2">
                            Please fix the following errors:
                          </p>
                          <ul className="text-sm text-red-300 space-y-1">
                            {errors.map((error, i) => (
                              <li key={i}>• {error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-palette-secondary border border-border rounded-xl text-foreground placeholder:text-muted-text focus:outline-none focus:border-brand transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-palette-secondary border border-border rounded-xl text-foreground placeholder:text-muted-text focus:outline-none focus:border-brand transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-palette-secondary border border-border rounded-xl text-foreground placeholder:text-muted-text focus:outline-none focus:border-brand transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-palette-secondary border border-border rounded-xl text-foreground placeholder:text-muted-text focus:outline-none focus:border-brand transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-text">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-xl font-medium transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>

                  <p className="text-xs text-muted-text text-center">
                    This is a demo form. Messages are not actually delivered unless a backend service is configured.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
