
import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PlayerCard } from '@/components/player/PlayerCard';
import { PlayerFilter } from '@/components/player/PlayerFilter';
import { Player } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { fetchTopPlayers } from '@/services/api/playersApi';
import { mapApiPlayerToAppPlayer } from '@/services/api/mappers';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const PlayersPage = () => {
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');
  const [nationalityFilter, setNationalityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 9;
  
  // Fetch players data using React Query
  const { data: playersData, isLoading, error } = useQuery({
    queryKey: ['players'],
    queryFn: async () => {
      const apiPlayers = await fetchTopPlayers();
      return apiPlayers.map(mapApiPlayerToAppPlayer);
    },
    onError: () => {
      toast.error("Failed to load players data. Falling back to mock data.");
    }
  });
  
  // Use API data or fall back to mock data if API fails
  useEffect(() => {
    if (playersData) {
      let result = [...playersData];
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(
          player => player.name.toLowerCase().includes(query) || 
                    player.nationality.toLowerCase().includes(query) ||
                    player.currentClub.toLowerCase().includes(query)
        );
      }
      
      // Apply position filter
      if (positionFilter !== 'all') {
        result = result.filter(player => player.position === positionFilter);
      }
      
      // Apply nationality filter
      if (nationalityFilter !== 'all') {
        result = result.filter(player => player.nationality === nationalityFilter);
      }
      
      // Sort players
      result.sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'goals':
            return b.stats.goals - a.stats.goals;
          case 'assists':
            return b.stats.assists - a.stats.assists;
          case 'appearances':
            return b.stats.appearances - a.stats.appearances;
          case 'age':
            return a.age - b.age;
          default:
            return 0;
        }
      });
      
      setFilteredPlayers(result);
      setCurrentPage(1); // Reset to first page when filters change
    }
  }, [playersData, searchQuery, positionFilter, nationalityFilter, sortBy]);
  
  // Pagination
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);
  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <div className="container-layout">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Players</h1>
          <p className="text-muted-foreground">Browse and filter football players from around the world.</p>
        </div>
        
        <PlayerFilter 
          onSearchChange={setSearchQuery}
          onPositionChange={setPositionFilter}
          onNationalityChange={setNationalityFilter}
          onSortChange={setSortBy}
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Loading player data...</span>
          </div>
        ) : error || filteredPlayers.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-heading mb-2">
              {error ? "Error loading players" : "No players found"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {error ? "There was a problem fetching player data." : "Try adjusting your search or filters"}
            </p>
            <Button onClick={() => {
              setSearchQuery('');
              setPositionFilter('all');
              setNationalityFilter('all');
              setSortBy('name');
            }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <>
            <p className="mb-4 text-muted-foreground">
              Showing {indexOfFirstPlayer + 1}-{Math.min(indexOfLastPlayer, filteredPlayers.length)} of {filteredPlayers.length} players
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentPlayers.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default PlayersPage;
