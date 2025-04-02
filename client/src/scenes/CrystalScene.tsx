import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import AnimalCard from "@/components/AnimalCard";
import { animals } from "@/data/animals";
import { Crystal, IllustratedCrystals } from "@/lib/illustrations";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const CrystalScene = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<typeof animals[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Generate random positions for floating crystals
  const [floatingCrystals] = useState(Array.from({ length: 8 }, () => ({
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 70}%`,
    size: `${Math.random() * 0.6 + 0.2}`,
    rotation: `${Math.random() * 20 - 10}deg`,
    delay: `${Math.random() * 2}s`,
    color: [
      "#B8C4D9", 
      "#8ECFD6", 
      "#A5C4D4", 
      "#9DB4D0"
    ][Math.floor(Math.random() * 4)]
  })));

  const handleAnimalClick = (animal: typeof animals[0]) => {
    setSelectedAnimal(animal);
    setIsDialogOpen(true);
  };

  return (
    <section id="crystal-scene" className="scene bg-crystal-scene flex items-end justify-center paper-texture">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IllustratedCrystals className="w-full h-full object-cover opacity-70" />
      </div>
      
      {/* Floating crystals animation */}
      {floatingCrystals.map((crystal, index) => (
        <div 
          key={`crystal-${index}`}
          className="floating-crystal absolute z-10"
          style={{
            left: crystal.left,
            top: crystal.top,
            transform: `scale(${crystal.size}) rotate(${crystal.rotation})`,
            animationDelay: crystal.delay
          }}
        >
          <div className="crystal-glow">
            <Crystal color={crystal.color} />
          </div>
        </div>
      ))}
      
      <div className="container mx-auto px-4 pb-16 relative">
        <NarrativeBox title="The Crystalline Guardians" className="mb-6 relative z-20">
          <p className="mb-4">Let us hear one last time the sweet melody of the waterfalls, the whisper of leaves and the ancient words of the rocks.</p>
          <p className="text-[#E53E3E] font-medium bg-white bg-opacity-60 p-2 rounded-md inline-block">Over 1 million species are currently threatened with extinction, many within decades.</p>
        </NarrativeBox>
        
        {/* Species Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-20">
          {animals.slice(0, 6).map((animal, index) => (
            <AnimalCard
              key={animal.id}
              name={animal.name}
              image={animal.image}
              status={animal.status}
              population={animal.population}
              location={animal.location}
              onClick={() => handleAnimalClick(animal)}
              delay={index % 3}
            />
          ))}
        </div>
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
                    style={{ backgroundColor: selectedAnimal.status === "Critically Endangered" ? "#E53E3E" : "#ED8936" }}>
                    {selectedAnimal.status}
                  </span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="w-full h-48 bg-cover bg-center rounded-md mb-4" 
                style={{ backgroundImage: `url(${selectedAnimal.image})` }} />
              
              <div className="space-y-3">
                <p><strong>Population:</strong> {selectedAnimal.population}</p>
                <p><strong>Habitat:</strong> {selectedAnimal.location}</p>
                <p>{selectedAnimal.description}</p>
                
                <div className="pt-4">
                  <h4 className="font-medium text-sm mb-2">Major Threats:</h4>
                  <ul className="list-disc list-inside text-sm">
                    {selectedAnimal.threats.map((threat, i) => (
                      <li key={i}>{threat}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <h4 className="font-medium text-sm mb-2">Conservation Efforts:</h4>
                  <p className="text-sm">{selectedAnimal.conservation}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CrystalScene;
