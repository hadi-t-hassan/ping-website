import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { PingServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "../hooks/useScrollAnimation";

const Services = () => {
  const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation();
  const { ref: mainServiceRef, isInView: mainServiceInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();

  return (
    <Section id="services">
      <div className="container">
        <Heading
          title="Our Services"
          text="Comprehensive technology solutions tailored to your business needs"
        />

        <div className="relative">
          <motion.div 
            ref={mainServiceRef}
            initial="hidden"
            animate={mainServiceInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative z-1 flex flex-col md:flex-row md:items-center h-auto md:h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] hover:scale-[1.02] transition-transform duration-500"
          >
            {/* Text content - appears first on mobile, right side on desktop */}
            <motion.div 
              variants={fadeInLeft}
              className="relative z-1 w-full md:max-w-[17rem] md:ml-auto order-1 md:order-2 mb-8 md:mb-0"
            >
              <motion.h4 
                variants={fadeInUp}
                className="h4 mb-4"
              >
                Web Development
              </motion.h4>
              <motion.p 
                variants={fadeInUp}
                className="body-2 mb-[3rem] text-n-3"
              >
                Modern, responsive websites built with cutting-edge technologies
              </motion.p>
              <motion.ul 
                variants={staggerContainer}
                className="body-2"
              >
                {PingServices.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <motion.img 
                      width={24} 
                      height={24} 
                      src={check}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    />
                    <p className="ml-4">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Image - appears second on mobile, left side on desktop */}
            <motion.div 
              variants={fadeInRight}
              className="relative w-full md:absolute md:top-0 md:left-0 md:w-full md:h-full pointer-events-none md:w-3/5 xl:w-auto order-2 md:order-1"
            >
              <motion.img
                className="w-full h-[20rem] md:h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05, x: [0, 8, -8, 0] }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
            </motion.div>
          </motion.div>

          <motion.div 
            ref={gridRef}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative z-1 grid gap-5 lg:grid-cols-2"
          >
            <motion.div 
              variants={fadeInLeft}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <motion.img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                  whileHover={{ scale: 1.1, x: [0, -10, 10, 0] }}
                  animate={{ 
                    x: [0, -5, 5, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    hover: { duration: 0.5 }
                  }}
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15"
              >
                <h4 className="h4 mb-4">Mobile App</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  released successfully
                </p>
              </motion.div>

              <PhotoChatMessage />
            </motion.div>

            <motion.div 
              variants={fadeInRight}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="py-12 px-4 xl:px-8"
              >
                <h4 className="h4 mb-4">Security & Training</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Comprehensive penetration testing and professional training 
                  programs to secure and upskill your organization.
                </p>

                <motion.ul 
                  variants={staggerContainer}
                  className="flex items-center justify-between"
                >
                  {brainwaveServicesIcons.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={scaleIn}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]"
              >
                <motion.img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                  whileHover={{ scale: 1.05, x: [0, 10, -10, 0] }}
                  animate={{ 
                    x: [0, 8, -8, 0],
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    hover: { duration: 0.5 }
                  }}
                />

                <VideoChatMessage />
                <VideoBar />
              </motion.div>
            </motion.div>
          </motion.div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
