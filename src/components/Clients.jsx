import Section from "./Section";
import Heading from "./Heading";
import { edtechsLogo, getLogo, ietLogo, ridhaLogo, sadiqLogo, ayatLogo } from "../assets";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "../hooks/useScrollAnimation";

const Clients = () => {
  const { ref: clientsRef, isInView: clientsInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  const clientLogos = [
    {
      name: "EdTechS",
      description: "Syndicate of Educational Technology in Lebanon",
      logo: edtechsLogo
    },
    {
      name: "GET",
      description: "Global Education & Technology",
      logo: getLogo
    },
    {
      name: "IET",
      description: "Interactive Education Technology",
      logo: ietLogo
    },
    {
      name: "Al-Imam Al-Ridha",
      description: "High School",
      logo: ridhaLogo
    },
    {
      name: "Al-Imam Al-Sadiq",
      description: "International High School",
      logo: sadiqLogo
    },
    {
      name: "Ayat Quranic Foundation",
      description: "Quranic Verses Authority",
      logo: ayatLogo
    }
  ];

  return (
    <Section id="clients" crosses>
      <div className="container">
        <motion.div
          ref={clientsRef}
          initial="hidden"
          animate={clientsInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Heading
            title="Our Clients"
            text="Trusted by leading organizations across various industries"
          />
        </motion.div>

        <div className="relative">
          <motion.div 
            ref={gridRef}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {clientLogos.map((client, index) => (
              <motion.div 
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ 
                  scale: 1.15, 
                  y: -20,
                  rotateY: 15,
                  rotateX: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.3)",
                  transition: { type: "spring", stiffness: 200, damping: 15 }
                }}
                whileTap={{ scale: 0.9, rotateY: -5 }}
                animate={{
                  y: [0, -5, 0],
                  rotateY: [0, 2, -2, 0],
                }}
                transition={{
                  y: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 6 + index * 0.3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-1 p-8 bg-n-7 rounded-2xl border border-n-1/10 hover:border-color-1/50 transition-all duration-500 hover:shadow-2xl hover:shadow-color-1/20 group"
              >
                <motion.div 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <motion.div 
                    className="w-32 h-32 bg-n-8 rounded-2xl flex items-center justify-center mb-6 border border-n-1/10 group-hover:border-color-1/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-color-1/30"
                    whileHover={{ 
                      rotate: [0, -15, 15, -10, 10, 0],
                      scale: 1.3,
                      y: -10,
                      boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                      transition: { duration: 0.8, type: "spring", stiffness: 150 }
                    }}
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 3, -3, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 2.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {client.logo ? (
                      <motion.img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-24 h-24 object-contain"
                        whileHover={{ 
                          scale: 1.4,
                          rotate: [0, 20, -20, 15, -15, 0],
                          y: -5,
                          filter: "brightness(1.2) contrast(1.1)",
                          transition: { duration: 0.8, type: "spring", stiffness: 200 }
                        }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                          y: [0, -3, 0],
                        }}
                        transition={{ 
                          scale: { duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                          rotate: { duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                          y: { duration: 2.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-color-1 to-color-2 rounded-xl flex items-center justify-center"
                      style={{ display: client.logo ? 'none' : 'flex' }}
                      whileHover={{ 
                        scale: 1.5,
                        rotate: 720,
                        y: -8,
                        boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.5)",
                        transition: { duration: 1.2, type: "spring", stiffness: 150 }
                      }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0],
                        y: [0, -4, 0],
                      }}
                      transition={{ 
                        scale: { duration: 2.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 3.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 2.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <span className="text-n-1 font-bold text-2xl">
                        {client.name.charAt(0)}
                      </span>
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="h4 mb-2 group-hover:text-color-1 transition-colors duration-500"
                    whileHover={{ 
                      scale: 1.15,
                      y: -3,
                      textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                      transition: { type: "spring", stiffness: 200 }
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: { duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {client.name}
                  </motion.h3>
                  <motion.p 
                    className="body-2 text-n-3 group-hover:text-n-2 transition-colors duration-500"
                    whileHover={{ 
                      scale: 1.08,
                      y: -2,
                      transition: { type: "spring", stiffness: 200 }
                    }}
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      y: { duration: 3.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {client.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
