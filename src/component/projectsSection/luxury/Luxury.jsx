import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Luxury() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const featuresCards = [
    {
      title: "District One Villa",
      imgSrc: "/off plane/1/WhatsApp Image 2024-11-05 at 02.53.59_940121d8.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Villa Allegra",
      imgSrc: "/off plane/2/WhatsApp Image 2024-11-05 at 02.56.29_36f40446.jpg",
      description:
        "Experience Luxury Living in Villa Allegra. Situated on the covered Billionaire’s Row of Palm Jumeirah, this exquisite 5-bedroom villa presents an opportunity to live on the most desirable address in Dubai.",
    },
  ];

  const maxDescriptionLength = 140;

  return (
    <div className="bg-[#111612] min-h-screen flex flex-col items-center pt-48 pb-12">
      <h2 className="text-5xl font-semibold text-white mb-14" data-aos="fade-down">
        Luxury
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl px-4 mb-20">
        {featuresCards.map((card, index) => (
          <a
            href="/Projects/Features2"
            key={index}
            className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4">{card.title}</h3>
            <p className="text-[#a0b3b1] text-base leading-relaxed">
              {truncateText(card.description, maxDescriptionLength)}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Luxury;
