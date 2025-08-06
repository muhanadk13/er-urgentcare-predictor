'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { SymptomDetails } from '@/components/DetailedSymptomChip';

// Types
export interface AssessmentState {
  symptoms: string[];
  symptomDetails: Record<string, SymptomDetails>;
  severity: Record<string, number>;
  criticalFlags: Record<string, boolean>;
  recommendation: 'ER' | 'URGENT_CARE' | null;
  reasons: string[];
}

type AssessmentAction = 
  | { type: 'ADD_SYMPTOM'; payload: string }
  | { type: 'REMOVE_SYMPTOM'; payload: string }
  | { type: 'CLEAR_SYMPTOMS' }
  | { type: 'SET_SEVERITY'; payload: { symptom: string; value: number } }
  | { type: 'SET_CRITICAL_FLAG'; payload: { flag: string; value: boolean } }
  | { type: 'SET_RECOMMENDATION'; payload: { recommendation: 'ER' | 'URGENT_CARE'; reasons: string[] } }
  | { type: 'SET_SYMPTOM_DETAILS'; payload: { symptom: string; details: SymptomDetails } }
  | { type: 'RESET_ASSESSMENT' };

// Initial state
const initialState: AssessmentState = {
  symptoms: [],
  symptomDetails: {},
  severity: {},
  criticalFlags: {},
  recommendation: null,
  reasons: [],
};

// Reducer
function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'ADD_SYMPTOM':
      return {
        ...state,
        symptoms: [...state.symptoms, action.payload],
      };
    
    case 'REMOVE_SYMPTOM':
      return {
        ...state,
        symptoms: state.symptoms.filter(symptom => symptom !== action.payload),
        symptomDetails: Object.fromEntries(
          Object.entries(state.symptomDetails).filter(([key]) => key !== action.payload)
        ),
        severity: Object.fromEntries(
          Object.entries(state.severity).filter(([key]) => key !== action.payload)
        ),
      };
    
    case 'CLEAR_SYMPTOMS':
      return {
        ...state,
        symptoms: [],
        symptomDetails: {},
        severity: {},
      };
    
    case 'SET_SEVERITY':
      return {
        ...state,
        severity: {
          ...state.severity,
          [action.payload.symptom]: action.payload.value,
        },
      };
    
    case 'SET_CRITICAL_FLAG':
      return {
        ...state,
        criticalFlags: {
          ...state.criticalFlags,
          [action.payload.flag]: action.payload.value,
        },
      };
    
    case 'SET_SYMPTOM_DETAILS':
      return {
        ...state,
        symptomDetails: {
          ...state.symptomDetails,
          [action.payload.symptom]: action.payload.details,
        },
      };
    
    case 'SET_RECOMMENDATION':
      return {
        ...state,
        recommendation: action.payload.recommendation,
        reasons: action.payload.reasons,
      };
    
    case 'RESET_ASSESSMENT':
      return initialState;
    
    default:
      return state;
  }
}

// Context
const AssessmentContext = createContext<{
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
} | null>(null);

// Provider
export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
}

// Custom hook
export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}

// Helper functions
export const assessmentHelpers = {
  toggleSymptom: (dispatch: React.Dispatch<AssessmentAction>, symptom: string, isSelected: boolean) => {
    if (isSelected) {
      dispatch({ type: 'REMOVE_SYMPTOM', payload: symptom });
    } else {
      dispatch({ type: 'ADD_SYMPTOM', payload: symptom });
    }
  },
  
  setSymptomDetails: (dispatch: React.Dispatch<AssessmentAction>, symptom: string, details: SymptomDetails) => {
    dispatch({ type: 'SET_SYMPTOM_DETAILS', payload: { symptom, details } });
  },
  
  setSeverity: (dispatch: React.Dispatch<AssessmentAction>, symptom: string, value: number) => {
    dispatch({ type: 'SET_SEVERITY', payload: { symptom, value } });
  },
  
  setCriticalFlag: (dispatch: React.Dispatch<AssessmentAction>, flag: string, value: boolean) => {
    dispatch({ type: 'SET_CRITICAL_FLAG', payload: { flag, value } });
  },
  
  resetAssessment: (dispatch: React.Dispatch<AssessmentAction>) => {
    dispatch({ type: 'RESET_ASSESSMENT' });
  },
}; 