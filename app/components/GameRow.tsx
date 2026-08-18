import type { GameCategory } from "../lib/data";
import GameCard from "./GameCard";

type GameRowProps = {
  category: GameCategory;
};

export default function GameRow({ category }: GameRowProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-4">
        <h3 className="shrink-0 font-display text-xl italic tracking-wide text-foreground sm:text-2xl">
          {category.label}
        </h3>
        <span className="h-px w-full bg-border-soft" />
      </div>

      {/* Grille desktop / carousel mobile */}
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:grid-cols-3 lg:grid-cols-6">
        {category.games.map((game) => (
          <div
            key={game.title}
            className="w-[72%] max-w-64 shrink-0 snap-start sm:h-full sm:w-auto sm:max-w-none"
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}