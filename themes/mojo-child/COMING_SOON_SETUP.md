# Coming Soon Pages Setup Guide

## 📋 Files Created

### Templates
- `page-shelby.php` - Shelby coming soon page template
- `page-sunny.php` - Sunny coming soon page template

### Styles  
- `assets/css/pages.css` - Styling for both coming soon pages

### Assets
- `assets/images/` - Directory for construction GIF
- `assets/images/placeholder-construction.txt` - Instructions for GIF replacement

### Functions
- Added `mojo_child_enqueue_pages_styles()` to `functions.php`

## 🚀 WordPress Admin Setup

### Step 1: Create Pages
1. Go to **Pages > Add New** in WordPress admin
2. Create a page titled "Shelby"
3. In **Page Attributes**, select **Template: Shelby Page**
4. Publish the page

5. Repeat for "Sunny":
   - Create page titled "Sunny" 
   - Select **Template: Sunny Page**
   - Publish the page

### Step 2: Add Construction GIF
1. Find a suitable construction stick-figure GIF (under 200KB)
2. Upload it to `/wp-content/themes/mojo-child/assets/images/`
3. Rename the file to: `stick-figure-construction.gif`
4. Delete the `placeholder-construction.txt` file

## ✨ Features

### Design
- Centered "Great Things Coming Soon..." message
- Glassmorphism container with backdrop blur
- Animated construction GIF with float effect
- Responsive design for all devices

### Animations
- **Title**: Glowing pulse effect
- **GIF**: Float and bounce animation
- **Loading**: Shimmer effect while loading
- **Hover**: Scale and glow on interaction

### Accessibility  
- Reduced motion support
- Screen reader friendly alt text
- Keyboard navigation support
- Print-friendly styles

### Performance
- Lazy loading for GIF
- Conditional CSS loading (only on template pages)
- Optimized animations
- Cache busting for CSS updates

## 🔧 Customization

### Colors
Edit `assets/css/pages.css`:
- `#22d3ee` - Primary cyan color
- `rgba(255, 255, 255, 0.8)` - Subtitle color
- Background gradients in `.coming-soon-page`

### Animation Speed
- `glow-pulse`: 3s (title glow)
- `float-bounce`: 4s (GIF animation)  
- `loading-shimmer`: 2s (loading effect)

### Text Content
Edit the PHP templates to change:
- Main title text
- Subtitle descriptions
- Alt text for accessibility

## 📱 Responsive Breakpoints

- **Desktop**: Full size (250px GIF)
- **Tablet** (768px): Medium size (responsive)  
- **Mobile** (480px): Small size (120px GIF)

## 🛡️ Security Features

- Escaped output with `esc_url()`
- Proper enqueuing (no inline styles)
- Template security headers
- Logging for debugging

## 🧪 Testing Checklist

- [ ] Pages display "Great Things Coming Soon..." centered
- [ ] Construction GIF loads and animates
- [ ] Responsive design works on mobile/tablet
- [ ] Animations respect `prefers-reduced-motion`
- [ ] CSS only loads on template pages
- [ ] Print styles hide animations
- [ ] Screen readers can access content 