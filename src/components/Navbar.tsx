import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-serif font-bold text-accent">
              EmpactMe
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/roadmap" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Roadmap
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup"
              className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/80 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}