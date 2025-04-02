import { motion } from "framer-motion";
import ActionCard from "@/components/ActionCard";
import { IllustratedCollage } from "@/lib/illustrations";
import { DollarSign, Share2, Leaf, Heart } from "lucide-react";

const OutroScene = () => {
  const actionCards = [
    {
      icon: DollarSign,
      title: "Support Conservation",
      description: "Donate to global efforts protecting endangered species."
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Share these stories to educate others about extinction."
    },
    {
      icon: Leaf,
      title: "Make Eco Choices",
      description: "Adopt sustainable habits that protect habitats."
    },
    {
      icon: Heart,
      title: "Volunteer",
      description: "Join local conservation efforts in your community."
    }
  ];

  return (
    <section id="outro-scene" className="scene bg-outro-scene flex items-center justify-center paper-texture">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="font-display text-4xl md:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Join Our Conservation Initiative
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Every species plays a crucial role in Earth's intricate web of life. Together, we can protect endangered species and preserve the biodiversity of our planet for future generations.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {actionCards.map((card, index) => (
                <ActionCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            
            <motion.form 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-display text-xl mb-4">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button
                  className="px-6 py-3 bg-[#E53E3E] text-white rounded-lg whitespace-nowrap peek-button action-button"
                  type="button"
                >
                  <div className="button-content">
                    Join the Movement
                  </div>
                </button>
              </div>
            </motion.form>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            animate={{ 
              scale: [1, 1.02, 1],
              transition: { 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <IllustratedCollage className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-[#E53E3E]">1,000,000+</div>
              <div className="text-sm text-gray-600">Species threatened<br/>with extinction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutroScene;
