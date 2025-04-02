import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CauseEffectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const CauseEffectCard = ({ icon: Icon, title, description, delay = 0 }: CauseEffectCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-5 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay * 0.2 }}
    >
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon className="text-2xl text-[#E53E3E]" />
      </div>
      <h3 className="font-display text-center text-lg mb-2">{title}</h3>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </motion.div>
  );
};

export default CauseEffectCard;
