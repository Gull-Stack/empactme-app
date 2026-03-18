"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Megaphone, 
  Package, 
  FileText, 
  CreditCard, 
  Settings, 
  Menu, 
  X,
  Bell,
  User
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: Megaphone },
  { name: "Services", href: "/dashboard/services", icon: Package },
  { name: "Contracts", href: "/dashboard/contracts", icon: FileText },
  { name: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-black/50" />
        </div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border transform transition-transform lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <Link href="/" className="text-xl font-serif font-bold text-accent">
            EmpactMe
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/dashboard" && pathname.startsWith(item.href));
              
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                      ${isActive 
                        ? "bg-accent text-white" 
                        : "text-gray-300 hover:text-white hover:bg-surface-2"
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <div className="bg-surface border-b border-border">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 ml-auto">
              <button className="relative text-gray-400 hover:text-white">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2 rounded-full">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-400">Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}