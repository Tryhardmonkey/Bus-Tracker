import { Apple, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Never Miss Your Bus?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Download our app today and join 2 million+ commuters who trust BusTracker for their daily journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Apple className="w-6 h-6" />
              Download for iOS
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              <Smartphone className="w-6 h-6" />
              Download for Android
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Free to download • No subscription required • Works offline
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
