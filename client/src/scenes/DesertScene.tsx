import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import CauseEffectCard from "@/components/CauseEffectCard";
import AnimalCard from "@/components/AnimalCard";
import { IllustratedDesert } from "@/lib/illustrations";
import { animals } from "@/data/animals";
import { Thermometer, Droplets, Bug, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const DesertScene = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<typeof animals[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [animatingCards, setAnimatingCards] = useState(false);
  
  // Auto-scroll animation effect for animal cards
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatingCards(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAnimalClick = (animal: typeof animals[0]) => {
    setSelectedAnimal(animal);
    setIsDialogOpen(true);
  };
  
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
  const [peekElements] = useState(Array.from({ length: 10 }, () => ({
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
        
        {/* Desert Animals Section */}
        <motion.div 
          className="mt-16 relative z-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="font-display text-xl mb-6 text-white bg-[#C08497] bg-opacity-90 inline-block py-2 px-4 rounded-lg"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.2 
            }}
          >
            Desert Adapted Species
          </motion.h3>
          
          <div className="relative pb-10">
            <motion.div 
              className="flex space-x-6 py-4"
              animate={animatingCards ? {
                x: [0, -1200],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear"
                  }
                }
              } : {}}
            >
              {/* Show animals 11-15, then repeat them for infinite scrolling effect */}
              {[...animals.slice(11, 15), ...animals.slice(11, 15)].map((animal, index) => (
                <motion.div
                  key={`${animal.id}-${index}`}
                  className="w-72 flex-shrink-0"
                  initial={{ 
                    scale: 0.9, 
                    opacity: 0,
                    rotateY: 45
                  }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    rotateY: 0
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    type: "spring"
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => handleAnimalClick(animal)}
                >
                  <AnimalCard
                    name={animal.name}
                    image={animal.image}
                    status={animal.status}
                    population={animal.population}
                    location={animal.location}
                    delay={0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <div className="flex justify-center mt-10 relative z-20">
          <button
            className="px-6 py-3 bg-[#48BB78] text-white rounded-full shadow-md flex items-center peek-button action-button"
          >
            <div className="button-content flex items-center">
              <Leaf className="mr-2 w-5 h-5" />
              <span>Explore Conservation Projects</span>
            </div>
          </button>
        </div>
        
        {/* Animal Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            {selectedAnimal && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display text-xl">{selectedAnimal.name}</DialogTitle>
                  <DialogDescription>
                    <span className="inline-block px-2 py-1 rounded-full text-xs text-white mb-2" 
                      style={{ backgroundColor: selectedAnimal.status === "Critically Endangered" ? "#E53E3E" : selectedAnimal.status === "Endangered" ? "#ED8936" : "#48BB78" }}>
                      {selectedAnimal.status}
                    </span>
                  </DialogDescription>
                </DialogHeader>
                
                <motion.div 
                  className="w-full h-48 bg-cover bg-center rounded-md mb-4"
                  style={{ backgroundImage: `url(${selectedAnimal.image})` }}
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div className="p-3 text-white font-medium">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {selectedAnimal.location}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <div className="space-y-3">
                  <p><strong>Population:</strong> {selectedAnimal.population}</p>
                  <p>{selectedAnimal.description}</p>
                  
                  <div className="pt-4">
                    <h4 className="font-medium text-sm mb-2">Major Threats:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {selectedAnimal.threats.map((threat, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          {threat}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div 
                    className="pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="font-medium text-sm mb-2">Conservation Efforts:</h4>
                    <p className="text-sm">{selectedAnimal.conservation}</p>
                  </motion.div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DesertScene;
