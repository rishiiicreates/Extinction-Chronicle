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
      
      {/* Peek animation graphics with bubbles and dots */}
      <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-[#F5D0D0] opacity-60 peek-animation" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-40 right-40 w-12 h-12 rounded-full bg-[#A5C4D4] opacity-40 peek-animation" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-[#75B9A4] opacity-50 peek-animation" style={{ animationDelay: "0.8s" }}></div>
      <div className="absolute top-1/3 right-1/5 w-6 h-6 rounded-full bg-[#C08497] opacity-40 peek-animation" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.div 
          className="mb-8 peek-animation"
        >
          <IllustratedLandscape className="w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg" />
        </motion.div>
        
        <motion.h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl text-dark mb-6 tracking-wide title-text"
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
          <p className="text-xl md:text-2xl text-dark mb-8 font-handwritten text-on-image">
            A journey through endangered species and vanishing habitats
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-6 py-3 text-lg bg-accent text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md mx-auto flex items-center peek-animation"
            onClick={onBeginClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ animationDelay: "1s" }}
          >
            <span>Begin Journey</span>
            <ChevronDown className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-sm text-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-on-image">Scroll to explore the stories of our planet's endangered species</p>
        </motion.div>
        
        {/* Navigation dots similar to reference image */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <div className="w-3 h-3 rounded-full bg-[#33CA7F] peek-animation" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#A5C4D4] opacity-60 peek-animation" style={{ animationDelay: "0.4s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#F5D0D0] opacity-60 peek-animation" style={{ animationDelay: "0.6s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#C08497] opacity-60 peek-animation" style={{ animationDelay: "0.8s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#75B9A4] opacity-60 peek-animation" style={{ animationDelay: "1s" }}></div>
          <div className="w-12 h-1 bg-[#33CA7F] rounded-full peek-animation" style={{ animationDelay: "1.2s" }}></div>
        </div>
      </div>
    </section>
  );
};

export default IntroScene;
