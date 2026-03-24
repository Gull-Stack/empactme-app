"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  Eye,
  TrendingUp,
  Users,
  Pause,
  Trash2,
  Edit3,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";
import { getCampaignById, formatImpressions } from "@/lib/campaigns-data";

export default function CampaignDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const campaign = getCampaignById(id);

  if (!campaign) {
    return (
      <div className="space-y-6">
        <Link
          href="/dashboard/campaigns"
          className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple-dark"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campaigns
        </Link>
        <div className="card">
          <div className="card-content text-center py-12">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Campaign Not Found
            </h2>
            <p className="text-gray-600">
              The campaign you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const platformIcon = () => {
    switch (campaign.platform) {
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "youtube":
        return <Youtube className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const platformLabel =
    campaign.platform === "multi"
      ? "Multi-Platform"
      : campaign.platform.charAt(0).toUpperCase() + campaign.platform.slice(1);

  const budgetUtilization =
    campaign.budget > 0
      ? Math.round((campaign.spent / campaign.budget) * 100)
      : 0;

  const timeline = [
    {
      date: new Date(campaign.startDate).toLocaleDateString(),
      event: "Campaign launched",
      detail: `${campaign.influencer} accepted the partnership`,
    },
    {
      date: new Date(
        new Date(campaign.startDate).getTime() + 7 * 86400000
      ).toLocaleDateString(),
      event: "First content posted",
      detail: `Initial ${platformLabel} content went live`,
    },
    {
      date: new Date(
        new Date(campaign.startDate).getTime() + 14 * 86400000
      ).toLocaleDateString(),
      event: "Milestone: 500K impressions",
      detail: "Campaign trending above projections",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        href="/dashboard/campaigns"
        className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple-dark"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Campaigns
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-slate-800">
              {campaign.name}
            </h1>
            <span className={`status-badge ${campaign.status}`}>
              {campaign.status.charAt(0).toUpperCase() +
                campaign.status.slice(1)}
            </span>
          </div>
          <p className="text-gray-600 mb-2">
            with <span className="font-medium text-slate-800">{campaign.influencer}</span>
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              {platformIcon()}
              <span>{platformLabel}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(campaign.startDate).toLocaleDateString()} –{" "}
                {new Date(campaign.endDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="btn-primary px-4 py-2 flex items-center gap-2">
            <Edit3 className="w-4 h-4" />
            Edit Campaign
          </button>
          {campaign.status === "active" && (
            <button className="btn-secondary px-4 py-2 flex items-center gap-2">
              <Pause className="w-4 h-4" />
              Pause
            </button>
          )}
          <button className="btn-secondary px-4 py-2 flex items-center gap-2 text-red-600 hover:text-red-700">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="card">
        <div className="card-content">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Campaign Overview
          </h3>
          <p className="text-gray-600">{campaign.description}</p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-content flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Budget</div>
              <div className="text-2xl font-bold text-slate-800">
                ${campaign.budget.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                ${campaign.spent.toLocaleString()} spent ({budgetUtilization}%)
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Impressions</div>
              <div className="text-2xl font-bold text-slate-800">
                {formatImpressions(campaign.impressions)}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Total reach across platforms
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Users className="w-5 h-5 text-brand-purple" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Engagement</div>
              <div className="text-2xl font-bold text-slate-800">
                {campaign.engagement > 0 ? `${campaign.engagement}%` : "—"}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Likes, comments, shares
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">ROI</div>
              <div className="text-2xl font-bold text-slate-800">
                {campaign.roi}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Return on investment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress + Budget */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress */}
        <div className="card">
          <div className="card-content">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Campaign Progress
            </h3>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Overall Completion</span>
              <span className="font-semibold text-slate-800">
                {campaign.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div
                className="bg-brand-purple h-3 rounded-full transition-all duration-500"
                style={{ width: `${campaign.progress}%` }}
              />
            </div>

            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Budget Utilization</span>
              <span className="font-semibold text-slate-800">
                {budgetUtilization}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${budgetUtilization}%` }}
              />
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="card">
          <div className="card-content">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Activity Timeline
            </h3>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-brand-purple rounded-full" />
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="text-xs text-gray-400 mb-1">
                      {item.date}
                    </div>
                    <div className="text-sm font-medium text-slate-800">
                      {item.event}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
