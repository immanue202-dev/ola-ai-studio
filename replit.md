# Ola AI Studio

## Overview

Ola AI Studio is a premium creative portfolio website showcasing design, web development, AI creation, and photography services. The site is a division of Ola Digital Concepts and embodies a "Where Creativity Meets Elegance" philosophy. Built as a multi-page React application with a modern glassmorphism aesthetic, it features light/dark mode theming, responsive design, and an emphasis on visual appeal through purple-gradient color schemes and glass-effect UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Library**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with custom glassmorphism design system

**Design System:**
The application implements a comprehensive glassmorphism design approach with:
- Purple-based color palette (HSL 270 70% 60% primary)
- Backdrop blur effects (10-16px) for glass containers
- Semi-transparent overlays with subtle borders
- Light/dark mode theming via ThemeProvider context
- Custom CSS variables for dynamic color theming
- Consistent spacing using Tailwind's 4-based scale

**Component Architecture:**
- Reusable glass-effect containers (`GlassContainer`)
- Service cards with hover animations
- Portfolio cards with image overlays
- Testimonial cards for client feedback
- Animated hero text with phrase rotation
- Navigation with glassmorphic styling
- Footer with social media integration

**Page Structure:**
- Home: Hero section with animated text, services overview, testimonials
- About: Studio introduction and founder/CEO section
- Services: Overview with links to individual service pages
- Service Detail Pages: Graphic Design, Web Development, AI Creation, Photography
- Portfolio: Grid showcase of past projects
- Pricing: Tiered pricing for different service categories
- Contact: Contact form with validation

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server creation for both development and production
- Middleware for request logging and error handling

**Development Environment:**
- Vite development server with HMR (Hot Module Replacement)
- Custom logging system for API requests
- Replit-specific plugins for development banner and cartographer

**Storage Layer:**
- In-memory storage implementation (`MemStorage`)
- Interface-based design (`IStorage`) for future database integration
- User management methods (getUser, getUserByUsername, createUser)

**API Design:**
- RESTful API structure with `/api` prefix
- JSON request/response format
- Session credentials included in requests
- Error handling with status codes and messages

### Data Layer

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL
- Schema definition in shared layer
- Migration support via drizzle-kit
- Neon Database serverless driver integration

**Schema:**
- Users table with UUID primary keys
- Username/password authentication fields
- Zod schema validation via drizzle-zod

**Note**: The application is configured for PostgreSQL via Drizzle ORM, but the current implementation uses in-memory storage. Database integration is prepared but not yet active.

### Authentication & Authorization

The codebase includes user schema and storage interfaces for authentication, though full authentication flows are not yet implemented. The architecture supports:
- User creation and retrieval
- Credential-based requests
- Session management (via connect-pg-simple configuration)

### Build & Deployment

**Development:**
- `npm run dev` - Runs Express server with tsx in development mode
- Vite dev server with middleware integration
- HMR for instant feedback

**Production:**
- `npm run build` - Vite build for client + esbuild for server
- Static files served from `dist/public`
- Server bundle in `dist/index.js`
- `npm start` - Runs production server

**File Structure:**
- `/client` - React application and components
- `/server` - Express backend and routes
- `/shared` - Shared types and schemas
- `/attached_assets` - Static images and content
- `/migrations` - Database migrations

## External Dependencies

### UI & Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icons (TikTok social icon)
- **cmdk**: Command menu component
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component primitive

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwind-merge & clsx**: Conditional className utilities
- **Autoprefixer & PostCSS**: CSS processing

### State & Data Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state and validation
- **Zod**: Schema validation
- **@hookform/resolvers**: Form validation integration

### Database & Backend
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### Development Tools
- **Vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **esbuild**: JavaScript bundler for server builds
- **tsx**: TypeScript execution for Node.js
- **Replit plugins**: Development banner, runtime error overlay, cartographer

### Utilities
- **Wouter**: Lightweight routing library
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation

### Fonts
- **Inter & Poppins**: Google Fonts for clean, modern typography

### Payment Integration
- **Paystack**: Payment checkout links referenced in pricing tiers ([URLs to be configured](https://paystack.shop/pay/9myv1azrad))

### Social Media Integration
- WhatsApp, Instagram, Facebook, TikTok links for business contact and social presence