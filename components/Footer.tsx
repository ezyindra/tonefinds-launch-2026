'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'Guitar Accessories', href: '/categories/guitar-accessories' },
    { name: 'Ukulele', href: '/categories/ukulele' },
    { name: 'Keyboard & Piano', href: '/categories/keyboard' },
    { name: 'Studio Gear', href: '/categories/studio' },
    { name: 'Gift Ideas', href: '/categories/gift-ideas' },
  ],
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: '#' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-palette-primary text-muted-text pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <span className="font-serif text-2xl font-bold text-foreground">ToneFinds</span>
              <span className="text-xs text-muted-text tracking-widest uppercase block mt-1">
                Music Accessories
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Discovering gear worth playing for. Thoughtfully curated music accessories
              for every musician, every setup and every stage of the journey.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-full hover:bg-brand/10 hover:text-brand transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Categories */}
          <div>
            <h4 className="text-foreground font-medium mb-6">Explore Categories</h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-foreground font-medium mb-6">About</h4>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-foreground font-medium mb-6">Stay in Tune</h4>
            <p className="text-sm mb-4">
              Get gear discoveries and tips delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-palette-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand hover:bg-brand-dark text-white rounded-lg text-sm font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {currentYear} ToneFinds. All rights reserved.
          </p>
          <p className="text-xs text-muted-text max-w-2xl text-center md:text-right">
            Some links on ToneFinds may be affiliate links. We may earn a commission
            from qualifying purchases at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
