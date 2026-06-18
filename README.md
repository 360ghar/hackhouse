# HackHouse Gurgaon

A modern landing page for HackHouse Gurgaon - a curated co-living space for founders, developers, and builders.

## About

HackHouse Gurgaon offers a fully-furnished living space designed for builders, providing:
- Resources worth ₹60,000+/month for just ₹35,000
- Accommodation for 8 curated founders per cohort
- 3 meals daily
- Premium AI tools and amenities
- High-speed internet (1 Gbps)
- 24×7 power backup

## Technologies Used

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **shadcn/ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **TanStack React Query** - Data fetching and state management
- **Lucide React** - Icon library
- **Recharts** - Charting library

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── landing/       # Landing page specific components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── Amenities.tsx
│   │   ├── Tools.tsx
│   │   ├── ApplicationProcess.tsx
│   │   ├── CoworkingOption.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   └── ApplicationModal.tsx
│   ├── ui/            # shadcn/ui components
│   └── NavLink.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/
│   ├── Index.tsx      # Home page
│   └── NotFound.tsx   # 404 page
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Features

- Modern, responsive design with glassmorphism effects
- Animated elements and smooth transitions
- Application modal with form validation
- FAQ section with expandable answers
- Value proposition showcase
- Tools and amenities listing
- Mobile-friendly layout

## Deployment

This project can be deployed to any static hosting service:
- **Vercel** - `npm run build` and deploy the `dist` folder
- **Netlify** - Connect your repo and enable Vite build
- **GitHub Pages** - Use `gh-pages` for deployment

## License

MIT
