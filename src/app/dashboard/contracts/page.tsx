import { Plus, Eye, FileText, Download, Calendar } from "lucide-react";

export default function ContractsPage() {
  const mockContracts = [
    {
      id: "CTR-001",
      title: "Summer Fashion Campaign Agreement",
      company: "Fashion Forward Inc.",
      influencer: "Sarah Johnson",
      status: "signed",
      value: 5000,
      startDate: "2024-03-01",
      endDate: "2024-04-15",
      createdDate: "2024-02-25",
      signedDate: "2024-02-28"
    },
    {
      id: "CTR-002",
      title: "Tech Product Launch Contract",
      company: "TechCorp Solutions",
      influencer: "Mike Chen",
      status: "sent",
      value: 3200,
      startDate: "2024-03-15",
      endDate: "2024-04-30",
      createdDate: "2024-03-10",
      signedDate: null
    },
    {
      id: "CTR-003",
      title: "Travel Content Partnership",
      company: "Wanderlust Travel",
      influencer: "Emma Davis",
      status: "signed",
      value: 2800,
      startDate: "2024-02-01",
      endDate: "2024-02-29",
      createdDate: "2024-01-20",
      signedDate: "2024-01-25"
    },
    {
      id: "CTR-004",
      title: "Fitness Brand Collaboration",
      company: "FitLife Brands",
      influencer: "Alex Rodriguez",
      status: "draft",
      value: 4500,
      startDate: "2024-03-20",
      endDate: "2024-05-20",
      createdDate: "2024-03-15",
      signedDate: null
    },
    {
      id: "CTR-005",
      title: "Food & Recipe Content Deal",
      company: "Gourmet Kitchen Co.",
      influencer: "Lisa Thompson",
      status: "signed",
      value: 1900,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      createdDate: "2024-01-10",
      signedDate: "2024-01-12"
    },
    {
      id: "CTR-006",
      title: "Beauty Product Review Agreement",
      company: "Beauty Essentials",
      influencer: "Jessica Park",
      status: "sent",
      value: 3500,
      startDate: "2024-04-01",
      endDate: "2024-05-01",
      createdDate: "2024-03-18",
      signedDate: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "signed":
        return "text-green-600 bg-green-100";
      case "sent":
        return "text-amber-600 bg-amber-100";
      case "draft":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Contracts
          </h1>
          <p className="text-gray-600">
            Manage partnership agreements and legal documents
          </p>
        </div>
        <button className="btn-primary px-4 py-2 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Contract
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-slate-800 mb-1">6</div>
            <div className="text-sm text-gray-600">Total Contracts</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Signed</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-amber-600 mb-1">2</div>
            <div className="text-sm text-gray-600">Awaiting Signature</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content text-center">
            <div className="text-3xl font-bold text-gray-600 mb-1">1</div>
            <div className="text-sm text-gray-600">Draft</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="card-content">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-4">
              <select className="form-input text-sm py-2">
                <option>All Statuses</option>
                <option>Draft</option>
                <option>Sent</option>
                <option>Signed</option>
              </select>
              <select className="form-input text-sm py-2">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="md:ml-auto">
              <input
                type="text"
                placeholder="Search contracts..."
                className="form-input text-sm py-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contracts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockContracts.map((contract) => (
          <div key={contract.id} className="card">
            <div className="card-content">
              {/* Contract Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {contract.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {contract.company} • {contract.influencer}
                  </p>
                </div>
                <span className={`status-badge ${contract.status}`}>
                  {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                </span>
              </div>

              {/* Contract Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <div className="text-gray-400">Contract Value</div>
                  <div className="font-semibold text-slate-800">
                    ${contract.value.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Contract ID</div>
                  <div className="font-semibold text-slate-800">
                    {contract.id}
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Duration: {new Date(contract.startDate).toLocaleDateString()} - {new Date(contract.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Created: {new Date(contract.createdDate).toLocaleDateString()}
                    {contract.signedDate && (
                      <span> • Signed: {new Date(contract.signedDate).toLocaleDateString()}</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Progress for non-draft contracts */}
              {contract.status !== "draft" && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-medium text-slate-800">
                      {contract.status === "signed" ? "100%" : "50%"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        contract.status === "signed" ? "bg-green-500 w-full" : "bg-amber-500 w-1/2"
                      }`}
                    ></div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="btn-primary flex-1 py-2 text-sm flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  {contract.status === "draft" ? "Edit" : "View"}
                </button>
                {contract.status === "sent" && (
                  <button className="btn-secondary px-4 py-2 text-sm">
                    Resend
                  </button>
                )}
                {contract.status === "signed" && (
                  <button className="btn-secondary px-4 py-2 text-sm flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contract Templates */}
      <div className="card">
        <div className="card-content">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Quick Templates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-dashed border-gray-200 hover:border-brand-purple rounded-lg text-left transition-colors">
              <div className="font-medium text-slate-800 mb-2">
                Standard Influencer Agreement
              </div>
              <div className="text-sm text-gray-600">
                Basic terms for social media partnerships
              </div>
            </button>
            
            <button className="p-4 border-2 border-dashed border-gray-200 hover:border-brand-purple rounded-lg text-left transition-colors">
              <div className="font-medium text-slate-800 mb-2">
                Video Content Contract
              </div>
              <div className="text-sm text-gray-600">
                Specialized terms for video content creation
              </div>
            </button>
            
            <button className="p-4 border-2 border-dashed border-gray-200 hover:border-brand-purple rounded-lg text-left transition-colors">
              <div className="font-medium text-slate-800 mb-2">
                Celebrity Endorsement Deal
              </div>
              <div className="text-sm text-gray-600">
                High-value celebrity partnership agreements
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}