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

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
        <Heading
          title="Our Services"
          text="Comprehensive technology solutions tailored to your business needs"
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col md:flex-row md:items-center h-auto md:h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* Text content - appears first on mobile, right side on desktop */}
            <div className="relative z-1 w-full md:max-w-[17rem] md:ml-auto order-1 md:order-2 mb-8 md:mb-0">
              <h4 className="h4 mb-4">Web Development</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Modern, responsive websites built with cutting-edge technologies
              </p>
              <ul className="body-2">
                {PingServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - appears second on mobile, left side on desktop */}
            <div className="relative w-full md:absolute md:top-0 md:left-0 md:w-full md:h-full pointer-events-none md:w-3/5 xl:w-auto order-2 md:order-1">
              <img
                className="w-full h-[20rem] md:h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Mobile Apps</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Native and cross-platform mobile applications that deliver 
                  exceptional user experiences across all devices.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Security & Training</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Comprehensive penetration testing and professional training 
                  programs to secure and upskill your organization.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
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
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
