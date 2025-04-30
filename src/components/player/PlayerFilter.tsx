
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface PlayerFilterProps {
  onSearchChange: (value: string) => void;
  onPositionChange: (value: string) => void;
  onNationalityChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export const PlayerFilter = ({ 
  onSearchChange, 
  onPositionChange, 
  onNationalityChange, 
  onSortChange 
}: PlayerFilterProps) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  return (
    <div className="bg-card rounded-lg border p-4 mb-6">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search players..." 
          className="pl-9"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">Filters</h3>
        <Button 
          variant="link" 
          size="sm" 
          className="text-primary p-0" 
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
        >
          {isFilterExpanded ? 'Hide filters' : 'Show more filters'}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="text-sm font-medium block mb-1">Position</label>
          <Select onValueChange={onPositionChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Positions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="Forward">Forward</SelectItem>
              <SelectItem value="Midfielder">Midfielder</SelectItem>
              <SelectItem value="Defender">Defender</SelectItem>
              <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-1">Sort By</label>
          <Select onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="goals">Goals</SelectItem>
              <SelectItem value="assists">Assists</SelectItem>
              <SelectItem value="appearances">Appearances</SelectItem>
              <SelectItem value="age">Age</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {isFilterExpanded && (
          <>
            <div>
              <label className="text-sm font-medium block mb-1">Nationality</label>
              <Select onValueChange={onNationalityChange}>
                <SelectTrigger>
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="Argentina">Argentina</SelectItem>
                  <SelectItem value="Portugal">Portugal</SelectItem>
                  <SelectItem value="Norway">Norway</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Belgium">Belgium</SelectItem>
                  <SelectItem value="Netherlands">Netherlands</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-1">Age Range</label>
              <div className="flex space-x-2 items-center">
                <Input type="number" placeholder="Min" className="w-full" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="w-full" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
