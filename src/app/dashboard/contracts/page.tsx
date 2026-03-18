import { Eye, Download, FileText, Clock, CheckCircle, Send } from "lucide-react";

export default function ContractsPage() {
  const contracts = [
    {
      id: "CON-001",
      title: "Summer Collection Campaign Agreement",
      client: "FashionForward Inc.",
      value: "$15,000",
      status: "Signed",
      createdDate: "Mar 10, 2024",
      signedDate: "Mar 12, 2024",
      expiryDate: "Apr 30, 2024"
    },
    {
      id: "CON-002",
      title: "Tech Product Launch Partnership",
      client: "TechStart Solutions",
      value: "$8,500",
      status: "Sent",
      createdDate: "Mar 15, 2024",
      signedDate: null,
      expiryDate: "Apr 15, 2024"
    },
    {
      id: "CON-003",
      title: "Brand Ambassador Agreement",
      client: "LifestyleBrand Co.",
      value: "$25,000",
      status: "Draft",
      createdDate: "Mar 18, 2024",
      signedDate: null,
      expiryDate: "Dec 31, 2024"
    },
    {
      id: "CON-004",
      title: "Holiday Special Campaign",
      client: "RetailGiant Corp.",
      value: "$22,000",
      status: "Signed",
      createdDate: "Nov 15, 2023",
      signedDate: "Nov 20, 2023",
      expiryDate: "Jan 15, 2024"
    },
    {
      id: "CON-005",
      title: "Influencer Collaboration Q2",
      client: "StartupXYZ",
      value: "$6,000",
      status: "Sent",
      createdDate: "Mar 16, 2024",
      signedDate: null,
      expiryDate: "Jun 30, 2024"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Signed":
        return <CheckCircle className="w-5 h-5 text-green" />;
      case "Sent":
        return <Send className="w-5 h-5 text-cyan" />;
      case "Draft":
        return <FileText className="w-5 h-5 text-gray-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Signed":
        return "bg-green/10 text-green border-green/20";
      case "Sent":
        return "bg-cyan/10 text-cyan border-cyan/20";
      case "Draft":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Contracts</h1>
          <p className="text-gray-400">Manage your partnership agreements and contracts</p>
        </div>
        
        <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center space-x-2 mt-4 sm:mt-0">
          <FileText className="w-5 h-5" />
          <span>New Contract</span>
        </button>
      </div>

      {/* Contract Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green" />
            <h3 className="text-sm font-medium text-gray-400">Signed Contracts</h3>
          </div>
          <div className="text-2xl font-bold text-green mb-1">2</div>
          <div className="text-sm text-gray-400">Active partnerships</div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Send className="w-6 h-6 text-cyan" />
            <h3 className="text-sm font-medium text-gray-400">Pending Signature</h3>
          </div>
          <div className="text-2xl font-bold text-cyan mb-1">2</div>
          <div className="text-sm text-gray-400">Awaiting client response</div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-6 h-6 text-gray-400" />
            <h3 className="text-sm font-medium text-gray-400">Draft Contracts</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-1">1</div>
          <div className="text-sm text-gray-400">In preparation</div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-6 h-6 text-accent">💰</div>
            <h3 className="text-sm font-medium text-gray-400">Total Value</h3>
          </div>
          <div className="text-2xl font-bold text-accent mb-1">$76,500</div>
          <div className="text-sm text-gray-400">All contracts</div>
        </div>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {contracts.map((contract) => (
          <div key={contract.id} className="bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-serif font-semibold">{contract.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(contract.status)}`}>
                    {contract.status}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>{contract.client}</span>
                  <span>•</span>
                  <span className="font-semibold text-accent">{contract.value}</span>
                  <span>•</span>
                  <span>ID: {contract.id}</span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Created: </span>
                    <span>{contract.createdDate}</span>
                  </div>
                  {contract.signedDate && (
                    <div>
                      <span className="text-gray-400">Signed: </span>
                      <span className="text-green">{contract.signedDate}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400">Expires: </span>
                    <span>{contract.expiryDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                {getStatusIcon(contract.status)}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex space-x-3">
                <button className="text-accent hover:text-accent/80 text-sm font-medium flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                
                {contract.status === "Signed" && (
                  <button className="text-gray-400 hover:text-white text-sm font-medium flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                )}
              </div>

              <div className="flex space-x-3">
                {contract.status === "Draft" && (
                  <>
                    <button className="bg-surface-2 text-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-surface-2/80 transition-colors">
                      Edit
                    </button>
                    <button className="bg-cyan text-white px-4 py-2 rounded text-sm font-medium hover:bg-cyan/90 transition-colors">
                      Send for Signature
                    </button>
                  </>
                )}
                
                {contract.status === "Sent" && (
                  <button className="bg-surface-2 text-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-surface-2/80 transition-colors">
                    Remind Client
                  </button>
                )}
                
                {contract.status === "Signed" && (
                  <button className="bg-green text-white px-4 py-2 rounded text-sm font-medium cursor-default">
                    Completed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contract Templates */}
      <div className="mt-12 bg-surface border border-border rounded-lg p-6">
        <h3 className="text-lg font-serif font-semibold mb-6">Quick Contract Templates</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <button className="p-4 bg-surface-2 border border-border rounded-lg text-left hover:border-accent/30 transition-colors">
            <div className="text-accent mb-2">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="font-semibold mb-1">Influencer Partnership</h4>
            <p className="text-sm text-gray-400">Standard influencer collaboration agreement</p>
          </button>
          
          <button className="p-4 bg-surface-2 border border-border rounded-lg text-left hover:border-accent/30 transition-colors">
            <div className="text-cyan mb-2">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="font-semibold mb-1">Brand Ambassador</h4>
            <p className="text-sm text-gray-400">Long-term brand representation contract</p>
          </button>
          
          <button className="p-4 bg-surface-2 border border-border rounded-lg text-left hover:border-accent/30 transition-colors">
            <div className="text-green mb-2">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="font-semibold mb-1">Campaign Specific</h4>
            <p className="text-sm text-gray-400">Short-term campaign agreement</p>
          </button>
        </div>
      </div>
    </div>
  );
}