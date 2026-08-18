const footerColumns = [
  {
    title: "FakeFortnite",
    links: ["Accueil", "Découvrir", "Actualités", "Jouer"],
  },
  {
    title: "Créateurs",
    links: ["Mode créatif", "Documentation", "Publier"],
  },
  {
    title: "Assistance",
    links: ["Aide", "Contact", "FAQ"],
  },
];

const socials = [
  {
    name: "YouTube",
    href: "#footer",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#footer",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#footer",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 5.9-7zm-1.3 19.4h2L6.6 3.3h-2.2z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "#footer",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 2.9c-.2.4-.4.8-.6 1.2a18.3 18.3 0 0 0-5.5 0C9.1 3.7 8.9 3.3 8.7 2.9a19.7 19.7 0 0 0-4.9 1.5C.6 8.6-.2 12.7.2 16.7a19.9 19.9 0 0 0 6 3.1c.5-.7.9-1.4 1.3-2.1-.7-.3-1.4-.6-2-1l.5-.4c3.9 1.8 8.2 1.8 12.1 0l.5.4c-.6.4-1.3.8-2 1 .4.7.8 1.4 1.3 2.1a19.8 19.8 0 0 0 6-3.1c.5-4.6-.8-8.7-3.6-12.3zM8.3 14.2c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4zm7.5 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-border-soft bg-[#0c0c10]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo + socials */}
          <div className="lg:col-span-2">
            <a
              href="#accueil"
              className="font-display text-2xl italic tracking-tight text-foreground transition-transform duration-200 hover:scale-105"
              style={{ transform: "skewX(-6deg)" }}
            >
              FAKEFORTNITE
            </a>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border-soft bg-surface text-muted transition-colors duration-200 hover:border-violet/50 hover:text-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes de liens */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-base italic tracking-wide text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#footer"
                      className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bas de page */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border-soft pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © 2026 FakeFortnite — Fan-made project. Not affiliated with Epic
            Games.
          </p>
          <ul className="flex items-center gap-5">
            {["Confidentialité", "Conditions", "Cookies"].map((item) => (
              <li key={item}>
                <a
                  href="#footer"
                  className="text-xs text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}