import { useState } from "react";
import { ArrowLeft, Bus, MapPin, Navigation, RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const buses = [
  { id: "42", route: "Downtown Express", lat: 40.7128, lng: -74.006, eta: "2 min" },
  { id: "15", route: "Airport Shuttle", lat: 40.7580, lng: -73.9855, eta: "5 min" },
  { id: "7", route: "University Line", lat: 40.7282, lng: -73.7949, eta: "8 min" },
];

// Custom bus icon
const createBusIcon = (busId: string) => {
  return L.divIcon({
    className: "custom-bus-marker",
    html: `
      <div style="
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 71%, 45%));
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(0,0,0,0.25);
        cursor: pointer;
        position: relative;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 6v6"/>
          <path d="M15 6v6"/>
          <path d="M2 12h19.6"/>
          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
          <circle cx="7" cy="18" r="2"/>
          <path d="M9 18h5"/>
          <circle cx="16" cy="18" r="2"/>
        </svg>
      </div>
      <div style="
        position: absolute;
        top: 52px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 4px 8px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
      ">
        Bus ${busId}
      </div>
    `,
    iconSize: [48, 70],
    iconAnchor: [24, 24],
  });
};

// User location icon
const userIcon = L.divIcon({
  className: "custom-user-marker",
  html: `
    <div style="
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: hsl(221, 83%, 53%);
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const Map = () => {
  const navigate = useNavigate();
  const [isInsideBus, setIsInsideBus] = useState(false);

  const center: [number, number] = [40.735, -73.99];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Map Container */}
      <div className="absolute inset-0">
        <MapContainer
          center={center}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Bus Markers */}
          {buses.map((bus) => (
            <Marker
              key={bus.id}
              position={[bus.lat, bus.lng]}
              icon={createBusIcon(bus.id)}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold">Bus {bus.id}</h3>
                  <p className="text-sm">{bus.route}</p>
                  <p className="text-sm text-green-600 font-medium">ETA: {bus.eta}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          
          {/* User Location Marker */}
          <Marker position={center} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-[1000] p-4">
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
      <div className="absolute bottom-0 left-0 right-0 z-[1000] p-4">
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

          <div className="space-y-3 max-h-40 overflow-y-auto">
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
