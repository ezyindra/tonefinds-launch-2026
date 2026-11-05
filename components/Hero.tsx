
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero.jpg"
          alt="Acoustic guitar with accessories"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#D6B477]/50 text-[#F2D5A0] text-sm font-medium mb-8 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#E7BD79]" />
            <span>THE MUSICIAN'S GEAR EDIT</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
          >
            Find Your Sound.
            <br />
            <span className="text-[#F2D5A0]">
              Find Your Gear.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Thoughtfully discovered music accessories for every musician,
            every setup and every stage of the journey.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-[#C49A59] hover:bg-[#AD8045] text-[#17130E] rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex items-center justify-center gap-2"
            >
              Explore Accessories
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/categories/guitar-accessories"
              className="w-full sm:w-auto px-8 py-4 bg-black/35 backdrop-blur-sm border border-white/60 text-white hover:bg-white hover:text-[#17130E] rounded-xl text-lg font-medium transition-all duration-300"
            >
              Discover Guitar Gear
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#17130E] to-transparent pointer-events-none" />

    </section>
  )
}
