'use client'

import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, Mail, Tag } from 'lucide-react'

export default function DiscountStickyBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if bar was already dismissed (client-side only)
    if (typeof window !== 'undefined') {
      const hasDismissed = localStorage.getItem('tjd-discount-bar-dismissed')
      if (!hasDismissed) {
        // Show bar after a short delay
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('tjd-discount-bar-dismissed', 'true')
    }
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission for discount
    console.log('Discount email:', email)
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
      handleCloseModal()
      handleClose() // Also close the sticky bar
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-tjd-green text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <Tag className="text-white" size={20} />
              <div className="flex-1">
                <p className="font-kohinoor text-sm md:text-base font-medium">
                  Get <span className="font-bold">10% OFF</span> your first order! Subscribe now.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleOpenModal}
                className="bg-white text-tjd-green hover:bg-gray-100 px-4 py-2 font-kohinoor font-medium text-sm uppercase tracking-wide transition-colors whitespace-nowrap"
              >
                Claim Offer
              </button>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={handleCloseModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close modal"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="mb-6">
                      <h2 className="font-lamoric-rowen text-3xl md:text-4xl text-tjd-green mb-2">
                        Welcome to TJD
                      </h2>
                      <p className="font-kohinoor text-2xl text-gray-800 font-semibold">
                        Get 10% Off Your First Order
                      </p>
                    </div>

                    <p className="font-kohinoor text-gray-600 mb-6">
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
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-tjd-green font-kohinoor rounded"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-tjd-green hover:bg-tjd-green-dark text-white px-8 py-3 font-kohinoor font-medium uppercase tracking-wide transition-colors rounded"
                        >
                          Claim My 10% Discount
                        </button>
                      </form>
                    ) : (
                      <div className="py-8">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="font-kohinoor text-lg text-gray-800 font-semibold">
                          Thank you! Check your email for your discount code.
                        </p>
                      </div>
                    )}

                    <button
                      onClick={handleCloseModal}
                      className="mt-4 font-kohinoor text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                      Maybe later
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
