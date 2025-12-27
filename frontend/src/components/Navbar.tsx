import { Bus, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
              <Bus className="w-5 h-5 text-background" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">BusTracker</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">How It Works</a>
            <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Statistics</a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Download</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="default" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">How It Works</a>
              <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Statistics</a>
              <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Download</a>
              <div className="flex gap-3 pt-4">
                <Button variant="ghost" size="sm" className="flex-1">Sign In</Button>
                <Button variant="default" size="sm" className="flex-1">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
