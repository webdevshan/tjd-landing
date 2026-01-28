'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-tjd-green text-tjd-beige flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-[280px] md:max-w-[400px]">
            <Image
              src="/tjd_final.png"
              alt="The Jewellery Department"
              width={1954}
              height={261}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="font-lamoric-rowen text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-tjd-beige">
            Coming Soon
          </h1>
          <p className="font-kohinoor text-xl md:text-2xl lg:text-3xl mb-4 text-tjd-beige/90">
            We're crafting something beautiful
          </p>
          <p className="font-kohinoor text-lg md:text-xl text-tjd-beige/80 max-w-2xl mx-auto">
            We are so glad you are here! We can’t wait to welcome you into our glittering world. Affordable, fine jewellery for every one. Modern luxury that will excite and delight - The Jewellery Department showcases jewellery that transcends time and trends!

            Sign up to be the first to view our collections from around the globe and receive a discount code from us for your first purchase.
          </p>
        </div>

        {/* Email Subscription Form */}
        <div className="max-w-md mx-auto">
          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-tjd-green-dark"
                    size={20}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading'}
                    className="w-full pl-10 pr-4 py-3 bg-tjd-beige border-none rounded focus:outline-none focus:ring-2 focus:ring-tjd-beige/50 text-tjd-green-dark placeholder-tjd-green-dark/50 font-kohinoor"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-tjd-green text-tjd-beige hover:bg-tjd-green-dark px-8 py-3 font-kohinoor font-medium uppercase tracking-wide transition-colors rounded whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed border border-tjd-beige"
                >
                  {status === 'loading' ? 'Sending...' : 'Notify Me'}
                </button>
              </div>
              {status === 'error' && (
                <p className="text-red-300 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          ) : (
            <div className="py-6">
              <div className="text-6xl mb-4">✨</div>
              <p className="font-kohinoor text-xl font-medium text-tjd-beige">
                Thank you! We'll notify you when we launch.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm text-tjd-beige/70 hover:text-tjd-beige underline"
              >
                Sign up another email
              </button>
            </div>
          )}
        </div>

        {/* Social Links or Additional Info */}
        <div className="mt-16 pt-8 border-t border-tjd-beige/20">
          <p className="font-kohinoor text-sm text-tjd-beige/60">
            Follow us for updates and behind-the-scenes glimpses
          </p>
        </div>
      </div>
    </div>
  )
}
