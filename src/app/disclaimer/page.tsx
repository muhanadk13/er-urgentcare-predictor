export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-urgency-dark mb-8">Medical Disclaimer</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <span className="text-red-500 text-2xl mr-3 mt-1">⚠️</span>
                <div>
                  <h2 className="text-xl font-semibold text-red-800 mb-2">Important Notice</h2>
                  <p className="text-red-700">
                    Urgency is an informational tool only and should not replace professional medical advice, diagnosis, or treatment. 
                    In case of a life-threatening emergency, call 911 immediately.
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. No Medical Advice</h2>
              <p>
                The information provided by Urgency is for general informational purposes only. The symptom assessment tool is designed to help users understand when they might need medical attention, but it is not a substitute for professional medical evaluation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Emergency Situations</h2>
              <p>
                If you are experiencing a medical emergency, call 911 immediately. Do not rely on this tool to determine if you should seek emergency care. Trust your instincts and seek immediate medical attention if you believe you are in danger.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Accuracy of Information</h2>
              <p>
                While we strive to provide accurate and up-to-date information, medical knowledge is constantly evolving. The recommendations provided by this tool are based on general guidelines and may not apply to your specific situation. Always consult with qualified healthcare professionals for personalized medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Individual Variations</h2>
              <p>
                Every individual is different, and symptoms can vary significantly between people. What may be a minor issue for one person could be serious for another. Factors such as age, medical history, medications, and underlying conditions can all affect how symptoms should be interpreted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitations of the Tool</h2>
              <p>
                This tool has limitations and cannot account for all possible medical scenarios. It is designed to provide general guidance only and should not be used to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Diagnose medical conditions</li>
                <li>Determine treatment plans</li>
                <li>Replace professional medical consultation</li>
                <li>Delay seeking appropriate medical care</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. When to Seek Medical Care</h2>
              <p>
                Always seek medical attention if you experience:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Chest pain or pressure</li>
                <li>Difficulty breathing</li>
                <li>Severe bleeding</li>
                <li>Loss of consciousness</li>
                <li>Signs of stroke (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 911)</li>
                <li>Severe allergic reactions</li>
                <li>Any symptoms that concern you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Healthcare Provider Consultation</h2>
              <p>
                Always consult with your healthcare provider for:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Personalized medical advice</li>
                <li>Diagnosis of medical conditions</li>
                <li>Treatment recommendations</li>
                <li>Management of chronic conditions</li>
                <li>Medication questions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p>
                By using this tool, you acknowledge that Urgency, its creators, and contributors are not responsible for any decisions you make based on the information provided. You agree to use this tool responsibly and to seek professional medical care when appropriate.
              </p>
            </section>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Remember</h3>
              <p className="text-blue-700">
                When in doubt, it's always better to seek medical attention than to delay care. Your health and safety are the most important considerations.
              </p>
            </div>

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