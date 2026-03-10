import { motion } from "motion/react"

export const Reveal = ({ children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut", 
        delay: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
};