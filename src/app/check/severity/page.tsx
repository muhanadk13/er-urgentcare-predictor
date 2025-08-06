'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessment, assessmentHelpers } from '@/context/AssessmentContext';
import SeveritySlider from '@/components/SeveritySlider';

export default function SeverityRating() {
  const router = useRouter();
  const { state, dispatch } = useAssessment();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize severity values for all selected symptoms
  useEffect(() => {
    state.symptoms.forEach(symptom => {
      if (!(symptom in state.severity)) {
        assessmentHelpers.setSeverity(dispatch, symptom, 5);
      }
    });
  }, [state.symptoms, state.severity, dispatch]);

  // Redirect if no symptoms selected
  useEffect(() => {
    if (state.symptoms.length === 0) {
      router.push('/check');
    }
  }, [state.symptoms, router]);

  const handleSeverityChange = (symptom: string, value: number) => {
    assessmentHelpers.setSeverity(dispatch, symptom, value);
  };

  const handleNext = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    router.push('/check/critical');
  };

  const handleSkip = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    router.push('/check/critical');
  };

  if (state.symptoms.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Indicator */}
          <div className="text-center mb-8">
            <span className="text-sm text-gray-500 font-medium">Step 2 of 3</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-urgency-blue h-2 rounded-full w-2/3 transition-all duration-300"></div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              How severe are these symptoms?
            </h1>
            <p className="text-gray-600">
              Rate each symptom from 1 (mild) to 10 (severe)
            </p>
          </div>

          {/* Severity Sliders */}
          <div className="space-y-6 mb-8">
            {state.symptoms.map((symptom) => (
              <SeveritySlider
                key={symptom}
                symptom={symptom}
                value={state.severity[symptom] || 5}
                onChange={handleSeverityChange}
              />
            ))}
          </div>

          {/* Skip Option */}
          <div className="text-center mb-6">
            <button
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700 text-sm underline"
            >
              Skip Severity Ratings
            </button>
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={isLoading}
              className={`
                w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200
                ${!isLoading
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                'Next'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 