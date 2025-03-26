
import { useState } from "react";

interface Floor {
  id: string;
  name: string;
}

interface FloorSelectorProps {
  floors: Floor[];
  activeFloorId: string;
  onChange: (floorId: string) => void;
}

const FloorSelector = ({ floors, activeFloorId, onChange }: FloorSelectorProps) => {
  return (
    <div className="flex overflow-x-auto py-2 scrollbar-hide gap-2 mb-4">
      {floors.map((floor) => (
        <button
          key={floor.id}
          onClick={() => onChange(floor.id)}
          className={`
            px-5 py-3 rounded-lg whitespace-nowrap transition-all duration-300
            ${
              activeFloorId === floor.id
                ? "bg-estate-600 text-white font-medium shadow-md"
                : "bg-white text-estate-800 border border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          {floor.name}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;
