'use client'

import { useState } from 'react'
import { Mail, User, MessageSquare } from 'lucide-react'

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="marble-background text-white min-h-screen flex items-center py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="font-lamoric-rowen text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome To The Jewellery Department
            </h1>
            <p className="font-kohinoor text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95">
              Born from a passion for timeless design, The Jewellery Department
              showcases modern heirloom collections and classic fine jewellery
              essentials. Founded by Kira Brandt Shapiro, TJD brings together
              meaningful pieces that celebrate everyday beauty and life's
              milestones. Jewellery is meant to be worn, loved, and enjoyed —
              always.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-white/20">
            <h2 className="font-lamoric-rowen text-3xl md:text-4xl mb-6">
              Get In Touch
            </h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-kohinoor text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
                      size={20}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded focus:outline-none focus:border-white/60 focus:bg-white/15 text-white placeholder-white/50 font-kohinoor"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-kohinoor text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
                      size={20}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded focus:outline-none focus:border-white/60 focus:bg-white/15 text-white placeholder-white/50 font-kohinoor"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-kohinoor text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-3 top-3 text-white/60"
                      size={20}
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded focus:outline-none focus:border-white/60 focus:bg-white/15 text-white placeholder-white/50 font-kohinoor resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-marble-green hover:bg-white/90 px-8 py-4 font-kohinoor font-medium uppercase tracking-wide transition-colors rounded"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✨</div>
                <p className="font-kohinoor text-xl font-medium">
                  Thank you! We'll be in touch soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
