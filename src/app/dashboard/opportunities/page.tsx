"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  Package,
  Star,
  Trophy,
  Coins,
  Users,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  MapPin,
  Clock,
} from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All Opportunities",
    icon: TrendingUp,
    count: 24,
  },
  {
    id: "transportation",
    label: "Transportation",
    icon: Truck,
    count: 8,
  },
  {
    id: "products",
    label: "Products",
    icon: Package,
    count: 6,
  },
  {
    id: "celebrity",
    label: "Celebrity",
    icon: Star,
    count: 4,
  },
  {
    id: "nil",
    label: "NIL Deals",
    icon: Trophy,
    count: 3,
  },
  {
    id: "vendor",
    label: "Vendors",
    icon: Users,
    count: 2,
  },
  {
    id: "blockchain",
    label: "Blockchain",
    icon: Coins,
    count: 1,
  },
];

interface Opportunity {
  id: number;
  title: string;
  category: string;
  company: string;
  description: string;
  commission: string;
  location: string;
  posted: string;
  urgency: "hot" | "new" | "standard";
  type: string;
}

const mockOpportunities: Opportunity[] = [
  {
    id: 1,
    title: "Full Truckload — Ball Corporation (West Coast)",
    category: "transportation",
    company: "Ball Corporation",
    description:
      "Full outsource logistics deal for packaging and container shipments. Truckload + intermodal combo across West Coast distribution centers.",
    commission: "8% per load",
    location: "Los Angeles, CA → Phoenix, AZ",
    posted: "2 hours ago",
    urgency: "hot",
    type: "Truckload / Intermodal",
  },
  {
    id: 2,
    title: "Nike Air Max 2026 — Influencer Campaign",
    category: "products",
    company: "Nike",
    description:
      "Looking for fitness and lifestyle influencers to promote the Air Max 2026 launch. Instagram + TikTok content with product gifting.",
    commission: "$2,500 + 5% sales",
    location: "Nationwide",
    posted: "1 day ago",
    urgency: "hot",
    type: "Product Endorsement",
  },
  {
    id: 3,
    title: "Celebrity Video Message — Birthday Greetings",
    category: "celebrity",
    company: "Direct Request",
    description:
      "Personalized video messages for fans. Set your own rate, record on your schedule. Verified celebrities earn 85% of booking fee.",
    commission: "85% of booking",
    location: "Remote",
    posted: "Always Open",
    urgency: "standard",
    type: "Celebrity E-Card",
  },
  {
    id: 4,
    title: "Air Freight — Expedited Medical Supplies",
    category: "transportation",
    company: "MedTrans Logistics",
    description:
      "Urgent air freight contract for medical supply distribution. Expedited service required, premium rates available.",
    commission: "12% per shipment",
    location: "Dallas, TX → Multiple",
    posted: "5 hours ago",
    urgency: "hot",
    type: "Air / Expedite",
  },
  {
    id: 5,
    title: "College Basketball — NIL Endorsement Deal",
    category: "nil",
    company: "Gatorade Regional",
    description:
      "Regional Gatorade campaign seeking D1 basketball players. Fair contract, no agent lock-in. You control your name and likeness.",
    commission: "$5,000 flat + bonuses",
    location: "Southeast Conference",
    posted: "3 days ago",
    urgency: "new",
    type: "NIL / Athlete",
  },
  {
    id: 6,
    title: "Hydro Flask — Summer Product Launch",
    category: "products",
    company: "Hydro Flask",
    description:
      "Limited-edition summer colors launch. Seeking lifestyle and outdoor influencers for Instagram stories and reels.",
    commission: "$1,800 + product",
    location: "Nationwide",
    posted: "12 hours ago",
    urgency: "new",
    type: "Product Endorsement",
  },
  {
    id: 7,
    title: "Local Restaurant Promo — Grand Opening",
    category: "vendor",
    company: "Granny's Cupcakes",
    description:
      "New cupcake shop opening in LA. Looking for local food influencers for grand opening coverage and ongoing monthly promo.",
    commission: "$500/event + 10% sales",
    location: "Los Angeles, CA",
    posted: "1 day ago",
    urgency: "new",
    type: "Vendor / Local",
  },
  {
    id: 8,
    title: "Intermodal Container — Import/Export",
    category: "transportation",
    company: "Pacific Trade Corp",
    description:
      "Container drayage and intermodal service needed for import/export operations. Long-term contract available.",
    commission: "6% per container",
    location: "Long Beach, CA",
    posted: "4 days ago",
    urgency: "standard",
    type: "Dray / Intermodal",
  },
  {
    id: 9,
    title: "Texas Coin — Launch Partner Program",
    category: "blockchain",
    company: "Texas Coin Foundation",
    description:
      "Gold-backed digital currency seeking platform partners. Exclusive integration opportunity for marketplace transactions.",
    commission: "Partnership TBD",
    location: "Austin, TX",
    posted: "1 week ago",
    urgency: "new",
    type: "Blockchain / Crypto",
  },
];

export default function OpportunitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? mockOpportunities
      : mockOpportunities.filter((o) => o.category === activeCategory);

  const urgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "hot":
        return (
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
            HOT
          </span>
        );
      case "new":
        return (
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            NEW
          </span>
        );
      default:
        return null;
    }
  };

  const categoryIcon = (cat: string) => {
    const found = categories.find((c) => c.id === cat);
    if (!found) return <Package className="w-5 h-5" />;
    const Icon = found.icon;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Opportunities
          </h1>
          <p className="text-gray-600">
            Browse every vertical. Find your next deal. Earn lifetime
            commissions.
          </p>
        </div>
        <button className="btn-primary px-4 py-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Submit an Opportunity
        </button>
      </div>

      {/* Category Tabs */}
      <div className="card">
        <div className="card-content">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-brand-purple text-white"
                      : "text-gray-600 hover:text-slate-800 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  <span
                    className={`text-xs ${
                      activeCategory === cat.id
                        ? "text-purple-200"
                        : "text-gray-400"
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="flex items-center gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search opportunities..."
                className="form-input pl-10 w-full"
              />
            </div>
            <button className="btn-secondary px-4 py-2 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Opportunity Cards */}
      <div className="space-y-4">
        {filtered.map((opp) => (
          <div
            key={opp.id}
            className="card hover:shadow-lg transition-all duration-200"
          >
            <div className="card-content">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-purple-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-purple">
                    {categoryIcon(opp.category)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {opp.title}
                    </h3>
                    {urgencyBadge(opp.urgency)}
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {opp.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-1">{opp.company}</p>
                  <p className="text-gray-600 mb-4">{opp.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-green-700">
                        {opp.commission}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{opp.posted}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <button className="btn-primary px-4 py-2 flex items-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit CTA */}
      <div className="card bg-gradient-to-r from-brand-purple to-brand-purple-dark">
        <div className="card-content text-center py-12">
          <h3 className="text-2xl font-bold text-white mb-3">
            Have an Opportunity to Share?
          </h3>
          <p className="text-purple-200 mb-6 max-w-lg mx-auto">
            Know someone who needs transportation? Have a product to promote? A
            celebrity connection? Submit it and earn lifetime referral
            commissions.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-purple font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Submit an Opportunity
          </button>
        </div>
      </div>
    </div>
  );
}
