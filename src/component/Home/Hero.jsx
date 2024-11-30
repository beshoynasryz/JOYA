import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import images
import image1 from "../../images/sliders/3840x2400/8.png";
import image2 from "../../images/sliders/3840x2400/7.png";
import image3 from "../../images/sliders/3840x2400/6.png";
import image4 from "../../images/sliders/3840x2400/3.png";

// Import CSS
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="relative">
        <div className="absolute z-10 inset-x-0 top-0 h-[300px] bg-gradient-to-t from-transparent to-black"></div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        speed={1500} // Set transition speed for smoothness
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {[image1, image2, image3, image4].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen transition-transform duration-1000 ease-in-out">
              <div className="absolute inset-0">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                />
                <div className="absolute z-[1] inset-x-0 top-[-300px] h-[300px] bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-[60px] z-10 flex flex-col justify-end h-full text-start text-white transition-opacity duration-1000 ease-in-out">
                <div>
                  <h1>
                    <span className="text-white text-[30px] leading-[34px] font-light uppercase">
                    Villa Allegra

                    </span>
                  </h1>
                  <p className="text-base mt-1 leading-4 font-extralight uppercase">AlBARARI</p>
                </div>
              </div>
              {/* Button Positioned at Bottom-Right */}
              <div className="absolute bottom-10 right-10 z-20">
                <a
                  href="https://joya22.vercel.app/Projects/Features2/67434e7c1a8311a148b08797"
                  className="bg-white text-black py-2 px-4 rounded-md font-medium transition duration-300 hover:bg-gray-200"
                >
                  View Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mx-auto h-0 flex items-center z-20 -top-12 justify-center w-fit">
        <div className="relative w-[1px] h-8 bg-transparent overflow-hidden">
          <div className="absolute w-[1px] bg-white animate-slide"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
