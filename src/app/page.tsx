import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-urgency-dark leading-tight">
                Unsure if it's{' '}
                <span className="text-urgency-blue">Urgent Care</span>{' '}
                or{' '}
                <span className="text-urgency-red">ER</span>?
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Urgency guides you in under a minute.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/check"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Symptom Check
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Features */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-urgency-green rounded-full"></div>
                <span className="text-gray-600">Quick 3-step assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-urgency-green rounded-full"></div>
                <span className="text-gray-600">Instant recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-urgency-green rounded-full"></div>
                <span className="text-gray-600">Find nearby facilities</span>
              </div>
            </div>
          </div>
          
          {/* Large Beating Heart Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-[375px] lg:h-[375px] flex items-center justify-center">
                                <div className="relative">
                  {/* Heart Image */}
                  <img 
                    src="/images/heart.png" 
                    alt="Heart" 
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
