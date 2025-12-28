import { ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const routes = [
  { id: "42", name: "Downtown Express", from: "Central Station", to: "City Hall", rating: 4.8, frequency: "5 min" },
  { id: "15", name: "Airport Shuttle", from: "Airport Terminal", to: "Downtown", rating: 4.9, frequency: "15 min" },
  { id: "7", name: "University Line", from: "West Campus", to: "East Campus", rating: 4.6, frequency: "10 min" },
  { id: "23", name: "Beach Route", from: "Oceanside", to: "Marina District", rating: 4.7, frequency: "20 min" },
  { id: "88", name: "Night Owl", from: "Entertainment District", to: "Suburbs", rating: 4.5, frequency: "30 min" },
  { id: "101", name: "Cross-City Express", from: "North Terminal", to: "South Bay", rating: 4.8, frequency: "8 min" },
];

const PopularRoutes = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Popular Routes</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Most Used Routes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick access to the city's busiest bus routes with live arrival information
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={route.id}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                  <span className="font-heading font-bold text-primary-foreground">{route.id}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  {route.rating}
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{route.name}</h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="truncate">{route.from}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
                <span className="truncate">{route.to}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  Every <span className="text-foreground font-medium">{route.frequency}</span>
                </span>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Routes
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
