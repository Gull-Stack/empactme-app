import { Download, ExternalLink, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function PaymentsPage() {
  const mockTransactions = [
    {
      id: "TXN-001",
      date: "2024-03-15",
      description: "Summer Fashion Campaign - Sarah Johnson",
      amount: 2500,
      status: "completed",
      type: "payment_sent"
    },
    {
      id: "TXN-002",
      date: "2024-03-14",
      description: "Platform commission - February",
      amount: -450,
      status: "completed",
      type: "fee"
    },
    {
      id: "TXN-003",
      date: "2024-03-12",
      description: "Tech Product Launch - Mike Chen",
      amount: 1600,
      status: "pending",
      type: "payment_sent"
    },
    {
      id: "TXN-004",
      date: "2024-03-10",
      description: "Travel Adventure Series - Emma Davis",
      amount: 1400,
      status: "completed",
      type: "payment_sent"
    },
    {
      id: "TXN-005",
      date: "2024-03-08",
      description: "Fitness Challenge - Alex Rodriguez",
      amount: 2250,
      status: "processing",
      type: "payment_sent"
    },
    {
      id: "TXN-006",
      date: "2024-03-05",
      description: "Food Recipe Content - Lisa Thompson",
      amount: 950,
      status: "completed",
      type: "payment_sent"
    },
    {
      id: "TXN-007",
      date: "2024-03-03",
      description: "Beauty Product Review - Jessica Park",
      amount: 1750,
      status: "failed",
      type: "payment_sent"
    },
    {
      id: "TXN-008",
      date: "2024-03-01",
      description: "Account top-up",
      amount: 10000,
      status: "completed",
      type: "deposit"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "pending":
      case "processing":
        return <Clock className="w-4 h-4 text-amber-600" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "status-badge";
    switch (status) {
      case "completed":
        return `${baseClasses} complete`;
      case "pending":
        return `${baseClasses} pending`;
      case "processing":
        return `${baseClasses} in-progress`;
      case "failed":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Payments
          </h1>
          <p className="text-gray-600">
            Track your earnings, payments, and transaction history
          </p>
        </div>
        <button className="btn-primary px-4 py-2 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Earnings Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">
                  $24,580
                </div>
                <div className="text-sm text-gray-600">
                  Total Earnings
                </div>
                <div className="text-xs text-green-600 mt-1">
                  ↗ +12.5% from last month
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  $3,850
                </div>
                <div className="text-sm text-gray-600">
                  Pending Payments
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  2 transactions pending
                </div>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-3xl font-bold text-brand-purple mb-1">
                  $20,730
                </div>
                <div className="text-sm text-gray-600">
                  Available for Payout
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Ready to withdraw
                </div>
              </div>
              <button className="btn-primary px-4 py-2 text-sm">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payout Status */}
      <div className="card">
        <div className="card-content">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Payout Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-800 mb-3">Bank Account</h4>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bank</span>
                    <span className="text-slate-800">Chase Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Account</span>
                    <span className="text-slate-800">****1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-600 font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-800 mb-3">Payout Schedule</h4>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Frequency</span>
                    <span className="text-slate-800">Weekly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Payout</span>
                    <span className="text-slate-800">March 22, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minimum</span>
                    <span className="text-slate-800">$100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Transaction History
            </h3>
            <div className="flex items-center gap-2">
              <select className="form-input text-sm py-2">
                <option>All transactions</option>
                <option>Payments sent</option>
                <option>Deposits</option>
                <option>Fees</option>
              </select>
              <select className="form-input text-sm py-2">
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last year</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-slate-800">
                        {transaction.description}
                      </div>
                      <div className="text-xs text-gray-400">
                        ID: {transaction.id}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`font-medium ${
                        transaction.amount > 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(transaction.status)}
                        <span className={getStatusBadge(transaction.status)}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-slate-800 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-slate-800 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Showing 8 of 45 transactions
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-secondary px-3 py-2 text-sm">
                Previous
              </button>
              <button className="btn-secondary px-3 py-2 text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}