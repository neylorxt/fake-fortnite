import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ModeCard from "./components/ModeCard";
import GameRow from "./components/GameRow";
import CreatorSection from "./components/CreatorSection";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { gameCategories, modes, news } from "./lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Section Modes populaires */}
        <section id="modes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionTitle title="MODES POPULAIRES" />
          </Reveal>

          {/* Grille desktop / carousel mobile */}
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {modes.map((mode) => (
              <div
                key={mode.name}
                className="w-[72%] max-w-80 shrink-0 snap-start sm:w-auto sm:max-w-none"
              >
                <ModeCard mode={mode} />
              </div>
            ))}
          </div>
        </section>

        {/* Section Découvrir */}
        <section
          id="decouvrir"
          className="border-y border-border-soft bg-surface/40"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <SectionTitle
                title="DÉCOUVRIR"
                subtitle="Des milliers d&apos;expériences créées par la communauté."
              />
            </Reveal>

            <div className="mt-12 space-y-14">
              {gameCategories.map((category) => (
                <Reveal key={category.label}>
                  <GameRow category={category} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section création */}
        <CreatorSection />

        {/* Section actualités */}
        <section
          id="actualites"
          className="border-y border-border-soft bg-surface/40"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <SectionTitle title="ACTUALITÉS" />
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {news.map((item) => (
                <Reveal key={item.title}>
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet via-[#4b3a9e] to-blue" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

          <Reveal className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
            <h2
              className="font-display text-5xl italic leading-[0.95] text-white sm:text-6xl lg:text-7xl"
              style={{ transform: "skewX(-4deg)" }}
            >
              PRÊT À JOUER ?
            </h2>
            <p className="mt-5 text-lg text-white/80 sm:text-xl">
              Rejoins FakeFortnite et découvre des milliers d&apos;expériences.
            </p>
            <a
              href="#modes"
              className="mt-9 inline-block rounded-md bg-accent px-10 py-4 font-display text-xl italic tracking-wide text-black transition-transform duration-200 hover:scale-105"
              style={{ transform: "skewX(-4deg)" }}
            >
              JOUER GRATUITEMENT
            </a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}