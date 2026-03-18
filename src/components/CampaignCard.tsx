import { Calendar, DollarSign, Eye } from "lucide-react";

interface CampaignCardProps {
  name: string;
  status: "Active" | "Pending" | "Completed";
  startDate: string;
  endDate: string;
  budget: string;
  impressions: string;
  roi?: string;
}

export default function CampaignCard({
  name,
  status,
  startDate,
  endDate,
  budget,
  impressions,
  roi
}: CampaignCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green/10 text-green border-green/20";
      case "Pending":
        return "bg-cyan/10 text-cyan border-cyan/20";
      case "Completed":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-serif text-lg font-semibold">{name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{startDate} - {endDate}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <DollarSign className="w-4 h-4 text-accent" />
          <span className="font-semibold">{budget}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <Eye className="w-4 h-4 text-cyan" />
          <span>{impressions} impressions</span>
        </div>
        
        {roi && (
          <div className="pt-2 border-t border-border">
            <span className="text-sm text-gray-400">ROI: </span>
            <span className="text-green font-semibold">{roi}</span>
          </div>
        )}
      </div>
    </div>
  );
}