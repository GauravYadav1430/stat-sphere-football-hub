
import { API_FOOTBALL_URL, API_HEADERS } from './config';

// Types based on API-Football response structure
export interface ApiFootballTeam {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

export const fetchTeams = async (league = 39, season = 2023): Promise<ApiFootballTeam[]> => {
  try {
    const response = await fetch(`${API_FOOTBALL_URL}/teams?league=${league}&season=${season}`, {
      method: 'GET',
      headers: API_HEADERS,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

export const fetchTeamDetails = async (teamId: number): Promise<ApiFootballTeam> => {
  try {
    const response = await fetch(`${API_FOOTBALL_URL}/teams?id=${teamId}`, {
      method: 'GET',
      headers: API_HEADERS,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.response[0];
  } catch (error) {
    console.error(`Error fetching team details for ID ${teamId}:`, error);
    throw error;
  }
};

export const searchTeams = async (name: string): Promise<ApiFootballTeam[]> => {
  try {
    const response = await fetch(`${API_FOOTBALL_URL}/teams?search=${name}`, {
      method: 'GET',
      headers: API_HEADERS,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(`Error searching for teams with name ${name}:`, error);
    throw error;
  }
};
