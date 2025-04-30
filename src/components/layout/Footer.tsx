
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-card mt-auto border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">StatSphere</h3>
            <p className="text-muted-foreground text-sm">
              Comprehensive football statistics for every professional player.
              Data-driven insights into the beautiful game.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-base mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/players" className="text-muted-foreground hover:text-primary transition-colors">
                  Players
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-muted-foreground hover:text-primary transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/leaderboards" className="text-muted-foreground hover:text-primary transition-colors">
                  Leaderboards
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-base mb-3">Data Sources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.transfermarkt.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Transfermarkt
                </a>
              </li>
              <li>
                <a href="https://www.whoscored.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  WhoScored
                </a>
              </li>
              <li>
                <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Wikipedia
                </a>
              </li>
              <li>
                <a href="https://www.premierleague.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Official League Sites
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-base mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} StatSphere - Football Hub. All rights reserved.</p>
          <p className="mt-1">All data is for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};
