export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-urgency-dark mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p>
                Urgency is designed with privacy in mind. We do not collect, store, or transmit any personal information about you or your health data. All symptom assessments are processed locally in your browser and are not saved to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Information</h2>
              <p>
                Since we do not collect personal information, there is no personal data to use. The symptom assessment tool operates entirely within your browser to provide immediate recommendations without storing any data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p>
                We do not share any personal information because we do not collect any. Your privacy is protected by design - no data leaves your device during the assessment process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p>
                While we don't collect personal data, we implement appropriate security measures to protect our website and ensure a safe user experience. Our service uses HTTPS encryption for all communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies and Tracking</h2>
              <p>
                We may use essential cookies to improve website functionality, but we do not use tracking cookies or analytics that collect personal information. You can disable cookies in your browser settings if preferred.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Services</h2>
              <p>
                Our website may link to external services like Google Maps for location-based features. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
              <p>
                Urgency is not intended for use by children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us using the information provided on our Contact page.
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