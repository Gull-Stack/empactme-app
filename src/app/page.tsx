import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Truck, Video, Brain, BarChart3, CreditCard, FileText } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Truck,
      title: "Transportation Marketplace",
      description: "Connect brands with transportation services for targeted mobile advertising campaigns."
    },
    {
      icon: Video,
      title: "Celebrity Video Cards",
      description: "Personalized video content from celebrities and influencers for authentic brand partnerships."
    },
    {
      icon: Brain,
      title: "Smart Matching",
      description: "AI-powered algorithm that matches brands with the perfect influencers for maximum impact."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive analytics dashboard to track campaign performance and ROI in real-time."
    },
    {
      icon: CreditCard,
      title: "Automated Payments",
      description: "Seamless payment processing with automated commission distribution and invoicing."
    },
    {
      icon: FileText,
      title: "E-Contracts",
      description: "Digital contract management with e-signatures for streamlined partnership agreements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Where Brands Meet
            <span className="text-brand-purple"> Influence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect your brand with the right influencers and transportation partners to create impactful campaigns that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary px-8 py-3 text-lg">
              Get Started
            </Link>
            <Link href="/roadmap" className="btn-secondary px-8 py-3 text-lg">
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools and features you need to create, manage, and optimize successful influencer marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="w-12 h-12 bg-brand-purple-light rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of brands and influencers who trust EmpactMe to deliver exceptional results.
          </p>
          <Link href="/signup" className="btn-primary px-8 py-3 text-lg">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}