
// Types
export interface Player {
  id: string;
  name: string;
  fullName?: string;
  image: string;
  position: string;
  nationality: string;
  nationalityFlag: string;
  age: number;
  height: string;
  weight: string;
  currentClub: string;
  clubLogo: string;
  marketValue: string;
  stats: {
    appearances: number;
    goals: number;
    assists: number;
    cleanSheets?: number;
    yellowCards: number;
    redCards: number;
    passAccuracy?: number;
    minutesPlayed: number;
  };
  seasonStats: SeasonStats[];
}

export interface SeasonStats {
  season: string;
  club: string;
  clubLogo: string;
  league: string;
  leagueLogo: string;
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
  passAccuracy?: number;
  cleanSheets?: number;
  saves?: number;
  tackles?: number;
  interceptions?: number;
  duelsWon?: number;
  rating: number;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  country: string;
  countryFlag: string;
  league: string;
  leagueLogo: string;
  manager: string;
  stadium: string;
  founded: number;
}

// Mock player data
export const players: Player[] = [
  {
    id: "p1",
    name: "Lionel Messi",
    fullName: "Lionel Andrés Messi",
    image: "https://placehold.co/400x500?text=L.Messi",
    position: "Forward",
    nationality: "Argentina",
    nationalityFlag: "https://placehold.co/32x20?text=ARG",
    age: 36,
    height: "1.70m",
    weight: "72kg",
    currentClub: "Inter Miami CF",
    clubLogo: "https://placehold.co/60x60?text=Miami",
    marketValue: "$35M",
    stats: {
      appearances: 878,
      goals: 720,
      assists: 344,
      yellowCards: 84,
      redCards: 3,
      passAccuracy: 86,
      minutesPlayed: 74520,
    },
    seasonStats: [
      {
        season: "2022-2023",
        club: "Paris Saint-Germain",
        clubLogo: "https://placehold.co/40x40?text=PSG",
        league: "Ligue 1",
        leagueLogo: "https://placehold.co/30x30?text=L1",
        appearances: 32,
        goals: 16,
        assists: 16,
        yellowCards: 2,
        redCards: 0,
        minutesPlayed: 2710,
        passAccuracy: 89,
        tackles: 15,
        interceptions: 8,
        duelsWon: 120,
        rating: 8.1,
      },
      {
        season: "2021-2022",
        club: "Paris Saint-Germain",
        clubLogo: "https://placehold.co/40x40?text=PSG",
        league: "Ligue 1",
        leagueLogo: "https://placehold.co/30x30?text=L1",
        appearances: 26,
        goals: 6,
        assists: 14,
        yellowCards: 0,
        redCards: 0,
        minutesPlayed: 2210,
        passAccuracy: 87,
        tackles: 10,
        interceptions: 5,
        duelsWon: 102,
        rating: 7.4,
      },
    ],
  },
  {
    id: "p2",
    name: "Cristiano Ronaldo",
    fullName: "Cristiano Ronaldo dos Santos Aveiro",
    image: "https://placehold.co/400x500?text=C.Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    nationalityFlag: "https://placehold.co/32x20?text=POR",
    age: 38,
    height: "1.87m",
    weight: "85kg",
    currentClub: "Al Nassr FC",
    clubLogo: "https://placehold.co/60x60?text=AlNassr",
    marketValue: "$20M",
    stats: {
      appearances: 935,
      goals: 741,
      assists: 226,
      yellowCards: 112,
      redCards: 11,
      passAccuracy: 82,
      minutesPlayed: 78040,
    },
    seasonStats: [
      {
        season: "2022-2023",
        club: "Manchester United",
        clubLogo: "https://placehold.co/40x40?text=MUN",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 16,
        goals: 3,
        assists: 2,
        yellowCards: 3,
        redCards: 0,
        minutesPlayed: 1260,
        passAccuracy: 78,
        tackles: 4,
        interceptions: 2,
        duelsWon: 65,
        rating: 6.8,
      },
      {
        season: "2021-2022",
        club: "Manchester United",
        clubLogo: "https://placehold.co/40x40?text=MUN",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 30,
        goals: 18,
        assists: 3,
        yellowCards: 8,
        redCards: 0,
        minutesPlayed: 2460,
        passAccuracy: 81,
        tackles: 7,
        interceptions: 3,
        duelsWon: 95,
        rating: 7.6,
      },
    ],
  },
  {
    id: "p3",
    name: "Erling Haaland",
    fullName: "Erling Braut Haaland",
    image: "https://placehold.co/400x500?text=E.Haaland",
    position: "Forward",
    nationality: "Norway",
    nationalityFlag: "https://placehold.co/32x20?text=NOR",
    age: 23,
    height: "1.94m",
    weight: "88kg",
    currentClub: "Manchester City",
    clubLogo: "https://placehold.co/60x60?text=MCI",
    marketValue: "$180M",
    stats: {
      appearances: 217,
      goals: 188,
      assists: 42,
      yellowCards: 17,
      redCards: 0,
      passAccuracy: 72,
      minutesPlayed: 16140,
    },
    seasonStats: [
      {
        season: "2022-2023",
        club: "Manchester City",
        clubLogo: "https://placehold.co/40x40?text=MCI",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 35,
        goals: 36,
        assists: 8,
        yellowCards: 5,
        redCards: 0,
        minutesPlayed: 2760,
        passAccuracy: 76,
        tackles: 6,
        interceptions: 1,
        duelsWon: 105,
        rating: 8.3,
      },
      {
        season: "2021-2022",
        club: "Borussia Dortmund",
        clubLogo: "https://placehold.co/40x40?text=BVB",
        league: "Bundesliga",
        leagueLogo: "https://placehold.co/30x30?text=BUN",
        appearances: 24,
        goals: 22,
        assists: 7,
        yellowCards: 2,
        redCards: 0,
        minutesPlayed: 1930,
        passAccuracy: 74,
        tackles: 4,
        interceptions: 2,
        duelsWon: 89,
        rating: 7.8,
      },
    ],
  },
  {
    id: "p4",
    name: "Kevin De Bruyne",
    fullName: "Kevin De Bruyne",
    image: "https://placehold.co/400x500?text=K.DeBruyne",
    position: "Midfielder",
    nationality: "Belgium",
    nationalityFlag: "https://placehold.co/32x20?text=BEL",
    age: 32,
    height: "1.81m",
    weight: "76kg",
    currentClub: "Manchester City",
    clubLogo: "https://placehold.co/60x60?text=MCI",
    marketValue: "$70M",
    stats: {
      appearances: 491,
      goals: 97,
      assists: 206,
      yellowCards: 58,
      redCards: 2,
      passAccuracy: 89,
      minutesPlayed: 39300,
    },
    seasonStats: [
      {
        season: "2022-2023",
        club: "Manchester City",
        clubLogo: "https://placehold.co/40x40?text=MCI",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 32,
        goals: 7,
        assists: 16,
        yellowCards: 4,
        redCards: 0,
        minutesPlayed: 2650,
        passAccuracy: 91,
        tackles: 32,
        interceptions: 18,
        duelsWon: 120,
        rating: 8.2,
      },
      {
        season: "2021-2022",
        club: "Manchester City",
        clubLogo: "https://placehold.co/40x40?text=MCI",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 30,
        goals: 15,
        assists: 8,
        yellowCards: 2,
        redCards: 0,
        minutesPlayed: 2340,
        passAccuracy: 88,
        tackles: 28,
        interceptions: 15,
        duelsWon: 110,
        rating: 7.9,
      },
    ],
  },
  {
    id: "p5",
    name: "Kylian Mbappé",
    fullName: "Kylian Mbappé Lottin",
    image: "https://placehold.co/400x500?text=K.Mbappé",
    position: "Forward",
    nationality: "France",
    nationalityFlag: "https://placehold.co/32x20?text=FRA",
    age: 24,
    height: "1.78m",
    weight: "73kg",
    currentClub: "Paris Saint-Germain",
    clubLogo: "https://placehold.co/60x60?text=PSG",
    marketValue: "$180M",
    stats: {
      appearances: 336,
      goals: 244,
      assists: 108,
      yellowCards: 43,
      redCards: 1,
      passAccuracy: 80,
      minutesPlayed: 26340,
    },
    seasonStats: [
      {
        season: "2022-2023",
        club: "Paris Saint-Germain",
        clubLogo: "https://placehold.co/40x40?text=PSG",
        league: "Ligue 1",
        leagueLogo: "https://placehold.co/30x30?text=L1",
        appearances: 34,
        goals: 29,
        assists: 6,
        yellowCards: 5,
        redCards: 0,
        minutesPlayed: 2790,
        passAccuracy: 83,
        tackles: 10,
        interceptions: 4,
        duelsWon: 135,
        rating: 8.4,
      },
      {
        season: "2021-2022",
        club: "Paris Saint-Germain",
        clubLogo: "https://placehold.co/40x40?text=PSG",
        league: "Ligue 1",
        leagueLogo: "https://placehold.co/30x30?text=L1",
        appearances: 35,
        goals: 28,
        assists: 17,
        yellowCards: 6,
        redCards: 0,
        minutesPlayed: 3010,
        passAccuracy: 82,
        tackles: 12,
        interceptions: 5,
        duelsWon: 128,
        rating: 8.5,
      },
    ],
  },
  {
    id: "p6",
    name: "Virgil van Dijk",
    fullName: "Virgil van Dijk",
    image: "https://placehold.co/400x500?text=V.vanDijk",
    position: "Defender",
    nationality: "Netherlands",
    nationalityFlag: "https://placehold.co/32x20?text=NED",
    age: 32,
    height: "1.93m",
    weight: "92kg",
    currentClub: "Liverpool FC",
    clubLogo: "https://placehold.co/60x60?text=LFC",
    marketValue: "$45M",
    stats: {
      appearances: 376,
      goals: 34,
      assists: 16,
      yellowCards: 46,
      redCards: 4,
      passAccuracy: 91,
      minutesPlayed: 32810,
    },
    seasonStats: [
      {
        season: "2022-2023",
        club: "Liverpool FC",
        clubLogo: "https://placehold.co/40x40?text=LFC",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 34,
        goals: 3,
        assists: 0,
        yellowCards: 4,
        redCards: 1,
        minutesPlayed: 3060,
        passAccuracy: 92,
        tackles: 58,
        interceptions: 42,
        duelsWon: 185,
        rating: 7.3,
      },
      {
        season: "2021-2022",
        club: "Liverpool FC",
        clubLogo: "https://placehold.co/40x40?text=LFC",
        league: "Premier League",
        leagueLogo: "https://placehold.co/30x30?text=EPL",
        appearances: 36,
        goals: 3,
        assists: 2,
        yellowCards: 3,
        redCards: 0,
        minutesPlayed: 3240,
        passAccuracy: 90,
        tackles: 65,
        interceptions: 48,
        duelsWon: 195,
        rating: 7.6,
      },
    ],
  },
];

// Mock team data
export const teams: Team[] = [
  {
    id: "t1",
    name: "Manchester City",
    logo: "https://placehold.co/100x100?text=MCI",
    country: "England",
    countryFlag: "https://placehold.co/32x20?text=ENG",
    league: "Premier League",
    leagueLogo: "https://placehold.co/50x50?text=EPL",
    manager: "Pep Guardiola",
    stadium: "Etihad Stadium",
    founded: 1880,
  },
  {
    id: "t2",
    name: "Real Madrid",
    logo: "https://placehold.co/100x100?text=RMA",
    country: "Spain",
    countryFlag: "https://placehold.co/32x20?text=ESP",
    league: "La Liga",
    leagueLogo: "https://placehold.co/50x50?text=LIGA",
    manager: "Carlo Ancelotti",
    stadium: "Santiago Bernabéu",
    founded: 1902,
  },
  {
    id: "t3",
    name: "Paris Saint-Germain",
    logo: "https://placehold.co/100x100?text=PSG",
    country: "France",
    countryFlag: "https://placehold.co/32x20?text=FRA",
    league: "Ligue 1",
    leagueLogo: "https://placehold.co/50x50?text=L1",
    manager: "Luis Enrique",
    stadium: "Parc des Princes",
    founded: 1970,
  },
  {
    id: "t4",
    name: "Bayern Munich",
    logo: "https://placehold.co/100x100?text=FCB",
    country: "Germany",
    countryFlag: "https://placehold.co/32x20?text=GER",
    league: "Bundesliga",
    leagueLogo: "https://placehold.co/50x50?text=BUN",
    manager: "Thomas Tuchel",
    stadium: "Allianz Arena",
    founded: 1900,
  },
  {
    id: "t5",
    name: "Liverpool FC",
    logo: "https://placehold.co/100x100?text=LFC",
    country: "England",
    countryFlag: "https://placehold.co/32x20?text=ENG",
    league: "Premier League",
    leagueLogo: "https://placehold.co/50x50?text=EPL",
    manager: "Jürgen Klopp",
    stadium: "Anfield",
    founded: 1892,
  },
  {
    id: "t6",
    name: "FC Barcelona",
    logo: "https://placehold.co/100x100?text=BAR",
    country: "Spain",
    countryFlag: "https://placehold.co/32x20?text=ESP",
    league: "La Liga",
    leagueLogo: "https://placehold.co/50x50?text=LIGA",
    manager: "Xavi Hernandez",
    stadium: "Camp Nou",
    founded: 1899,
  },
];

// Mock leaderboards
export const topScorers = players.sort((a, b) => b.stats.goals - a.stats.goals).slice(0, 10);
export const topAssisters = players.sort((a, b) => b.stats.assists - a.stats.assists).slice(0, 10);
export const mostAppearances = players.sort((a, b) => b.stats.appearances - a.stats.appearances).slice(0, 10);
