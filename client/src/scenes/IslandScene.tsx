import { useState } from "react";
import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import TimelineSlider from "@/components/TimelineSlider";
import AnimalCard from "@/components/AnimalCard";
import { timelineMarkers } from "@/data/timeline";
import { animals } from "@/data/animals";
import { IllustratedIsland } from "@/lib/illustrations";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const IslandScene = () => {
  const [timelineValue, setTimelineValue] = useState(75);
  const [selectedAnimal, setSelectedAnimal] = useState<typeof animals[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleAnimalClick = (animal: typeof animals[0]) => {
    setSelectedAnimal(animal);
    setIsDialogOpen(true);
  };

  return (
    <section id="island-scene" className="scene bg-island-scene flex items-end justify-center paper-texture">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IllustratedIsland className="w-full h-full object-cover opacity-70" />
      </div>
      
      <div className="container mx-auto px-4 pb-16 relative">
        <NarrativeBox title="Island Sanctuaries" className="relative z-10">
          <p className="mb-4">A year has gone since we set foot on this island.</p>
          <p className="mb-4">Island ecosystems are particularly vulnerable to extinction events. Their isolation creates unique species found nowhere else, but also makes them especially vulnerable to threats.</p>
        </NarrativeBox>
        
        {/* Interactive Habitat Map */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-xl mb-4">Habitat Loss Timeline</h3>
          
          <TimelineSlider
            markers={timelineMarkers}
            startYear={1900}
            endYear={2050}
            currentValue={timelineValue}
            onChange={setTimelineValue}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-medium mb-2 text-[#ED8936]">Habitat Loss Impact</h4>
              <p className="text-sm text-gray-600">Islands have lost over 73% of their native vegetation, leading to the extinction of numerous endemic species. Island species account for 75% of all known animal extinctions since 1500.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-medium mb-2 text-[#48BB78]">Conservation Efforts</h4>
              <p className="text-sm text-gray-600">Reforestation and invasive species management programs have helped restore 12% of critical island habitats in the past decade, saving 21 species from extinction.</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Island Animals Display */}
        <motion.div 
          className="mt-12 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-xl mb-4 text-white bg-[#48BB78] bg-opacity-90 inline-block py-2 px-4 rounded-lg">
            Island Endemic Species
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {animals.slice(6, 11).map((animal, index) => (
              <motion.div
                key={animal.id}
                initial={{ 
                  opacity: 0, 
                  y: 50, 
                  rotate: index % 2 === 0 ? -5 : 5 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0 
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <AnimalCard
                  name={animal.name}
                  image={animal.image}
                  status={animal.status}
                  population={animal.population}
                  location={animal.location}
                  onClick={() => handleAnimalClick(animal)}
                  delay={index % 3}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
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
              />
              
              <div className="space-y-3">
                <p><strong>Population:</strong> {selectedAnimal.population}</p>
                <p><strong>Habitat:</strong> {selectedAnimal.location}</p>
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
    </section>
  );
};

export default IslandScene;
