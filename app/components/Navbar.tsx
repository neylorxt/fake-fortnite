"use client";

import { useState } from "react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Découvrir", href: "#decouvrir" },
  { label: "Modes", href: "#modes" },
  { label: "Actualités", href: "#actualites" },
  { label: "Créer", href: "#creer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-background/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="#accueil"
          className="font-display text-xl italic tracking-tight text-foreground transition-transform duration-200 hover:scale-105 lg:text-2xl"
          style={{ transform: "skewX(-6deg)" }}
        >
          FAKEFORTNITE
        </a>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Recherche */}
        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex w-full max-w-60 items-center gap-2 rounded-lg border border-border-soft bg-surface px-3 py-2">
            <svg
              className="h-4 w-4 shrink-0 text-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher"
              aria-label="Rechercher"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>
        </div>

        {/* Actions desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#accueil"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
          >
            Se connecter
          </a>
          <a
            href="#accueil"
            className="rounded-md bg-gradient-to-r from-violet to-blue px-4 py-2 text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
          >
            V-Bucks
          </a>
          <a
            href="#accueil"
            className="rounded-md bg-accent px-5 py-2 text-sm font-bold text-black transition-transform duration-200 hover:scale-105"
          >
            Jouer
          </a>
        </div>

        {/* Burger mobile */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground transition-colors duration-200 hover:bg-surface lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-border-soft bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border-soft pt-4">
              <a
                href="#accueil"
                onClick={() => setOpen(false)}
                className="rounded-md bg-gradient-to-r from-violet to-blue px-4 py-2.5 text-center text-sm font-bold text-white"
              >
                V-Bucks
              </a>
              <a
                href="#accueil"
                onClick={() => setOpen(false)}
                className="rounded-md bg-accent px-4 py-2.5 text-center text-sm font-bold text-black"
              >
                Jouer
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}