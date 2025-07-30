/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Font families
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      
      // Responsive spacing
      spacing: {
        'sidebar': '16rem',
        'sidebar-lg': '18rem', 
        'sidebar-xl': '20rem',
        'xs': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'sm': 'clamp(0.5rem, 1vw, 1rem)',
        'md': 'clamp(1rem, 2vw, 2rem)',
        'lg': 'clamp(1.5rem, 3vw, 3rem)',
        'xl': 'clamp(2rem, 4vw, 4rem)',
        'xxl': 'clamp(3rem, 6vw, 6rem)',
      },
      
      // Enhanced width utilities
      width: {
        'sidebar': '16rem',
        'sidebar-lg': '18rem',
        'sidebar-xl': '20rem',
      },
      
      // Margin left utilities for main content
      margin: {
        'sidebar': '16rem',
        'sidebar-lg': '18rem', 
        'sidebar-xl': '20rem',
      },
      
      // Color palette
      colors: {
        // Dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        // Mojo brand colors
        mojo: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        
        // Aurora effect colors
        aurora: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          teal: '#14b8a6',
        },
      },
      
      // Custom animations
      animation: {
        'aurora-1': 'aurora-float-smooth 12s ease-in-out infinite',
        'aurora-2': 'aurora-float-smooth 15s ease-in-out infinite -5s',
        'aurora-3': 'aurora-float-smooth 18s ease-in-out infinite -10s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 3s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'bounce-in-up': 'bounceInUp 1s ease-out',
        'light-speed-in': 'lightSpeedIn 0.8s ease-out',
        'rubber-band': 'rubberBand 1s ease-out',
      },
      
      // Custom keyframes
      keyframes: {
        'aurora-float-smooth': {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg) scale(1)',
          },
          '33%': { 
            transform: 'translateY(clamp(-1vh, -2vh, -3vh)) rotate(1deg) scale(1.05)',
          },
          '66%': { 
            transform: 'translateY(clamp(0.5vh, 1vh, 2vh)) rotate(-1deg) scale(0.95)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
        'gradient-rotate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      
      // Backdrop blur utilities
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      
      // Box shadow enhancements
      boxShadow: {
        'aurora': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glow': '0 0 30px rgba(34, 211, 238, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      
      // Responsive breakpoints
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
} 