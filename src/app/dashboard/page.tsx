"use client";

import { Megaphone, DollarSign, Eye, Target, Truck, Star, Users, ThumbsUp } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  // Get user role from URL params for demo purposes
  const searchParams = useSearchParams();
  const userRole = searchParams.get('role') || 'company'; // Can be: company, celebrity, influencer, vendor
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Role-specific dashboard data
  const dashboardData = {
    company: {
      userName: "Waco Transportation Co.",
      welcome: "Here's your automation dashboard and cost savings overview",
      stats: [
        { title: "Transportation Cost Savings", value: "$18,500", icon: Truck, iconColor: "text-green-600", iconBgColor: "bg-green-100", trend: { value: 15.2, isPositive: true } },
        { title: "Automation Opportunities", value: "68", icon: Megaphone, iconColor: "text-brand-purple", iconBgColor: "bg-brand-purple-light", trend: { value: 12, isPositive: true } },
        { title: "Employee Access", value: "247", icon: Users, iconColor: "text-blue-600", iconBgColor: "bg-blue-100", trend: { value: 5.1, isPositive: true } },
        { title: "Monthly ROI", value: "24.3%", icon: Target, iconColor: "text-amber-600", iconBgColor: "bg-amber-100", trend: { value: 2.8, isPositive: true } }
      ],
      opportunities: [
        { title: "John Deere Logistics Partnership", partner: "John Deere Corp", status: "pending", revenue: "$10,000/mo", savings: "32% cost reduction • Full fleet management", accept: false, priority: "HIGH", description: "Complete logistics automation for equipment delivery across Texas region" },
        { title: "Waco Branch Network - Phase 1 (34 locations)", partner: "Waco Regional Network", status: "pending", revenue: "$85,000/mo", savings: "68 branches • $2,500 each", accept: false, priority: "URGENT", description: "Automated dispatch system for 34 northern Waco branches" },
        { title: "Waco Branch Network - Phase 2 (34 locations)", partner: "Waco Regional Network", status: "pending", revenue: "$85,000/mo", savings: "Remaining 34 branches • $2,500 each", accept: false, priority: "HIGH", description: "Complete southern Waco branch automation rollout" },
        { title: "Regional Transport Consolidation", partner: "TransNetwork LLC", status: "active", revenue: "$8,000/mo", savings: "Current contractor revenue", accept: true, priority: "ACTIVE", description: "Existing transportation contract optimization" }
      ]
    },
    celebrity: {
      userName: "Eric Roberts",
      welcome: "Your premium opportunities await — curated specifically for you",
      stats: [
        { title: "Monthly Earnings", value: "$45,000", icon: DollarSign, iconColor: "text-amber-600", iconBgColor: "bg-amber-100", trend: { value: 18.5, isPositive: true } },
        { title: "Completion Rate", value: "94%", icon: Star, iconColor: "text-amber-500", iconBgColor: "bg-amber-100", trend: { value: 3.2, isPositive: true } },
        { title: "Opportunities Accepted", value: "12", icon: ThumbsUp, iconColor: "text-green-600", iconBgColor: "bg-green-100", trend: { value: 8.1, isPositive: true } },
        { title: "Success Rate", value: "98.2%", icon: Target, iconColor: "text-green-500", iconBgColor: "bg-green-100", trend: { value: 1.5, isPositive: true } }
      ],
      opportunities: [
        { title: "Luxury Restaurant Endorsement", partner: "Bistro Elite", status: "pending", revenue: "$8,000", earnings: "Per endorsement", accept: false },
        { title: "Local Business Feature", partner: "Waco Chamber", status: "active", revenue: "$12,000", earnings: "Monthly partnership", accept: true },
        { title: "E-Video Campaign", partner: "Premium Brand Co", status: "pending", revenue: "$15,000", earnings: "Per video", accept: false },
        { title: "NIL Sports Deal", partner: "Athletics Corp", status: "completed", revenue: "$25,000", earnings: "Season contract", accept: true }
      ]
    },
    influencer: {
      userName: "Content Creator",
      welcome: "Here's what's happening with your brand partnerships",
      stats: [
        { title: "Active Campaigns", value: "8", icon: Megaphone, iconColor: "text-brand-purple", iconBgColor: "bg-brand-purple-light", trend: { value: 6.2, isPositive: true } },
        { title: "Total Earnings", value: "$12,850", icon: DollarSign, iconColor: "text-green-600", iconBgColor: "bg-green-100", trend: { value: 14.5, isPositive: true } },
        { title: "Impressions", value: "485K", icon: Eye, iconColor: "text-blue-600", iconBgColor: "bg-blue-100", trend: { value: 12.1, isPositive: true } },
        { title: "Engagement Rate", value: "4.8%", icon: Target, iconColor: "text-amber-600", iconBgColor: "bg-amber-100", trend: { value: 0.8, isPositive: true } }
      ],
      opportunities: [
        { title: "Local Coffee Shop Feature", partner: "Brew & Co", status: "pending", revenue: "$800", audience: "Food/Lifestyle", accept: false },
        { title: "Fashion Brand Collab", partner: "Style Studio", status: "active", revenue: "$1,200", audience: "Fashion/Beauty", accept: true },
        { title: "Tech Product Review", partner: "GadgetWorld", status: "pending", revenue: "$1,500", audience: "Tech/Reviews", accept: false },
        { title: "Fitness Challenge Series", partner: "FitLife Brand", status: "completed", revenue: "$2,000", audience: "Health/Fitness", accept: true }
      ]
    },
    vendor: {
      userName: "Local Service Provider",
      welcome: "See how your community rates you and find new opportunities",
      stats: [
        { title: "Quality Rating", value: "4.8/5", icon: Star, iconColor: "text-amber-500", iconBgColor: "bg-amber-100", trend: { value: 0.3, isPositive: true } },
        { title: "Customer Reviews", value: "127", icon: Users, iconColor: "text-blue-600", iconBgColor: "bg-blue-100", trend: { value: 15.2, isPositive: true } },
        { title: "Monthly Revenue", value: "$8,400", icon: DollarSign, iconColor: "text-green-600", iconBgColor: "bg-green-100", trend: { value: 12.8, isPositive: true } },
        { title: "Market Position", value: "#3", icon: Target, iconColor: "text-brand-purple", iconBgColor: "bg-brand-purple-light", trend: { value: 1, isPositive: true } }
      ],
      opportunities: [
        { title: "Local Influencer Partnership", partner: "Waco Food Blogger", status: "pending", revenue: "$500", scope: "Social media feature", accept: false },
        { title: "Community Recommendation", partner: "Neighborhood App", status: "active", revenue: "$300/mo", scope: "Featured listing", accept: true },
        { title: "Chamber of Commerce Feature", partner: "Waco Chamber", status: "pending", revenue: "$200", scope: "Monthly newsletter", accept: false },
        { title: "Local Event Sponsorship", partner: "City Events", status: "completed", revenue: "$1,000", scope: "Brand visibility", accept: true }
      ]
    }
  };

  const currentData = dashboardData[userRole] || dashboardData.company;

  return (
    <div className="space-y-6">
      {/* Demo Role Switcher */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-2">🎭 Demo Mode - Switch User Roles</h3>
            <div className="flex gap-2">
              <a 
                href="/dashboard?role=company" 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  userRole === 'company' ? 'bg-brand-purple text-white' : 'bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple-light'
                }`}
              >
                🏢 Company
              </a>
              <a 
                href="/dashboard?role=celebrity" 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  userRole === 'celebrity' ? 'bg-amber-500 text-white' : 'bg-white text-amber-600 border border-amber-500 hover:bg-amber-50'
                }`}
              >
                ⭐ Celebrity
              </a>
              <a 
                href="/dashboard?role=influencer" 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  userRole === 'influencer' ? 'bg-green-500 text-white' : 'bg-white text-green-600 border border-green-500 hover:bg-green-50'
                }`}
              >
                👥 Influencer
              </a>
              <a 
                href="/dashboard?role=vendor" 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  userRole === 'vendor' ? 'bg-blue-500 text-white' : 'bg-white text-blue-600 border border-blue-500 hover:bg-blue-50'
                }`}
              >
                🔧 Service Provider
              </a>
            </div>
          </div>
          <div className="text-xs text-blue-600">
            Current: <span className="font-medium">{userRole}</span>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            userRole === 'company' ? 'bg-brand-purple-light text-brand-purple' :
            userRole === 'celebrity' ? 'bg-amber-100 text-amber-800' :
            userRole === 'influencer' ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Dashboard
          </span>
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Welcome back, {currentData.userName}!
        </h1>
        <p className="text-gray-600">
          {currentData.welcome} — {today}
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentData.stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
            iconBgColor={stat.iconBgColor}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reports Chart Section */}
        <div className="card">
          <div className="card-content">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              {userRole === 'company' ? 'Cost Savings Overview' :
               userRole === 'celebrity' ? 'Earnings Performance' :
               userRole === 'influencer' ? 'Campaign Performance' :
               'Service Quality Trends'}
            </h3>
            <div className="h-64 bg-gradient-to-br from-brand-purple-light to-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">📈</div>
                <div className="text-sm text-gray-600">
                  {userRole === 'company' ? 'Automation cost savings over time' :
                   userRole === 'celebrity' ? 'Monthly earnings and completion rates' :
                   userRole === 'influencer' ? 'Campaign performance metrics' :
                   'Quality ratings and customer feedback'}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Last 30 days</span>
              <span className="text-green-600 font-medium">↗ +{
                userRole === 'company' ? '18.3% savings' :
                userRole === 'celebrity' ? '24.7% earnings' :
                userRole === 'influencer' ? '15.2% performance' :
                '12.8% quality score'
              }</span>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="card">
          <div className="card-content">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              {userRole === 'company' ? 'Opportunity Distribution' :
               userRole === 'celebrity' ? 'Opportunity Types' :
               userRole === 'influencer' ? 'Campaign Categories' :
               'Service Breakdown'}
            </h3>
            <div className="h-64 bg-gradient-to-br from-green-100 to-brand-purple-light rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">🥧</div>
                <div className="text-sm text-gray-600">
                  Distribution chart by category
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {userRole === 'company' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    <span className="text-gray-600">Transportation (70%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Automation (20%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Logistics (10%)</span>
                  </div>
                </>
              )}
              {userRole === 'celebrity' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-600">Endorsements (50%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">E-Videos (30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">NIL Deals (20%)</span>
                  </div>
                </>
              )}
              {userRole === 'influencer' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    <span className="text-gray-600">Lifestyle (40%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Fashion (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Tech (35%)</span>
                  </div>
                </>
              )}
              {userRole === 'vendor' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    <span className="text-gray-600">Restaurants (45%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Services (35%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-600">Retail (20%)</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Table */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              {userRole === 'company' ? 'Transportation Opportunities' :
               userRole === 'celebrity' ? 'Premium Opportunities' :
               userRole === 'influencer' ? 'Brand Partnerships' :
               'Local Business Opportunities'}
            </h3>
            <button className="text-sm text-brand-purple hover:text-brand-purple-dark font-medium">
              View all
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Opportunity</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Partner</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Revenue</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    {userRole === 'company' ? 'Savings' :
                     userRole === 'celebrity' ? 'Earnings' :
                     userRole === 'influencer' ? 'Audience' :
                     'Scope'}
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.opportunities.map((opportunity, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-b-0">
                    <td className="py-4 px-4">
                      <div className="font-medium text-slate-800">{opportunity.title}</div>
                      {opportunity.description && (
                        <div className="text-xs text-gray-500 mt-1">{opportunity.description}</div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-gray-600">{opportunity.partner}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`status-badge ${opportunity.status}`}>
                        {opportunity.status.charAt(0).toUpperCase() + opportunity.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-800">{opportunity.revenue}</td>
                    <td className="py-4 px-4 text-gray-600">
                      {opportunity.savings || opportunity.earnings || opportunity.audience || opportunity.scope}
                    </td>
                    <td className="py-4 px-4">
                      {opportunity.status === 'pending' ? (
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-green-600 text-white text-xs rounded-full hover:bg-green-700 transition-colors">
                            Accept
                          </button>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full hover:bg-gray-300 transition-colors">
                            Reject
                          </button>
                        </div>
                      ) : opportunity.status === 'active' ? (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                          Managing
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          Completed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Joe's Review Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Ready for Joe's Review</h3>
            <div className="text-sm text-purple-800 space-y-2">
              <p><strong>✅ Multi-role system:</strong> Company/Celebrity/Influencer/Vendor dashboards</p>
              <p><strong>✅ Transportation focus:</strong> John Deere ($10K/mo) + Waco branches ($170K/mo potential)</p>
              <p><strong>✅ Revenue-focused metrics:</strong> Earnings, completion rates, cost savings</p>
              <p><strong>✅ Simple accept/reject workflow:</strong> One-click opportunity management</p>
              <div className="mt-3 p-3 bg-white rounded border-l-4 border-green-500">
                <p className="font-medium text-gray-900">Total addressable revenue in demo: <span className="text-green-600">$188,000/month</span></p>
                <p className="text-sm text-gray-600 mt-1">John Deere + Waco branches + current contractors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}