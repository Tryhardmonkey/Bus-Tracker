import { Bus } from "lucide-react";

const LiveBusIndicator = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ping animation */}
      <div className="absolute w-32 h-32 rounded-full bg-foreground/10 animate-ping-slow" />
      <div className="absolute w-24 h-24 rounded-full bg-foreground/20 animate-pulse-slow" />
      
      {/* Bus icon container */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-foreground to-foreground/70 flex items-center justify-center glow-primary">
        <Bus className="w-8 h-8 text-background" />
      </div>
    </div>
  );
};

export default LiveBusIndicator;
