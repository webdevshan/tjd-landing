import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 1,
    name: 'Kesher Diamond Heart Connection Pendant',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    href: '/jewellery/pendants',
  },
  {
    id: 2,
    name: 'Chains',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    href: '/jewellery/chains',
  },
  {
    id: 3,
    name: 'Bracelets & Bangles',
    image: 'https://images.unsplash.com/photo-1603561596112-0a13211acf80?w=400&q=80',
    href: '/jewellery/bracelets',
  },
  {
    id: 4,
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    href: '/jewellery/necklaces',
  },
  {
    id: 5,
    name: 'Pendants',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    href: '/jewellery/pendants',
  },
  {
    id: 6,
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1603561596112-0a13211acf80?w=400&q=80',
    href: '/jewellery/rings',
  },
]

export default function PopularCollections() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 text-gray-900">
          Popular Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-3 overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="font-sans text-sm text-gray-800 text-center group-hover:text-tjd-green transition-colors">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
