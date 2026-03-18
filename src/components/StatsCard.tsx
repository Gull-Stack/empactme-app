import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  iconColor, 
  iconBgColor,
  trend 
}: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="card-content">
        <div className="flex items-start justify-between">
          {/* Icon and Content */}
          <div className="flex-1">
            <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}>
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">
              {value}
            </div>
            <div className="text-sm text-gray-600">
              {title}
            </div>
          </div>

          {/* Trend Indicator */}
          {trend && (
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
              trend.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {trend.isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className="text-xs font-medium">
                {Math.abs(trend.value)}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}