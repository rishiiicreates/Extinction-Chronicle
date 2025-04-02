import { useState } from "react";
import { motion } from "framer-motion";
import { TimelineMarker } from "@/data/timeline";

interface TimelineSliderProps {
  markers: TimelineMarker[];
  startYear: number;
  endYear: number;
  currentValue: number;
  onChange: (value: number) => void;
}

const TimelineSlider = ({ markers, startYear, endYear, currentValue, onChange }: TimelineSliderProps) => {
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const handleMarkerClick = (marker: TimelineMarker) => {
    setActiveMarkerId(marker.id);
    onChange(marker.percentage);
  };

  // Find the active marker based on the current value
  const activeMarker = markers.find(marker => 
    Math.abs(marker.percentage - currentValue) < 5
  );

  return (
    <div className="w-full mt-8">
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6 relative">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-[#ED8936] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${currentValue}%` }}
          transition={{ duration: 0.5 }}
        />
        
        {markers.map((marker) => (
          <motion.div
            key={marker.id}
            className={`absolute w-4 h-4 bg-white border-2 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 ${
              (activeMarkerId === marker.id || (activeMarker?.id === marker.id && !activeMarkerId)) 
                ? "border-[#ED8936] transform scale-110" 
                : "border-[#ED8936]"
            }`}
            style={{ 
              top: "50%", 
              left: `${marker.percentage}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            onClick={() => handleMarkerClick(marker)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
        
        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <span>{startYear}</span>
          <span>{Math.round((startYear + endYear) / 2)}</span>
          <span>{endYear}</span>
        </div>
      </div>
      
      {activeMarker && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-sm"
        >
          <h4 className="font-medium">{activeMarker.year}</h4>
          <p className="text-gray-600">{activeMarker.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineSlider;
