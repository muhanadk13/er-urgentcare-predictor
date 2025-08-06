interface ResultCardProps {
  recommendation: 'ER' | 'URGENT_CARE';
  reasons: string[];
}

export default function ResultCard({ recommendation, reasons }: ResultCardProps) {
  const isER = recommendation === 'ER';
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className={`text-center p-4 rounded-lg ${isER ? 'bg-red-50' : 'bg-green-50'}`}>
        <h2 className={`text-2xl font-bold ${isER ? 'text-urgency-red' : 'text-urgency-green'}`}>
          {isER ? 'You should go to the Emergency Room (ER)' : 'Urgent Care is appropriate for your symptoms'}
        </h2>
      </div>
      
      {/* Reason Explanation */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Why this recommendation?</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="space-y-2">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-urgency-blue mt-1">•</span>
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Next Steps */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Next Steps</h3>
        <div className={`p-4 rounded-lg ${isER ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
          <p className={`${isER ? 'text-urgency-red' : 'text-urgency-green'} font-medium`}>
            {isER 
              ? 'Call 911 if symptoms worsen. Find your nearest ER below.' 
              : 'Find a nearby Urgent Care Clinic below.'}
          </p>
        </div>
      </div>
    </div>
  );
} 