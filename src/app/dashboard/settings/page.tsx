import { Camera, Bell, Shield, CreditCard, Globe, User } from "lucide-react";

export default function SettingsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account preferences and settings</p>
      </div>

      <div className="space-y-8">
        {/* Profile Section */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <User className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-serif font-semibold">Profile Information</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Passionate content creator and brand strategist with 5+ years of experience in digital marketing."
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Profile Picture
              </label>
              <div className="bg-surface-2 border border-border rounded-lg p-6 text-center">
                <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-accent" />
                </div>
                <button className="flex items-center space-x-2 bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors mx-auto">
                  <Camera className="w-4 h-4" />
                  <span>Upload Photo</span>
                </button>
                <p className="text-sm text-gray-400 mt-2">
                  JPG, PNG up to 5MB
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 pt-6 border-t border-border">
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Save Changes
            </button>
            <button className="border border-border text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-surface-2 transition-colors">
              Cancel
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Bell className="w-6 h-6 text-cyan" />
            <h2 className="text-xl font-serif font-semibold">Notification Preferences</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Campaign Updates</h3>
                <p className="text-sm text-gray-400">Get notified about campaign status changes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Payment Notifications</h3>
                <p className="text-sm text-gray-400">Receive alerts for payments and payouts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">New Opportunities</h3>
                <p className="text-sm text-gray-400">Get notified about new partnership opportunities</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Marketing Emails</h3>
                <p className="text-sm text-gray-400">Receive platform updates and marketing materials</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Billing Settings */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <CreditCard className="w-6 h-6 text-green" />
            <h2 className="text-xl font-serif font-semibold">Billing Information</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Payment Methods</h3>
              <div className="bg-surface-2 border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-2 rounded">
                      <CreditCard className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Wells Fargo ****1234</p>
                      <p className="text-sm text-gray-400">Expires 12/25</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green/10 text-green border border-green/20 rounded-full text-xs">
                    Primary
                  </span>
                </div>
              </div>
              <button className="mt-4 text-accent hover:text-accent/80 font-medium">
                + Add New Payment Method
              </button>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Billing Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Shield className="w-6 h-6 text-red-400" />
            <h2 className="text-xl font-serif font-semibold">Security</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Password</h3>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
              </div>
              <button className="mt-4 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Update Password
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
              </div>
              <button className="bg-cyan text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan/90 transition-colors">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6">
          <h2 className="text-xl font-serif font-semibold text-red-400 mb-6">Danger Zone</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Deactivate Account</h3>
                <p className="text-sm text-gray-400">Temporarily disable your account</p>
              </div>
              <button className="border border-red-400 text-red-400 px-4 py-2 rounded-lg font-medium hover:bg-red-400/10 transition-colors">
                Deactivate
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Delete Account</h3>
                <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}