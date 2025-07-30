/**
 * Sunny Coming Soon Page
 * 
 * Beautiful animated "under construction" page for SUNNY AI system
 * Features: Centered layout, glassmorphism, floating animations
 */

'use client'

import React from 'react'

// =============================================================================
// SUNNY COMING SOON PAGE
// =============================================================================

export default function SunnyPage() {
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      justify-center 
      min-h-screen 
      p-4 
      text-center
      relative
      z-10
    ">
      {/* Coming Soon Container */}
      <div className="
        max-w-2xl 
        mx-auto 
        p-8 
        sm:p-12
        bg-white/5 
        backdrop-blur-xl 
        rounded-3xl 
        border 
        border-white/10 
        shadow-2xl
        animate-fadeInUp
      ">
        
        {/* Main Title */}
        <h1 className="
          text-4xl 
          sm:text-5xl 
          lg:text-6xl 
          font-bold 
          text-aurora-cyan 
          mb-6
          animate-pulse-slow
        ">
          Great Things Coming Soon…
        </h1>
        
        {/* Construction Animation */}
        <div className="
          mb-8 
          flex 
          justify-center
          animate-bounce-gentle
        ">
          <div className="
            w-48 
            h-36 
            sm:w-64 
            sm:h-48
            bg-gradient-to-br 
            from-yellow-400/20 
            to-orange-500/20 
            rounded-2xl 
            flex 
            items-center 
            justify-center
            border 
            border-yellow-400/30
            shadow-lg
            shadow-yellow-400/20
            hover:scale-105
            transition-transform
            duration-300
          ">
            {/* Stick Figure Construction Animation Placeholder */}
            <div className="text-center">
              <div className="
                text-6xl 
                sm:text-8xl 
                mb-2
                animate-bounce
              ">
                ☀️
              </div>
              <div className="
                text-sm 
                text-white/60
                animate-pulse
              ">
                Under Construction
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="
          text-lg 
          sm:text-xl 
          text-white/80 
          font-medium 
          leading-relaxed 
          mb-4
        ">
          <strong className="text-yellow-400">SUNNY</strong> - Your Next Generation Personalized AI Home Butler
        </p>
        
        {/* Additional Info */}
        <p className="
          text-base 
          text-white/60 
          max-w-md 
          mx-auto
        ">
          Your personal AI assistant is being designed to understand your needs and help manage your daily life with intelligence and care.
        </p>
        
        {/* Animated Progress Dots */}
        <div className="
          flex 
          justify-center 
          gap-2 
          mt-8
        ">
          <div className="
            w-3 
            h-3 
            bg-yellow-400 
            rounded-full 
            animate-pulse
          " style={{ animationDelay: '0s' }}></div>
          <div className="
            w-3 
            h-3 
            bg-orange-500 
            rounded-full 
            animate-pulse
          " style={{ animationDelay: '0.5s' }}></div>
          <div className="
            w-3 
            h-3 
            bg-amber-400 
            rounded-full 
            animate-pulse
          " style={{ animationDelay: '1s' }}></div>
        </div>
        
      </div>
    </div>
  )
} 