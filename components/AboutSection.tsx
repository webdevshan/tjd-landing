import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="bg-tjd-green text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-9xl">Gem</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome To The Jewellery Department
          </h2>
          <p className="font-sans text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            Born from a passion for timeless design, The Jewellery Department
            showcases modern heirloom collections and classic fine jewellery
            essentials. Founded by Kira Brandt Shapiro, TJD brings together
            meaningful pieces that celebrate everyday beauty and life\'s
            milestones. Jewellery is meant to be worn, loved, and enjoyed —
            always.
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-tjd-green hover:bg-gray-100 px-8 py-3 font-sans uppercase tracking-wide transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
