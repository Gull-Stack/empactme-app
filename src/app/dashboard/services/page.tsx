import { Plus, Instagram, Video, Truck, Star, Edit, Trash2 } from "lucide-react";

export default function ServicesPage() {
  const mockServices = [
    {
      id: 1,
      name: "Instagram Post Package",
      category: "Social Media",
      icon: Instagram,
      description: "3 Instagram posts with professional photography",
      price: 850,
      commission: 15,
      rating: 4.8,
      totalOrders: 127,
      active: true
    },
    {
      id: 2,
      name: "Video Content Creation",
      category: "Video",
      icon: Video,
      description: "Custom video content for social media platforms",
      price: 1200,
      commission: 20,
      rating: 4.9,
      totalOrders: 89,
      active: true
    },
    {
      id: 3,
      name: "Transportation Advertising",
      category: "Transportation",
      icon: Truck,
      description: "Mobile ads on vehicles and transportation services",
      price: 450,
      commission: 25,
      rating: 4.6,
      totalOrders: 203,
      active: true
    },
    {
      id: 4,
      name: "Story Highlights Package",
      category: "Social Media",
      icon: Instagram,
      description: "10 Instagram stories with branded highlights",
      price: 320,
      commission: 15,
      rating: 4.7,
      totalOrders: 156,
      active: false
    },
    {
      id: 5,
      name: "Reels & TikTok Content",
      category: "Video",
      icon: Video,
      description: "Short-form video content for viral potential",
      price: 680,
      commission: 18,
      rating: 4.8,
      totalOrders: 94,
      active: true
    },
    {
      id: 6,
      name: "Celebrity Endorsement",
      category: "Celebrity",
      icon: Star,
      description: "Personal video message from verified celebrities",
      price: 2500,
      commission: 30,
      rating: 4.9,
      totalOrders: 34,
      active: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Services
          </h1>
          <p className="text-gray-600">
            Manage your service offerings and pricing
          </p>
        </div>
        <button className="btn-primary px-4 py-2 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Service
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-slate-800 mb-1">6</div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">5</div>
            <div className="text-sm text-gray-600">Active Services</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-brand-purple mb-1">$1,167</div>
            <div className="text-sm text-gray-600">Avg. Service Price</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-amber-600 mb-1">20.5%</div>
            <div className="text-sm text-gray-600">Avg. Commission</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockServices.map((service) => (
          <div key={service.id} className="card">
            <div className="card-content">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-purple-light rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {service.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1 text-gray-400 hover:text-slate-800 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Service Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <div className="text-gray-400">Price</div>
                  <div className="font-semibold text-slate-800">
                    ${service.price.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Commission</div>
                  <div className="font-semibold text-slate-800">
                    {service.commission}%
                  </div>
                </div>
              </div>

              {/* Rating and Orders */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-medium text-slate-800">
                    {service.rating}
                  </span>
                  <span className="text-gray-400">
                    ({service.totalOrders} orders)
                  </span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  service.active
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {service.active ? "Active" : "Inactive"}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="btn-primary flex-1 py-2 text-sm">
                  View Details
                </button>
                <button className="btn-secondary px-4 py-2 text-sm">
                  {service.active ? "Pause" : "Activate"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Categories */}
      <div className="card">
        <div className="card-content">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Service Performance by Category
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-purple mb-2">
                Social Media
              </div>
              <div className="text-sm text-gray-600 mb-2">
                3 services • 283 total orders
              </div>
              <div className="text-lg font-semibold text-green-600">
                $425 avg price
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Video Content
              </div>
              <div className="text-sm text-gray-600 mb-2">
                2 services • 183 total orders
              </div>
              <div className="text-lg font-semibold text-green-600">
                $940 avg price
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-2">
                Transportation
              </div>
              <div className="text-sm text-gray-600 mb-2">
                1 service • 203 total orders
              </div>
              <div className="text-lg font-semibold text-green-600">
                $450 avg price
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}