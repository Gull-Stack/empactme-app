"use client";

import { useState } from "react";
import { User, Building, CreditCard, Bell, Shield, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "company", label: "Company & Billing", icon: Building },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  const ProfileSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              First Name
            </label>
            <input
              type="text"
              className="form-input"
              defaultValue="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="form-input"
              defaultValue="Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="form-input"
              defaultValue="john.doe@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-input"
              defaultValue="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Profile Photo
        </h3>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-brand-purple-light rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-brand-purple" />
          </div>
          <div>
            <button className="btn-primary px-4 py-2 text-sm mb-2">
              Upload Photo
            </button>
            <p className="text-xs text-gray-400">
              JPG, PNG, or GIF. Max size 5MB.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Bio & Description
        </h3>
        <textarea
          className="form-input min-h-[100px] resize-none"
          placeholder="Tell us about yourself and your expertise..."
          defaultValue="Experienced marketing professional with 8+ years in influencer partnerships and brand collaborations."
        />
      </div>
    </div>
  );

  const CompanySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Company Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="form-input"
              defaultValue="Acme Corporation"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Industry
            </label>
            <select className="form-input">
              <option>Technology</option>
              <option>Fashion & Beauty</option>
              <option>Travel & Lifestyle</option>
              <option>Food & Beverage</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Company Size
            </label>
            <select className="form-input">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Website
            </label>
            <input
              type="url"
              className="form-input"
              defaultValue="https://acmecorp.com"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Billing Address
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Street Address
            </label>
            <input
              type="text"
              className="form-input"
              defaultValue="123 Business Ave"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                City
              </label>
              <input
                type="text"
                className="form-input"
                defaultValue="San Francisco"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                State
              </label>
              <input
                type="text"
                className="form-input"
                defaultValue="CA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                className="form-input"
                defaultValue="94103"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Payment Methods
        </h3>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-slate-800">
                    •••• •••• •••• 4242
                  </div>
                  <div className="text-sm text-gray-400">
                    Visa ending in 4242 • Expires 12/25
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Default</span>
                <button className="btn-secondary px-3 py-1 text-sm">Edit</button>
              </div>
            </div>
          </div>
          <button className="btn-secondary px-4 py-2 text-sm">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Email Notifications
        </h3>
        <div className="space-y-4">
          {[
            { label: "Campaign Updates", description: "Get notified when campaigns start, complete, or need attention", enabled: true },
            { label: "Payment Notifications", description: "Receive alerts about payments, invoices, and billing", enabled: true },
            { label: "New Messages", description: "Notifications for new messages from influencers or team members", enabled: true },
            { label: "Weekly Summary", description: "Weekly reports on campaign performance and earnings", enabled: false },
            { label: "Marketing Emails", description: "Product updates, tips, and promotional content", enabled: false },
          ].map((item, index) => (
            <div key={index} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-slate-800 mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-purple"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Push Notifications
        </h3>
        <div className="space-y-4">
          {[
            { label: "Browser Notifications", description: "Show notifications in your browser", enabled: true },
            { label: "Mobile Push", description: "Receive push notifications on your mobile device", enabled: false },
          ].map((item, index) => (
            <div key={index} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-slate-800 mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-purple"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Password & Authentication
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Current Password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="Confirm new password"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Two-Factor Authentication
        </h3>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-slate-800 mb-1">
                Authenticator App
              </div>
              <div className="text-sm text-gray-600">
                Use an authenticator app to generate verification codes
              </div>
            </div>
            <button className="btn-primary px-4 py-2 text-sm">
              Enable
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          {[
            { action: "Signed in from new device", location: "San Francisco, CA", time: "2 hours ago" },
            { action: "Changed password", location: "San Francisco, CA", time: "3 days ago" },
            { action: "Updated profile information", location: "San Francisco, CA", time: "1 week ago" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-slate-800">
                  {activity.action}
                </div>
                <div className="text-sm text-gray-400">
                  {activity.location} • {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "company":
        return <CompanySettings />;
      case "notifications":
        return <NotificationSettings />;
      case "security":
        return <SecuritySettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Settings
        </h1>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? "bg-brand-purple text-white"
                    : "text-gray-600 hover:text-slate-800 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="card">
            <div className="card-content">
              {renderTabContent()}
              
              {/* Save Button */}
              <div className="flex items-center justify-end pt-6 mt-6 border-t border-gray-200">
                <button className="btn-primary px-6 py-2 flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}