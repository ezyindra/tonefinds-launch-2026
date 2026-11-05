export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCategory?: string
}

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Guitar Accessories',
    slug: 'guitar-accessories',
    description: 'Essential gear for your six-string companion.',
    image: '/images/categories/guitar-accessories-1.jpg',
  },
  {
    id: 'c2',
    name: 'Ukulele',
    slug: 'ukulele',
    description: 'Small instrument, big sound.',
    image: '/images/categories/ukulele-1.jpg',
  },
  {
    id: 'c3',
    name: 'Keyboard & Piano',
    slug: 'keyboard',
    productCategory: 'Keyboard',
    description: 'Tools for the modern keyboardist.',
    image: '/images/categories/keyboard-1.jpg',
  },
  {
    id: 'c4',
    name: 'Studio Gear',
    slug: 'studio',
    description: 'Create your best sound at home.',
    image: '/images/categories/music-studio-gear-1.jpg',
  },
  {
    id: 'c5',
    name: 'Musician Gifts',
    slug: 'gift-ideas',
    description: 'Thoughtful presents for the musician in your life.',
    image: '/images/categories/musician-gift-1.jpg',
  },
]
