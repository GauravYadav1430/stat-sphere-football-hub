
import { API_FOOTBALL_URL, API_HEADERS } from './config';

// Types based on API-Football response structure
export interface ApiFootballPlayer {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  statistics: Array<{
    team: {
      id: number;
      name: string;
      logo: string;
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string;
      season: number;
    };
    games: {
      appearences: number;
      lineups: number;
      minutes: number;
      position: string;
      rating?: string;
      captain: boolean;
    };
    shots: {
      total?: number;
      on?: number;
    };
    goals: {
      total?: number;
      conceded?: number;
      assists?: number;
      saves?: number;
    };
    passes: {
      total?: number;
      key?: number;
      accuracy?: string;
    };
    tackles: {
      total?: number;
      blocks?: number;
      interceptions?: number;
    };
    cards: {
      yellow?: number;
      yellowred?: number;
      red?: number;
    };
  }>;
}

export const fetchTopPlayers = async (league = 39, season = 2023): Promise<ApiFootballPlayer[]> => {
  try {
    const response = await fetch(`${API_FOOTBALL_URL}/players/topscorers?league=${league}&season=${season}`, {
      method: 'GET',
      headers: API_HEADERS,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching top players:', error);
    throw error;
  }
};

export const fetchPlayerDetails = async (playerId: number): Promise<ApiFootballPlayer> => {
  try {
    const response = await fetch(`${API_FOOTBALL_URL}/players?id=${playerId}&season=2023`, {
      method: 'GET',
      headers: API_HEADERS,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.response[0];
  } catch (error) {
    console.error(`Error fetching player details for ID ${playerId}:`, error);
    throw error;
  }
};

export const searchPlayers = async (name: string): Promise<ApiFootballPlayer[]> => {
  try {
    const response = await fetch(`${API_FOOTBALL_URL}/players?search=${name}`, {
      method: 'GET',
      headers: API_HEADERS,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(`Error searching for players with name ${name}:`, error);
    throw error;
  }
};
