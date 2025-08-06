export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-urgency-dark mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about Urgency? Want to provide feedback or report an issue? 
                  We'd love to hear from you. Feel free to reach out using the contact information below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Muhanad Khleifat</h3>
                    <p className="text-gray-600">Developer</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:414-243-0868" className="text-blue-600 hover:text-blue-800 transition-colors">
                      414-243-0868
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:muhanadkhleifat@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    muhanadkhleifat@gmail.com                    </a>
                  </div>
                </div>
              </div>


            </div>

            {/* Photo Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <img 
                  src="/images/muhanad.jpeg" 
                  alt="Muhanad Khleifat" 
                  className="w-64 h-64 rounded-full object-cover shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Muhanad Khleifat</h3>
                <p className="text-gray-600 mb-4">Lead Developer</p>
                <p className="text-sm text-gray-500 max-w-xs">
                  Passionate about creating tools that help people make informed decisions about their health. 
                  Urgency was built with the goal of providing quick, reliable guidance when you need it most.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 mb-4">
                <strong>Coming Soon:</strong> We're working on adding a contact form for your convenience.
              </p>
              <p className="text-blue-700 text-sm">
                For now, please use the phone number or email address above to get in touch. 
                We appreciate your patience as we continue to improve Urgency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 