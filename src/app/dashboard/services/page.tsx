import ServiceCard from "@/components/ServiceCard";
import { Plus, Search } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      name: "Instagram Post Package",
      category: "Social Media",
      price: "$350",
      commissionRate: "15%",
      description: "Professional Instagram posts with high-quality visuals and engaging captions"
    },
    {
      name: "YouTube Video Review",
      category: "Video Content",
      price: "$800",
      commissionRate: "20%",
      description: "In-depth product review videos with 10K+ subscriber reach"
    },
    {
      name: "TikTok Viral Challenge",
      category: "Trending Content",
      price: "$450",
      commissionRate: "18%",
      description: "Creative TikTok content designed to go viral and maximize engagement"
    },
    {
      name: "Brand Story Series",
      category: "Storytelling",
      price: "$1,200",
      commissionRate: "25%",
      description: "Multi-part brand storytelling across Instagram, YouTube, and blog platforms"
    },
    {
      name: "Product Launch Campaign",
      category: "Campaigns",
      price: "$2,000",
      commissionRate: "30%",
      description: "Comprehensive product launch strategy with multi-platform coverage"
    },
    {
      name: "Lifestyle Integration",
      category: "Lifestyle",
      price: "$650",
      commissionRate: "22%",
      description: "Natural product integration into daily lifestyle content"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Services</h1>
          <p className="text-gray-400">Manage your service offerings and pricing</p>
        </div>
        
        <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center space-x-2 mt-4 sm:mt-0">
          <Plus className="w-5 h-5" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-surface border border-border rounded-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent w-full lg:w-64"
            />
          </div>
          
          <div className="flex space-x-4">
            <select className="bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
              <option>All Categories</option>
              <option>Social Media</option>
              <option>Video Content</option>
              <option>Trending Content</option>
              <option>Storytelling</option>
              <option>Campaigns</option>
              <option>Lifestyle</option>
            </select>
            
            <select className="bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
              <option>Sort by Price</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Commission Rate</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            category={service.category}
            price={service.price}
            commissionRate={service.commissionRate}
            description={service.description}
          />
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-accent mb-2">6</div>
          <div className="text-sm text-gray-400">Active Services</div>
        </div>
        
        <div className="bg-surface border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-green mb-2">$4,450</div>
          <div className="text-sm text-gray-400">Avg. Service Value</div>
        </div>
        
        <div className="bg-surface border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-cyan mb-2">22%</div>
          <div className="text-sm text-gray-400">Avg. Commission</div>
        </div>
        
        <div className="bg-surface border border-border rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-white mb-2">48</div>
          <div className="text-sm text-gray-400">Total Bookings</div>
        </div>
      </div>
    </div>
  );
}