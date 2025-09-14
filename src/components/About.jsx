import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";

const About = () => {
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
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="relative z-1 max-w-[50rem] mx-auto">
              <h2 className="h2 mb-6">
                Building the Future of Technology
              </h2>
              <p className="body-1 mb-6 text-n-2">
                At Ping, we are passionate about creating innovative digital solutions 
                that drive business growth. Our team combines technical expertise with 
                creative vision to deliver exceptional results for our clients.
              </p>
              <p className="body-1 mb-8 text-n-2">
                From custom web applications to mobile solutions, security testing, 
                and professional training, we provide end-to-end technology services 
                that help businesses thrive in the digital age.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {aboutPoints.map((point, index) => (
                  <div key={index} className="flex items-start p-4 bg-n-7 rounded-2xl">
                    <img 
                      src={check} 
                      width={20} 
                      height={20} 
                      alt="Check" 
                      className="mr-3 mt-0.5 flex-shrink-0"
                    />
                    <p className="body-2 text-n-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem] p-8 lg:p-20">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="h3 mb-4">Our Mission</h3>
                    <p className="body-2 text-n-3">
                      To empower businesses with cutting-edge technology solutions 
                      that drive innovation, enhance security, and accelerate growth.
                    </p>
                  </div>
                  <div>
                    <h3 className="h3 mb-4">Our Vision</h3>
                    <p className="body-2 text-n-3">
                      To be the leading technology partner that transforms ideas 
                      into reality through exceptional development and security services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
