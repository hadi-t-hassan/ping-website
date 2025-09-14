import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "pingtech.dev@gmail.com",
      link: "mailto:pingtech.dev@gmail.com"
    },
    {
      icon: "📱",
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
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="relative z-1 max-w-[50rem] mx-auto">
              <h2 className="h2 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="body-1 mb-8 text-n-2">
                Let's discuss how we can help bring your digital vision to life. 
                Our team is ready to provide expert consultation and deliver 
                exceptional results for your business.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                {contactInfo.map((info, index) => (
                  <div key={index} className="p-6 bg-n-7 rounded-2xl border border-n-1/10">
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className="h4 mb-2">{info.title}</h3>
                    <p className="body-2 text-n-3 mb-4">{info.details}</p>
                    <Button 
                      href={info.link} 
                      className="w-full"
                      white
                    >
                      Contact via {info.title}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-n-7 rounded-2xl border border-n-1/10">
                <h3 className="h3 mb-4">Why Choose Ping?</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start">
                    <span className="text-color-1 mr-3">✓</span>
                    <p className="body-2 text-n-2">Expert development team with years of experience</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-color-1 mr-3">✓</span>
                    <p className="body-2 text-n-2">Modern technologies and best practices</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-color-1 mr-3">✓</span>
                    <p className="body-2 text-n-2">Comprehensive security testing services</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-color-1 mr-3">✓</span>
                    <p className="body-2 text-n-2">Professional training and support</p>
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

export default Contact;
