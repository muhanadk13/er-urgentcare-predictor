import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Urgency Logo" 
              className="h-40 w-auto mt-2"
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-urgency-blue transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 