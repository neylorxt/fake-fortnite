import Image from "next/image";
import Reveal from "./Reveal";

export default function CreatorSection() {
  return (
    <section id="creer" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mb-12 text-center">
        <h2
          className="font-display text-4xl italic leading-[0.95] text-foreground sm:text-5xl lg:text-6xl"
          style={{ transform: "skewX(-4deg)" }}
        >
          CRÉE TON PROPRE MONDE
        </h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          Imagine, construis et partage tes propres expériences.
        </p>
      </Reveal>

      {/* Ligne 1 : texte à gauche */}
      <Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-2xl italic tracking-wide text-accent sm:text-3xl">
              MODE CRÉATIF
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Construis tes propres îles, crée des mini-jeux et joue avec tes
              amis.
            </p>
            <a
              href="#creer"
              className="mt-7 inline-block rounded-md bg-accent px-7 py-3.5 font-display text-base italic tracking-wide text-black transition-transform duration-200 hover:scale-105"
              style={{ transform: "skewX(-4deg)" }}
            >
              COMMENCER À CRÉER
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border-soft">
            <Image
              src="/images/Final_Sparrow_KA_No_logo.webp"
              alt="Environnement 3D du mode créatif"
              width={800}
              height={500}
              className="h-auto w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </div>
        </div>
      </Reveal>

      {/* Ligne 2 : image à gauche */}
      <Reveal className="mt-16 lg:mt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 overflow-hidden rounded-2xl border border-border-soft lg:order-1">
            <Image
              src="/images/Fortnite-High-Stakes.webp"
              alt="Outils pour créateurs"
              width={800}
              height={500}
              className="h-auto w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl italic tracking-wide text-accent sm:text-3xl">
              OUTILS POUR CRÉATEURS
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Utilise des outils avancés pour créer des expériences encore plus
              ambitieuses.
            </p>
            <a
              href="#creer"
              className="mt-7 inline-block rounded-md border border-border-soft bg-surface/60 px-7 py-3.5 font-display text-base italic tracking-wide text-foreground transition-colors duration-200 hover:bg-surface"
              style={{ transform: "skewX(-4deg)" }}
            >
              EN SAVOIR PLUS
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}