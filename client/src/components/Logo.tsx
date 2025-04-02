import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xl font-display font-bold flex items-center"
    >
      <span className="text-white">Extinction</span>
      <span className="text-accent">Chronicle</span>
    </motion.div>
  );
};

export default Logo;
