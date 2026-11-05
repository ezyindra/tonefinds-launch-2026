# ToneFinds Website

A premium music accessories discovery website featuring carefully curated guitar accessories, ukulele gear, keyboard and piano accessories, home studio equipment, and musician gifts.

## Project Overview

ToneFinds is a beautifully designed e-commerce website that combines the elegance of a premium music editorial magazine with the functionality of a curated product discovery platform. The website aims to impress visitors immediately with its sophisticated design and provide an exceptional shopping experience for musicians seeking quality accessories.

## Technologies Used

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **Lucide React** for icons
- **Static Site Generation** with client-side filtering

## Key Features

### Homepage
- **Hero Section**: Full-width cinematic hero with beautiful photography and compelling headline
- **Featured Categories**: Interactive category cards for Guitar Accessories, Ukulele, Keyboard & Piano, Home Studio Gear, and Musician Gifts
- **Featured Finds**: Curated product showcase with hover effects and details
- **Editorial Section**: Blog-style content showcasing expertise
- **Brand Story**: Two-column layout with compelling brand narrative
- **Newsletter**: Clean email subscription with validation
- **Footer**: Complete site navigation with social links and affiliate disclosure

### Product Discovery
- **Products Page**: Product grid with advanced filtering (by category), search, and sorting
- **Product Detail Pages**: Individual product pages with specifications, features, and related products
- **Category Pages**: Dedicated pages for each product category

### Additional Pages
- **About Us**: Our story, mission, and commitment to honest recommendations
- **Contact**: Form-based contact page with frontend validation
- **Legal Pages**: Privacy Policy and Affiliate Disclosure
- **Articles**: Blog section with detailed articles and SEO optimization

## Design System

### Color Palette
- Primary Background: `#171613`
- Secondary Background: `#222019`
- Card Background: `#29261F`
- Warm Ivory: `#F5F0E6`
- Muted Gold: `#C6A46A`
- Soft Champagne: `#E4D3B1`
- Muted Text: `#AAA397`
- Border: `rgba(226, 210, 180, 0.15)`

### Typography
- Serif font for headlines and editorial content
- Sans-serif font for body text and navigation
- Strong visual hierarchy with comfortable line spacing

### Components
- Premium responsive navbar with smooth scroll effects
- Elegant hero section with cinematic photography
- Interactive category cards with hover animations
- Product cards with rich details and seamless navigation

## Setup and Installation

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the development server at http://localhost:3000

### Production Build

```bash
npm run build
```

This builds the application for production with all optimizations.

### Running Locally

```bash
npm start
```

This runs the built application in production mode.

### Type Checking

```bash
npm run type-check
```

This runs TypeScript type checking to ensure code consistency.

## Project Structure

```
ToneFinds/
├── app/
│   ├── page.tsx (Homepage)
│   ├── products/
│   │   ├── page.tsx (Products list)
│   │   └── [slug]/page.tsx (Product details)
│   ├── categories/
│   │   └── [slug]/page.tsx (Category pages)
│   ├── articles/
│   │   ├── page.tsx (Articles list)
│   │   └── [slug]/page.tsx (Article details)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── affiliate-disclosure/page.tsx
│   └── terms/page.tsx
│   ├── globals.css (Tailwind CSS)
│   ├── layout.tsx (Root layout)
│   └── .gitignore
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeaturedCategories.tsx
│   ├── FeaturedFinds.tsx
│   ├── EditorialSection.tsx
│   ├── BrandStory.tsx
│   ├── Newsletter.tsx
│   └── ProductGrid.tsx
├── data/
│   ├── products.ts (Product catalog)
│   ├── categories.ts (Category data)
│   └── articles.ts (Blog content)
├── lib/
│   └── utils.ts (Utility functions)
├── public/
│   ├── images/ (Stock photography)
│   └── logo/ (Brand assets)
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.ts
```

## Features and Best Practices

### Performance
- Local image assets for reliable loading without third-party image dependencies
- Server-side rendering for improved SEO and performance
- Static generation for product and article pages
- Lazy loading for non-critical components

### Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Contrast compliance for text readability

### SEO
- Comprehensive meta tags and descriptions
- Open Graph tags for social sharing
- Semantic HTML5 elements
- Clean, descriptive URLs
- Image alt text for accessibility

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Touch-friendly interactions
- Flexible layouts that adapt to different screen sizes
- Optimized typography and spacing

### Animations and Interactions
- Smooth page transitions with Framer Motion
- Subtle hover effects and micro-interactions
- Scroll-based animations for content reveal
- Performance-optimized animation trees

### Authentication and Security
- No user authentication required for core functionality
- Secure form handling with validation
- Protection against common web vulnerabilities

### Internationalization (i18n)
- Built-in locale support for future expansion
- Proper hreflang implementation for SEO
- Accessibility considerations for translation

## Analytics and Tracking

For analytics implementation:
- Set up Google Analytics (GA4)
- Implement Google Tag Manager for tag management
- Add conversion tracking for marketing campaigns
- Monitor Core Web Vitals for performance optimization

## Future Enhancements

Potential areas for future development:
- User account system for saved preferences
- Product review and rating system
- Advanced search with filtering options
- Shopping cart and checkout functionality
- Mobile app development
- Integration with music streaming services

## Contributing

While ToneFinds is primarily a demonstration project, contributions are welcome for:
- Bug fixes and improvements
- New component designs
- Accessibility enhancements
- Performance optimizations

Please follow the existing code style and conventions when contributing.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Special thanks to:
- The open-source community for amazing React and Next.js tools
- Custom local SVG artwork for reliable, category-specific visual assets
- All the musicians who inspire our mission
- The design community for their principles and best practices

---

*This project was created with Claude Code and follows best practices for modern web development.*