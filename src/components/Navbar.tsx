import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-purple">
                EmpactMe
              </span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#opportunities"
                className="text-gray-600 hover:text-slate-800 font-medium transition-colors"
              >
                Opportunities
              </Link>
              <Link
                href="/roadmap"
                className="text-gray-600 hover:text-slate-800 font-medium transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-slate-800 font-medium transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="btn-secondary px-4 py-2">
              Login
            </Link>
            <Link href="/signup" className="btn-primary px-4 py-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
