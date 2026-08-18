"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (bgRef.current) {
          const offset = Math.min(window.scrollY, window.innerHeight);
          bgRef.current.style.transform = `translateY(${offset * 0.22}px) scale(1.08)`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex min-h-[72vh] items-center overflow-hidden lg:min-h-[80vh]"
    >
      {/* Background image + parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ transform: "scale(1.08)" }}
      >
        <Image
          src="/images/fortnite-personnages.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlays sombres + dégradé violet */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/75 to-background/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left_center,rgba(109,76,255,0.28),transparent_55%)]" />

      {/* Contenu */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="max-w-2xl">
          <p
            className="font-display text-lg italic tracking-widest text-foreground/80 lg:text-xl"
            style={{ transform: "skewX(-6deg)" }}
          >
            FAKEFORTNITE
          </p>

          <h1
            className="mt-4 font-display text-5xl italic leading-[0.95] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ transform: "skewX(-4deg)" }}
          >
            ENTRE DANS
            <br />
            <span className="text-accent">LA BATAILLE</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Explore des mondes incroyables, affronte tes amis et découvre de
            nouvelles expériences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#modes"
              className="rounded-md bg-accent px-7 py-3.5 font-display text-lg italic tracking-wide text-black transition-transform duration-200 hover:scale-105"
              style={{ transform: "skewX(-4deg)" }}
            >
              JOUER MAINTENANT
            </a>
            <a
              href="#decouvrir"
              className="rounded-md border border-border-soft bg-surface/60 px-7 py-3.5 font-display text-lg italic tracking-wide text-foreground transition-colors duration-200 hover:bg-surface"
              style={{ transform: "skewX(-4deg)" }}
            >
              DÉCOUVRIR
            </a>
          </div>
        </div>
      </div>

      {/* Indicateurs de slider */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <span className="h-2 w-6 rounded-full bg-accent" />
        <span className="h-2 w-2 rounded-full bg-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-foreground/40" />
      </div>
    </section>
  );
}