import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import CauseEffectCard from "@/components/CauseEffectCard";
import { IllustratedDesert } from "@/lib/illustrations";
import { Thermometer, Droplets, Bug, Leaf } from "lucide-react";

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

  return (
    <section id="desert-scene" className="scene bg-desert-scene flex items-center justify-center paper-texture">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <IllustratedDesert className="w-full h-full object-cover opacity-70" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <NarrativeBox title="Arid Realms" className="mb-12">
          <p className="mb-4">With the rising of the sun, the air buzzes with excitement as we set foot on this arid sand.</p>
          <p className="mb-4">Desert ecosystems host remarkably adapted species, but climate change is pushing many beyond their survival limits.</p>
        </NarrativeBox>
        
        {/* Cause and Effect Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {causeEffects.map((item, index) => (
            <CauseEffectCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <motion.button
            className="px-6 py-3 bg-[#48BB78] text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
