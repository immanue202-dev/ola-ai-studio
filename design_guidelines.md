# Ola AI Studio - Design Guidelines

## Design Approach
**Reference-Based Glassmorphism Approach**: Premium glass-style portfolio website drawing inspiration from modern glassmorphic designs like Apple's iOS interfaces and contemporary creative agency portfolios. Emphasis on elegance, futurism, and immersive visual experience.

## Brand Identity
- **Name**: Ola AI Studio (Division of Ola Digital Concepts)
- **Tagline**: "Where Creativity Meets Elegance"
- **Personality**: Premium, futuristic, artistic, minimalist, immersive

## Color Palette

### Light Mode
- **Primary Purple**: 270 70% 60% (vibrant purple for accents, CTAs)
- **Purple Glow**: 270 80% 70% (soft glow effects)
- **Background**: 0 0% 98% (near-white)
- **Glass Overlay**: 0 0% 100% with 20% opacity
- **Text Primary**: 0 0% 10%
- **Text Secondary**: 0 0% 40%

### Dark Mode
- **Primary Purple**: 270 75% 65% (brighter purple for dark backgrounds)
- **Purple Glow**: 270 80% 60%
- **Background**: 250 25% 8% (deep purple-tinted dark)
- **Glass Overlay**: 250 20% 15% with 30% opacity
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 0 0% 70%

## Typography
- **Font Family**: Inter or Poppins (clean, modern sans-serif)
- **Headings**: 
  - H1: 3.5rem/4rem (hero), bold
  - H2: 2.5rem/3rem (page headers), semibold
  - H3: 1.75rem/2rem (section titles), semibold
- **Body**: 1rem/1.5rem, regular weight
- **Buttons/Links**: 1rem, medium weight

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm (p-4, m-6, h-8, py-12, etc.)
- Container: max-w-7xl centered
- Section Padding: py-20 (desktop), py-12 (mobile)
- Grid Gaps: gap-6 to gap-8

## Glassmorphism Effects
- **Glass Containers**: 
  - Backdrop blur: 10-16px
  - Background: semi-transparent white/dark overlay
  - Border: 1px solid rgba(255,255,255,0.2) light mode / rgba(255,255,255,0.1) dark mode
  - Border radius: 16-24px
  - Subtle drop shadow
- **Glow Effects**: Purple box-shadow on hover (0 0 20px purple with 40% opacity)
- **Transitions**: All state changes use 0.4s ease timing

## Component Library

### Navigation Bar
- Translucent glass bar fixed at top
- Centered navigation links with smooth hover effects
- Light/Dark toggle (☀️/🌙 icons) on right
- Logo/brand name on left
- Mobile: Hamburger menu with glass dropdown

### Hero Section (Home Page)
- Full-height section (min-h-screen)
- Large animated heading: "Where Creativity Meets Elegance"
- Subtle floating animation on hero text (3-4s loop, gentle vertical motion)
- Glass CTA button: "Let's Connect" with purple glow on hover
- Consistent Unsplash background image showing creative/artistic theme with purple tones

### Service Cards (Services Page)
- Grid layout: 2 columns desktop, 1 column mobile
- Glass cards with:
  - Icon/graphic at top
  - Service title
  - Description text
  - Hover: gentle lift + purple glow
- Services: Graphic & Logo Design, Website Design & No-Code Apps, AI Video & Image Creation, Photography & Corporate Branding

### Portfolio Grid
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- 6 sample projects total
- Glass cards with project images
- Hover: image zoom subtle + glass overlay with project name reveal
- Smooth transitions

### Contact Form
- Glass container with form fields
- Input fields: glassmorphic style with purple focus glow
- Fields: Name, Email, Message (textarea)
- Glass "Send Message" button with hover glow
- Validation styling (client-side)

### Footer
- Translucent glass footer bar
- Copyright text centered
- "Ola AI Studio - A Division of Ola Digital Concepts"
- Social links with subtle hover glow

## Animations
- **Page Load**: Smooth fade-in + slide-up for content sections (0.6s delay between sections)
- **Hero Text**: Gentle floating motion (translateY 10px, 3s ease-in-out loop)
- **Hover States**: 
  - Buttons: purple glow radiates (0.4s transition)
  - Cards: lift (translateY -8px) + glow
  - Links: underline slide-in + color shift to purple
- **Theme Toggle**: Smooth 0.5s transition for all colors/backgrounds

## Images
- **Hero Background**: Full-width Unsplash image showing abstract creativity, purple-tinted or purple-compatible (glassy overlay applied)
- **Portfolio Items**: 6 project showcase images (design work, websites, AI creations, photography) - glass cards with image fills
- All images maintain aspect ratio, use object-fit: cover

## Responsive Behavior
- **Desktop** (1024px+): Full multi-column layouts, larger glassmorphic effects
- **Tablet** (768-1023px): 2-column grids, adjusted spacing
- **Mobile** (<768px): Single column, stacked navigation, optimized touch targets (min 44px)

## Accessibility
- Light/Dark mode toggle persists via localStorage
- Focus states visible with purple outline glow
- Sufficient contrast ratios maintained in both themes
- Smooth transitions don't cause motion sickness (respects prefers-reduced-motion)