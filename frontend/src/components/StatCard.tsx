interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-glass">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default StatCard;
