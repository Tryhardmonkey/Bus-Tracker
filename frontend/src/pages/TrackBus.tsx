import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bus, MapPin, Hash, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TrackBus = () => {
  const navigate = useNavigate();
  const [boarding, setBoarding] = useState("");
  const [destination, setDestination] = useState("");
  const [busId, setBusId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to map with query params
    navigate(`/map?boarding=${encodeURIComponent(boarding)}&destination=${encodeURIComponent(destination)}&busId=${encodeURIComponent(busId)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-heading font-bold text-foreground">Track Your Bus</h1>
              <p className="text-sm text-muted-foreground">Enter your trip details</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bus className="h-5 w-5 text-primary" />
              Trip Details
            </CardTitle>
            <CardDescription>
              Enter your boarding point, destination, and bus ID to track your bus in real-time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="boarding" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-transit-green" />
                  Boarding Point
                </Label>
                <Input
                  id="boarding"
                  placeholder="e.g., Central Station"
                  value={boarding}
                  onChange={(e) => setBoarding(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-transit-red" />
                  Destination
                </Label>
                <Input
                  id="destination"
                  placeholder="e.g., Airport Terminal"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="busId" className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-transit-blue" />
                  Bus ID
                </Label>
                <Input
                  id="busId"
                  placeholder="e.g., 42A"
                  value={busId}
                  onChange={(e) => setBusId(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Search className="h-4 w-4 mr-2" />
                Track Bus
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TrackBus;
