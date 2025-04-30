
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { StatDisplay } from '@/components/player/StatDisplay';
import { players } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark, Share2 } from 'lucide-react';

const PlayerDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const player = players.find(p => p.id === id);
  
  if (!player) {
    return (
      <Layout>
        <div className="container-layout text-center">
          <h1 className="text-3xl font-heading font-semibold mb-4">Player Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the player you were looking for.</p>
          <Link to="/players">
            <Button>Back to Players</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Format season stats for charts
  const seasonLabels = player.seasonStats.map(stats => stats.season);
  const goalsData = player.seasonStats.map((stats, index) => ({
    name: stats.season,
    Goals: stats.goals,
    Assists: stats.assists,
  }));
  
  const performanceData = player.seasonStats.map((stats, index) => ({
    name: stats.season,
    Rating: stats.rating * 10, // Scale for better visualization
    Minutes: stats.minutesPlayed / 100, // Scale down for better visualization
  }));
  
  return (
    <Layout>
      <div className="container-layout">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Player Profile Sidebar */}
          <div className="md:w-1/3 lg:w-1/4">
            <Card className="sticky top-20">
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={player.clubLogo}
                    alt={player.currentClub}
                    className="w-10 h-10 mr-3"
                  />
                  <div>
                    <h1 className="font-heading font-bold text-2xl">{player.name}</h1>
                    <p className="text-sm text-muted-foreground">{player.currentClub}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <img 
                      src={player.nationalityFlag}
                      alt={player.nationality}
                      className="w-6 h-4 mr-2"
                    />
                    <span>{player.nationality}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Position</span>
                      <p className="font-medium">{player.position}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Age</span>
                      <p className="font-medium">{player.age}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Height</span>
                      <p className="font-medium">{player.height}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Weight</span>
                      <p className="font-medium">{player.weight}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Market Value</span>
                      <p className="font-medium">{player.marketValue}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-heading font-semibold mb-3">Career Stats</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="font-bold text-lg">{player.stats.appearances}</p>
                        <p className="text-xs text-muted-foreground">Games</p>
                      </div>
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="font-bold text-lg">{player.stats.goals}</p>
                        <p className="text-xs text-muted-foreground">Goals</p>
                      </div>
                      <div className="bg-muted rounded p-2 text-center">
                        <p className="font-bold text-lg">{player.stats.assists}</p>
                        <p className="text-xs text-muted-foreground">Assists</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:w-2/3 lg:w-3/4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="stats">Detailed Stats</TabsTrigger>
                <TabsTrigger value="history">Career History</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-heading font-semibold text-xl mb-4">Player Summary</h2>
                    <p className="mb-4">
                      {player.fullName || player.name} is a {player.age}-year-old {player.nationality} professional footballer 
                      who currently plays as a {player.position} for {player.currentClub}.
                    </p>
                    <p>
                      Throughout their career, they've made {player.stats.appearances} appearances, scoring {player.stats.goals} goals
                      and providing {player.stats.assists} assists. Their playing style is characterized by {player.position === 'Forward' 
                        ? 'clinical finishing and movement in the final third' 
                        : player.position === 'Midfielder' 
                          ? 'vision, passing ability, and tactical awareness' 
                          : 'defensive prowess, positioning, and reading of the game'}.
                    </p>
                  </CardContent>
                </Card>
                
                <StatDisplay
                  title="Goals & Assists by Season"
                  data={goalsData}
                  type="bar"
                  dataKeys={['Goals', 'Assists']}
                  colors={['#3b82f6', '#10b981']}
                />
                
                <StatDisplay
                  title="Performance Metrics"
                  data={performanceData}
                  type="line"
                  dataKeys={['Rating', 'Minutes']}
                  colors={['#f59e0b', '#8b5cf6']}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold mb-3">Playing Style</h3>
                      <p className="text-muted-foreground">
                        {player.position === 'Forward'
                          ? `Known for exceptional finishing ability, off-the-ball movement, and creating space in the final third. ${player.name} has a keen eye for goal and times runs with precision.`
                          : player.position === 'Midfielder'
                            ? `Combines technical skill with tactical intelligence. ${player.name} excels in passing, vision, and controlling the tempo of the game while contributing both defensively and in attack.`
                            : `Demonstrates solid defensive positioning, reading of the game, and anticipation. ${player.name} is strong in duels, interceptions, and building from the back.`}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold mb-3">Strengths & Weaknesses</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium">Strengths:</p>
                          <ul className="list-disc list-inside text-muted-foreground">
                            <li>{player.position === 'Forward' ? 'Finishing' : player.position === 'Midfielder' ? 'Passing' : 'Tackling'}</li>
                            <li>{player.position === 'Forward' ? 'Movement' : player.position === 'Midfielder' ? 'Vision' : 'Positioning'}</li>
                            <li>{player.position === 'Forward' ? 'Composure' : player.position === 'Midfielder' ? 'Game intelligence' : 'Aerial ability'}</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium">Areas for improvement:</p>
                          <ul className="list-disc list-inside text-muted-foreground">
                            <li>{player.position === 'Forward' ? 'Defensive contribution' : player.position === 'Midfielder' ? 'Goal scoring' : 'Technical skills'}</li>
                            <li>{player.position === 'Forward' ? 'Aerial duels' : player.position === 'Midfielder' ? 'Physical presence' : 'Forward passing'}</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Stats Tab */}
              <TabsContent value="stats" className="space-y-6">
                <Card>
                  <div className="p-4 border-b">
                    <h2 className="font-heading font-semibold">Season by Season Statistics</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-3 text-left">Season</th>
                          <th className="p-3 text-left">Club</th>
                          <th className="p-3 text-left">League</th>
                          <th className="p-3 text-center">Apps</th>
                          <th className="p-3 text-center">Goals</th>
                          <th className="p-3 text-center">Assists</th>
                          <th className="p-3 text-center">Yellow</th>
                          <th className="p-3 text-center">Red</th>
                          <th className="p-3 text-center">Minutes</th>
                          <th className="p-3 text-center">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {player.seasonStats.map((season, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                            <td className="p-3">{season.season}</td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <img 
                                  src={season.clubLogo} 
                                  alt={season.club} 
                                  className="w-5 h-5 mr-2"
                                />
                                {season.club}
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <img 
                                  src={season.leagueLogo} 
                                  alt={season.league} 
                                  className="w-5 h-5 mr-2"
                                />
                                {season.league}
                              </div>
                            </td>
                            <td className="p-3 text-center">{season.appearances}</td>
                            <td className="p-3 text-center">{season.goals}</td>
                            <td className="p-3 text-center">{season.assists}</td>
                            <td className="p-3 text-center">{season.yellowCards}</td>
                            <td className="p-3 text-center">{season.redCards}</td>
                            <td className="p-3 text-center">{season.minutesPlayed}</td>
                            <td className="p-3 text-center font-medium">{season.rating.toFixed(1)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold mb-4">Performance Metrics</h3>
                      <div className="space-y-4">
                        {player.stats.passAccuracy && (
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Pass Accuracy</span>
                              <span className="font-medium">{player.stats.passAccuracy}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${player.stats.passAccuracy}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {player.seasonStats[0].duelsWon && (
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Duels Won</span>
                              <span className="font-medium">{player.seasonStats[0].duelsWon}</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full">
                              <div 
                                className="h-full bg-secondary rounded-full" 
                                style={{ width: `${Math.min((player.seasonStats[0].duelsWon || 0) / 2, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {player.seasonStats[0].rating && (
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Average Rating</span>
                              <span className="font-medium">{player.seasonStats[0].rating.toFixed(1)}/10</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full">
                              <div 
                                className="h-full bg-highlight rounded-full" 
                                style={{ width: `${(player.seasonStats[0].rating / 10) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold mb-4">Advanced Statistics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Goals per 90</p>
                          <p className="text-xl font-semibold">
                            {(player.stats.goals / (player.stats.minutesPlayed / 90)).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Assists per 90</p>
                          <p className="text-xl font-semibold">
                            {(player.stats.assists / (player.stats.minutesPlayed / 90)).toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Minutes per goal</p>
                          <p className="text-xl font-semibold">
                            {Math.round(player.stats.minutesPlayed / player.stats.goals)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Goal contributions</p>
                          <p className="text-xl font-semibold">
                            {player.stats.goals + player.stats.assists}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Career History Tab */}
              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-heading font-semibold text-xl mb-4">Career Timeline</h2>
                    <div className="relative border-l border-muted pl-6 ml-3 space-y-6">
                      {player.seasonStats.map((season, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-9 mt-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary"></div>
                          <h3 className="font-heading font-semibold text-lg">{season.season}</h3>
                          <div className="flex items-center mb-2">
                            <img 
                              src={season.clubLogo} 
                              alt={season.club} 
                              className="w-8 h-8 mr-2"
                            />
                            <span className="font-medium">{season.club}</span>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span>{season.league}</span>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            Made {season.appearances} appearances, scoring {season.goals} goals and providing {season.assists} assists.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <div className="px-3 py-1 bg-muted rounded-full text-xs">
                              {season.goals} Goals
                            </div>
                            <div className="px-3 py-1 bg-muted rounded-full text-xs">
                              {season.assists} Assists
                            </div>
                            <div className="px-3 py-1 bg-muted rounded-full text-xs">
                              {season.minutesPlayed} Minutes
                            </div>
                            <div className="px-3 py-1 bg-muted rounded-full text-xs">
                              Rating: {season.rating.toFixed(1)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold mb-4">Career Achievements</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex space-x-3 items-center p-3 bg-muted rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">National Team Debut</p>
                          <p className="text-sm text-muted-foreground">2012 vs. Brazil</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 items-center p-3 bg-muted rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">First Career Goal</p>
                          <p className="text-sm text-muted-foreground">2011 vs. Valencia</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 items-center p-3 bg-muted rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Top Scorer</p>
                          <p className="text-sm text-muted-foreground">Champions League 2020</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 items-center p-3 bg-muted rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">League Winner</p>
                          <p className="text-sm text-muted-foreground">2017, 2018, 2021</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlayerDetailsPage;
