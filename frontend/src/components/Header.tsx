import { Bus, MapPin, Clock, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-card">
              <Bus className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">BusTracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Routes
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Schedules
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Alerts
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Help
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="default" size="sm">Download App</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Routes</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Schedules</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Alerts</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Help</a>
              <div className="flex gap-3 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
                <Button variant="default" size="sm" className="flex-1">Download App</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
