
import { Building } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  floors: number;
}

const PropertyCard = ({ id, name, location, imageUrl, floors }: PropertyCardProps) => {
  return (
    <Link
      to={`/property/${id}`}
      className="group w-full overflow-hidden rounded-xl glass-card hover:translate-y-[-4px] transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-estate-800 mb-1">{name}</h3>
        
        <div className="flex items-center text-gray-500 mb-3">
          <Building className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <span className="text-sm font-medium text-estate-600">
              {floors} {floors === 1 ? "Floor" : "Floors"} Available
            </span>
          </div>
          
          <div className="rounded-full bg-estate-50 px-3 py-1 text-xs font-medium text-estate-600">
            360° View
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
