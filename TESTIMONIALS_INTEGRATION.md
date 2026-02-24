# Testimonials Component Integration Guide

## Overview
This guide explains how to use the newly integrated testimonials components in your company formation website.

## Components Created

### 1. `components/ui/testimonial-card.tsx`
- Individual testimonial card component
- Supports clickable links (optional)
- Responsive design with hover effects
- Uses shadcn Avatar component

### 2. `components/ui/avatar.tsx`
- Avatar component using Radix UI primitives
- Supports fallback states
- Fully accessible

### 3. `components/ui/testimonials-with-marquee.tsx`
- Main testimonials section with infinite marquee animation
- Responsive design
- Hover to pause animation
- Gradient fade effects on edges

### 4. `components/ui/company-testimonials.tsx`
- Pre-configured testimonials for your company formation business
- Industry-specific content
- Ready to use out of the box

## Usage Examples

### Basic Usage
```tsx
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "John Doe",
      handle: "CEO, Company Name",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Your testimonial text here...",
    href: "https://example.com" // Optional
  }
]

export default function MyPage() {
  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="Trusted by entrepreneurs worldwide"
      testimonials={testimonials}
    />
  )
}
```

### Using Pre-configured Company Testimonials
```tsx
import { CompanyTestimonialsSection } from "@/components/ui/company-testimonials"

export default function MyPage() {
  return <CompanyTestimonialsSection />
}
```

## Integration Options

### Option 1: Replace Existing Component
Replace your current `TestimonialsMarquee.tsx` with the new component:

```tsx
// In your page or layout
import { CompanyTestimonialsSection } from "@/components/ui/company-testimonials"

// Replace the old import
// import TestimonialsMarquee from "@/components/TestimonialsMarquee"
```

### Option 2: Use Both Components
Keep both components and use them in different sections:

```tsx
import TestimonialsMarquee from "@/components/TestimonialsMarquee"
import { CompanyTestimonialsSection } from "@/components/ui/company-testimonials"

export default function MyPage() {
  return (
    <>
      <TestimonialsMarquee /> {/* Old component */}
      <CompanyTestimonialsSection /> {/* New component */}
    </>
  )
}
```

## Customization

### Styling
The components use Tailwind CSS classes and can be customized by:
- Passing `className` prop for additional styles
- Modifying the base component styles
- Using CSS custom properties for animation duration

### Content
- Update testimonials in `company-testimonials.tsx`
- Modify avatar images (currently using Unsplash stock photos)
- Adjust text content and company names

### Animation
- Animation duration: controlled by `--duration` CSS variable (default: 40s)
- Gap between cards: controlled by `--gap` CSS variable (default: 1rem)
- Hover to pause: enabled by default

## Dependencies Installed
- `@radix-ui/react-avatar` - For avatar components

## Tailwind Configuration Updates
Added to `tailwind.config.ts`:
- `max-w-container` utility (1280px)
- `animate-marquee` animation
- `marquee` keyframes for infinite scroll

## Best Practices
1. **Image Optimization**: Replace Unsplash URLs with optimized local images
2. **Accessibility**: All components include proper ARIA labels and keyboard navigation
3. **Performance**: Components use CSS animations instead of JavaScript for better performance
4. **Responsive**: Mobile-first design with responsive breakpoints

## Troubleshooting

### Common Issues
1. **Animation not working**: Check if Tailwind config is properly loaded
2. **Images not loading**: Verify image URLs or replace with local assets
3. **Styling conflicts**: Ensure Tailwind CSS is properly configured

### Performance Tips
1. Use optimized images (WebP format recommended)
2. Consider lazy loading for testimonials below the fold
3. Monitor animation performance on mobile devices
