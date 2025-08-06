'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessment, assessmentHelpers } from '@/context/AssessmentContext';
import CriticalToggle from '@/components/CriticalToggle';

const criticalQuestions = [
  'Heavy bleeding?',
  'Trouble breathing?',
  'Loss of consciousness?',
  'Signs of heart attack or stroke?',
  'Severe allergic reaction?',
  'Severe burns?',
  'Poisoning or overdose?',
  'Seizures?',
];

export default function CriticalFlags() {
  const router = useRouter();
  const { state, dispatch } = useAssessment();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize critical flags
  useEffect(() => {
    criticalQuestions.forEach(question => {
      if (!(question in state.criticalFlags)) {
        assessmentHelpers.setCriticalFlag(dispatch, question, false);
      }
    });
  }, [state.criticalFlags, dispatch]);

  // Redirect if no symptoms selected
  useEffect(() => {
    if (state.symptoms.length === 0) {
      router.push('/check');
    }
  }, [state.symptoms, router]);

  const handleCriticalFlagChange = (question: string, value: boolean) => {
    assessmentHelpers.setCriticalFlag(dispatch, question, value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
      // Use the prediction API
      const { callPredictionAPI } = await import('@/api/predictCare');
      
      const result = await callPredictionAPI({
        symptoms: state.symptoms,
        symptomDetails: state.symptomDetails,
        severity: state.severity,
        criticalFlags: state.criticalFlags
      });

      dispatch({
        type: 'SET_RECOMMENDATION',
        payload: { 
          recommendation: result.recommendation, 
          reasons: result.reasons 
        }
      });

      router.push('/result');
    } catch (error) {
      console.error('Prediction error:', error);
      // Fallback to simple logic if API fails
      const hasCriticalFlags = Object.values(state.criticalFlags).some(value => value);
      const recommendation = hasCriticalFlags ? 'ER' : 'URGENT_CARE';
      const reasons = hasCriticalFlags 
        ? ['You answered yes to critical emergency questions']
        : ['Your symptoms appear suitable for urgent care treatment'];
      
      dispatch({
        type: 'SET_RECOMMENDATION',
        payload: { recommendation, reasons }
      });
      
      router.push('/result');
    } finally {
      setIsLoading(false);
    }
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
            <span className="text-sm text-gray-500 font-medium">Step 2 of 2</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-urgency-blue h-2 rounded-full w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Are you experiencing any of these?
            </h1>
            <p className="text-gray-600">
              These are critical signs that may require immediate emergency care
            </p>
          </div>

          {/* Critical Questions */}
          <div className="space-y-4 mb-8">
            {criticalQuestions.map((question) => (
              <CriticalToggle
                key={question}
                question={question}
                value={state.criticalFlags[question] || false}
                onChange={handleCriticalFlagChange}
              />
            ))}
          </div>

          {/* Warning for critical flags */}
          {Object.values(state.criticalFlags).some(value => value) && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">⚠️</span>
                <div>
                  <p className="text-red-700 font-medium">
                    Based on your answers, you may need emergency care.
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    Consider calling 911 or going to the ER immediately if symptoms are severe.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
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
                  Analyzing...
                </span>
              ) : (
                'Get Recommendation'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 