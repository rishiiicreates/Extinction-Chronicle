import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IllustratedLandscape } from "@/lib/illustrations";

interface IntroSceneProps {
  onBeginClick: () => void;
}

const IntroScene = ({ onBeginClick }: IntroSceneProps) => {
  return (
    <section id="intro-scene" className="scene bg-intro-scene flex items-center justify-center paper-texture">
      <div className="bg-texture absolute inset-0 opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.div 
          className="mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <IllustratedLandscape className="w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg" />
        </motion.div>
        
        <motion.h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl text-dark mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          EXTINCTION CHRONICLE
        </motion.h1>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-dark mb-8 font-handwritten">
            A journey through endangered species and vanishing habitats
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-6 py-3 text-lg bg-accent text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md mx-auto flex items-center"
            onClick={onBeginClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Begin Journey</span>
            <ChevronDown className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-sm text-dark opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>Scroll to explore the stories of our planet's endangered species</p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScene;
