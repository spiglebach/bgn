
export interface Game {
  name: string
  minimumPlayerCount: number
  maximumPlayerCount: number
  complexity: number
  gameType: GameType[]
  // labels: string[]
  image: string
}

export enum GameType {
  Competitive,
  Cooperative,
  Confrontative,
  Detective,
  Social
}

export interface GameOccasion {
  startTime: Date
  participants: {
    accepted: number
    declined: number
    pending: number
  }
}
