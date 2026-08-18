export type Mode = {
  name: string;
  tagline: string;
  players: string;
  age: string;
  image: string;
};

export type Game = {
  title: string;
  players: string;
  image: string;
};

export type GameCategory = {
  label: string;
  games: Game[];
};

export type NewsItem = {
  date: string;
  title: string;
  description: string;
  image: string;
};

export const modes: Mode[] = [
  {
    name: "Battle Royale",
    tagline: "Sois le dernier survivant.",
    players: "24,5 M de joueurs",
    age: "E",
    image: "/images/fortnite_Background.webp",
  },
  {
    name: "Zero Build",
    tagline: "Toute l'action, sans construction.",
    players: "18,2 M de joueurs",
    age: "E",
    image:
      "/images/FNBR_Reload_41-30_Ropesmile_WebCarousel_Background_1920x1080.webp",
  },
  {
    name: "Creative",
    tagline: "Crée et découvre des expériences uniques.",
    players: "12,7 M de joueurs",
    age: "E",
    image: "/images/background_creatures_web.webp",
  },
  {
    name: "Racing",
    tagline: "Affronte les autres joueurs à pleine vitesse.",
    players: "9,8 M de joueurs",
    age: "E",
    image: "/images/Collaboration-Fortnite-x-Formule-1.png",
  },
];

const gameImages: Record<string, string> = {
  "Sky Wars": "/images/games/sky-wars.png",
  "Color Rush": "/images/games/color-rush.png",
  "Zombie Escape": "/images/games/zombie-escape.png",
  "City Life": "/images/games/city-life.png",
  "Box Fight": "/images/games/box-fight.png",
  "Death Run": "/images/games/death-run.png",
  "Battle Arena": "/images/games/battle-arena.png",
  "Mega Ramp": "/images/games/mega-ramp.png",
  "Hide & Seek": "/images/games/hide-seek.png",
  "Survival Island": "/images/games/survival-island.png",
  "Party World": "/images/games/party-world.png",
  "Backrooms Escape": "/images/games/backrooms.png",
};

const gamePlayers: Record<string, string> = {
  "Sky Wars": "2,4 M de joueurs",
  "Color Rush": "1,1 M de joueurs",
  "Zombie Escape": "3,2 M de joueurs",
  "City Life": "890 K de joueurs",
  "Box Fight": "4,1 M de joueurs",
  "Death Run": "2,8 M de joueurs",
  "Battle Arena": "5,6 M de joueurs",
  "Mega Ramp": "1,7 M de joueurs",
  "Hide & Seek": "950 K de joueurs",
  "Survival Island": "3,9 M de joueurs",
  "Party World": "2,2 M de joueurs",
  "Backrooms Escape": "1,4 M de joueurs",
};

const games: Game[] = Object.keys(gameImages).map((title) => ({
  title,
  players: gamePlayers[title],
  image: gameImages[title],
}));

export const gameCategories: GameCategory[] = [
  {
    label: "Populaire aujourd'hui",
    games: [
      games[9],
      games[6],
      games[2],
      games[10],
      games[4],
      games[5],
    ],
  },
  {
    label: "Jeux entre amis",
    games: [
      games[8],
      games[7],
      games[4],
      games[0],
      games[10],
      games[11],
    ],
  },
  {
    label: "Stratégie",
    games: [
      games[5],
      games[9],
      games[11],
      games[3],
      games[1],
      games[2],
    ],
  },
  {
    label: "Course",
    games: [
      games[7],
      games[0],
      games[1],
      games[5],
      games[6],
      games[3],
    ],
  },
];

export const news: NewsItem[] = [
  {
    date: "14 août 2026",
    title: "Nouvelle saison disponible",
    description:
      "Découvre une nouvelle carte, de nouvelles armes et de nouveaux défis.",
    image: "/images/une-fortnite.png",
  },
  {
    date: "28 juillet 2026",
    title: "Nouveau mode disponible",
    description:
      "Découvre une nouvelle façon de jouer avec tes amis.",
    image: "/images/Fortnite-skins.jpg",
  },
  {
    date: "12 juillet 2026",
    title: "Mise à jour FakeFortnite",
    description:
      "De nouvelles expériences arrivent cette semaine.",
    image: "/images/Fortnite-skins-2.jpg",
  },
];