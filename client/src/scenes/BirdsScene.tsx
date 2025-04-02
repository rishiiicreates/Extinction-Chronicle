import { motion, useAnimation } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import { FlyingBirds, IllustratedBirds, RainDrop } from "@/lib/illustrations";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const BirdsScene = () => {
  const birdStats = [
    { value: "40%", description: "of migratory birds in decline" },
    { value: "1 in 8", description: "bird species threatened" },
    { value: "187", description: "bird species extinct since 1500" }
  ];
  
  // Generate random positions for flying birds
  const [flyingBirds] = useState(Array.from({ length: 5 }, () => ({
    left: `${Math.random() * 60}%`,
    top: `${Math.random() * 50}%`,
    size: `${Math.random() * 0.6 + 0.4}`,
    duration: `${Math.random() * 10 + 15}s`,
    delay: `${Math.random() * 5}s`,
    color: Math.random() > 0.5 ? "#A5C4D4" : "#ffffff"
  })));
  
  // Generate raindrops/light streaks
  const [raindrops] = useState(Array.from({ length: 100 }, () => ({
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 5 + 3}s`,
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.7 + 0.3,
    width: Math.random() > 0.8 ? "3px" : "1px",
    height: `${Math.random() * 30 + 20}px`
  })));

  return (
    <section id="birds-scene" className="scene bg-birds-scene flex items-center justify-center paper-texture">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IllustratedBirds className="w-full h-full object-cover opacity-90" />
      </div>
      
      {/* Flying birds animation */}
      {flyingBirds.map((bird, index) => (
        <div 
          key={`bird-${index}`}
          className="flying-bird absolute z-10"
          style={{
            left: bird.left,
            top: bird.top,
            transform: `scale(${bird.size})`,
            animation: `fly ${bird.duration} linear infinite ${bird.delay}`
          }}
        >
          <FlyingBirds style={{ color: bird.color }} />
        </div>
      ))}
      
      {/* Rain/Light effect animation */}
      <div className="rain-animation">
        {raindrops.map((drop, index) => (
          <div
            key={`drop-${index}`}
            className="raindrop absolute"
            style={{
              left: drop.left,
              animation: `fall ${drop.duration} linear infinite ${drop.delay}`,
              opacity: drop.opacity,
              width: drop.width,
              height: drop.height
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative text-right">
        <NarrativeBox title="Sky Messengers" align="right" className="relative z-10">
          <p className="mb-4">At night time, the majestic birds guide us along the oceans.</p>
          <p className="mb-4">Migratory birds are some of our most vulnerable species, facing threats on multiple continents as they make their incredible journeys.</p>
          
          <div className="flex justify-between items-center mt-6">
            {birdStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-[#E53E3E] text-3xl font-bold bg-[#F8F7F3] bg-opacity-90 px-2 py-1 rounded-md inline-block">{stat.value}</div>
                <div className="text-sm text-white mt-1 bg-[#2B4162] bg-opacity-80 px-2 py-1 rounded-md">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </NarrativeBox>
        
        <div className="mt-12 flex justify-center">
          <motion.button
            className="px-5 py-3 bg-white bg-opacity-30 text-white rounded-full hover:bg-opacity-40 transition-all duration-300 inline-flex items-center shadow-md border border-white border-opacity-30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="mr-2 w-5 h-5" />
            <span>Watch migration patterns</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BirdsScene;
