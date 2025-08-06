import Image from 'next/image';

// Example of how to use images in your components
export default function ImageExample() {
  return (
    <div>
      {/* Method 1: Using Next.js Image component (recommended) */}
      <Image
        src="/images/logo.png"           // Path from public folder
        alt="Urgency Logo"
        width={200}
        height={100}
        priority                         // For above-the-fold images
      />
      
      {/* Method 2: Using regular img tag */}
      <img 
        src="/images/hero-illustration.svg" 
        alt="Hero Illustration"
        className="w-full h-auto"
      />
      
      {/* Method 3: Background images in CSS */}
      <div 
        className="w-64 h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/background.jpg)' }}
      >
        Content here
      </div>
    </div>
  );
} 