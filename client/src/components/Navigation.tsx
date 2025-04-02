import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, InfoIcon, Heart } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center">
      <Logo />
      
      {/* Desktop Navigation */}
      <nav className="md:flex hidden">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-neutral bg-opacity-80 rounded-full text-dark hover:bg-opacity-100 transition-all duration-300 flex items-center mr-2"
        >
          <InfoIcon className="w-4 h-4 mr-2" />
          About
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-[#E53E3E] bg-opacity-90 rounded-full text-white hover:bg-opacity-100 transition-all duration-300 flex items-center"
        >
          <Heart className="w-4 h-4 mr-2" />
          Take Action
        </motion.button>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2 z-10"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full bg-dark bg-opacity-95 p-6 pt-20 flex flex-col items-center md:hidden"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 w-full bg-neutral bg-opacity-80 rounded-full text-dark hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center mb-4"
              onClick={toggleMenu}
            >
              <InfoIcon className="w-4 h-4 mr-2" />
              About
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 w-full bg-[#E53E3E] bg-opacity-90 rounded-full text-white hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center"
              onClick={toggleMenu}
            >
              <Heart className="w-4 h-4 mr-2" />
              Take Action
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
