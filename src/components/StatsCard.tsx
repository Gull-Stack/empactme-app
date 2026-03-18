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
    <div className="card">
      <div className="card-content">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center shrink-0`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-3xl font-extrabold text-slate-800">
              {value}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {title}
            </div>
            {/* Trend Indicator — below the stat name */}
            {trend && (
              <div className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {trend.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
