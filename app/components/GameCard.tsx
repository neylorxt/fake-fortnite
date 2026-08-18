import Image from "next/image";
import type { Game } from "../lib/data";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border-soft bg-card transition-transform duration-200 hover:scale-105">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden">
        <Image
          src={game.image}
          alt={`Miniature de ${game.title}`}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 20vw"
          className="object-cover transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-4">
        <h3
          className="truncate font-display text-lg italic leading-tight text-foreground sm:text-xl"
          title={game.title}
        >
          {game.title}
        </h3>
        <p className="truncate text-xs font-medium text-muted">{game.players}</p>
      </div>
    </article>
  );
}