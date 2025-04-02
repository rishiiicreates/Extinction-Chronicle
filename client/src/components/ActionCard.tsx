import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ActionCard = ({ icon: Icon, title, description }: ActionCardProps) => {
  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-accent bg-opacity-10 rounded-full p-2 mr-3 flex-shrink-0">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ActionCard;
