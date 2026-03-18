import { Edit, Trash2 } from "lucide-react";

interface ServiceCardProps {
  name: string;
  category: string;
  price: string;
  commissionRate: string;
  description?: string;
}

export default function ServiceCard({
  name,
  category,
  price,
  commissionRate,
  description
}: ServiceCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-lg font-semibold mb-1">{name}</h3>
          <span className="inline-block bg-accent/10 text-accent px-2 py-1 rounded text-sm">
            {category}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-surface-2 rounded">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-surface-2 rounded">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Price</p>
          <p className="text-lg font-semibold">{price}</p>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-400">Commission</p>
          <p className="text-lg font-semibold text-green">{commissionRate}</p>
        </div>
      </div>
    </div>
  );
}