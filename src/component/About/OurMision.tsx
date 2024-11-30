import React from "react";

const OurMission = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
              Our Mission
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f1f0ec] whitespace-pre-wrap leading-relaxed">
            Joya Properties aims to transform the real estate experience by
            providing personalized service that empowers clients to make
            confident financial decisions. In the short term, the focus is on
            building trust through bespoke solutions and fostering a
            collaborative, growth-driven team culture. Long term, the goal is to
            be globally recognized for creating lasting relationships and
            financial security for both clients and team members, ensuring
            shared success and loyalty.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="/about us/WhatsApp Image 2024-11-05 at 03.22.24_3ebccb90.jpg"
          alt="Aerial View of Dubai"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default OurMission;
