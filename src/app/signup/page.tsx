import Link from "next/link";
import { Building2, Users } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold text-brand-purple">EmpactMe</span>
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-slate-800">
            Join EmpactMe
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Choose your account type to get started
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-brand-purple hover:text-brand-purple-dark">
              Sign in
            </Link>
          </p>
        </div>

        {/* Account Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Company Card */}
          <div className="card cursor-pointer hover:shadow-lg transition-shadow">
            <div className="card-content text-center">
              <div className="w-16 h-16 bg-brand-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                I'm a Company
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with influencers and manage campaigns to grow your brand's reach and impact.
              </p>
              <ul className="text-sm text-gray-600 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Campaign management dashboard
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Influencer discovery and matching
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Real-time analytics and reporting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Contract and payment management
                </li>
              </ul>
              <button className="btn-primary w-full py-3">
                Sign up as Company
              </button>
            </div>
          </div>

          {/* Influencer Card */}
          <div className="card cursor-pointer hover:shadow-lg transition-shadow">
            <div className="card-content text-center">
              <div className="w-16 h-16 bg-brand-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                I'm an Influencer
              </h3>
              <p className="text-gray-600 mb-6">
                Monetize your influence and connect with brands that align with your content and values.
              </p>
              <ul className="text-sm text-gray-600 text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Profile showcase and portfolio
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Brand partnership opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Performance tracking and insights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-purple rounded-full"></div>
                  Secure payments and contracts
                </li>
              </ul>
              <button className="btn-primary w-full py-3">
                Sign up as Influencer
              </button>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <div className="card-content">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Create your account
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-800 mb-2">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-800 mb-2">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

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
                  <label htmlFor="company" className="block text-sm font-medium text-slate-800 mb-2">
                    Company name (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="Enter your company name"
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
                    autoComplete="new-password"
                    required
                    className="form-input"
                    placeholder="Create a strong password"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-brand-purple focus:ring-brand-purple border-gray-200 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="font-medium text-brand-purple hover:text-brand-purple-dark">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-brand-purple hover:text-brand-purple-dark">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3"
                >
                  Create account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}