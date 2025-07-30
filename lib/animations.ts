/**
 * GSAP Animation Utilities
 * 
 * Sophisticated animations for creative professionals
 * Features: ScrollTrigger reveals, staggered animations, purposeful motion
 */

import { gsap } from 'gsap'

// ScrollTrigger will be dynamically imported when needed
let ScrollTrigger: any = null

// Initialize ScrollTrigger
const initScrollTrigger = async () => {
  if (typeof window !== 'undefined' && !ScrollTrigger) {
    const ScrollTriggerModule = await import('gsap/ScrollTrigger')
    ScrollTrigger = ScrollTriggerModule.ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
  }
  return ScrollTrigger
}

// Animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    page: 0.8
  },
  ease: {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    inOut: 'power2.inOut'
  },
  stagger: {
    text: 0.2,
    cards: 0.15,
    items: 0.1
  }
}

/**
 * Fade in animation with stagger
 */
export const fadeInStagger = (
  elements: string | Element | Element[],
  options: {
    duration?: number
    stagger?: number
    delay?: number
    y?: number
    ease?: string
  } = {}
) => {
  const {
    duration = ANIMATION_CONFIG.duration.normal,
    stagger = ANIMATION_CONFIG.stagger.text,
    delay = 0,
    y = 30,
    ease = ANIMATION_CONFIG.ease.smooth
  } = options

  return gsap.fromTo(elements, 
    {
      opacity: 0,
      y: y,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      delay,
      ease
    }
  )
}

/**
 * Scroll-triggered reveal animation
 */
export const scrollReveal = async (
  elements: string | Element | Element[],
  options: {
    trigger?: string | Element
    start?: string
    end?: string
    scrub?: boolean | number
    duration?: number
    stagger?: number
    y?: number
    scale?: number
  } = {}
) => {
  const ST = await initScrollTrigger()
  if (!ST) return null

  const {
    trigger,
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    duration = ANIMATION_CONFIG.duration.normal,
    stagger = ANIMATION_CONFIG.stagger.text,
    y = 50,
    scale = 0.9
  } = options

  return gsap.fromTo(elements,
    {
      opacity: 0,
      y: y,
      scale: scale
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: {
        trigger: trigger || elements,
        start,
        end,
        scrub,
        toggleActions: 'play none none reverse'
      }
    }
  )
}

/**
 * Page transition animations
 */
export const pageTransitions = {
  fadeOut: (element: Element) => {
    return gsap.to(element, {
      opacity: 0,
      scale: 0.95,
      duration: ANIMATION_CONFIG.duration.page / 2,
      ease: ANIMATION_CONFIG.ease.inOut
    })
  },

  fadeIn: (element: Element) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        scale: 1.05
      },
      {
        opacity: 1,
        scale: 1,
        duration: ANIMATION_CONFIG.duration.page / 2,
        ease: ANIMATION_CONFIG.ease.inOut,
        delay: ANIMATION_CONFIG.duration.page / 2
      }
    )
  }
}

/**
 * Micro-interactions
 */
export const microInteractions = {
  // Button hover effect
  buttonHover: (element: Element) => {
    const tl = gsap.timeline({ paused: true })
    
    tl.to(element, {
      scale: 1.05,
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.ease.smooth
    })

    return {
      play: () => tl.play(),
      reverse: () => tl.reverse()
    }
  },

  // Card lift effect
  cardLift: (element: Element) => {
    const tl = gsap.timeline({ paused: true })
    
    tl.to(element, {
      y: -8,
      scale: 1.02,
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.ease.smooth
    })

    return {
      play: () => tl.play(),
      reverse: () => tl.reverse()
    }
  },

  // Text reveal effect
  textReveal: (element: Element) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        y: 20,
        rotationX: 90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.smooth
      }
    )
  },

  // Logo pulse effect
  logoPulse: (element: Element) => {
    return gsap.to(element, {
      scale: 1.1,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
  }
}

/**
 * Initialize scroll-triggered animations for a page
 */
export const initPageAnimations = async () => {
  const ST = await initScrollTrigger()
  if (!ST) return

  // Refresh ScrollTrigger on page load
  ST.refresh()

  // Set up common scroll reveals
  const headings = document.querySelectorAll('h1, h2, h3, h4')
  const paragraphs = document.querySelectorAll('p')
  const buttons = document.querySelectorAll('button, .btn')
  const cards = document.querySelectorAll('.card, .feature-card')

  if (headings.length) {
    await scrollReveal(headings, {
      stagger: ANIMATION_CONFIG.stagger.text,
      y: 30
    })
  }

  if (paragraphs.length) {
    await scrollReveal(paragraphs, {
      stagger: ANIMATION_CONFIG.stagger.items,
      y: 20,
      duration: ANIMATION_CONFIG.duration.slow
    })
  }

  if (buttons.length) {
    await scrollReveal(buttons, {
      stagger: ANIMATION_CONFIG.stagger.items,
      scale: 0.8
    })
  }

  if (cards.length) {
    await scrollReveal(cards, {
      stagger: ANIMATION_CONFIG.stagger.cards,
      y: 40,
      scale: 0.9
    })
  }
}

/**
 * Clean up animations and ScrollTrigger instances
 */
export const cleanupAnimations = () => {
  if (ScrollTrigger) {
    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
  }
  gsap.killTweensOf('*')
}