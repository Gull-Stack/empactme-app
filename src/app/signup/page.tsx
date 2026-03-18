"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Building2, Users, Mail, Lock, User } from "lucide-react";

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<"company" | "influencer" | null>(null);

  const roles = [
    {
      id: "company" as const,
      title: "Company",
      description: "Looking to partner with influencers and drive campaign results",
      icon: <Building2 className="w-8 h-8" />,
      benefits: ["Access to verified influencers", "Campaign management tools", "Real-time analytics", "Automated payments"]
    },
    {
      id: "influencer" as const,
      title: "Influencer",
      description: "Ready to monetize your audience and work with top brands",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Exclusive brand partnerships", "Flexible scheduling", "Transparent pricing", "Fast payments"]
    }
  ];

  if (!selectedRole) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold mb-4">Join EmpactMe</h1>
              <p className="text-xl text-gray-400">Choose how you want to get started</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className="bg-surface border border-border rounded-xl p-8 text-left hover:border-accent/50 transition-all duration-300 group"
                >
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                    {role.icon}
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold mb-3">{role.title}</h2>
                  <p className="text-gray-400 mb-6">{role.description}</p>
                  
                  <div className="space-y-2">
                    {role.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-accent font-semibold">
                    Get Started →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="w-full max-w-md">
          <div className="bg-surface border border-border rounded-xl p-8">
            <div className="text-center mb-8">
              <button 
                onClick={() => setSelectedRole(null)}
                className="text-accent hover:text-accent/80 text-sm mb-4"
              >
                ← Back to role selection
              </button>
              <h1 className="text-3xl font-serif font-bold mb-2">
                Create {selectedRole === "company" ? "Company" : "Influencer"} Account
              </h1>
              <p className="text-gray-400">Join the EmpactMe community</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {selectedRole === "company" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-400">
                    I agree to the{" "}
                    <Link href="/terms" className="text-accent hover:text-accent/80">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-accent hover:text-accent/80">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Create Account
              </button>
            </form>

            <div className="mt-8 text-center">
              <span className="text-gray-400">Already have an account? </span>
              <Link href="/login" className="text-accent hover:text-accent/80 font-semibold">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}