
import { useEffect } from "react";
import NextButton from "@/components/NextButton";
import Layout from "@/components/Layout";
import { Building } from "lucide-react";

const Welcome = () => {
  useEffect(() => {
    // Add animation class to body on mount
    document.body.classList.add("gradient-animate");
    
    // Remove on unmount
    return () => {
      document.body.classList.remove("gradient-animate");
    };
  }, []);

  return (
    <Layout hideHeader>
      <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-white/80 shadow-md border border-white/50 backdrop-blur">
              <Building className="h-12 w-12 text-estate-600" />
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h1 className="heading-1 mb-4">
              Welcome to <span className="text-gradient">Estate 360</span>
            </h1>
            
            <p className="paragraph max-w-2xl mx-auto mb-8">
              Experience properties like never before with immersive 360° views. 
              Explore every corner without leaving your home.
            </p>
            
            <div className="mt-12 animate-slide-up animate-delay-300">
              <NextButton to="/features" label="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
