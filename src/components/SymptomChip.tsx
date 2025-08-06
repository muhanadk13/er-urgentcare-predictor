interface SymptomChipProps {
  symptom: string;
  isSelected: boolean;
  onToggle: (symptom: string) => void;
}

export default function SymptomChip({ symptom, isSelected, onToggle }: SymptomChipProps) {
  return (
    <button
      onClick={() => onToggle(symptom)}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2
        ${isSelected 
          ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
          : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-white hover:border-blue-600 hover:text-blue-600'
        }
      `}
    >
      {symptom}
    </button>
  );
} 