
import { Link } from 'react-router-dom';
import { Player } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Link to={`/players/${player.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="h-48 overflow-hidden">
          <img 
            src={player.image} 
            alt={player.name} 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center mb-2">
            <img 
              src={player.clubLogo} 
              alt={player.currentClub} 
              className="w-6 h-6 mr-2 object-contain"
            />
            <span className="text-xs text-muted-foreground">{player.currentClub}</span>
          </div>
          <h3 className="font-heading font-semibold text-lg mb-1">{player.name}</h3>
          <div className="flex items-center mb-2 text-sm">
            <img
              src={player.nationalityFlag}
              alt={player.nationality}
              className="w-5 h-4 mr-1"
            />
            <span>{player.nationality}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span>{player.position}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="text-center p-1 bg-muted rounded">
              <p className="font-semibold">{player.stats.goals}</p>
              <p className="text-xs text-muted-foreground">Goals</p>
            </div>
            <div className="text-center p-1 bg-muted rounded">
              <p className="font-semibold">{player.stats.assists}</p>
              <p className="text-xs text-muted-foreground">Assists</p>
            </div>
            <div className="text-center p-1 bg-muted rounded">
              <p className="font-semibold">{player.stats.appearances}</p>
              <p className="text-xs text-muted-foreground">Games</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
