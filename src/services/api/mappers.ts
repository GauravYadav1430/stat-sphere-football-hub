
import { Player, Team, SeasonStats } from '@/data/mockData';
import { ApiFootballPlayer } from './playersApi';
import { ApiFootballTeam } from './teamsApi';

export const mapApiPlayerToAppPlayer = (apiPlayer: ApiFootballPlayer): Player => {
  // Get the main statistics from the first item in the statistics array
  const mainStats = apiPlayer.statistics[0] || {};
  
  return {
    id: apiPlayer.player.id.toString(),
    name: apiPlayer.player.name,
    fullName: `${apiPlayer.player.firstname} ${apiPlayer.player.lastname}`,
    image: apiPlayer.player.photo,
    position: mainStats.games?.position || 'Unknown',
    nationality: apiPlayer.player.nationality,
    nationalityFlag: mainStats.league?.flag || 'https://placehold.co/32x20?text=FLAG',
    age: apiPlayer.player.age,
    height: apiPlayer.player.height || 'Unknown',
    weight: apiPlayer.player.weight || 'Unknown',
    currentClub: mainStats.team?.name || 'Unknown',
    clubLogo: mainStats.team?.logo || 'https://placehold.co/60x60?text=CLUB',
    marketValue: 'Unknown', // API doesn't provide market value
    stats: {
      appearances: mainStats.games?.appearences || 0,
      goals: mainStats.goals?.total || 0,
      assists: mainStats.goals?.assists || 0,
      cleanSheets: undefined, // Not directly available in this API
      yellowCards: mainStats.cards?.yellow || 0,
      redCards: mainStats.cards?.red || 0,
      passAccuracy: mainStats.passes?.accuracy ? parseInt(mainStats.passes.accuracy) : undefined,
      minutesPlayed: mainStats.games?.minutes || 0,
    },
    seasonStats: apiPlayer.statistics.map(stat => mapApiStatToSeasonStat(stat)),
  };
};

const mapApiStatToSeasonStat = (stat: ApiFootballPlayer['statistics'][0]): SeasonStats => {
  return {
    season: stat.league?.season?.toString() || 'Unknown',
    club: stat.team?.name || 'Unknown',
    clubLogo: stat.team?.logo || 'https://placehold.co/40x40?text=CLUB',
    league: stat.league?.name || 'Unknown',
    leagueLogo: stat.league?.logo || 'https://placehold.co/30x30?text=LEAGUE',
    appearances: stat.games?.appearences || 0,
    goals: stat.goals?.total || 0,
    assists: stat.goals?.assists || 0,
    yellowCards: stat.cards?.yellow || 0,
    redCards: stat.cards?.red || 0,
    minutesPlayed: stat.games?.minutes || 0,
    passAccuracy: stat.passes?.accuracy ? parseInt(stat.passes.accuracy) : undefined,
    cleanSheets: undefined, // Not directly available
    saves: stat.goals?.saves,
    tackles: stat.tackles?.total,
    interceptions: stat.tackles?.interceptions,
    duelsWon: undefined, // Not directly available
    rating: stat.games?.rating ? parseFloat(stat.games.rating) : 0,
  };
};

export const mapApiTeamToAppTeam = (apiTeam: ApiFootballTeam): Team => {
  return {
    id: apiTeam.team.id.toString(),
    name: apiTeam.team.name,
    logo: apiTeam.team.logo,
    country: apiTeam.team.country,
    countryFlag: 'https://placehold.co/32x20?text=' + apiTeam.team.country.substring(0, 3).toUpperCase(),
    league: '', // Need to be set from different API call
    leagueLogo: 'https://placehold.co/50x50?text=LEAGUE',
    manager: 'Unknown', // API doesn't provide manager info directly
    stadium: apiTeam.venue?.name || 'Unknown',
    founded: apiTeam.team.founded || 0,
  };
};
