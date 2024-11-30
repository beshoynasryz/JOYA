import React from "react";
import image5 from "../../images/home/WhatsApp Image 2024-11-15 at 08.34.21_11b356d2.jpg";

const Presentation = () => {
  return (
    <section className="text-[#EFECE6] py-16 bg-[#111612]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="space-y-8">
              <h6 className="text-5xl md:text-6xl font-bold leading-tight text-[#EFECE6]">
              Step into a World 
                <br />
                of Bespoke Living
              </h6>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3d6a64] to-[#698f8c] rounded-full"></div>
              <p className="text-lg leading-relaxed text-[#EFECE6]">
              At Joya Properties, we specialize in curating an exceptional real estate experience that goes beyond transactions. Our dedicated team connects you with Dubai’s most sought-after properties, offering personalized service and market expertise. Committed to empowering you with tailored solutions that reflect your aspirations, we ensure each property journey is fulfilling and seamless. Explore a world of bespoke properties crafted with care, where each home tells a story. Your journey with Joya Properties begins here, guided by integrity, excellence, and client-centric service. </p>
            
            </div>
          </div>

          {/* Right Column - Image & Call to Action */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative group">
              <img
                src={image5}
                alt="joya properties"
                className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105 w-full"
                style={{ maxHeight: '855px' }}
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#404740]/90 to-transparent rounded-b-lg">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
