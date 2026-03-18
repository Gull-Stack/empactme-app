import { Calendar, DollarSign, Eye } from "lucide-react";

interface CampaignCardProps {
  campaign: {
    id: number;
    name: string;
    influencer: string;
    status: string;
    startDate: string;
    endDate: string;
    budget: number;
    spent: number;
    impressions: number;
    engagement: number;
    progress: number;
  };
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              {campaign.name}
            </h3>
            <p className="text-sm text-gray-600">
              with {campaign.influencer}
            </p>
          </div>
          <span className={`status-badge ${campaign.status}`}>
            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">
                {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Budget</div>
              <div className="font-medium text-slate-800">
                ${campaign.budget.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-gray-400">Impressions</div>
              <div className="font-medium text-slate-800">
                {campaign.impressions > 0 ? `${(campaign.impressions / 1000).toFixed(0)}K` : "0"}
              </div>
            </div>
          </div>

          {campaign.progress > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="font-medium text-slate-800">{campaign.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-brand-purple h-2 rounded-full transition-all duration-500"
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
          <button className="btn-primary flex-1 py-2">
            View Details
          </button>
          <button className="btn-secondary px-4 py-2">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}