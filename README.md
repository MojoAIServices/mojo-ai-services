# 🌟 Mojo AI Services - Aurora Homepage

> **Where AI adapts, energy saves, and your voice leads.**

A cutting-edge Aurora-themed homepage built with Next.js, featuring dynamic animations, OpenAI-style sidebar navigation, and glassmorphism effects. Inspired by A24 Films, Play.ai, OpenAI, and Unity design aesthetics.

![Mojo AI Services](./public/preview.png)

## ✨ Features

### 🎨 **Design & Aesthetics**
- **Aurora Background Effects** - Dynamic animated gradient orbs with smooth blend modes
- **Glassmorphism UI** - Modern glass-like components with backdrop blur
- **OpenAI-Style Sidebar** - Collapsible navigation inspired by ChatGPT interface
- **Interactive Text Animations** - Hover effects using Animate.css and Hover.css
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### 🚀 **Performance & Security**
- **Next.js 14** with App Router and TypeScript
- **Security Headers** - OWASP compliant security implementation
- **Optimized Animations** - Hardware-accelerated CSS animations
- **Accessibility Support** - ARIA labels, keyboard navigation, reduced motion
- **SEO Optimized** - Structured data and meta tags

### 🎭 **Animation Libraries**
- ✅ **Aurora.css** - Custom aurora background effects
- ✅ **Animate.css** - Text entry animations (fadeIn, bounceInUp, lightSpeedIn, rubberBand)
- ✅ **Hover.css** - Button and link hover effects (grow, underline-from-center)
- ✅ **Framer Motion** - Advanced component animations

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mojo-ai-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Copy the logo file**
   ```bash
   # Copy your Mojo_Logo_No_Background.png to public/
   cp themes/mojo-child/Mojo_Logo_No_Background.png public/logo.png
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📐 Project Structure

```
mojo-ai-services/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Aurora effects
│   ├── layout.tsx         # Root layout with sidebar
│   └── page.tsx           # Homepage component
├── components/            # Reusable components
│   ├── AuroraBackground.tsx  # Dynamic aurora effects
│   └── Sidebar.tsx        # OpenAI-style navigation
├── public/               # Static assets
│   └── logo.png          # Mojo AI logo
├── tailwind.config.js    # Tailwind with custom Aurora theme
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Color Palette

The design uses colors extracted from the Mojo AI logo:

```css
/* Primary Brand Colors */
--mojo-400: #38bdf8    /* Bright cyan (logo primary) */
--mojo-500: #0ea5e9    /* Ocean blue (logo secondary) */
--mojo-600: #0284c7    /* Deep blue */

/* Aurora Gradient Colors */
--aurora-cyan: #00ffff     /* Electric cyan */
--aurora-blue: #0080ff     /* Electric blue */
--aurora-purple: #8000ff   /* Electric purple */
--aurora-pink: #ff00ff     /* Electric magenta */
--aurora-teal: #00ff80     /* Electric teal */
```

## 🧭 Navigation Structure

The sidebar includes the following sections:

- **🧠 Consulting** - AI integration and strategy consulting
- **🤖 SHELBY** - Voice-controlled smart hub (Coming Soon)
- **☀️ SUNNY** - Energy optimization AI (Coming Soon)
- **🛠️ IT Services** - Technical support and solutions
- **👤 My Account** - Account settings and preferences

## 🎬 Animation Details

### Text Animations
- **fadeIn** - Smooth opacity transitions
- **fadeInUp** - Slide up with fade effect
- **bounceInUp** - Elastic bounce entrance
- **lightSpeedIn** - Fast slide with skew
- **rubberBand** - Elastic scale effect

### Hover Effects
- **grow** - Scale increase on hover
- **underline-from-center** - Animated underline expansion
- **pulse** - Rhythmic opacity animation
- **bounce-gentle** - Subtle vertical movement

### Aurora Background
- **aurora-1/2/3** - Multi-layered rotating gradient orbs
- **Blend modes** - Screen blending for ethereal effects
- **Performance optimized** - GPU-accelerated transforms

## 🔧 Customization

### Updating Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  mojo: {
    // Your custom brand colors
  },
  aurora: {
    // Your custom aurora colors
  }
}
```

### Adding New Animations
Add custom animations in `app/globals.css`:

```css
@keyframes yourAnimation {
  /* Your keyframes */
}

.animate-yourAnimation {
  animation: yourAnimation 1s ease-in-out;
}
```

## 🔒 Security Features

- **Content Security Policy** - Prevents XSS attacks
- **Security Headers** - X-Frame-Options, X-Content-Type-Options
- **Input Validation** - All user inputs sanitized
- **HTTPS Enforcement** - Strict Transport Security
- **Error Handling** - Graceful degradation

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Sidebar**: Collapses on mobile, expandable on desktop

## 🚀 Performance Optimizations

- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Font Loading** - Optimized Google Fonts loading
- **CSS Optimization** - Tailwind CSS purging
- **Animation Performance** - Hardware acceleration

## 🎯 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📄 License

Private license - Mojo AI Services

## 🤝 Contributing

This is a private project for Mojo AI Services. For questions or support, please contact the development team.

---

**Built with ❤️ for the future of home intelligence** 