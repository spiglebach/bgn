import {Game, GameOccasion, GameType} from "@/model/model";

export const games: Game[] = [
  {
    name: "Yunka",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 1.5,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["állatok", "dzsungel", "felfedezős", "dinamikus térkép", "ablak"]
  },
  {
    name: "Eldorádó Legendája",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 1.94,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["kaland", "dzsungel", "felfedezős", "moduláris térkép", "kártyák", "pakliépítés"]
  },
  {
    name: "Farkasok",
    minimumPlayerCount: 2,
    maximumPlayerCount: 5,
    complexity: 2.79,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive, GameType.Confrontative],
    // labels: ["állatok", "falka irányítás", "moduláris térkép", "engine building"]
  },
  {
    name: "Juharvölgy Krónikája",
    minimumPlayerCount: 1,
    maximumPlayerCount: 5,
    complexity: 2.39,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["állatok", "cuki", "erőforrás kezelés", "munkáslehelyezés", "dobókocka"]
  },
  {
    name: "Ősi Jel",
    minimumPlayerCount: 1,
    maximumPlayerCount: 8,
    complexity: 2.34,
    image: "/games/placeholder.png",
    gameType: [GameType.Cooperative],
    // labels: ["Lovecraft", "ősi gonosz", "karakterképességek", "push your luck", "dobókocka", "együttműködés"]
  },
  {
    name: "Igen?",
    minimumPlayerCount: 2,
    maximumPlayerCount: 6,
    complexity: 1,
    image: "/games/placeholder.png",
    gameType: [GameType.Social, GameType.Competitive],
    // labels: ["beszélgetős", "kérdések", "válasz tippelés", "elgondolkodtató", "beszélgetésindító", "ismerkedős"]
  },
  {
    name: "Scrabble",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 1.5,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["szójáték", "betű", "gondolkodós", "nyelvtani", "győzelmi pontok"]
  },
  {
    name: "Ark Nova",
    minimumPlayerCount: 1,
    maximumPlayerCount: 4,
    complexity: 3.75,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["állatok", "állatkert", "építős", "győzelmi pontok"]
  },
  {
    name: "7 Csoda Párbaj",
    minimumPlayerCount: 2,
    maximumPlayerCount: 2,
    complexity: 2.23,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["ókor", "draft", "tablóépítés", "győzelmi pontok", "több győzelmi faktor"]
  },
  {
    name: "Root",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 3.8,
    image: "/games/placeholder.png",
    gameType: [GameType.Confrontative],
    // labels: ["állatok", "cuki", "háborús", "térkép", "asszimetrikus"]
  },
  {
    name: "Párizs: A fények városa",
    minimumPlayerCount: 2,
    maximumPlayerCount: 2,
    complexity: 2.03,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive],
    // labels: ["polyomino", "tetrisz", "építős", "szép", "több fázisos"]
  },
  {
    name: "Pandemic",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 2.40,
    image: "/games/placeholder.png",
    gameType: [GameType.Cooperative],
    // labels: ["egészségügy", "világtérkép", "vírus", "ellenszer"]
  },
  {
    name: "Sakk",
    minimumPlayerCount: 2,
    maximumPlayerCount: 2,
    complexity: 3.65,
    image: "/games/placeholder.png",
    gameType: [GameType.Confrontative]
  },
  {
    name: "CV",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 1.85,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive]
  },
  {
    name: "Kokopelli",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 2.03,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive, GameType.Confrontative]
  },
  {
    name: "Shit Happens",
    minimumPlayerCount: 2,
    maximumPlayerCount: 8,
    complexity: 1.06,
    image: "/games/placeholder.png",
    gameType: [GameType.Social, GameType.Competitive]
  },
  {
    name: "Calavera",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 1.09,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive]
  },
  {
    name: "Bonszai",
    minimumPlayerCount: 1,
    maximumPlayerCount: 4,
    complexity: 1.89,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive]
  },
  {
    name: "Kartográfusok",
    minimumPlayerCount: 1,
    maximumPlayerCount: 100,
    complexity: 1.88,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive, GameType.Confrontative]
  },
  {
    name: "Fedőnevek: Négyszemközt",
    minimumPlayerCount: 2,
    maximumPlayerCount: 2,
    complexity: 1.36,
    image: "/games/placeholder.png",
    gameType: [GameType.Cooperative]
  },
  {
    name: "Kariba",
    minimumPlayerCount: 2,
    maximumPlayerCount: 4,
    complexity: 1.06,
    image: "/games/placeholder.png",
    gameType: [GameType.Competitive]
  },
  {
    name: "Skull",
    minimumPlayerCount: 3,
    maximumPlayerCount: 6,
    complexity: 1.12,
    image: "/games/placeholder.png",
    gameType: [GameType.Social, GameType.Competitive]
  },
]

export const gameOccasions: GameOccasion[] = [
  {
    startTime: new Date(2024, 0O6, 10, 17, 30),
    participants: {
      accepted: 5,
      declined: 2,
      pending: 0
    }
  },
  {
    startTime: new Date(2024, 0O6, 12, 17, 30),
    participants: {
      accepted: 2,
      declined: 0,
      pending: 5
    }
  },
  {
    startTime: new Date(2024, 0O7, 2, 17, 30),
    participants: {
      accepted: 0,
      declined: 1,
      pending: 6
    }
  }
]
