'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-32 md:h-40">
          <Link href="/" className="relative w-full max-w-md md:max-w-2xl h-24 md:h-32">
            <Image
              src="/TheJewellery_Department_Logo_Final.webp"
              alt="The Jewellery Department"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
