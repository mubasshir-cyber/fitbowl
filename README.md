# FitBowl — Healthy Meal Subscription Website

> **"Healthy doesn't have to taste healthy."**  
> Chef-crafted, macro-balanced gourmet meal bowls delivered fresh to homes and offices across Mumbai.

---

## 🥗 About FitBowl

FitBowl is a healthy meal subscription service designed for corporate professionals and health-conscious residents in Mumbai. By combining the nutritional transparency of high-protein fitness meals with the vibrant, comforting flavors of Indian classics and global dishes, FitBowl offers a satisfying alternative to oily restaurant takeout and bland diet food.

### Key Operational Highlights
- **Pilot Delivery Zones:** Andheri, Bandra, Powai, and Lower Parel.
- **Operating Schedule:** Monday through Saturday (no delivery on Sunday).
- **Delivery Windows:** Lunch (12:00 PM – 2:00 PM) and Dinner (7:00 PM – 9:00 PM).
- **Freshness Standard:** Cooked fresh the same morning; never frozen; no preservatives, refined sugar, or maida.
- **Lead Offer:** 100% Free Trial Meal with zero payment and no credit card required.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js (App Router)** | `16.4.2` | High-speed static page generation, Turbopack bundling, server metadata |
| **React & React DOM** | `19.3.0` | Latest concurrent UI primitives, native form transitions |
| **Tailwind CSS** | `v4.x` | CSS-first design tokens with `@theme inline` in `globals.css` |
| **GreenSock (GSAP)** | `^3.15.0` | Performant ScrollTrigger reveals with deterministic lifecycle cleanup |
| **Lucide React** | `^1.59.0` | Tree-shakeable SVG icons |
| **TypeScript** | `^5.x` | Strict type safety for menu, pricing, and form schemas |
| **ESLint** | `^9.x` (`eslint-config-next`) | Code hygiene, import standards, and React 19 hook rules |

---

## 📚 Product & Technical Documentation

All project specifications and architectural standards are thoroughly documented in the `docs/` directory:

| Document | Description |
|---|---|
| [**docs/ui-ux-specification.md**](./docs/ui-ux-specification.md) | Complete design system: brand tokens, typography pairing (Bricolage Grotesque + Nunito), component states, and motion principles. |
| [**docs/wireframe.md**](./docs/wireframe.md) | Section-by-section desktop (1440px) and mobile (390px) responsive layout wireframe. |
| [**docs/brd.md**](./docs/brd.md) | Business Requirements Document: user personas, conversion goals, requirement IDs (`BR-001` to `BR-016`), and operational constraints. |
| [**docs/frd.md**](./docs/frd.md) | Functional Requirements Document: user stories, acceptance criteria, dietary filters, search, trial form validation, and out-of-area waitlist. |
| [**docs/architecture.md**](./docs/architecture.md) | Technical architecture: component tree, GSAP lifecycle safety, zero-dependency state machine, and performance budgets. |
| [**docs/rule.md**](./docs/rule.md) | Engineering standards, non-negotiable AI development rules, Git commit conventions, and quality gates. |
| [**docs/seo.md**](./docs/seo.md) | Local Mumbai SEO, JSON-LD schemas (`FoodEstablishment`, `FAQPage`), and Core Web Vitals targets. |
| [**docs/phases.md**](./docs/phases.md) | Implementation roadmap covering Phases 0 through 8 with explicit verification checkpoints. |
| [**docs/gstack-review.md**](./docs/gstack-review.md) | Garry Tan `gstack` multi-role review report (CEO, Design, Eng, QA) with readiness scorecard. |
| [**docs/nextjs-agent-rules.md**](./docs/nextjs-agent-rules.md) | Next.js 16 / React 19 breaking conventions and reference to local offline docs in `node_modules/next/dist/docs/`. |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18.18.0`
- npm `>= 9.0.0`

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

### 4. Run Linter
```bash
npm run lint
```

---

## 📋 Implementation Roadmap Summary

- [x] **Phase 0 — Repository Audit & Planning:** Codebase audit, Next.js 16 build verification, vector logo generation, documentation baseline.
- [ ] **Phase 1 — Project Foundation & Design System:** Brand tokens (`#173F32`, `#F47738`, `#FFF7E8`, `#DCEBCF`), Google fonts, and shared UI primitives.
- [ ] **Phase 2 — Navbar & Hero Section:** Responsive navigation, official logo, hero headline, trust badges, dual CTAs, and hero food imagery.
- [ ] **Phase 3 — Menu Catalog & Pricing Plans:** All 14 signature bowls with dietary filters/search and 3 subscription tiers.
- [ ] **Phase 4 — Supporting Content Sections:** Benefits, How It Works, 4 verified testimonials, newsletter, and 8 FAQs.
- [ ] **Phase 5 — Free Trial Booking & Conversion:** Form validation, Sunday blocker, out-of-area waitlist routing, and simulated submission.
- [ ] **Phase 6 — Animation, Responsive QA, Accessibility & Performance:** GSAP ScrollTrigger reveals, reduced motion, responsive QA (390px), and a11y.
- [ ] **Phase 7 — SEO, Testing & Production Polish:** Metadata, JSON-LD schemas, sitemap, robots.txt, and production verification.
- [ ] **Phase 8 — Documentation, Git History & Live Deployment:** Final README updates and public deployment.

---

## 🔒 Source Content Verification Notice

- **The 14 Signature Bowls:** Peri Peri Paneer, Butter Chicken Lite, Rajma Chawal Remix, Thai Basil Chicken, Mexican Burrito Bowl, Tandoori Fish Bowl, Chole Quinoa Bowl, Korean Chicken Bowl, Palak Tofu Bowl, Egg Bhurji Power Bowl, Mediterranean Falafel, Chicken Biryani Fit, Teriyaki Mushroom Bowl, and Mutton Keema Bowl (Fridays only).
- **Subscription Tiers:** Starter (5 meals @ ₹1,450), Regular (10 meals @ ₹2,700 — Most Popular), Pro (20 meals @ ₹5,000).
- **Verified Reviews:** Riya S., Karan M., Sneha P., Arjun K.
- **Demo Simulation Transparency:** In accordance with project standards, trial submissions represent a simulated frontend experience with realistic loading and transparent confirmation disclosures.
