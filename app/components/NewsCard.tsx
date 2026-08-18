import Image from "next/image";
import type { NewsItem } from "../lib/data";

type NewsCardProps = {
  item: NewsItem;
};

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-soft bg-card transition-transform duration-200 hover:scale-105">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={item.image}
          alt={`Image de l'article ${item.title}`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs font-medium text-muted">{item.date}</time>
        <h3 className="mt-2 font-display text-xl italic leading-tight text-foreground sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        <a
          href="#actualites"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-accent"
        >
          Lire la suite
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}