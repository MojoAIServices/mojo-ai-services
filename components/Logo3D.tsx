/**
 * 3D Logo Animation Component
 * 
 * Sophisticated three.js logo animation for creative professionals
 * Features: Subtle rotation, responsive performance, purposeful motion
 */

'use client'

import React, { useRef, useEffect, useState } from 'react'

interface Logo3DProps {
  className?: string
  autoRotate?: boolean
  intensity?: number
}

export default function Logo3D({ 
  className = '', 
  autoRotate = true, 
  intensity = 0.5 
}: Logo3DProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    if (!autoRotate) return

    const interval = setInterval(() => {
      setRotation(prev => prev + (2 * intensity))
    }, 50)

    return () => clearInterval(interval)
  }, [autoRotate, intensity])

  return (
    <div 
      className={`relative transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: '200px'
      }}
    >
      <div 
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `rotateY(${rotation}deg) rotateX(${Math.sin(rotation * 0.01) * 10}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Simplified 3D-looking logo using CSS */}
        <div className="relative">
          {/* Main logo structure */}
          <div className="flex items-center justify-center space-x-4">
            {/* Left pillar */}
            <div 
              className="w-8 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg"
              style={{
                transform: 'perspective(100px) rotateY(-15deg)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
              }}
            />
            
            {/* Center connector */}
            <div 
              className="w-6 h-16 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-lg shadow-lg"
              style={{
                transform: 'perspective(100px) rotateZ(45deg) rotateY(0deg)',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)'
              }}
            />
            
            {/* Right pillar */}
            <div 
              className="w-8 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg"
              style={{
                transform: 'perspective(100px) rotateY(15deg)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
              }}
            />
          </div>
          
          {/* Glow effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
            style={{
              transform: 'scale(1.5)',
              zIndex: -1
            }}
          />
        </div>
      </div>
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}