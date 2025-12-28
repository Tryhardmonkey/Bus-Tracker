import { useState } from "react";
import { ArrowLeft, Bus, MapPin, Navigation, RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const buses = [
  { id: "42", route: "Downtown Express", lat: 40.7128, lng: -74.006, eta: "2 min" },
  { id: "15", route: "Airport Shuttle", lat: 40.7580, lng: -73.9855, eta: "5 min" },
  { id: "7", route: "University Line", lat: 40.7282, lng: -73.7949, eta: "8 min" },
];

const Map = () => {
  const navigate = useNavigate();
  const [isInsideBus, setIsInsideBus] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-muted">
        <div className="w-full h-full relative overflow-hidden">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Simulated Roads */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-foreground/10" />
          <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-foreground/10" />
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-foreground/5" />
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-foreground/5" />
          <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-foreground/5" />
          <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-foreground/5" />
          
          {/* Bus Markers */}
          {buses.map((bus, index) => (
            <div
              key={bus.id}
              className="absolute animate-pulse-soft"
              style={{
                top: `${25 + index * 20}%`,
                left: `${20 + index * 25}%`,
              }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-elevated cursor-pointer hover:scale-110 transition-transform">
                  <Bus className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card px-2 py-1 rounded-lg shadow-card text-xs font-medium whitespace-nowrap">
                  Bus {bus.id} • {bus.eta}
                </div>
              </div>
            </div>
          ))}
          
          {/* User Location */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 rounded-full bg-secondary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <Button 
            variant="glass" 
            size="icon" 
            onClick={() => navigate("/")}
            className="shadow-elevated"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Button variant="glass" size="icon" className="shadow-elevated">
              <Layers className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="icon" className="shadow-elevated">
              <RefreshCw className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Bottom Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-4">
          {/* Inside Bus Toggle */}
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl mb-4">
            <div className="flex items-center gap-3">
              <Bus className="w-5 h-5 text-primary" />
              <Label htmlFor="inside-bus" className="font-medium text-foreground cursor-pointer">
                I'm inside the bus
              </Label>
            </div>
            <Switch
              id="inside-bus"
              checked={isInsideBus}
              onCheckedChange={setIsInsideBus}
            />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-foreground">Live Bus Tracking</h2>
              <p className="text-sm text-muted-foreground">3 buses near you</p>
            </div>
          </div>

          <div className="space-y-3">
            {buses.map((bus) => (
              <div 
                key={bus.id}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-primary-foreground">{bus.id}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{bus.route}</p>
                  <p className="text-xs text-muted-foreground">Heading towards Downtown</p>
                </div>
                <div className="text-right">
                  <p className="font-heading font-bold text-foreground">{bus.eta}</p>
                  <p className="text-xs text-muted-foreground">away</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="hero" className="w-full mt-4">
            <Navigation className="w-5 h-5" />
            Navigate to Stop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;
