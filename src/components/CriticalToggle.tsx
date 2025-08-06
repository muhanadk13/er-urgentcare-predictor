interface CriticalToggleProps {
  question: string;
  value: boolean;
  onChange: (question: string, value: boolean) => void;
}

export default function CriticalToggle({ question, value, onChange }: CriticalToggleProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-gray-800">{question}</span>
        
        <div className="flex space-x-2">
          <button
            onClick={() => onChange(question, false)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-w-[60px]
              ${!value 
                ? 'bg-green-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
              }
            `}
          >
            No
          </button>
          
          <button
            onClick={() => onChange(question, true)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-w-[60px] flex items-center space-x-1
              ${value 
                ? 'bg-red-600 text-white shadow-md' 
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
              }
            `}
          >
            {value && <span>⚠️</span>}
            <span>Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
} 