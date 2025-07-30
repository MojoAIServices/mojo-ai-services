/**
 * Mojo AI Services - Homepage
 * 
 * Sophisticated homepage for creative professionals
 * Features: 3D logo animation, GSAP scroll reveals, purposeful micro-interactions
 * 
 * Design Philosophy:
 * - Every animation serves a purpose
 * - Crafted for creative professionals who value attention to detail
 * - Performance-optimized with mobile considerations
 * - Accessibility-first approach
 */

'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo3D from '@/components/Logo3D'
import { fadeInStagger, scrollReveal, initPageAnimations, microInteractions } from '@/lib/animations'

// =============================================================================
// HOMEPAGE COMPONENT
// =============================================================================

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Initialize sophisticated animations
  useEffect(() => {
    // Set loaded state after mount
    setIsLoaded(true)

    // Initialize page animations
    const timer = setTimeout(() => {
      // Hero section staggered reveal
      if (titleRef.current && subtitleRef.current && ctaRef.current) {
        fadeInStagger([titleRef.current, subtitleRef.current, ctaRef.current], {
          duration: 0.8,
          stagger: 0.3,
          delay: 0.5,
          y: 40
        })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* =================================================================== */}
      {/* 3D BACKGROUND LOGO                                                  */}
      {/* =================================================================== */}
      <div className="
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center 
        opacity-10 
        pointer-events-none
        z-0
      ">
        <div className="w-96 h-96 max-w-[50vw] max-h-[50vh]">
          <Logo3D 
            autoRotate={true} 
            intensity={0.3}
            className="filter blur-[1px]"
          />
        </div>
      </div>
      
      {/* =================================================================== */}
      {/* CENTERED BRAND BADGE                                                */}
      {/* =================================================================== */}
      <Link id="brand-badge" href="/">
        <Image
          src="/MojoLogo.png"
          alt="Mojo AI Services logo"
          width={34}
          height={34}
          className="object-contain"
        />
        <span>Mojo&nbsp;AI&nbsp;Services</span>
      </Link>
      

      
      {/* =================================================================== */}
      {/* MAIN HERO SECTION                                                   */}
      {/* =================================================================== */}
      <section 
        className="
          relative 
          z-10 
          min-h-screen 
          flex 
          flex-col 
          items-center 
          justify-center 
          px-md 
          py-xl
          text-center
          container-responsive
          hero-with-watermark
        "
        role="banner"
        aria-labelledby="hero-title"
      >
        
        {/* =============================================================== */}
        {/* HERO CONTENT CONTAINER                                          */}
        {/* =============================================================== */}
        <div className="
          w-full
          max-w-container-lg 
          mx-auto 
          space-y-lg
        ">
          
          {/* Hero Title */}
          <h1 
            ref={titleRef}
            id="hero-title"
            className="
              text-hero 
              font-bold
              font-primary
              leading-tight
              tracking-tighter
              text-white
              opacity-0
              transform
              translate-y-8
            "
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Dynamically Shaping Your{' '}
            <span className="
              bg-gradient-to-r 
              from-blue-400 
              via-cyan-400 
              to-blue-600 
              bg-clip-text 
              text-transparent
              animate-gradient-flow
            ">
              Best Life
            </span>
          </h1>
          
          {/* Hero Subtitle */}
          <p 
            ref={subtitleRef}
            className="
              text-xl
              font-primary
              leading-relaxed
              tracking-normal
              text-white/80
              max-w-3xl
              mx-auto
              opacity-0
              transform
              translate-y-8
            "
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Where AI adapts, energy saves, and your voice leads. 
            Cutting-edge smart home intelligence meets professional IT consulting.
          </p>
          
          {/* Call to Action Button */}
          <div 
            ref={ctaRef}
            className="
              opacity-0
              transform
              translate-y-8
            "
          >
            <button 
              className="
                glass-light 
                hover:glass-morphism 
                px-lg 
                py-md 
                rounded-xl 
                font-semibold 
                text-lg
                transition-all 
                duration-300
                hover-grow
                border border-aurora-cyan/20
                hover:border-aurora-cyan/40
                text-white
                hover:text-aurora-cyan
                glow-on-hover
                relative
                overflow-hidden
              "
              onMouseEnter={(e) => {
                const animation = microInteractions.buttonHover(e.currentTarget)
                e.currentTarget.addEventListener('mouseleave', () => animation.reverse(), { once: true })
              }}
            >
              <span className="relative z-10">Explore Our AI Solutions</span>
              <div 
                className="
                  absolute 
                  inset-0 
                  bg-gradient-to-r 
                  from-aurora-cyan/10 
                  to-aurora-blue/10 
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </button>
          </div>
        </div>

        {/* =============================================================== */}
        {/* FLOATING FEATURE HIGHLIGHTS - CSS GRID                         */}
        {/* =============================================================== */}
        <div className="cta-grid">
          
          {/* AI Services Highlight */}
          <div className="feature-card-enhanced hover-grow">
            <div className="
              text-2xl 
              mb-sm 
              group-hover:animate-bounce-gentle
            ">
              🧠
            </div>
            <div className="
              text-sm 
              font-medium 
              text-white/80 
              group-hover:text-aurora-cyan
              interactive-text
              text-ellipsis
            ">
              AI Consulting
            </div>
          </div>
          
          {/* SHELBY Highlight */}
          <div className="feature-card-enhanced hover-grow">
            <div className="
              text-2xl 
              mb-sm 
              group-hover:animate-bounce-gentle
            ">
              🤖
            </div>
            <div className="
              text-sm 
              font-medium 
              text-white/80 
              group-hover:text-aurora-blue
              interactive-text
              text-ellipsis
            ">
              SHELBY
            </div>
            <div className="
              text-xs 
              text-aurora-cyan 
              animate-pulse-slow
            ">
              Coming Soon
            </div>
          </div>
          
          {/* SUNNY Highlight */}
          <div className="feature-card-enhanced hover-grow">
            <div className="
              text-2xl 
              mb-sm 
              group-hover:animate-bounce-gentle
            ">
              ☀️
            </div>
            <div className="
              text-sm 
              font-medium 
              text-white/80 
              group-hover:text-aurora-yellow
              interactive-text
              text-ellipsis
            ">
              SUNNY
            </div>
            <div className="
              text-xs 
              text-aurora-cyan 
              animate-pulse-slow
            ">
              Coming Soon
            </div>
          </div>
          
          {/* IT Services Highlight */}
          <div className="feature-card-enhanced hover-grow">
            <div className="
              text-2xl 
              mb-sm 
              group-hover:animate-bounce-gentle
            ">
              🛠️
            </div>
            <div className="
              text-sm 
              font-medium 
              text-white/80 
              group-hover:text-aurora-teal
              interactive-text
              text-ellipsis
            ">
              IT Support
            </div>
          </div>
          
        </div>

      </section>
      
      {/* =================================================================== */}
      {/* SCROLL INDICATOR                                                    */}
      {/* =================================================================== */}
      <div className="
        absolute 
        bottom-8 
        left-1/2 
        -translate-x-1/2 
        animate-bounce-gentle
      ">
        <div className="
          w-6 
          h-10 
          border-2 
          border-white/30 
          rounded-full 
          flex 
          justify-center
          glow-on-hover
        ">
          <div className="
            w-1 
            h-3 
            bg-gradient-to-b 
            from-aurora-cyan 
            to-transparent 
            rounded-full 
            mt-2
            animate-pulse-slow
          " />
        </div>
      </div>
      

      
    </div>
  )
} 