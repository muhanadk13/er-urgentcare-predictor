export interface PredictionRequest {
  symptoms: string[];
  severity: Record<string, number>;
  criticalFlags: Record<string, boolean>;
}

export interface PredictionResponse {
  recommendation: 'ER' | 'URGENT_CARE';
  reasons: string[];
  confidence: number;
}

// Critical symptoms that typically require ER
const ER_SYMPTOMS = [
  'Chest Pain',
  'Breathing Difficulty', 
  'Head Injury',
  'Severe Headache',
  'Loss of consciousness',
  'Seizures',
  'Severe burns',
  'Poisoning or overdose'
];

// Symptoms that can typically be handled by Urgent Care
const URGENT_CARE_SYMPTOMS = [
  'Minor Cuts',
  'Rash',
  'Earache',
  'Sore Throat',
  'Minor Burn',
  'Joint Pain',
  'Nausea',
  'Dehydration'
];

export async function predictCare(data: PredictionRequest): Promise<PredictionResponse> {
  const { symptoms, severity, criticalFlags } = data;
  
  let score = 0; // Higher score = more likely ER
  const reasons: string[] = [];
  
  // Check critical flags (highest priority)
  const hasCriticalFlags = Object.values(criticalFlags).some(value => value);
  if (hasCriticalFlags) {
    score += 100;
    reasons.push('You answered yes to critical emergency questions');
  }
  
  // Check for ER symptoms
  const hasERSymptoms = symptoms.some(symptom => ER_SYMPTOMS.includes(symptom));
  if (hasERSymptoms) {
    score += 50;
    reasons.push('Your symptoms may indicate a serious condition requiring emergency care');
  }
  
  // Check severity ratings
  const highSeveritySymptoms = Object.entries(severity).filter(([_, rating]) => rating >= 8);
  if (highSeveritySymptoms.length > 0) {
    score += 30 * highSeveritySymptoms.length;
    reasons.push(`You rated ${highSeveritySymptoms.length} symptom${highSeveritySymptoms.length > 1 ? 's' : ''} as severe (8+ out of 10)`);
  }
  
  // Check for moderate severity with multiple symptoms
  const moderateSeveritySymptoms = Object.entries(severity).filter(([_, rating]) => rating >= 6);
  if (moderateSeveritySymptoms.length >= 3) {
    score += 20;
    reasons.push('Multiple symptoms with moderate to high severity');
  }
  
  // Age and symptom combination factors (simplified)
  if (symptoms.includes('Chest Pain') && symptoms.includes('Breathing Difficulty')) {
    score += 40;
    reasons.push('Combination of chest pain and breathing difficulty requires immediate evaluation');
  }
  
  if (symptoms.includes('High Fever') && symptoms.includes('Severe Headache')) {
    score += 30;
    reasons.push('High fever with severe headache may indicate serious infection');
  }
  
  // Check for clearly urgent care symptoms
  const hasOnlyUrgentCareSymptoms = symptoms.every(symptom => URGENT_CARE_SYMPTOMS.includes(symptom));
  if (hasOnlyUrgentCareSymptoms && score < 30) {
    score -= 20;
    reasons.push('Your symptoms appear suitable for urgent care treatment');
  }
  
  // Make recommendation based on score
  let recommendation: 'ER' | 'URGENT_CARE';
  let confidence: number;
  
  if (score >= 50) {
    recommendation = 'ER';
    confidence = Math.min(0.9, 0.5 + (score / 200));
    
    if (reasons.length === 0) {
      reasons.push('Based on your symptoms and severity, emergency care is recommended');
    }
  } else {
    recommendation = 'URGENT_CARE';
    confidence = Math.min(0.9, 0.6 + ((50 - score) / 100));
    
    if (reasons.length === 0) {
      reasons.push('Your symptoms appear suitable for urgent care treatment');
      reasons.push('Urgent care can handle non-life-threatening conditions efficiently');
    }
  }
  
  // Additional safety checks
  if (recommendation === 'URGENT_CARE') {
    // Double-check for any high-risk combinations
    if (symptoms.includes('Chest Pain') || 
        symptoms.includes('Breathing Difficulty') ||
        symptoms.includes('Head Injury') ||
        Object.values(severity).some(rating => rating >= 9)) {
      recommendation = 'ER';
      reasons.unshift('Safety check: High-risk symptoms detected');
      confidence = 0.8;
    }
  }
  
  return {
    recommendation,
    reasons,
    confidence
  };
}

// Simulated API endpoint (for frontend usage)
export async function callPredictionAPI(data: PredictionRequest): Promise<PredictionResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return predictCare(data);
} 