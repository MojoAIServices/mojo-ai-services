/**
 * Contact Page - Mojo AI Services
 * 
 * Sophisticated contact page for creative professionals
 * Features: Interactive form, GSAP animations, purposeful micro-interactions
 */

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { scrollReveal, fadeInStagger, microInteractions } from '@/lib/animations'

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'consulting'
  })

  useEffect(() => {
    // Initialize animations
    const timer = setTimeout(() => {
      // Hero section
      if (heroRef.current) {
        fadeInStagger(heroRef.current.children, {
          duration: 0.8,
          stagger: 0.2,
          y: 30
        })
      }

      // Form and info sections
      if (formRef.current && infoRef.current) {
        scrollReveal([formRef.current, infoRef.current], {
          stagger: 0.3,
          y: 40,
          scale: 0.95
        })
      }

      // Form fields
      scrollReveal('.form-field', {
        stagger: 0.1,
        y: 20
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="
            text-5xl md:text-6xl lg:text-7xl 
            font-bold 
            font-primary
            leading-tight
            tracking-tighter
            text-white
            opacity-0
          ">
            Let's Build the{' '}
            <span className="
              bg-gradient-to-r 
              from-blue-400 
              via-cyan-400 
              to-blue-600 
              bg-clip-text 
              text-transparent
            ">
              Future Together
            </span>
          </h1>
          
          <p className="
            text-xl md:text-2xl 
            font-primary
            leading-relaxed
            text-white/80
            max-w-3xl
            mx-auto
            opacity-0
          ">
            Ready to transform your space with intelligent technology? 
            Let's discuss how we can craft a solution that's uniquely yours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8 p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white font-primary">
                    Start the Conversation
                  </h2>
                  
                  <p className="text-white/70 leading-relaxed">
                    Tell us about your project, and we'll craft a personalized approach 
                    that aligns with your vision and goals.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="
                        w-full px-4 py-3
                        bg-white/10 border border-white/20
                        rounded-xl text-white placeholder-white/50
                        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                        transition-all duration-300
                      "
                      placeholder="Your name"
                      onFocus={(e) => microInteractions.textReveal(e.target)}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="
                        w-full px-4 py-3
                        bg-white/10 border border-white/20
                        rounded-xl text-white placeholder-white/50
                        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                        transition-all duration-300
                      "
                      placeholder="your@email.com"
                      onFocus={(e) => microInteractions.textReveal(e.target)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="
                      w-full px-4 py-3
                      bg-white/10 border border-white/20
                      rounded-xl text-white placeholder-white/50
                      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                      transition-all duration-300
                    "
                    placeholder="Your company (optional)"
                    onFocus={(e) => microInteractions.textReveal(e.target)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="interest" className="block text-sm font-medium text-white/80 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formState.interest}
                    onChange={handleInputChange}
                    className="
                      w-full px-4 py-3
                      bg-white/10 border border-white/20
                      rounded-xl text-white
                      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                      transition-all duration-300
                    "
                  >
                    <option value="consulting" className="bg-slate-800">AI Consulting Services</option>
                    <option value="shelby" className="bg-slate-800">SHELBY - Smart Home AI</option>
                    <option value="sunny" className="bg-slate-800">SUNNY - Energy Optimization</option>
                    <option value="custom" className="bg-slate-800">Custom Solution</option>
                    <option value="partnership" className="bg-slate-800">Partnership Opportunity</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="
                      w-full px-4 py-3
                      bg-white/10 border border-white/20
                      rounded-xl text-white placeholder-white/50
                      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                      transition-all duration-300
                      resize-vertical
                    "
                    placeholder="Describe your vision, challenges, or goals. The more details you share, the better we can tailor our approach."
                    onFocus={(e) => microInteractions.textReveal(e.target)}
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full py-4 px-8
                    bg-gradient-to-r from-blue-500 to-cyan-500
                    hover:from-blue-600 hover:to-cyan-600
                    text-white font-semibold
                    rounded-xl
                    transition-all duration-300
                    transform hover:scale-[1.02]
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900
                  "
                  onMouseEnter={(e) => {
                    const animation = microInteractions.buttonHover(e.currentTarget)
                    e.currentTarget.addEventListener('mouseleave', () => animation.reverse(), { once: true })
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 font-primary">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-white/70">hello@mojoaiservices.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Response Time</h4>
                      <p className="text-white/70">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Service Areas</h4>
                      <p className="text-white/70">Remote consulting worldwide, on-site services in select regions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 font-primary">
                  What Happens Next?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold mt-1">1</div>
                    <p className="text-white/70">We'll review your message and research your specific needs</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold mt-1">2</div>
                    <p className="text-white/70">Schedule a discovery call to understand your vision in detail</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold mt-1">3</div>
                    <p className="text-white/70">Present a tailored proposal with timeline and investment details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}