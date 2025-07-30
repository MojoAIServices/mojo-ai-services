/**
 * Custom Cursor Component
 * 
 * Creates an interactive custom cursor with aurora effects
 * Features: Smooth tracking, glow effects, interactive states
 */

'use client'

import React, { useEffect, useState } from 'react'

// =============================================================================
// CUSTOM CURSOR COMPONENT
// =============================================================================

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, .interactive-text, .glow-on-hover')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main Cursor */}
      <div 
        className="
          fixed 
          top-0 
          left-0 
          pointer-events-none 
          z-[9999]
          transition-transform 
          duration-100 
          ease-out
        "
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      >
        <div className={`
          w-4 
          h-4 
          rounded-full 
          border-2 
          border-aurora-cyan/60
          bg-aurora-cyan/20
          backdrop-blur-sm
          transition-all 
          duration-200
          ${isHovering ? 'scale-150 border-aurora-cyan bg-aurora-cyan/40' : 'scale-100'}
        `} />
      </div>

      {/* Cursor Trail */}
      <div 
        className="
          fixed 
          top-0 
          left-0 
          pointer-events-none 
          z-[9998]
          transition-transform 
          duration-200 
          ease-out
        "
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      >
        <div className={`
          w-2 
          h-2 
          rounded-full 
          bg-aurora-cyan/40
          transition-all 
          duration-300
          ${isHovering ? 'scale-200 bg-aurora-cyan/60' : 'scale-100'}
        `} />
      </div>

      {/* Energy Pulse Ring */}
      {isHovering && (
        <div 
          className="
            fixed 
            top-0 
            left-0 
            pointer-events-none 
            z-[9997]
            transition-transform 
            duration-300 
            ease-out
          "
          style={{
            transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          }}
        >
          <div className="
            w-8 
            h-8 
            rounded-full 
            border 
            border-aurora-cyan/30 
            animate-pulse-slow
          " />
        </div>
      )}
    </>
  )
}

export default CustomCursor 