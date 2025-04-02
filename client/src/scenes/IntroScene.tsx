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
      
      {/* Peek animation graphics with vibrant colors and shapes */}
      <div className="absolute top-20 left-20 w-10 h-10 rounded-full bg-[#F5D0D0] opacity-80 peek-animation" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-40 right-32 w-14 h-14 rounded-full bg-[#A5C4D4] opacity-70 peek-animation" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-[#75B9A4] opacity-80 peek-animation" style={{ animationDelay: "0.8s" }}></div>
      <div className="absolute top-1/3 right-1/5 w-8 h-8 rounded-full bg-[#C08497] opacity-70 peek-animation" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Additional vibrant shapes */}
      <div className="absolute top-1/4 left-1/3 w-16 h-3 rounded-full bg-[#FF7E67] opacity-60 peek-animation" style={{ animationDelay: "1.7s" }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-16 rounded-full bg-[#33CA7F] opacity-70 peek-animation" style={{ animationDelay: "2.0s" }}></div>
      <div className="absolute top-3/4 left-1/5 w-6 h-6 transform rotate-45 bg-[#FFD600] opacity-60 peek-animation" style={{ animationDelay: "1.3s" }}></div>
      <div className="absolute top-1/6 right-1/2 w-8 h-8 transform rotate-12 bg-[#6A0572] opacity-40 peek-animation" style={{ animationDelay: "0.9s" }}></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.div 
          className="mb-8 peek-animation"
        >
          <IllustratedLandscape className="w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg" />
        </motion.div>
        
        <motion.h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: "#2D3047", textShadow: "2px 2px 0px #ffffff" }}
        >
          EXTINCTION CHRONICLE
        </motion.h1>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl mb-8 font-handwritten" 
             style={{ color: "#4C3F91", textShadow: "1px 1px 0px #ffffff" }}>
            A journey through endangered species and vanishing habitats
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="px-6 py-3 text-lg bg-[#FF5A5F] text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md mx-auto flex items-center peek-animation"
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
          className="mt-12 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p style={{ color: "#554971", textShadow: "1px 1px 0px #ffffff", fontWeight: "500" }}>
            Scroll to explore the stories of our planet's endangered species
          </p>
        </motion.div>
        
        {/* Navigation dots with vibrant colors */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
          <div className="w-3 h-3 rounded-full bg-[#33CA7F] peek-animation" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#A5C4D4] peek-animation" style={{ animationDelay: "0.4s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#F5D0D0] peek-animation" style={{ animationDelay: "0.6s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#C08497] peek-animation" style={{ animationDelay: "0.8s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#75B9A4] peek-animation" style={{ animationDelay: "1s" }}></div>
          <div className="w-12 h-1 bg-[#33CA7F] rounded-full peek-animation" style={{ animationDelay: "1.2s" }}></div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute right-10 top-1/4 w-20 h-20">
          <svg viewBox="0 0 100 100" className="peek-animation" style={{ animationDelay: "1.8s" }}>
            <path d="M30,10 Q50,0 70,10 T90,30 T70,50 T50,70 T30,50 T10,30 T30,10" fill="none" stroke="#FF9E1F" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute left-10 bottom-1/4 w-16 h-16">
          <svg viewBox="0 0 100 100" className="peek-animation" style={{ animationDelay: "2.2s" }}>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#33CA7F" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#33CA7F" strokeWidth="1" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#33CA7F" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroScene;
