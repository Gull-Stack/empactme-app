import Link from "next/link";
import { Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold text-brand-purple">EmpactMe</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-slate-800">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-brand-purple hover:text-brand-purple-dark">
              Sign up
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <div className="card">
          <div className="card-content">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-800 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-brand-purple focus:ring-brand-purple border-gray-200 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-brand-purple hover:text-brand-purple-dark">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3"
              >
                Sign in
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-400">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                className="btn-secondary w-full py-3 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Magic link
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400">
          By signing in, you agree to our{" "}
          <a href="#" className="font-medium text-brand-purple hover:text-brand-purple-dark">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-brand-purple hover:text-brand-purple-dark">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}