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
  let statusClass = "bg-[#E53E3E]"; // Critically Endangered
  
  if (status === "Endangered") {
    statusClass = "bg-[#E53E3E]";
  } else if (status === "Vulnerable") {
    statusClass = "bg-[#ED8936]";
  } else if (status === "Near Threatened") {
    statusClass = "bg-[#48BB78]";
  }

  return (
    <motion.div
      className="animal-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
    >
      <div className="relative">
        <div 
          className="w-full h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={`status-badge ${statusClass}`}>{status}</div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{population}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{location}</span>
          <motion.button
            className="text-accent hover:text-dark transition-colors flex items-center text-sm"
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Info className="w-4 h-4 mr-1" /> Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimalCard;
