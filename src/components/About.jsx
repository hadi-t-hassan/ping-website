import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref: aboutRef, isInView: aboutInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: pointsRef, isInView: pointsInView } = useScrollAnimation();

  const aboutPoints = [
    "Experienced team of developers and security experts",
    "Cutting-edge technologies and modern development practices",
    "Client-focused approach with personalized solutions",
    "Proven track record of successful project deliveries",
    "Comprehensive support and maintenance services",
    "Agile methodology for faster time-to-market"
  ];

  return (
    <Section id="about" crosses>
      <div className="container">
        <Heading
          title="About Ping"
          text="Your trusted partner in digital transformation"
        />

        <div className="relative">
          <motion.div 
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          >
            <div className="relative z-1 max-w-[50rem] mx-auto">
              <motion.h2 
                variants={fadeInUp}
                className="h2 mb-6"
              >
                Building the Future of Technology
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="body-1 mb-6 text-n-2"
              >
                At Ping, we are passionate about creating innovative digital solutions 
                that drive business growth. Our team combines technical expertise with 
                creative vision to deliver exceptional results for our clients.
              </motion.p>
              <motion.p 
                variants={fadeInUp}
                className="body-1 mb-8 text-n-2"
              >
                From custom web applications to mobile solutions, security testing, 
                and professional training, we provide end-to-end technology services 
                that help businesses thrive in the digital age.
              </motion.p>
              
              <motion.div 
                ref={pointsRef}
                initial="hidden"
                animate={pointsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {aboutPoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="flex items-start p-4 bg-n-7 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <motion.img 
                      src={check} 
                      width={20} 
                      height={20} 
                      alt="Check" 
                      className="mr-3 mt-0.5 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                    <p className="body-2 text-n-1">{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24"
          >
            <motion.div 
              className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-n-8 rounded-[1rem] p-8 lg:p-20">
                <div className="grid gap-8 md:grid-cols-2">
                  <motion.div variants={fadeInLeft}>
                    <h3 className="h3 mb-4">Our Mission</h3>
                    <p className="body-2 text-n-3">
                      To empower businesses with cutting-edge technology solutions 
                      that drive innovation, enhance security, and accelerate growth.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInRight}>
                    <h3 className="h3 mb-4">Our Vision</h3>
                    <p className="body-2 text-n-3">
                      To be the leading technology partner that transforms ideas 
                      into reality through exceptional development and security services.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
