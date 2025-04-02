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
      
      {/* Peek animation graphics with vibrant colors and shapes - now with more subtle effects */}
      <div className="absolute top-20 left-20 w-10 h-10 rounded-full bg-[#F5D0D0] opacity-60 float-subtle" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-40 right-32 w-14 h-14 rounded-full bg-[#A5C4D4] opacity-50 float-subtle" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-[#75B9A4] opacity-60 float-subtle" style={{ animationDelay: "0.8s" }}></div>
      <div className="absolute top-1/3 right-1/5 w-8 h-8 rounded-full bg-[#C08497] opacity-50 float-subtle" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Additional subtle vibrant shapes */}
      <div className="absolute top-1/4 left-1/3 w-16 h-3 rounded-full bg-[#FF9E9E] opacity-40 float-subtle" style={{ animationDelay: "1.7s" }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-16 rounded-full bg-[#7ECBA1] opacity-50 float-subtle" style={{ animationDelay: "2.0s" }}></div>
      <div className="absolute top-3/4 left-1/5 w-6 h-6 transform rotate-45 bg-[#FFE066] opacity-40 float-subtle" style={{ animationDelay: "1.3s" }}></div>
      <div className="absolute top-1/6 right-1/2 w-8 h-8 transform rotate-12 bg-[#9A80B4] opacity-30 float-subtle" style={{ animationDelay: "0.9s" }}></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <motion.div 
          className="mb-8 peek-animation"
        >
          <IllustratedLandscape className="w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg float-subtle" />
        </motion.div>
        
        <motion.h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide inline-block shimmer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            color: "#2D3047", 
            backgroundColor: "white", 
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
          }}
        >
          <span className="gradient-text">EXTINCTION CHRONICLE</span>
        </motion.h1>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl mb-8 font-handwritten inline-block typewriter" 
             style={{ 
               color: "#4C3F91", 
               backgroundColor: "white",
               padding: "0.3rem 1rem",
               borderRadius: "0.5rem",
               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
               maxWidth: "100%",
               width: "fit-content"
             }}>
            A journey through endangered species and vanishing habitats
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            className="px-6 py-3 text-lg bg-[#FF5A5F] text-white rounded-full shadow-md mx-auto flex items-center peek-button action-button glow-effect"
            onClick={onBeginClick}
          >
            <div className="button-content flex items-center">
              <span>Begin Journey</span>
              <ChevronDown className="ml-2 w-5 h-5 elastic-bounce" />
            </div>
          </button>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="inline-block" style={{ 
            color: "#554971", 
            fontWeight: "500",
            backgroundColor: "white",
            padding: "0.3rem 1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
          }}>
            Scroll to explore the stories of our planet's endangered species
          </p>
        </motion.div>
        
        {/* Navigation dots with vibrant colors and subtle animation */}
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
          <div className="w-3 h-3 rounded-full bg-[#7ECBA1] opacity-70 float-subtle" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#A5C4D4] opacity-70 float-subtle" style={{ animationDelay: "0.4s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#F5D0D0] opacity-70 float-subtle" style={{ animationDelay: "0.6s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#C08497] opacity-70 float-subtle" style={{ animationDelay: "0.8s" }}></div>
          <div className="w-3 h-3 rounded-full bg-[#9A80B4] opacity-70 float-subtle" style={{ animationDelay: "1s" }}></div>
          <div className="w-10 h-1 bg-[#7ECBA1] opacity-70 rounded-full float-subtle" style={{ animationDelay: "1.2s" }}></div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute right-10 top-1/4 w-20 h-20">
          <svg viewBox="0 0 100 100" className="float-subtle" style={{ animationDelay: "0.5s" }}>
            <path d="M30,10 Q50,0 70,10 T90,30 T70,50 T50,70 T30,50 T10,30 T30,10" fill="none" stroke="#FF9E1F" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute left-10 bottom-1/4 w-16 h-16">
          <svg viewBox="0 0 100 100" className="float-subtle" style={{ animationDelay: "1.2s" }}>
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
