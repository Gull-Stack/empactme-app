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
}

export const roadmapData: Phase[] = [
  {
    id: "1a",
    name: "1A: Transportation Marketplace",
    status: "in-progress",
    progress: 65,
    description: "Core marketplace functionality for transportation services",
    tasks: [
      { id: "1a-1", name: "User Authentication System", status: "done" },
      { id: "1a-2", name: "Service Provider Onboarding", status: "done" },
      { id: "1a-3", name: "Basic Matching Algorithm", status: "done" },
      { id: "1a-4", name: "Payment Processing Integration", status: "in-progress" },
      { id: "1a-5", name: "Ride Booking Interface", status: "in-progress" },
      { id: "1a-6", name: "Real-time Tracking", status: "planned" },
      { id: "1a-7", name: "Rating & Review System", status: "planned" },
      { id: "1a-8", name: "Mobile App Launch", status: "planned" }
    ]
  },
  {
    id: "1b",
    name: "1B: Celebrity Video Cards",
    status: "planned",
    progress: 10,
    description: "Personalized video content marketplace with celebrity partnerships",
    tasks: [
      { id: "1b-1", name: "Video Upload & Processing", status: "planned" },
      { id: "1b-2", name: "Celebrity Partnership Program", status: "planned" },
      { id: "1b-3", name: "Custom Video Request System", status: "planned" },
      { id: "1b-4", name: "Video Quality Assurance", status: "planned" },
      { id: "1b-5", name: "Pricing & Commission Structure", status: "planned" },
      { id: "1b-6", name: "Video Delivery System", status: "planned" },
      { id: "1b-7", name: "Celebrity Verification", status: "planned" }
    ]
  },
  {
    id: "1c",
    name: "1C: Campaign Engine",
    status: "planned",
    progress: 5,
    description: "Advanced campaign management and analytics platform",
    tasks: [
      { id: "1c-1", name: "Campaign Creation Wizard", status: "planned" },
      { id: "1c-2", name: "Advanced Analytics Dashboard", status: "planned" },
      { id: "1c-3", name: "A/B Testing Framework", status: "planned" },
      { id: "1c-4", name: "ROI Tracking & Reporting", status: "planned" },
      { id: "1c-5", name: "Automated Campaign Optimization", status: "planned" },
      { id: "1c-6", name: "Multi-channel Distribution", status: "planned" },
      { id: "1c-7", name: "Campaign Performance Alerts", status: "planned" },
      { id: "1c-8", name: "White-label Solutions", status: "planned" },
      { id: "1c-9", name: "API for Third-party Integration", status: "planned" }
    ]
  },
  {
    id: "2",
    name: "Phase 2: Platform Expansion",
    status: "planned",
    progress: 0,
    description: "Global expansion and advanced platform features",
    tasks: [
      { id: "2-1", name: "International Market Entry", status: "planned" },
      { id: "2-2", name: "Multi-language Support", status: "planned" },
      { id: "2-3", name: "Enterprise Solutions", status: "planned" },
      { id: "2-4", name: "AI-powered Recommendations", status: "planned" },
      { id: "2-5", name: "Blockchain Integration", status: "planned" },
      { id: "2-6", name: "NFT Marketplace", status: "planned" },
      { id: "2-7", name: "Advanced Security Features", status: "planned" },
      { id: "2-8", name: "Partnership Ecosystem", status: "planned" }
    ]
  }
];

export const getSummaryStats = () => {
  const allTasks = roadmapData.flatMap(phase => phase.tasks);
  const completed = allTasks.filter(task => task.status === "done").length;
  const inProgress = allTasks.filter(task => task.status === "in-progress").length;
  const planned = allTasks.filter(task => task.status === "planned").length;
  const overall = Math.round((completed / allTasks.length) * 100);

  return {
    completed,
    inProgress,
    planned,
    total: allTasks.length,
    overall
  };
};