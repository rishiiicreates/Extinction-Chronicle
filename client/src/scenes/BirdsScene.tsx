import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import { IllustratedBirds } from "@/lib/illustrations";
import { Play } from "lucide-react";

const BirdsScene = () => {
  const birdStats = [
    { value: "40%", description: "of migratory birds in decline" },
    { value: "1 in 8", description: "bird species threatened" },
    { value: "187", description: "bird species extinct since 1500" }
  ];

  return (
    <section id="birds-scene" className="scene bg-birds-scene flex items-center justify-center paper-texture">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IllustratedBirds className="w-full h-full object-cover opacity-90" />
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
                <div className="text-[#E53E3E] text-3xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </NarrativeBox>
        
        <div className="mt-12 flex justify-center">
          <motion.button
            className="px-5 py-3 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all duration-300 inline-flex items-center shadow-md border border-white border-opacity-20"
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
