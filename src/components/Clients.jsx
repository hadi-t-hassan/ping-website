import Section from "./Section";
import Heading from "./Heading";
import { edtechsLogo, getLogo, ietLogo, ridhaLogo, sadiqLogo, ayatLogo } from "../assets";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from "../hooks/useScrollAnimation";

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
        <Heading
          title="Our Clients"
          text="Trusted by leading organizations across various industries"
        />

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
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08, 
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative z-1 p-8 bg-n-7 rounded-2xl border border-n-1/10 hover:border-color-1/30 transition-all duration-300 hover:shadow-2xl hover:shadow-color-1/20 group"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="w-32 h-32 bg-n-8 rounded-2xl flex items-center justify-center mb-6 border border-n-1/10 group-hover:border-color-1/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-color-1/20"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    animate={{ 
                      y: [0, -3, 0],
                      rotate: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {client.logo ? (
                      <motion.img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-24 h-24 object-contain"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.3 }
                        }}
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, 0]
                        }}
                        transition={{ 
                          duration: 4 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut"
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
                        scale: 1.2,
                        rotate: 15,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 3, 0]
                      }}
                      transition={{ 
                        duration: 3 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.span 
                        className="text-n-1 font-bold text-2xl"
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {client.name.charAt(0)}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="h4 mb-2 group-hover:text-color-1 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#00f6ff",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {client.name}
                  </motion.h3>
                  <motion.p 
                    className="body-2 text-n-3 group-hover:text-n-2 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {client.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
