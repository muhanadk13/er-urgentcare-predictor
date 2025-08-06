'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAssessment, assessmentHelpers } from '@/context/AssessmentContext';
import ResultCard from '@/components/ResultCard';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';

export default function ResultPage() {
  const router = useRouter();
  const { state, dispatch } = useAssessment();

  // Redirect if no recommendation
  useEffect(() => {
    if (!state.recommendation) {
      router.push('/check');
    }
  }, [state.recommendation, router]);

  if (!state.recommendation) {
    return <div>Loading...</div>;
  }

  const isER = state.recommendation === 'ER';
  const mapQuery = isER ? 'Emergency Room near me' : 'Urgent Care near me';

  const handleRetakeAssessment = () => {
    assessmentHelpers.resetAssessment(dispatch);
    router.push('/check');
  };

  const shareResult = () => {
    const text = `I used Urgency to assess my symptoms. Recommendation: ${
      isER ? 'Emergency Room' : 'Urgent Care'
    }. Check it out: ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Urgency Assessment Result',
        text: text,
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Result Card */}
          <ResultCard
            recommendation={state.recommendation}
            reasons={state.reasons}
          />

          {/* Map Integration */}
          <GoogleMapEmbed searchQuery={mapQuery} />

          {/* Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetakeAssessment}
                className="flex-1 sm:flex-none px-6 py-3 bg-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Retake Assessment
              </button>
              
              <button
                onClick={shareResult}
                className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Share Result
              </button>
            </div>

            {/* Emergency Notice */}
            {isER && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3 mt-1">🚨</span>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">
                      Emergency Notice
                    </h3>
                    <p className="text-red-700 text-sm mb-3">
                      If your condition is worsening or you feel this is a life-threatening emergency, 
                      call 911 immediately. Don't wait.
                    </p>
                    <a
                      href="tel:911"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      📞 Call 911 Now
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Assessment Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Assessment Summary</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Symptoms Selected:</h4>
                <div className="flex flex-wrap gap-2">
                  {state.symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
              
              {Object.keys(state.severity).length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Severity Ratings:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(state.severity).map(([symptom, rating]) => (
                      <div key={symptom} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded">
                        <span className="text-sm text-gray-600">{symptom}</span>
                        <span className="font-medium text-gray-800">{rating}/10</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Critical Flags:</h4>
                <div className="text-sm text-gray-600">
                  {Object.values(state.criticalFlags).some(value => value) 
                    ? 'Some critical symptoms were identified'
                    : 'No critical symptoms identified'
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">
              <strong>Important:</strong> This tool provides general guidance only and is not a substitute for professional medical advice. 
              Always consult with healthcare providers for accurate diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 