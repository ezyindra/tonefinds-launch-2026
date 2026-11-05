import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedFinds from '@/components/FeaturedFinds'
import EditorialSection from '@/components/EditorialSection'
import BrandStory from '@/components/BrandStory'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <FeaturedFinds />
        <EditorialSection />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
