import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import CauseEffectCard from "@/components/CauseEffectCard";
import { IllustratedDesert } from "@/lib/illustrations";
import { Thermometer, Droplets, Bug, Leaf } from "lucide-react";
import { useState } from "react";

const DesertScene = () => {
  const causeEffects = [
    {
      icon: Thermometer,
      title: "Rising Temperatures",
      description: "Desert temperatures increasing at twice the global average rate."
    },
    {
      icon: Droplets,
      title: "Water Scarcity",
      description: "Decreasing rainfall and prolonged droughts affecting water availability."
    },
    {
      icon: Bug,
      title: "Species Decline",
      description: "40% of desert species facing extinction risk within decades."
    }
  ];
  
  // Generate peek animation elements for desert scene
  const [peekElements] = useState(Array.from({ length: 6 }, () => ({
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 70}%`,
    size: `${Math.random() * 0.6 + 0.2}`,
    color: [
      "#F4D6CC", 
      "#E9C4B4",
      "#C08497",
      "#FFD600"
    ][Math.floor(Math.random() * 4)],
    delay: `${Math.random() * 2}s`,
    shape: Math.random() > 0.5 ? "circle" : "square"
  })));

  return (
    <section id="desert-scene" className="scene bg-desert-scene flex items-center justify-center paper-texture">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IllustratedDesert className="w-full h-full object-cover opacity-70" />
      </div>
      
      {/* Peek animation elements */}
      {peekElements.map((element, index) => (
        element.shape === "circle" ? (
          <div 
            key={`peek-${index}`}
            className="absolute rounded-full peek-animation z-10"
            style={{
              left: element.left,
              top: element.top,
              width: `${parseInt(element.size) * 30}px`,
              height: `${parseInt(element.size) * 30}px`,
              backgroundColor: element.color,
              animationDelay: element.delay,
              opacity: 0.6
            }}
          />
        ) : (
          <div 
            key={`peek-${index}`}
            className="absolute rounded-md peek-animation z-10"
            style={{
              left: element.left,
              top: element.top,
              width: `${parseInt(element.size) * 30}px`,
              height: `${parseInt(element.size) * 30}px`,
              backgroundColor: element.color,
              animationDelay: element.delay,
              opacity: 0.6,
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          />
        )
      ))}
      
      <div className="container mx-auto px-4 relative">
        <NarrativeBox title="Arid Realms" className="mb-12 relative z-20">
          <p className="mb-4 text-on-image inline-block">With the rising of the sun, the air buzzes with excitement as we set foot on this arid sand.</p>
          <p className="mb-4 text-on-image inline-block">Desert ecosystems host remarkably adapted species, but climate change is pushing many beyond their survival limits.</p>
        </NarrativeBox>
        
        {/* Cause and Effect Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative z-20">
          {causeEffects.map((item, index) => (
            <div key={index} className="peek-animation" style={{ animationDelay: `${index * 0.3}s` }}>
              <CauseEffectCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 relative z-20">
          <motion.button
            className="px-6 py-3 bg-[#48BB78] text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center peek-animation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ animationDelay: "1.2s" }}
          >
            <Leaf className="mr-2 w-5 h-5" />
            <span>Explore Conservation Projects</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default DesertScene;
