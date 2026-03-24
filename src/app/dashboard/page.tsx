import Link from "next/link";
import { Megaphone, DollarSign, Eye, Target } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import { campaigns, formatImpressions } from "@/lib/campaigns-data";

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Welcome back!
        </h1>
        <p className="text-gray-600">
          Here&apos;s what&apos;s happening with your campaigns today, {today}
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Campaigns"
          value={String(campaigns.filter((c) => c.status === "active").length)}
          icon={Megaphone}
          iconColor="text-brand-purple"
          iconBgColor="bg-brand-purple-light"
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatsCard
          title="Total Earnings"
          value="$48,900"
          icon={DollarSign}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="Impressions"
          value="9.3M"
          icon={Eye}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
          trend={{ value: 18.7, isPositive: true }}
        />
        <StatsCard
          title="Conversion Rate"
          value="4.12%"
          icon={Target}
          iconColor="text-amber-600"
          iconBgColor="bg-amber-100"
          trend={{ value: 1.8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reports Chart Section */}
        <div className="card">
          <div className="card-content">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Campaign Performance
            </h3>
            {/* Chart Placeholder */}
            <div className="h-64 bg-gradient-to-br from-brand-purple-light to-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  📈
                </div>
                <div className="text-sm text-gray-600">
                  Interactive chart showing campaign performance over time
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Last 30 days</span>
              <span className="text-green-600 font-medium">
                ↗ +23.4% growth
              </span>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="card">
          <div className="card-content">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Campaign Distribution
            </h3>
            {/* Donut Chart Placeholder */}
            <div className="h-64 bg-gradient-to-br from-green-100 to-brand-purple-light rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  🥧
                </div>
                <div className="text-sm text-gray-600">
                  Donut chart showing campaign distribution by category
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-purple rounded-full" />
                <span className="text-gray-600">Fitness & Sports (35%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full" />
                <span className="text-gray-600">Beauty & Skincare (25%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-gray-600">Tech & Audio (20%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                <span className="text-gray-600">Fashion (20%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Campaigns Table */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Recent Campaigns
            </h3>
            <Link
              href="/dashboard/campaigns"
              className="text-sm text-brand-purple hover:text-brand-purple-dark font-medium"
            >
              View all
            </Link>
          </div>

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
                    Impressions
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    ROI
                  </th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr
                    key={campaign.id}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-4 px-4">
                      <Link
                        href={`/dashboard/campaigns/${campaign.id}`}
                        className="font-medium text-slate-800 hover:text-brand-purple"
                      >
                        {campaign.name}
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-600">{campaign.influencer}</div>
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
                    <td className="py-4 px-4 text-gray-600">
                      {formatImpressions(campaign.impressions)}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${campaign.roi === "—" ? "text-gray-400" : "text-green-600"}`}>
                        {campaign.roi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
