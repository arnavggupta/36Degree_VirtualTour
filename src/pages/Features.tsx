import Layout from "@/components/Layout";
import NextButton from "@/components/NextButton";
import { Eye, Map, Building, PanelTop, RotateCw } from "lucide-react";

const Features = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-2 mb-4">Discover Estate 360</h1>
            <p className="paragraph max-w-2xl mx-auto">
              Our cutting-edge platform brings immersive property viewing to your mobile device, 
              allowing you to explore spaces in full 360° detail.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <NextButton to="/properties" label="Explore Properties" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isReversed?: boolean;
}

const FeatureCard = ({ icon, title, description, isReversed = false }: FeatureCardProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center`}>
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="p-6 bg-estate-50 rounded-2xl border border-estate-100">
          {icon}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="heading-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <Eye className="h-12 w-12 text-estate-600" />,
    title: "Immersive 360° Views",
    description: "Experience properties in stunning 360-degree detail, allowing you to look around and explore as if you were physically present.",
  },
  {
    icon: <RotateCw className="h-12 w-12 text-estate-600" />,
    title: "Smooth Navigation",
    description: "Navigate seamlessly between different rooms and floors with intuitive controls designed for both mobile and desktop.",
  },
  {
    icon: <Building className="h-12 w-12 text-estate-600" />,
    title: "Multiple Properties",
    description: "Browse through our extensive collection of properties, each with detailed floor plans and 360° views of every important space.",
  },
  {
    icon: <PanelTop className="h-12 w-12 text-estate-600" />,
    title: "Floor Selection",
    description: "Easily switch between different floors within a property to get a complete understanding of the layout and design.",
  },
];

export default Features;
