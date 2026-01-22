'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log('Coming soon email:', email)
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12">
          <div className="relative w-full max-w-md mx-auto h-32 md:h-40">
            <Image
              src="/TheJewellery_Department_Logo_Final.webp"
              alt="The Jewellery Department"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="font-lamoric-rowen text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            Coming Soon
          </h1>
          <p className="font-kohinoor text-xl md:text-2xl lg:text-3xl mb-4 text-gray-800">
            We're crafting something beautiful
          </p>
          <p className="font-kohinoor text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We are so glad you are here! We can’t wait to welcome you into our glittering world. Affordable, fine jewellery for every one. Modern luxury that will excite and delight - The Jewellery Department showcases jewellery that transcends time and trends!

            Sign up to be the first to view our collections from around the globe and receive a discount code from us for your first purchase.
          </p>
        </div>

        {/* Email Subscription Form */}
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-tjd-green focus:bg-white text-gray-900 placeholder-gray-400 font-kohinoor"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-tjd-green text-white hover:bg-tjd-green-dark px-8 py-3 font-kohinoor font-medium uppercase tracking-wide transition-colors rounded whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6">
              <div className="text-6xl mb-4">✨</div>
              <p className="font-kohinoor text-xl font-medium text-gray-900">
                Thank you! We'll notify you when we launch.
              </p>
            </div>
          )}
        </div>

        {/* Social Links or Additional Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="font-kohinoor text-sm text-gray-600">
            Follow us for updates and behind-the-scenes glimpses
          </p>
        </div>
      </div>
    </div>
  )
}
