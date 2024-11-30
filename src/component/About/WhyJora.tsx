import React from "react";

const WhyJoya = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
            Why Choose Joya Properties ?
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f4f3ef] whitespace-pre-wrap leading-relaxed">
          Joya Properties offers a personalized, client-first approach to real estate. With deep market expertise and a commitment to integrity and excellence, we tailor every experience to meet your unique needs. Discover a real estate journey built on trust, transparency, and exceptional service.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="/about us/WhatsApp Image 2024-11-05 at 03.20.08_7acd7fc2.jpg"
          alt="Why Joya"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default WhyJoya;
