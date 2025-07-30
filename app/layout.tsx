/**
 * Mojo AI Services - Root Layout
 * 
 * Aurora-themed layout with sidebar navigation inspired by OpenAI ChatGPT
 * Features: Dynamic animations, glassmorphism, responsive design
 * 
 * @security All components include proper security measures
 * @accessibility Full ARIA support and keyboard navigation
 */

import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import AuroraBackground from '@/components/AuroraBackground'
import CustomCursor from '@/components/CustomCursor'

// =============================================================================
// FONT CONFIGURATION
// =============================================================================

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

// =============================================================================
// METADATA CONFIGURATION
// =============================================================================

export const metadata: Metadata = {
  metadataBase: new URL('https://mojoaiservices.com'),
  title: {
    default: 'Mojo AI Services - Future of Home Intelligence',
    template: '%s | Mojo AI Services'
  },
  description: 'Dynamically shaping your best life. Where AI adapts, energy saves, and your voice leads. Cutting-edge smart home AI systems (Shelby + Sunny) and IT consulting services.',
  keywords: [
    'AI services',
    'smart home',
    'home automation',
    'energy optimization',
    'voice control',
    'IT consulting',
    'Shelby AI',
    'Sunny AI',
    'artificial intelligence'
  ],
  authors: [{ name: 'Mojo AI Services' }],
  creator: 'Mojo AI Services',
  publisher: 'Mojo AI Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mojoaiservices.com',
    title: 'Mojo AI Services - Future of Home Intelligence',
    description: 'Where AI adapts, energy saves, and your voice leads.',
    siteName: 'Mojo AI Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mojo AI Services - Smart Home Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mojo AI Services - Future of Home Intelligence',
    description: 'Where AI adapts, energy saves, and your voice leads.',
    images: ['/og-image.jpg'],
  },
}

// =============================================================================
// VIEWPORT CONFIGURATION  
// =============================================================================

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#38bdf8' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

// =============================================================================
// ROOT LAYOUT COMPONENT
// =============================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Enhanced Viewport for Better Scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      
      <body 
        className={`
          ${inter.className} 
          min-h-screen 
          bg-gradient-to-br 
          from-dark-950 
          via-dark-900 
          to-dark-800 
          text-white 
          overflow-x-hidden
          antialiased
          font-inter
        `}
        suppressHydrationWarning
      >
        {/* =================================================================== */}
        {/* AURORA BACKGROUND SYSTEM                                            */}
        {/* =================================================================== */}
        <AuroraBackground />
        
        {/* =================================================================== */}
        {/* CUSTOM CURSOR                                                       */}
        {/* =================================================================== */}
        <CustomCursor />
        
        {/* =================================================================== */}
        {/* MAIN APPLICATION LAYOUT                                             */}
        {/* =================================================================== */}
        <div className="relative z-10 flex min-h-screen">
          
          {/* =============================================================== */}
          {/* SIDEBAR NAVIGATION (OpenAI Style)                              */}
          {/* =============================================================== */}
          <Sidebar />
          
          {/* =============================================================== */}
          {/* MAIN CONTENT AREA - RESPONSIVE                                  */}
          {/* =============================================================== */}
          <main 
            className="
              flex-1 
              min-h-screen
              ml-0 
              lg:ml-64 
              xl:ml-72
              2xl:ml-80
              transition-all 
              duration-300 
              ease-in-out
              relative
              z-20
            "
            role="main"
            aria-label="Main content"
          >
            {/* Content Wrapper with Enhanced Glassmorphism */}
            <div className="
              min-h-screen 
              backdrop-blur-sm 
              bg-black/10
              border-l 
              border-white/5
              lg:border-l
              transition-all
              duration-300
            ">
              <div className="
                container-responsive
                max-w-none
                p-4
                sm:p-6
                md:p-8
                lg:p-10
                xl:p-12
              ">
                {children}
              </div>
            </div>
          </main>
          
        </div>
        
        {/* =================================================================== */}
        {/* ACCESSIBILITY SKIP LINKS                                            */}
        {/* =================================================================== */}
        <a 
          href="#main-content" 
          className="
            sr-only 
            focus:not-sr-only 
            focus:absolute 
            focus:top-4 
            focus:left-4 
            focus:z-50 
            focus:px-4 
            focus:py-2 
            focus:bg-mojo-500 
            focus:text-white 
            focus:rounded-md
            focus:outline-none
            focus:ring-2
            focus:ring-mojo-400
          "
        >
          Skip to main content
        </a>
        
        {/* =================================================================== */}
        {/* PERFORMANCE MONITORING (Development Only)                           */}
        {/* =================================================================== */}
        {process.env.NODE_ENV === 'development' && (
          <div 
            id="performance-monitor" 
            className="
              fixed 
              bottom-4 
              right-4 
              z-50 
              text-xs 
              text-white/50 
              bg-black/20 
              backdrop-blur-sm 
              px-2 
              py-1 
              rounded
              transition-all
              duration-300
            "
            aria-hidden="true"
          >
            Dev Mode
          </div>
        )}
        
      </body>
    </html>
  )
} 