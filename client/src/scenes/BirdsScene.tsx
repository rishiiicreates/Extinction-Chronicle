import { motion, useAnimation } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import { FlyingBirds, IllustratedBirds, RainDrop } from "@/lib/illustrations";
import { Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const BirdsScene = () => {
  const birdStats = [
    { value: "40%", description: "of migratory birds in decline" },
    { value: "1 in 8", description: "bird species threatened" },
    { value: "187", description: "bird species extinct since 1500" }
  ];
  
  // Generate birds with peek animation properties
  const [peekBirds] = useState(Array.from({ length: 8 }, () => ({
    left: `${Math.random() * 80}%`,
    top: `${Math.random() * 70}%`,
    size: Math.random() * 0.6 + 0.4,
    rotation: Math.random() * 30 - 15, // Random rotation between -15 and 15 degrees
    delay: Math.random() * 5,
    duration: Math.random() * 2 + 3,
    color: Math.random() > 0.5 ? "#A5C4D4" : "#ffffff",
    peekDistance: Math.random() * 30 + 20 // Distance for peek animation
  })));
  
  // Generate gentle floating particles
  const [gentleParticles] = useState(Array.from({ length: 40 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 8 + 10}s`,
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.3 + 0.1, // More subtle opacity
    size: Math.random() * 6 + 3,  // Particle size
    blurAmount: Math.random() * 5 + 2, // Blur effect for softness
  })));

  // Reference for the scene element
  const sceneRef = useRef<HTMLDivElement>(null);
  
  // Add scroll-triggered animation for birds
  useEffect(() => {
    const handleScroll = () => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          document.querySelectorAll('.peek-bird').forEach((bird) => {
            bird.classList.add('active');
          });
        } else {
          document.querySelectorAll('.peek-bird').forEach((bird) => {
            bird.classList.remove('active');
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sceneRef}
      id="birds-scene" 
      className="scene bg-birds-scene flex items-center justify-center paper-texture relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <IllustratedBirds className="w-full h-full object-cover opacity-90" />
      </div>
      
      {/* Peek Birds Animation */}
      {peekBirds.map((bird, index) => (
        <div 
          key={`peek-bird-${index}`}
          className="absolute peek-bird z-10"
          style={{
            left: bird.left,
            top: bird.top,
            transform: `scale(${bird.size}) rotate(${bird.rotation}deg)`,
            transition: `transform ${bird.duration}s ease-in-out`,
            zIndex: 10
          }}
        >
          <FlyingBirds 
            style={{ 
              color: bird.color,
              animation: `peekAnimation ${bird.duration}s ease-in-out ${bird.delay}s infinite alternate`
            }} 
          />
        </div>
      ))}
      
      {/* Gentle floating particles animation */}
      <div className="floating-particles absolute inset-0 z-1">
        {gentleParticles.map((particle, index) => (
          <div
            key={`particle-${index}`}
            className="particle absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: 'white',
              filter: `blur(${particle.blurAmount}px)`,
              animation: `float ${particle.duration} ease-in-out infinite ${particle.delay}`,
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
          <button
            className="px-5 py-3 bg-white bg-opacity-30 text-white rounded-full inline-flex items-center shadow-md border border-white border-opacity-30 peek-button action-button"
          >
            <div className="button-content flex items-center">
              <Play className="mr-2 w-5 h-5" />
              <span>Watch migration patterns</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BirdsScene;
