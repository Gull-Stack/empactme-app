import { LucideIcon, Star, Edit, Trash2 } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    category: string;
    icon: LucideIcon;
    description: string;
    price: number;
    commission: number;
    rating: number;
    totalOrders: number;
    active: boolean;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card">
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
  );
}