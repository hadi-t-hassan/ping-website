import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, scaleIn, staggerContainer } from "../hooks/useScrollAnimation";

const Benefits = () => {
  const { ref: benefitsRef, isInView: benefitsInView } = useScrollAnimation();

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Why Choose Ping for Your Technology Needs"
          text="We deliver exceptional results through innovative solutions and expert expertise"
        />

        <motion.div 
          ref={benefitsRef}
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-wrap gap-10 mb-10"
        >
          {benefits.map((item, index) => (
            <motion.div
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:shadow-2xl transition-shadow duration-500"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <motion.h5 
                  className="h5 mb-5"
                  whileHover={{ color: "#00f6ff" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <motion.img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Arrow />
                  </motion.div>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Benefits;
