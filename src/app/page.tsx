import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Truck,
  Video,
  Brain,
  ShieldCheck,
  CreditCard,
  FileText,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  Coins,
  Package,
  Trophy,
} from "lucide-react";

const opportunities = [
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Logistics opportunities — truckload, intermodal, air, expedite, dray. Connect shippers with providers and earn on every deal.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    href: "/dashboard/opportunities",
  },
  {
    icon: Package,
    title: "Product Endorsements",
    description:
      "Brands upload products, influencers promote them. Track impressions, sales, and commissions in real time.",
    color: "bg-green-100",
    iconColor: "text-green-600",
    href: "/dashboard/opportunities",
  },
  {
    icon: Star,
    title: "Celebrity Partnerships",
    description:
      "Personalized celebrity video messages, endorsements, and appearances. Fair contracts, direct connections — no predatory agents.",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
    href: "/dashboard/opportunities",
  },
  {
    icon: Trophy,
    title: "NIL Deals",
    description:
      "College athletes: protect your name, image, and likeness with fair, transparent e-contracts. No middlemen taking 20%.",
    color: "bg-purple-100",
    iconColor: "text-brand-purple",
    href: "/dashboard/opportunities",
  },
  {
    icon: Coins,
    title: "Blockchain & Coin",
    description:
      "Gold-backed digital currency integration. Every transaction on the platform, secured and transparent on the blockchain.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
    href: "/dashboard/opportunities",
  },
  {
    icon: Users,
    title: "Vendor Marketplace",
    description:
      "Restaurants, spas, local businesses — promote to your community through influencers who actually live there.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    href: "/dashboard/opportunities",
  },
];

const successStories = [
  {
    name: "Marcus T.",
    role: "Fitness Influencer",
    quote:
      "I introduced one supplement brand to the platform. That single lead now pays me $3,200/month — every month. Mailbox money.",
    metric: "$3,200/mo",
    metricLabel: "Passive Income",
  },
  {
    name: "Sarah K.",
    role: "Restaurant Owner",
    quote:
      "Two local influencers promoted our grand opening. 400 people showed up. Best launch in 15 years of business.",
    metric: "400+",
    metricLabel: "Opening Day Guests",
  },
  {
    name: "DeShawn R.",
    role: "College Athlete (NIL)",
    quote:
      "My old agent wanted 20% of deals I found myself. EmpactMe connects me directly. I keep what I earn.",
    metric: "100%",
    metricLabel: "His Earnings",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Browse Opportunities",
    description:
      "See every vertical — transportation, products, celebrity, NIL, vendors. Find what excites you.",
  },
  {
    step: "2",
    title: "Build Your Profile",
    description:
      "Tell us who you are, what you like, what you're good at. Our AI matches you to the right deals.",
  },
  {
    step: "3",
    title: "Connect & Earn",
    description:
      "E-contracts on every deal. Fair splits. Lifetime referral commissions. No predatory agents.",
  },
  {
    step: "4",
    title: "Get Rewarded",
    description:
      "Concert tickets, discounts, exclusive access — personalized rewards based on your activity and interests.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-brand-purple-light to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple-light text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-8">
            <ShieldCheck className="w-4 h-4" />
            Fair deals. Real money. No middlemen.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Your Opportunity
            <span className="text-brand-purple"> Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re a brand, influencer, celebrity, athlete, or
            local business — EmpactMe connects you to real opportunities with
            fair contracts and transparent commissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2 justify-center"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/roadmap"
              className="btn-secondary px-8 py-4 text-lg"
            >
              View Roadmap
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-brand-purple">6</div>
              <div className="text-sm text-gray-600">
                Opportunity Verticals
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-purple">100%</div>
              <div className="text-sm text-gray-600">
                Transparent Contracts
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-purple">
                Lifetime
              </div>
              <div className="text-sm text-gray-600">
                Referral Commissions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Categories — THE MAIN EVENT */}
      <section className="py-24 px-6 bg-white" id="opportunities">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Explore Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every category is a revenue center. Click in, explore, and find
              your next deal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <Link
                key={index}
                href={opp.href}
                className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-content">
                  <div
                    className={`w-14 h-14 ${opp.color} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <opp.icon className={`w-7 h-7 ${opp.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-purple transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{opp.description}</p>
                  <div className="flex items-center gap-2 text-brand-purple font-medium text-sm">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How You Make Money */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How You Make Money
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              One lead can become lifetime income. Here&apos;s how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-purple text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Real People. Real Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a single introduction to life-changing passive income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {story.name}
                      </div>
                      <div className="text-sm text-gray-400">{story.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-brand-purple">
                      {story.metric}
                    </div>
                    <div className="text-sm text-gray-400">
                      {story.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Built for Trust & Transparency
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature designed so nobody gets taken advantage of. Ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "E-Contracts on Everything",
                description:
                  "Every transaction, every deal, every partnership — backed by a fair, transparent agreement. No handshake deals.",
              },
              {
                icon: CreditCard,
                title: "Automated Payments",
                description:
                  "Escrow payments, automated commission splits, and instant payouts. You see exactly what you earn.",
              },
              {
                icon: Brain,
                title: "AI-Powered Matching",
                description:
                  "Our algorithm matches you to the right opportunities based on your profile, interests, and track record.",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Analytics",
                description:
                  "Track every impression, click, sale, and commission in real time. Know exactly what's working.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Control",
                description:
                  "Vendor ratings, product comparisons, performance reviews. Only quality opportunities make it through.",
              },
              {
                icon: Star,
                title: "Rewards Program",
                description:
                  "Concert tickets, discounts, exclusive access — personalized rewards based on your activity and what you love.",
              },
            ].map((feature, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="w-12 h-12 bg-brand-purple-light rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-purple to-brand-purple-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop Getting Taken Advantage Of.
          </h2>
          <p className="text-xl text-purple-200 mb-10">
            Whether you&apos;re an influencer, athlete, celebrity, brand, or
            local business — EmpactMe puts you in control of your deals, your
            data, and your income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-purple font-semibold text-lg rounded-xl hover:bg-gray-100 transition-colors"
            >
              Join EmpactMe
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-brand-purple transition-colors"
            >
              See the Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">EmpactMe</div>
          <p className="text-sm mb-6">
            Fair deals. Real money. No middlemen.
          </p>
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} EmpactMe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
