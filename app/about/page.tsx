/**
 * About Page - Mojo AI Services
 * 
 * Sophisticated about page for creative professionals
 * Features: GSAP scroll animations, purposeful micro-interactions
 */

'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { scrollReveal, fadeInStagger, microInteractions } from '@/lib/animations'

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Initialize scroll animations
    const timer = setTimeout(() => {
      // Hero section
      if (heroRef.current) {
        fadeInStagger(heroRef.current.children, {
          duration: 0.8,
          stagger: 0.2,
          y: 30
        })
      }

      // Story section
      if (storyRef.current) {
        scrollReveal(storyRef.current.children, {
          stagger: 0.15,
          y: 40
        })
      }

      // Values grid
      if (valuesRef.current) {
        scrollReveal('.value-card', {
          stagger: 0.1,
          y: 30,
          scale: 0.95
        })
      }

      // Team section
      if (teamRef.current) {
        scrollReveal('.team-member', {
          stagger: 0.2,
          y: 50,
          scale: 0.9
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
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
            Crafting the Future of{' '}
            <span className="
              bg-gradient-to-r 
              from-blue-400 
              via-cyan-400 
              to-blue-600 
              bg-clip-text 
              text-transparent
            ">
              Intelligent Living
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
            We're not just building smart homes—we're architecting experiences 
            that adapt to your life, anticipate your needs, and evolve with your dreams.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section 
        ref={storyRef}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="
                text-4xl md:text-5xl 
                font-bold 
                font-primary
                leading-tight
                text-white
              ">
                Our Story
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-white/70">
                <p>
                  Born from a vision where technology serves humanity—not the other way around—
                  Mojo AI Services emerged at the intersection of artificial intelligence, 
                  sustainable living, and human-centered design.
                </p>
                
                <p>
                  We believe that the future of smart homes isn't about having more gadgets; 
                  it's about creating environments that understand, adapt, and enhance the way you live. 
                  Every algorithm we write, every system we design, is crafted with one goal: 
                  enabling you to live your best life.
                </p>
                
                <p>
                  From energy optimization that saves both money and the planet, to AI assistants 
                  that learn your preferences without compromising your privacy, we're building 
                  the intelligent infrastructure for tomorrow's homes—today.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🏠</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section 
        ref={valuesRef}
        className="py-20 px-6 bg-black/20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="
            text-4xl md:text-5xl 
            font-bold 
            font-primary
            leading-tight
            text-white
            text-center
            mb-16
          ">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Purpose-Driven Innovation',
                description: 'Every feature we build serves a real human need, not just technological possibility.'
              },
              {
                icon: '🌱',
                title: 'Sustainable Intelligence',
                description: 'AI that optimizes for both performance and environmental responsibility.'
              },
              {
                icon: '🔒',
                title: 'Privacy by Design',
                description: 'Your data stays yours. We build intelligence that respects your digital boundaries.'
              },
              {
                icon: '✨',
                title: 'Craftsmanship',
                description: 'We obsess over details because great experiences are built from great execution.'
              },
              {
                icon: '🤝',
                title: 'Human-Centered',
                description: 'Technology should adapt to people, not force people to adapt to technology.'
              },
              {
                icon: '🚀',
                title: 'Future-Ready',
                description: 'Building systems that evolve with emerging technologies and changing needs.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="value-card p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                onMouseEnter={(e) => {
                  const animation = microInteractions.cardLift(e.currentTarget)
                  e.currentTarget.addEventListener('mouseleave', () => animation.reverse(), { once: true })
                }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section 
        ref={teamRef}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="
            text-4xl md:text-5xl 
            font-bold 
            font-primary
            leading-tight
            text-white
            mb-8
          ">
            Built by Visionaries
          </h2>
          
          <p className="text-xl text-white/70 mb-16 leading-relaxed">
            Our team combines decades of experience in AI, sustainable technology, 
            and human-centered design to create solutions that truly matter.
          </p>
          
          <div className="team-member">
            <Link 
              href="/contact"
              className="
                inline-flex items-center gap-4
                px-8 py-4
                bg-gradient-to-r from-blue-500/20 to-cyan-500/20
                hover:from-blue-500/30 hover:to-cyan-500/30
                rounded-xl
                border border-white/10
                hover:border-white/20
                text-white
                font-semibold
                transition-all duration-300
                backdrop-blur-sm
              "
              onMouseEnter={(e) => {
                const animation = microInteractions.buttonHover(e.currentTarget)
                e.currentTarget.addEventListener('mouseleave', () => animation.reverse(), { once: true })
              }}
            >
              <span>Meet the Team</span>
              <span className="text-cyan-400">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}