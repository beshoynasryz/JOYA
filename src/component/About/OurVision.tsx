import React from "react";

const OurVision = () => {
  console.log("Our Vision Component Rendered");

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] md:order-2 lg:order-2 py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
              Our Vision
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f1f0ec] whitespace-pre-wrap leading-relaxed">
            Joya Properties aims to become a leading boutique real estate agency
            that goes beyond mere property transactions. Our purpose is to
            empower clients and team members to achieve financial freedom
            through thoughtful, bespoke real estate solutions. By cultivating
            lasting partnerships grounded in trust, personalized service, and
            exceptional market expertise,We strive to become a globally
            recognized agency celebrated for fostering enduring relationships,
            loyalty, and success.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="/about us/WhatsApp Image 2024-11-05 at 03.21.07_ea713e2f.jpg"
          alt="Joya Vision"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default OurVision;
