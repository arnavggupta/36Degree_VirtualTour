
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import FloorSelector from "@/components/FloorSelector";
import ViewerFrame from "@/components/ViewerFrame";
import { ArrowLeft, Building, MapPin } from "lucide-react";

interface Floor {
  id: string;
  name: string;
  viewUrl: string;
}

interface Property {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  floors: Floor[];
}

const properties: Property[] = [
  {
    id: "palaj-hostel",
    name: "Palaj Hostel",
    location: "University Campus, Palaj",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    floors: [
      {
        id: "ground-floor",
        name: "Ground Floor",
        viewUrl: "https://html-classic.itch.zone/html/13193499/buid_3/index.html"
      },
      {
        id: "third-floor",
        name: "3rd Floor",
        viewUrl: "https://html-classic.itch.zone/html/13193486/Build/index.html"
      }
    ]
  },
  {
    id: "student-residence",
    name: "Student Residence",
    location: "East Campus, Building B",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    floors: [
      {
        id: "lobby",
        name: "Lobby",
        viewUrl: ""
      }
    ]
  }
];

const PropertyDetail = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const [activeFloorId, setActiveFloorId] = useState("");
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProperty = properties.find(p => p.id === propertyId);
    if (foundProperty) {
      setProperty(foundProperty);
      // Set the first floor as active by default
      if (foundProperty.floors.length > 0 && !activeFloorId) {
        setActiveFloorId(foundProperty.floors[0].id);
      }
    } else {
      // Property not found, redirect to properties page
      navigate("/properties");
    }
  }, [propertyId, navigate, activeFloorId]);

  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-estate-200 border-t-estate-600 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-gray-600">Loading property details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const activeFloor = property.floors.find(floor => floor.id === activeFloorId);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate("/properties")}
            className="flex items-center text-estate-600 hover:text-estate-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Properties</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="heading-3 mb-2">{property.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>

          <FloorSelector
            floors={property.floors}
            activeFloorId={activeFloorId}
            onChange={setActiveFloorId}
          />

          {activeFloor ? (
            <ViewerFrame
              url={activeFloor.viewUrl}
              title={`${property.name} - ${activeFloor.name}`}
            />
          ) : (
            <div className="bg-gray-100 rounded-xl h-[70vh] flex items-center justify-center">
              <p className="text-gray-500">No floor selected</p>
            </div>
          )}

          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-estate-600" />
              About this property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This {property.name} features multiple floors that can be explored in immersive 360° view. 
              Navigate through different floors using the selector above. You can look around by dragging 
              your cursor or using touch gestures on mobile devices. This virtual tour gives you a 
              complete sense of the space and layout.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
