import Link from 'next/link'
import Image from 'next/image'

const collections = [
  {
    id: 1,
    title: 'My Peach Collection',
    description:
      'Statement jewellery crafted by expert artisans in South Africa. Bold luxury pieces designed to elevate everyday style.',
    cta: 'Shop My Peach',
    href: '/my-peach',
    bgColor: 'bg-tjd-green',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    imagePosition: 'right',
  },
  {
    id: 2,
    title: 'Kesher Collection',
    description:
      'Inspired by meaningful connections and precious memories. Jewellery that tells stories across generations.',
    cta: 'Shop Kesher',
    href: '/kesher',
    bgColor: 'bg-tjd-beige',
    textColor: 'text-gray-900',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    imagePosition: 'left',
  },
  {
    id: 3,
    title: 'The Basics Collection',
    description:
      'Everyday essentials — chains, bangles and timeless staples designed to build your perfect jewellery wardrobe.',
    cta: 'Shop The Basics',
    href: '/the-basics',
    bgColor: 'bg-tjd-green',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1603561596112-0a13211acf80?w=800&q=80',
    imagePosition: 'left',
  },
]

export default function FeaturedCollections() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`${collection.bgColor} ${collection.textColor} relative overflow-hidden`}
          >
            <div className="relative h-[500px] md:h-[600px] flex items-center">
              {/* Image */}
              <div
                className={`absolute inset-0 ${
                  collection.imagePosition === 'right' ? 'md:right-0' : 'md:left-0'
                } w-full md:w-1/2`}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>

              {/* Content */}
              <div
                className={`relative z-10 p-8 md:p-12 ${
                  collection.imagePosition === 'right'
                    ? 'md:ml-auto md:w-1/2'
                    : 'md:mr-auto md:w-1/2'
                }`}
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {collection.title}
                </h2>
                <p className="font-sans text-base md:text-lg mb-6 opacity-90 max-w-md">
                  {collection.description}
                </p>
                <Link
                  href={collection.href}
                  className={`inline-block ${
                    collection.bgColor === 'bg-tjd-green'
                      ? 'bg-white text-tjd-green hover:bg-gray-100'
                      : 'bg-tjd-green text-white hover:bg-tjd-green-dark'
                  } px-8 py-3 font-sans uppercase tracking-wide transition-colors`}
                >
                  {collection.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Full-width image block */}
        <div className="md:col-span-2 relative h-[400px] md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80"
            alt="Jewellery"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
