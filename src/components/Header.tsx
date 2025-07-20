import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Menu, 
  Vote, 
  TrendingUp, 
  MessageSquare, 
  FileText,
  Bookmark,
  User
} from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Vote className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">The Nigeria Election</span>
              <span className="text-xs text-muted-foreground">2027 Election Hub</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Latest News
            </Link>
            <a href="#trending-videos" className="text-sm font-medium hover:text-primary transition-colors">
              Trending Videos
            </a>
            <Link to="/early-vote" className="text-sm font-medium hover:text-primary transition-colors">
              Early Vote
            </Link>
            <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/forum" className="text-sm font-medium hover:text-primary transition-colors">
              Forum
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Link to="/forum">
              <Button variant="hero" size="sm">
                Join the Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;