'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    heading: 'Modern Heirlooms That Last Forever',
    subheading:
      'Discover fine jewellery curated by The Jewellery Department — timeless pieces designed to celebrate life\'s most precious moments.',
    cta: 'Shop The Collection',
    href: '/collections',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80',
  },
  {
    id: 2,
    heading: 'Bold Luxury By My Peach',
    subheading:
      'Designed in Johannesburg by master jeweller Justine Saks. Statement ear curation pieces crafted by expert goldsmiths and diamond specialists.',
    cta: 'Explore My Peach',
    href: '/my-peach',
    image: 'https://images.unsplash.com/photo-1603561596112-0a13211acf80?w=1920&q=80',
  },
  {
    id: 3,
    heading: 'Jewellery That Connects Hearts',
    subheading:
      'Kesher — meaning "connection". Heirloom pieces inspired by life\'s meaningful relationships. 18% of selected items support social impact causes.',
    cta: 'Shop Kesher',
    href: '/kesher',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&q=80',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
                    {slide.heading}
                  </h1>
                  <p className="font-sans text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
                    {slide.subheading}
                  </p>
                  <Link
                    href={slide.href}
                    className="inline-block bg-tjd-green hover:bg-tjd-green-dark text-white px-8 py-3 font-sans uppercase tracking-wide transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
