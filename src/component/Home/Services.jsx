import React from "react";
import icon1 from "./icons/Commercial.svg";
import icon2 from "./icons/Conveyancing.svg";
import icon5 from "./icons/Property management.svg";
import icon6 from "./icons/Property rental.svg";
import icon7 from "./icons/Real estate buying & selling.svg";
import icon8 from "./icons/Snagging.svg";

const services = [
  {
    title: "Real Estate Buying & Selling",
    description: "Comprehensive support in real estate transactions.",
    icon: icon7,
  },
  {
    title: "Property Rental",
    description: "Connecting tenants with quality rental properties.",
    icon: icon6,
  },
  {
    title: "Off Plan Property",
    description: "Connecting you to top developers for exclusive off-plan deals",
    icon: icon1,
  },
  {
    title: "Commercial",
    description: "Offering specialized services in commercial property.",
    icon: icon1,
  },
  {
    title: "Golden Visa",
    description: "Assistance in acquiring UAE's Golden Visa.",
    icon: icon8,
  },
];

const Services = () => {
  return (
    <section className="py-16 text-[#EFECE6] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#f0ede6]">
          Our Signature Services
        </h2>

        {/* Grid for Main Services */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-[#1a1f21] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group w-72 h-auto min-h-[300px]"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-8 group-hover:bg-opacity-90 transition duration-300">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#faf8f7]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#a2a39b] mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
