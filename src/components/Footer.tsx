import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Vote, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Vote className="h-8 w-8" />
              <div>
                <div className="text-xl font-bold">The Nigeria Election</div>
                <div className="text-sm opacity-80">2027 Election Hub</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Your trusted platform for comprehensive election coverage, 
              real-time updates, and democratic participation in Nigeria's future.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Election Hub</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Latest News</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Breaking Updates</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Early Voting</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Candidate Profiles</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Election Calendar</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Discussion Forum</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Polls & Surveys</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Trivia Games</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Project Tracker</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Voter Education</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nigeriaelection2027.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 800 VOTE 2027</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
            <div className="mt-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                🇳🇬 Proudly Nigerian
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 The Nigeria Election. All rights reserved. Building democracy together.
            </div>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;