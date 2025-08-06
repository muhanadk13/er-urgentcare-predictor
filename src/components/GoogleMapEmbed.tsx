interface GoogleMapEmbedProps {
  searchQuery: string;
}

export default function GoogleMapEmbed({ searchQuery }: GoogleMapEmbedProps) {
  // Encode the search query for URL
  const encodedQuery = encodeURIComponent(searchQuery);
  const mapSrc = `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${encodedQuery}`;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Find Nearby Facilities</h3>
      
      {/* For demo purposes, we'll show a placeholder */}
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <div className="space-y-4">
          <div className="text-gray-600">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg font-medium">Map Integration</p>
            <p className="text-sm">Searching for: "{searchQuery}"</p>
          </div>
          
          <button 
            onClick={() => window.open(`https://www.google.com/maps/search/${encodedQuery}`, '_blank')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Open in Google Maps
          </button>
        </div>
      </div>
      
      {/* Uncomment this when you have a Google Maps API key */}
      {/* 
      <iframe
        src={mapSrc}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
      */}
    </div>
  );
} 