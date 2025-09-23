import { companyLogos } from "../constants";
import { motion } from "framer-motion";

const CompanyLogos = ({ className }) => {
  // Don't render anything if no company logos
  if (companyLogos.length === 0) {
    return null;
  }

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h5 
        className="tagline mb-6 text-center text-n-1/50"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Helping people create beautiful content at
      </motion.h5>
      <motion.ul 
        className="flex"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {companyLogos.map((logo, index) => (
          <motion.li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ 
              scale: 1.3,
              y: -10,
              rotate: [0, 10, -10, 0],
              boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.4)",
              transition: { type: "spring", stiffness: 200 }
            }}
            whileTap={{ scale: 0.85, rotate: -5 }}
          >
            <motion.img 
              src={logo} 
              width={134} 
              height={28} 
              alt={logo}
              whileHover={{ 
                rotate: [0, 20, -20, 15, -15, 0],
                scale: 1.2,
                filter: "brightness(1.3) contrast(1.2)",
                transition: { duration: 0.8, type: "spring", stiffness: 200 }
              }}
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 3, -3, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                y: { duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default CompanyLogos;
