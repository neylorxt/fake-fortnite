# FakeFortnite 🎮

A modern **landing page** visually inspired by the Fortnite universe, built as a **fan-made** demo (no affiliation with Epic Games). The site is fictional and is purely a front-end / portfolio showcase.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4?style=flat-square&logo=tailwindcss)

---

## ✨ Features

- **Sticky header** with navigation, search bar, "Se connecter", "V-Bucks" and "Jouer" buttons, hamburger menu on mobile.
- **Full-screen hero** (~80vh) with background image, dark overlay + purple gradient, scroll **parallax** effect and call-to-action buttons.
- **Popular modes**: 4 large horizontal cards (Battle Royale, Zero Build, Creative, Racing) with age badge, horizontal carousel on mobile.
- **Discover**: 4 categories × 6 games generated from **data arrays**, using real Fortnite images (via the public fortnite-api.com API).
- **Creation section**: 2 alternating rows (Creative mode / Creator tools).
- **News**: 3 large cards with date, title, description and a "Lire la suite →" link.
- **Final CTA**: large centered section with a glowing purple/blue background.
- **Footer**: link columns, social icons (YouTube, Instagram, X, Discord), legal mentions.

## 🎨 Design system

| Element | Value |
|---|---|
| Main background | `#101014` |
| Secondary background | `#18181d` |
| Cards | `#202027` |
| Text | `#ffffff` |
| Secondary text | `#a7a7b0` |
| CTA yellow | `#f5f500` |
| Purple | `#6d4cff` |
| Blue | `#315cff` |
| Borders | `rgba(255,255,255,0.08)` |

- Very dark theme, modern gaming UI.
- Extra bold headings (display font **Anton**) slightly slanted (`skew` + italic).
- Yellow buttons with black text.
- Slightly rounded corners, generous spacing between sections.
- Subtle animations: card hover (`scale`), image zoom, scroll-reveal (`IntersectionObserver`), navbar with `backdrop-blur`.

## 🧱 Architecture

```
app/
├── components/          # Reusable components
│   ├── Navbar.tsx       # Sticky navbar + mobile menu
│   ├── Hero.tsx         # Hero with parallax
│   ├── SectionTitle.tsx # Section heading
│   ├── ModeCard.tsx     # Mode card (with age badge)
│   ├── GameCard.tsx     # Game card (thumbnail + title + players)
│   ├── GameRow.tsx      # Row of cards generated from data
│   ├── CreatorSection.tsx # Creation section (2 alternating rows)
│   ├── NewsCard.tsx     # News card
│   ├── Footer.tsx       # Full footer
│   └── Reveal.tsx       # Scroll-reveal animation
├── lib/
│   └── data.ts          # All data (modes, games, categories, news)
├── globals.css          # Design system (Tailwind v4 @theme)
├── layout.tsx           # Root layout + fonts
└── page.tsx             # Page assembly
```

**Key principle**: game lists are never hard-coded in the JSX — they are generated from the arrays in `app/lib/data.ts`.

## 🚀 Installation

Requirements: [Node.js](https://nodejs.org) ≥ 20 (and npm).

```bash
# 1. Clone the repository
git clone https://github.com/neylorxt/fake-fortnite.git
cd fake-fortnite

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Development server (Fast Refresh) |
| `npm run build` | Production build (Turbopack) |
| `npm run start` | Production server |
| `npm run lint` | ESLint linting |

## 🖼️ Images

Visuals come from public sources:

- **Local images** (`public/images/`): Fortnite backgrounds, characters, skins and collaborations.
- **Game images** (`public/images/games/`): Fortnite promotional arts fetched from the [public fortnite-api.com API](https://fortnite-api.com/) and stored locally.

> Fictional demo project: all trademarks (Fortnite, Epic Games…) belong to their respective owners. Not affiliated with Epic Games.

## 📦 Deployment

The easiest way is [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or check out the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

Fan-made demo project — **not affiliated with Epic Games**. For learning / portfolio purposes.