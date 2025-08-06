interface SeveritySliderProps {
  symptom: string;
  value: number;
  onChange: (symptom: string, value: number) => void;
}

export default function SeveritySlider({ symptom, value, onChange }: SeveritySliderProps) {
  return (
          <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium text-gray-800">{symptom}</label>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            {value}
          </div>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min="1"
            max="10"
            value={value}
            onChange={(e) => onChange(symptom, parseInt(e.target.value))}
            className="w-full h-4 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, 
                #007BFF 0%, 
                #007BFF ${(value - 1) * 10}%, 
                #e5e7eb ${(value - 1) * 10}%, 
                #e5e7eb 100%)`
            }}
          />
          
          {/* Scale labels */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className="font-medium">1 - Mild</span>
            <span className="font-medium">5 - Moderate</span>
            <span className="font-medium">10 - Severe</span>
          </div>
        </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #007BFF;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #007BFF;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
} 