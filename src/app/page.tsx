import Link from "next/link";
import Navbar from "@/components/Navbar";
import { 
  Truck, 
  Video, 
  Target, 
  BarChart3, 
  CreditCard, 
  FileText 
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transportation Marketplace",
      description: "Connect with reliable transportation services through our vetted network of professional drivers and fleet operators."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Celebrity Video Cards",
      description: "Get personalized video content from top celebrities and influencers to boost your brand's social media presence."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Matching",
      description: "Our AI-powered algorithm matches brands with the perfect influencers based on audience demographics and engagement."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Track campaign performance with comprehensive analytics and insights to optimize your marketing ROI."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Automated Payments",
      description: "Secure, automated payment processing with transparent pricing and instant payouts for all parties."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "E-Contracts",
      description: "Streamlined digital contracts with built-in compliance and legal protection for all your collaborations."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Where Brands Meet 
            <span className="text-accent"> Influence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto text-balance">
            The premier marketplace connecting forward-thinking companies with top-tier 
            influencers and content creators. Drive authentic engagement and measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/login"
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/roadmap"
              className="border border-cyan text-cyan px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan/10 transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            Everything You Need to Scale Your Influence
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-surface border border-border rounded-lg p-8 hover:border-accent/30 transition-colors">
                <div className="text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of brands and creators already succeeding on EmpactMe.
          </p>
          <Link 
            href="/signup"
            className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}