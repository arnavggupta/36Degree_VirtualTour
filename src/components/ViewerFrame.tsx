
import { useState, useEffect } from "react";

interface ViewerFrameProps {
  url: string;
  title: string;
}

const ViewerFrame = ({ url, title }: ViewerFrameProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className="relative w-full h-[70vh] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
          <div className="w-16 h-16 border-4 border-estate-200 border-t-estate-600 rounded-full animate-spin mb-4"></div>
          <p className="text-estate-800 font-medium">Loading 360° View...</p>
          <p className="text-gray-500 text-sm mt-2">Please wait, preparing immersive experience</p>
        </div>
      )}
      
      <iframe
        src={url}
        title={title}
        className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ViewerFrame;
