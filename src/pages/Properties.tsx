
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-2 mb-4">Available Properties</h1>
            <p className="paragraph max-w-2xl mx-auto">
              Explore our selection of properties with immersive 360° views. 
              Click on any property to experience virtual tours of different floors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                name={property.name}
                location={property.location}
                imageUrl={property.imageUrl}
                floors={property.floors.length}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const properties = [
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

export default Properties;
