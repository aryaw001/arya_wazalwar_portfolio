# Portfolio Website

## Overview

This is a full-stack portfolio website built for Arya Wazalwar, a Product Data Science enthusiast. The application features a stunning React frontend with a warm, earthy design theme showcasing personal information, skills, projects, and contact functionality. The website includes Arya's actual profile photo and mind-blowing visual effects including animations, gradients, floating elements, morphing shapes, and glass effects, all backed by an Express.js server with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth page transitions and animations
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: PostgreSQL with active database tables and connections
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot reloading with Vite integration for seamless development experience

## Key Components

### Portfolio Sections
- **Hero Section**: Introduction with call-to-action buttons and social links
- **About Section**: Personal background and achievements showcase
- **Skills Section**: Technical skills organized by categories with visual progress indicators
- **Experience Section**: Professional experience and internships with timeline layout
- **Projects Section**: Featured projects with descriptions and technology stacks
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact form with backend integration for message handling

### UI Components
- Comprehensive shadcn/ui component library including buttons, forms, cards, navigation, and more
- Responsive navigation with smooth scrolling and active section highlighting
- Toast notifications for user feedback
- Mobile-responsive design with proper breakpoints

### Backend Services
- Contact message handling with PostgreSQL database persistence
- Resume download endpoint serving actual PDF file
- Database-backed storage using Drizzle ORM for type-safe operations
- Comprehensive error handling and logging

## Data Flow

1. **Frontend to Backend**: Contact form submissions are validated client-side with React Hook Form and Zod, then sent to the Express API
2. **Database Operations**: Drizzle ORM handles all database interactions with type safety
3. **State Management**: TanStack Query manages API calls, caching, and error states
4. **Real-time Updates**: Toast notifications provide immediate user feedback for form submissions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Headless UI primitives for accessibility

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` using Vite
- Backend bundles to `dist/index.js` using ESBuild with Node.js targeting
- Database migrations managed through Drizzle Kit

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development mode switching via `NODE_ENV`
- Replit-specific optimizations for development environment

### Scripts
- `dev`: Development mode with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema deployment via Drizzle

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting environment with PostgreSQL support.