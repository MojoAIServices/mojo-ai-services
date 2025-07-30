/**
 * Sidebar Navigation Component
 * 
 * OpenAI ChatGPT-inspired sidebar with animated navigation tabs
 * Features: Glassmorphism, hover animations, responsive design
 * 
 * Navigation Items:
 * - Consulting
 * - SHELBY (Smart Hub)
 * - SUNNY (Energy AI)
 * - IT Services
 * - My Account
 */

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// =============================================================================
// NAVIGATION ITEM INTERFACE
// =============================================================================

interface NavItem {
  id: string
  label: string
  href: string
  icon: string
  description: string
  isActive?: boolean
}

// =============================================================================
// NAVIGATION DATA
// =============================================================================

const navigationItems: NavItem[] = [
  {
    id: 'consulting',
    label: 'Consulting',
    href: '/consulting',
    icon: '🧠',
    description: 'Gain the AI Edge',
  },
  {
    id: 'shelby',
    label: 'SHELBY',
    href: '/shelby',
    icon: '🤖',
    description: 'Effortless Home Optimization',
  },
  {
    id: 'sunny',
    label: 'SUNNY',
    href: '/sunny',
    icon: '☀️',
    description: 'Your Personal AI Butler',
  },
  {
    id: 'it-services',
    label: 'IT Services',
    href: '/it-services',
    icon: '🛠️',
    description: 'Technical support and solutions',
  },
  {
    id: 'account',
    label: 'My Account',
    href: '/account',
    icon: '👤',
    description: 'Account settings and preferences',
  },
]

// =============================================================================
// SIDEBAR COMPONENT
// =============================================================================

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('consulting')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // New state for mobile sidebar
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (mobile) {
        setIsCollapsed(true)
        setIsOpen(false) // Close mobile sidebar on mobile
      } else {
        // Auto-expand on desktop
        setIsCollapsed(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Desktop Sidebar */}
      <div 
        className={`
          fixed 
          top-0 
          left-0 
          h-screen 
          bg-dark-950/95 
          backdrop-blur-xl 
          border-r 
          border-white/10 
          transition-all 
          duration-300 
          z-40
          ${isCollapsed ? 'w-16' : 'w-64 lg:w-64 xl:w-72 2xl:w-80'}
          ${isMobile ? 'hidden' : 'block'}
        `}
      >
        {/* =============================================================== */}
        {/* SIDEBAR HEADER                                                  */}
        {/* =============================================================== */}
        <div className="
          p-3
          sm:p-4
          border-b 
          border-white/10
        ">
          
          {/* Logo and Brand */}
          <Link 
            href="/"
            className={`
              flex 
              items-center 
              gap-3
              text-decoration-none
              transition-all
              duration-300
              glow-on-hover
              ${isCollapsed ? 'justify-center' : ''}
            `}
            style={{ background: 'transparent' }}
          >
            
            {/* Logo Image */}
            <Image
              src="/MojoLogo.png"
              alt="Mojo AI Services Logo"
              width={32}
              height={32}
              className="flex-shrink-0 image-responsive w-8 h-8 sm:w-10 sm:h-10"
              style={{ background: 'transparent' }}
              priority
              sizes="(max-width: 640px) 32px, 40px"
            />
            
            {/* Brand Text */}
            {!isCollapsed && (
              <span className="
                text-base
                sm:text-lg 
                font-semibold 
                text-white
                text-ellipsis
                whitespace-nowrap
                overflow-hidden
              ">
                Mojo AI Services
              </span>
            )}
          </Link>
          
          {/* Collapse Toggle (Desktop Only) */}
          {!isMobile && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="
                absolute 
                -right-3 
                top-4
                sm:top-6 
                w-6 
                h-6 
                bg-dark-800/90 
                hover:bg-dark-700 
                border 
                border-white/20 
                hover:border-mojo-400/50 
                rounded-full 
                flex 
                items-center 
                justify-center 
                text-xs 
                text-white/80 
                hover:text-white 
                transition-all 
                duration-200
                hover:scale-110
                glow-on-hover
              "
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? '→' : '←'}
            </button>
          )}
        </div>

        {/* =============================================================== */}
        {/* NAVIGATION MENU                                                 */}
        {/* =============================================================== */}
        <nav className="p-3 sm:p-4 space-y-2 sm:space-y-3 overflow-y-auto flex-1" role="menubar">
          
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${navigationItems.indexOf(item) * 100}ms` }}
            >
              
              {/* Navigation Link */}
              <Link
                href={item.href}
                className={`
                  group 
                  relative 
                  flex 
                  items-center 
                  gap-2
                  sm:gap-3
                  p-2
                  sm:p-3
                  rounded-xl 
                  transition-all 
                  duration-200
                  interactive-text
                  glow-on-hover
                  ${activeItem === item.id 
                    ? 'bg-mojo-500/20 border border-mojo-400/30 text-mojo-300' 
                    : 'hover:bg-white/5 hover:border-white/10 border border-transparent'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
                onClick={() => setActiveItem(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                role="menuitem"
                aria-current={activeItem === item.id ? 'page' : undefined}
                title={isCollapsed ? `${item.label}: ${item.description}` : undefined}
              >
                
                {/* Hover Effect Overlay */}
                {hoveredItem === item.id && (
                  <div className="
                    absolute 
                    inset-0 
                    bg-gradient-to-r 
                    from-aurora-cyan/10 
                    to-aurora-blue/10 
                    rounded-xl 
                    animate-pulse
                  " />
                )}
                
                {/* Icon */}
                <span 
                  className="
                    text-lg
                    sm:text-xl 
                    group-hover:animate-bounce-gentle
                    flex-shrink-0
                    relative z-10
                  "
                  role="img"
                  aria-label={`${item.label} icon`}
                >
                  {item.icon}
                </span>
                
                {/* Label and Description */}
                {!isCollapsed && (
                  <div className="
                    flex-1 
                    min-w-0
                    animate-fadeIn
                    relative z-10
                  ">
                    <div className="
                      font-medium 
                      text-sm 
                      text-white 
                      group-hover:text-aurora-cyan
                      text-ellipsis
                      whitespace-nowrap
                      overflow-hidden
                    ">
                      {item.label}
                    </div>
                    <div className="
                      text-xs 
                      text-white/60 
                      group-hover:text-white/80
                      text-ellipsis
                      whitespace-nowrap
                      overflow-hidden
                    ">
                      {item.description}
                    </div>
                  </div>
                )}
              </Link>
              
            </div>
          ))}
          
        </nav>
        
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && isOpen && (
        <div
          className="
            fixed 
            inset-0 
            bg-black/50 
            backdrop-blur-sm 
            z-30
            animate-fadeIn
          "
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div 
          className={`
            fixed 
            top-0 
            left-0 
            h-screen 
            w-4/5
            max-w-sm
            bg-dark-950/98 
            backdrop-blur-xl 
            border-r 
            border-white/10 
            transition-transform 
            duration-300 
            z-40
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {/* Mobile Header */}
          <div className="
            p-4
            border-b 
            border-white/10
            flex
            items-center
            justify-between
          ">
            
            {/* Logo and Brand */}
            <Link 
              href="/"
              className="
                flex 
                items-center 
                gap-3
                text-decoration-none
                glow-on-hover
              "
              style={{ background: 'transparent' }}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/MojoLogo.png"
                alt="Mojo AI Services Logo"
                width={32}
                height={32}
                className="image-responsive w-8 h-8"
                style={{ background: 'transparent' }}
                priority
              />
              <span className="
                text-lg 
                font-semibold 
                text-white
              ">
                Mojo AI Services
              </span>
            </Link>
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                w-8 
                h-8 
                bg-dark-800/90 
                hover:bg-dark-700 
                border 
                border-white/20 
                hover:border-mojo-400/50 
                rounded-lg 
                flex 
                items-center 
                justify-center 
                text-white/80 
                hover:text-white 
                transition-all 
                duration-200
                glow-on-hover
              "
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="p-4 space-y-2 overflow-y-auto flex-1" role="menubar">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  group 
                  relative 
                  flex 
                  items-center 
                  gap-3
                  p-4
                  rounded-xl 
                  transition-all 
                  duration-200
                  glow-on-hover
                  ${activeItem === item.id 
                    ? 'bg-mojo-500/20 border border-mojo-400/30 text-mojo-300' 
                    : 'hover:bg-white/5 hover:border-white/10 border border-transparent'
                  }
                `}
                onClick={() => {
                  setActiveItem(item.id)
                  setIsOpen(false)
                }}
                role="menuitem"
                aria-current={activeItem === item.id ? 'page' : undefined}
              >
                
                {/* Icon */}
                <span 
                  className="
                    text-xl 
                    group-hover:animate-bounce-gentle
                    flex-shrink-0
                  "
                  role="img"
                  aria-label={`${item.label} icon`}
                >
                  {item.icon}
                </span>
                
                {/* Label and Description */}
                <div className="flex-1 min-w-0">
                  <div className="
                    font-medium 
                    text-sm 
                    text-white 
                    group-hover:text-aurora-cyan
                    text-ellipsis
                    whitespace-nowrap
                    overflow-hidden
                  ">
                    {item.label}
                  </div>
                  <div className="
                    text-xs 
                    text-white/60 
                    group-hover:text-white/80
                    text-ellipsis
                    whitespace-nowrap
                    overflow-hidden
                  ">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed 
            top-4
            left-4
            w-10 
            h-10
            sm:w-12
            sm:h-12
            bg-dark-950/90 
            hover:bg-dark-800 
            backdrop-blur-lg 
            border 
            border-white/20 
            hover:border-mojo-400/50 
            rounded-xl 
            flex 
            items-center 
            justify-center 
            text-white/80 
            hover:text-white 
            transition-all 
            duration-200 
            z-50
            hover:scale-110
            glow-on-hover
          "
          aria-label="Open navigation menu"
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      )}
    </>
  )
}

export default Sidebar 