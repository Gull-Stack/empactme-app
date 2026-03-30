import Link from "next/link";
import { Building2, Star, Users, Store, ArrowRight, DollarSign, TrendingUp } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-purple rounded-xl flex items-center justify-center">
              <div className="text-white font-bold text-xl">E</div>
            </div>
            <span className="text-4xl font-bold text-white">EmpactMe</span>
          </div>
          <p className="text-xl text-gray-300 mb-2">Multi-Role Marketplace Platform</p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span>$188K/month Revenue Potential</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Transportation Automation Focus</span>
            </div>
          </div>
        </div>

        {/* Demo Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/dashboard?role=company" 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Building2 className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Company</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Waco Transportation Co. dashboard with automation opportunities, John Deere partnership, and cost savings metrics
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">John Deere Partnership:</span>
                    <span className="text-green-400 font-medium">$10,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Waco Branches (68):</span>
                    <span className="text-green-400 font-medium">$170,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Active Contracts:</span>
                    <span className="text-green-400 font-medium">$8,000/month</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

          <Link 
            href="/dashboard?role=celebrity" 
            className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300 hover:scale-105 hover:border-amber-400/40"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                <Star className="w-7 h-7 text-amber-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Celebrity
                  <span className="ml-2 text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">PREMIUM</span>
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Eric Roberts premium experience with VIP treatment, curated opportunities, and high-value endorsement deals
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monthly Earnings:</span>
                    <span className="text-amber-400 font-medium">$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Completion Rate:</span>
                    <span className="text-amber-400 font-medium">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Success Rate:</span>
                    <span className="text-amber-400 font-medium">98.2%</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

          <Link 
            href="/dashboard?role=influencer" 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-green-400/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Users className="w-7 h-7 text-green-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">Influencer</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Content creator dashboard with brand partnerships, engagement metrics, and audience monetization tools
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Active Campaigns:</span>
                    <span className="text-green-400 font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Earnings:</span>
                    <span className="text-green-400 font-medium">$12,850</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Engagement Rate:</span>
                    <span className="text-green-400 font-medium">4.8%</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-300 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

          <Link 
            href="/dashboard?role=vendor" 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <Store className="w-7 h-7 text-purple-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Service Provider</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Local business dashboard with quality ratings, community trust scores, and vendor marketplace opportunities
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Quality Rating:</span>
                    <span className="text-purple-400 font-medium">4.8/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Customer Reviews:</span>
                    <span className="text-purple-400 font-medium">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Market Position:</span>
                    <span className="text-purple-400 font-medium">#3</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>

        {/* Demo Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4">
            <div className="text-sm text-gray-400">
              <span className="block font-medium text-white">Demo Ready for Joe's Review</span>
              <span>Transportation automation • Multi-role dashboards • $188K revenue potential</span>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link 
              href="/roadmap" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              View Product Roadmap →
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/login" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Login System →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-500">
          EmpactMe Demo Portal — Built by GullStack for Joe Slamons
        </div>
      </div>
    </div>
  );
}