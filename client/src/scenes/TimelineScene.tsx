import { motion } from "framer-motion";
import { RainDrop, Crystal } from "@/lib/illustrations";
import NarrativeBox from "@/components/NarrativeBox";
import ExtinctionTimeline from "@/components/ExtinctionTimeline";
import { useState, useRef, useEffect } from "react";

const TimelineScene = () => {
  // For decoration elements
  const [decorations] = useState(Array.from({ length: 15 }, () => ({
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 70}%`,
    scale: Math.random() * 0.6 + 0.4,
    rotation: Math.random() * 360,
    delay: Math.random() * 1.5,
    duration: Math.random() * 5 + 5,
    isRaindrop: Math.random() > 0.5
  })));

  // Scene ref for scroll animations
  const sceneRef = useRef<HTMLDivElement>(null);
  
  // Scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const elements = document.querySelectorAll('.timeline-decoration');
          elements.forEach((elem) => {
            elem.classList.add('animate-float');
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
      id="timeline-scene" 
      ref={sceneRef}
      className="scene bg-[#f8f7f3] relative overflow-hidden py-16"
    >
      {/* Background decorative elements */}
      {decorations.map((deco, index) => (
        <div 
          key={`deco-${index}`}
          className="absolute timeline-decoration pointer-events-none z-0 opacity-20"
          style={{
            left: deco.left,
            top: deco.top,
            transform: `scale(${deco.scale}) rotate(${deco.rotation}deg)`,
            transitionDelay: `${deco.delay}s`
          }}
        >
          {deco.isRaindrop ? (
            <RainDrop className="w-8 h-8" />
          ) : (
            <Crystal className="w-8 h-8" color="#ED8936" />
          )}
        </div>
      ))}

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <NarrativeBox title="A Chronicle of Loss" className="bg-white">
            <p className="mb-4">
              Throughout Earth's 4.5 billion year history, life has faced several catastrophic extinction events. 
              Mass extinctions reshape the evolutionary landscape, wiping out species and creating opportunities for survivors to diversify.
            </p>
            <p>
              While extinction is a natural process, what sets the current crisis apart is its speed. 
              Today's extinction rates are estimated to be 1,000 times higher than natural background rates, 
              and scientists warn we may be witnessing the beginning of Earth's sixth mass extinction.
            </p>
          </NarrativeBox>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ExtinctionTimeline className="max-w-4xl mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 max-w-xl mx-auto text-center"
        >
          <div className="inline-block bg-[#E53E3E] bg-opacity-10 px-6 py-4 rounded-lg border border-[#E53E3E] border-opacity-20">
            <p className="text-lg font-semibold text-[#E53E3E]">
              We are currently experiencing extinction rates 1,000 times higher than natural background levels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineScene;