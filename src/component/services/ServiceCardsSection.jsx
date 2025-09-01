import React from "react";
import { motion } from "framer-motion";
import { serviceCardsData } from "./data/serviceCardsData";

const ServiceCardsSection = () => {
  const cards = serviceCardsData;


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
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full brightness-0 invert"
                  />
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
