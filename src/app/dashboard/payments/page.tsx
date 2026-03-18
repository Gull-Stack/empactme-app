import { Download, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function PaymentsPage() {
  const transactions = [
    {
      id: "PAY-001",
      description: "Summer Collection Campaign",
      amount: "$2,450.00",
      status: "Completed",
      date: "Mar 15, 2024",
      type: "credit"
    },
    {
      id: "PAY-002", 
      description: "Platform Fee",
      amount: "$245.00",
      status: "Completed",
      date: "Mar 15, 2024",
      type: "debit"
    },
    {
      id: "PAY-003",
      description: "Tech Product Launch",
      amount: "$1,850.00",
      status: "Pending",
      date: "Mar 12, 2024",
      type: "credit"
    },
    {
      id: "PAY-004",
      description: "Brand Partnership Bonus",
      amount: "$500.00",
      status: "Completed",
      date: "Mar 10, 2024",
      type: "credit"
    },
    {
      id: "PAY-005",
      description: "Withdrawal to Bank",
      amount: "$3,000.00",
      status: "Processing",
      date: "Mar 8, 2024",
      type: "debit"
    },
    {
      id: "PAY-006",
      description: "Holiday Campaign Payout",
      amount: "$4,250.00",
      status: "Completed",
      date: "Mar 5, 2024",
      type: "credit"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green/10 text-green border-green/20";
      case "Pending":
        return "bg-cyan/10 text-cyan border-cyan/20";
      case "Processing":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Payments</h1>
          <p className="text-gray-400">Track your earnings and transaction history</p>
        </div>
        
        <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center space-x-2 mt-4 sm:mt-0">
          <Download className="w-5 h-5" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Earnings Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">Available Balance</h3>
            <div className="text-green">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-green mb-1">$8,450.00</div>
          <div className="text-sm text-gray-400">Ready for withdrawal</div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">Pending Earnings</h3>
            <div className="text-cyan">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-cyan mb-1">$1,850.00</div>
          <div className="text-sm text-gray-400">Processing</div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">This Month</h3>
            <div className="text-accent">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold text-accent mb-1">$12,580.00</div>
          <div className="text-sm text-green">+24% vs last month</div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">Total Lifetime</h3>
            <div className="text-white">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-bold mb-1">$156,730.00</div>
          <div className="text-sm text-gray-400">Since joining</div>
        </div>
      </div>

      {/* Earnings Chart Placeholder */}
      <div className="bg-surface border border-border rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-serif font-semibold">Earnings Overview</h2>
          <select className="bg-surface-2 border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent">
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
        
        <div className="h-64 bg-surface-2 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-400 mb-2">📈</div>
            <p className="text-gray-400">Earnings chart will be displayed here</p>
            <p className="text-sm text-gray-500">Integration with analytics coming soon</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-serif font-semibold">Recent Transactions</h2>
          <button className="text-accent hover:text-accent/80 font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Transaction</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Date</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-border/50 hover:bg-surface-2/30 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        transaction.type === "credit" ? "bg-green" : "bg-red-400"
                      }`} />
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-400">{transaction.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-semibold ${
                      transaction.type === "credit" ? "text-green" : "text-red-400"
                    }`}>
                      {transaction.type === "credit" ? "+" : "-"}{transaction.amount}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    {transaction.date}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-gray-400 hover:text-white">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payout Settings */}
      <div className="mt-8 bg-surface border border-border rounded-lg p-6">
        <h3 className="text-lg font-serif font-semibold mb-4">Payout Settings</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Bank Account
            </label>
            <div className="bg-surface-2 border border-border rounded-lg p-4">
              <p className="font-medium">Wells Fargo ****1234</p>
              <p className="text-sm text-gray-400">Primary account</p>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Payout Schedule
            </label>
            <select className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
              <option>Weekly (Mondays)</option>
              <option>Bi-weekly</option>
              <option>Monthly</option>
              <option>Manual</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
            Request Payout
          </button>
          <button className="border border-border text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-surface-2 transition-colors">
            Update Settings
          </button>
        </div>
      </div>
    </div>
  );
}