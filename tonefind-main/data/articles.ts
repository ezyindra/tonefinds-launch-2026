export interface Article {
  id: string
  title: string
  slug: string
  category: string
  author: string
  date: string
  image: string
  excerpt: string
  content: string
}

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Small Guitar Accessories Every Beginner Should Know',
    slug: 'small-guitar-accessories-every-beginner-should-know',
    category: 'Beginner Tips',
    author: 'Sarah Mitchell',
    date: 'November 1, 2024',
    image: '/images/articles/beginner-accessories.jpg',
    excerpt:
      'From capos to tuners, here are the essential accessories that will make your guitar journey smoother and more enjoyable.',
    content: `
      <p>Starting your guitar journey is exciting, but it can quickly become frustrating without the right accessories. While the guitar itself gets all the attention, these small tools make a big difference in your playing experience.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Essential Beginner Accessories</h2>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">1. Guitar Tuner</h3>
      <p>Nothing sounds worse than an out-of-tune guitar. A clip-on tuner is affordable, portable, and essential for developing your ear. Start with a basic chromatic tuner and you'll never struggle with tuning again.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">2. Capo</h3>
      <p>A capo opens up new chord voicings without requiring advanced technique. It's invaluable for playing along with recordings in different keys and for songwriting exploration.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">3. Guitar Picks</h3>
      <p>Experimenting with different pick thicknesses helps you find your ideal feel and tone. Beginners often start with medium picks (0.70mm-0.85mm) as they offer versatility for both strumming and picking.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">4. Guitar Strap</h3>
      <p>Even if you primarily play seated, having a comfortable strap allows you to stand and move freely when needed. Look for adjustable straps with padding for shoulder comfort.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Bonus Recommendations</h2>

      <p>As you progress, consider adding a guitar stand for safe display, a cloth for daily cleaning, and a string winder for faster string changes. These small additions keep your instrument in top condition and make maintenance effortless.</p>

      <p>Remember, the best accessories are those that serve your playing without distraction. Start with the essentials, master them, and build your collection gradually as your needs evolve.</p>
    `,
  },
  {
    id: 'a2',
    title: 'Choosing the Right Guitar Capo',
    slug: 'choosing-the-right-guitar-capo',
    category: 'Gear Guides',
    author: 'James Carter',
    date: 'October 25, 2024',
    image: '/images/articles/guitar-capo-guide.jpg',
    excerpt:
      'Capos seem simple, but the differences between models can significantly affect your playing experience and instrument safety.',
    content: `
      <p>A capo might look like a straightforward tool, but the differences between models can significantly impact your tone, playability, and even the longevity of your instrument.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Capo Types Compared</h2>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">Spring-Loaded Capos</h3>
      <p>Spring-loaded capos, like the popular Shubb style, offer quick one-handed operation and precise pressure control. They're excellent for frequent capo changes during performance or practice.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">Screw-Adjusted Capos</h3>
      <p>Screw-adjusted capos provide consistent, adjustable pressure across all strings. They're excellent for maintaining intonation, especially on higher frets, but require two hands to operate.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">Stretch Band Capos</h3>
      <p>Elastic band capos are the most affordable and portable option. While convenient for casual use, they may not provide consistent pressure across all strings, potentially causing intonation issues.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">What to Consider</h2>

      <p>When choosing a capo, consider your playing style, budget, and the types of guitars you use. For serious players, investing in a quality capo pays off in consistent tone and reliable performance.</p>

      <p>Remember to position your capo just behind the fret wire, not directly on top of it, for optimal intonation. A properly applied capo should feel similar to pressing down with your finger—snug but not excessive.</p>
    `,
  },
  {
    id: 'a3',
    title: 'Building a Simple Home Music Setup',
    slug: 'building-a-simple-home-music-setup',
    category: 'Studio Tips',
    author: 'Michael Chen',
    date: 'October 18, 2024',
    image: '/images/articles/home-studio-guide.jpg',
    excerpt:
      'You don\'t need a professional studio to create great music. Here\'s how to build a functional home recording setup on a reasonable budget.',
    content: `
      <p>Home recording has never been more accessible. With the right equipment, you can create professional-quality recordings from the comfort of your own space.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Core Components</h2>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">Audio Interface</h3>
      <p>Your audio interface is the heart of your setup. It converts analog signals to digital and vice versa. Start with a 2-input interface if you plan to record guitar and vocals.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">Microphone</h3>
      <p>A good condenser microphone captures detail and nuance. For beginners, a large-diaphragm condenser offers versatility for vocals and acoustic instruments.</p>

      <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3">Headphones</h3>
      <p>Closed-back headphones provide isolation needed for recording, while open-back headphones offer more natural sound for mixing. Consider both if your budget allows.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Optional Additions</h2>

      <p>As your setup grows, consider adding a MIDI controller for virtual instruments, acoustic treatment for improved sound quality, and a quality studio monitor speaker for accurate mixing.</p>

      <p>Remember, great music starts with good ideas, not expensive gear. Focus on developing your craft, and let your equipment serve your creativity rather than dictate it.</p>
    `,
  },
  {
    id: 'a4',
    title: 'Understanding Guitar String Gauges',
    slug: 'understanding-guitar-string-gauges',
    category: 'Beginner Tips',
    author: 'Emily Thompson',
    date: 'October 10, 2024',
    image: '/images/articles/string-gauges.jpg',
    excerpt:
      'String gauge affects playability, tone, and tuning stability. Here\'s what every guitarist needs to know about choosing the right strings.',
    content: `
      <p>Guitar string gauge refers to the thickness of your strings, measured in thousandths of an inch. This single choice impacts nearly every aspect of your playing experience.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Lighter vs Heavier Gauges</h2>

      <p>Lighter gauges (.009-.042) require less finger strength to bend and fret, making them popular for beginners and players with a lighter touch. They produce a brighter, more flexible tone but may sacrifice some volume and sustain.</p>

      <p>Heavier gauges (.011-.052 and above) demand more finger strength but offer richer tone, greater volume, and improved tuning stability. They're preferred by many blues and rock players for their expressive capabilities.</p>

      <h2 className="text-2xl font-serif font-medium text-foreground mt-8 mb-4">Finding Your Balance</h2>

      <p>Many players start with medium-light gauges (.010-.046) as a compromise between playability and tone. Consider your guitar's setup, your playing style, and the musical genres you enjoy when making your choice.</p>

      <p>Remember that changing string gauge may require truss rod adjustments to maintain proper neck relief. When in doubt, consult a qualified guitar technician.</p>
    `,
  },
]
