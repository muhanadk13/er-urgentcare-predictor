export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-urgency-dark mb-4">
              About Urgency
            </h1>
            <p className="text-xl text-gray-600">
              Know where to go - instantly.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Mission */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Urgency is a free tool designed to help people quickly assess where they should seek medical care. 
                In moments of uncertainty, when you're not sure if your symptoms require an Emergency Room visit or 
                if Urgent Care would be sufficient, Urgency provides clear, actionable guidance in under a minute.
              </p>
            </section>

            {/* How it Works */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-urgency-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Select Symptoms</h3>
                  <p className="text-gray-600 text-sm">
                    Choose from a comprehensive list of symptoms you're experiencing
                  </p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-urgency-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Rate Severity</h3>
                  <p className="text-gray-600 text-sm">
                    Indicate how severe each symptom feels on a scale of 1-10
                  </p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-urgency-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Answer Critical Questions</h3>
                  <p className="text-gray-600 text-sm">
                    Respond to key questions about emergency warning signs
                  </p>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-urgency-green rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Quick Assessment</h3>
                    <p className="text-gray-600 text-sm">Complete evaluation in under a minute</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-urgency-green rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Clear Recommendations</h3>
                    <p className="text-gray-600 text-sm">Get specific guidance on whether to visit ER or Urgent Care</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-urgency-green rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Location Finding</h3>
                    <p className="text-gray-600 text-sm">Find nearby Emergency Rooms or Urgent Care facilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-urgency-green rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Mobile Optimized</h3>
                    <p className="text-gray-600 text-sm">Works perfectly on all devices, especially mobile</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">⚠️</span>
                  <div>
                    <p className="text-gray-700 mb-3">
                      <strong>Urgency is an informational tool only</strong> and should not replace professional medical advice, 
                      diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions 
                      you may have regarding a medical condition.
                    </p>
                    <p className="text-gray-700">
                      In case of a life-threatening emergency, call 911 immediately. Do not use this tool to delay 
                      emergency medical care.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                Have feedback or questions about Urgency? We'd love to hear from you.
              </p>
              <a
                href="mailto:support@urgency.health"
                className="inline-flex items-center px-6 py-3 bg-urgency-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 