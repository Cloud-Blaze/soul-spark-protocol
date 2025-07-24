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
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo to-deep-teal bg-clip-text text-transparent">
              UNFOGGED™
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/protocol" className="text-deep-teal hover:text-primary transition-colors">
              Protocol
            </Link>
            <Link to="/stack" className="text-deep-teal hover:text-primary transition-colors">
              The Stack
            </Link>
            <Link to="/science" className="text-deep-teal hover:text-primary transition-colors">
              Science
            </Link>
            <a href="https://github.com/unfogged/unfogged-protocol/" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:text-primary transition-colors flex items-center gap-1">
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
              <X className="h-6 w-6 text-deep-teal" />
            ) : (
              <Menu className="h-6 w-6 text-deep-teal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/protocol" 
                className="text-deep-teal hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Protocol
              </Link>
              <Link 
                to="/stack" 
                className="text-deep-teal hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                The Stack
              </Link>
              <Link 
                to="/science" 
                className="text-deep-teal hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Science
              </Link>
              <a 
                href="https://github.com/unfogged/unfogged-protocol/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-teal hover:text-primary transition-colors flex items-center gap-1"
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