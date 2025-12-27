import { MapPin, Users, Zap, Shield, Clock, Smartphone, Navigation, Bell, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveBusIndicator from "@/components/LiveBusIndicator";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import StatCard from "@/components/StatCard";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time Location",
      description: "Track your bus in real-time using aggregated cellular data from passengers on board.",
    },
    {
      icon: Users,
      title: "Crowdsourced Data",
      description: "Powered by the community. The more people use it, the more accurate it becomes.",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Get live ETAs that update every few seconds based on actual bus movement.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All location data is anonymized and encrypted. Your privacy is our priority.",
    },
    {
      icon: Clock,
      title: "Historical Patterns",
      description: "Learn from past data to predict delays and suggest the best departure times.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get notified when your bus is approaching or if there are unexpected delays.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get BusTracker on iOS or Android. It's free and takes less than a minute.",
    },
    {
      number: "02",
      title: "Enable Location",
      description: "Allow location access to contribute to the crowdsourced tracking network.",
    },
    {
      number: "03",
      title: "Track Your Bus",
      description: "Search for your route and see real-time bus locations instantly.",
    },
  ];

  const stats = [
    { value: "2M+", label: "Active Users" },
    { value: "500+", label: "Cities Covered" },
    { value: "99.2%", label: "Accuracy Rate" },
    { value: "15s", label: "Update Interval" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(0_0%_100%/0.05),transparent_60%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                <span className="text-foreground/80 text-sm font-medium">Live Tracking Active</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
                Know Exactly When Your{" "}
                <span className="text-gradient">Bus Arrives</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Revolutionary crowdsourced bus tracking powered by passengers' cellular locations. 
                Real-time, accurate, and community-driven.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl">
                  <Smartphone className="w-5 h-5" />
                  Download App
                </Button>
                <Button variant="glass" size="xl">
                  <Navigation className="w-5 h-5" />
                  Track a Bus
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Map-like background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div key={`h-${i}`} className="absolute w-full h-px bg-primary/50" style={{ top: `${(i + 1) * 12.5}%` }} />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div key={`v-${i}`} className="absolute h-full w-px bg-primary/50" style={{ left: `${(i + 1) * 12.5}%` }} />
                    ))}
                  </div>
                  
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 50 350 Q 100 300 150 280 T 250 200 T 350 100"
                      fill="none"
                      stroke="url(#routeGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="8 4"
                      className="animate-pulse-slow"
                    />
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(0 0% 100%)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="hsl(0 0% 100%)" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Stop markers */}
                  <div className="absolute bottom-12 left-12 w-4 h-4 rounded-full bg-foreground border-2 border-background" />
                  <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-foreground/50 border-2 border-background" />
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-foreground/50 border-2 border-background" />
                </div>
                
                {/* Live bus indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
                  <LiveBusIndicator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose BusTracker?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've reimagined public transit tracking from the ground up, 
              creating a system that actually works for commuters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Our technology does the heavy lifting 
              while you just enjoy knowing when your bus arrives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-7 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-foreground/50 via-foreground/50 to-foreground/20" />
            
            {steps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Millions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our growing community helps make public transit more reliable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-foreground/3 to-foreground/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Route className="w-8 h-8 text-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Never Miss Your Bus Again?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join millions of commuters who've made their daily transit stress-free. 
              Download BusTracker today and be part of the revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Smartphone className="w-5 h-5" />
                Get it on iOS
              </Button>
              <Button variant="hero" size="xl">
                <Smartphone className="w-5 h-5" />
                Get it on Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
