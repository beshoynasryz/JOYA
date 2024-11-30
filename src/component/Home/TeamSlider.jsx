import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mail, Phone, Globe } from "lucide-react";
import { Pagination, Autoplay } from "swiper/modules";
import image1 from "../../images/sliders/image 1.png";
import image2 from "../../images/sliders/image 2.png";
import image3 from "../../images/sliders/new/slina.jpg";
import { FaWhatsapp } from "react-icons/fa";

const teamMembers = [

  {
    name: "Mohamed Nabil",
    role: "Co-founder and Managing Director",
    img: image2,
    languages: "English, Arabic",
  },
  {
    name: "Mohammad Rabie",
    role: "Sales and Marketing Manager",
    img: image1,
    languages: "English, Arabic",
  },
  {
    name: "Simona",
    role: "Sales Manager",
    img: image3,
    languages: "English, Bulgarian",
  },

];

const TeamSlider = () => {
  return (
    <section className="py-16 bg-black text-[#EFECE6] flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#f1f0ec]">The Team</h2>
          <h3 className="text-[14px] md:text-xl text-[#f0ede6] mt-2">
          With unrivalled experience in UAE market
          </h3>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet",
            renderBullet: (index, className) =>
              `<span class="${className}" style="background-color: #ffffff; opacity: 0.7; margin: 0 4px;"></span>`,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-lg bg-[#111111] mx-auto p-4 max-w-xs">
                {/* Team Member Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[250px] object-cover object-top rounded-t-lg transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                />

                {/* Member Information */}
                <div className="p-4 text-center bg-[#333333] rounded-b-lg">
                  <h2 className="text-lg font-semibold text-white">{member.name}</h2>
                  <h3 className="text-sm font-light text-[#cccccc]">{member.role}</h3>
                  <p className="text-xs text-[#bfbfbf] mt-2">{member.languages}</p>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-4 mt-4 text-[#bfbfbf]">
                    <Mail size={18} className="hover:text-white transition duration-300" />
                    <FaWhatsapp size={18} className="hover:text-white transition duration-300" />
                   
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
       
      </div>
    </section>
  );
};

export default TeamSlider;
