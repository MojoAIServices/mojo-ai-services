/**
 * Mojo AI Services - Homepage
 * 
 * Aurora-themed homepage with dynamic animations and interactive elements
 * Inspired by A24 Films, Play.ai, OpenAI, and Unity design aesthetics
 * 
 * Features:
 * - Animated hero text with Aurora effects
 * - Interactive text elements with hover animations
 * - Responsive design with mobile optimization
 * - Accessibility support and semantic HTML
 */

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// =============================================================================
// HOMEPAGE COMPONENT
// =============================================================================

export default function HomePage() {
  const [textAnimationPhase, setTextAnimationPhase] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Initialize animations on component mount
  useEffect(() => {
    // Stagger text animations
    const phases = [
      { delay: 500, phase: 1 },   // Main title
      { delay: 1000, phase: 2 },  // Subtitle
      { delay: 1500, phase: 3 },  // CTA button
    ]
    
    phases.forEach(({ delay, phase }) => {
      setTimeout(() => setTextAnimationPhase(phase), delay)
    })


  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* =================================================================== */}
      {/* BACKGROUND LOGO                                                      */}
      {/* =================================================================== */}
      <div className="
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center 
        opacity-5 
        pointer-events-none
        z-0
      ">
        <Image
          src="/MojoLogo.png"
          alt="Mojo AI Services Background Logo"
          width={800}
          height={800}
          className="object-contain"
          priority
        />
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
          
          
          
          {/* Call to Action Button */}
          <div 
            className={`
              transition-all 
              duration-1000 
              ease-out
              ${textAnimationPhase >= 3 
                ? 'opacity-100 translate-y-0 animate-fadeIn' 
                : 'opacity-0 translate-y-4'
              }
            `}
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
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="relative z-10">Explore Our AI Solutions</span>
              {isHovering && (
                <div 
                  className="
                    absolute 
                    inset-0 
                    bg-gradient-to-r 
                    from-aurora-cyan/20 
                    to-aurora-blue/20 
                    animate-pulse
                  "
                />
              )}
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