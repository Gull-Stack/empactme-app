"use client";

import { useState } from "react";
import Link from "next/link";
import CampaignCard from "@/components/CampaignCard";
import { Search, Plus, Filter } from "lucide-react";

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Active", "Pending", "Completed"];

  const campaigns = [
    {
      name: "Summer Collection 2024",
      status: "Active" as const,
      startDate: "Mar 1, 2024",
      endDate: "Apr 30, 2024",
      budget: "$15,000",
      impressions: "2.4M",
      roi: "+340%"
    },
    {
      name: "Tech Product Launch",
      status: "Pending" as const,
      startDate: "Apr 15, 2024",
      endDate: "May 15, 2024",
      budget: "$8,500",
      impressions: "850K",
    },
    {
      name: "Holiday Special Campaign",
      status: "Completed" as const,
      startDate: "Dec 1, 2023",
      endDate: "Dec 31, 2023",
      budget: "$22,000",
      impressions: "5.2M",
      roi: "+425%"
    },
    {
      name: "Brand Awareness Drive",
      status: "Active" as const,
      startDate: "Feb 1, 2024",
      endDate: "Mar 31, 2024",
      budget: "$12,000",
      impressions: "1.8M",
      roi: "+280%"
    },
    {
      name: "Influencer Collaboration",
      status: "Pending" as const,
      startDate: "May 1, 2024",
      endDate: "Jun 1, 2024",
      budget: "$6,000",
      impressions: "420K",
    },
    {
      name: "Q1 Marketing Push",
      status: "Completed" as const,
      startDate: "Jan 1, 2024",
      endDate: "Mar 31, 2024",
      budget: "$18,500",
      impressions: "3.1M",
      roi: "+390%"
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesFilter = activeFilter === "All" || campaign.status === activeFilter;
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getFilterCount = (filter: string) => {
    if (filter === "All") return campaigns.length;
    return campaigns.filter(c => c.status === filter).length;
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Campaigns</h1>
          <p className="text-gray-400">Manage and track your influencer campaigns</p>
        </div>
        
        <Link 
          href="/dashboard/campaigns/new"
          className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center space-x-2 mt-4 sm:mt-0"
        >
          <Plus className="w-5 h-5" />
          <span>New Campaign</span>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-surface border border-border rounded-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-surface-2 p-1 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-accent text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {filter} ({getFilterCount(filter)})
              </button>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent w-64"
              />
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-3 bg-surface-2 border border-border rounded-lg text-gray-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Grid */}
      {filteredCampaigns.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              name={campaign.name}
              status={campaign.status}
              startDate={campaign.startDate}
              endDate={campaign.endDate}
              budget={campaign.budget}
              impressions={campaign.impressions}
              roi={campaign.roi}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-surface-2 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No campaigns found</h3>
          <p className="text-gray-400 mb-6">
            {searchQuery 
              ? `No campaigns match "${searchQuery}"`
              : `No ${activeFilter.toLowerCase()} campaigns found`
            }
          </p>
          {activeFilter === "All" && !searchQuery && (
            <Link 
              href="/dashboard/campaigns/new"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create Your First Campaign</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}