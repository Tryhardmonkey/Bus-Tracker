import { Search, MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
            Live tracking available
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Track Your Bus
            <span className="block gradient-text-hero bg-clip-text text-transparent">In Real Time</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Never miss your bus again. Get live arrival times, route maps, and service alerts for all city buses.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex items-center gap-2 p-2 bg-card rounded-2xl shadow-elevated border border-border/50">
              <div className="flex-1 flex items-center gap-3 px-4">
                <MapPin className="w-5 h-5 text-primary" />
                <Input
                  type="text"
                  placeholder="Enter stop name, route, or address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent focus-visible:ring-0 text-base placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="hero" size="lg" className="shrink-0">
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>

            {/* Track Button */}
            <div className="flex justify-center mt-6">
              <Button 
                variant="glass" 
                size="lg" 
                onClick={() => navigate("/map")}
                className="gap-3"
              >
                <Navigation className="w-5 h-5" />
                Open Live Map
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm">
              <span className="text-muted-foreground">Popular:</span>
              <button className="text-primary hover:underline">Downtown Station</button>
              <button className="text-primary hover:underline">Central Park</button>
              <button className="text-primary hover:underline">Airport Express</button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Active Routes</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">2M+</div>
              <div className="text-sm text-muted-foreground">Daily Riders</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">99.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
