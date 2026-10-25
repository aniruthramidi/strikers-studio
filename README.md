<div align="center">

# STRIKERS® STUDIO

### Bespoke Digital Design & High-Velocity Creator Engineering

[![CI Quality Gate](https://github.com/aniruthramidi/strikers-studio/actions/workflows/ci.yml/badge.svg)](https://github.com/aniruthramidi/strikers-studio/actions/workflows/ci.yml)
[![React Version](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest Unit Tests](https://img.shields.io/badge/Tests-Vitest%20Pass-brightgreen?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Docker Ready](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

<p align="center">
  A high-concept, editorial-brutalist studio showcase for creators, podcasters, and digital founders. Engineered with kinetic typography, physics-based smooth scrolling, responsive micro-grids, and accessible UI architecture.
</p>

[Explore Live Showcase](https://strikers.studio) · [Report Bug](https://github.com/aniruthramidi/strikers-studio/issues) · [Request Commission](mailto:hello@strikers.studio)

</div>

---

## ✦ System Architecture & Design Philosophy

**STRIKERS Studio** fuses raw editorial print layout aesthetics with modern interactive web technology. Built on a brutalist paper-ink palette (`#ebebeb` background, `#0a0a0a` typography), it balances visual dominance with performance and accessibility.

```
┌────────────────────────────────────────────────────────┐
│                   STRIKERS STUDIO                      │
├────────────────────────────────────────────────────────┤
│  [SkipToContent]  ─── Accessible Keyboard Traversal    │
│  [Preloader]      ─── Brand Reveal & Geometry Intro    │
│  [Navbar / Menu]  ─── Floating Header & Modal Drawer   │
│  [Hero]           ─── Massive Syne Clamped Wordmark    │
│  [Studio]         ─── Editorial Manifesto & Metrics    │
│  [Work]           ─── Selected Creator Case Studies    │
│  [Services]       ─── Cursor-Following Hover Follower  │
│  [Meaning/Vision] ─── Kinetic Infinite Marquee         │
│  [Ideas]          ─── Core Studio Beliefs & Tabs       │
│  [Contact]        ─── Interactive Clipboard & Outro    │
│  [ErrorBoundary]  ─── Graceful Crash Recovery System   │
│  [WebVitals]      ─── Real-User Performance Monitoring │
└────────────────────────────────────────────────────────┘
```

---

## ⚡ Key Engineering Highlights

| Feature | Description |
| :--- | :--- |
| **Kinetic Typography** | Ultra-large fluid clamped typography (`clamp(4rem, 17.5vw, 22rem)`) with zero layout reflow. |
| **Inertia-Free Scrolling** | Smooth momentum-based scrolling powered by **Lenis** integration. |
| **Cursor-Following Follower** | Physics-interpolated image preview cards that track mouse motion over service items. |
| **Case Study Drawer** | Detailed modal overlay displaying client background, deliverables, and role specifications. |
| **WCAG 2.1 AA Accessibility** | Native `SkipToContent` link, semantic landmark tags, and high-contrast focus rings (`:focus-visible`). |
| **Production Error Boundary** | Catches rendering errors, preserving branding and providing one-click recovery. |
| **Core Web Vitals RUM** | Client-side `PerformanceObserver` tracking FCP, LCP, and CLS thresholds. |
| **Enterprise Docker Stack** | Multi-stage build (`node:20-alpine` → `nginx:alpine`) with gzip, security headers, and health checks. |
| **Automated CI/CD** | GitHub Actions matrix testing on Node 20 and Node 22 with automated caching and artifact uploads. |

---

## 📂 Repository Structure

```tree
strikers-studio/
├── .github/
│   └── workflows/
│       └── ci.yml              # Automated linting, test execution, and production build
├── public/
│   ├── favicon.svg             # Vector brand mark
│   ├── gradient-accent.jpg     # OpenGraph & social preview image
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # Search engine index manifest
├── src/
│   ├── assets/                 # Brand graphics and icons
│   ├── components/             # Reusable UI components
│   │   ├── Contact.jsx         # Contact section with 1-click clipboard copy
│   │   ├── ErrorBoundary.jsx   # Fallback UI for uncaught runtime exceptions
│   │   ├── Hero.jsx            # Editorial headline & wordmark
│   │   ├── Ideas.jsx           # Principles tabber
│   │   ├── Meaning.jsx         # Manifesto statement
│   │   ├── Navbar.jsx          # Dynamic header and navigation drawer
│   │   ├── Preloader.jsx       # Initial interactive screen
│   │   ├── ProjectModal.jsx    # Case study detail modal
│   │   ├── Services.jsx        # Hover follower service list
│   │   ├── SkipToContent.jsx   # Keyboard accessibility helper
│   │   ├── Studio.jsx          # Agency philosophy
│   │   ├── Vision.jsx          # Kinetic marquee banner
│   │   └── Work.jsx            # Project showcase grid
│   ├── data/
│   │   ├── projects.js         # Centralized project portfolio items
│   │   └── services.js         # Centralized studio service listings
│   ├── test/                   # Vitest unit test suite
│   │   ├── ErrorBoundary.test.jsx
│   │   ├── SkipToContent.test.jsx
│   │   ├── data.test.js
│   │   ├── setup.js
│   │   └── webVitals.test.js
│   ├── utils/
│   │   └── webVitals.js        # Core Web Vitals RUM observer
│   ├── App.jsx                 # App shell with smooth scroll setup
│   ├── index.css               # Editorial brutalist design tokens & Tailwind
│   └── main.jsx                # Application root with ErrorBoundary & telemetry
├── Dockerfile                  # Multi-stage production container build
├── docker-compose.yml          # Container orchestration config
├── nginx.conf                  # Production reverse proxy & security headers
├── package.json                # Project dependencies and script runner
└── vite.config.js              # Vite & Vitest configuration
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19 (`react`, `react-dom`) |
| **Styling & Tokens** | Tailwind CSS v4 (`@tailwindcss/vite`), Custom CSS Variables |
| **Motion & Dynamics** | Framer Motion, Lenis Smooth Scroll |
| **Icons & Assets** | Lucide React |
| **Build & Tooling** | Vite 8, Oxlint (high-performance Rust linter) |
| **Testing** | Vitest, React Testing Library, `@testing-library/jest-dom`, JSDOM |
| **Containerization** | Docker, Nginx Alpine, Docker Compose |
| **CI/CD** | GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `20.x` or higher
- **npm**: `10.x` or higher

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aniruthramidi/strikers-studio.git
   cd strikers-studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Testing & Code Quality

```bash
# Execute unit test suite once
npm test

# Run tests in interactive watch mode
npm run test:watch

# Run Oxlint across all source files
npm run lint

# Compile production bundle
npm run build
```

---

## 🐳 Docker Deployment

Run the complete production setup with Nginx reverse proxy:

```bash
# Build and run container in detached mode
docker compose up -d --build

# Verify container health
curl -i http://localhost:3000/health
```

The container includes:
- **Gzip compression** for text, CSS, JS, and SVG assets.
- **Immutable 1-year caching** for static `/assets/` bundles.
- **Hardened HTTP headers**: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, and `Referrer-Policy`.
- **SPA client-side routing fallback** (`try_files $uri $uri/ /index.html`).

---

## 📄 License & Credits

Designed and maintained by [Ramidi Aniruth](https://github.com/aniruthramidi).  
All rights reserved © 2026 STRIKERS Studio.
