# FitBowl — Healthy Meal Subscription Website

> **"Healthy doesn't have to taste healthy."**  
> Chef-crafted, macro-balanced gourmet meal bowls delivered fresh to homes and offices across Mumbai.

---

## 🥗 About FitBowl

FitBowl is a gourmet healthy meal subscription service engineered for corporate professionals, entrepreneurs, and fitness-conscious residents across Mumbai. By pairing the nutritional precision of macro-counted fitness meals with the vibrant, comforting flavors of Indian culinary traditions and global cuisines, FitBowl delivers a deeply satisfying alternative to oily restaurant takeout and bland diet food.

### Operational Highlights & Business Constraints
- **Pilot Delivery Zones:** Andheri (East / West / SEEPZ), Bandra (West / BKC), Powai (Hiranandani / IIT Area), and Lower Parel (One World / Kamala Mills / Worli).
- **Operating Schedule:** Monday through Saturday only (**Closed on Sundays**; Sunday dates blocked in booking picker).
- **Delivery Windows:** Lunch (12:00 PM – 2:00 PM) and Dinner (7:00 PM – 9:00 PM).
- **Culinary Standards:** Freshly cooked each morning in cold-pressed oils; zero preservatives, no artificial food colorings, no refined sugar, and no maida.
- **Lead Offer:** 100% Free Trial Meal with zero payment and no credit card required.

---

## 🛠️ Technology Stack & Architecture

| Layer | Technology | Version | Purpose & Rationale |
|---|---|---|---|
| **Framework** | Next.js (App Router) | `16.4.2` | Turbopack compilation, static page generation, server metadata, and partial prerendering |
| **UI Library** | React & React DOM | `19.3.0` | Modern concurrent primitives and `useSyncExternalStore` for client hydration-safe state |
| **Styling** | Tailwind CSS | `v4.x` | CSS-first `@theme inline` design tokens in `globals.css` without legacy config clutter |
| **Typography** | Google Fonts via `next/font` | Latest | `Bricolage Grotesque` (punchy editorial headings) & `Nunito` (warm, accessible body text) |
| **Animation** | GreenSock (GSAP) | `^3.15.0` | ScrollTrigger staggered reveals with deterministic `gsap.context()` cleanup and `prefers-reduced-motion` bypass |
| **Icons** | Lucide React + Inline SVGs | `^1.59.0` | Tree-shakeable SVG icons and accessible brand marks |
| **Type System** | TypeScript | `^5.x` | Strict end-to-end typing for bowls catalog, subscription plans, validation rules, and trial bookings |
| **Code Quality** | ESLint | `^9.x` (`eslint-config-next`) | Strict code hygiene, zero unused variables, and React 19 hook validation |

---

## 🎨 Design System & Brand Palette

The application strictly implements the official FitBowl brand identity:

```
Forest Green:      #173F32  (Primary Dark Container & Brand Contrast)
FitBowl Orange:    #F47738  (High-Intent CTAs, Accent Badges & Highlights)
Warm Cream:        #FFF7E8  (Primary Page Background & Warm Foundation)
Soft Leaf Green:   #DCEBCF  (Organic Highlights, Badge Tints & Accents)
Deep Text Charcoal:#334A40  (Accessible High-Contrast Body Copy)
Border Neutral:    #E3D8C4  (Delicate Card Dividers & Borders)
```

- **Heading Font:** `var(--font-bricolage)` (Bricolage Grotesque, bold/black weights with tight tracking).
- **Body Font:** `var(--font-nunito)` (Nunito, regular/semibold weights with generous line-height).

---

## 🍽️ The 14 Signature Bowls Catalog

Every single bowl from the official specification is implemented verbatim with exact macro breakdowns:

| # | Bowl Name | Category | Calories | Protein | Key Ingredients & Highlights |
|---|---|---|---|---|---|
| 1 | **Peri Peri Paneer Bowl** | Veg | 520 kcal | 28g | Grilled cottage cheese, spicy peri-peri marinade, brown rice, charred corn, sautéed bell peppers |
| 2 | **Butter Chicken Lite Bowl** | Non-Veg | 560 kcal | 38g | Roasted chicken breast, cashew-tomato gravy, jeera spiced brown rice, cucumber mint raita |
| 3 | **Rajma Chawal Remix** | Veg | 480 kcal | 22g | Slow-cooked Jammu rajma, red rice, kachumber salad, mint chutney, toasted papad crunch |
| 4 | **Thai Basil Chicken Bowl** | Non-Veg | 510 kcal | 36g | Minced chicken with bird's eye chili, holy basil, jasmine rice, wok-tossed greens |
| 5 | **Mexican Burrito Bowl** | Veg | 490 kcal | 20g | Black beans, fajita peppers, cilantro-lime brown rice, fresh guacamole, pico de gallo |
| 6 | **Tandoori Fish Bowl** | Non-Veg | 470 kcal | 42g | Ajwain-marinated grilled basa, lemon quinoa, roasted zucchini, green chutney yogurt |
| 7 | **Chole Quinoa Bowl** | Veg | 460 kcal | 18g | Amritsari chole, fluffy white quinoa, pickled onions, pomegranate seeds, coriander drizzle |
| 8 | **Korean Chicken Bowl** | Non-Veg | 530 kcal | 35g | Gochujang-glazed grilled chicken thigh, sticky multi-grain rice, house kimchi, steamed edamame |
| 9 | **Palak Tofu Power Bowl** | Veg | 440 kcal | 26g | Pan-seared organic tofu, spiced spinach gravy, garlic-infused millets, cherry tomatoes |
| 10 | **Egg Bhurji Power Bowl** | Non-Veg | 480 kcal | 30g | Spiced egg bhurji with herbs, methi brown rice, steamed sprouts, roasted tomato salsa |
| 11 | **Mediterranean Falafel Bowl** | Veg | 510 kcal | 19g | Baked herb falafel, roasted garlic hummus, tabbouleh, kalamata olives, tahini drizzle |
| 12 | **Chicken Biryani Fit** | Non-Veg | 540 kcal | 40g | Dum-cooked chicken breast with whole spices, aged basmati rice, roasted onion raita |
| 13 | **Teriyaki Mushroom Bowl** | Veg | 420 kcal | 16g | Glazed shiitake & button mushrooms, soba noodles, broccoli florets, toasted sesame |
| 14 | **Mutton Keema Bowl** | Non-Veg | 620 kcal | 40g | **Fridays Only:** Slow-braised lean minced mutton, pea pilaf, butter-toasted pav, pickled onions |

---

## 💳 Transparent Subscription Plans

1. **Starter Plan (₹1,450 / 5 Meals):** ₹290/meal — Free delivery, custom bowl selection, pause anytime.
2. **Regular Plan (₹2,700 / 10 Meals — Most Popular):** ₹270/meal — Free delivery, full menu access, nutrition consultation, flexible pause/cancel.
3. **Pro Plan (₹5,000 / 20 Meals):** ₹250/meal — Best value, free delivery, dedicated nutritionist, chef's weekly surprise specials.

---

## 🔒 Demo Simulation Transparency Notice

In accordance with ethical engineering and assignment standards:
- The free trial booking form and newsletter inputs represent a **simulated frontend demonstration**.
- Validating the form triggers realistic async loading (1200ms) and presents an accessible modal summarizing the booking details.
- The confirmation dialog explicitly informs the user:  
  `Simulated Demo Environment: This action successfully validated the booking flow, but no actual food order was placed.`
- Out-of-area visitors selecting "Other" are automatically rerouted to a waitlist intent flow (`Join Expansion Waitlist ->`).

---

## 📚 Complete Project Documentation Suite

All 10 project specifications and architectural standards are preserved and maintained in the `docs/` directory:

| Document | Description |
|---|---|
| [**docs/ui-ux-specification.md**](./docs/ui-ux-specification.md) | Comprehensive design system: brand tokens, typography pairing, layout grids, components, micro-animations, and WCAG AA guidelines. |
| [**docs/wireframe.md**](./docs/wireframe.md) | Section-by-section desktop (1440px) and mobile (390px) responsive wireframe layout. |
| [**docs/brd.md**](./docs/brd.md) | Business Requirements Document: user personas, conversion objectives, requirements (`BR-001` to `BR-016`), and operating rules. |
| [**docs/frd.md**](./docs/frd.md) | Functional Requirements Document: functional user stories, validation logic, dietary filtering, and trial modal workflows. |
| [**docs/architecture.md**](./docs/architecture.md) | Technical Architecture: App Router structure, GSAP lifecycle safety, zero-dependency validation, and performance budgets. |
| [**docs/rule.md**](./docs/rule.md) | Non-negotiable engineering rules, commit standards, content accuracy constraints, and quality gates. |
| [**docs/seo.md**](./docs/seo.md) | Local Mumbai SEO strategy, target keywords, OpenGraph schema, JSON-LD (`FoodEstablishment` and `FAQPage`). |
| [**docs/phases.md**](./docs/phases.md) | 8-phase implementation roadmap from audit through production polish with explicit verification checkpoints. |
| [**docs/gstack-review.md**](./docs/gstack-review.md) | Garry Tan `gstack` multi-role audit (CEO, Design, Eng, QA) with readiness scorecard. |
| [**docs/nextjs-agent-rules.md**](./docs/nextjs-agent-rules.md) | Next.js 16 breaking conventions and reference to local offline documentation in `node_modules/next/dist/docs/`. |

---

## 🤖 AI-Assisted Tooling Disclosure

As required by professional transparency standards:
- **Development Tool:** This application and documentation suite were developed with the assistance of **Google Antigravity IDE (Gemini 2.5 Agentic Coding Assistant)**.
- **Workflow Methodology:** Human-supervised, phase-driven pair programming adhering to the 8-phase roadmap in `docs/phases.md`.
- **Engineering Guardrails:** All generated code was verified against live TypeScript (`npx tsc --noEmit`), ESLint (`npm run lint`), and Next.js Turbopack production builds (`npm run build`). No automated code was committed without passing type safety and linting verification.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `>= 18.18.0`
- npm `>= 9.0.0`

### 1. Clone & Install
```bash
git clone https://github.com/mubasshir-cyber/fitbowl.git
cd fitbowl
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Quality Verification Gates
```bash
# Static type checking
npx tsc --noEmit

# Code hygiene and React 19 hook linting
npm run lint

# Production build and static page generation
npm run build
```

---

## 📋 Implementation Roadmap Summary

- [x] **Phase 0 — Repository Audit & Planning:** Codebase audit, Next.js 16 build verification, vector logo generation, documentation baseline.
- [x] **Phase 1 — Project Foundation & Design System:** Brand tokens (`#173F32`, `#F47738`, `#FFF7E8`, `#DCEBCF`), Google fonts, and shared UI primitives.
- [x] **Phase 2 — Navbar & Hero Section:** Responsive navigation, official logo, hero headline, trust badges, dual CTAs, and hero food imagery.
- [x] **Phase 3 — Menu Catalog & Pricing Plans:** All 14 signature bowls with dietary filters/search and 3 subscription tiers.
- [x] **Phase 4 — Supporting Content Sections:** Benefits, How It Works, 4 verified testimonials, newsletter, and 8 FAQs.
- [x] **Phase 5 — Free Trial Booking & Conversion:** Form validation, Sunday blocker, out-of-area waitlist routing, and simulated submission.
- [x] **Phase 6 — Animation, Responsive QA, Accessibility & Performance:** GSAP ScrollTrigger reveals, reduced motion, responsive QA (390px), and a11y.
- [x] **Phase 7 — SEO, Testing & Production Polish:** Metadata, JSON-LD schemas, sitemap, robots.txt, and production verification.
- [x] **Phase 8 — Documentation, Git History & Live Deployment:** Final README updates, AI tool disclosure, and deployment verification.

---

## 📄 License & Attribution

© 2026 FitBowl Technologies Pvt. Ltd. All rights reserved.  
Cooked fresh daily in Mumbai. FSSAI Lic. `11524026000123` (Simulated Demo).
