'use client';

import { useState } from 'react';

interface DetailedSymptomChipProps {
  symptom: string;
  isSelected: boolean;
  onToggle: (symptom: string) => void;
  onDetailsChange: (symptom: string, details: SymptomDetails) => void;
  details?: SymptomDetails;
}

export interface SymptomDetails {
  severity: 'mild' | 'moderate' | 'severe';
  locations: string[];
  cause: 'spontaneous' | 'trauma' | 'unknown';
  customLocation?: string;
}

const severityOptions = [
  { value: 'mild', label: 'Mild', color: 'bg-green-100 text-green-800 border-green-300' },
  { value: 'moderate', label: 'Moderate', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
  { value: 'severe', label: 'Severe', color: 'bg-red-100 text-red-800 border-red-300' },
];

const causeOptions = [
  { value: 'spontaneous', label: 'Came on by itself' },
  { value: 'trauma', label: 'Due to injury/trauma' },
  { value: 'unknown', label: 'Not sure' },
];

// Location options that make sense for different symptoms
const getLocationOptions = (symptom: string) => {
  const symptomLower = symptom.toLowerCase();
  
  if (symptomLower.includes('head') || symptomLower.includes('headache')) {
    return ['Front of head', 'Back of head', 'Side of head', 'All over head', 'Other'];
  }
  
  if (symptomLower.includes('chest') || symptomLower.includes('chest pain')) {
    return ['Left side', 'Right side', 'Center', 'All over chest', 'Other'];
  }
  
  if (symptomLower.includes('back')) {
    return ['Upper back', 'Lower back', 'Middle back', 'All over back', 'Other'];
  }
  
  if (symptomLower.includes('abdominal') || symptomLower.includes('stomach')) {
    return ['Upper abdomen', 'Lower abdomen', 'Left side', 'Right side', 'All over', 'Other'];
  }
  
  if (symptomLower.includes('arm') || symptomLower.includes('shoulder')) {
    return ['Left arm', 'Right arm', 'Both arms', 'Shoulder', 'Elbow', 'Wrist', 'Other'];
  }
  
  if (symptomLower.includes('leg') || symptomLower.includes('knee') || symptomLower.includes('foot')) {
    return ['Left leg', 'Right leg', 'Both legs', 'Knee', 'Ankle', 'Foot', 'Other'];
  }
  
  if (symptomLower.includes('eye')) {
    return ['Left eye', 'Right eye', 'Both eyes', 'Around eyes', 'Other'];
  }
  
  if (symptomLower.includes('ear') || symptomLower.includes('earache')) {
    return ['Left ear', 'Right ear', 'Both ears', 'Inside ear', 'Outside ear', 'Other'];
  }
  
  if (symptomLower.includes('throat') || symptomLower.includes('sore throat')) {
    return ['Throat', 'Back of throat', 'Side of throat', 'All over throat', 'Other'];
  }
  
  if (symptomLower.includes('neck')) {
    return ['Front of neck', 'Back of neck', 'Side of neck', 'All over neck', 'Other'];
  }
  
  // Default options for general symptoms
  return ['Head', 'Neck', 'Chest', 'Back', 'Abdomen', 'Arms', 'Legs', 'Face', 'Other'];
};

export default function DetailedSymptomChip({ 
  symptom, 
  isSelected, 
  onToggle, 
  onDetailsChange,
  details 
}: DetailedSymptomChipProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [currentDetails, setCurrentDetails] = useState<SymptomDetails>(
    details || {
      severity: 'moderate',
      locations: [],
      cause: 'unknown',
    }
  );

  const handleToggle = () => {
    if (!isSelected) {
      setShowDetails(true);
    }
    onToggle(symptom);
  };

  const handleSeverityChange = (severity: 'mild' | 'moderate' | 'severe') => {
    const newDetails = { ...currentDetails, severity };
    setCurrentDetails(newDetails);
    onDetailsChange(symptom, newDetails);
  };

  const handleCauseChange = (cause: 'spontaneous' | 'trauma' | 'unknown') => {
    const newDetails = { ...currentDetails, cause };
    setCurrentDetails(newDetails);
    onDetailsChange(symptom, newDetails);
  };

  const handleLocationChange = (location: string) => {
    const newLocations = currentDetails.locations.includes(location)
      ? currentDetails.locations.filter(loc => loc !== location)
      : [...currentDetails.locations, location];
    
    const newDetails = { 
      ...currentDetails, 
      locations: newLocations
    };
    setCurrentDetails(newDetails);
    onDetailsChange(symptom, newDetails);
  };

  const handleCustomLocationChange = (customLocation: string) => {
    const newDetails = { ...currentDetails, customLocation };
    setCurrentDetails(newDetails);
    onDetailsChange(symptom, newDetails);
  };

  return (
    <div className="space-y-3">
      {/* Main Symptom Button */}
      <button
        onClick={handleToggle}
        className={`
          w-full px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 border-2
          ${isSelected
            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
            : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
          }
        `}
      >
        <div className="flex items-center justify-between">
          <span>{symptom}</span>
          {isSelected && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </button>

      {/* Detailed Options */}
      {isSelected && showDetails && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4 dropdown-enter">
          {/* Severity Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How severe is the {symptom.toLowerCase()}?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {severityOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSeverityChange(option.value as 'mild' | 'moderate' | 'severe')}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${currentDetails.severity === option.value
                      ? `${option.color} border-2 border-current`
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Where is the {symptom.toLowerCase()} located?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {getLocationOptions(symptom).map((location: string) => (
                <button
                  key={location}
                  onClick={() => handleLocationChange(location)}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${currentDetails.locations.includes(location)
                      ? 'bg-blue-600 text-white border-2 border-blue-600'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  {location}
                </button>
              ))}
            </div>
            {currentDetails.locations.includes('Other') && (
              <input
                type="text"
                placeholder="Describe the location..."
                value={currentDetails.customLocation || ''}
                onChange={(e) => handleCustomLocationChange(e.target.value)}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
          </div>

          {/* Cause Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How did the {symptom.toLowerCase()} start?
            </label>
            <div className="space-y-2">
              {causeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleCauseChange(option.value as 'spontaneous' | 'trauma' | 'unknown')}
                  className={`
                    w-full px-3 py-2 rounded-md text-sm font-medium text-left transition-all duration-200
                    ${currentDetails.cause === option.value
                      ? 'bg-blue-600 text-white border-2 border-blue-600'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 