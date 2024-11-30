"use client";
import React, { useEffect } from "react";
// import ServiceTitle from "./_components/ServicesTitle";
// import ServicesVisualImage from "./_components/ServiceViuslaImage";
// import ServiceCardsSection from "./_components/ServicesCards";
// import MortgageCalculator from "./_components/MortageCalculator";

import AOS from "aos";
import "aos/dist/aos.css";
import ServicesVisualImage from "../component/services/ServicesVisualImage";
import ServiceTitle from "../component/services/ServiceTitle";
import ServiceCardsSection from "../component/services/ServiceCardsSection";
import MortageCalculator from "../component/services/MortageCalculator";
import image1 from "../images/sliders/new/4.jpg";







function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="bg-[#111612] overflow-hidden">
      <div data-aos="fade-up">
        {/* <ServicesVisualImage /> */}

        <div className="relative w-full h-screen visual-image-wrap">
    {/* Background image for desktop */}
    <div
      className="hidden md:block absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image1})`,
      }}
    ></div>

    {/* Background image for mobile */}
    <div
      className="md:hidden absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image1})`,
      }}
    ></div>

    {/* Gradients on top and bottom */}
    <div className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"></div>
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"></div>

    {/* Scroll indicator */}
    <div className="absolute bottom-[-9px] md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <div className="w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
      </div>
    </div>

    {/* Info section */}
    <div className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]">
    
    
     
    </div>

    {/* Search tabs */}
    <div className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]">
      <div className="flex space-x-4">
      
     
      </div>
    </div>
  </div>

      </div>

      <div data-aos="fade-left">
        <ServiceTitle />
      </div>

      <div data-aos="fade-up">
        <ServiceCardsSection />
      </div>

       <div data-aos="fade-right">
        <MortageCalculator />
      </div> 
    </div>
  );
}

export default Services;
