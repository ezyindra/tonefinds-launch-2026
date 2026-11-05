'use client'

import Link from 'next/link'
import { Menu, X, Search, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Guitar', href: '/categories/guitar-accessories' },
  { name: 'Ukulele', href: '/categories/ukulele' },
  { name: 'Keyboard', href: '/categories/keyboard' },
  { name: 'Studio Gear', href: '/categories/studio' },
  { name: 'Gift Ideas', href: '/categories/gift-ideas' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <span className="font-serif text-xl font-bold">TF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground tracking-tight">
                  ToneFinds
                </span>
                <span className="text-xs text-muted-text tracking-widest uppercase">
                  Music Accessories
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-text hover:text-brand transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-brand/10 text-muted-text hover:text-brand transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/products"
                className="px-5 py-2 text-sm font-medium text-brand hover:bg-brand hover:text-white rounded-lg transition-all duration-300 border border-brand hover:border-transparent"
              >
                Explore
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-muted-text hover:text-brand py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-4">
                <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand/10 text-muted-text hover:text-brand">
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Search</span>
                </button>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-brand hover:bg-brand hover:text-white rounded-lg transition-colors"
                >
                  Explore Accessories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
