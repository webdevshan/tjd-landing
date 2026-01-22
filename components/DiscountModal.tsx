'use client'

import { useState, useEffect } from 'react'
import { X, Mail } from 'lucide-react'

export default function DiscountModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Check if modal was already shown (client-side only)
    if (typeof window !== 'undefined') {
      const hasSeenModal = localStorage.getItem('tjd-discount-modal-shown')
      if (!hasSeenModal) {
        // Show modal after a short delay
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('tjd-discount-modal-shown', 'true')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission for discount
    console.log('Discount email:', email)
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
      handleClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white max-w-md w-full p-8 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <h2 className="font-serif text-3xl md:text-4xl text-tjd-green mb-2">
              Welcome to TJD
            </h2>
            <p className="font-sans text-2xl text-gray-800 font-semibold">
              Get 10% Off Your First Order
            </p>
          </div>

          <p className="font-sans text-gray-600 mb-6">
            Subscribe to our newsletter and receive an exclusive 10% discount
            code to use on your first purchase.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-tjd-green font-sans"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-tjd-green hover:bg-tjd-green-dark text-white px-8 py-3 font-sans uppercase tracking-wide transition-colors"
              >
                Claim My 10% Discount
              </button>
            </form>
          ) : (
            <div className="py-8">
              <div className="text-6xl mb-4">✨</div>
              <p className="font-sans text-lg text-gray-800 font-semibold">
                Thank you! Check your email for your discount code.
              </p>
            </div>
          )}

          <button
            onClick={handleClose}
            className="mt-4 font-sans text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
