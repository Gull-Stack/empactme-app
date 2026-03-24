"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Grid, List, Calendar } from "lucide-react";
import { campaigns, filterCampaigns, formatImpressions } from "@/lib/campaigns-data";
import type { Campaign } from "@/lib/campaigns-data";

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const activeCt = campaigns.filter((c) => c.status === "active").length;
  const pendingCt = campaigns.filter((c) => c.status === "pending").length;
  const completedCt = campaigns.filter((c) => c.status === "completed").length;

  const tabs = [
    { id: "all", label: "All Campaigns", count: campaigns.length },
    { id: "active", label: "Active", count: activeCt },
    { id: "pending", label: "Pending", count: pendingCt },
    { id: "completed", label: "Completed", count: completedCt },
  ];

  const filteredCampaigns = filterCampaigns(activeTab);

  const CampaignCard = ({ campaign }: { campaign: Campaign }) => (
    <div className="card">
      <div className="card-content">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              {campaign.name}
            </h3>
            <p className="text-sm text-gray-600">with {campaign.influencer}</p>
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
                {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                {new Date(campaign.endDate).toLocaleDateString()}
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
                {formatImpressions(campaign.impressions)}
              </div>
            </div>
          </div>

          {campaign.progress > 0 && (
            <div>
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="font-medium text-slate-800">
                  {campaign.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-brand-purple h-2 rounded-full transition-all duration-500"
                  style={{ width: `${campaign.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
          <Link
            href={`/dashboard/campaigns/${campaign.id}`}
            className="btn-primary flex-1 py-2 text-center"
          >
            View Details
          </Link>
          <Link
            href={`/dashboard/campaigns/${campaign.id}`}
            className="btn-secondary px-4 py-2 text-center"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Campaigns</h1>
          <p className="text-gray-600">
            Manage and track your influencer marketing campaigns
          </p>
        </div>
        <Link
          href="/dashboard/campaigns/new"
          className="btn-primary px-4 py-2 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Campaign
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="card">
        <div className="card-content">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white"
                      : "text-gray-600 hover:text-slate-800 hover:bg-gray-50"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 lg:ml-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="form-input pl-10 w-64"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm"
                      : "hover:bg-white"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-white shadow-sm"
                      : "hover:bg-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="card-content">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Campaign
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Influencer
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Budget
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Progress
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCampaigns.map((campaign) => (
                    <tr
                      key={campaign.id}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-slate-800">
                          {campaign.name}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        {campaign.influencer}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`status-badge ${campaign.status}`}>
                          {campaign.status.charAt(0).toUpperCase() +
                            campaign.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        ${campaign.budget.toLocaleString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-brand-purple h-2 rounded-full"
                              style={{ width: `${campaign.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">
                            {campaign.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/dashboard/campaigns/${campaign.id}`}
                            className="btn-primary px-3 py-1 text-sm"
                          >
                            View
                          </Link>
                          <Link
                            href={`/dashboard/campaigns/${campaign.id}`}
                            className="btn-secondary px-3 py-1 text-sm"
                          >
                            Edit
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
