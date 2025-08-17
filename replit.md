# Overview

Hearts & Plates is a full-stack restaurant website for a multi-cuisine restaurant in Pondicherry, India. The application provides a complete digital presence with menu browsing, table reservations, party bookings, gallery showcase, and contact functionality. Built as a modern web application, it features a React frontend with a Node.js/Express backend and in-memory storage for development.

## Recent Changes (January 17, 2025)

### Phase 1: Core Website Development
- ✓ Implemented complete Hearts & Plates restaurant website
- ✓ Added comprehensive menu from provided PDF (100+ items across 6 categories)
- ✓ Built table reservation system with date/time selection
- ✓ Created party hall booking functionality 
- ✓ Applied warm brown color scheme (#8B4513, #D2691E, #F4A460, etc.)
- ✓ Fixed all TypeScript and runtime errors for production-ready state

### Phase 2: Premium Enhancements (Current)
- ✓ Added vegetarian/non-vegetarian filtering to menu exploration
- ✓ Integrated authentic restaurant photos throughout the site (6 interior photos)
- ✓ Enhanced hero section with gradient overlay and premium styling
- ✓ Added animated statistics section with key metrics
- ✓ Improved About section with premium feature cards
- ✓ Fixed navigation warnings and enhanced UI components
- ✓ Added "no items found" state for menu filtering
- ✓ Researched Google Domains deployment process for custom domain setup

### Deployment Information
- Platform: Replit Deployments with custom domain support
- Domain Setup: Requires A and TXT records in Google Domains DNS settings
- Automatic SSL/TLS certificates and health checks included
- Alternative: Purchase domain directly through Replit for automatic setup

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom restaurant theme variables
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints for reservations, party bookings, and contact messages
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot module replacement with Vite integration in development mode

## Data Storage
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema updates
- **Fallback Storage**: In-memory storage implementation for development/testing

## Database Schema
- **Users**: Basic user authentication structure
- **Table Reservations**: Customer dining reservations with date, time, party size
- **Party Bookings**: Special event bookings with custom requirements
- **Contact Messages**: Customer inquiries and feedback

## Development Features
- **Type Safety**: Shared TypeScript schemas between client and server
- **Error Handling**: Runtime error overlay and structured error responses
- **Development Tools**: Replit integration with cartographer plugin
- **Path Aliases**: Organized imports with @ aliases for components and shared code

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Consistent icon library
- **Google Fonts**: Playfair Display and Open Sans for typography

## Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database toolkit
- **Express.js**: Web application framework
- **Connect PG Simple**: PostgreSQL session store

## Development and Build
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast bundling for production
- **PostCSS**: CSS processing with Autoprefixer

## State Management and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form library
- **Zod**: Schema validation and TypeScript inference

## Additional Libraries
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Type-safe variant styling
- **Embla Carousel**: Touch-friendly carousel component
- **Wouter**: Minimalist routing library