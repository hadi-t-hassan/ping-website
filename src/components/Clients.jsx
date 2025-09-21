import Section from "./Section";
import Heading from "./Heading";
import { edtechsLogo, getLogo, ietLogo, ridhaLogo, sadiqLogo, ayatLogo } from "../assets";

const Clients = () => {
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="relative z-1 p-8 bg-n-7 rounded-2xl border border-n-1/10 hover:border-n-1/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-color-1/10 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-n-8 rounded-2xl flex items-center justify-center mb-6 border border-n-1/10 group-hover:border-color-1/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-color-1/20">
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="w-24 h-24 bg-gradient-to-br from-color-1 to-color-2 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ display: client.logo ? 'none' : 'flex' }}
                    >
                      <span className="text-n-1 font-bold text-2xl">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="h4 mb-2 group-hover:text-color-1 transition-colors duration-300">{client.name}</h3>
                  <p className="body-2 text-n-3 group-hover:text-n-2 transition-colors duration-300">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
