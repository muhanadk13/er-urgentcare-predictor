'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessment, assessmentHelpers } from '@/context/AssessmentContext';
import DetailedSymptomChip, { SymptomDetails } from '@/components/DetailedSymptomChip';

const availableSymptoms = [
  'Chest Pain',
  'High Fever',
  'Head Injury',
  'Broken Bone',
  'Dizziness',
  'Abdominal Pain',
  'Breathing Difficulty',
  'Minor Cuts',
  'Rash',
  'Severe Headache',
  'Vomiting',
  'Allergic Reaction',
  'Eye Injury',
  'Severe Back Pain',
  'Joint Pain',
  'Nausea',
  'Dehydration',
  'Minor Burn',
  'Earache',
  'Sore Throat',
];

export default function SymptomSelection() {
  const router = useRouter();
  const { state, dispatch } = useAssessment();
  const [isLoading, setIsLoading] = useState(false);

  const handleSymptomToggle = (symptom: string) => {
    const isSelected = state.symptoms.includes(symptom);
    assessmentHelpers.toggleSymptom(dispatch, symptom, isSelected);
  };

  const handleSymptomDetailsChange = (symptom: string, details: SymptomDetails) => {
    assessmentHelpers.setSymptomDetails(dispatch, symptom, details);
  };

  const handleNext = async () => {
    if (state.symptoms.length === 0) return;
    
    setIsLoading(true);
    // Small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    router.push('/check/critical');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Indicator */}
          <div className="text-center mb-8">
            <span className="text-sm text-gray-500 font-medium">Step 1 of 2</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-urgency-blue h-2 rounded-full w-1/2 transition-all duration-300"></div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              What symptoms are you experiencing?
            </h1>
            <p className="text-gray-600">
              Select all that apply. You can choose multiple symptoms.
            </p>
          </div>

          {/* Symptom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {availableSymptoms.map((symptom) => (
              <DetailedSymptomChip
                key={symptom}
                symptom={symptom}
                isSelected={state.symptoms.includes(symptom)}
                onToggle={handleSymptomToggle}
                onDetailsChange={handleSymptomDetailsChange}
                details={state.symptomDetails[symptom]}
              />
            ))}
          </div>

          {/* Selected Count */}
          {state.symptoms.length > 0 && (
            <div className="text-center mb-6">
              <span className="text-sm text-gray-600">
                {state.symptoms.length} symptom{state.symptoms.length !== 1 ? 's' : ''} selected
              </span>
            </div>
          )}

          {/* Next Button */}
          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={state.symptoms.length === 0 || isLoading}
              className={`
                w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200
                ${state.symptoms.length > 0 && !isLoading
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