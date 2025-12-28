import { Bus, Clock, Users, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const buses = [
  { id: "42", route: "Downtown Express", eta: "2 min", status: "On Time", occupancy: "Medium", color: "bg-primary" },
  { id: "15", route: "Airport Shuttle", eta: "5 min", status: "On Time", occupancy: "Low", color: "bg-secondary" },
  { id: "7", route: "University Line", eta: "8 min", status: "Delayed", occupancy: "High", color: "bg-accent" },
];

const LiveTrackingPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Live Tracking</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              See Buses Moving in Real Time
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our GPS-powered tracking system updates every 10 seconds, so you always know exactly when your bus will arrive.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Accurate ETAs</h3>
                  <p className="text-muted-foreground text-sm">Real-time arrival predictions based on current traffic</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Crowd Levels</h3>
                  <p className="text-muted-foreground text-sm">Know how full the bus is before it arrives</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              View Live Map
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right - Live Bus Cards */}
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
              Buses near your location
            </div>
            
            {buses.map((bus, index) => (
              <div
                key={bus.id}
                className="bg-card rounded-2xl p-5 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  {/* Bus Number Badge */}
                  <div className={`w-14 h-14 rounded-xl ${bus.color} flex items-center justify-center`}>
                    <span className="font-heading font-bold text-lg text-primary-foreground">{bus.id}</span>
                  </div>

                  {/* Route Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{bus.route}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        bus.status === "On Time" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"
                      }`}>
                        {bus.status}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {bus.occupancy}
                      </span>
                    </div>
                  </div>

                  {/* ETA */}
                  <div className="text-right">
                    <div className="font-heading font-bold text-2xl text-foreground">{bus.eta}</div>
                    <div className="text-xs text-muted-foreground">arrival</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${bus.color} rounded-full transition-all duration-500`}
                    style={{ width: bus.eta === "2 min" ? "85%" : bus.eta === "5 min" ? "60%" : "40%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTrackingPreview;
