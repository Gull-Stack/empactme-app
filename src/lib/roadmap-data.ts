export interface Task {
  id: string;
  name: string;
  status: "done" | "in-progress" | "planned";
  description?: string;
}

export interface Phase {
  id: string;
  name: string;
  status: "done" | "in-progress" | "planned";
  progress: number;
  tasks: Task[];
  description: string;
  targetDate?: string;
}

export const roadmapData: Phase[] = [
  {
    id: "1a",
    name: "Phase 1A: Platform Foundation & Onboarding",
    status: "in-progress",
    progress: 35,
    description:
      "Core platform setup — user authentication, profile system, landing experience, and Stripe Connect payments. First thing users see: mission, opportunities, success stories, and how to make money.",
    targetDate: "Weeks 1–4",
    tasks: [
      { id: "1a-1", name: "Landing Page — Mission, Opportunities, Success Stories", status: "in-progress", description: "First screen shows all opportunity categories to invoke curiosity" },
      { id: "1a-2", name: "User Authentication (Company / Influencer / Vendor)", status: "in-progress", description: "Multi-role login with different dashboard views per role" },
      { id: "1a-3", name: "Deep Profile System", status: "planned", description: "Name, age, interests, sports teams, preferences — feeds into matching & rewards" },
      { id: "1a-4", name: "Stripe Connect Payment Integration", status: "planned", description: "Bank account connection, escrow, commission splits" },
      { id: "1a-5", name: "Opportunity Category Browser", status: "planned", description: "Transportation, Products, Celebrity, NIL, Vendor — each with sub-categories" },
      { id: "1a-6", name: "E-Contract System (Every Transaction)", status: "planned", description: "Fair, transparent agreements on every deal — no exceptions" },
      { id: "1a-7", name: "Notification System", status: "planned" },
      { id: "1a-8", name: "Basic Dashboard (Company + Influencer Views)", status: "done", description: "Campaign overview, stats cards, recent activity" },
    ],
  },
  {
    id: "1b",
    name: "Phase 1B: Celebrity E-Cards & Quick Revenue",
    status: "planned",
    progress: 5,
    description:
      "Personalized celebrity video messages (Cameo-style) — FASTEST path to revenue. Joe already has celebrities ready to sign up. Needs sign-up page, confidentiality letters, booking flow, and payout.",
    targetDate: "Weeks 3–6",
    tasks: [
      { id: "1b-1", name: "Celebrity Sign-Up & Verification", status: "planned", description: "Onboarding flow with confidentiality agreements" },
      { id: "1b-2", name: "Celebrity Profile Pages", status: "planned", description: "Bio, pricing, availability, sample videos" },
      { id: "1b-3", name: "Video Request & Booking System", status: "planned", description: "Users request personalized videos from celebrities" },
      { id: "1b-4", name: "Video Upload & Processing", status: "planned" },
      { id: "1b-5", name: "Pricing & Commission Structure", status: "planned", description: "Fair splits — no predatory agent fees" },
      { id: "1b-6", name: "Video Delivery & Download", status: "planned" },
      { id: "1b-7", name: "Celebrity Payout System", status: "planned", description: "Direct payment via Stripe Connect" },
    ],
  },
  {
    id: "1c",
    name: "Phase 1C: Transportation & Vendor Marketplace",
    status: "planned",
    progress: 0,
    description:
      "Transportation logistics marketplace (truckload, intermodal, air, expedite, dray) + vendor marketplace for local businesses. Joe has active salespeople and contacts ready to flow deals through the platform.",
    targetDate: "Weeks 5–8",
    tasks: [
      { id: "1c-1", name: "Transportation Service Categories", status: "planned", description: "Truckload, intermodal, air, expedite, dray, full outsource" },
      { id: "1c-2", name: "Company/Shipper Onboarding", status: "planned" },
      { id: "1c-3", name: "Service Provider Onboarding", status: "planned" },
      { id: "1c-4", name: "Deal Flow & Matching", status: "planned", description: "Connect shippers with providers, track opportunities" },
      { id: "1c-5", name: "Vendor Marketplace", status: "planned", description: "Restaurants, spas, local businesses promoting to community" },
      { id: "1c-6", name: "Vendor Quality Control & Ratings", status: "planned", description: "Ratings for food, service, performance, cost" },
      { id: "1c-7", name: "Referral Commission Tracking", status: "planned", description: "Lifetime 'mailbox money' for bringing leads" },
    ],
  },
  {
    id: "2",
    name: "Phase 2: Campaign Engine & NIL",
    status: "planned",
    progress: 0,
    description:
      "Full campaign management, AI matching, NIL deals for college athletes with fair contracts, product comparisons, and advanced analytics. Protect athletes from predatory agents.",
    targetDate: "Weeks 9–16",
    tasks: [
      { id: "2-1", name: "Campaign Creation Wizard", status: "planned" },
      { id: "2-2", name: "AI-Powered Influencer Matching", status: "planned", description: "Match brands to influencers based on profile data, interests, audience" },
      { id: "2-3", name: "NIL Deal Marketplace", status: "planned", description: "College athletes: fair contracts, no agent exploitation" },
      { id: "2-4", name: "Product Comparison Engine", status: "planned", description: "Cost, quality, ratings — side by side" },
      { id: "2-5", name: "Advanced Analytics Dashboard", status: "planned", description: "Market performance by region, what works where" },
      { id: "2-6", name: "Leaderboards", status: "planned", description: "Top sellers, influencers, celebrities, products" },
      { id: "2-7", name: "ROI Tracking & Reporting", status: "planned" },
      { id: "2-8", name: "Multi-channel Distribution", status: "planned" },
      { id: "2-9", name: "AI Support System", status: "planned", description: "Real issue resolution — not runaround chatbots" },
    ],
  },
  {
    id: "3",
    name: "Phase 3: Rewards, Blockchain & Scale",
    status: "planned",
    progress: 0,
    description:
      "Rewards/acts of kindness program, blockchain integration for transparent tracking, mobile app, and platform scaling. Personalized rewards based on deep profile data.",
    targetDate: "Weeks 17–24",
    tasks: [
      { id: "3-1", name: "Rewards & Acts of Kindness Program", status: "planned", description: "Free concert tickets, discounts based on activity + profile preferences" },
      { id: "3-2", name: "Blockchain Transaction Tracking", status: "planned" },
      { id: "3-3", name: "Mobile App (iOS + Android)", status: "planned" },
      { id: "3-4", name: "Social Media API Integrations", status: "planned", description: "Track impressions, engagement across platforms" },
      { id: "3-5", name: "Franchise/Licensing Module", status: "planned", description: "Enable celebrity-backed local businesses (cupcake shop model)" },
      { id: "3-6", name: "Enterprise Solutions", status: "planned" },
      { id: "3-7", name: "International Market Expansion", status: "planned" },
      { id: "3-8", name: "Advanced Security & Compliance", status: "planned" },
    ],
  },
];

export const getSummaryStats = () => {
  const allTasks = roadmapData.flatMap((phase) => phase.tasks);
  const completed = allTasks.filter((task) => task.status === "done").length;
  const inProgress = allTasks.filter(
    (task) => task.status === "in-progress"
  ).length;
  const planned = allTasks.filter((task) => task.status === "planned").length;
  const overall = Math.round((completed / allTasks.length) * 100);

  return {
    completed,
    inProgress,
    planned,
    total: allTasks.length,
    overall,
  };
};
