
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">SS</span>
          </div>
          <span className="font-heading font-bold text-lg md:text-xl">StatSphere</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/players" className="font-medium hover:text-primary transition-colors">
            Players
          </Link>
          <Link to="/teams" className="font-medium hover:text-primary transition-colors">
            Teams
          </Link>
          <Link to="/leaderboards" className="font-medium hover:text-primary transition-colors">
            Leaderboards
          </Link>
          <Link to="/comparison" className="font-medium hover:text-primary transition-colors">
            Compare
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3 animate-fade-in">
            <Link 
              to="/" 
              className="font-medium hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/players" 
              className="font-medium hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Players
            </Link>
            <Link 
              to="/teams" 
              className="font-medium hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Teams
            </Link>
            <Link 
              to="/leaderboards" 
              className="font-medium hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Leaderboards
            </Link>
            <Link 
              to="/comparison" 
              className="font-medium hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Compare
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
