import { motion } from "framer-motion";
import { Info } from "lucide-react";

export interface AnimalCardProps {
  name: string;
  image: string;
  status: "Critically Endangered" | "Endangered" | "Vulnerable" | "Near Threatened";
  population: string;
  location: string;
  onClick?: () => void;
  delay?: number;
}

const AnimalCard = ({ name, image, status, population, location, onClick, delay = 0 }: AnimalCardProps) => {
  // Define vibrant colors for different statuses
  let statusColor = "#FF5A5F"; // Critically Endangered
  let statusClass = "endangered";
  
  if (status === "Endangered") {
    statusColor = "#FF5A5F";
    statusClass = "endangered";
  } else if (status === "Vulnerable") {
    statusColor = "#FF9E1F";
    statusClass = "vulnerable";
  } else if (status === "Near Threatened") {
    statusColor = "#FFD600";
    statusClass = "near-threatened";
  }

  return (
    <motion.div
      className="animal-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden z-10 pointer-events-none">
        <svg viewBox="0 0 40 40">
          <path d="M0,0 L40,0 L40,40 Z" fill={statusColor} opacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden z-10 pointer-events-none peek-animation" style={{ animationDelay: `${0.3 + delay * 0.1}s` }}>
        <svg viewBox="0 0 60 60">
          <circle cx="60" cy="60" r="30" fill="none" stroke={statusColor} strokeWidth="2" opacity="0.2" />
          <circle cx="60" cy="60" r="20" fill="none" stroke={statusColor} strokeWidth="1.5" opacity="0.3" />
          <circle cx="60" cy="60" r="10" fill="none" stroke={statusColor} strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
      
      <div className="relative">
        <div 
          className="w-full h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={`status-badge ${statusClass}`}>{status}</div>
      </div>
      
      <div className="p-4">
        <h3 
          className="font-display text-lg mb-1" 
          style={{ color: "#2D3047", fontWeight: 600 }}
        >
          {name}
        </h3>
        
        <p 
          className="text-sm mb-2" 
          style={{ color: "#4C3F91", fontWeight: 500 }}
        >
          {population}
        </p>
        
        <div className="flex justify-between items-center mt-4">
          <span 
            className="text-xs px-2 py-1 rounded"
            style={{ 
              color: "#554971", 
              background: "rgba(255,255,255,0.5)",
              border: `1px solid ${statusColor}30`,
              fontWeight: 500
            }}
          >
            {location}
          </span>
          
          <motion.button
            className="flex items-center text-sm font-medium"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: statusColor }}
          >
            <Info className="w-4 h-4 mr-1" /> Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimalCard;
