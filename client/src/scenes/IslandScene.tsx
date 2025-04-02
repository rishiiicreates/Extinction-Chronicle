import { useState } from "react";
import { motion } from "framer-motion";
import NarrativeBox from "@/components/NarrativeBox";
import TimelineSlider from "@/components/TimelineSlider";
import { timelineMarkers } from "@/data/timeline";
import { IllustratedIsland } from "@/lib/illustrations";

const IslandScene = () => {
  const [timelineValue, setTimelineValue] = useState(75);

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
      </div>
    </section>
  );
};

export default IslandScene;
