
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { teams } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search } from 'lucide-react';

const TeamsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');
  const [leagueFilter, setLeagueFilter] = useState('all');
  
  // Get unique countries and leagues for filters
  const countries = Array.from(new Set(teams.map(team => team.country)));
  const leagues = Array.from(new Set(teams.map(team => team.league)));
  
  // Apply filters
  const filteredTeams = teams.filter(team => {
    const matchesSearch = searchQuery === '' || 
      team.name.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCountry = countryFilter === 'all' || team.country === countryFilter;
    const matchesLeague = leagueFilter === 'all' || team.league === leagueFilter;
    
    return matchesSearch && matchesCountry && matchesLeague;
  });
  
  return (
    <Layout>
      <div className="container-layout">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Teams</h1>
          <p className="text-muted-foreground">Browse football clubs and national teams from around the world.</p>
        </div>
        
        <div className="bg-card rounded-lg border p-4 mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search teams..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Country</label>
              <Select value={countryFilter} onValueChange={setCountryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-1">League</label>
              <Select value={leagueFilter} onValueChange={setLeagueFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Leagues" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Leagues</SelectItem>
                  {leagues.map(league => (
                    <SelectItem key={league} value={league}>{league}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map(team => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={team.logo} 
                      alt={team.name} 
                      className="w-24 h-24 object-contain mb-4" 
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
                    
                    <div className="grid grid-cols-2 gap-3 w-full pt-3 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Manager</p>
                        <p className="text-sm font-medium">{team.manager}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Founded</p>
                        <p className="text-sm font-medium">{team.founded}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-heading mb-2">No teams found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TeamsPage;
