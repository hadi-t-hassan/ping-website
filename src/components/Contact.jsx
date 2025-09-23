import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { gmailIcon, whatsappIcon } from "../assets";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { ref: contactRef, isInView: contactInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();
  const { ref: whyChooseRef, isInView: whyChooseInView } = useScrollAnimation();

  const contactInfo = [
    {
      icon: gmailIcon,
      title: "Email",
      details: "pingtech.dev@gmail.com",
      link: "mailto:pingtech.dev@gmail.com"
    },
    {
      icon: whatsappIcon,
      title: "WhatsApp",
      details: "+961 70 447 725",
      link: "https://wa.me/96170447725"
    }
  ];

  return (
    <Section id="contact" crosses>
      <div className="container">
        <Heading
          title="Contact Us"
          text="Get in touch with our team to discuss your project"
        />

        <div className="relative">
          <motion.div 
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]"
          >
            <div className="relative z-1 max-w-[50rem] mx-auto">
              <motion.h2 
                variants={fadeInUp}
                className="h2 mb-6"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="body-1 mb-8 text-n-2"
              >
                Let's discuss how we can help bring your digital vision to life. 
                Our team is ready to provide expert consultation and deliver 
                exceptional results for your business.
              </motion.p>
              
              <motion.div 
                ref={cardsRef}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto"
              >
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="p-6 bg-n-7 rounded-2xl border border-n-1/10 hover:shadow-lg transition-shadow duration-300"
                  >
                    <motion.div 
                      className="mb-4 flex justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={info.icon} 
                        alt={`${info.title} icon`}
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>
                    <h3 className="h4 mb-2">{info.title}</h3>
                    <p className="body-2 text-n-3 mb-4">{info.details}</p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button 
                        href={info.link} 
                        className="w-full"
                        white
                      >
                        Contact via {info.title}
                      </Button>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                ref={whyChooseRef}
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="mt-12 p-8 bg-n-7 rounded-2xl border border-n-1/10"
              >
                <motion.h3 
                  variants={fadeInUp}
                  className="h3 mb-4"
                >
                  Why Choose Ping?
                </motion.h3>
                <motion.div 
                  variants={staggerContainer}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {[
                    "Expert development team with years of experience",
                    "Modern technologies and best practices",
                    "Comprehensive security testing services",
                    "Professional training and support"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-start hover:bg-n-6 p-2 rounded-lg transition-colors duration-300"
                    >
                      <motion.span 
                        className="text-color-1 mr-3"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        ✓
                      </motion.span>
                      <p className="body-2 text-n-2">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
