import React from "react";
import { motion } from "framer-motion";
import icon1 from "./icons/Commercial.svg";
import icon2 from "./icons/Conveyancing.svg";
import icon3 from "./icons/Golden visa (1).svg";
import icon4 from "./icons/Holiday home.svg";
import icon5 from "./icons/Property management.svg";
import icon6 from "./icons/Property rental.svg";
import icon7 from "./icons/Real estate buying & selling.svg";
import icon8 from "./icons/Snagging.svg";
import icon9 from "./icons/house-sale_17675265.svg";

const ServiceCardsSection = () => {
  const cards = [
    {
      title: "Real Estate Buying & Selling",
      description: "Comprehensive support in real estate transactions.",
      icon: icon7,
      isSvg: true,
    },
    {
      title: "Property Rental",
      description: "Connecting tenants with quality rental properties.",
      icon: icon6,
      isSvg: true,
    },
    {
      title: "Off Plan Property Sales",
      description: "Off-plan property sales offer buyers the opportunity to invest in properties.",
      icon: icon1,
      isSvg: true,
    },
    {
      title: "Commercial",
      description: "Offering specialized services in commercial property.",
      icon: icon1,
      isSvg: true,
    },
    {
      title: "Property Management",
      description: "Efficient and reliable management of your properties.",
      icon: icon2,
      isSvg: true,
    },
    {
      title: "Holiday Home – Short Term Rental",
      description: "Turn your property into a high-earning vacation rental.",
      icon: icon4,
      isSvg: true,
    },
    {
      title: "Snagging",
      description: "Detailed property inspections for peace of mind.",
      icon: icon8,
      isSvg: true,
    },
    {
      title: "Conveyancing",
      description: "Smooth legal transactions for property ownership.",
      icon: icon5,
      isSvg: true,
    },
    {
      title: "Golden Visa",
      description: "Assistance in acquiring UAE's Golden Visa.",
      icon: icon3,
      isSvg: true,
    },
    // {
    //   title: "Mortgage Advisory and Calculator",
    //   description: "Get expert guidance on mortgage options tailored for you.",
    //   icon: icon9,
    //   isSvg: true,
    // },
];


  const cardVariants = {
    hover: {
      scale: 1.1, // Makes the card grow larger when hovered
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 45, // Rotates the icon when hovered
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="landing-card-wrapper py-12 bg-[#111612]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card-item group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              variants={cardVariants} // Applies the scaling effect to the card
            >
              <div className="icon-section flex flex-col justify-center items-center bg-[#1b1f1d] h-[260px] rounded-lg transition-transform transform duration-500">
                <motion.div
                  className="w-16 h-16"
                  variants={iconVariants} // Rotate only the hovered card’s icon
                >
                  {card.isSvg ? (
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-full h-full brightness-0 invert"
                    />
                  ) : (
                    <card.icon size={50} className="text-[#faf8f7]" />
                  )}
                </motion.div>
                <h3 className="text-lg mt-4 text-center text-[#faf8f7] font-semibold group-hover:text-[#3d6a64] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-center text-[#a2a39b] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsSection;
