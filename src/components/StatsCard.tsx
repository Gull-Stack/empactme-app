import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function StatsCard({ icon, label, value, trend }: StatsCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-accent">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        </div>
        
        {trend && (
          <div className={`flex items-center space-x-1 text-sm ${
            trend.positive ? 'text-green' : 'text-red-400'
          }`}>
            {trend.positive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}