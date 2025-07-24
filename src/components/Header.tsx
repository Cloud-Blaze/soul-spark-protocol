import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-sage/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold md:bg-gradient-to-r md:from-indigo md:to-deep-teal md:bg-clip-text md:text-transparent text-white md:text-transparent">
              UNFOGGED™
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/protocol" className="text-foreground hover:text-primary transition-colors font-medium">
              Protocol
            </Link>
            <Link to="/stack" className="text-foreground hover:text-primary transition-colors font-medium">
              The Stack
            </Link>
            <Link to="/science" className="text-foreground hover:text-primary transition-colors font-medium">
              Science
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <a href="https://github.com/unfogged/unfogged-protocol/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors flex items-center gap-1 font-medium">
              <Github className="w-4 h-4" />
              Community
            </a>
            <Button variant="healing" size="sm" asChild>
              <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                Start Your Reset
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/protocol" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Protocol
              </Link>
              <Link 
                to="/stack" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                The Stack
              </Link>
              <Link 
                to="/science" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Science
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://github.com/unfogged/unfogged-protocol/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors flex items-center gap-1 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="w-4 h-4" />
                Community
              </a>
              <Button variant="healing" size="sm" className="w-fit" asChild>
                <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                  Start Your Reset
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;