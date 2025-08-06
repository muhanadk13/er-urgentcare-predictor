import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="text-gray-600 hover:text-urgency-blue">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-urgency-blue">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-gray-600 hover:text-urgency-blue">
              Disclaimer
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-urgency-blue">
              Contact
            </Link>
          </div>
          
          {/* Disclaimer */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            This tool is informational only.
          </div>
        </div>
      </div>
    </footer>
  );
} 