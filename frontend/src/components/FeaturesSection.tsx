import { Bell, MapPin, Smartphone, Wifi, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time bus locations updated every 10 seconds with pinpoint accuracy"
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified when your bus is approaching or if there are service delays"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Track buses on the go with our iOS and Android apps"
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Access saved routes and schedules even without internet connection"
  },
  {
    icon: Shield,
    title: "Trip Planning",
    description: "Plan multi-route journeys with accurate transfer times"
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Lightning-fast sync keeps you informed in real-time"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make your daily commute smoother and more predictable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl hover:bg-card hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
