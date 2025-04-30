
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatDisplay } from '@/components/player/StatDisplay';
import { Player, players } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const ComparisonPage = () => {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);
  
  // Generate comparison data for charts
  const generateComparisonData = () => {
    if (!player1 || !player2) return [];
    
    return [
      {
        name: 'Goals',
        [player1.name]: player1.stats.goals,
        [player2.name]: player2.stats.goals,
      },
      {
        name: 'Assists',
        [player1.name]: player1.stats.assists,
        [player2.name]: player2.stats.assists,
      },
      {
        name: 'Appearances',
        [player1.name]: player1.stats.appearances,
        [player2.name]: player2.stats.appearances,
      },
      {
        name: 'Pass Accuracy',
        [player1.name]: player1.stats.passAccuracy || 0,
        [player2.name]: player2.stats.passAccuracy || 0,
      },
      {
        name: 'Minutes Played (K)',
        [player1.name]: player1.stats.minutesPlayed / 1000,
        [player2.name]: player2.stats.minutesPlayed / 1000,
      },
    ];
  };
  
  // Check if players are selected
  const isComparable = player1 && player2;
  
  return (
    <Layout>
      <div className="container-layout">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Player Comparison</h1>
          <p className="text-muted-foreground">Compare any two players side by side to see who performs better.</p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Players to Compare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">First Player</label>
                <Select 
                  onValueChange={(value) => {
                    const selected = players.find(p => p.id === value);
                    setPlayer1(selected || null);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a player" />
                  </SelectTrigger>
                  <SelectContent>
                    {players.map((player) => (
                      <SelectItem key={player.id} value={player.id}>
                        <div className="flex items-center">
                          <img 
                            src={player.image} 
                            alt={player.name} 
                            className="w-6 h-6 rounded-full mr-2 object-cover object-top" 
                          />
                          {player.name} - {player.position}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Second Player</label>
                <Select 
                  onValueChange={(value) => {
                    const selected = players.find(p => p.id === value);
                    setPlayer2(selected || null);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a player" />
                  </SelectTrigger>
                  <SelectContent>
                    {players.map((player) => (
                      <SelectItem key={player.id} value={player.id}>
                        <div className="flex items-center">
                          <img 
                            src={player.image} 
                            alt={player.name} 
                            className="w-6 h-6 rounded-full mr-2 object-cover object-top" 
                          />
                          {player.name} - {player.position}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {isComparable ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={player1.image} 
                      alt={player1.name} 
                      className="w-16 h-16 rounded-full mr-3 object-cover object-top" 
                    />
                    <div>
                      <h2 className="font-heading font-semibold text-xl">{player1.name}</h2>
                      <div className="flex items-center">
                        <img 
                          src={player1.clubLogo} 
                          alt={player1.currentClub} 
                          className="w-5 h-5 mr-1" 
                        />
                        <span className="text-sm">{player1.currentClub}</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-sm">{player1.position}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Nationality</span>
                      <div className="flex items-center">
                        <img 
                          src={player1.nationalityFlag} 
                          alt={player1.nationality} 
                          className="w-4 h-3 mr-1" 
                        />
                        <p>{player1.nationality}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Age</span>
                      <p>{player1.age} years</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Height</span>
                      <p>{player1.height}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Value</span>
                      <p>{player1.marketValue}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="text-lg font-semibold">{player1.stats.goals}</p>
                        <p className="text-xs text-muted-foreground">Goals</p>
                      </div>
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="text-lg font-semibold">{player1.stats.assists}</p>
                        <p className="text-xs text-muted-foreground">Assists</p>
                      </div>
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="text-lg font-semibold">{player1.stats.appearances}</p>
                        <p className="text-xs text-muted-foreground">Games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={player2.image} 
                      alt={player2.name} 
                      className="w-16 h-16 rounded-full mr-3 object-cover object-top" 
                    />
                    <div>
                      <h2 className="font-heading font-semibold text-xl">{player2.name}</h2>
                      <div className="flex items-center">
                        <img 
                          src={player2.clubLogo} 
                          alt={player2.currentClub} 
                          className="w-5 h-5 mr-1" 
                        />
                        <span className="text-sm">{player2.currentClub}</span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-sm">{player2.position}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Nationality</span>
                      <div className="flex items-center">
                        <img 
                          src={player2.nationalityFlag} 
                          alt={player2.nationality} 
                          className="w-4 h-3 mr-1" 
                        />
                        <p>{player2.nationality}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Age</span>
                      <p>{player2.age} years</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Height</span>
                      <p>{player2.height}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Value</span>
                      <p>{player2.marketValue}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="text-lg font-semibold">{player2.stats.goals}</p>
                        <p className="text-xs text-muted-foreground">Goals</p>
                      </div>
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="text-lg font-semibold">{player2.stats.assists}</p>
                        <p className="text-xs text-muted-foreground">Assists</p>
                      </div>
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="text-lg font-semibold">{player2.stats.appearances}</p>
                        <p className="text-xs text-muted-foreground">Games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mb-8">
              <StatDisplay
                title={`${player1.name} vs ${player2.name} - Career Statistics`}
                data={generateComparisonData()}
                type="bar"
                dataKeys={[player1.name, player2.name]}
                colors={['#3b82f6', '#f59e0b']}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Per 90 Metrics Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Metric</th>
                        <th className="p-2 text-center">{player1.name}</th>
                        <th className="p-2 text-center">{player2.name}</th>
                        <th className="p-2 text-center">Difference</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Goals per 90</td>
                        <td className="p-2 text-center font-medium">
                          {(player1.stats.goals / (player1.stats.minutesPlayed / 90)).toFixed(2)}
                        </td>
                        <td className="p-2 text-center font-medium">
                          {(player2.stats.goals / (player2.stats.minutesPlayed / 90)).toFixed(2)}
                        </td>
                        <td className="p-2 text-center">
                          {((player1.stats.goals / (player1.stats.minutesPlayed / 90)) - 
                            (player2.stats.goals / (player2.stats.minutesPlayed / 90))).toFixed(2)}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Assists per 90</td>
                        <td className="p-2 text-center font-medium">
                          {(player1.stats.assists / (player1.stats.minutesPlayed / 90)).toFixed(2)}
                        </td>
                        <td className="p-2 text-center font-medium">
                          {(player2.stats.assists / (player2.stats.minutesPlayed / 90)).toFixed(2)}
                        </td>
                        <td className="p-2 text-center">
                          {((player1.stats.assists / (player1.stats.minutesPlayed / 90)) - 
                            (player2.stats.assists / (player2.stats.minutesPlayed / 90))).toFixed(2)}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Minutes per goal</td>
                        <td className="p-2 text-center font-medium">
                          {Math.round(player1.stats.minutesPlayed / player1.stats.goals)}
                        </td>
                        <td className="p-2 text-center font-medium">
                          {Math.round(player2.stats.minutesPlayed / player2.stats.goals)}
                        </td>
                        <td className="p-2 text-center">
                          {Math.round(
                            (player1.stats.minutesPlayed / player1.stats.goals) - 
                            (player2.stats.minutesPlayed / player2.stats.goals)
                          )}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Goal contributions</td>
                        <td className="p-2 text-center font-medium">
                          {player1.stats.goals + player1.stats.assists}
                        </td>
                        <td className="p-2 text-center font-medium">
                          {player2.stats.goals + player2.stats.assists}
                        </td>
                        <td className="p-2 text-center">
                          {(player1.stats.goals + player1.stats.assists) - 
                            (player2.stats.goals + player2.stats.assists)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Verdict</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Based on the statistical comparison between {player1.name} and {player2.name}, 
                    {player1.stats.goals > player2.stats.goals 
                      ? ` ${player1.name} has scored more goals` 
                      : ` ${player2.name} has scored more goals`
                    } throughout their career.
                  </p>
                  <p className="mb-4">
                    In terms of assists, 
                    {player1.stats.assists > player2.stats.assists 
                      ? ` ${player1.name} has provided more` 
                      : ` ${player2.name} has provided more`
                    }, while 
                    {player1.stats.appearances > player2.stats.appearances 
                      ? ` ${player1.name} has made more appearances` 
                      : ` ${player2.name} has made more appearances`
                    }.
                  </p>
                  <p>
                    When considering overall impact, both players have impressive statistics, but
                    {(player1.stats.goals + player1.stats.assists) > (player2.stats.goals + player2.stats.assists)
                      ? ` ${player1.name} has contributed to more goals overall.` 
                      : ` ${player2.name} has contributed to more goals overall.`
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-muted rounded-lg">
            <h3 className="text-xl font-heading mb-3">Select Two Players to Compare</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Choose players from the dropdown menus above to see a detailed statistical comparison.
            </p>
            <Button disabled>Compare Players</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ComparisonPage;
