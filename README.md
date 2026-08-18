# FakeFortnite 🎮

Une **landing page moderne** inspirée visuellement de l'univers Fortnite, créée en démonstration **fan-made** (aucun lien avec Epic Games). Le site est fictif et sert uniquement de vitrine front-end / portfolio.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4?style=flat-square&logo=tailwindcss)

---

## ✨ Fonctionnalités

- **Header** sticky avec navigation, barre de recherche, boutons « Se connecter », « V-Bucks » et « Jouer », menu hamburger sur mobile.
- **Hero** plein écran (≈ 80vh) avec image de fond, overlay sombre + dégradé violet, effet **parallaxe** au scroll et boutons d'action.
- **Modes populaires** : 4 grandes cartes horizontales (Battle Royale, Zero Build, Creative, Racing) avec badge d'âge, carousel horizontal sur mobile.
- **Découvrir** : 4 catégories × 6 jeux générés depuis des **tableaux de données**, avec vraies images Fortnite (via l'API publique fortnite-api.com).
- **Section création** : 2 lignes alternées (Mode créatif / Outils pour créateurs).
- **Actualités** : 3 grosses cards avec date, titre, description et lien « Lire la suite → ».
- **CTA final** : grande section centrée avec fond violet/bleu lumineux.
- **Footer** : colonnes de liens, icônes sociales (YouTube, Instagram, X, Discord), mentions légales.

## 🎨 Direction artistique

| Élément | Valeur |
|---|---|
| Fond principal | `#101014` |
| Fond secondaire | `#18181d` |
| Cartes | `#202027` |
| Texte | `#ffffff` |
| Texte secondaire | `#a7a7b0` |
| Jaune CTA | `#f5f500` |
| Violet | `#6d4cff` |
| Bleu | `#315cff` |
| Bordures | `rgba(255,255,255,0.08)` |

- Thème très sombre, interface gaming moderne.
- Titres très épais (police display **Anton**) légèrement inclinés (`skew` + italique).
- Boutons jaunes à texte noir.
- Coins légèrement arrondis, beaucoup d'espace entre les sections.
- Animations légères : hover des cards (`scale`), zoom des images, apparition progressive au scroll (`IntersectionObserver`), navbar avec `backdrop-blur`.

## 🧱 Architecture

```
app/
├── components/          # Composants réutilisables
│   ├── Navbar.tsx       # Navbar sticky + menu mobile
│   ├── Hero.tsx         # Hero avec parallaxe
│   ├── SectionTitle.tsx # Titre de section
│   ├── ModeCard.tsx     # Card de mode (avec badge d'âge)
│   ├── GameCard.tsx     # Card de jeu (miniature + titre + joueurs)
│   ├── GameRow.tsx      # Rangée de cartes générée depuis les données
│   ├── CreatorSection.tsx # Section création (2 lignes alternées)
│   ├── NewsCard.tsx     # Card d'actualité
│   ├── Footer.tsx       # Footer complet
│   └── Reveal.tsx       # Animation d'apparition au scroll
├── lib/
│   └── data.ts          # Toutes les données (modes, jeux, catégories, actualités)
├── globals.css          # Design system (Tailwind v4 @theme)
├── layout.tsx           # Layout racine + polices
└── page.tsx             # Assemblage de la page
```

**Principe clé** : les listes de jeux ne sont jamais écrites en dur dans le JSX — elles sont générées depuis les tableaux de `app/lib/data.ts`.

## 🚀 Installation

Prérequis : [Node.js](https://nodejs.org) ≥ 20 (et npm).

```bash
# 1. Cloner le dépôt
git clone https://github.com/neylorxt/fake-fortnite.git
cd fake-fortnite

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Scripts disponibles

| Script | Description |
|---|---|
| `npm run dev` | Serveur de développement (Fast Refresh) |
| `npm run build` | Build de production (Turbopack) |
| `npm run start` | Serveur de production |
| `npm run lint` | Lint ESLint |

## 🖼️ Images

Les visuels proviennent de sources publiques :

- **Images locales** (`public/images/`) : fonds, personnages, skins et collaborations Fortnite.
- **Images des jeux** (`public/images/games/`) : arts promotionnels Fortnite récupérés via l'[API publique fortnite-api.com](https://fortnite-api.com/) et stockés localement.

> Projet fictif à but de démonstration : toutes les marques (Fortnite, Epic Games…) appartiennent à leurs propriétaires respectifs. Non affilié à Epic Games.

## 📦 Déploiement

Le déploiement le plus simple est [Vercel](https://vercel.com) :

```bash
npm i -g vercel
vercel
```

Ou consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 Licence

Projet de démonstration fan-made — **non affilié à Epic Games**. À usage d'apprentissage / portfolio.