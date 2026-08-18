import Image from "next/image";
import type { Mode } from "../lib/data";

type ModeCardProps = {
  mode: Mode;
};

export default function ModeCard({ mode }: ModeCardProps) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border-soft bg-card transition-transform duration-200 hover:scale-105">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={mode.image}
          alt={`Mode ${mode.name}`}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 24vw"
          className="object-cover transition-transform duration-200 group-hover:scale-110"
        />
        <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs font-bold text-white backdrop-blur">
          {mode.age}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-2xl italic leading-tight text-foreground sm:text-3xl">
            {mode.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {mode.tagline}
          </p>
        </div>
        <p className="text-xs font-medium text-muted">{mode.players}</p>
      </div>
    </article>
  );
}