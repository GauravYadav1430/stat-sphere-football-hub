
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { mostAppearances, players, topAssisters, topScorers } from '@/data/mockData';
import { Trophy, Award, Star, Calendar } from 'lucide-react';

const LeaderboardsPage = () => {
  // We'll use the pre-sorted mock data for simplicity
  const topScorersData = topScorers;
  const topAssistersData = topAssisters;
  const mostAppearancesData = mostAppearances;
  
  return (
    <Layout>
      <div className="container-layout">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Leaderboards</h1>
          <p className="text-muted-foreground">Explore the top performing football players across various statistical categories.</p>
        </div>
        
        <Tabs defaultValue="goals">
          <TabsList className="mb-6 grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="assists">Assists</TabsTrigger>
            <TabsTrigger value="appearances">Appearances</TabsTrigger>
          </TabsList>
          
          <TabsContent value="goals">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-highlight" />
                  Top Goal Scorers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-3 text-left">Rank</th>
                        <th className="p-3 text-left">Player</th>
                        <th className="p-3 text-left">Club</th>
                        <th className="p-3 text-center">Goals</th>
                        <th className="p-3 text-center">Apps</th>
                        <th className="p-3 text-center">Goals/Game</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topScorersData.map((player, index) => (
                        <tr key={player.id} className="border-b hover:bg-muted/50 cursor-pointer">
                          <td className="p-3 font-semibold">
                            {index === 0 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-highlight/20 text-highlight">1</span>
                            ) : index === 1 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary">2</span>
                            ) : index === 2 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary">3</span>
                            ) : (
                              index + 1
                            )}
                          </td>
                          <td className="p-3">
                            <Link to={`/players/${player.id}`} className="hover:text-primary transition-colors">
                              <div className="flex items-center">
                                <img 
                                  src={player.image} 
                                  alt={player.name} 
                                  className="w-8 h-8 mr-2 rounded-full object-cover object-top" 
                                />
                                <div>
                                  <p className="font-medium">{player.name}</p>
                                  <div className="flex items-center">
                                    <img 
                                      src={player.nationalityFlag} 
                                      alt={player.nationality} 
                                      className="w-4 h-3 mr-1"
                                    />
                                    <span className="text-xs text-muted-foreground">{player.nationality}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center">
                              <img 
                                src={player.clubLogo} 
                                alt={player.currentClub} 
                                className="w-5 h-5 mr-1" 
                              />
                              <span>{player.currentClub}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center font-semibold">{player.stats.goals}</td>
                          <td className="p-3 text-center">{player.stats.appearances}</td>
                          <td className="p-3 text-center">{(player.stats.goals / player.stats.appearances).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assists">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Top Assisters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-3 text-left">Rank</th>
                        <th className="p-3 text-left">Player</th>
                        <th className="p-3 text-left">Club</th>
                        <th className="p-3 text-center">Assists</th>
                        <th className="p-3 text-center">Apps</th>
                        <th className="p-3 text-center">Assists/Game</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topAssistersData.map((player, index) => (
                        <tr key={player.id} className="border-b hover:bg-muted/50 cursor-pointer">
                          <td className="p-3 font-semibold">
                            {index === 0 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-highlight/20 text-highlight">1</span>
                            ) : index === 1 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary">2</span>
                            ) : index === 2 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary">3</span>
                            ) : (
                              index + 1
                            )}
                          </td>
                          <td className="p-3">
                            <Link to={`/players/${player.id}`} className="hover:text-primary transition-colors">
                              <div className="flex items-center">
                                <img 
                                  src={player.image} 
                                  alt={player.name} 
                                  className="w-8 h-8 mr-2 rounded-full object-cover object-top" 
                                />
                                <div>
                                  <p className="font-medium">{player.name}</p>
                                  <div className="flex items-center">
                                    <img 
                                      src={player.nationalityFlag} 
                                      alt={player.nationality} 
                                      className="w-4 h-3 mr-1"
                                    />
                                    <span className="text-xs text-muted-foreground">{player.nationality}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center">
                              <img 
                                src={player.clubLogo} 
                                alt={player.currentClub} 
                                className="w-5 h-5 mr-1" 
                              />
                              <span>{player.currentClub}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center font-semibold">{player.stats.assists}</td>
                          <td className="p-3 text-center">{player.stats.appearances}</td>
                          <td className="p-3 text-center">{(player.stats.assists / player.stats.appearances).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearances">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-secondary" />
                  Most Appearances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-3 text-left">Rank</th>
                        <th className="p-3 text-left">Player</th>
                        <th className="p-3 text-left">Club</th>
                        <th className="p-3 text-center">Appearances</th>
                        <th className="p-3 text-center">Minutes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mostAppearancesData.map((player, index) => (
                        <tr key={player.id} className="border-b hover:bg-muted/50 cursor-pointer">
                          <td className="p-3 font-semibold">
                            {index === 0 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-highlight/20 text-highlight">1</span>
                            ) : index === 1 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary">2</span>
                            ) : index === 2 ? (
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary">3</span>
                            ) : (
                              index + 1
                            )}
                          </td>
                          <td className="p-3">
                            <Link to={`/players/${player.id}`} className="hover:text-primary transition-colors">
                              <div className="flex items-center">
                                <img 
                                  src={player.image} 
                                  alt={player.name} 
                                  className="w-8 h-8 mr-2 rounded-full object-cover object-top" 
                                />
                                <div>
                                  <p className="font-medium">{player.name}</p>
                                  <div className="flex items-center">
                                    <img 
                                      src={player.nationalityFlag} 
                                      alt={player.nationality} 
                                      className="w-4 h-3 mr-1"
                                    />
                                    <span className="text-xs text-muted-foreground">{player.nationality}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center">
                              <img 
                                src={player.clubLogo} 
                                alt={player.currentClub} 
                                className="w-5 h-5 mr-1" 
                              />
                              <span>{player.currentClub}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center font-semibold">{player.stats.appearances}</td>
                          <td className="p-3 text-center">{player.stats.minutesPlayed.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12">
          <h2 className="section-title">Other Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Best Young Players</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Discover the most promising young talents in football under the age of 23.
                </p>
                <Link to="/leaderboards/young-players" className="text-primary font-medium hover:underline">
                  View Leaderboard
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Top Rated Players</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Players with the highest average match ratings across all competitions.
                </p>
                <Link to="/leaderboards/top-rated" className="text-primary font-medium hover:underline">
                  View Leaderboard
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-highlight/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Clean Sheets</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Goalkeepers and defenders with the most clean sheets in the season.
                </p>
                <Link to="/leaderboards/clean-sheets" className="text-primary font-medium hover:underline">
                  View Leaderboard
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeaderboardsPage;
