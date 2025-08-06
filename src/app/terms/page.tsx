export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-urgency-dark mb-8">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Urgency ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Medical Disclaimer</h2>
              <p>
                Urgency is an informational tool only and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with questions you may have regarding medical conditions.
              </p>
              <p className="mt-3">
                In case of a life-threatening emergency, call 911 immediately. Do not use this tool to delay emergency medical care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Service</h2>
              <p>
                You may use the Service for personal, non-commercial purposes only. You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. No Medical Advice</h2>
              <p>
                The information provided by Urgency is for general informational purposes only. The Service does not provide medical advice, and the recommendations are based on general guidelines that may not apply to your specific situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Urgency, its creators, or contributors be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Use on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at the information provided on our Contact page.
              </p>
            </section>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 