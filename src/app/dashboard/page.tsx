import StatsCard from "@/components/StatsCard";
import { 
  Megaphone, 
  DollarSign, 
  Eye, 
  TrendingUp,
  Plus,
  MessageSquare,
  Users,
  Calendar,
  FileText,
  BarChart3
} from "lucide-react";

export default function DashboardPage() {
  const recentActivity = [
    {
      id: 1,
      type: "campaign",
      title: "Summer Collection Campaign approved",
      time: "2 hours ago",
      icon: <Megaphone className="w-5 h-5 text-green" />
    },
    {
      id: 2,
      type: "payment",
      title: "Payment of $2,450 processed",
      time: "5 hours ago",
      icon: <DollarSign className="w-5 h-5 text-cyan" />
    },
    {
      id: 3,
      type: "contract",
      title: "New contract from TechStart received",
      time: "1 day ago",
      icon: <FileText className="w-5 h-5 text-accent" />
    },
    {
      id: 4,
      type: "message",
      title: "Message from Sarah about Q2 campaign",
      time: "2 days ago",
      icon: <MessageSquare className="w-5 h-5 text-gray-400" />
    }
  ];

  const quickActions = [
    {
      title: "New Campaign",
      description: "Launch a new influencer campaign",
      icon: <Plus className="w-6 h-6" />,
      href: "/dashboard/campaigns/new",
      color: "bg-accent"
    },
    {
      title: "Find Influencers",
      description: "Browse our network of creators",
      icon: <Users className="w-6 h-6" />,
      href: "/dashboard/influencers",
      color: "bg-cyan"
    },
    {
      title: "Schedule Meeting",
      description: "Book a call with potential partners",
      icon: <Calendar className="w-6 h-6" />,
      href: "/dashboard/meetings",
      color: "bg-green"
    },
    {
      title: "View Analytics",
      description: "Deep dive into performance metrics",
      icon: <BarChart3 className="w-6 h-6" />,
      href: "/dashboard/analytics",
      color: "bg-purple-600"
    }
  ];

  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">
          Good morning, John!
        </h1>
        <p className="text-gray-400">
          Here&apos;s what&apos;s happening with your campaigns today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={<Megaphone className="w-6 h-6" />}
          label="Active Campaigns"
          value="12"
          trend={{ value: "+2 this month", positive: true }}
        />
        <StatsCard
          icon={<DollarSign className="w-6 h-6" />}
          label="Total Earnings"
          value="$24,580"
          trend={{ value: "+18% vs last month", positive: true }}
        />
        <StatsCard
          icon={<Eye className="w-6 h-6" />}
          label="Total Impressions"
          value="2.4M"
          trend={{ value: "+12% this week", positive: true }}
        />
        <StatsCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Conversion Rate"
          value="3.2%"
          trend={{ value: "-0.3% vs last month", positive: false }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-xl font-serif font-semibold mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-4 bg-surface-2 rounded-lg">
                  <div className="flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 text-accent hover:text-accent/80 text-sm font-medium">
              View All Activity
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-xl font-serif font-semibold mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="flex items-center space-x-4 p-4 bg-surface-2 rounded-lg hover:bg-surface-2/80 transition-colors group"
                >
                  <div className={`flex-shrink-0 p-2 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{action.title}</p>
                    <p className="text-xs text-gray-400">{action.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 bg-surface border border-border rounded-lg p-6">
            <h3 className="text-lg font-serif font-semibold mb-4">This Week</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Campaign Views</span>
                <span className="font-semibold">45.2K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">New Followers</span>
                <span className="font-semibold text-green">+1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Engagement Rate</span>
                <span className="font-semibold">4.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Revenue</span>
                <span className="font-semibold text-accent">$3,890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}