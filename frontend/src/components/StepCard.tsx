interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step number */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-b from-foreground to-foreground/70 flex items-center justify-center mb-4 font-display text-xl font-bold text-background">
        {number}
      </div>
      
      <h3 className="text-lg font-display font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-xs">{description}</p>
    </div>
  );
};

export default StepCard;
