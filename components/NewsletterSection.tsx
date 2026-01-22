'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
          Join Our Sparkling Community
        </h2>
        <p className="font-sans text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Sign up to be the first to see our sparkling news and special offers.
          We'll let you know when we are planning pop ups, sales and piercing
          parties!
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-tjd-green font-sans"
              />
            </div>
            <button
              type="submit"
              className="bg-tjd-green hover:bg-tjd-green-dark text-white px-8 py-3 font-sans uppercase tracking-wide transition-colors whitespace-nowrap"
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
