import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image3 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.09.49_2c7d0f0b.jpg";
import image4 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_5698d1bc.jpg";
import image5 from "../../images/Blogs/WhatsApp Image 2024-11-18 at 22.10.05_bb50a06f.jpg";

function Projects() {
  const offplan = [
    {
      _id: "1",
      title: "DLD’s New Rules Enhance Transparency in Dubai Real Estate Sector",
      description: "Learn about the new rules introduced by the Dubai Land Department aimed at increasing transparency.",
      imgSrcs: [image3],
    },
    {
      _id: "2",
      title: "Unlocking Opportunities in Real Estate",
      description: "Discover the challenges and opportunities that define the journey of a real estate agent in Dubai.",
      imgSrcs: [image4],
    },
    {
      _id: "3",
      title: "Investment Insights: Dubai’s Real Estate Trends",
      description: "Explore key real estate trends shaping the Dubai property market and how to make the best investment decisions.",
      imgSrcs: [image5],
    },
  ];

  const featuresCards = [
    {
      _id: "1",
      title: "DLD’s New Rules Enhance Transparency in Dubai Real Estate Sector",
      description: "Learn about the new rules introduced by the Dubai Land Department aimed at increasing transparency.",
      imgSrcs: [image3],
    },
    {
      _id: "2",
      title: "Unlocking Opportunities in Real Estate",
      description: "Discover the challenges and opportunities that define the journey of a real estate agent in Dubai.",
      imgSrcs: [image4],
    },
    {
      _id: "3",
      title: "Investment Insights: Dubai’s Real Estate Trends",
      description: "Explore key real estate trends shaping the Dubai property market and how to make the best investment decisions.",
      imgSrcs: [image5],
    },
  ];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const maxDescriptionLength = 120;

  return (
    <div className="bg-[#111612] min-h-screen flex flex-col items-center pt-48 pb-12">
      {/* Off Plan Section */}
      <h2 className="text-5xl font-semibold text-white mb-14 mt-20" data-aos="fade-down">
        Off Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-32">
          {offplan.map((card, index) => (
            <a
              href={`/Projects/Off-Plan2/${card._id}`}
              key={index}
              className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={card?.imgSrcs?.[0] || "/default-image.jpg"}
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

      {/* Features Section */}
      <h2 className="text-5xl font-semibold text-white mb-14" data-aos="fade-down">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-20">
        {featuresCards.map((card, index) => (
          <a
            href={`/Projects/Features2/${card._id}`} // Dynamic link for features
            key={index}
            className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={card.imgSrcs?.[0] || "/default-image.jpg"} // Fallback image
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

      {/* Luxury Section */}
      <h2 className="text-5xl font-semibold text-white mb-14" data-aos="fade-down">
        Luxury
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 mb-20">
        {featuresCards.map((card, index) => (
          <a
            href={`/Projects/Features2/${card._id}`} // Dynamic link for luxury
            key={index}
            className="bg-[#1c1e1b] rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={card.imgSrcs?.[0] || "/default-image.jpg"} // Fallback image
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

export default Projects;
