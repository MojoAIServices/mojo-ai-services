/**
 * Aurora Background Component
 * 
 * Creates dynamic animated aurora effects with floating orbs
 * Inspired by A24 Films and Unity design aesthetics
 * 
 * Features:
 * - Multiple animated gradient orbs
 * - Smooth blend modes and filters
 * - Performance-optimized animations
 * - Accessibility support (reduced motion)
 */

'use client'

import React, { useEffect, useState } from 'react'

// =============================================================================
// AURORA BACKGROUND COMPONENT
// =============================================================================

const AuroraBackground: React.FC = () => {
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])
  
  // Ensure client-side rendering for animations
  useEffect(() => {
    setIsClient(true)
    
    // Generate particles for the particle system
    const generateParticles = () => {
      const particleCount = 50
      const newParticles = []
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 8
        })
      }
      
      setParticles(newParticles)
    }
    
    generateParticles()
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      {/* =================================================================== */}
      {/* NEURAL NETWORK GRID EFFECT                                          */}
      {/* =================================================================== */}
      <div 
        className="
          fixed 
          inset-0 
          z-0 
          neural-grid
        "
        aria-hidden="true"
        role="presentation"
      />
      
      {/* =================================================================== */}
      {/* PARTICLE SYSTEM                                                     */}
      {/* =================================================================== */}
      <div 
        className="
          fixed 
          inset-0 
          z-1 
          particle-system
        "
        aria-hidden="true"
        role="presentation"
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* =================================================================== */}
      {/* AURORA ORBS CONTAINER                                               */}
      {/* =================================================================== */}
      <div 
        className="
          fixed 
          inset-0 
          z-2 
          overflow-hidden 
          pointer-events-none
        "
        aria-hidden="true"
        role="presentation"
      >
        
        {/* Primary Aurora Orb - Cyan/Blue */}
        <div 
          className="
            aurora-orb 
            aurora-orb-1
            animate-aurora-1
          "
          style={{
            position: 'absolute',
            top: 'clamp(-15%, -10%, -5%)',
            left: 'clamp(-15%, -10%, -5%)',
            width: 'clamp(15rem, 30vw, 40rem)',
            height: 'clamp(15rem, 30vw, 40rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(0, 255, 255, 0.6) 0%, 
                rgba(0, 128, 255, 0.3) 50%, 
                transparent 100%
              )
            `
          }}
        />
        
        {/* Secondary Aurora Orb - Purple/Magenta */}
        <div 
          className="
            aurora-orb 
            aurora-orb-2
            animate-aurora-2
          "
          style={{
            position: 'absolute',
            top: 'clamp(15%, 20%, 25%)',
            right: 'clamp(-20%, -15%, -10%)',
            width: 'clamp(12rem, 25vw, 30rem)',
            height: 'clamp(12rem, 25vw, 30rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(128, 0, 255, 0.5) 0%, 
                rgba(255, 0, 255, 0.2) 50%, 
                transparent 100%
              )
            `
          }}
        />
        
        {/* Tertiary Aurora Orb - Teal/Green */}
        <div 
          className="
            aurora-orb 
            aurora-orb-3
            animate-aurora-3
          "
          style={{
            position: 'absolute',
            bottom: 'clamp(-25%, -20%, -15%)',
            left: 'clamp(15%, 20%, 25%)',
            width: 'clamp(18rem, 35vw, 50rem)',
            height: 'clamp(18rem, 35vw, 50rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(0, 255, 128, 0.4) 0%, 
                rgba(0, 128, 255, 0.1) 50%, 
                transparent 100%
              )
            `
          }}
        />
        
        {/* Additional Ambient Orbs */}
        <div 
          className="
            aurora-orb
            animate-aurora-1
          "
          style={{
            position: 'absolute',
            top: 'clamp(25%, 33%, 40%)',
            right: 'clamp(25%, 33%, 40%)',
            width: 'clamp(8rem, 15vw, 20rem)',
            height: 'clamp(8rem, 15vw, 20rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(0, 255, 255, 0.3) 0%, 
                rgba(128, 0, 255, 0.1) 50%, 
                transparent 100%
              )
            `,
            animationDelay: '5s'
          }}
        />
        
        <div 
          className="
            aurora-orb
            animate-aurora-2
          "
          style={{
            position: 'absolute',
            bottom: 'clamp(20%, 25%, 30%)',
            left: 'clamp(25%, 33%, 40%)',
            width: 'clamp(12rem, 22vw, 35rem)',
            height: 'clamp(12rem, 22vw, 35rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(255, 0, 128, 0.3) 0%, 
                rgba(0, 128, 255, 0.1) 50%, 
                transparent 100%
              )
            `,
            animationDelay: '10s'
          }}
        />
        
        {/* Floating Energy Orbs */}
        <div 
          className="
            aurora-orb
            animate-aurora-3
          "
          style={{
            position: 'absolute',
            top: 'clamp(10%, 16%, 20%)',
            left: 'clamp(10%, 16%, 20%)',
            width: 'clamp(6rem, 12vw, 15rem)',
            height: 'clamp(6rem, 12vw, 15rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(34, 211, 238, 0.4) 0%, 
                rgba(59, 130, 246, 0.2) 50%, 
                transparent 100%
              )
            `,
            animationDelay: '3s'
          }}
        />
        
        <div 
          className="
            aurora-orb
            animate-aurora-1
          "
          style={{
            position: 'absolute',
            top: 'clamp(60%, 66%, 70%)',
            right: 'clamp(10%, 16%, 20%)',
            width: 'clamp(5rem, 10vw, 12rem)',
            height: 'clamp(5rem, 10vw, 12rem)',
            background: `
              radial-gradient(
                circle, 
                rgba(139, 92, 246, 0.4) 0%, 
                rgba(34, 211, 238, 0.2) 50%, 
                transparent 100%
              )
            `,
            animationDelay: '7s'
          }}
        />
        
      </div>
      
      {/* =================================================================== */}
      {/* GRADIENT OVERLAY                                                    */}
      {/* =================================================================== */}
      <div 
        className="
          fixed 
          inset-0 
          z-3 
          pointer-events-none
          bg-gradient-to-br 
          from-transparent 
          via-dark-950/50 
          to-dark-900/80
        "
        aria-hidden="true"
      />
      
      {/* =================================================================== */}
      {/* SUBTLE TEXTURE OVERLAY                                              */}
      {/* =================================================================== */}
      <div 
        className="
          fixed 
          inset-0 
          z-4 
          pointer-events-none
          opacity-20
        "
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(128, 0, 255, 0.03) 0%, transparent 50%)
          `
        }}
        aria-hidden="true"
      />
      
      {/* =================================================================== */}
      {/* ENERGY PULSES                                                       */}
      {/* =================================================================== */}
      <div 
        className="
          fixed 
          inset-0 
          z-5 
          pointer-events-none
        "
        aria-hidden="true"
      >
        {/* Energy Pulse Rings */}
        <div 
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-96 
            h-96 
            border 
            border-aurora-cyan/20 
            rounded-full 
            animate-pulse-slow
          "
          style={{
            transform: 'translate(-50%, -50%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-80 
            h-80 
            border 
            border-aurora-blue/20 
            rounded-full 
            animate-pulse-slow
          "
          style={{
            transform: 'translate(-50%, -50%)',
            animationDelay: '1s'
          }}
        />
        <div 
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-64 
            h-64 
            border 
            border-aurora-purple/20 
            rounded-full 
            animate-pulse-slow
          "
          style={{
            transform: 'translate(-50%, -50%)',
            animationDelay: '2s'
          }}
        />
      </div>
    </>
  )
}

export default AuroraBackground 