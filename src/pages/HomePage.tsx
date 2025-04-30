
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PlayerCard } from '@/components/player/PlayerCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { StatDisplay } from '@/components/player/StatDisplay';
import { players, teams } from '@/data/mockData';
import { Link } from 'react-router-dom';

const featuredPlayers = players.slice(0, 3);
const popularTeams = teams.slice(0, 3);

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Discover Player Statistics Like Never Before",
      description: "StatSphere provides comprehensive data for every professional football player worldwide",
      image: "https://placehold.co/1200x600?text=Football+Statistics",
      cta: "Explore Players",
      link: "/players"
    },
    {
      title: "Compare Your Favorite Players",
      description: "Use our advanced comparison tools to analyze player performance side by side",
      image: "https://placehold.co/1200x600?text=Player+Comparison",
      cta: "Compare Now",
      link: "/comparison"
    },
    {
      title: "Leaderboards & Rankings",
      description: "See who tops the charts for goals, assists, clean sheets and more",
      image: "https://placehold.co/1200x600?text=Football+Leaderboards",
      cta: "View Leaderboards",
      link: "/leaderboards"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Sample chart data
  const goalsScoredData = [
    { name: '2018', Messi: 51, Ronaldo: 43, Haaland: 16, Mbappé: 33 },
    { name: '2019', Messi: 45, Ronaldo: 39, Haaland: 28, Mbappé: 38 },
    { name: '2020', Messi: 30, Ronaldo: 37, Haaland: 41, Mbappé: 42 },
    { name: '2021', Messi: 38, Ronaldo: 36, Haaland: 49, Mbappé: 39 },
    { name: '2022', Messi: 35, Ronaldo: 24, Haaland: 52, Mbappé: 41 },
  ];
  
  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-lg mb-6 text-muted-foreground">
                  {heroSlides[currentSlide].description}
                </p>
                <Link to={heroSlides[currentSlide].link}>
                  <Button size="lg" className="font-medium">
                    {heroSlides[currentSlide].cta}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={heroSlides[currentSlide].image} 
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-auto animate-fade-in"
                />
              </div>
              <div className="flex justify-center mt-3 space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full ${
                      index === currentSlide ? 'bg-primary' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Players */}
      <section className="container-layout">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Featured Players</h2>
          <Link to="/players">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
      
      {/* Stats Visualization */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Goal Scoring Trends</h2>
          <StatDisplay
            title="Goals Scored by Top Players (2018-2022)"
            data={goalsScoredData}
            type="line"
            dataKeys={['Messi', 'Ronaldo', 'Haaland', 'Mbappé']}
          />
        </div>
      </section>
      
      {/* Popular Teams */}
      <section className="container-layout">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Popular Teams</h2>
          <Link to="/teams">
            <Button variant="outline">View All Teams</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularTeams.map((team) => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-20 h-20 object-contain mb-4" 
                  />
                  <h3 className="font-heading font-semibold text-xl mb-1">{team.name}</h3>
                  <div className="flex items-center mb-3">
                    <img 
                      src={team.countryFlag} 
                      alt={team.country} 
                      className="w-5 h-4 mr-1" 
                    />
                    <span className="text-sm">{team.country}</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm">{team.league}</span>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Manager: {team.manager}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Features */}
      <section className="bg-gradient-to-br from-primary/30 to-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Comprehensive Stats</h3>
                <p className="text-muted-foreground">
                  Access detailed statistics for every player including goals, assists, passes, and more.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Player Comparisons</h3>
                <p className="text-muted-foreground">
                  Compare players side by side with intuitive visualizations to see who performs better.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Advanced Filtering</h3>
                <p className="text-muted-foreground">
                  Filter players by position, nationality, age, and more to find exactly what you're looking for.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container-layout">
        <div className="bg-card border rounded-xl p-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Dive Deeper?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore comprehensive statistics for thousands of football players from around the world. Find insights, compare performances, and stay updated.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/players">
              <Button size="lg" className="font-medium">
                Browse Players
              </Button>
            </Link>
            <Link to="/teams">
              <Button size="lg" variant="outline" className="font-medium">
                Explore Teams
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
