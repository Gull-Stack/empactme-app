import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="w-full max-w-md">
          <div className="bg-surface border border-border rounded-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-400">Sign in to your EmpactMe account</p>
            </div>

            <form className="space-y-6">
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

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-accent hover:text-accent/80">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Sign In
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-surface text-gray-400">Or</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full border border-border text-white py-3 rounded-lg font-semibold hover:bg-surface-2 transition-colors"
              >
                Sign in with Magic Link
              </button>
            </form>

            <div className="mt-8 text-center">
              <span className="text-gray-400">Don&apos;t have an account? </span>
              <Link href="/signup" className="text-accent hover:text-accent/80 font-semibold">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}