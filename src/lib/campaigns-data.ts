export interface Campaign {
  id: number;
  name: string;
  influencer: string;
  status: "active" | "pending" | "completed" | "cancelled";
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  impressions: number;
  engagement: number;
  progress: number;
  roi: string;
  description: string;
  platform: "instagram" | "tiktok" | "youtube" | "multi";
}

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Nike Air Max Launch",
    influencer: "LeBron James",
    status: "active",
    startDate: "2026-03-01",
    endDate: "2026-04-15",
    budget: 15000,
    spent: 9200,
    impressions: 2100000,
    engagement: 6.8,
    progress: 61,
    roi: "+34.7%",
    description: "Product launch campaign featuring Nike Air Max 2026 collection with lifestyle and sports content across Instagram and TikTok.",
    platform: "multi",
  },
  {
    id: 2,
    name: "Hydro Flask Summer Collection",
    influencer: "Emma Chamberlain",
    status: "active",
    startDate: "2026-03-10",
    endDate: "2026-05-01",
    budget: 8500,
    spent: 3400,
    impressions: 847000,
    engagement: 5.3,
    progress: 40,
    roi: "+21.2%",
    description: "Lifestyle content series promoting Hydro Flask limited-edition summer colors through everyday carry and travel content.",
    platform: "instagram",
  },
  {
    id: 3,
    name: "Gymshark Protein Line",
    influencer: "Chris Bumstead",
    status: "completed",
    startDate: "2026-01-15",
    endDate: "2026-02-28",
    budget: 12000,
    spent: 12000,
    impressions: 1800000,
    engagement: 7.1,
    progress: 100,
    roi: "+41.3%",
    description: "Fitness content campaign promoting Gymshark's new protein supplement line with workout routines and product integration.",
    platform: "youtube",
  },
  {
    id: 4,
    name: "Glossier Skincare Set",
    influencer: "Addison Rae",
    status: "pending",
    startDate: "2026-04-01",
    endDate: "2026-05-15",
    budget: 6200,
    spent: 0,
    impressions: 0,
    engagement: 0,
    progress: 0,
    roi: "—",
    description: "Beauty and skincare routine content featuring Glossier's new daily essentials kit targeting Gen Z audience.",
    platform: "tiktok",
  },
  {
    id: 5,
    name: "Beats by Dre Studio Pro",
    influencer: "Travis Scott",
    status: "active",
    startDate: "2026-02-15",
    endDate: "2026-04-30",
    budget: 22000,
    spent: 14300,
    impressions: 3400000,
    engagement: 8.2,
    progress: 65,
    roi: "+52.1%",
    description: "High-profile product placement and music content integration featuring Beats Studio Pro headphones.",
    platform: "multi",
  },
  {
    id: 6,
    name: "Fabletics Active Set",
    influencer: "Kevin Hart",
    status: "completed",
    startDate: "2026-01-01",
    endDate: "2026-02-15",
    budget: 9800,
    spent: 9800,
    impressions: 1200000,
    engagement: 5.9,
    progress: 100,
    roi: "+28.6%",
    description: "Comedy-fitness crossover content promoting Fabletics men's activewear line with workout challenges.",
    platform: "instagram",
  },
];

export function getCampaignById(id: number): Campaign | undefined {
  return campaigns.find((c) => c.id === id);
}

export function filterCampaigns(status?: string): Campaign[] {
  if (!status || status === "all") return campaigns;
  return campaigns.filter((c) => c.status === status);
}

export function formatImpressions(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toString();
}
